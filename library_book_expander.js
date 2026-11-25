// Christ Infinity Academy — Full 6-Chapter Digital Library Expander & English Class Literature Linker
// Upgrades all 62+ Library Books from 3 short chapters into rich 6-chapter multi-paragraph books
// AND links real grade-matched storybooks/novels directly into every Reading / English / Literature lesson!

(function () {
  const dataRef =
    typeof INITIAL_ACADEMY_DATA !== "undefined"
      ? INITIAL_ACADEMY_DATA
      : window.INITIAL_ACADEMY_DATA;

  function parseBookGrade(rl) {
    const s = String(rl || "6").trim().toUpperCase();
    if (s === "K" || s === "0") return 0;
    const m = s.match(/\d+/);
    return m ? parseInt(m[0], 10) : 6;
  }

  function buildContinuationChapters(book) {
    const g = parseBookGrade(book.readingLevel);
    const title = book.title || "Academy Reader";
    const shelf = book.shelf || "Storybook";
    const isTextbook = /textbook/i.test(shelf);
    const isEarly = g <= 2;
    const isUpperElem = g >= 3 && g <= 5;
    const desc = book.description || "An inspiring Christ Infinity Academy reading volume.";

    // Enrich existing short chapters (1–3) with vivid reading-comprehension boxes & richer prose
    const existing = Array.isArray(book.chapters) ? book.chapters : [];
    existing.forEach((ch, idx) => {
      if (!ch._expandedRich && ch.content && ch.content.length < 720) {
        const extraPara = isTextbook
          ? `<p><strong>Real-World Mastery Spotlight (Section ${idx + 1}.2):</strong> As you study <em>${ch.title}</em> in <strong>${title}</strong>, pause and connect this concept to something you can observe or measure today. Strong scholars don't just memorize words—they ask <em>why</em> the principle works, test a concrete example on scratch paper, and explain the rule out loud in one clear sentence.</p>
             <div style="background:#FFFDF6; border-left:3px solid #C59B27; padding:0.65rem 0.9rem; border-radius:6px; margin-top:0.65rem; font-size:0.88rem;">
               <strong>📝 Pause &amp; Think Check:</strong> What is the single most important rule or discovery in <em>${ch.title}</em>? Explain it to a parent or write one example in your notebook before turning to the next chapter!
             </div>`
          : isEarly
            ? `<p>Every step of the journey in <strong>${title}</strong> brought a brand-new surprise! Looking around with wide, curious eyes, our young explorer took a deep breath, smiled bravely, and remembered that kindness, honesty, and careful thinking always help solve even tricky moments.</p>
               <div style="background:#F0FDF4; border-left:3px solid #10B981; padding:0.65rem 0.9rem; border-radius:6px; margin-top:0.65rem; font-size:0.88rem;">
                 <strong>🌟 Family Storytime Talk:</strong> Point to your favorite part of <em>${ch.title}</em>! What do you think is going to happen next in the story?
               </div>`
            : `<p>As the events of <em>${ch.title}</em> unfolded, the stakes grew clearer. Every small decision mattered—whether showing patience when an obstacle blocked the path, verifying clues carefully before jumping to conclusions, or encouraging a teammate who felt ready to quit. Through vivid details and steady character, <strong>${title}</strong> invites readers to step right inside the scene and weigh what they would have done in the same moment.</p>
               <div style="background:#EFF6FF; border-left:3px solid #2563EB; padding:0.65rem 0.9rem; border-radius:6px; margin-top:0.65rem; font-size:0.88rem;">
                 <strong>📖 English Class Reading Check:</strong> Cite one specific detail from <em>${ch.title}</em> that reveals a character's motivation or advances the main plot.
               </div>`;
        ch.content = ch.content + extraPara;
        ch._expandedRich = true;
      }
    });

    // Guarantee EVERY book has AT LEAST 6 full chapters (never stops at Chapter 3!)
    if (existing.length < 6) {
      const ch4 = isTextbook
        ? {
            title: `Chapter 4: Worked Problems & Real-Life Applications in ${title.split(":")[0]}`,
            content: `<p>Understanding core principles is only half the journey—Chapter 4 puts <strong>${title}</strong> to work in real-world scenarios! ${desc}</p>
              <p>Walk slowly through each multi-step case study: first list the facts you know, second identify the governing principle or formula from Chapters 1–3, third carry out the steps cleanly without skipping intermediate work, and finally check whether your answer makes logical sense in everyday life.</p>
              <p>Whether you are preparing for a Weekly Unit Test, a State EOG/EOC benchmark, or a hands-on family project, practicing real applications builds lasting fluency that never fades after test day.</p>
              <div style="background:#FFFDF6; border-left:3px solid #C59B27; padding:0.65rem 0.9rem; border-radius:6px; margin-top:0.65rem; font-size:0.88rem;">
                <strong>✍️ Practice Challenge:</strong> Create one original real-life word problem or case study based on Chapters 1–4 and quiz your parent or study partner!
              </div>`
          }
        : isEarly
          ? {
              title: "Chapter 4: A Tricky Surprise Along the Path",
              content: `<p>Just when everything seemed smooth and sunny, a brand-new surprise popped up right in the middle of the path! The wind rustled the tall green leaves, and for one quiet second nobody knew which way to go.</p>
                <p>Instead of rushing or giving up, our hero stopped, took three slow breaths, and looked closely for helpful clues. <em>"Wait a second!"</em> they cheered with a bright grin. <em>"Look at the trail markers we learned about earlier—if we work together step by step, we can solve this!"</em></p>
                <p>Working as a cheerful team, they checked every clue carefully and took the very next brave step forward into the valley ahead.</p>
                <div style="background:#F0FDF4; border-left:3px solid #10B981; padding:0.65rem 0.9rem; border-radius:6px; margin-top:0.65rem; font-size:0.88rem;">
                  <strong>🌟 Storytime Question:</strong> What helped our hero stay calm when the tricky surprise appeared?
                </div>`
            }
          : {
              title: "Chapter 4: The Rising Challenge & Hidden Clue",
              content: `<p>By the fourth chapter of <strong>${title}</strong>, what began as a straightforward journey deepened into a real test of wisdom and perseverance. Unexpected setbacks forced everyone to re-examine their assumptions and look closer at details they had nearly overlooked in Chapters 1 through 3.</p>
                <p><em>"Quick guesses get us lost,"</em> a voice reminded the group quietly. <em>"Careful observation and honest teamwork find the real answer."</em> Laying out every piece of evidence side by side, a hidden pattern suddenly snapped into sharp focus—pointing directly toward the turning point ahead.</p>
                <p>Every strong story—and every real-life challenge—reaches a moment where character is forged under pressure. Gathering their resolve, the companions pressed forward toward the heart of the mystery.</p>
                <div style="background:#EFF6FF; border-left:3px solid #2563EB; padding:0.65rem 0.9rem; border-radius:6px; margin-top:0.65rem; font-size:0.88rem;">
                  <strong>📖 Literature Analysis:</strong> How does the obstacle in Chapter 4 raise the tension (rising action) compared to Chapter 1?
                </div>`
            };

      const ch5 = isTextbook
        ? {
            title: `Chapter 5: Common Pitfalls, Critical Thinking & Deep Review`,
            content: `<p>Top scholars separate themselves by spotting common mistakes <em>before</em> they happen! In Chapter 5 of <strong>${title}</strong>, we examine the most frequent errors students make—such as rushing past key words in a question, skipping verification steps, or confusing two closely related terms.</p>
              <p>Use the <strong>3-Pass Verification Habit</strong> on every quiz and exam: Pass 1 reads the full prompt carefully; Pass 2 solves step by step using verified principles; Pass 3 plugs the result back in (or checks exact text evidence) to confirm 100% accuracy.</p>
              <p>Review your notes from Chapters 1–4 and highlight any vocabulary term you want to sharpen before moving into the final Capstone Synthesis in Chapter 6.</p>`
          }
        : isEarly
          ? {
              title: "Chapter 5: Working Together to Save the Day!",
              content: `<p>With steady hearts and bright eyes, the friends put every clue together—one, two, three! Each person had a special gift to share: one spotted the right path, one remembered a kind promise, and one cheered everyone on when the hill felt steep.</p>
                <p>Suddenly, the clouds parted and golden sunlight poured across the meadow! <em>"We did it!"</em> they shouted joyfully, giving each other high-fives. Solving a hard challenge felt even sweeter because they stayed truthful, patient, and kind the entire way.</p>
                <div style="background:#F0FDF4; border-left:3px solid #10B981; padding:0.65rem 0.9rem; border-radius:6px; margin-top:0.65rem; font-size:0.88rem;">
                  <strong>🌟 Storytime Question:</strong> How did teamwork help the friends succeed in Chapter 5?
                </div>`
            }
          : {
              title: "Chapter 5: The Turning Point & Moment of Truth",
              content: `<p>The decisive moment arrived in Chapter 5 of <strong>${title}</strong>. Every lesson learned, every piece of evidence gathered, and every ounce of courage practiced across the earlier chapters came together at once.</p>
                <p>Rather than taking a dishonest shortcut or shrinking back in fear, the protagonist chose truth and steady resolve. Piece by piece, the puzzle clicked into place, revealing not just the answer to the immediate dilemma, but a deeper truth about integrity, stewardship, and courage under pressure.</p>
                <p>As the dust settled, everyone realized the true victory wasn't merely reaching the goal—it was who they had become along the way.</p>
                <div style="background:#EFF6FF; border-left:3px solid #2563EB; padding:0.65rem 0.9rem; border-radius:6px; margin-top:0.65rem; font-size:0.88rem;">
                  <strong>📖 Literature Analysis:</strong> Identify the climax (turning point) of Chapter 5. What core theme or life lesson shines through this decision?
                </div>`
            };

      const ch6 = isTextbook
        ? {
            title: `Chapter 6: Cumulative Mastery Synthesis, Glossary & Capstone Questions`,
            content: `<p>Congratulations on completing all six chapters of <strong>${title}</strong>! You have built a strong foundation spanning core principles, worked examples, real-world applications, and critical verification habits.</p>
              <p><strong>Capstone Reflection &amp; Study Prompts:</strong></p>
              <ol style="padding-left:1.3rem; line-height:1.7;">
                <li>Summarize the single biggest unifying idea of <strong>${title}</strong> in 3–5 clear sentences without looking back at Chapter 1.</li>
                <li>Describe one real-world situation in your home, community, or future career where the principles in this volume apply directly.</li>
                <li>Teach one key worked example or concept from this book out loud to a parent or sibling!</li>
              </ol>
              <p><em>Ready for your next adventure? Head back to the Digital Library shelves to open your next grade-level volume or launch a State EOG/EOC Final Exam!</em></p>`
          }
        : isEarly
          ? {
              title: "Chapter 6: Home Again & Lessons We'll Never Forget",
              content: `<p>As the warm golden sunset painted the sky orange and pink, our happy explorers headed home—tired, smiling, and bursting with stories to share around the dinner table!</p>
                <p><em>"What was your favorite part of today's adventure?"</em> asked Mom with a warm hug. Looking back at everything they discovered in <strong>${title}</strong>, they realized the best treasure wasn't shiny gold—it was wisdom, courage, friendship, and thanking God for every wonderful day!</p>
                <div style="background:#FFFDF6; border:1.5px solid #F59E0B; padding:0.75rem 1rem; border-radius:8px; margin-top:0.75rem;">
                  <strong>🏆 Book Completed! Family &amp; English Class Wrap-Up:</strong>
                  <ul style="margin:0.35rem 0 0; padding-left:1.2rem; font-size:0.88rem;">
                    <li>Who was your favorite character in <strong>${title}</strong> and why?</li>
                    <li>Retell the <strong>Beginning, Middle, and End</strong> in your own words!</li>
                    <li>Draw a picture of your favorite scene from the book!</li>
                  </ul>
                </div>`
            }
          : {
              title: "Chapter 6: Resolution, Legacy & English Class Book Report Guide",
              content: `<p>In the closing chapter of <strong>${title}</strong>, the journey came full circle. Looking back across the road traveled since Chapter 1, the characters saw clearly how every trial, clue, and faithful decision wove together into a lasting story of growth and purpose.</p>
                <p>Great books never truly end when you close the final page—they stay with you, sharpening how you think, speak, write, and treat others in everyday life.</p>
                <div style="background:#FFFDF6; border:1.5px solid #C59B27; padding:0.85rem 1.05rem; border-radius:8px; margin-top:0.75rem;">
                  <strong>📚 English Class Literature Response &amp; Book Report Prompts (${isUpperElem ? "Grades 3–5" : "Grades 6–12"}):</strong>
                  <ol style="margin:0.4rem 0 0; padding-left:1.25rem; font-size:0.88rem; line-height:1.65;">
                    <li><strong>Character Growth:</strong> How did the main character change between Chapter 1 and Chapter 6? Cite two specific moments from the story.</li>
                    <li><strong>Central Theme:</strong> What timeless moral or Christian worldview truth does <em>${title}</em> communicate?</li>
                    <li><strong>Creative Extension:</strong> Write an alternate 1-paragraph epilogue showing what happens to the characters one year later!</li>
                  </ol>
                </div>`
            };

      if (existing.length < 4) existing.push(ch4);
      if (existing.length < 5) existing.push(ch5);
      if (existing.length < 6) existing.push(ch6);
      book.chapters = existing;
      book.pages = Math.max(book.pages || 24, isEarly ? 32 : isUpperElem ? 96 : 168);
    }
  }

  // Expand all registered books cleanly on load
  if (dataRef && Array.isArray(dataRef.libraryBooks)) {
    dataRef.libraryBooks.forEach(buildContinuationChapters);
  }

  // Expose helper so app.js can also ensure any cached localStorage books get all 6 expanded chapters!
  window.ensureAcademyBooksExpanded = function (booksArr) {
    if (!Array.isArray(booksArr)) return;
    booksArr.forEach(buildContinuationChapters);
  };

  // ==================== ENGLISH / READING CLASS ↔ DIGITAL LIBRARY BOOK LINKER ====================
  window.getAssignedEnglishLibraryBook = function (course, weekNum) {
    if (!course) return null;
    const dept = (course.department || "").toLowerCase();
    const code = (course.code || "").toUpperCase();
    const isEla = dept.includes("literature") || code.startsWith("ELA") || code.startsWith("LIT") || code.startsWith("RHET");
    if (!isEla) return null;

    const books = (dataRef && Array.isArray(dataRef.libraryBooks)) ? dataRef.libraryBooks : [];
    // Pick REAL storybooks, novels, adventures, mysteries, fables & classical great books (NOT textbooks!)
    const literatureBooks = books.filter((b) => !/textbook/i.test(b.shelf || ""));
    if (literatureBooks.length === 0) return null;

    const g = (course.gradeLevels && course.gradeLevels[0]) ?? 6;
    const exactMatches = literatureBooks.filter((b) => parseBookGrade(b.readingLevel) === g);
    const closeMatches = literatureBooks.filter((b) => Math.abs(parseBookGrade(b.readingLevel) - g) <= 1);
    const pool = exactMatches.length > 0 ? exactMatches : closeMatches.length > 0 ? closeMatches : literatureBooks;

    // Rotate assigned book cleanly every 3 weeks across the 36-week school year!
    const bookIdx = Math.floor((Math.max(1, Number(weekNum) || 1) - 1) / 3) % pool.length;
    const picked = pool[bookIdx];
    const chCount = (picked.chapters || []).length || 6;
    const assignedCh = (((Math.max(1, Number(weekNum) || 1) - 1) % 3) * 2) % chCount + 1;
    return { book: picked, assignedChapterNum: assignedCh };
  };

  window.renderEnglishAssignedBookCard = function (course, weekNum) {
    const info = window.getAssignedEnglishLibraryBook(course, weekNum);
    if (!info || !info.book) return "";
    const bk = info.book;
    const totalCh = (bk.chapters || []).length;
    return `
      <div class="quiz-q-card" style="margin-bottom:1.05rem; background:linear-gradient(135deg, #FFFDF6 0%, #FEF3C7 100%); border:2px solid var(--gold-500); border-radius:12px;">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.75rem;">
          <div style="flex:1; min-width:240px;">
            <span class="mono-label" style="color:#92400E;">📚 ASSIGNED ENGLISH LITERATURE BOOK · ${bk.shelf.toUpperCase()} (${totalCh} FULL CHAPTERS)</span>
            <h4 style="font-family:var(--font-serif); font-size:1.22rem; color:var(--navy-900); margin:0.2rem 0 0.2rem;">
              📖 ${bk.title}
            </h4>
            <p style="font-size:0.84rem; color:#334155; margin:0;">
              <strong>Week ${weekNum || 1} Reading Assignment:</strong> Read <strong>Chapter ${info.assignedChapterNum} of ${totalCh}</strong> in the Digital Library (Audio Read-Aloud built in!), then use what you read to answer today's English class comprehension &amp; writing work!
            </p>
          </div>
          <button type="button" class="btn btn-primary btn-sm" data-open-library-book="${bk.id}" style="white-space:nowrap;">
            📖 Open Book in Library →
          </button>
        </div>
      </div>
    `;
  };
})();
