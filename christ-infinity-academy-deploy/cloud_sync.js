// Christ Infinity Academy — Supabase Cloud Authentication & FERPA-Isolated Sync Engine
(function () {
  const SUPABASE_URL = "https://qvrdbnawpzojyfmvbdkj.supabase.co";
  const SUPABASE_KEY = "sb_publishable_ilZKsuKswv0XZ_9sQa6GSg_lpUXfSGI";
  const SESSION_KEY = "cia_supabase_cloud_session_v1";

  let session = loadStoredSession();
  let lastSyncTime = null;
  let cloudConnected = false;

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

  async function signUpWithInvite({ email, password, familyName, inviteCode, parentPin }) {
    const check = await verifyInviteCode(inviteCode);
    if (!check.valid) {
      return { ok: false, error: check.message };
    }

    try {
      const res = await fetch(`${SUPABASE_URL}/auth/v1/signup`, {
        method: "POST",
        headers: getHeaders(false),
        body: JSON.stringify({
          email: String(email || "").trim(),
          password: String(password || ""),
          data: {
            family_name: familyName || check.familyLabel || "Academy Family",
            role: check.role || "parent",
            invite_code: String(inviteCode || "").trim().toUpperCase(),
            parent_pin: String(parentPin || "2026").trim()
          }
        })
      });
      const data = await res.json();
      if (!res.ok) {
        return { ok: false, error: data.msg || data.error_description || data.message || "Sign-up failed." };
      }

      if (data.access_token && data.user) {
        saveStoredSession({
          access_token: data.access_token,
          refresh_token: data.refresh_token,
          user: data.user,
          family_name: familyName || check.familyLabel,
          role: check.role || "parent",
          parent_pin: String(parentPin || "2026").trim()
        });
        cloudConnected = true;

        // Create FERPA-isolated family_accounts row (best-effort if SQL schema has been run)
        await fetch(`${SUPABASE_URL}/rest/v1/family_accounts`, {
          method: "POST",
          headers: { ...getHeaders(true), Prefer: "resolution=merge-duplicates" },
          body: JSON.stringify({
            user_id: data.user.id,
            email: data.user.email,
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
        message: "Account created! Check your email inbox to confirm your address, then sign in on the Cloud Sign-In tab."
      };
    } catch (err) {
      return { ok: false, error: "Network error contacting Supabase Auth." };
    }
  }

  async function signIn({ email, password }) {
    try {
      const res = await fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=password`, {
        method: "POST",
        headers: getHeaders(false),
        body: JSON.stringify({
          email: String(email || "").trim(),
          password: String(password || "")
        })
      });
      const data = await res.json();
      if (!res.ok || !data.access_token) {
        return { ok: false, error: data.error_description || data.msg || "Invalid email or password." };
      }

      const meta = (data.user && data.user.user_metadata) || {};
      saveStoredSession({
        access_token: data.access_token,
        refresh_token: data.refresh_token,
        user: data.user,
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
      authConfig: fullState.authConfig,
      courseProgressMap,
      syncedAt: new Date().toISOString()
    };
  }

  function applyCompactSnapshotToState(fullState, snap) {
    if (!fullState || !snap) return false;
    if (snap.students) fullState.students = snap.students;
    if (Array.isArray(snap.assignments)) fullState.assignments = snap.assignments;
    if (snap.schedules) fullState.schedules = snap.schedules;
    if (snap.courseProgressMap && Array.isArray(fullState.courses)) {
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
    return true;
  }

  let syncDebounceTimer = null;
  function saveCloudSnapshot(fullState) {
    if (!session || !session.access_token || !session.user) return;
    if (syncDebounceTimer) clearTimeout(syncDebounceTimer);
    syncDebounceTimer = setTimeout(async () => {
      try {
        const compact = buildCompactFamilySnapshot(fullState);
        const res = await fetch(`${SUPABASE_URL}/rest/v1/family_state_snapshots`, {
          method: "POST",
          headers: { ...getHeaders(true), Prefer: "resolution=merge-duplicates" },
          body: JSON.stringify({
            user_id: session.user.id,
            state_json: compact,
            updated_at: new Date().toISOString()
          })
        });
        if (res.ok) {
          lastSyncTime = new Date().toLocaleTimeString();
          cloudConnected = true;
          const badge = document.getElementById("cloudSyncStatusBadge");
          if (badge) badge.textContent = `☁️ Cloud Synced (${lastSyncTime})`;
        }
      } catch (e) {
        // Silently retain localStorage copy if offline
      }
    }, 650);
  }

  async function loadCloudSnapshot() {
    if (!session || !session.access_token || !session.user) return null;
    try {
      const res = await fetch(
        `${SUPABASE_URL}/rest/v1/family_state_snapshots?user_id=eq.${session.user.id}&select=state_json,updated_at`,
        { headers: getHeaders(true) }
      );
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
