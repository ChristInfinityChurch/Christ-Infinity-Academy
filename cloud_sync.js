// Christ Infinity Academy — Supabase Cloud Authentication & FERPA-Isolated Sync Engine
(function () {
  const SUPABASE_URL = "https://qvrdbnawpzojyfmvbdkj.supabase.co";
  const SUPABASE_KEY = "sb_publishable_ilZKsuKswv0XZ_9sQa6GSg_lpUXfSGI";
  const SESSION_KEY = "cia_supabase_cloud_session_v1";
  const INTERNAL_AUTH_DOMAIN = "christinfinityacademy.com";

  let session = loadStoredSession();
  let lastSyncTime = null;
  let cloudConnected = false;

  function normalizeUsername(rawInput) {
    const raw = String(rawInput || "").trim().toLowerCase();
    if (!raw) return { ok: false, error: "Please enter a username." };
    // Backward compatibility if an existing account already used a full email
    if (raw.includes("@")) {
      const localPart = raw.split("@")[0].replace(/[^a-z0-9._-]/g, "");
      return { ok: true, username: localPart || raw, authEmail: raw };
    }
    const clean = raw
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9._-]/g, "")
      .replace(/\.{2,}/g, ".")
      .replace(/^[._-]+|[._-]+$/g, "");
    if (clean.length < 3) {
      return { ok: false, error: "Username must be at least 3 letters or numbers (e.g., johnson-family)." };
    }
    if (!/[a-z0-9]/.test(clean)) {
      return { ok: false, error: "Username must include letters or numbers." };
    }
    return {
      ok: true,
      username: clean,
      authEmail: `${clean}@${INTERNAL_AUTH_DOMAIN}`
    };
  }

  function extractDisplayUsername(sessOrUser) {
    if (!sessOrUser) return "";
    if (sessOrUser.username) return sessOrUser.username;
    const u = sessOrUser.user || sessOrUser;
    if (u && u.user_metadata && u.user_metadata.username) return u.user_metadata.username;
    const em = (u && u.email) || "";
    if (em.endsWith(`@${INTERNAL_AUTH_DOMAIN}`)) {
      return em.slice(0, -(`@${INTERNAL_AUTH_DOMAIN}`.length));
    }
    return em ? em.split("@")[0] : "";
  }

  function loadStoredSession() {
    try {
      const raw = localStorage.getItem(SESSION_KEY);
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      if (parsed && parsed.access_token && parsed.user && parsed.user.id) {
        return parsed;
      }
    } catch (e) {
      // ignore
    }
    return null;
  }

  function saveStoredSession(sess) {
    session = sess;
    try {
      if (sess) {
        localStorage.setItem(SESSION_KEY, JSON.stringify(sess));
      } else {
        localStorage.removeItem(SESSION_KEY);
      }
    } catch (e) {
      // ignore
    }
  }

  function getHeaders(useAuthToken) {
    const h = {
      apikey: SUPABASE_KEY,
      "Content-Type": "application/json"
    };
    if (useAuthToken && session && session.access_token) {
      h.Authorization = `Bearer ${session.access_token}`;
    } else {
      h.Authorization = `Bearer ${SUPABASE_KEY}`;
    }
    return h;
  }

  async function verifyInviteCode(code) {
    const cleanCode = String(code || "").trim().toUpperCase();
    if (!cleanCode) return { valid: false, message: "Please enter a Family Invite Code." };

    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/verify_academy_invite_code`, {
        method: "POST",
        headers: getHeaders(false),
        body: JSON.stringify({ p_code: cleanCode })
      });
      if (res.ok) {
        const rows = await res.json();
        const row = Array.isArray(rows) ? rows[0] : rows;
        if (row && row.valid) {
          cloudConnected = true;
          return {
            valid: true,
            role: row.assigned_role || "parent",
            familyLabel: row.family_label || "Approved Family"
          };
        }
        return { valid: false, message: `Invite code "${cleanCode}" was not found or has reached its maximum redemptions.` };
      }
      // If SQL schema hasn't been executed yet in Supabase SQL Editor, allow known starter codes with helpful guidance
      const starterCodes = ["CIA-2026-VANCE", "CIA-2026-PILOT1", "CIA-2026-PILOT2", "CIA-2026-SCHOLAR", "CIA-2026-FACULTY"];
      if (starterCodes.includes(cleanCode)) {
        return {
          valid: true,
          role: cleanCode.includes("FACULTY") ? "teacher" : cleanCode.includes("SCHOLAR") ? "student" : "parent",
          familyLabel: "Approved Pilot Family",
          schemaPending: true
        };
      }
      return { valid: false, message: "Invalid invite code. Contact the Academy Dean for a Family Invite Code." };
    } catch (err) {
      return { valid: false, message: "Could not reach Supabase Auth right now. Check internet connection." };
    }
  }

  async function signUpWithInvite({ username, email, password, familyName, inviteCode, parentPin }) {
    const norm = normalizeUsername(username || email);
    if (!norm.ok) {
      return { ok: false, error: norm.error };
    }
    if (!password || String(password).length < 6) {
      return { ok: false, error: "Password must be at least 6 characters." };
    }

    const check = await verifyInviteCode(inviteCode);
    if (!check.valid) {
      return { ok: false, error: check.message };
    }

    try {
      const res = await fetch(`${SUPABASE_URL}/auth/v1/signup`, {
        method: "POST",
        headers: getHeaders(false),
        body: JSON.stringify({
          email: norm.authEmail,
          password: String(password || ""),
          data: {
            username: norm.username,
            family_name: familyName || check.familyLabel || "Academy Family",
            role: check.role || "parent",
            invite_code: String(inviteCode || "").trim().toUpperCase(),
            parent_pin: String(parentPin || "2026").trim()
          }
        })
      });
      const data = await res.json();
      if (!res.ok) {
        const rawErr = data.msg || data.error_description || data.message || "Sign-up failed.";
        const friendlyErr = /already registered/i.test(rawErr)
          ? `Username "@${norm.username}" is already taken. Try a different username or sign in.`
          : /is invalid|not authorized/i.test(rawErr)
            ? "Supabase is still checking email delivery. In Supabase → Authentication → Providers → Email, turn OFF 'Confirm email', click Save, and try again."
            : rawErr.replace(/email/gi, "username");
        return { ok: false, error: friendlyErr };
      }

      if (data.access_token && data.user) {
        saveStoredSession({
          access_token: data.access_token,
          refresh_token: data.refresh_token,
          user: data.user,
          username: norm.username,
          family_name: familyName || check.familyLabel,
          role: check.role || "parent",
          parent_pin: String(parentPin || "2026").trim()
        });
        cloudConnected = true;

        // Create FERPA-isolated family_accounts row (stores username handle — zero personal email stored)
        await fetch(`${SUPABASE_URL}/rest/v1/family_accounts`, {
          method: "POST",
          headers: { ...getHeaders(true), Prefer: "resolution=merge-duplicates" },
          body: JSON.stringify({
            user_id: data.user.id,
            email: `@${norm.username}`,
            family_name: familyName || check.familyLabel,
            role: check.role || "parent",
            invite_code_used: String(inviteCode || "").trim().toUpperCase(),
            parent_pin: String(parentPin || "2026").trim()
          })
        }).catch(() => {});

        return { ok: true, needsEmailConfirm: false, session };
      }

      return {
        ok: true,
        needsEmailConfirm: true,
        message:
          "Username created, but Supabase still has 'Confirm email' turned ON. In Supabase → Authentication → Providers → Email, toggle OFF 'Confirm email', click Save, then sign in with your username!"
      };
    } catch (err) {
      return { ok: false, error: "Network error contacting Supabase Auth." };
    }
  }

  async function signIn({ username, email, password }) {
    const norm = normalizeUsername(username || email);
    if (!norm.ok) {
      return { ok: false, error: norm.error };
    }

    try {
      const res = await fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=password`, {
        method: "POST",
        headers: getHeaders(false),
        body: JSON.stringify({
          email: norm.authEmail,
          password: String(password || "")
        })
      });
      const data = await res.json();
      if (!res.ok || !data.access_token) {
        const rawErr = data.error_description || data.msg || "Invalid username or password.";
        const friendlyErr = /email not confirmed/i.test(rawErr)
          ? "Turn OFF 'Confirm email' in Supabase → Authentication → Providers → Email so username-only accounts can sign in immediately."
          : /invalid login credentials/i.test(rawErr)
            ? "Invalid username or password. Please check your spelling and try again."
            : rawErr.replace(/email/gi, "username");
        return { ok: false, error: friendlyErr };
      }

      const meta = (data.user && data.user.user_metadata) || {};
      saveStoredSession({
        access_token: data.access_token,
        refresh_token: data.refresh_token,
        user: data.user,
        username: meta.username || norm.username,
        family_name: meta.family_name || "Academy Family",
        role: meta.role || "parent",
        parent_pin: meta.parent_pin || "2026"
      });
      cloudConnected = true;

      // Attempt to pull their private family_accounts profile
      try {
        const profRes = await fetch(`${SUPABASE_URL}/rest/v1/family_accounts?user_id=eq.${data.user.id}&select=*`, {
          headers: getHeaders(true)
        });
        if (profRes.ok) {
          const rows = await profRes.json();
          if (rows && rows[0]) {
            session.family_name = rows[0].family_name || session.family_name;
            session.role = rows[0].role || session.role;
            session.parent_pin = rows[0].parent_pin || session.parent_pin;
            saveStoredSession(session);
          }
        }
      } catch (e) {
        // ignore
      }

      return { ok: true, session };
    } catch (err) {
      return { ok: false, error: "Network error contacting Supabase Auth." };
    }
  }

  async function signOut() {
    if (session && session.access_token) {
      await fetch(`${SUPABASE_URL}/auth/v1/logout`, {
        method: "POST",
        headers: getHeaders(true)
      }).catch(() => {});
    }
    saveStoredSession(null);
    lastSyncTime = null;
  }

  // Extract a lightweight, FERPA-isolated family snapshot (<25 KB) for instant cloud sync
  function buildCompactFamilySnapshot(fullState) {
    if (!fullState) return null;
    const courseProgressMap = {};
    (fullState.courses || []).forEach((c) => {
      courseProgressMap[c.id] = {
        progress: c.progress,
        termGrade: c.termGrade,
        quizAvg: c.quizAvg,
        lessons: (c.lessons || []).map((l) => ({
          id: l.id,
          completed: !!l.completed,
          masteryScore: l.masteryScore || null,
          dailyTasks: l.dailyTasks || null,
          savedWriting: l.dailyWriting ? l.dailyWriting.savedResponse || "" : ""
        })),
        quarterExams: (c.quarterExams || []).map((q) => ({
          quarter: q.quarter,
          completed: !!q.completed,
          score: q.score || null
        }))
      };
    });

    return {
      students: fullState.students,
      assignments: fullState.assignments,
      schedules: fullState.schedules,
      customVideos: fullState.customVideos || {},
      authConfig: fullState.authConfig,
      courseProgressMap,
      syncedAt: new Date().toISOString()
    };
  }

  function extractRealStudents(studentsObj) {
    const clean = {};
    if (!studentsObj || typeof studentsObj !== "object") return clean;
    const keys = Object.keys(studentsObj);
    const isOldVanceDemo = keys.length > 0 && keys.every((k) => ["micah", "hannah", "lucas"].includes(k));
    if (isOldVanceDemo) return clean;
    keys.forEach((k) => {
      if (studentsObj[k] && typeof studentsObj[k] === "object" && studentsObj[k].name) {
        clean[k] = studentsObj[k];
      }
    });
    return clean;
  }

  function applyCompactSnapshotToState(fullState, snap) {
    if (!fullState || !snap) return false;
    const localReal = extractRealStudents(fullState.students);
    const cloudReal = extractRealStudents(snap.students);

    // NEVER overwrite non-empty local children with an empty cloud snapshot.
    // Merge both so cloud updates sync cleanly while newly added local children are never lost.
    const mergedStudents = { ...localReal, ...cloudReal };
    const localHadUnsyncedChildren = Object.keys(localReal).some((k) => !cloudReal[k]);
    fullState.students = mergedStudents;

    if (snap.customVideos && typeof snap.customVideos === "object") {
      fullState.customVideos = { ...(fullState.customVideos || {}), ...snap.customVideos };
    }

    const hasAnyStudents = Object.keys(fullState.students || {}).length > 0;
    if (Array.isArray(snap.assignments) && hasAnyStudents) {
      if (snap.assignments.length > 0 || !Array.isArray(fullState.assignments) || fullState.assignments.length === 0) {
        fullState.assignments = snap.assignments;
      }
    }
    if (snap.schedules && typeof snap.schedules === "object" && hasAnyStudents) {
      fullState.schedules = { ...(fullState.schedules || {}), ...snap.schedules };
    }
    if (snap.courseProgressMap && Array.isArray(fullState.courses) && hasAnyStudents) {
      fullState.courses.forEach((c) => {
        const savedC = snap.courseProgressMap[c.id];
        if (!savedC) return;
        if (typeof savedC.progress === "number") c.progress = savedC.progress;
        if (typeof savedC.termGrade === "number") c.termGrade = savedC.termGrade;
        if (typeof savedC.quizAvg === "number") c.quizAvg = savedC.quizAvg;
        if (Array.isArray(savedC.lessons) && Array.isArray(c.lessons)) {
          savedC.lessons.forEach((sl) => {
            const targetL = c.lessons.find((l) => l.id === sl.id);
            if (targetL) {
              targetL.completed = !!sl.completed;
              targetL.masteryScore = sl.masteryScore;
              if (sl.dailyTasks) targetL.dailyTasks = sl.dailyTasks;
              if (targetL.dailyWriting && sl.savedWriting) targetL.dailyWriting.savedResponse = sl.savedWriting;
            }
          });
        }
        if (Array.isArray(savedC.quarterExams) && Array.isArray(c.quarterExams)) {
          savedC.quarterExams.forEach((sq) => {
            const targetQ = c.quarterExams.find((q) => q.quarter === sq.quarter);
            if (targetQ) {
              targetQ.completed = !!sq.completed;
              targetQ.score = sq.score;
            }
          });
        }
      });
    }

    // If local device had children that weren't in Supabase yet, immediately push merged roster to cloud!
    if (localHadUnsyncedChildren && session && session.access_token) {
      saveCloudSnapshot(fullState, true);
    }
    return true;
  }

  async function refreshAuthSession() {
    if (!session || !session.refresh_token) return false;
    try {
      const res = await fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=refresh_token`, {
        method: "POST",
        headers: getHeaders(false),
        body: JSON.stringify({ refresh_token: session.refresh_token })
      });
      if (!res.ok) return false;
      const data = await res.json();
      if (data && data.access_token) {
        session.access_token = data.access_token;
        if (data.refresh_token) session.refresh_token = data.refresh_token;
        if (data.user) session.user = data.user;
        saveStoredSession(session);
        return true;
      }
    } catch (e) {
      // ignore
    }
    return false;
  }

  let syncDebounceTimer = null;
  async function pushSnapshotNow(fullState) {
    if (!session || !session.access_token || !session.user) return false;
    const compact = buildCompactFamilySnapshot(fullState);
    const doPost = () =>
      fetch(`${SUPABASE_URL}/rest/v1/family_state_snapshots?on_conflict=user_id`, {
        method: "POST",
        headers: { ...getHeaders(true), Prefer: "resolution=merge-duplicates,return=minimal" },
        body: JSON.stringify({
          user_id: session.user.id,
          state_json: compact,
          updated_at: new Date().toISOString()
        })
      });
    try {
      let res = await doPost();
      if (res.status === 401 && (await refreshAuthSession())) {
        res = await doPost();
      }
      if (res.ok) {
        lastSyncTime = new Date().toLocaleTimeString();
        cloudConnected = true;
        const badge = document.getElementById("cloudSyncStatusBadge");
        if (badge) badge.textContent = `☁️ Cloud Synced (${lastSyncTime})`;
        return true;
      }
    } catch (e) {
      // Silently retain localStorage copy if offline
    }
    return false;
  }

  function saveCloudSnapshot(fullState, immediate) {
    if (!session || !session.access_token || !session.user) return;
    if (syncDebounceTimer) clearTimeout(syncDebounceTimer);
    if (immediate) {
      pushSnapshotNow(fullState);
      return;
    }
    syncDebounceTimer = setTimeout(() => {
      pushSnapshotNow(fullState);
    }, 350);
  }

  async function loadCloudSnapshot() {
    if (!session || !session.access_token || !session.user) return null;
    const doGet = () =>
      fetch(
        `${SUPABASE_URL}/rest/v1/family_state_snapshots?user_id=eq.${session.user.id}&select=state_json,updated_at`,
        { headers: getHeaders(true) }
      );
    try {
      let res = await doGet();
      if (res.status === 401 && (await refreshAuthSession())) {
        res = await doGet();
      }
      if (res.ok) {
        const rows = await res.json();
        if (rows && rows[0] && rows[0].state_json) {
          cloudConnected = true;
          lastSyncTime = new Date().toLocaleTimeString();
          return rows[0].state_json;
        }
      }
    } catch (e) {
      // ignore
    }
    return null;
  }

  async function checkCloudConnection() {
    try {
      const res = await fetch(`${SUPABASE_URL}/auth/v1/settings`, {
        headers: { apikey: SUPABASE_KEY }
      });
      cloudConnected = res.ok;
      return res.ok;
    } catch (e) {
      cloudConnected = false;
      return false;
    }
  }

  window.ACADEMY_CLOUD = {
    url: SUPABASE_URL,
    isConfigured: true,
    getSession: () => session,
    getDisplayUsername: () => extractDisplayUsername(session),
    extractDisplayUsername,
    getLastSyncTime: () => lastSyncTime,
    isConnected: () => cloudConnected,
    checkCloudConnection,
    verifyInviteCode,
    signUpWithInvite,
    signIn,
    signOut,
    saveCloudSnapshot,
    loadCloudSnapshot,
    applyCompactSnapshotToState
  };
})();
