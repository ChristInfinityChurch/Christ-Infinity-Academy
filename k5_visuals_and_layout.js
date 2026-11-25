// Christ Infinity Academy — K–5 Visual Learning Studio, Today's Checklist Launchpad & Storybook Art Engine
(function () {
  // ==================== 1. TODAY'S LEARNING CHECKLIST & GRIFFIN STARS LAUNCHPAD ====================
  window.renderStudentTodaysChecklist = function (student, enrolledCourses, weekNum) {
    if (!student) return "";
    const g = Number(student.grade);
    const isK5 = g >= 0 && g <= 5;
    const isEarly = g >= 0 && g <= 2;
    const gradeLabel = g === 0 ? "Kindergarten" : `Grade ${g}`;
    const courses = enrolledCourses || [];

    let completedLessonsCount = 0;
    let totalTodayCount = courses.length;
    let doneTodayCount = 0;

    courses.forEach((c) => {
      const doneInCourse = (c.lessons || []).filter((l) => l.completed).length;
      completedLessonsCount += doneInCourse;
      if (doneInCourse > 0) doneTodayCount++;
    });

    const starsEarned = completedLessonsCount * 10;
    const pctToday = totalTodayCount > 0 ? Math.round((doneTodayCount / totalTodayCount) * 100) : 0;

    const subjectIcon = (c) => {
      const d = (c.department || "").toLowerCase();
      const code = (c.code || "").toUpperCase();
      if (d.includes("math") || code.startsWith("MATH")) return "🔢";
      if (d.includes("theology") || code.startsWith("THEO")) return "📖";
      if (d.includes("science") || code.startsWith("SCI")) return "🔬";
      if (code.startsWith("ASL")) return "🤟";
      if (d.includes("computer") || code.startsWith("CS")) return "💻";
      if (d.includes("art") || code.startsWith("ART")) return "🎨";
      if (code.startsWith("MUS")) return "🎵";
      if (d.includes("literature") || code.startsWith("ELA") || code.startsWith("LIT")) return "📚";
      if (d.includes("history") || code.startsWith("HIST")) return "🗺️";
      if (d.includes("career") || code.startsWith("REAL") || code.startsWith("FIN") || code.startsWith("TRD")) return "💼";
      return "⭐";
    };

    const bannerImg = isK5
      ? `<div style="width:118px; height:118px; border-radius:16px; overflow:hidden; border:3px solid var(--gold-400); flex-shrink:0; box-shadow:0 6px 18px rgba(0,0,0,0.22); background:#FAF8F5;">
           <img src="k5_explorers_banner.jpg" alt="Griffin Junior Explorers" style="width:100%; height:100%; object-fit:cover; display:block;" />
         </div>`
      : `<div style="width:76px; height:76px; border-radius:14px; overflow:hidden; border:2px solid var(--gold-400); flex-shrink:0; background:#FAF8F5;">
           <img src="griffin_mascot.jpg" alt="Christ Infinity Griffins Crest" style="width:100%; height:100%; object-fit:cover; display:block;" />
         </div>`;

    const greetingLine = isEarly
      ? `☀️ Hi ${student.name}! Ready for today's Griffin Adventure?`
      : isK5
        ? `☀️ Welcome, ${student.name}! Here is your ${gradeLabel} checklist for today`
        : `☀️ Today's Mission — ${student.name} (${gradeLabel} · Week ${weekNum || 1})`;

    const helperLine = isEarly
      ? "Tap any bright box below to start! You can press the Listen button inside every lesson."
      : isK5
        ? "Pick a class below to start Week " + (weekNum || 1) + ". Finish each step to earn Griffin Stars!"
        : "Launch any enrolled course below, read a Digital Library book, or take a Public-Sector EOG/EOC Final Exam.";

    const tilesHtml =
      courses.length === 0
        ? `<div style="grid-column:1 / -1; background:rgba(255,255,255,0.1); padding:1rem; border-radius:10px; color:#E2E8F0; font-size:0.9rem;">
             No courses chosen yet — open <strong>Parent Portal → Edit Courses</strong> to pick classes for ${student.name}.
           </div>`
        : courses
            .map((c) => {
              const doneInC = (c.lessons || []).filter((l) => l.completed).length;
              const isDone = doneInC > 0;
              return `
            <button
              type="button"
              data-open-course-lesson="${c.id}"
              style="text-align:left; cursor:pointer; padding:${isK5 ? "0.95rem 1rem" : "0.8rem 0.95rem"}; border-radius:${isK5 ? "14px" : "10px"}; border:2px solid ${
                isDone ? "#34D399" : "rgba(255,255,255,0.22)"
              }; background:${
                isDone ? "rgba(16,185,129,0.2)" : "rgba(255,255,255,0.96)"
              }; color:${isDone ? "#FFFFFF" : "var(--navy-900)"}; display:flex; flex-direction:column; justify-content:space-between; gap:0.45rem; transition:transform 0.15s ease; box-shadow:0 3px 10px rgba(0,0,0,0.12);"
            >
              <div style="display:flex; justify-content:space-between; align-items:center; width:100%;">
                <span style="font-size:${isK5 ? "1.45rem" : "1.15rem"};">${subjectIcon(c)}</span>
                <span class="badge ${isDone ? "badge-emerald" : "badge-gold"}" style="font-size:0.68rem;">
                  ${isDone ? "✓ Started" : `Week ${weekNum || 1} · Day 1`}
                </span>
              </div>
              <div>
                <div style="font-weight:700; font-size:${isK5 ? "0.98rem" : "0.88rem"}; line-height:1.25;">${c.title.split(":")[0]}</div>
                <div style="font-size:0.75rem; opacity:0.8; margin-top:0.15rem;">${c.code} · ${isDone ? `${doneInC}/5 Days Done` : "Tap to Start →"}</div>
              </div>
            </button>
          `;
            })
            .join("");

    return `
      <div class="card-panel" style="margin-bottom:1.5rem; background:${
        isK5
          ? "linear-gradient(135deg, #13315C 0%, #1D4E89 55%, #1B6B5F 100%)"
          : "linear-gradient(135deg, #0A192F 0%, #162E52 100%)"
      }; color:#FFFFFF; border:2px solid var(--gold-500); border-radius:${isK5 ? "18px" : "12px"};">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem; margin-bottom:1.1rem;">
          <div style="display:flex; align-items:center; gap:1rem; flex:1; min-width:260px;">
            ${bannerImg}
            <div>
              <div style="display:flex; gap:0.45rem; flex-wrap:wrap; margin-bottom:0.35rem;">
                <span class="badge badge-gold">${isK5 ? "🌟 GRIFFIN JUNIOR EXPLORERS · " + gradeLabel.toUpperCase() : "🏛️ COLLEGIATE SCHOLARS · " + gradeLabel.toUpperCase()}</span>
                <span class="badge badge-emerald">⭐ ${starsEarned} Griffin Stars</span>
              </div>
              <h2 style="font-family:var(--font-serif); font-size:${isK5 ? "1.65rem" : "1.45rem"}; color:#FFFFFF; margin:0 0 0.2rem;">${greetingLine}</h2>
              <p style="font-size:${isK5 ? "0.94rem" : "0.86rem"}; color:#E2E8F0; margin:0;">${helperLine}</p>
            </div>
          </div>
          <div style="display:flex; flex-direction:column; gap:0.45rem; min-width:190px;">
            <div style="background:rgba(255,255,255,0.12); padding:0.55rem 0.8rem; border-radius:10px;">
              <div style="display:flex; justify-content:space-between; font-size:0.76rem; font-family:var(--font-mono); margin-bottom:0.25rem;">
                <span>TODAY'S CHECKLIST</span>
                <strong>${doneTodayCount}/${totalTodayCount} (${pctToday}%)</strong>
              </div>
              <div class="progress-bar-bg" style="background:rgba(255,255,255,0.22); height:8px;">
                <div class="progress-bar-fill" style="width:${pctToday}%; background:var(--gold-400);"></div>
              </div>
            </div>
            <div style="display:flex; gap:0.4rem; flex-wrap:wrap;">
              <button type="button" class="btn btn-secondary btn-sm" data-nav="library" style="flex:1;">📚 ${isK5 ? "K–5 Books" : "Library"}</button>
              <button type="button" class="btn btn-outline btn-sm" onclick="window.openEogEocExamCenter && window.openEogEocExamCenter()" style="flex:1; color:#FFFFFF; border-color:rgba(255,255,255,0.45);">🏛️ EOG/EOC</button>
            </div>
          </div>
        </div>

        <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(${isK5 ? "215px" : "195px"}, 1fr)); gap:0.7rem;">
          ${tilesHtml}
        </div>
      </div>
    `;
  };

  // ==================== 2. K–5 STORYBOOK ILLUSTRATED SCENE BANNER FOR DIGITAL LIBRARY ====================
  window.renderK5StorybookSceneBanner = function (book) {
    if (!book) return "";
    const rl = String(book.readingLevel || "");
    const isK5 = ["K", "0", "1", "2", "3", "4", "5"].includes(rl);
    if (!isK5) return "";

    const gradeBadge = rl === "K" || rl === "0" ? "KINDERGARTEN EARLY READER" : `GRADE ${rl} ILLUSTRATED EDITION`;
    return `
      <div style="position:relative; border-radius:14px; overflow:hidden; margin-bottom:1.1rem; border:2px solid var(--gold-500); box-shadow:0 6px 20px rgba(15,30,54,0.12);">
        <img src="k5_storybook_scene.jpg" alt="${book.title} Storybook Illustration" style="width:100%; height:185px; object-fit:cover; display:block;" />
        <div style="position:absolute; inset:0; background:linear-gradient(180deg, rgba(15,30,54,0.08) 0%, rgba(15,30,54,0.78) 100%); display:flex; align-items:flex-end; justify-content:space-between; padding:1rem 1.25rem; flex-wrap:wrap; gap:0.5rem;">
          <div>
            <span class="badge badge-gold">${gradeBadge} · ${book.shelf.toUpperCase()}</span>
            <div style="font-family:var(--font-serif); font-size:1.4rem; color:#FFFFFF; margin-top:0.2rem;">${book.title}</div>
          </div>
          <span style="background:rgba(255,255,255,0.18); backdrop-filter:blur(6px); color:#FFFFFF; padding:0.35rem 0.7rem; border-radius:999px; font-size:0.78rem; font-weight:600;">
            🔊 Tip: Tap "Read Chapter Aloud" above to listen!
          </span>
        </div>
      </div>
    `;
  };

  // ==================== 3. BRIGHT K–5 & ELECTIVE VISUAL LEARNING DIAGRAMS ====================
  const previousDiagramFn = window.renderCourseInteractiveDiagramHTML;

  window.renderCourseInteractiveDiagramHTML = function (course, lesson, weekNum) {
    if (!course) return "";
    const g = (course.gradeLevels && course.gradeLevels[0]) ?? 6;
    const dept = (course.department || "").toLowerCase();
    const code = (course.code || "").toUpperCase();

    // K–2 MATH VISUAL: Ten-Frame Making-10 + Coin Values
    if ((dept.includes("math") || code.startsWith("MATH")) && g <= 2) {
      return `
        <div class="card-panel" style="margin-top:0.9rem; background:linear-gradient(180deg,#FFFDF6 0%,#FFFFFF 100%); border:2px solid var(--gold-400); border-radius:14px;">
          <span class="mono-label" style="color:var(--gold-600);">🎨 VISUAL MATH HELPER · MAKING 10 &amp; COUNTING COINS</span>
          <h4 style="margin:0.2rem 0 0.7rem; color:var(--navy-900); font-size:1.1rem;">See How Numbers Fit Together!</h4>
          <svg viewBox="0 0 680 185" width="100%" style="max-height:195px; display:block;" role="img" aria-label="Ten Frame and Coin Chart">
            <rect x="8" y="10" width="320" height="165" rx="14" fill="#F0F7FF" stroke="#3B82F6" stroke-width="2"/>
            <text x="168" y="34" text-anchor="middle" font-weight="700" font-size="14" fill="#0F1E36">TEN-FRAME: 8 + 2 = 10!</text>
            <g transform="translate(38,48)">
              <rect x="0" y="0" width="50" height="44" rx="6" fill="#FFFFFF" stroke="#93C5FD" stroke-width="2"/><circle cx="25" cy="22" r="14" fill="#2563EB"/>
              <rect x="52" y="0" width="50" height="44" rx="6" fill="#FFFFFF" stroke="#93C5FD" stroke-width="2"/><circle cx="77" cy="22" r="14" fill="#2563EB"/>
              <rect x="104" y="0" width="50" height="44" rx="6" fill="#FFFFFF" stroke="#93C5FD" stroke-width="2"/><circle cx="129" cy="22" r="14" fill="#2563EB"/>
              <rect x="156" y="0" width="50" height="44" rx="6" fill="#FFFFFF" stroke="#93C5FD" stroke-width="2"/><circle cx="181" cy="22" r="14" fill="#2563EB"/>
              <rect x="208" y="0" width="50" height="44" rx="6" fill="#FFFFFF" stroke="#93C5FD" stroke-width="2"/><circle cx="233" cy="22" r="14" fill="#2563EB"/>
              <rect x="0" y="48" width="50" height="44" rx="6" fill="#FFFFFF" stroke="#93C5FD" stroke-width="2"/><circle cx="25" cy="70" r="14" fill="#2563EB"/>
              <rect x="52" y="48" width="50" height="44" rx="6" fill="#FFFFFF" stroke="#93C5FD" stroke-width="2"/><circle cx="77" cy="70" r="14" fill="#2563EB"/>
              <rect x="104" y="48" width="50" height="44" rx="6" fill="#FFFFFF" stroke="#93C5FD" stroke-width="2"/><circle cx="129" cy="70" r="14" fill="#2563EB"/>
              <rect x="156" y="48" width="50" height="44" rx="6" fill="#FEF3C7" stroke="#F59E0B" stroke-width="2"/><circle cx="181" cy="70" r="14" fill="#F59E0B"/>
              <rect x="208" y="48" width="50" height="44" rx="6" fill="#FEF3C7" stroke="#F59E0B" stroke-width="2"/><circle cx="233" cy="70" r="14" fill="#F59E0B"/>
            </g>
            <text x="168" y="160" text-anchor="middle" font-size="12" fill="#1E3A8A">8 Blue Dots + 2 Gold Dots = 1 Full Ten!</text>

            <rect x="344" y="10" width="328" height="165" rx="14" fill="#F0FDF4" stroke="#10B981" stroke-width="2"/>
            <text x="508" y="34" text-anchor="middle" font-weight="700" font-size="14" fill="#064E3B">COIN VALUE CHART</text>
            <circle cx="395" cy="95" r="26" fill="#D97706" stroke="#92400E" stroke-width="2.5"/><text x="395" y="100" text-anchor="middle" font-weight="700" font-size="14" fill="#FFF">1¢</text><text x="395" y="140" text-anchor="middle" font-size="11" font-weight="700" fill="#064E3B">Penny</text>
            <circle cx="468" cy="95" r="28" fill="#94A3B8" stroke="#475569" stroke-width="2.5"/><text x="468" y="100" text-anchor="middle" font-weight="700" font-size="14" fill="#FFF">5¢</text><text x="468" y="140" text-anchor="middle" font-size="11" font-weight="700" fill="#064E3B">Nickel</text>
            <circle cx="542" cy="95" r="24" fill="#CBD5E1" stroke="#475569" stroke-width="2.5"/><text x="542" y="100" text-anchor="middle" font-weight="700" font-size="13" fill="#0F172A">10¢</text><text x="542" y="140" text-anchor="middle" font-size="11" font-weight="700" fill="#064E3B">Dime</text>
            <circle cx="618" cy="95" r="32" fill="#E2E8F0" stroke="#334155" stroke-width="2.5"/><text x="618" y="100" text-anchor="middle" font-weight="700" font-size="15" fill="#0F172A">25¢</text><text x="618" y="140" text-anchor="middle" font-size="11" font-weight="700" fill="#064E3B">Quarter</text>
          </svg>
        </div>
      `;
    }

    // GRADES 3–5 MATH VISUAL: Fraction Pizza + Area/Volume Visual
    if ((dept.includes("math") || code.startsWith("MATH")) && g >= 3 && g <= 5) {
      return `
        <div class="card-panel" style="margin-top:0.9rem; background:linear-gradient(180deg,#FFFDF6 0%,#FFFFFF 100%); border:2px solid var(--gold-400); border-radius:14px;">
          <span class="mono-label" style="color:var(--gold-600);">🍕 VISUAL MATH BLUEPRINT · FRACTIONS, AREA &amp; VOLUME (GRADES 3–5)</span>
          <h4 style="margin:0.2rem 0 0.7rem; color:var(--navy-900); font-size:1.1rem;">Picture It Before You Calculate!</h4>
          <svg viewBox="0 0 680 185" width="100%" style="max-height:195px; display:block;" role="img" aria-label="Fraction Pizza and Rectangle Area Diagram">
            <rect x="8" y="10" width="320" height="165" rx="14" fill="#FFFBEB" stroke="#F59E0B" stroke-width="2"/>
            <text x="168" y="34" text-anchor="middle" font-weight="700" font-size="13.5" fill="#78350F">FRACTIONS: 3/8 + 2/8 = 5/8</text>
            <g transform="translate(115,102)">
              <circle cx="0" cy="0" r="52" fill="#FEF3C7" stroke="#B45309" stroke-width="2.5"/>
              <path d="M0,0 L0,-52 A52,52 0 0,1 36.8,-36.8 Z" fill="#F59E0B" stroke="#B45309" stroke-width="1.5"/>
              <path d="M0,0 L36.8,-36.8 A52,52 0 0,1 52,0 Z" fill="#F59E0B" stroke="#B45309" stroke-width="1.5"/>
              <path d="M0,0 L52,0 A52,52 0 0,1 36.8,36.8 Z" fill="#F59E0B" stroke="#B45309" stroke-width="1.5"/>
              <path d="M0,0 L36.8,36.8 A52,52 0 0,1 0,52 Z" fill="#10B981" stroke="#065F46" stroke-width="1.5"/>
              <path d="M0,0 L0,52 A52,52 0 0,1 -36.8,36.8 Z" fill="#10B981" stroke="#065F46" stroke-width="1.5"/>
              <line x1="-52" y1="0" x2="52" y2="0" stroke="#B45309" stroke-width="1.2"/>
              <line x1="0" y1="-52" x2="0" y2="52" stroke="#B45309" stroke-width="1.2"/>
              <line x1="-36.8" y1="-36.8" x2="36.8" y2="36.8" stroke="#B45309" stroke-width="1.2"/>
              <line x1="-36.8" y1="36.8" x2="36.8" y2="-36.8" stroke="#B45309" stroke-width="1.2"/>
            </g>
            <text x="248" y="86" text-anchor="middle" font-size="12" font-weight="700" fill="#B45309">3 Gold Slices</text>
            <text x="248" y="106" text-anchor="middle" font-size="12" font-weight="700" fill="#047857">+ 2 Green Slices</text>
            <text x="248" y="128" text-anchor="middle" font-size="13" font-weight="700" fill="#0F1E36">= 5/8 Total!</text>

            <rect x="344" y="10" width="328" height="165" rx="14" fill="#EFF6FF" stroke="#2563EB" stroke-width="2"/>
            <text x="508" y="34" text-anchor="middle" font-weight="700" font-size="13.5" fill="#1E3A8A">AREA GRID: 6 × 4 = 24 SQ UNITS</text>
            <g transform="translate(418,52)">
              <rect x="0" y="0" width="180" height="84" fill="#BFDBFE" stroke="#1D4ED8" stroke-width="2.5"/>
              <line x1="30" y1="0" x2="30" y2="84" stroke="#60A5FA"/><line x1="60" y1="0" x2="60" y2="84" stroke="#60A5FA"/>
              <line x1="90" y1="0" x2="90" y2="84" stroke="#60A5FA"/><line x1="120" y1="0" x2="120" y2="84" stroke="#60A5FA"/>
              <line x1="150" y1="0" x2="150" y2="84" stroke="#60A5FA"/>
              <line x1="0" y1="21" x2="180" y2="21" stroke="#60A5FA"/><line x1="0" y1="42" x2="180" y2="42" stroke="#60A5FA"/><line x1="0" y1="63" x2="180" y2="63" stroke="#60A5FA"/>
              <text x="90" y="104" text-anchor="middle" font-size="12" font-weight="700" fill="#1E3A8A">Length = 6 units</text>
              <text x="-14" y="46" text-anchor="end" font-size="12" font-weight="700" fill="#1E3A8A">W=4</text>
            </g>
          </svg>
        </div>
      `;
    }

    // K–5 BIBLE / THEOLOGY VISUAL: 6 Days of Creation 3+3 Matching Pattern!
    if ((dept.includes("theology") || code.startsWith("THEO")) && g <= 5) {
      return `
        <div class="card-panel" style="margin-top:0.9rem; background:linear-gradient(180deg,#FFFDF7 0%,#FFFFFF 100%); border:2px solid var(--gold-400); border-radius:14px;">
          <span class="mono-label" style="color:var(--gold-600);">✨ VISUAL BIBLE MAP · GOD'S ORDERLY 3 + 3 CREATION PATTERN (GENESIS 1)</span>
          <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap:0.55rem; margin-top:0.6rem;">
            <div style="background:#EFF6FF; border:1.5px solid #3B82F6; border-radius:10px; padding:0.65rem; text-align:center;">
              <div style="font-size:1.35rem;">☀️ 🌙</div>
              <strong style="font-size:0.84rem; color:#1E3A8A;">Day 1 → Day 4</strong>
              <div style="font-size:0.76rem; color:#334155;">Light &amp; Day/Night → Sun, Moon &amp; Stars</div>
            </div>
            <div style="background:#ECFEFF; border:1.5px solid #06B6D4; border-radius:10px; padding:0.65rem; text-align:center;">
              <div style="font-size:1.35rem;">🌊 🐦 🐠</div>
              <strong style="font-size:0.84rem; color:#155E75;">Day 2 → Day 5</strong>
              <div style="font-size:0.76rem; color:#334155;">Sky &amp; Oceans → Birds &amp; Fish</div>
            </div>
            <div style="background:#F0FDF4; border:1.5px solid #10B981; border-radius:10px; padding:0.65rem; text-align:center;">
              <div style="font-size:1.35rem;">🌿 🦁 👨‍👩‍👧</div>
              <strong style="font-size:0.84rem; color:#065F46;">Day 3 → Day 6</strong>
              <div style="font-size:0.76rem; color:#334155;">Dry Land &amp; Plants → Animals &amp; People</div>
            </div>
          </div>
        </div>
      `;
    }

    // ASL VISUAL CARD: Eyebrows Up vs. Down + 5 Parameters
    if (code.startsWith("ASL")) {
      return `
        <div class="card-panel" style="margin-top:0.9rem; background:#F5F3FF; border:2px solid #8B5CF6; border-radius:14px;">
          <span class="mono-label" style="color:#6D28D9;">🤟 ASL VISUAL CHEAT SHEET · FACIAL GRAMMAR &amp; 5 PARAMETERS</span>
          <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap:0.65rem; margin-top:0.55rem;">
            <div style="background:#FFFFFF; border-radius:10px; padding:0.7rem; border:1px solid #DDD6FE;">
              <div style="font-size:1.4rem;">😯 ⬆️ Eyebrows UP</div>
              <strong style="color:#4C1D95;">Yes / No Questions</strong>
              <div style="font-size:0.8rem; color:#475569;">Raise eyebrows + tilt head slightly forward ("ARE YOU READY?")</div>
            </div>
            <div style="background:#FFFFFF; border-radius:10px; padding:0.7rem; border:1px solid #DDD6FE;">
              <div style="font-size:1.4rem;">🤨 ⬇️ Eyebrows DOWN</div>
              <strong style="color:#4C1D95;">Wh-Questions (Who, What, Where)</strong>
              <div style="font-size:0.8rem; color:#475569;">Furrow eyebrows gently down ("YOUR NAME WHAT?")</div>
            </div>
            <div style="background:#FFFFFF; border-radius:10px; padding:0.7rem; border:1px solid #DDD6FE;">
              <div style="font-size:1.4rem;">✋ 5 Building Blocks</div>
              <strong style="color:#4C1D95;">Every ASL Sign Uses:</strong>
              <div style="font-size:0.8rem; color:#475569;">Handshape · Location · Movement · Palm Direction · Expression</div>
            </div>
          </div>
        </div>
      `;
    }

    // CODING VISUAL CARD: Block-Code Flowchart
    if (code.startsWith("CS") || dept.includes("computer")) {
      return `
        <div class="card-panel" style="margin-top:0.9rem; background:#0F172A; color:#FFFFFF; border:2px solid #38BDF8; border-radius:14px;">
          <span class="mono-label" style="color:#38BDF8;">💻 VISUAL CODE FLOWCHART · HOW GAMES &amp; APPS THINK</span>
          <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:0.5rem; margin-top:0.65rem;">
            <div style="background:#10B981; padding:0.5rem 0.85rem; border-radius:999px; font-weight:700; font-size:0.82rem;">▶ START (score = 0)</div>
            <span style="color:#38BDF8; font-weight:700;">→</span>
            <div style="background:#3B82F6; padding:0.5rem 0.85rem; border-radius:8px; font-weight:700; font-size:0.82rem;">🔁 LOOP: Collect Star (+10)</div>
            <span style="color:#38BDF8; font-weight:700;">→</span>
            <div style="background:#F59E0B; color:#0F172A; padding:0.5rem 0.85rem; border-radius:8px; font-weight:700; font-size:0.82rem;">❓ IF score ≥ 100</div>
            <span style="color:#38BDF8; font-weight:700;">→</span>
            <div style="background:#8B5CF6; padding:0.5rem 0.85rem; border-radius:999px; font-weight:700; font-size:0.82rem;">🏆 SHOW "YOU WIN!"</div>
          </div>
        </div>
      `;
    }

    // ART & MUSIC VISUAL CARD: Color Wheel & Treble Clef
    if (code.startsWith("ART") || code.startsWith("MUS") || dept.includes("art") || dept.includes("music")) {
      return `
        <div class="card-panel" style="margin-top:0.9rem; background:#FFFDF7; border:2px solid #EC4899; border-radius:14px;">
          <span class="mono-label" style="color:#BE185D;">🎨 CREATIVE STUDIO VISUAL · COLOR WHEEL &amp; MUSICAL NOTES</span>
          <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap:0.7rem; margin-top:0.55rem;">
            <div style="background:#FFFFFF; padding:0.75rem; border-radius:10px; border:1px solid #FBCFE8;">
              <strong style="color:#0F1E36;">Primary → Secondary Colors</strong>
              <div style="display:flex; gap:0.4rem; align-items:center; margin-top:0.45rem; flex-wrap:wrap; font-size:0.8rem; font-weight:700;">
                <span style="background:#EF4444; color:#FFF; padding:0.2rem 0.5rem; border-radius:6px;">Red</span> +
                <span style="background:#FACC15; color:#0F1E36; padding:0.2rem 0.5rem; border-radius:6px;">Yellow</span> =
                <span style="background:#F97316; color:#FFF; padding:0.2rem 0.5rem; border-radius:6px;">Orange</span>
              </div>
              <div style="display:flex; gap:0.4rem; align-items:center; margin-top:0.35rem; flex-wrap:wrap; font-size:0.8rem; font-weight:700;">
                <span style="background:#3B82F6; color:#FFF; padding:0.2rem 0.5rem; border-radius:6px;">Blue</span> +
                <span style="background:#FACC15; color:#0F1E36; padding:0.2rem 0.5rem; border-radius:6px;">Yellow</span> =
                <span style="background:#22C55E; color:#FFF; padding:0.2rem 0.5rem; border-radius:6px;">Green</span>
              </div>
            </div>
            <div style="background:#FFFFFF; padding:0.75rem; border-radius:10px; border:1px solid #FBCFE8;">
              <strong style="color:#0F1E36;">🎵 Treble Clef Memory Trick</strong>
              <div style="font-size:0.82rem; color:#334155; margin-top:0.35rem;">
                <strong>Spaces spell:</strong> <span style="color:#BE185D; font-weight:700;">F - A - C - E</span><br/>
                <strong>Lines:</strong> <span style="color:#1D4ED8; font-weight:700;">E-G-B-D-F</span> (Every Good Boy Does Fine)
              </div>
            </div>
          </div>
        </div>
      `;
    }

    // K–5 SCIENCE VISUAL: 6-Step Scientific Method Path
    if ((dept.includes("science") || code.startsWith("SCI")) && g <= 5) {
      return `
        <div class="card-panel" style="margin-top:0.9rem; background:#F0FDF4; border:2px solid #10B981; border-radius:14px;">
          <span class="mono-label" style="color:#047857;">🔬 VISUAL SCIENCE PATH · 6 SIMPLE STEPS TO TEST ANY IDEA</span>
          <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap:0.45rem; margin-top:0.55rem; text-align:center;">
            <div style="background:#FFFFFF; padding:0.55rem; border-radius:10px; border:1px solid #A7F3D0;"><div style="font-size:1.2rem;">❓</div><strong style="font-size:0.78rem;">1. Question</strong></div>
            <div style="background:#FFFFFF; padding:0.55rem; border-radius:10px; border:1px solid #A7F3D0;"><div style="font-size:1.2rem;">📚</div><strong style="font-size:0.78rem;">2. Research</strong></div>
            <div style="background:#FFFFFF; padding:0.55rem; border-radius:10px; border:1px solid #A7F3D0;"><div style="font-size:1.2rem;">💡</div><strong style="font-size:0.78rem;">3. Hypothesis</strong></div>
            <div style="background:#FFFFFF; padding:0.55rem; border-radius:10px; border:1px solid #A7F3D0;"><div style="font-size:1.2rem;">🧪</div><strong style="font-size:0.78rem;">4. Fair Test</strong></div>
            <div style="background:#FFFFFF; padding:0.55rem; border-radius:10px; border:1px solid #A7F3D0;"><div style="font-size:1.2rem;">📊</div><strong style="font-size:0.78rem;">5. Data</strong></div>
            <div style="background:#FFFFFF; padding:0.55rem; border-radius:10px; border:1px solid #A7F3D0;"><div style="font-size:1.2rem;">🏆</div><strong style="font-size:0.78rem;">6. Conclusion</strong></div>
          </div>
        </div>
      `;
    }

    if (typeof previousDiagramFn === "function") {
      return previousDiagramFn(course, lesson, weekNum);
    }
    return "";
  };
})();
