// Christ Infinity Academy — Dedicated Kindergarten (Grade K) Deep Curriculum Module
// Rich, textbook-grade Kindergarten instruction across ALL 5 Core Subjects (Math, Reading/Phonics, Bible, Science, Social Studies)
// Every lesson delivers 4 rich teaching sections, 2 worked examples, hands-on home labs, topic-exact practice & K-calibrated quizzes!

(function () {
  window.ACADEMY_GRADE_CURRICULA = window.ACADEMY_GRADE_CURRICULA || {};

  function rep(emoji, n) {
    let s = "";
    for (let i = 0; i < n; i++) s += emoji;
    return s;
  }

  function shuffleQ(qObj, seed, helper) {
    if (helper && typeof helper.shuffleQuestionOptions === "function") {
      return helper.shuffleQuestionOptions(qObj, seed);
    }
    return qObj;
  }

  function fillQuiz(pool, targetCount, seedBase, helper) {
    const out = [];
    for (let i = 0; i < targetCount; i++) {
      const base = pool[i % pool.length];
      out.push(shuffleQ(base, seedBase + i * 17, helper));
    }
    return out;
  }

  function dayBannerCard(wNum, dayIdx, cleanTopic, subjectWord) {
    const names = [
      { badge: "MONDAY · DAY 1 OF 5 (WARM INTRODUCTION)", title: `Welcome to Week ${wNum}: Meet "${cleanTopic}"!`, text: `Today is Monday—our first friendly step into <strong>${cleanTopic}</strong>! Sit beside Mom or Dad, tap the <strong>Listen</strong> button anytime, and explore slowly together.`, tip: `Day 1 Goal: Meet today's big ${subjectWord} idea with zero rush!` },
      { badge: "TUESDAY · DAY 2 OF 5 (GUIDED PRACTICE)", title: `Tuesday Builder: Practicing "${cleanTopic}" Together`, text: `Yesterday you met <strong>${cleanTopic}</strong>! Today we try fresh examples step by step—pointing with your finger and saying each answer out loud.`, tip: `Day 2 Goal: Practice slowly and check every answer out loud!` },
      { badge: "WEDNESDAY · DAY 3 OF 5 (HANDS-ON HOME LAB)", title: `Wednesday Explorer Lab: "${cleanTopic}" Around the House`, text: `Kindergarteners learn best with their hands! Today we bring <strong>${cleanTopic}</strong> into real life using toys, crayons, spoons, or a quick nature walk outside.`, tip: `Day 3 Goal: Touch, build, and spot "${cleanTopic}" in real life!` },
      { badge: "THURSDAY · DAY 4 OF 5 (REVIEW & CONFIDENCE)", title: `Thursday Confidence Check: You're Getting Great at "${cleanTopic}"!`, text: `Look how much you already know this week! Today we review <strong>${cleanTopic}</strong> calmly so tomorrow's short Friday Check feels fun and easy.`, tip: `Day 4 Goal: Teach Mom or Dad one thing you learned this week!` },
      { badge: "FRIDAY · DAY 5 OF 5 (WEEKLY CELEBRATION)", title: `Friday Fun Check: Showing What You Know on "${cleanTopic}"!`, text: `Happy Friday, Griffin Junior Explorer! Skim the colorful cards below, take a calm breath, and enjoy your short 10-question Friday Check to earn Week ${wNum} Griffin Stars!`, tip: `Day 5 Goal: Celebrate a wonderful week of learning!` }
    ];
    const d = names[dayIdx % 5];
    return { stepBadge: d.badge, heading: d.title, body: d.text, keyTakeaway: d.tip };
  }

  // =========================================================================
  // 1. KINDERGARTEN MATH (MATH-K01) — ALL 36 WEEKS IN 9 DEEP THEMATIC UNITS
  // =========================================================================
  function buildKindergartenMath(w, d, cleanTopic, quizTargetCount, helper) {
    const dayCard = dayBannerCard(w, d, cleanTopic, "math");
    const emList = ["🍎", "⭐", "🐥", "🦋", "🌸"];
    const nmList = ["apples", "stars", "chicks", "butterflies", "flowers"];
    const em = emList[d % emList.length];
    const nm = nmList[d % nmList.length];

    // UNIT 1A — WEEK 1: Counting & Matching Objects 1 to 5
    if (w === 1) {
      const c1 = 1 + (d % 4);
      const c2 = Math.min(5, c1 + 1);
      const c3 = 2 + ((d + 1) % 3);
      const c4 = 1 + ((d + 2) % 4);
      const quizPool = [
        { q: `Count the apples: 🍎🍎🍎 — How many apples?`, options: ["3", "2", "4", "5"], correct: 0, explanation: "Point to each apple: 1, 2, 3!" },
        { q: `Count the stars: ⭐⭐⭐⭐⭐ — How many stars?`, options: ["5", "4", "3", "2"], correct: 0, explanation: "There are 5 bright stars—like 5 fingers on one hand!" },
        { q: `Count the baby chicks: 🐥🐥 — How many chicks?`, options: ["2", "1", "3", "4"], correct: 0, explanation: "1, 2 — two baby chicks!" },
        { q: `Count the flowers: 🌸🌸🌸🌸 — How many flowers?`, options: ["4", "3", "5", "1"], correct: 0, explanation: "Point and count: 1, 2, 3, 4 flowers!" },
        { q: `What number comes RIGHT AFTER 3 when counting? (1, 2, 3, ___)`, options: ["4", "2", "5", "1"], correct: 0, explanation: "1, 2, 3, 4! Four comes right after three." },
        { q: `Count the butterfly: 🦋 — How many butterflies?`, options: ["1", "2", "3", "0"], correct: 0, explanation: "Just 1 butterfly!" },
        { q: `What number comes RIGHT AFTER 4 when counting? (1, 2, 3, 4, ___)`, options: ["5", "3", "2", "1"], correct: 0, explanation: "1, 2, 3, 4, 5!" },
        { q: `If you spread 4 blocks out across the table, how many blocks do you still have?`, options: ["Still 4 blocks!", "Now 2 blocks", "Now 10 blocks", "Zero blocks"], correct: 0, explanation: "Moving objects around never changes how many there are!" },
        { q: `Which group shows EXACTLY 3 stars?`, options: ["⭐ ⭐ ⭐", "⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐"], correct: 0, explanation: "⭐ ⭐ ⭐ has 1, 2, 3 stars!" },
        { q: `How many fingers are on ONE of your hands?`, options: ["5 fingers", "2 fingers", "1 finger", "3 fingers"], correct: 0, explanation: "Count your fingers on one hand: 1, 2, 3, 4, 5!" }
      ];
      return {
        _hasOwnDayFocusCard: true,
        objectives: [
          "Count 1, 2, 3, 4, 5 out loud by touching ONE object for EACH number (One-to-One Counting)",
          "Know that the LAST number you say tells HOW MANY are in the whole group",
          "Recognize and write numbers 1, 2, 3, 4, and 5 using fun number rhymes"
        ],
        anchorVerse: "Psalm 147:4 — God counts every star in the sky and calls them all by name!",
        bigIdea: "Counting 1 to 5 is like giving every object a high-five—touch ONE picture for EACH number you say (1, 2, 3, 4, 5)! The last number you say is the magic total.",
        sections: [
          dayCard,
          {
            stepBadge: "PART 1 · TOUCH & COUNT 1 TO 5",
            heading: "Meet Numbers 1, 2, 3, 4, and 5!",
            body: `Point your finger at each row and count out loud slowly:<br/><br/>
              <strong>1 (One)</strong> = 🍎 &nbsp;·&nbsp; <em>Rhyme: "Straight line down and then you're done!"</em><br/>
              <strong>2 (Two)</strong> = 🍎 🍎 &nbsp;·&nbsp; <em>Rhyme: "Around and back on a railroad track!"</em><br/>
              <strong>3 (Three)</strong> = 🍎 🍎 🍎 &nbsp;·&nbsp; <em>Rhyme: "Around a tree, around a tree, that's the way to make a 3!"</em><br/>
              <strong>4 (Four)</strong> = 🍎 🍎 🍎 🍎 &nbsp;·&nbsp; <em>Rhyme: "Down and over, down once more!"</em><br/>
              <strong>5 (Five)</strong> = 🍎 🍎 🍎 🍎 🍎 &nbsp;·&nbsp; <em>Rhyme: "Down and around, put on a hat—that makes 5!"</em>`,
            keyTakeaway: "Say ONE number each time your finger touches ONE picture—never skip and never double-count!"
          },
          {
            stepBadge: "PART 2 · SUBITIZING (INSTANT EYE COUNTING)",
            heading: "Spotting Small Groups Fast Like Dice Dots!",
            body: `Look at <strong>⭐⭐</strong>—your eyes can see <strong>2</strong> right away! Look at <strong>🍎🍎🍎</strong>—that's <strong>3</strong>! And a full hand of fingers is always <strong>5</strong>! Also remember a super secret math rule: if you put <strong>4 crayons</strong> in a straight line OR scatter them in a circle, there are <strong>STILL 4 crayons</strong>!`,
            keyTakeaway: "Moving objects around does NOT change how many there are!"
          },
          {
            stepBadge: "PART 3 · HANDS-ON HOME ACTIVITY (5 MINUTES)",
            heading: "Kitchen Table Toy & Snack Count!",
            body: `Grab <strong>5 small items</strong> from the kitchen or toy bin (blocks, grapes, spoons, or crackers). Have Mom or Dad call out a number from 1 to 5—slide that exact number of pieces onto a napkin while counting out loud: <em>"1... 2... 3!"</em> Then trace the number in the air with your pointer finger!`,
            keyTakeaway: "Touching and sliding real objects makes counting 1–5 stick forever!"
          }
        ],
        workedExamples: [
          {
            badge: "EXAMPLE 1 · POINT & COUNT",
            title: `Count the ${nm}: ${rep(em, 4)}`,
            problem: `How many ${nm} are lined up here?`,
            step1: "Put your pointer finger on the very first picture and say '1'.",
            step2: "Slide right one at a time: '2'... '3'... '4'!",
            step3: "Stop! The last number we said is 4 → Answer: 4!",
            pitfall: "Don't say numbers faster than your finger moves—keep voice and finger matching!"
          },
          {
            badge: "EXAMPLE 2 · WHAT COMES NEXT?",
            title: "Count Up: 1, 2, 3, ___",
            problem: "Which number comes right after 3?",
            step1: "Hold up 3 fingers: 1, 2, 3.",
            step2: "Pop up ONE more finger and count again: 1, 2, 3, 4!",
            step3: "4 comes right after 3!",
            pitfall: "Whenever you're unsure, start quietly at 1 and count up!"
          }
        ],
        problems: [
          { prompt: `1. Count the ${nm}: ${rep(em, c1)} — How many?`, answer: String(c1), hint: `Touch each one and count from 1 to ${c1}!` },
          { prompt: `2. Count the stars: ${rep("⭐", c2)} — How many?`, answer: String(c2), hint: `Point one by one!` },
          { prompt: `3. Count the apples: ${rep("🍎", c3)} — How many?`, answer: String(c3), hint: `Say one number for each apple!` },
          { prompt: `4. What number comes RIGHT AFTER ${c4}? (${c4}, ___)`, answer: String(c4 + 1), hint: `Count 1, 2, 3, 4, 5!` }
        ],
        writingPrompt: "Count 1 to 5 out loud to Mom or Dad, then type your favorite number from 1 to 5 (or type 'Done')!",
        writingExemplar: "I counted 1, 2, 3, 4, 5 carefully by touching one object at a time!",
        quiz: fillQuiz(quizPool, quizTargetCount, w * 31 + d * 7, helper)
      };
    }

    // UNIT 1B — WEEK 2: Counting & Writing Numbers 6 to 10
    if (w === 2) {
      const c1 = 6 + (d % 4);
      const c2 = 7 + ((d + 1) % 4);
      const c3 = 6 + ((d + 2) % 3);
      const c4 = 6 + (d % 4);
      const quizPool = [
        { q: "Count the apples: 🍎🍎🍎🍎🍎 🍎 — How many apples?", options: ["6", "5", "7", "8"], correct: 0, explanation: "5 on top + 1 more = 6!" },
        { q: "Count the stars: ⭐⭐⭐⭐⭐ ⭐⭐⭐ — How many stars?", options: ["8", "7", "9", "6"], correct: 0, explanation: "5 + 3 = 8 stars!" },
        { q: "Count the chicks: 🐥🐥🐥🐥🐥 🐥🐥 — How many chicks?", options: ["7", "6", "8", "5"], correct: 0, explanation: "5 + 2 = 7 chicks!" },
        { q: "Count BOTH of your hands together! How many fingers in all?", options: ["10 fingers", "5 fingers", "8 fingers", "6 fingers"], correct: 0, explanation: "5 fingers + 5 fingers = 10 fingers!" },
        { q: "What number comes RIGHT AFTER 8? (6, 7, 8, ___)", options: ["9", "7", "10", "6"], correct: 0, explanation: "6, 7, 8, 9!" },
        { q: "Count the butterflies: 🦋🦋🦋🦋🦋 🦋🦋🦋🦋 — How many?", options: ["9", "8", "10", "7"], correct: 0, explanation: "5 + 4 = 9 butterflies!" },
        { q: "What number comes RIGHT AFTER 9? (7, 8, 9, ___)", options: ["10", "8", "6", "5"], correct: 0, explanation: "Nine, then TEN!" },
        { q: "Which group shows 6 stars?", options: ["⭐⭐⭐⭐⭐ ⭐", "⭐⭐⭐⭐⭐", "⭐⭐⭐⭐⭐ ⭐⭐⭐", "⭐⭐⭐⭐"], correct: 0, explanation: "5 stars + 1 more star = 6 stars!" }
      ];
      return {
        _hasOwnDayFocusCard: true,
        objectives: [
          "Count and match groups of 6, 7, 8, 9, and 10 objects accurately",
          "See numbers 6–10 as '5 on top + some more below' using a Ten-Frame",
          "Count smoothly from 1 all the way to 10 without skipping a number"
        ],
        anchorVerse: "Psalm 147:4 — God knows every number from 1 to 10 and beyond!",
        bigIdea: "Once you know a full row of 5, counting 6, 7, 8, 9, and 10 is easy! Start with 5 (one full hand), then keep counting up on your second hand: 6, 7, 8, 9, 10!",
        sections: [
          dayCard,
          {
            stepBadge: "PART 1 · FIVE-AND-SOME-MORE (6 TO 10)",
            heading: "Counting 6, 7, 8, 9, and 10 With Two Hands!",
            body: `Hold up 5 fingers on one hand, then add fingers on your other hand:<br/><br/>
              <strong>6</strong> = ⭐⭐⭐⭐⭐ + ⭐ (5 and 1 more)<br/>
              <strong>7</strong> = ⭐⭐⭐⭐⭐ + ⭐⭐ (5 and 2 more)<br/>
              <strong>8</strong> = ⭐⭐⭐⭐⭐ + ⭐⭐⭐ (5 and 3 more)<br/>
              <strong>9</strong> = ⭐⭐⭐⭐⭐ + ⭐⭐⭐⭐ (5 and 4 more)<br/>
              <strong>10</strong> = ⭐⭐⭐⭐⭐ + ⭐⭐⭐⭐⭐ (TWO full hands = 10!)`,
            keyTakeaway: "5 + 1 = 6 · 5 + 2 = 7 · 5 + 3 = 8 · 5 + 4 = 9 · 5 + 5 = 10!"
          },
          {
            stepBadge: "PART 2 · NUMBER WRITING RHYMES (6–10)",
            heading: "Fun Ways to Write 6, 7, 8, 9, and 10",
            body: `• <strong>6:</strong> Slide down and curl a round loop at the bottom!<br/>• <strong>7:</strong> Across the sky and slide down to heaven!<br/>• <strong>8:</strong> Make an S and close the gate!<br/>• <strong>9:</strong> Make a circle, then a straight line down!<br/>• <strong>10:</strong> A tall straight 1 beside a round 0!`,
            keyTakeaway: "Practice tracing 6, 7, 8, 9, 10 in the air or on paper!"
          },
          {
            stepBadge: "PART 3 · HANDS-ON HOME ACTIVITY",
            heading: "Egg Carton Ten-Frame Game!",
            body: `Take an egg carton (cut off 2 cups so 10 cups stay) or draw 10 boxes on paper. Fill the top row with <strong>5 Cheerios or coins</strong>, then add 1, 2, 3, 4, or 5 more in the bottom row to build 6, 7, 8, 9, and 10!`,
            keyTakeaway: "Seeing 5 on top + extras below makes Kindergarten math click fast!"
          }
        ],
        workedExamples: [
          {
            badge: "EXAMPLE 1 · FIVE-GROUP COUNTING",
            title: "Count: 🍎🍎🍎🍎🍎 🍎🍎🍎",
            problem: "How many apples are there altogether?",
            step1: "The first full row has 5 apples.",
            step2: "Keep counting up on the extra apples: 6, 7, 8!",
            step3: "Total = 8 apples!",
            pitfall: "Start counting the second group at 6 (not back at 1)!"
          },
          {
            badge: "EXAMPLE 2 · ONE MORE UP TO 10",
            title: "What Comes After 8?",
            problem: "Count 5, 6, 7, 8, ___.",
            step1: "Hold up 8 fingers (5 on one hand + 3 on the other).",
            step2: "Pop up 1 more finger.",
            step3: "Count: 5, 6, 7, 8, 9! Answer: 9!",
            pitfall: "Check by counting all 9 fingers!"
          }
        ],
        problems: [
          { prompt: `1. Count: 🍎🍎🍎🍎🍎 ${rep("🍎", c1 - 5)} — How many apples?`, answer: String(c1), hint: `Start at 5, then count up ${c1 - 5} more!` },
          { prompt: `2. Count: ⭐⭐⭐⭐⭐ ${rep("⭐", c2 - 5)} — How many stars?`, answer: String(c2), hint: `5 on top + ${c2 - 5} more!` },
          { prompt: `3. Count: 🐥🐥🐥🐥🐥 ${rep("🐥", c3 - 5)} — How many chicks?`, answer: String(c3), hint: `Touch and count all the way to ${c3}!` },
          { prompt: `4. What number comes RIGHT AFTER ${c4}? (${c4}, ___)`, answer: String(c4 + 1), hint: `Count 6, 7, 8, 9, 10!` }
        ],
        writingPrompt: "Count 1 to 10 out loud with Mom or Dad, then type your favorite number between 6 and 10!",
        writingExemplar: "I counted 5 on top and kept counting up to 6, 7, 8, 9, and 10!",
        quiz: fillQuiz(quizPool, quizTargetCount, w * 31 + d * 7, helper)
      };
    }

    // UNIT 2 — WEEKS 3–5: Comparing Groups (More/Fewer/Equal), Counting to 20, One More / One Less
    if (w >= 3 && w <= 5) {
      const big = 5 + (d % 4), small = 2 + (d % 3), mid = 4 + (d % 5);
      const quizPool = [
        { q: "Which group has MORE? Group A: 🍎🍎🍎🍎🍎 (5) or Group B: 🍎🍎 (2)?", options: ["Group A (5 apples)", "Group B (2 apples)", "They are equal", "Both have 0"], correct: 0, explanation: "5 is bigger than 2, so Group A has MORE!" },
        { q: "Which number is FEWER (smaller): 3 or 7?", options: ["3", "7", "10", "8"], correct: 0, explanation: "3 is smaller than 7, so 3 is FEWER!" },
        { q: "What does EQUAL mean when comparing two bowls of grapes?", options: ["Both bowls have the EXACT SAME number of grapes", "One bowl is empty", "One bowl has 100", "The bowls are different colors"], correct: 0, explanation: "Equal means the exact same amount!" },
        { q: "What number is ONE MORE than 6?", options: ["7", "5", "8", "4"], correct: 0, explanation: "6 + 1 more = 7!" },
        { q: "What number is ONE LESS than 5?", options: ["4", "6", "3", "7"], correct: 0, explanation: "Take 1 away from 5 → 4!" },
        { q: "Which number is BIGGER: 9 or 6?", options: ["9", "6", "2", "1"], correct: 0, explanation: "9 comes after 6 when counting, so 9 is bigger!" },
        { q: "Count a full Ten-Frame (10) plus 2 extra stars: 10 + 2 = ?", options: ["12", "10", "8", "2"], correct: 0, explanation: "10, 11, 12!" },
        { q: "What number is ONE MORE than 9?", options: ["10", "8", "7", "11"], correct: 0, explanation: "9 and 1 more makes 10!" }
      ];
      return {
        _hasOwnDayFocusCard: true,
        objectives: [
          `Master "${cleanTopic}" by comparing groups clearly (More, Fewer, Equal)`,
          "Find ONE MORE (count forward 1) and ONE LESS (count back 1) within 10",
          "Build teen counts cleanly using a full Ten-Frame of 10"
        ],
        anchorVerse: "Proverbs 16:11 — God loves fair, honest measuring and counting!",
        bigIdea: "Comparing tells us which group is BIGGER (More), which is SMALLER (Fewer), or if both groups match (Equal)—just line them up partner-to-partner!",
        sections: [
          dayCard,
          {
            stepBadge: "PART 1 · MORE, FEWER & EQUAL",
            heading: "Line Up Partners Side-by-Side!",
            body: `Compare two rows:<br/>Row A: <strong>${rep("🍎", big)} (${big})</strong><br/>Row B: <strong>${rep("⭐", small)} (${small})</strong><br/><br/>Every star has an apple partner—and Row A STILL has extras left over! That proves <strong>${big} is MORE than ${small}</strong>, and <strong>${small} is FEWER than ${big}</strong>. When every piece has a partner with zero extras, the groups are <strong>EQUAL</strong>!`,
            keyTakeaway: "More = bigger number · Fewer = smaller number · Equal = exact match!"
          },
          {
            stepBadge: "PART 2 · ONE MORE & ONE LESS",
            heading: "Hopping Forward & Backward on a Number Path!",
            body: `Look at the number path: <strong>1 — 2 — 3 — 4 — 5 — 6 — 7 — 8 — 9 — 10</strong>.<br/>• <strong>ONE MORE</strong> than ${mid} means hop 1 step RIGHT → <strong>${mid + 1}</strong>!<br/>• <strong>ONE LESS</strong> than ${mid} means hop 1 step LEFT → <strong>${mid - 1}</strong>!`,
            keyTakeaway: "One More = hop right (+1) · One Less = hop left (−1)!"
          },
          {
            stepBadge: "PART 3 · HANDS-ON HOME ACTIVITY",
            heading: "Spoon & Fork Partner Match!",
            body: `Place <strong>${big} spoons</strong> in one row and <strong>${small} forks</strong> directly underneath them on the table. Ask your child: <em>"Which row has MORE? Which has FEWER? How many forks do we add to make them EQUAL?"</em>`,
            keyTakeaway: "Visual lining-up builds deep number sense before symbols!"
          }
        ],
        workedExamples: [
          { badge: "EXAMPLE 1 · MORE vs. FEWER", title: `Compare ${big} and ${small}`, problem: `Which number is MORE: ${big} or ${small}?`, step1: `Count to ${small}, then keep counting to reach ${big}.`, step2: `Numbers that come LATER when counting are always bigger!`, step3: `${big} is MORE than ${small}!`, pitfall: "Check whether the question asks for MORE (bigger) or FEWER (smaller)!" },
          { badge: "EXAMPLE 2 · ONE LESS", title: `One Less Than ${mid}`, problem: `What is 1 less than ${mid}?`, step1: `Hold up ${mid} fingers.`, step2: `Put 1 finger down.`, step3: `Count what's left: ${mid - 1}!`, pitfall: "Less means going smaller, never bigger!" }
        ],
        problems: [
          { prompt: `1. Which number is MORE: ${big} or ${small}? (type the bigger number)`, answer: String(big), hint: `Count both on your fingers!` },
          { prompt: `2. Which number is FEWER: ${big} or ${small}? (type the smaller number)`, answer: String(small), hint: `Pick the smaller group!` },
          { prompt: `3. What number is ONE MORE than ${mid}?`, answer: String(mid + 1), hint: `Hop 1 step forward from ${mid}!` },
          { prompt: `4. What number is ONE LESS than ${mid}?`, answer: String(mid - 1), hint: `Hop 1 step back from ${mid}!` }
        ],
        writingPrompt: `Tell Mom or Dad which is MORE: ${big} or ${small}, or type the bigger number!`,
        writingExemplar: `${big} is MORE than ${small} because ${big} comes later on the number path.`,
        quiz: fillQuiz(quizPool, quizTargetCount, w * 31 + d * 7, helper)
      };
    }

    // UNIT 3 — WEEKS 6–9: Sorting, Patterns (AB/AAB/ABC) & Ordinal Numbers (1st–10th)
    if (w >= 6 && w <= 9) {
      const quizPool = [
        { q: "What comes next in this AB pattern?  🔴 🔵 🔴 🔵 🔴 ___", options: ["🔵", "🔴", "🟢", "⭐"], correct: 0, explanation: "Red, Blue, Red, Blue, Red → BLUE!" },
        { q: "What comes next in this pattern?  ⭐ ⭐ 🌙 ⭐ ⭐ ___", options: ["🌙", "⭐", "☀️", "🍎"], correct: 0, explanation: "Two stars, then one moon (AAB)!" },
        { q: "What comes next?  1, 2, 1, 2, 1, ___", options: ["2", "1", "3", "5"], correct: 0, explanation: "Alternating 1 and 2 → 2 comes next!" },
        { q: "If you put all RED blocks in one basket and all BLUE blocks in another, how did you sort them?", options: ["By COLOR", "By smell", "By loudness", "By time of day"], correct: 0, explanation: "Grouping red with red and blue with blue sorts by COLOR!" },
        { q: "In a line of toy cars (🚗 🚕 🚙), which car is FIRST (1st)?", options: ["🚗 (the one at the very front)", "🚙 (the last one)", "None of them", "The middle one"], correct: 0, explanation: "1st means at the very front of the line!" },
        { q: "In the order 1st, 2nd, 3rd, 4th — which position comes right after 2nd?", options: ["3rd (Third)", "1st (First)", "5th (Fifth)", "10th"], correct: 0, explanation: "First (1st), Second (2nd), Third (3rd)!" },
        { q: "What comes next in this ABC pattern?  🍎 🍌 🍇 🍎 🍌 ___", options: ["🍇", "🍎", "🍌", "⭐"], correct: 0, explanation: "Apple, Banana, Grape repeats!" },
        { q: "Which item does NOT belong in a group of round balls (⚽ 🏀 🎾 📘)?", options: ["📘 (the square book)", "⚽", "🏀", "🎾"], correct: 0, explanation: "The book is flat and rectangular, while the other three are round balls!" }
      ];
      return {
        _hasOwnDayFocusCard: true,
        objectives: [
          `Master "${cleanTopic}" by spotting repeating rules and sorting cleanly`,
          "Extend AB, AAB, and ABC patterns with sounds, colors, and numbers",
          "Use Ordinal Words (1st, 2nd, 3rd, 4th, 5th) to describe positions in a line"
        ],
        anchorVerse: "Genesis 1:31 — God created beautiful patterns in flowers, seashells, and seasons!",
        bigIdea: "Sorting groups matching things together (by color, size, or shape), and Patterns repeat in a steady beat so you can predict what comes next!",
        sections: [
          dayCard,
          {
            stepBadge: "PART 1 · SORTING & PATTERN DETECTIVE",
            heading: "Say the Pattern With a Beat!",
            body: `Read each pattern out loud like a song:<br/>• <strong>AB Pattern:</strong> 🔴 🔵 🔴 🔵 🔴 → next is <strong>🔵</strong>!<br/>• <strong>AAB Pattern:</strong> ⭐ ⭐ 🌙 ⭐ ⭐ → next is <strong>🌙</strong>!<br/>• <strong>ABC Pattern:</strong> 🍎 🍌 🍇 🍎 🍌 → next is <strong>🍇</strong>!`,
            keyTakeaway: "Find the repeating chunk (the core), say it out loud, and predict what's next!"
          },
          {
            stepBadge: "PART 2 · ORDINAL NUMBERS (1ST TO 5TH)",
            heading: "Who Is 1st, 2nd, and 3rd in Line?",
            body: `Line up 5 favorite stuffed animals! The leader at the front is <strong>1st (First)</strong>, next is <strong>2nd (Second)</strong>, then <strong>3rd (Third)</strong>, <strong>4th (Fourth)</strong>, and <strong>5th (Fifth)</strong>.`,
            keyTakeaway: "Ordinal numbers tell ORDER/POSITION in a line!"
          },
          {
            stepBadge: "PART 3 · HANDS-ON HOME ACTIVITY",
            heading: "Clap–Snap–Stomp Family Pattern Game!",
            body: `Make a body-beat pattern together: <em>Clap, Snap, Clap, Snap...</em> or <em>Clap, Clap, Stomp!</em> Then sort a handful of laundry socks or crayons by color and size!`,
            keyTakeaway: "Hearing patterns with claps makes visual math patterns super easy!"
          }
        ],
        workedExamples: [
          { badge: "EXAMPLE 1 · AB PATTERN", title: "1, 2, 1, 2, 1, ___", problem: "Which number comes next?", step1: "Say the repeating rule: 'One, Two — One, Two — One...'", step2: "After One always comes Two!", step3: "Answer: 2!", pitfall: "Check the last number before answering!" },
          { badge: "EXAMPLE 2 · ORDINAL ORDER", title: "Finding 3rd Place", problem: "In 🐶 🐱 🐰 🐻, who is 3rd?", step1: "1st = 🐶, 2nd = 🐱.", step2: "3rd = 🐰!", step3: "The bunny is 3rd in line!", pitfall: "Always start counting 1st from the front!" }
        ],
        problems: [
          { prompt: "1. Pattern: 1, 2, 1, 2, 1, ___ (what number comes next?)", answer: "2", hint: "Say 1, 2, 1, 2, 1..." },
          { prompt: "2. Pattern: 3, 4, 3, 4, 3, ___ (what number comes next?)", answer: "4", hint: "After 3 comes 4!" },
          { prompt: "3. Pattern: 1, 1, 2, 1, 1, ___ (what number comes next?)", answer: "2", hint: "Two 1s, then a 2!" },
          { prompt: "4. In 1st, 2nd, ___ , 4th — what number goes in the blank (number only, like 3)?", answer: "3", hint: "First, second, THIRD!" }
        ],
        writingPrompt: "Make a clap-snap pattern with a parent, or type the next number in 1, 2, 1, 2, 1, ___!",
        writingExemplar: "In an AB pattern like 1, 2, 1, 2, 1, the number 2 comes next because the pattern repeats 1 then 2.",
        quiz: fillQuiz(quizPool, quizTargetCount, w * 31 + d * 7, helper)
      };
    }

    // UNIT 4 & 5 — WEEKS 10–18: Making 5 & 10, Addition (+) & Subtraction (−) Within 10
    if (w >= 10 && w <= 18) {
      const a1 = 1 + (d % 4), b1 = 1 + ((d + 1) % 4);
      const mk10 = 3 + (d % 6);
      const subA = 5 + (d % 4), subB = 1 + (d % 3);
      const quizPool = [
        { q: "Add: 2 + 3 = ? (🍎🍎 and 🍎🍎🍎)", options: ["5", "4", "6", "1"], correct: 0, explanation: "2 apples plus 3 apples = 5 apples!" },
        { q: "Make 10! What goes in the blank?  7 + ___ = 10", options: ["3", "2", "4", "5"], correct: 0, explanation: "7 + 3 = 10!" },
        { q: "Take away: 6 − 2 = ? (6 stars, cross out 2)", options: ["4", "8", "3", "5"], correct: 0, explanation: "6 take away 2 leaves 4!" },
        { q: "Add: 4 + 4 = ?", options: ["8", "6", "9", "7"], correct: 0, explanation: "4 fingers + 4 fingers = 8!" },
        { q: "Make 5! What goes in the blank?  3 + ___ = 5", options: ["2", "3", "1", "4"], correct: 0, explanation: "3 + 2 = 5!" },
        { q: "Make 10! What goes in the blank?  8 + ___ = 10", options: ["2", "3", "1", "4"], correct: 0, explanation: "8 + 2 = 10!" },
        { q: "Maya had 5 cookies and ate 1. How many cookies are left? (5 − 1)", options: ["4", "6", "3", "2"], correct: 0, explanation: "5 minus 1 = 4 cookies left!" },
        { q: "What does the PLUS sign (+) tell us to do?", options: ["Put two groups TOGETHER to find the total", "Throw everything away", "Erase the numbers", "Make the group smaller"], correct: 0, explanation: "Plus (+) puts groups together; Minus (−) takes away!" }
      ];
      return {
        _hasOwnDayFocusCard: true,
        objectives: [
          `Master "${cleanTopic}" using ten-frames, fingers, and picture stories`,
          "Know friendly partners that make 5 (1+4, 2+3) and make 10 (6+4, 7+3, 8+2)",
          "Tell Addition (+ putting together) apart from Subtraction (− taking away)"
        ],
        anchorVerse: "Psalm 147:4 — God's world runs on clear, faithful numbers!",
        bigIdea: "Addition (+) puts two small groups together to make a bigger total! Subtraction (−) starts with a group, takes some away, and counts how many stay!",
        sections: [
          dayCard,
          {
            stepBadge: "PART 1 · MAKING 5 & MAKING 10 PARTNERS",
            heading: "Best-Friend Number Pairs!",
            body: `Learn your super-fast partners:<br/>• <strong>Make 5:</strong> <code>1+4=5</code>, <code>2+3=5</code>, <code>5+0=5</code><br/>• <strong>Make 10:</strong> <code>9+1=10</code>, <code>8+2=10</code>, <code>7+3=10</code>, <code>6+4=10</code>, <code>5+5=10</code>!`,
            keyTakeaway: "Knowing your Make-5 and Make-10 partners makes every math problem easy!"
          },
          {
            stepBadge: "PART 2 · ADDITION (+) VS. SUBTRACTION (−)",
            heading: "Join Together vs. Take Away",
            body: `• <strong>Addition (+):</strong> ${a1} apples (${rep("🍎", a1)}) + ${b1} more (${rep("🍎", b1)}) = <strong>${a1 + b1} apples in all!</strong><br/>• <strong>Subtraction (−):</strong> Start with ${subA} stars, cross out ${subB} → <strong>${subA - subB} stars left!</strong>`,
            keyTakeaway: "Plus (+) = put together · Minus (−) = take away!"
          },
          {
            stepBadge: "PART 3 · HANDS-ON HOME ACTIVITY",
            heading: "Two-Color Snack Shake!",
            body: `Put <strong>5 or 10 raisins/blocks</strong> in a cup, spill them gently onto a plate, and split them into two piles (like 3 and 2, or 6 and 4). Say the matching number sentence out loud: <em>"6 plus 4 equals 10!"</em>`,
            keyTakeaway: "Acting out math stories with snacks makes + and − crystal clear!"
          }
        ],
        workedExamples: [
          { badge: "EXAMPLE 1 · ADDITION STORY", title: `Add ${a1} + ${b1}`, problem: `${a1} birds sit in a tree and ${b1} more fly over. How many total?`, step1: `Hold up ${a1} fingers on one hand.`, step2: `Hold up ${b1} fingers on your other hand.`, step3: `Count all fingers up: ${a1 + b1} birds!`, pitfall: "Check the sign (+ means add, − means take away)!" },
          { badge: "EXAMPLE 2 · SUBTRACTION STORY", title: `Subtract ${subA} − ${subB}`, problem: `You have ${subA} stickers and share ${subB}. How many remain?`, step1: `Hold up ${subA} fingers.`, step2: `Fold down ${subB} fingers.`, step3: `Count fingers still standing: ${subA - subB}!`, pitfall: "Subtraction always ends with a smaller (or equal) number!" }
        ],
        problems: [
          { prompt: `1. Add: ${a1} + ${b1} = (${rep("🍎", a1)} + ${rep("🍎", b1)})`, answer: String(a1 + b1), hint: `Count all the apples together!` },
          { prompt: `2. Make 10: ${mk10} + ___ = 10`, answer: String(10 - mk10), hint: `Count up from ${mk10} until you hit 10!` },
          { prompt: `3. Take away: ${subA} − ${subB} =`, answer: String(subA - subB), hint: `Hold up ${subA} fingers and fold down ${subB}!` },
          { prompt: `4. Make 5: 2 + ___ = 5`, answer: "3", hint: `2 fingers + how many more = 5?` }
        ],
        writingPrompt: `Tell Mom or Dad a fun addition story for ${a1} + ${b1}, or type the total!`,
        writingExemplar: `I had ${a1} apples and got ${b1} more, so now I have ${a1 + b1} apples in all!`,
        quiz: fillQuiz(quizPool, quizTargetCount, w * 31 + d * 7, helper)
      };
    }

    // UNIT 6 — WEEKS 19–22: Teen Numbers (11–19) & Counting to 100 by 10s, 5s, 2s
    if (w >= 19 && w <= 22) {
      const extra = 2 + (d % 7);
      const quizPool = [
        { q: "What teen number is 10 and 4 extra ones? (10 + 4)", options: ["14", "41", "6", "15"], correct: 0, explanation: "10 + 4 = 14 (fourteen)!" },
        { q: "What teen number is 10 and 7 extra ones? (10 + 7)", options: ["17", "71", "16", "10"], correct: 0, explanation: "10 + 7 = 17!" },
        { q: "Count by TENS: 10, 20, 30, 40, ___ ?", options: ["50", "41", "45", "60"], correct: 0, explanation: "10, 20, 30, 40, 50!" },
        { q: "Count by TENS: 70, 80, 90, ___ ?", options: ["100", "91", "95", "85"], correct: 0, explanation: "After 90 comes ONE HUNDRED (100)!" },
        { q: "Count by FIVES: 5, 10, 15, ___ ?", options: ["20", "16", "25", "18"], correct: 0, explanation: "5, 10, 15, 20!" },
        { q: "How many ones are in 10 + 3 = 13?", options: ["1 ten and 3 extra ones", "3 tens and 1 one", "Zero tens", "13 tens"], correct: 0, explanation: "Every teen number starts with ONE group of 10 plus some extra ones!" },
        { q: "Count by TWOS: 2, 4, 6, ___ ?", options: ["8", "7", "9", "10"], correct: 0, explanation: "2, 4, 6, 8!" },
        { q: "What number comes right after 19?", options: ["20", "18", "10", "21"], correct: 0, explanation: "18, 19, 20 (two full tens)!" }
      ];
      return {
        _hasOwnDayFocusCard: true,
        objectives: [
          `Build teen numbers 11–19 as "10 and some extra ones" ("${cleanTopic}")`,
          "Count by 10s all the way to 100 (10, 20, 30... 100)!",
          "Practice skip counting by 5s (5, 10, 15, 20) and 2s (2, 4, 6, 8)"
        ],
        anchorVerse: "Psalm 147:4 — Great is our Lord, and His understanding is infinite!",
        bigIdea: "Teen numbers (11–19) have a cool secret: EVERY single one is just ONE full Ten-Frame (10) plus a few extra ones! And counting by 10s zooms you to 100 in just 10 jumps!",
        sections: [
          dayCard,
          {
            stepBadge: "PART 1 · SECRET OF THE TEEN NUMBERS (11–19)",
            heading: "Ten and Some Extra Ones!",
            body: `Look how easy teen numbers are:<br/>• <strong>11</strong> = 10 + 1 &nbsp;·&nbsp; <strong>12</strong> = 10 + 2 &nbsp;·&nbsp; <strong>13</strong> = 10 + 3<br/>• <strong>14</strong> = 10 + 4 &nbsp;·&nbsp; <strong>15</strong> = 10 + 5 &nbsp;·&nbsp; <strong>16</strong> = 10 + 6<br/>• <strong>17</strong> = 10 + 7 &nbsp;·&nbsp; <strong>18</strong> = 10 + 8 &nbsp;·&nbsp; <strong>19</strong> = 10 + 9!`,
            keyTakeaway: "The '1' in front of 14 means ONE full group of TEN!"
          },
          {
            stepBadge: "PART 2 · ZOOMING TO 100 BY TENS!",
            heading: "10, 20, 30, 40, 50, 60, 70, 80, 90, 100!",
            body: `Flash ALL 10 fingers every time you jump by 10: <strong>10, 20, 30, 40, 50, 60, 70, 80, 90, 100</strong>! You can also count shoes by 2s (<strong>2, 4, 6, 8, 10</strong>) and high-fives by 5s (<strong>5, 10, 15, 20</strong>)!`,
            keyTakeaway: "Ten jumps of 10 land right on 100!"
          },
          {
            stepBadge: "PART 3 · HANDS-ON HOME ACTIVITY",
            heading: "100-Jump Marching Chant!",
            body: `March around the living room flashing 10 fingers on every step as you chant 10, 20, 30... 100! Then make a stack of 10 blocks plus ${extra} loose blocks to see <strong>${10 + extra}</strong> with your own eyes!`,
            keyTakeaway: "Moving while skip-counting locks the rhythm right into memory!"
          }
        ],
        workedExamples: [
          { badge: "EXAMPLE 1 · BUILD A TEEN", title: `10 + ${extra} = ?`, problem: `What number is 10 and ${extra} more?`, step1: "Start with 10 in your head.", step2: `Count up ${extra} more ones.`, step3: `10 + ${extra} = ${10 + extra}!`, pitfall: "Write the 1 first (for ten), then the extra ones!" },
          { badge: "EXAMPLE 2 · COUNT BY TENS", title: "10, 20, 30, ___", problem: "What ten comes after 30?", step1: "Think 1, 2, 3, 4 with a zero at the end!", step2: "10, 20, 30, 40!", step3: "Answer: 40!", pitfall: "Keep the 0 in the ones place when counting by tens!" }
        ],
        problems: [
          { prompt: `1. Teen Number: 10 + ${extra} =`, answer: String(10 + extra), hint: `1 ten and ${extra} ones!` },
          { prompt: "2. Count by 10s: 10, 20, 30, ___", answer: "40", hint: "Think 1, 2, 3, 4 with a zero!" },
          { prompt: "3. Count by 5s: 5, 10, 15, ___", answer: "20", hint: "Add 5 more to 15!" },
          { prompt: "4. Count by 2s: 2, 4, 6, ___", answer: "8", hint: "Skip 7 and land on 8!" }
        ],
        writingPrompt: "Chant by 10s to 100 with a parent, then type what 10 + 5 equals!",
        writingExemplar: "10 and 5 extra ones makes 15, and counting by tens ten times reaches 100!",
        quiz: fillQuiz(quizPool, quizTargetCount, w * 31 + d * 7, helper)
      };
    }

    // UNIT 7 — WEEKS 23–27: 2D Shapes, 3D Solid Shapes & Position Words
    if (w >= 23 && w <= 27) {
      const quizPool = [
        { q: "How many straight sides does a TRIANGLE have?", options: ["3", "4", "0", "6"], correct: 0, explanation: "Tri- means three—3 sides and 3 corners!" },
        { q: "Which flat shape is completely round with 0 straight sides?", options: ["Circle", "Square", "Triangle", "Hexagon"], correct: 0, explanation: "A circle has 0 straight sides and 0 corners." },
        { q: "How many equal straight sides does a SQUARE have?", options: ["4", "3", "5", "6"], correct: 0, explanation: "A square has 4 equal sides and 4 square corners!" },
        { q: "How many straight sides does a HEXAGON (honeycomb shape) have?", options: ["6", "4", "3", "5"], correct: 0, explanation: "A hexagon has 6 straight sides!" },
        { q: "Which 3D solid shape looks like a soccer ball and rolls in every direction?", options: ["Sphere", "Cube", "Cone", "Flat triangle"], correct: 0, explanation: "A sphere is a round 3D ball!" },
        { q: "Which 3D solid shape looks like a dice block with 6 square faces?", options: ["Cube", "Sphere", "Cone", "Circle"], correct: 0, explanation: "A cube has 6 flat square faces!" },
        { q: "Which 3D shape looks like a soup can with two round flat ends?", options: ["Cylinder", "Cube", "Cone", "Triangle"], correct: 0, explanation: "A cylinder has 2 circle faces and rolls smoothly!" },
        { q: "If a teddy bear sits ON TOP OF a box, which position word describes where the bear is?", options: ["Above / On top of", "Underneath", "Inside", "Behind"], correct: 0, explanation: "Position words (above, below, beside, behind) tell exact location!" }
      ];
      return {
        _hasOwnDayFocusCard: true,
        objectives: [
          `Identify flat 2D shapes (Circle, Triangle, Square, Rectangle, Hexagon) in "${cleanTopic}"`,
          "Identify 3D solid shapes (Cube, Sphere, Cone, Cylinder) in real objects",
          "Use position words (above, below, next to, behind, in front of)"
        ],
        anchorVerse: "Job 38:5 — God designed every curve, corner, and shape with beauty!",
        bigIdea: "Flat shapes (2D) lie flat like stickers on paper; solid shapes (3D) pop out so you can hold them in your hand like balls, ice-cream cones, and dice!",
        sections: [
          dayCard,
          {
            stepBadge: "PART 1 · FLAT 2D SHAPES",
            heading: "Count the Straight Sides & Corners!",
            body: `• <strong>Circle:</strong> 0 straight sides (round like a cookie)<br/>• <strong>Triangle:</strong> 3 straight sides, 3 corners (like a pizza slice)<br/>• <strong>Square:</strong> 4 EQUAL straight sides, 4 corners<br/>• <strong>Rectangle:</strong> 4 sides (2 long, 2 short, like a door)<br/>• <strong>Hexagon:</strong> 6 straight sides (like a bee's honeycomb!)`,
            keyTakeaway: "Count the straight sides to name any flat shape!"
          },
          {
            stepBadge: "PART 2 · SOLID 3D SHAPES",
            heading: "3D Shapes You Can Hold!",
            body: `• <strong>Sphere:</strong> Round ball (basketball, orange)<br/>• <strong>Cube:</strong> Box with 6 square faces (dice, wooden block)<br/>• <strong>Cylinder:</strong> Soup can or paper towel roll<br/>• <strong>Cone:</strong> Party hat or ice-cream cone!`,
            keyTakeaway: "2D shapes are FLAT · 3D shapes are SOLID!"
          },
          {
            stepBadge: "PART 3 · HANDS-ON HOME ACTIVITY",
            heading: "Living-Room Shape Scavenger Hunt!",
            body: `Walk through your kitchen and living room with Mom or Dad and hunt for 1 <strong>Sphere</strong> (apple/ball), 1 <strong>Cylinder</strong> (cup/can), 1 <strong>Rectangle</strong> (book/door), and 1 <strong>Circle</strong> (plate/clock)!`,
            keyTakeaway: "Real-world shape hunts make geometry unforgettable!"
          }
        ],
        workedExamples: [
          { badge: "EXAMPLE 1 · COUNT SIDES", title: "Triangle vs. Square", problem: "How do you tell a triangle from a square?", step1: "Count sides on a triangle: 1, 2, 3.", step2: "Count sides on a square: 1, 2, 3, 4.", step3: "Triangle = 3 sides · Square = 4 equal sides!", pitfall: "A triangle tilted upside-down is STILL a triangle!" },
          { badge: "EXAMPLE 2 · 2D vs. 3D", title: "Circle vs. Sphere", problem: "How is a basketball different from a flat drawn circle?", step1: "A circle on paper is flat (2D).", step2: "A basketball is round all over so you can hold and bounce it (3D).", step3: "A basketball is a SPHERE!", pitfall: "Flat = 2D · Solid you can hold = 3D!" }
        ],
        problems: [
          { prompt: "1. How many straight sides does a TRIANGLE have?", answer: "3", hint: "Tri- means three!" },
          { prompt: "2. How many straight sides does a SQUARE have?", answer: "4", hint: "Top, bottom, left, right!" },
          { prompt: "3. How many straight sides does a CIRCLE have?", answer: "0", hint: "A circle is completely round!" },
          { prompt: "4. How many straight sides does a HEXAGON have?", answer: "6", hint: "Honeycomb shape has 6 sides!" }
        ],
        writingPrompt: "Tell a parent one 2D flat shape and one 3D solid shape you found in your room!",
        writingExemplar: "A clock face is a flat circle and a soup can in the pantry is a 3D cylinder!",
        quiz: fillQuiz(quizPool, quizTargetCount, w * 31 + d * 7, helper)
      };
    }

    // UNIT 8 & 9 — WEEKS 28–36: Measurement, Coins, Exact Hour Clocks & Picture Graphs
    const quizPool = [
      { q: "Which object is LONGER: a jump rope or a crayon?", options: ["A jump rope", "A crayon", "Both are 1 inch", "Neither has length"], correct: 0, explanation: "A jump rope stretches much longer than a crayon!" },
      { q: "Which object is HEAVIER: a bowling ball or a feather?", options: ["A bowling ball", "A feather", "They weigh the same", "Neither has weight"], correct: 0, explanation: "A bowling ball is much heavier than a light feather!" },
      { q: "How many cents is 1 PENNY worth?", options: ["1¢", "5¢", "10¢", "25¢"], correct: 0, explanation: "A copper penny is worth 1 cent (1¢)!" },
      { q: "How many cents is 1 NICKEL worth?", options: ["5¢", "1¢", "10¢", "25¢"], correct: 0, explanation: "A nickel is worth 5 cents (5¢)!" },
      { q: "How many cents is 1 DIME worth?", options: ["10¢", "1¢", "5¢", "25¢"], correct: 0, explanation: "A small silver dime is worth 10 cents (10¢)!" },
      { q: "On a clock, when the short hour hand points to 3 and the long minute hand points straight up to 12, what time is it?", options: ["3:00 (Three o'clock)", "12:00", "6:00", "9:00"], correct: 0, explanation: "Short hand = hour (3), long hand on 12 = o'clock → 3:00!" },
      { q: "If a picture graph shows 🍎🍎🍎🍎 for Apples and 🍌🍌 for Bananas, which fruit got MORE votes?", options: ["Apples (4 votes)", "Bananas (2 votes)", "They tied", "Neither"], correct: 0, explanation: "4 apples is more than 2 bananas!" },
      { q: "Which container holds MORE water: a bathtub or a teacup?", options: ["A bathtub", "A teacup", "They hold the same", "Neither holds water"], correct: 0, explanation: "A bathtub has much larger capacity!" }
    ];
    return {
      _hasOwnDayFocusCard: true,
      objectives: [
        `Explore "${cleanTopic}" with everyday measuring, coins, clocks, and picture graphs`,
        "Compare Longer/Shorter, Heavier/Lighter, and Holds More/Less",
        "Recognize pennies (1¢), nickels (5¢), dimes (10¢), and exact-hour clocks (3:00)"
      ],
      anchorVerse: "Ecclesiastes 3:1 — To every thing there is a season and a time!",
      bigIdea: "Math helps us measure how tall we grow, count coins in our piggy bank, read the clock for playtime, and chart our family's favorite fruits!",
      sections: [
        dayCard,
        {
          stepBadge: "PART 1 · MEASURING LENGTH, WEIGHT & CAPACITY",
          heading: "Comparing Sizes Around Us",
          body: `• <strong>Length/Height:</strong> Line up the bottom edges evenly to see which is <strong>Longer/Taller</strong> or <strong>Shorter</strong>.<br/>• <strong>Weight:</strong> Hold one item in each hand like a balance scale—which feels <strong>Heavier</strong> or <strong>Lighter</strong>?<br/>• <strong>Capacity:</strong> A big pitcher <strong>holds more</strong> water than a small cup!`,
          keyTakeaway: "Always line up starting ends evenly when comparing lengths!"
        },
        {
          stepBadge: "PART 2 · COINS & O'CLOCK TIME",
          heading: "Meeting Coins & Reading the Hour Hand",
          body: `• <strong>Penny = 1¢</strong> (brown copper) · <strong>Nickel = 5¢</strong> · <strong>Dime = 10¢</strong> · <strong>Quarter = 25¢</strong>!<br/>• On a round clock, when the <strong>long minute hand</strong> points straight up to <strong>12</strong>, say <strong>"o'clock"</strong> and read the number the <strong>short hour hand</strong> points to (like <strong>3:00</strong>)!`,
          keyTakeaway: "Short hand tells the HOUR · Long hand on 12 says O'CLOCK!"
        },
        {
          stepBadge: "PART 3 · HANDS-ON HOME ACTIVITY",
          heading: "Piggy Bank & Family Fruit Graph!",
          body: `Sort a few real coins on the table (pennies, nickels, dimes) and poll everyone in your home: <em>"Apples, Bananas, or Grapes?"</em> Draw one fruit picture per vote to make a real Picture Graph!`,
          keyTakeaway: "Real coins and graphs show kids why math matters every day!"
        }
      ],
      workedExamples: [
        { badge: "EXAMPLE 1 · READING A CLOCK", title: "Short Hand on 5, Long Hand on 12", problem: "What time does the clock show?", step1: "Long hand points straight up to 12 → 'o'clock' (:00).", step2: "Short hour hand points to 5.", step3: "The time is 5:00 (Five o'clock)!", pitfall: "Read the SHORT hand for the hour!" },
        { badge: "EXAMPLE 2 · COUNTING PENNIES", title: "4 Pennies = How Many Cents?", problem: "Count 4 copper pennies.", step1: "Each penny is worth 1¢.", step2: "Count by 1s: 1¢, 2¢, 3¢, 4¢.", step3: "Total = 4¢!", pitfall: "Remember a nickel is 5¢ (worth 5 pennies)!" }
      ],
      problems: [
        { prompt: "1. How many cents is 1 PENNY worth (number only)?", answer: "1", hint: "Brown copper penny = 1¢!" },
        { prompt: "2. How many cents is 1 NICKEL worth (number only)?", answer: "5", hint: "A nickel equals 5 pennies!" },
        { prompt: "3. How many cents is 1 DIME worth (number only)?", answer: "10", hint: "Small shiny dime = 10¢!" },
        { prompt: "4. Short hand on 4, long hand on 12 → What hour is it (number only)?", answer: "4", hint: "Four o'clock!" }
      ],
      writingPrompt: "Tell Mom or Dad what time you eat dinner or which coin is worth 5 cents!",
      writingExemplar: "A nickel is worth 5 cents, a dime is worth 10 cents, and when the short hand points to 4 and long hand to 12 it is 4:00!",
      quiz: fillQuiz(quizPool, quizTargetCount, w * 31 + d * 7, helper)
    };
  }

  // =========================================================================
  // 2. KINDERGARTEN READING & PHONICS (ELA-K01) — ALL 36 WEEKS IN 4 DEEP UNITS
  // =========================================================================
  function buildKindergartenReading(w, d, cleanTopic, quizTargetCount, helper) {
    const dayCard = dayBannerCard(w, d, cleanTopic, "reading");

    if (w <= 8) {
      // Weeks 1–8: Letter Sounds, Short Vowels & Blending 3-Letter CVC Words
      const sets = [
        { letters: "M, S, A, T", sounds: "/m/ (moon), /s/ (sun), /a/ (apple), /t/ (tiger)", words: "mat, sat, Sam, am, at", story: "Sam sat on a mat. Tap, tap, tap!" },
        { letters: "P, N, I, C", sounds: "/p/ (pig), /n/ (nest), /i/ (igloo), /c/ (cat)", words: "cat, pat, pin, tin, can, pan", story: "A tan cat sat by a tin pan. Pat the cat!" },
        { letters: "D, G, O, B", sounds: "/d/ (dog), /g/ (goat), /o/ (octopus), /b/ (ball)", words: "dog, bog, dot, pot, bag, bat", story: "Bob the dog got a big dot on his bag!" },
        { letters: "H, R, E, F", sounds: "/h/ (hat), /r/ (rabbit), /e/ (egg), /f/ (fish)", words: "hen, red, fed, hat, fan, rat", story: "A red hen sat in a hat near the fan!" },
        { letters: "L, K, U, W", sounds: "/l/ (lion), /k/ (kite), /u/ (umbrella), /w/ (wagon)", words: "sun, bug, cup, rug, wet, log", story: "A fun bug sat on a warm log in the sun!" },
        { letters: "J, V, Y, Z, Q, X", sounds: "/j/ (jam), /v/ (van), /y/ (yarn), /z/ (zebra), /kw/ (queen), /ks/ (fox)", words: "jam, van, zip, box, fox, yes", story: "A quick fox hid jam in a red box inside the van!" }
      ];
      const set = sets[(w - 1) % sets.length];
      const quizPool = [
        { q: "Which word starts with the /m/ sound like 'MOON'?", options: ["Mat", "Sun", "Dog", "Hat"], correct: 0, explanation: "Moon and Mat both start with M (/m/)!" },
        { q: "Blend the sounds /c/ - /a/ - /t/. What word do you hear?", options: ["Cat", "Cup", "Dog", "Sun"], correct: 0, explanation: "/c/ + /a/ + /t/ slides together to make CAT!" },
        { q: "Which word rhymes with 'CAT'?", options: ["Hat", "Bug", "Dog", "Sun"], correct: 0, explanation: "Cat and Hat both end with -at!" },
        { q: "Which letter makes the short /a/ sound in 'APPLE'?", options: ["A", "M", "T", "S"], correct: 0, explanation: "Short A says /a/ like apple and cat!" },
        { q: "Blend the sounds /s/ - /u/ - /n/. What word is it?", options: ["Sun", "Sit", "Sad", "Top"], correct: 0, explanation: "/s/ + /u/ + /n/ = SUN!" },
        { q: "Which word starts with the /s/ sound like 'STAR'?", options: ["Sun", "Pig", "Hat", "Box"], correct: 0, explanation: "Star and Sun both begin with S (/s/)!" },
        { q: "Which word rhymes with 'PAN'?", options: ["Can", "Dog", "Red", "Zip"], correct: 0, explanation: "Pan and Can both end in -an!" },
        { q: "How many letters are in the short CVC word 'DOG'?", options: ["3 letters (D-O-G)", "1 letter", "6 letters", "10 letters"], correct: 0, explanation: "D (consonant), O (vowel), G (consonant) = 3 letters!" }
      ];
      return {
        _hasOwnDayFocusCard: true,
        objectives: [
          `Say and recognize the exact letter sounds for "${cleanTopic}" (${set.letters})`,
          `Slide 3 letter sounds together smoothly to read words (${set.words})`,
          "Spot rhyming word families (-at, -an, -og, -un) out loud"
        ],
        anchorVerse: "Proverbs 16:24 — Kind words are sweet like honey!",
        bigIdea: `Letters are secret sound codes! Today's sound team (${set.letters}) unlocks real words you can read ALL BY YOURSELF!`,
        sections: [
          dayCard,
          {
            stepBadge: `PART 1 · TODAY'S SOUND TEAM (${set.letters})`,
            heading: "Say Each Sound Out Loud With Mom or Dad!",
            body: `Practice crisp, clean letter sounds (no extra "-uh" at the end!):<br/><strong>${set.sounds}</strong><br/><br/>Now slide the sounds together like going down a playground slide to read these real words:<br/><strong>${set.words}</strong>!`,
            keyTakeaway: "Say each sound cleanly, then slide them together fast to hear the word!"
          },
          {
            stepBadge: "PART 2 · READ-ALOUD MINI-STORY!",
            heading: "Read This Short Kindergarten Sentence Together",
            body: `<div style="background:#FFFDF6; border:2px solid #F59E0B; border-radius:10px; padding:0.75rem 1rem; font-size:1.1rem; font-weight:700; color:#0F1E36;">📖 "${set.story}"</div><br/>Point under each word as you read it slowly, then read it a second time smoothly with a big smile!`,
            keyTakeaway: "Point under each word left-to-right as you read!"
          },
          {
            stepBadge: "PART 3 · HANDS-ON HOME ACTIVITY",
            heading: "Letter Sound I-Spy & Finger Tracing!",
            body: `Play <strong>Sound I-Spy</strong> around the room: <em>"I spy with my little eye something starting with /s/!"</em> (Sock, Spoon, Sofa!). Then trace each letter in today's team big in the air with two fingers!`,
            keyTakeaway: "Hearing beginning sounds in real household objects builds super readers!"
          }
        ],
        workedExamples: [
          { badge: "BLENDING EXAMPLE 1", title: "Sound Out: C - A - T", problem: "How do we read the word CAT?", step1: "Tap left arm for /c/.", step2: "Tap elbow for /a/, wrist for /t/.", step3: "Slide down your arm fast: CAT!", pitfall: "Keep the vowel short (/a/ like apple)!" },
          { badge: "RHYMING EXAMPLE 2", title: "Word Family -AT", problem: "Make two rhymes for MAT.", step1: "Keep the ending '-at' the exact same.", step2: "Swap the front letter: S + at = SAT, H + at = HAT!", step3: "Mat, Sat, and Hat all rhyme!", pitfall: "Rhyming words match at the END!" }
        ],
        wordBank: ["Cat", "Sun", "Rhyme", "Sound", "Mat"],
        blanks: [
          { before: "1. Slide /c/ - /a/ - /t/ together to spell ", answer: "Cat", after: ".", hint: "3 letters: C-a-t" },
          { before: "2. Slide /s/ - /u/ - /n/ together to spell ", answer: "Sun", after: ".", hint: "3 letters: S-u-n" },
          { before: "3. Words with the same ending sound (like cat and hat) ", answer: "Rhyme", after: "!", hint: "Starts with R" }
        ],
        writingPrompt: `Read "${set.words}" out loud with a parent, then type one short word you read (like Cat or Sun)!`,
        writingExemplar: `I blended the letter sounds smoothly to read ${set.words}!`,
        quiz: fillQuiz(quizPool, quizTargetCount, w * 23 + d * 5, helper)
      };
    }

    // Weeks 9–36: Sight Words, Digraphs (SH/CH/TH), Silent E, Story Elements & Capitals/Periods
    const quizPool = [
      { q: "What must EVERY sentence begin with?", options: ["A CAPITAL (uppercase) letter", "A period", "A tiny number", "Nothing"], correct: 0, explanation: "Always start a sentence with a CAPITAL letter!" },
      { q: "Which word starts with the /sh/ digraph sound like 'SHIP'?", options: ["Shell", "Cat", "Dog", "Ball"], correct: 0, explanation: "S + H together make one smooth /sh/ sound!" },
      { q: "What happens when Magic Silent E sits at the end of 'CAP' to make 'CAPE'?", options: ["The vowel A says its own name (long A)!", "The word disappears", "It starts with Z", "Nothing changes"], correct: 0, explanation: "Magic Silent E makes the vowel say its long name: cap → cape!" },
      { q: "Who are the CHARACTERS in a storybook?", options: ["The people or animals the story is about", "The page numbers", "The book shelf", "Only the title"], correct: 0, explanation: "Characters are WHO the story is about!" },
      { q: "What is the SETTING of a story?", options: ["WHERE and WHEN the story happens", "The main character's shoes", "The alphabet song", "The end page"], correct: 0, explanation: "Setting = Where and When!" },
      { q: "Which word is a NAMING word (Noun)?", options: ["Puppy", "Jump", "Fast", "Run"], correct: 0, explanation: "A noun names a person, place, animal, or thing!" },
      { q: "Which word is an ACTION word (Verb)?", options: ["Hop", "Apple", "Chair", "Blue"], correct: 0, explanation: "A verb is an action you can do!" },
      { q: "Which word is the OPPOSITE (antonym) of 'HOT'?", options: ["Cold", "Warm", "Sunny", "Bright"], correct: 0, explanation: "Hot and Cold are opposites!" }
    ];
    return {
      _hasOwnDayFocusCard: true,
      objectives: [
        `Read and practice "${cleanTopic}" smoothly with clear expression`,
        "Use Story Elements (Characters, Setting, Beginning–Middle–End) to retell stories",
        "Write simple sentences with a Capital letter, finger spaces, and a period (.)"
      ],
      anchorVerse: "Proverbs 16:24 — Pleasant words are sweet to the soul!",
      bigIdea: `You're becoming a real Kindergarten reader and author! Today in "${cleanTopic}", we unlock tricky sound teams, sight words, and crisp complete sentences!`,
      sections: [
        dayCard,
        {
          stepBadge: "PART 1 · SUPER READER TOOLS",
          heading: `Mastering "${cleanTopic}"`,
          body: `• <strong>Digraph Teams:</strong> <code>SH</code> (ship, shell), <code>CH</code> (chick, chin), <code>TH</code> (thumb, this) make ONE new sound!<br/>• <strong>Magic Silent E:</strong> Silent E at the end makes vowels say their name: <code>cap → cape</code>, <code>bit → bite</code>, <code>hop → hope</code>!<br/>• <strong>Sentence Supercheck:</strong> 1. Capital start · 2. Finger spaces · 3. End mark (. ? !).`,
          keyTakeaway: "Check every sentence: Capital start + finger spaces + period at the end!"
        },
        {
          stepBadge: "PART 2 · STORYTIME RETELL",
          heading: "Characters, Setting & Beginning–Middle–End",
          body: `After reading a K–5 Digital Library book today, use your <strong>5-Finger Retell</strong>:<br/>👍 Thumb = <strong>Characters</strong> (Who?) · ☝️ Pointer = <strong>Setting</strong> (Where?) · Middle/Ring/Pinky = <strong>First, Next, and Last</strong>!`,
          keyTakeaway: "Characters = Who · Setting = Where/When · Plot = First, Next, Last!"
        },
        {
          stepBadge: "PART 3 · HANDS-ON HOME ACTIVITY",
          heading: "Author's Mini-Book Corner!",
          body: `Fold a sheet of paper in half to make a mini-book! Draw a picture of your favorite animal, then write 1 sentence underneath starting with a capital letter (e.g., <em>"The big dog can run."</em>) and read it proudly to your family!`,
          keyTakeaway: "Drawing + writing 1 sentence turns Kindergarteners into joyful authors!"
        }
      ],
      workedExamples: [
        { badge: "EXAMPLE 1 · SENTENCE FIXER", title: "Fix: the cat can hop", problem: "What two things are missing?", step1: "Change tiny 't' to CAPITAL 'T': The", step2: "Check spaces between words: The cat can hop", step3: "Add a period at the end: 'The cat can hop.'", pitfall: "Don't forget finger spaces between every word!" },
        { badge: "EXAMPLE 2 · MAGIC SILENT E", title: "Turn KIT into KITE", problem: "How does Silent E change KIT?", step1: "KIT has a short /i/ sound.", step2: "Add silent E at the end → KITE.", step3: "Now I says its own name ('eye'): KITE!", pitfall: "Silent E stays quiet at the end—it gives its power to the vowel!" }
      ],
      wordBank: ["Capital", "Setting", "Noun", "Verb", "Period"],
      blanks: [
        { before: "1. Every sentence starts with a ", answer: "Capital", after: " letter.", hint: "Starts with C" },
        { before: "2. Where and when a story happens is the ", answer: "Setting", after: ".", hint: "Starts with S" },
        { before: "3. A word that names a person, place, or animal is a ", answer: "Noun", after: ".", hint: "Starts with N" }
      ],
      writingPrompt: "Write 1 short sentence about a happy animal (with a Capital letter and a period!), or type 'Done' after reading aloud!",
      writingExemplar: "The red bird can sing a sweet song.",
      quiz: fillQuiz(quizPool, quizTargetCount, w * 23 + d * 5, helper)
    };
  }

  // =========================================================================
  // 3. KINDERGARTEN BIBLE (THEO-K01) — ALL 36 WEEKS IN 4 DEEP QUARTER MODULES
  // =========================================================================
  function buildKindergartenBible(w, d, cleanTopic, quizTargetCount, helper) {
    const dayCard = dayBannerCard(w, d, cleanTopic, "Bible");
    const qtr = Math.ceil(w / 9);
    const storyMap = {
      1: {
        verse: "Genesis 1:1 — In the beginning God created the heaven and the earth.",
        story: `In the very beginning, before there were any trees, oceans, puppies, or stars, there was God! God spoke with His powerful, loving voice and created light, sky, oceans, green plants, shining sun and moon, birds, fish, land animals—and then God lovingly made people in His own image! And God looked at everything He made and said, <strong>"It is very good!"</strong> Throughout Quarter 1, we also watch God rescue Noah with a bright rainbow promise, keep baby Moses safe in a river basket, help young David trust Him bravely, and protect Daniel in the lions' den!`,
        prayer: `"Dear God, thank You for making this wonderful world and making me! Help me trust You and show Your kindness today. Amen."`,
        activity: "Step outside or look out a window together and name <strong>5 wonderful things God created</strong> (clouds, birds, trees, sunshine, your family!). Draw your favorite one!"
      },
      2: {
        verse: "Luke 2:11 — Unto you is born this day a Saviour, which is Christ the Lord.",
        story: `Jesus came into the world as a tiny baby in Bethlehem while angels sang joyful songs to the shepherds! As Jesus grew up, He loved welcoming little children into His arms, calmed a scary storm on the sea with just three words (<em>"Peace, be still!"</em>), shared five loaves and two fish to feed 5,000 hungry people, and taught us through the Good Samaritan to love and help anyone in need!`,
        prayer: `"Dear Jesus, thank You for loving little children and always being with me—even in stormy moments! Help me love others like You do. Amen."`,
        activity: "Act out today's story of Jesus together in the living room (pretend to rock in a boat and say <em>'Peace, be still!'</em>, or share snacks generously like the boy with 5 loaves and 2 fish!)."
      },
      3: {
        verse: "Psalm 23:1 — The LORD is my shepherd; I shall not want.",
        story: `Just like a gentle shepherd leads his sheep to green grass and cool streams, God takes care of us every single day! In Quarter 3, we practice God's joyful habits: saying <strong>Thank You</strong> (Psalm 100), telling the <strong>truth</strong>, honoring Mom and Dad, sharing kindly with friends, talking to God anytime in <strong>prayer</strong>, and growing the <strong>Fruit of the Spirit</strong> (love, joy, peace, patience, kindness)!`,
        prayer: `"Dear Lord, thank You for being my Good Shepherd. Please grow love, joy, patience, and kindness in my heart today! Amen."`,
        activity: "Start a <strong>Thankful Jar</strong> on the kitchen counter! Write or draw 1 thing you thank God for today and drop it inside!"
      },
      4: {
        verse: "Matthew 28:6 — He is not here: for he is risen!",
        story: `On Palm Sunday, crowds waved bright green palm branches cheering <em>"Hosanna!"</em> Then on Easter morning, the stone rolled away and Jesus rose alive forever—bringing hope, forgiveness, and joy to the whole world! Now we can praise God with joyful songs, care for His animals and earth, and share His love with every neighbor we meet!`,
        prayer: `"Dear Jesus, thank You that You are alive and always with us! Help our family shine Your love to everyone around us. Amen."`,
        activity: "Sing a favorite praise song together and pick one cheerful chore or kind note to surprise someone in your home today!"
      }
    };
    const qInfo = storyMap[qtr] || storyMap[1];
    const quizPool = [
      { q: "Who lovingly created the sun, stars, animals, plants, and YOU?", options: ["God", "A toy robot", "A cloud", "A bicycle"], correct: 0, explanation: "Genesis 1 tells us God created everything good!" },
      { q: "What did God put in the sky after Noah's flood as a promise?", options: ["A bright rainbow", "A giant castle", "A snowstorm", "A ship"], correct: 0, explanation: "The rainbow reminds us God always keeps His promises!" },
      { q: "What is praying?", options: ["Talking and listening to God anytime", "Only yelling loudly", "Hiding under a bed", "Reading numbers"], correct: 0, explanation: "We can pray to thank God and ask for His help anytime!" },
      { q: "How did Jesus calm the big storm on the boat with His friends?", options: ["He spoke 'Peace, be still!' and the wind and waves obeyed", "He rowed super fast", "He jumped off the boat", "He hid in a cave"], correct: 0, explanation: "Jesus has power over nature and gives us peace!" },
      { q: "What does Psalm 23 call the Lord who lovingly guides and cares for us?", options: ["My Good Shepherd", "A sleepy dragon", "A tall tower", "A sailboat"], correct: 0, explanation: "'The Lord is my shepherd!'" },
      { q: "How can a Kindergartener show God's love at home today?", options: ["Obeying cheerfully, telling the truth, and sharing kindly", "Grabbing toys", "Telling a fib", "Ignoring Mom and Dad"], correct: 0, explanation: "Kindness, honesty, and cheerful obedience honor God!" },
      { q: "What did the Good Samaritan do when he saw a hurt traveler?", options: ["He stopped, bandaged him, and cared for him kindly", "He walked past quickly", "He laughed", "He took his horse"], correct: 0, explanation: "Jesus teaches us to show mercy and help people in need!" },
      { q: "What joyful news do we celebrate on Easter morning?", options: ["Jesus is alive!", "It is snowing", "School is closed forever", "Noah built a barn"], correct: 0, explanation: "Jesus rose from the dead and gives us eternal hope!" }
    ];
    return {
      _hasOwnDayFocusCard: true,
      objectives: [
        `Listen to and retell today's Bible lesson: "${cleanTopic}"`,
        `Say our memory verse together: "${qInfo.verse}"`,
        "Practice one loving, truthful action for your family today"
      ],
      anchorVerse: qInfo.verse,
      bigIdea: `God made you, loves you deeply, and walks with you every single day! Today in "${cleanTopic}", let's see God's goodness up close.`,
      sections: [
        dayCard,
        { stepBadge: `PART 1 · STORYTIME (${cleanTopic.toUpperCase()})`, heading: "Read Aloud Together", body: qInfo.story, keyTakeaway: "God always keeps His promises and loves little children!" },
        { stepBadge: "PART 2 · MEMORY VERSE & PRAYER", heading: "Hide God's Word in Your Heart", body: `<strong>Memory Verse:</strong> <em>${qInfo.verse}</em><br/><br/><strong>Family Prayer:</strong> ${qInfo.prayer}`, keyTakeaway: "Praying is simply talking with God like a loving Father!" },
        { stepBadge: "PART 3 · HANDS-ON FAMILY ACTIVITY", heading: "Live Out Today's Story!", body: qInfo.activity, keyTakeaway: "Faith grows strong when we practice kindness every day!" }
      ],
      workedExamples: [
        { badge: "FAMILY TALK 1", title: `Retelling "${cleanTopic}"`, problem: "Can you tell today's Bible story in your own words?", step1: "Who was in the story?", step2: "What wonderful thing did God or Jesus do?", step3: "How does that help us trust God today?", pitfall: "Celebrate every detail your child remembers!" },
        { badge: "CHARACTER CHECK 2", title: "Choosing Kindness", problem: "Your sibling wants to play with a toy you had earlier. What is the loving choice?", step1: "Take a calm breath and smile.", step2: "Use kind words: 'You can have a turn!'", step3: "Sharing shows God's Fruit of the Spirit!", pitfall: "Kind words turn tough moments peaceful!" }
      ],
      wordBank: ["God", "Love", "Pray", "Kind", "Good"],
      blanks: [
        { before: "1. Everything in the sky and earth was lovingly made by ", answer: "God", after: ".", hint: "3 letters, starts with G" },
        { before: "2. Talking and listening to God anytime is called ", answer: "Pray", after: ".", hint: "Starts with P" },
        { before: "3. We shine Jesus's love when we are truthful and ", answer: "Kind", after: ".", hint: "Starts with K" }
      ],
      writingPrompt: `Tell Mom or Dad one thing you thank God for today (or type 'Love' or 'Good')!`,
      writingExemplar: `Thank You God for making a wonderful world and loving my family!`,
      quiz: fillQuiz(quizPool, quizTargetCount, w * 19 + d * 11, helper)
    };
  }

  // =========================================================================
  // 4. KINDERGARTEN SCIENCE (SCI-K01) — ALL 36 WEEKS IN 4 DEEP QUARTER MODULES
  // =========================================================================
  function buildKindergartenScience(w, d, cleanTopic, quizTargetCount, helper) {
    const dayCard = dayBannerCard(w, d, cleanTopic, "science");
    const qtr = Math.ceil(w / 9);
    const sciUnits = {
      1: {
        title: "Five Senses, Living Things, Plants & Animals",
        body1: `God gave you <strong>Five Amazing Senses</strong> to explore His world:<br/>👀 <strong>Sight</strong> (eyes) · 👂 <strong>Hearing</strong> (ears) · ✋ <strong>Touch</strong> (hands/skin) · 👃 <strong>Smell</strong> (nose) · 👅 <strong>Taste</strong> (tongue)!<br/><br/>Remember how to spot a <strong>Living Thing</strong>: it <strong>grows</strong>, needs <strong>water, air, and food</strong> (like plants, puppies, and YOU!). Nonliving things like rocks and toy trucks do not grow.`,
        body2: `Every plant has 4 helpful parts: <strong>Roots</strong> (underground—drink water), <strong>Stem</strong> (holds the plant up like a straw), <strong>Leaves</strong> (soak up sunlight to make food), and <strong>Flower/Seeds</strong> (make new plants!).`,
        lab: "Go on a 5-minute <strong>Backyard or Window Science Safari</strong>! Point to 2 Living things and 2 Nonliving things, gently feel rough tree bark vs. a smooth leaf, and listen for 2 outdoor sounds!"
      },
      2: {
        title: "Weather, Four Seasons, Sun, Moon & Earth",
        body1: `Look up at the sky! Every day has <strong>Weather</strong> (sunny, rainy, cloudy, windy, or snowy), and the year cycles through <strong>Four Seasons</strong>: <strong>Spring</strong> (flowers bloom), <strong>Summer</strong> (hot sunny days), <strong>Autumn/Fall</strong> (colorful leaves drop), and <strong>Winter</strong> (cold/snowy days).`,
        body2: `The bright <strong>Sun</strong> gives Earth light and warmth during the day, while the <strong>Moon and twinkling Stars</strong> shine in the night sky! Earth is made of <strong>Rocks, Soil, and Water</strong>—and recycling helps keep God's earth clean!`,
        lab: "Be today's <strong>Family Weather Reporter</strong>! Look outside, check if you need a T-shirt, raincoat, or warm jacket, and draw today's sky (sun, clouds, or raindrops)!"
      },
      3: {
        title: "Pushes & Pulls, Sink or Float, Magnets & Melting Ice",
        body1: `Things don't move all by themselves—they need a <strong>PUSH</strong> (moves away from you, like kicking a soccer ball) or a <strong>PULL</strong> (brings closer to you, like pulling a wagon)! A steeper ramp makes a toy car roll <strong>FASTER</strong>!`,
        body2: `Matter comes as a <strong>Solid</strong> (holds its shape, like an ice cube or block) or a <strong>Liquid</strong> (pours and flows, like water or milk). Warmth melts solid ice into liquid water! And <strong>Magnets</strong> magically pull iron/steel paperclips—but won't stick to plastic or wood!`,
        lab: "<strong>Kitchen Sink or Float Lab!</strong> Fill a bowl with water and test 4 safe items (a wooden spoon, a coin, a plastic cap, an apple). Predict first: <em>Sink or Float?</em> Then test!"
      },
      4: {
        title: "Healthy Bodies, Butterflies, Frogs & Nature Journals",
        body1: `Healthy foods (fruits, veggies, protein, water), good sleep, and outdoor play keep your heart, bones, and muscles strong!`,
        body2: `Nature has awesome life cycles: a hungry <strong>caterpillar</strong> builds a chrysalis and transforms into a colorful <strong>butterfly</strong>! A tiny swimming <strong>tadpole</strong> grows legs and hops out as a <strong>frog</strong>! Bees help flowers make fruit by carrying golden pollen!`,
        lab: "Grab a magnifying glass (or look closely with your eyes) at a leaf, flower, or bug outside and sketch what you discover in your Kindergarten Nature Journal!"
      }
    };
    const u = sciUnits[qtr] || sciUnits[1];
    const quizPool = [
      { q: "Which sense do you use with your EYES to see bright colors?", options: ["Sight", "Taste", "Smell", "Hearing"], correct: 0, explanation: "Your eyes give you the sense of Sight!" },
      { q: "Which of these is a LIVING thing that grows and needs water?", options: ["A green oak tree", "A shiny rock", "A plastic toy car", "A metal spoon"], correct: 0, explanation: "Trees, plants, and animals are living things!" },
      { q: "Which part of a plant grows underground and drinks water from the soil?", options: ["The roots", "The petals", "The clouds", "The shadow"], correct: 0, explanation: "Roots soak up water and anchor the plant!" },
      { q: "Which season brings warm sunny days for swimming and long daylight?", options: ["Summer", "Winter", "Midnight", "Friday"], correct: 0, explanation: "Summer is the warmest, sunniest season!" },
      { q: "When you KICK a soccer ball across the grass, is that a PUSH or a PULL?", options: ["A PUSH (moves away from you)", "A pull toward your nose", "Melting", "Freezing"], correct: 0, explanation: "Pushes move objects away; pulls bring them closer!" },
      { q: "What happens to a solid ice cube when you leave it in a warm sunny room?", options: ["It melts into liquid water", "It turns into a rock", "It grows leaves", "It disappears into a magnet"], correct: 0, explanation: "Heat melts solid ice into liquid water!" },
      { q: "What does a hungry caterpillar transform into inside its chrysalis?", options: ["A colorful butterfly", "A puppy", "A turtle", "A goldfish"], correct: 0, explanation: "Caterpillar → Chrysalis → Butterfly!" },
      { q: "What gives Earth daylight and warmth every morning?", options: ["The Sun", "A flashlight", "Ocean waves", "Rocks"], correct: 0, explanation: "The Sun lights and warms our whole planet!" }
    ];
    return {
      _hasOwnDayFocusCard: true,
      objectives: [
        `Explore "${cleanTopic}" with curious eyes and your five senses`,
        `Understand core Kindergarten science concepts (${u.title})`,
        "Try today's fun 5-minute hands-on science lab at home!"
      ],
      anchorVerse: "Psalm 19:1 — The heavens declare the glory of God!",
      bigIdea: `Science is exploring God's amazing creation up close! Today in "${cleanTopic}", we observe, predict, and test like real junior scientists!`,
      sections: [
        dayCard,
        { stepBadge: "PART 1 · JUNIOR SCIENTIST DISCOVERY", heading: `${cleanTopic}`, body: u.body1, keyTakeaway: "Use your 5 senses carefully to notice details in nature!" },
        { stepBadge: "PART 2 · HOW NATURE WORKS", heading: "Patterns in Plants, Weather & Matter", body: u.body2, keyTakeaway: "Nature follows reliable, wonderful designs!" },
        { stepBadge: "PART 3 · HANDS-ON HOME LAB (5 MINUTES)", heading: "Try This Fun Experiment With Mom or Dad!", body: u.lab, keyTakeaway: "Real scientists predict first, then observe what actually happens!" }
      ],
      workedExamples: [
        { badge: "SCIENCE CHECK 1", title: "Living vs. Nonliving", problem: "Is a puppy living or nonliving?", step1: "Does a puppy grow bigger? YES!", step2: "Does it drink water, breathe air, and eat food? YES!", step3: "A puppy is LIVING!", pitfall: "Cars move, but they don't grow—so cars are nonliving!" },
        { badge: "SCIENCE CHECK 2", title: "Solid vs. Liquid", problem: "Is orange juice a solid or a liquid?", step1: "Does orange juice pour and take the shape of your cup?", step2: "YES—it flows smoothly!", step3: "Orange juice is a LIQUID!", pitfall: "Freeze juice into a popsicle and it becomes a SOLID!" }
      ],
      wordBank: ["Living", "Roots", "Sunlight", "Push", "Liquid"],
      blanks: [
        { before: "1. Plants and animals that grow and need water are ", answer: "Living", after: " things.", hint: "Starts with L" },
        { before: "2. The underground plant part that drinks up water is its ", answer: "Roots", after: ".", hint: "Starts with R" },
        { before: "3. Moving a ball away from you is called a ", answer: "Push", after: ".", hint: "Starts with P" }
      ],
      writingPrompt: `Tell Mom or Dad one cool science thing you saw or tested today for "${cleanTopic}" (or type 'Living' or 'Sun')!`,
      writingExemplar: `Plants are living things whose roots drink water and whose leaves soak up sunlight!`,
      quiz: fillQuiz(quizPool, quizTargetCount, w * 29 + d * 3, helper)
    };
  }

  // =========================================================================
  // 5. KINDERGARTEN SOCIAL STUDIES (HIST-K01) — ALL 36 WEEKS IN 4 DEEP MODULES
  // =========================================================================
  function buildKindergartenHistory(w, d, cleanTopic, quizTargetCount, helper) {
    const dayCard = dayBannerCard(w, d, cleanTopic, "social studies");
    const qtr = Math.ceil(w / 9);
    const ssUnits = {
      1: {
        body1: `Every family and town works best when people help one another! <strong>Kind Rules</strong> (looking both ways before crossing the street, taking turns, speaking honestly) keep everyone safe and happy.`,
        body2: `Meet our wonderful <strong>Community Helpers</strong>:<br/>🚒 <strong>Firefighters &amp; Police Officers</strong> keep our neighborhood safe · 🩺 <strong>Doctors &amp; Nurses</strong> help us heal · 📚 <strong>Teachers &amp; Librarians</strong> help us learn · 📬 <strong>Mail Carriers</strong> bring letters · 🚜 <strong>Farmers &amp; Bakers</strong> grow and make our food!`,
        activity: "Play <strong>Community Helper Dress-Up or Charades</strong>! Act out a firefighter, doctor, or mail carrier and let Mom or Dad guess—then draw a thank-you card for a helper in your town!"
      },
      2: {
        body1: `A <strong>Map</strong> is a flat bird's-eye picture showing where rooms, roads, parks, and rivers are! A <strong>Globe</strong> is a round model of Earth—<strong>BLUE</strong> shows water (oceans &amp; lakes) and <strong>GREEN/BROWN</strong> shows land! The four compass directions are <strong>North, South, East, and West</strong>.`,
        body2: `Smart families know the difference between <strong>NEEDS</strong> (food, clean water, warm clothes, a safe home) and <strong>WANTS</strong> (extra toys, candy, balloons)! We work honestly to earn coins, take care of needs first, save some, and share generously!`,
        activity: "Draw a simple <strong>Bird's-Eye Map of Your Bedroom</strong> (draw rectangles for your bed, door, and toy shelf) and add a little Map Key!"
      },
      3: {
        body1: `<strong>Past</strong> means long ago (horse-and-buggy, candles, one-room schoolhouses), <strong>Present</strong> means right now today, and <strong>Future</strong> means tomorrow and years ahead!`,
        body2: `Meet proud <strong>American Symbols &amp; Heroes</strong>: the <strong>American Flag</strong> (50 stars for 50 states!), the <strong>Bald Eagle</strong>, the <strong>Statue of Liberty</strong>, <strong>George Washington</strong> (our 1st President), <strong>Abraham Lincoln</strong> (honest leader who united America), and <strong>Dr. Martin Luther King Jr.</strong> (taught kindness and fairness for every person)!`,
        activity: "Look at a penny (Abraham Lincoln) and a quarter (George Washington) with Mom or Dad—and count the colors on the American Flag (Red, White, and Blue)!"
      },
      4: {
        body1: `Children around the whole world share fun games, music, foods, and family traditions! No matter where someone lives, every person deserves kindness, listening ears, and respect.`,
        body2: `<strong>Great Kindergarten Citizens</strong> take turns, tell the truth, keep their promises, solve disagreements with calm words instead of grabbing, and throw trash in bins to keep parks clean!`,
        activity: "Make a <strong>My Life Timeline</strong> with 3 quick drawings: <em>1. Baby Me → 2. Toddler Me → 3. Kindergarten Me Today!</em>"
      }
    };
    const u = ssUnits[qtr] || ssUnits[1];
    const quizPool = [
      { q: "Which community helper rushes in a red truck to put out fires and rescue people?", options: ["Firefighters", "Bakers", "Astronauts", "Zookeepers"], correct: 0, explanation: "Firefighters bravely protect homes and families!" },
      { q: "Which of these is a NEED (something every family must have to live safely)?", options: ["Food, clean water, and a safe home", "Ten party balloons", "A new video game", "A giant lollipop"], correct: 0, explanation: "Needs keep us alive and healthy; wants are fun extras!" },
      { q: "On a globe or map, what does the big BLUE area show?", options: ["Water (oceans, lakes, and rivers)", "Green forests", "Brick houses", "Playgrounds"], correct: 0, explanation: "Blue always marks water on maps and globes!" },
      { q: "What are the four main directions on a compass rose?", options: ["North, South, East, and West", "Jump, Hop, Skip, and Run", "Red, Blue, Yellow, Green", "Morning, Lunch, Dinner, Bed"], correct: 0, explanation: "North, South, East, and West help travelers navigate!" },
      { q: "Who was the very first President of the United States?", options: ["George Washington", "King Arthur", "A movie star", "Peter Pan"], correct: 0, explanation: "George Washington served as America's first President!" },
      { q: "Why do families and communities have kind rules?", options: ["To keep everyone safe and treat neighbors fairly", "So nobody can have fun", "For no reason", "To hide toys"], correct: 0, explanation: "Fair rules protect everyone!" },
      { q: "What does PAST mean?", options: ["Things that already happened long ago or yesterday", "What will happen next year", "Right this exact second", "A kind of map"], correct: 0, explanation: "Past = before now · Present = today · Future = coming next!" },
      { q: "How do good citizens take care of neighborhood parks?", options: ["Put trash in garbage cans and share playground equipment kindly", "Drop wrappers on the grass", "Push others off the swings", "Break tree branches"], correct: 0, explanation: "Good citizens care for shared spaces and neighbors!" }
    ];
    return {
      _hasOwnDayFocusCard: true,
      objectives: [
        `Explore "${cleanTopic}" with fun stories about helpers, maps, and heroes`,
        "Know Needs vs. Wants, blue water vs. green land on globes, and kind rules",
        "Practice being a truthful, helpful Kindergarten citizen at home!"
      ],
      anchorVerse: "Proverbs 22:1 — A good name is rather to be chosen than great riches!",
      bigIdea: `We all belong to a family, a neighborhood, and a big beautiful world! Today in "${cleanTopic}", we learn how helpers, maps, and honest citizens make communities thrive.`,
      sections: [
        dayCard,
        { stepBadge: `PART 1 · ${cleanTopic.toUpperCase()}`, heading: "Learning About Our World & Neighborhood", body: u.body1, keyTakeaway: "Kind rules and caring neighbors make every home and town joyful!" },
        { stepBadge: "PART 2 · HELPERS, SYMBOLS & SMART CHOICES", heading: "Important Things to Remember", body: u.body2, keyTakeaway: "Take care of Needs first, thank helpers, and always tell the truth!" },
        { stepBadge: "PART 3 · HANDS-ON HOME ACTIVITY", heading: "Fun Project With Mom or Dad!", body: u.activity, keyTakeaway: "Drawing maps and thanking helpers brings social studies to life!" }
      ],
      workedExamples: [
        { badge: "CITIZEN CHECK 1", title: "Need or Want?", problem: "Is clean drinking water a Need or a Want?", step1: "Can people live without drinking water?", step2: "NO—our bodies need water every day!", step3: "So clean water is a NEED!", pitfall: "A sparkly toy is fun, so it's a WANT—not a Need!" },
        { badge: "MAP CHECK 2", title: "Reading a Globe", problem: "Point to the blue parts of a globe. What are they?", step1: "Blue represents water (big oceans and lakes).", step2: "Green and brown represent dry land (continents).", step3: "Blue = Water · Green/Brown = Land!", pitfall: "Most of Earth's surface is covered in blue ocean water!" }
      ],
      wordBank: ["Map", "Need", "Helper", "Blue", "Citizen"],
      blanks: [
        { before: "1. A flat drawing that shows roads, rooms, and parks is a ", answer: "Map", after: ".", hint: "3 letters, starts with M" },
        { before: "2. Food, water, and a safe home are things every family must have—a ", answer: "Need", after: ".", hint: "Starts with N" },
        { before: "3. On a globe, oceans and lakes are colored ", answer: "Blue", after: ".", hint: "Starts with B" }
      ],
      writingPrompt: `Tell Mom or Dad one community helper you want to thank (or type 'Map' or 'Helper')!`,
      writingExemplar: `Firefighters and doctors are brave community helpers, and I can be a good citizen by helping my family!`,
      quiz: fillQuiz(quizPool, quizTargetCount, w * 37 + d * 13, helper)
    };
  }

  // =========================================================================
  // REGISTER GRADE 0 (KINDERGARTEN) DEEP CURRICULUM MODULE
  // =========================================================================
  window.ACADEMY_GRADE_CURRICULA[0] = function (course, wNum, dayIdx, cleanTopic, quizTargetCount, helper) {
    const dept = (course.department || "").toLowerCase();
    const code = (course.code || "").toUpperCase();

    if (dept.includes("math") || code.startsWith("MATH")) {
      return buildKindergartenMath(wNum, dayIdx, cleanTopic, quizTargetCount, helper);
    }
    if (dept.includes("literature") || code.startsWith("ELA") || code.startsWith("LIT")) {
      return buildKindergartenReading(wNum, dayIdx, cleanTopic, quizTargetCount, helper);
    }
    if (dept.includes("theology") || code.startsWith("THEO")) {
      return buildKindergartenBible(wNum, dayIdx, cleanTopic, quizTargetCount, helper);
    }
    if (dept.includes("science") || code.startsWith("SCI")) {
      return buildKindergartenScience(wNum, dayIdx, cleanTopic, quizTargetCount, helper);
    }
    if (dept.includes("history") || code.startsWith("HIST")) {
      return buildKindergartenHistory(wNum, dayIdx, cleanTopic, quizTargetCount, helper);
    }
    return null; // Electives (Coding, ASL, Art, Music, Life Skills) use their dedicated elective engines
  };
})();
