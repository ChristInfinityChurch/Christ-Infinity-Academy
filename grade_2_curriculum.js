// Christ Infinity Academy — Dedicated Grade 2 Deep Curriculum Module
// Real-school depth across ALL 5 Grade 2 Core Subjects (Math, Reading/ELA, Bible, Science, History/Geography) × All 36 Weeks × Days 1–5!

(function () {
  window.ACADEMY_GRADE_CURRICULA = window.ACADEMY_GRADE_CURRICULA || {};

  function shuffleQ(qObj, seed, helper) {
    return helper && typeof helper.shuffleQuestionOptions === "function"
      ? helper.shuffleQuestionOptions(qObj, seed)
      : qObj;
  }

  function fillQuiz(pool, targetCount, seedBase, helper) {
    const out = [];
    for (let i = 0; i < targetCount; i++) {
      out.push(shuffleQ(pool[i % pool.length], seedBase + i * 17, helper));
    }
    return out;
  }

  function g2DayCard(wNum, dayIdx, cleanTopic) {
    const days = [
      { b: "MONDAY · DAY 1 OF 5 (CONCEPT LAUNCH)", h: `Monday Kickoff: Mastering "${cleanTopic}" (Grade 2)`, t: `Welcome to Week ${wNum}, Day 1! Today we break open <strong>${cleanTopic}</strong> with clear visuals, real examples, and Grade 2 mastery habits.`, k: "Day 1 Goal: Understand WHY the rule works—not just memorizing!" },
      { b: "TUESDAY · DAY 2 OF 5 (STEP-BY-STEP STRATEGY)", h: `Tuesday Builder: Worked Examples on "${cleanTopic}"`, t: `On Day 2, we sharpen speed and accuracy on <strong>${cleanTopic}</strong> using fresh Tuesday examples and checking every answer cleanly.`, k: "Day 2 Goal: Show every step neatly and double-check!" },
      { b: "WEDNESDAY · DAY 3 OF 5 (REAL-WORLD LAB)", h: `Wednesday Application: "${cleanTopic}" in Everyday Life`, t: `Midweek hands-on day! Today we apply <strong>${cleanTopic}</strong> to real stories, measurements, or mini home projects.`, k: "Day 3 Goal: Connect classroom knowledge to the real world!" },
      { b: "THURSDAY · DAY 4 OF 5 (SPIRAL REVIEW)", h: `Thursday Spiral Review: Checking Tricky Spots on "${cleanTopic}"`, t: `Today we pair <strong>${cleanTopic}</strong> with earlier Grade 2 foundations so you catch common mistakes before Friday's Check!`, k: "Day 4 Goal: Teach the main rule out loud to a parent!" },
      { b: "FRIDAY · DAY 5 OF 5 (WEEKLY CHECK)", h: `Friday Mastery Check: Celebrating Week ${wNum} ("${cleanTopic}")`, t: `Happy Friday, 2nd Grade Scholar! Review your takeaways below and take your 15-question Weekly Check (≥85% unlocks Week ${Math.min(36, wNum + 1)}—and Redo Day is always one click away!).`, k: "Day 5 Goal: Demonstrate rock-solid Grade 2 mastery!" }
    ];
    const x = days[dayIdx % 5];
    return { stepBadge: x.b, heading: x.h, body: x.t, keyTakeaway: x.k };
  }

  // ==================== 1. GRADE 2 MATH (MATH-201) ====================
  function buildGrade2Math(w, d, cleanTopic, quizTargetCount, helper) {
    const dayCard = g2DayCard(w, d, cleanTopic);
    const a = 27 + d * 6, b = 18 + d * 4;
    const subA = 62 + d * 5, subB = 27 + d * 3;
    const rows = 3 + (d % 4), cols = 4 + (d % 3);
    const qtr = 2 + (d % 2), dime = 1 + (d % 3);

    if (w <= 18) {
      // Sem 1: 2-Digit & 3-Digit Regrouping, Place Value to 1,000, Expanded Form, Even/Odd
      const quizPool = [
        { q: "Add WITH regrouping: 38 + 25 = ?", options: ["63", "53", "62", "73"], correct: 0, explanation: "8 + 5 = 13 (write 3, carry 1 ten); 3 + 2 + 1 = 6 tens → 63!" },
        { q: "Subtract WITH regrouping: 52 − 17 = ?", options: ["35", "45", "37", "69"], correct: 0, explanation: "Borrow 1 ten (52 = 4 tens + 12 ones): 12 − 7 = 5, 4 − 1 = 3 → 35!" },
        { q: "Write in STANDARD FORM: 6 hundreds, 4 tens, and 9 ones:", options: ["649", "694", "469", "6409"], correct: 0, explanation: "600 + 40 + 9 = 649!" },
        { q: "What is the EXPANDED FORM of 538?", options: ["500 + 30 + 8", "5 + 3 + 8", "50 + 30 + 8", "500 + 380"], correct: 0, explanation: "Each digit shows its place value: 500 + 30 + 8!" },
        { q: "Which of these numbers is EVEN (can split into two equal pairs)?", options: ["24", "17", "35", "49"], correct: 0, explanation: "Even numbers ALWAYS end in 0, 2, 4, 6, or 8!" },
        { q: "What is 100 MORE than 347?", options: ["447", "357", "247", "348"], correct: 0, explanation: "Adding 1 hundred bumps 3 hundreds to 4 hundreds → 447!" },
        { q: "Compare 419 and 491: Which symbol makes it true? 419 ___ 491", options: ["< (less than)", "> (greater than)", "= (equal)", "+ (plus)"], correct: 0, explanation: "Both have 4 hundreds; compare tens next: 1 ten < 9 tens, so 419 < 491!" },
        { q: "Add 3-digit numbers: 245 + 132 = ?", options: ["377", "367", "387", "277"], correct: 0, explanation: "Hundreds: 300, Tens: 70, Ones: 7 → 377!" }
      ];
      return {
        _hasOwnDayFocusCard: true,
        objectives: [
          `Master "${cleanTopic}" with crisp Grade 2 regrouping & place-value fluency`,
          "Add and subtract 2-digit & 3-digit numbers WITH carrying and borrowing tens cleanly",
          "Write numbers to 1,000 in Standard Form, Expanded Form (500 + 30 + 8), and check Even/Odd"
        ],
        anchorVerse: "Proverbs 16:11 — A just weight and balance are the LORD's.",
        bigIdea: "In 2nd Grade Math, 10 ones trade up for 1 ten, and 10 tens trade up for 1 hundred! Mastering regrouping unlocks every big number all the way to 1,000!",
        sections: [
          dayCard,
          { stepBadge: "PART 1 · REGROUPING (CARRYING & BORROWING)", heading: "The Golden Rule: Start in the ONES Column!", body: `• <strong>Adding (${a} + ${b}):</strong> Add ones first. If the sum is 10 or more, write the ones digit and <strong>carry 1 ten</strong> over to the tens column!<br/>• <strong>Subtracting (${subA} − ${subB}):</strong> If there is "more on the floor" (bottom ones digit bigger than top), go next door and <strong>borrow 1 ten</strong> (= 10 ones)!`, keyTakeaway: "Always check subtraction by adding your answer + the subtracted number!" },
          { stepBadge: "PART 2 · PLACE VALUE TO 1,000 & EXPANDED FORM", heading: "Hundreds, Tens & Ones", body: `Stretch <strong>648</strong> like a rubber band into <strong>Expanded Form</strong>: <code>600 + 40 + 8</code>! To compare two 3-digit numbers, check <strong>Hundreds first → then Tens → then Ones</strong>!`, keyTakeaway: "Even numbers end in 0, 2, 4, 6, 8 · Odd numbers end in 1, 3, 5, 7, 9!" },
          { stepBadge: "PART 3 · HANDS-ON HOME ACTIVITY", heading: "Base-Ten Drawing & Grocery Price Check!", body: `Draw squares (100s), tall sticks (10s), and dots (1s) on paper to solve <strong>${a} + ${b}</strong> and trade 10 dots for 1 new stick!`, keyTakeaway: "Visual trades make regrouping 100% logical instead of mysterious!" }
        ],
        workedExamples: [
          { badge: "WORKED EXAMPLE 1 · CARRY A TEN", title: `Add ${a} + ${b}`, problem: `Compute ${a} + ${b} with regrouping.`, step1: `Ones column: ${a % 10} + ${b % 10} = ${(a % 10) + (b % 10)}.`, step2: `Write ${(a + b) % 10} and carry ${Math.floor(((a % 10) + (b % 10)) / 10)} ten to the tens column.`, step3: `Add tens → Final Answer = ${a + b}!`, pitfall: "Never forget to include the carried 1 ten!" },
          { badge: "WORKED EXAMPLE 2 · BORROW A TEN", title: `Subtract ${subA} − ${subB}`, problem: `Compute ${subA} − ${subB}.`, step1: `Check ones column: regroup 1 ten into 10 ones if needed.`, step2: `Subtract ones, then subtract remaining tens.`, step3: `Answer = ${subA - subB}! Check: ${subA - subB} + ${subB} = ${subA} ✓.`, pitfall: "Always reduce the tens digit by 1 when you borrow a ten!" }
        ],
        problems: [
          { prompt: `1. Add with regrouping: ${a} + ${b} =`, answer: String(a + b), hint: `Add ones first, carry if ≥10!` },
          { prompt: `2. Subtract with regrouping: ${subA} − ${subB} =`, answer: String(subA - subB), hint: `Borrow 1 ten if needed, then check by adding back!` },
          { prompt: `3. Standard form of 5 hundreds, 2 tens, 9 ones:`, answer: "529", hint: `500 + 20 + 9!` },
          { prompt: `4. What is 100 MORE than ${235 + d * 10}?`, answer: String(335 + d * 10), hint: `Bump the hundreds digit up by 1!` },
          { prompt: `5. Add 3-digit numbers: 214 + 135 =`, answer: "349", hint: `Add hundreds, tens, and ones!` }
        ],
        writingPrompt: `In 2 clear sentences, explain how you checked your subtraction answer for ${subA} − ${subB} and how you know if a number is Even or Odd.`,
        writingExemplar: `I checked ${subA} − ${subB} = ${subA - subB} by adding ${subA - subB} + ${subB} to get ${subA} back. A number is even if its ones digit ends in 0, 2, 4, 6, or 8.`,
        quiz: fillQuiz(quizPool, quizTargetCount, w * 31 + d * 7, helper)
      };
    }

    // Sem 2 (Weeks 19–36): Arrays (Intro Multiplication), Rulers (Inches/cm), Time to 5 Mins, Quarters & Change, Polygons
    const quizPool = [
      { q: `A muffin pan has ${rows} rows with ${cols} muffins in each row. How many muffins total?`, options: [String(rows * cols), String(rows + cols), String(rows * cols + rows), String(rows * cols - 2)], correct: 0, explanation: `${rows} equal rows of ${cols} = ${rows * cols} muffins!` },
      { q: "How much money is 3 QUARTERS and 1 DIME?", options: ["85¢", "75¢", "95¢", "40¢"], correct: 0, explanation: "3 quarters (25, 50, 75¢) + 1 dime (10¢) = 85¢!" },
      { q: "You buy a sticker for 75¢ and pay with $1.00 (100¢). How much change should you get back?", options: ["25¢ (1 quarter)", "50¢", "15¢", "75¢"], correct: 0, explanation: "100¢ − 75¢ = 25¢ change!" },
      { q: "On a clock, each big number stands for 5 minutes. If the minute hand points to 4, how many minutes past the hour is it?", options: ["20 minutes (:20)", "4 minutes (:04)", "40 minutes (:40)", "15 minutes (:15)"], correct: 0, explanation: "Count by 5s four times: 5, 10, 15, 20 → :20!" },
      { q: "How many inches are in 1 FOOT on a standard ruler?", options: ["12 inches", "5 inches", "100 inches", "3 inches"], correct: 0, explanation: "1 foot = 12 inches!" },
      { q: "Which 2D polygon has exactly 5 straight sides and 5 angles?", options: ["Pentagon", "Triangle", "Hexagon", "Square"], correct: 0, explanation: "Penta- = 5 (Pentagon) · Hexa- = 6 (Hexagon)!" },
      { q: "How many flat square FACES does a 3D cube have?", options: ["6 faces", "4 faces", "2 faces", "8 faces"], correct: 0, explanation: "Just like a dice block numbered 1 to 6, a cube has 6 square faces!" },
      { q: "If you divide a pie into 3 EQUAL slices, what is each slice called?", options: ["One THIRD (1/3)", "One half", "One fourth", "One fifth"], correct: 0, explanation: "3 equal shares = Thirds!" }
    ];
    return {
      _hasOwnDayFocusCard: true,
      objectives: [
        `Master "${cleanTopic}" across arrays, measurement, time to 5 minutes, and making change`,
        "Use repeated addition on rectangular arrays (your bridge to Grade 3 multiplication!)",
        "Count quarters, dimes, nickels & dollars and classify polygons (pentagon, hexagon, cube)"
      ],
      anchorVerse: "Proverbs 16:11 — Honest scales and balances belong to the Lord.",
      bigIdea: "Second-semester Grade 2 Math builds your bridge to Grade 3: arrays introduce multiplication, clocks go to every 5 minutes, and quarters + making change build real-life money confidence!",
      sections: [
        dayCard,
        { stepBadge: "PART 1 · ARRAYS & QUARTERS MONEY MATH", heading: "Rows × Columns & Counting by 25s", body: `• <strong>Arrays:</strong> ${rows} rows with ${cols} tiles in each row = adding ${cols} together ${rows} times → <strong>${rows * cols}</strong>!<br/>• <strong>Quarters Chant:</strong> <strong>25¢, 50¢, 75¢, $1.00!</strong> To make change from $1.00 (100¢), count up from the price to 100¢!`, keyTakeaway: "Rows go side-to-side (horizontal) · Columns go up-and-down (vertical)!" },
        { stepBadge: "PART 2 · TIME TO 5 MINUTES & RULERS", heading: "Skip-Counting Around the Clock & Measuring Accurately", body: `Count by <strong>5s</strong> around the clock numbers (1=:05, 2=:10, 3=:15, 4=:20, 5=:25, 6=:30!). Remember <strong>a.m.</strong> = morning (before noon) and <strong>p.m.</strong> = afternoon/evening! When using a ruler, line the edge up at the <strong>0 mark</strong> (12 inches = 1 foot).`, keyTakeaway: "Always start measuring at 0 on the ruler—never at 1!" },
        { stepBadge: "PART 3 · HANDS-ON HOME ACTIVITY", heading: "Ruler Hunt & Muffin-Tin Array!", body: `Measure 3 objects (a pencil, a book, a shoe) to the nearest inch AND nearest centimeter—notice why it takes MORE centimeters than inches to measure the same pencil (centimeters are smaller units!).`, keyTakeaway: "Smaller measurement units always give a bigger count!" }
      ],
      workedExamples: [
        { badge: "WORKED EXAMPLE 1 · MAKING CHANGE", title: "Buy a 65¢ Apple With $1.00", problem: "How much change do you receive?", step1: "Start at 65¢ and add 1 nickel (+5¢) → 70¢.", step2: "Count up by tens to 100¢: 80¢, 90¢, 100¢ (+30¢).", step3: "Total change = 5¢ + 30¢ = 35¢!", pitfall: "Check: 65¢ + 35¢ = 100¢ ($1.00) ✓!" },
        { badge: "WORKED EXAMPLE 2 · ARRAY", title: `${rows} Rows of ${cols}`, problem: `Find the total tiles in a ${rows}-by-${cols} array.`, step1: `Each of the ${rows} rows holds ${cols} tiles.`, step2: `Skip-count by ${cols} exactly ${rows} times.`, step3: `Total = ${rows * cols} tiles!`, pitfall: "Count every row carefully!" }
      ],
      problems: [
        { prompt: `1. Array: ${rows} rows with ${cols} stars in each row =`, answer: String(rows * cols), hint: `Add ${cols} together ${rows} times!` },
        { prompt: `2. How many cents is ${qtr} quarters and ${dime} dime(s) (number only)?`, answer: String(qtr * 25 + dime * 10), hint: `${qtr * 25} + ${dime * 10}!` },
        { prompt: `3. Change from $1.00 (100¢) if a snack costs 75¢ (number only):`, answer: "25", hint: `100 − 75 = ?` },
        { prompt: `4. Minute hand points to 5 on a clock → how many minutes past the hour?`, answer: "25", hint: `Count by 5s five times!` },
        { prompt: `5. How many sides does a PENTAGON have?`, answer: "5", hint: "Penta- means five!" }
      ],
      writingPrompt: `In 2 clear sentences, explain how you count ${qtr} quarters and ${dime} dime(s), and explain why measuring a book in centimeters gives a bigger number than inches.`,
      writingExemplar: `I count quarters by 25s (${qtr * 25}¢) and add ${dime * 10}¢ for the dime(s) to get ${qtr * 25 + dime * 10}¢. Centimeters give a bigger number than inches because each centimeter is much shorter than an inch.`,
      quiz: fillQuiz(quizPool, quizTargetCount, w * 31 + d * 7, helper)
    };
  }

  // ==================== 2. GRADE 2 READING, BIBLE, SCIENCE & HISTORY ====================
  function buildGrade2Subject(subj, w, d, cleanTopic, quizTargetCount, helper) {
    const dayCard = g2DayCard(w, d, cleanTopic);

    if (subj === "reading") {
      const quizPool = [
        { q: "What does the prefix 'UN-' mean in words like 'UNHAPPY' and 'UNTIE'?", options: ["NOT / the opposite of", "Again", "Before", "Full of"], correct: 0, explanation: "Un- means not/opposite; Re- means again!" },
        { q: "What does the prefix 'RE-' mean in 'REBUILD' and 'REREAD'?", options: ["Again / back", "Not", "Without", "Underneath"], correct: 0, explanation: "Re- means do it again!" },
        { q: "Choose the correct IRREGULAR PAST TENSE verb: Yesterday I ___ a chapter book.", options: ["read / wrote (irregular!)", "writed", "runned", "goed"], correct: 0, explanation: "Irregular verbs change spelling instead of adding -ed (run→ran, write→wrote, go→went)!" },
        { q: "Which word is an IRREGULAR PLURAL noun (more than one)?", options: ["Children (plural of child)", "Childs", "Mouses", "Toothies"], correct: 0, explanation: "Child→Children, Mouse→Mice, Tooth→Teeth!" },
        { q: "Choose the right homophone: 'The students hung up ___ backpacks neatly.'", options: ["their (belongs to them)", "there (a place)", "they're (they are)", "thier"], correct: 0, explanation: "Their = ownership · There = location · They're = they are!" },
        { q: "What are the three essential parts of a strong Grade 2 paragraph?", options: ["Topic Sentence → 2–3 Supporting Details → Concluding Sentence", "One tiny fragment", "Three random words", "Only a title"], correct: 0, explanation: "A hamburger paragraph holds your idea cleanly together!" },
        { q: "What is an AUTHOR'S PURPOSE when writing a science article about honeybees?", options: ["To INFORM (teach true facts)", "Only to tell jokes", "To persuade you to buy shoes", "To write a fairy tale"], correct: 0, explanation: "Remember PIE: Persuade, Inform, Entertain!" },
        { q: "Which word is an ADVERB describing HOW someone walked?", options: ["Quietly", "Blue", "Table", "Puppy"], correct: 0, explanation: "Many adverbs end in -ly and describe verbs (walked quietly)!" }
      ];
      return {
        _hasOwnDayFocusCard: true,
        objectives: [`Master "${cleanTopic}" across multi-syllable reading, prefixes/suffixes, and grammar`, "Use irregular verbs, homophones (there/their/they're), and adverbs accurately", "Write a polished 3–5 sentence Hamburger Paragraph and read your assigned Library chapter!"],
        anchorVerse: "Proverbs 25:11 — A word fitly spoken is like apples of gold.",
        bigIdea: `Grade 2 Reading & Writing bridges you into real chapter books! Prefixes, suffixes, irregular verbs, and clear Hamburger Paragraphs turn you into a confident reader and writer.`,
        sections: [
          dayCard,
          { stepBadge: `PART 1 · WORD POWER (${cleanTopic.toUpperCase()})`, heading: "Prefixes, Suffixes & Irregular Grammar", body: `• <strong>Prefixes:</strong> <code>un-</code> (not), <code>re-</code> (again), <code>pre-</code> (before), <code>dis-</code> (opposite).<br/>• <strong>Suffixes:</strong> <code>-ful</code> (full of), <code>-less</code> (without), <code>-ly</code> (how something is done).<br/>• <strong>Homophone Trio:</strong> <strong>There</strong> (place) · <strong>Their</strong> (belongs to them) · <strong>They're</strong> (they are)!`, keyTakeaway: "Break big words into Prefix + Root + Suffix to read and understand them fast!" },
          { stepBadge: "PART 2 · HAMBURGER PARAGRAPH & LIBRARY BOOK", heading: "Structure Your Ideas Cleanly", body: `Open your assigned <strong>Digital Library Chapter Book</strong> above and read today's chapter aloud! Then practice writing a <strong>Hamburger Paragraph</strong>: 1. <strong>Top Bun</strong> (Topic Sentence) → 2. <strong>Juicy Fillings</strong> (2–3 specific details) → 3. <strong>Bottom Bun</strong> (Wrap-up sentence)!`, keyTakeaway: "Topic Sentence + Supporting Details + Conclusion = A+ Paragraph!" }
        ],
        workedExamples: [
          { badge: "WORD DETECTIVE 1", title: "Unlocking 'UNHELPFUL'", problem: "What does 'unhelpful' mean?", step1: "Prefix 'un-' = not.", step2: "Root 'help' + suffix '-ful' = full of help.", step3: "Put together: NOT full of help!", pitfall: "Spotting prefixes/suffixes unlocks hundreds of chapter-book words!" },
          { badge: "GRAMMAR CHECK 2", title: "Irregular Past Tense", problem: "Fix: 'Yesterday Maya goed to the park and runned fast.'", step1: "Past tense of 'go' is WENT.", step2: "Past tense of 'run' is RAN.", step3: "Fixed: 'Yesterday Maya went to the park and ran fast.'", pitfall: "Read aloud to hear if irregular verbs sound right!" }
        ],
        wordBank: ["Prefix", "Paragraph", "Adverb", "Inform", "Homophone"],
        blanks: [
          { before: "1. A word part added to the BEGINNING of a root word (like un- or re-) is a ", answer: "Prefix", after: ".", hint: "Starts with P" },
          { before: "2. A word like 'quietly' or 'bravely' that describes HOW a verb happens is an ", answer: "Adverb", after: ".", hint: "Starts with A" },
          { before: "3. Writing true science or history facts has the author's purpose to ", answer: "Inform", after: ".", hint: "Starts with I" }
        ],
        writingPrompt: `Write a 3-sentence Hamburger Paragraph about what you read in your Digital Library book or about "${cleanTopic}"!`,
        writingExemplar: `Reading chapter books builds strong vocabulary and imagination. When I spot prefixes like un- and re-, I can figure out big words all by myself. Every great chapter teaches us something new!`,
        quiz: fillQuiz(quizPool, quizTargetCount, w * 23 + d * 5, helper)
      };
    }

    if (subj === "bible") {
      const quizPool = [
        { q: "How many books are in the entire Bible (Old + New Testaments combined)?", options: ["66 books (39 Old + 27 New)", "12 books", "10 books", "100 books"], correct: 0, explanation: "39 Old Testament books + 27 New Testament books = 66 books telling ONE unified story!" },
        { q: "In Jesus's Parable of the Wise & Foolish Builders, what did the WISE man build his house upon?", options: ["Solid Rock (hearing and obeying Jesus's words)", "Loose drifting sand", "Wet mud", "Dry leaves"], correct: 0, explanation: "Building on Jesus's Word keeps us steady when storms hit!" },
        { q: "In the Armor of God (Ephesians 6), what piece protects us like a shield against doubt and fear?", options: ["The Shield of Faith", "A cardboard box", "Running shoes", "A golden crown"], correct: 0, explanation: "Belt of Truth, Breastplate of Righteousness, Shield of Faith, Helmet of Salvation, Sword of the Spirit!" },
        { q: "What did Ruth show toward her mother-in-law Naomi?", options: ["Deep loyalty, kindness, and faithful love", "Selfishness", "Impatience", "Forgetfulness"], correct: 0, explanation: "Ruth's faithful love became part of King David's and Jesus's family line!" },
        { q: "In the Parable of the Talents, what does Jesus teach about the gifts and abilities God gives us?", options: ["Use and grow our gifts faithfully to serve God and others", "Bury our gifts and never try", "Brag loudly", "Hide them forever"], correct: 0, explanation: "Faithful stewardship multiplies the good we can do!" },
        { q: "What are the Fruit of the Spirit in Galatians 5:22–23?", options: ["Love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control", "Anger and jealousy", "Only speed and strength", "Pride and winning"], correct: 0, explanation: "God's Spirit grows lasting character in us!" },
        { q: "Who stayed faithful and prayed even when threatened with a fiery furnace in Babylon?", options: ["Shadrach, Meshach, and Abednego", "Goliath", "King Herod", "Jonah's sailors"], correct: 0, explanation: "God stood right beside them in the fire and kept them safe!" },
        { q: "In Acts 2, how did the early Christians show love to their community?", options: ["Sharing generously, praying together, and encouraging one another", "Keeping everything locked away", "Refusing to welcome neighbors", "Fighting constantly"], correct: 0, explanation: "Generosity and fellowship marked the early Church!" }
      ];
      return {
        _hasOwnDayFocusCard: true,
        objectives: [`Master "${cleanTopic}" with rich Grade 2 Scripture navigation and parables`, "Know the Armor of God (Ephesians 6), Fruit of the Spirit, and how the 66 books fit together", "Apply Jesus's parables to everyday character and stewardship"],
        anchorVerse: "Ephesians 6:11 — Put on the whole armour of God, that ye may be able to stand!",
        bigIdea: `Grade 2 Bible equips you with Jesus's unforgettable parables, the Armor of God, and practical Proverbs so your faith stands firm like a house built on solid rock!`,
        sections: [
          dayCard,
          { stepBadge: `PART 1 · SCRIPTURE STUDY (${cleanTopic.toUpperCase()})`, heading: "Building on Solid Rock", body: `Every Bible story in Week ${w} (<strong>${cleanTopic}</strong>) fits inside God's 66-book library (39 Old Testament + 27 New Testament). Look at what Jesus taught in the <strong>Parable of the Wise Builder</strong>: hearing God's Word AND actually practicing it builds a life no storm can shake!`, keyTakeaway: "Hearing + Practicing God's Word = Building on Solid Rock!" },
          { stepBadge: "PART 2 · ARMOR OF GOD & STEWARDSHIP", heading: "Standing Strong Every Day", body: `Remember your <strong>Ephesians 6 Armor</strong>: Belt of <strong>Truth</strong> · Breastplate of <strong>Righteousness</strong> · Shoes of <strong>Peace</strong> · Shield of <strong>Faith</strong> · Helmet of <strong>Salvation</strong> · Sword of the <strong>Spirit (God's Word)</strong>!`, keyTakeaway: "God equips us with truth, faith, peace, and His Word!" }
        ],
        workedExamples: [
          { badge: "PARABLE INSIGHT 1", title: "Using Your Talents Well", problem: "How can a 2nd grader practice the Parable of the Talents this week?", step1: "Name one gift God gave you (drawing, math, kindness, music, helping).", step2: "Practice it diligently instead of hiding it.", step3: "Use it to bless someone in your family or church!", pitfall: "Never compare your gifts to someone else's—just be faithful with yours!" },
          { badge: "BIBLE NAV 2", title: "Old vs. New Testament", problem: "Where do you find Psalms vs. the Gospel of Matthew?", step1: "Psalms is right in the middle of the Old Testament (before Jesus's birth).", step2: "Matthew is the very first book of the New Testament!", step3: "Try opening both in our built-in Scripture Hub!", pitfall: "Practice flipping to Genesis, Psalms, Matthew, and Acts!" }
        ],
        wordBank: ["Rock", "Armor", "Parable", "Faith", "Loyalty"],
        blanks: [
          { before: "1. A short story Jesus told to teach a deep spiritual truth is a ", answer: "Parable", after: ".", hint: "Starts with P" },
          { before: "2. The Wise Builder built his house on solid ", answer: "Rock", after: ".", hint: "Starts with R" },
          { before: "3. In Ephesians 6, the Shield of ", answer: "Faith", after: " protects our hearts.", hint: "Starts with F" }
        ],
        writingPrompt: `In 2 clear sentences, explain one lesson from "${cleanTopic}" and how you can put it into action this week!`,
        writingExemplar: `Today's lesson reminds me to build my life on the solid rock of Jesus's words by practicing honesty, faith, and kindness every day.`,
        quiz: fillQuiz(quizPool, quizTargetCount, w * 19 + d * 7, helper)
      };
    }

    if (subj === "science") {
      const quizPool = [
        { q: "Which state of matter spreads out to fill an entire balloon or room?", options: ["Gas (like air or steam)", "Solid", "Wooden cube", "Ice block"], correct: 0, explanation: "Solids hold shape, liquids flow to container shape, and gases spread out to fill all space!" },
        { q: "Which change is REVERSIBLE (can be changed right back)?", options: ["Melting an ice cube into water and refreezing it", "Baking cake batter in an oven", "Burning a campfire log into ash", "Scrambling an egg"], correct: 0, explanation: "Melting/freezing water is reversible; baking and burning create new substances (irreversible)!" },
        { q: "What is EROSION on Earth's surface?", options: ["Wind or moving water carrying away loosened soil and rock bits", "A volcano erupting in 1 second", "Planting flowers", "Freezing ice"], correct: 0, explanation: "Weathering BREAKS rock; Erosion MOVES it!" },
        { q: "Which of these is a FAST Earth change happening in minutes or hours?", options: ["An earthquake or volcanic eruption", "A river slowly carving a canyon over centuries", "A tree growing tall", "Rust forming over years"], correct: 0, explanation: "Earthquakes, landslides, and volcanoes reshape land rapidly!" },
        { q: "How do bees and butterflies help flowers make new seeds and fruit?", options: ["By carrying golden POLLEN from flower to flower (Pollination)", "By eating the roots", "By blocking sunlight", "By freezing water"], correct: 0, explanation: "Pollinators are essential partners in God's ecosystems!" },
        { q: "What is the big transformation called when a caterpillar turns into a butterfly (or tadpole into frog)?", options: ["Metamorphosis", "Evaporation", "Magnetism", "Erosion"], correct: 0, explanation: "Metamorphosis means a dramatic life-cycle change in body form!" },
        { q: "Why do engineers plant grass and trees along steep riverbanks?", options: ["Plant roots hold soil firmly in place to stop wind and water erosion", "To make mud slides faster", "To hide rocks", "To dry up rivers"], correct: 0, explanation: "Roots act like an underground net holding topsoil steady!" },
        { q: "Which simple machine helps you lift a heavy box up onto a truck smoothly using a slanted ramp?", options: ["An Inclined Plane", "A magnet", "A thermometer", "A compass"], correct: 0, explanation: "Inclined planes (ramps), levers, and wheels make work easier!" }
      ];
      return {
        _hasOwnDayFocusCard: true,
        objectives: [`Investigate "${cleanTopic}" with Grade 2 matter, Earth-change, and life-cycle science`, "Distinguish Reversible vs. Irreversible changes and Slow vs. Fast Earth changes", "Explain pollination, metamorphosis, and biodiversity across habitats"],
        anchorVerse: "Psalm 104:24 — O LORD, how manifold are thy works! In wisdom hast thou made them all.",
        bigIdea: `Grade 2 Science explores how matter transforms, how wind and water slowly sculpt mountains while volcanoes erupt fast, and how pollinators and life cycles keep habitats thriving!`,
        sections: [
          dayCard,
          { stepBadge: `PART 1 · CORE DISCOVERY (${cleanTopic.toUpperCase()})`, heading: "Matter, Earth Changes & Life Cycles", body: `• <strong>Matter:</strong> Melting ice is <strong>Reversible</strong> (refreeze it!); baking toast or cake is <strong>Irreversible</strong>!<br/>• <strong>Earth's Surface:</strong> <strong>Weathering</strong> breaks rock, <strong>Erosion</strong> carries soil away slowly; earthquakes and volcanoes change land FAST!<br/>• <strong>Living Ecosystems:</strong> Bees perform <strong>Pollination</strong>, and butterflies &amp; frogs undergo amazing <strong>Metamorphosis</strong>!`, keyTakeaway: "Weathering breaks · Erosion moves · Roots prevent erosion!" },
          { stepBadge: "PART 2 · HANDS-ON HOME LAB", heading: "Mini Erosion & Bridge Engineering Test!", body: `Build a paper bridge across two stacks of books—notice how folding paper like an accordion makes it hold 5× more coins! Next, pour water gently over dry dirt vs. grassy yard to watch how plant roots prevent erosion!`, keyTakeaway: "Shape and structure multiply strength in engineering and nature!" }
        ],
        workedExamples: [
          { badge: "SCIENCE CHECK 1", title: "Reversible vs. Irreversible", problem: "Is melting butter reversible or irreversible?", step1: "Warm butter melts into a yellow liquid.", step2: "Put it back in the fridge → it turns solid again!", step3: "Therefore melting butter is REVERSIBLE!", pitfall: "Burning toast turns it black forever → IRREVERSIBLE!" },
          { badge: "ECOSYSTEM CHECK 2", title: "Why Pollinators Matter", problem: "What would happen to apple orchards without bees?", step1: "Apple blossoms need pollen moved from flower to flower.", step2: "Without bees pollinating blossoms, far fewer apples would grow!", step3: "Bees and flowers depend on each other!", pitfall: "Even tiny insects play giant roles in food chains!" }
        ],
        wordBank: ["Reversible", "Erosion", "Pollination", "Metamorphosis", "Solid"],
        blanks: [
          { before: "1. Wind or water carrying soil away from a hillside is called ", answer: "Erosion", after: ".", hint: "Starts with E" },
          { before: "2. Bees carrying pollen between flowers to help make fruit is ", answer: "Pollination", after: ".", hint: "Starts with P" },
          { before: "3. A caterpillar changing into a butterfly is called ", answer: "Metamorphosis", after: ".", hint: "Starts with M" }
        ],
        writingPrompt: `In 2 clear sentences, explain one example of a Reversible vs. Irreversible change OR how plant roots stop erosion!`,
        writingExemplar: `Melting an ice cube is reversible because you can freeze the water back into ice, while baking cake batter is irreversible. Plant roots weave through soil to hold it tight against rain and wind erosion.`,
        quiz: fillQuiz(quizPool, quizTargetCount, w * 29 + d * 5, helper)
      };
    }

    // GRADE 2 HISTORY & GEOGRAPHY (HIST-201)
    const quizPool = [
      { q: "What are the THREE levels of government in the United States?", options: ["Local (city/town), State, and National (federal)", "North, South, and West", "Cars, Trains, and Planes", "Morning, Noon, and Night"], correct: 0, explanation: "Local mayors, state governors, and the national president/Congress work at three levels!" },
      { q: "Who achieved the world's first powered airplane flight at Kitty Hawk, North Carolina (1903)?", options: ["Orville and Wilbur Wright (The Wright Brothers)", "George Washington", "Thomas Jefferson", "Lewis and Clark"], correct: 0, explanation: "The Wright Brothers tested glider wings patiently until powered flight succeeded!" },
      { q: "Which brilliant agricultural scientist invented crop-rotation methods and hundreds of uses for peanuts and sweet potatoes to help Southern farmers?", options: ["George Washington Carver", "Alexander Graham Bell", "Neil Armstrong", "Ben Franklin"], correct: 0, explanation: "George Washington Carver served farmers with faith, curiosity, and brilliance!" },
      { q: "Who guided Lewis and Clark bravely across rivers and mountains during the Western Expedition?", options: ["Sacagawea", "Clara Barton", "Betsy Ross", "Abigail Adams"], correct: 0, explanation: "Sacagawea's language skills and courage helped the expedition succeed!" },
      { q: "What does SCARCITY mean in economics?", options: ["Resources, money, or time are limited, so people must make wise choices", "Everything is unlimited and free forever", "A map of oceans", "A type of train"], correct: 0, explanation: "Because resources are scarce, we budget wisely and weigh trade-offs!" },
      { q: "What is the invisible line around the middle of Earth separating the Northern and Southern Hemispheres?", options: ["The Equator", "The Oregon Trail", "The Mississippi River", "A compass key"], correct: 0, explanation: "Areas near the Equator enjoy warm climates year-round!" },
      { q: "What did Clara Barton found to care for wounded soldiers and disaster victims?", options: ["The American Red Cross", "The Pony Express", "The Statue of Liberty", "The First Railroad"], correct: 0, explanation: "Clara Barton's compassion built an organization still saving lives today!" },
      { q: "Who became the first astronaut to walk on the Moon in 1969?", options: ["Neil Armstrong", "Thomas Edison", "Jackie Robinson", "Abraham Lincoln"], correct: 0, explanation: "'One small step for man, one giant leap for mankind!'" }
    ];
    return {
      _hasOwnDayFocusCard: true,
      objectives: [`Master "${cleanTopic}" across world geography, American pioneers, inventors, and economics`, "Compare Local, State, and National government and read maps with scales & hemispheres", "Learn perseverance from inventors (Wright Brothers, Carver, Edison) and practice smart budgeting"],
      anchorVerse: "Proverbs 22:29 — Seest thou a man diligent in his business? He shall stand before kings.",
      bigIdea: `Grade 2 History & Geography introduces the whole globe, courageous pioneers on the Oregon Trail, world-changing inventors, and smart everyday economics!`,
      sections: [
        dayCard,
        { stepBadge: `PART 1 · WORLD MAPS, PIONEERS & INVENTORS (${cleanTopic.toUpperCase()})`, heading: "Exploring Continents, Courage & Invention", body: `• <strong>Geography:</strong> The <strong>Equator</strong> divides Earth into Northern &amp; Southern Hemispheres across all <strong>7 Continents</strong>.<br/>• <strong>American Trailblazers:</strong> Lewis, Clark &amp; <strong>Sacagawea</strong> explored the West · The <strong>Wright Brothers</strong> mastered flight · <strong>George Washington Carver</strong> rescued struggling farms through science · <strong>Clara Barton</strong> founded the Red Cross!`, keyTakeaway: "Great inventors failed dozens of times before succeeding—patient perseverance wins!" },
        { stepBadge: "PART 2 · SMART ECONOMICS (SCARCITY & BUDGETING)", heading: "Natural, Human & Capital Resources", body: `Every product uses <strong>Natural Resources</strong> (trees, soil), <strong>Human Resources</strong> (skilled workers), and <strong>Capital Resources</strong> (tools, ovens, trucks). Because money and time are limited (<strong>Scarcity</strong>), wise families budget: <strong>Give → Save → Spend carefully</strong>!`, keyTakeaway: "Smart choices weigh what you gain AND what you give up (Opportunity Cost)!" }
      ],
      workedExamples: [
        { badge: "HISTORY CHECK 1", title: "Lessons From the Wright Brothers", problem: "What habit helped Orville and Wilbur Wright invent the airplane?", step1: "They built a wind tunnel and measured real wing lift.", step2: "When a glider crashed, they studied WHY and improved the design.", step3: "Persistence + careful math turned dreams into flight!", pitfall: "Mistakes are stepping stones to breakthroughs!" },
        { badge: "ECONOMICS CHECK 2", title: "Opportunity Cost", problem: "You have $5 and can buy EITHER a sketchbook OR a soccer ball. You pick the sketchbook. What is your Opportunity Cost?", step1: "You gave up the next-best choice you didn't buy.", step2: "Your Opportunity Cost is the soccer ball!", step3: "Thinking about trade-offs helps you spend wisely!", pitfall: "You can spend the same $5 only once!" }
      ],
      wordBank: ["Equator", "Scarcity", "Inventor", "Local", "Pioneers"],
      blanks: [
        { before: "1. The imaginary line circling the middle of Earth is the ", answer: "Equator", after: ".", hint: "Starts with E" },
        { before: "2. Having limited money or time so you must make smart choices is ", answer: "Scarcity", after: ".", hint: "Starts with S" },
        { before: "3. Your town's mayor and city council lead your ", answer: "Local", after: " government.", hint: "Starts with L" }
      ],
      writingPrompt: `In 2 clear sentences, name one inventor or pioneer from "${cleanTopic}" and explain what you admire about their perseverance!`,
      writingExemplar: `I admire George Washington Carver because he studied soil carefully and invented crop rotation to help struggling farm families thrive.`,
      quiz: fillQuiz(quizPool, quizTargetCount, w * 37 + d * 9, helper)
    };
  }

  window.ACADEMY_GRADE_CURRICULA[2] = function (course, wNum, dayIdx, cleanTopic, quizTargetCount, helper) {
    const dept = (course.department || "").toLowerCase();
    const code = (course.code || "").toUpperCase();
    if (dept.includes("math") || code.startsWith("MATH")) return buildGrade2Math(wNum, dayIdx, cleanTopic, quizTargetCount, helper);
    if (dept.includes("literature") || code.startsWith("ELA") || code.startsWith("LIT")) return buildGrade2Subject("reading", wNum, dayIdx, cleanTopic, quizTargetCount, helper);
    if (dept.includes("theology") || code.startsWith("THEO")) return buildGrade2Subject("bible", wNum, dayIdx, cleanTopic, quizTargetCount, helper);
    if (dept.includes("science") || code.startsWith("SCI")) return buildGrade2Subject("science", wNum, dayIdx, cleanTopic, quizTargetCount, helper);
    if (dept.includes("history") || code.startsWith("HIST")) return buildGrade2Subject("history", wNum, dayIdx, cleanTopic, quizTargetCount, helper);
    return null;
  };
})();
