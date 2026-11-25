// Christ Infinity Academy — Dedicated Grade 1 Deep Curriculum Module
// Real-school depth across ALL 5 Grade 1 Core Subjects (Math, Reading/ELA, Bible, Science, History/Civics) × All 36 Weeks × Days 1–5!

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

  function g1DayCard(wNum, dayIdx, cleanTopic) {
    const days = [
      { b: "MONDAY · DAY 1 OF 5 (CONCEPT DISCOVERY)", h: `Monday Kickoff: Meet "${cleanTopic}" (Grade 1)`, t: `Welcome to Week ${wNum}, Day 1! Today we introduce <strong>${cleanTopic}</strong> with clear visuals and step-by-step teaching so you feel confident right from the start.`, k: "Day 1 Goal: Grasp the main rule and try your first guided example!" },
      { b: "TUESDAY · DAY 2 OF 5 (GUIDED STRATEGY)", h: `Tuesday Strategy Lab: Practicing "${cleanTopic}"`, t: `On Day 2, we sharpen our skills on <strong>${cleanTopic}</strong> with fresh Tuesday numbers and strategies—checking each answer calmly step by step.`, k: "Day 2 Goal: Practice carefully and check every step!" },
      { b: "WEDNESDAY · DAY 3 OF 5 (REAL-WORLD LAB)", h: `Wednesday Application: "${cleanTopic}" in Everyday Life`, t: `Halfway through Week ${wNum}! Today we bring <strong>${cleanTopic}</strong> off the screen into real-world stories, home labs, and hands-on challenges.`, k: "Day 3 Goal: Connect today's skill to real life at home!" },
      { b: "THURSDAY · DAY 4 OF 5 (SPIRAL REVIEW)", h: `Thursday Review: Locking In "${cleanTopic}" Before Friday`, t: `Today we review <strong>${cleanTopic}</strong> alongside earlier Grade 1 building blocks and spot sneaky mistakes before tomorrow's Friday Check!`, k: "Day 4 Goal: Explain today's rule out loud in your own words!" },
      { b: "FRIDAY · DAY 5 OF 5 (WEEKLY CHECK)", h: `Friday Mastery Check: Showing What You Know on "${cleanTopic}"`, t: `Happy Friday, 1st Grade Scholar! Review your takeaways below and complete your 15-question Weekly Check to earn Week ${wNum} Griffin Stars (and remember—you can always click Redo Day anytime!).`, k: "Day 5 Goal: Celebrate a full week of 1st Grade mastery!" }
    ];
    const x = days[dayIdx % 5];
    return { stepBadge: x.b, heading: x.h, body: x.t, keyTakeaway: x.k };
  }

  // ==================== 1. GRADE 1 MATH (MATH-101) ====================
  function buildGrade1Math(w, d, cleanTopic, quizTargetCount, helper) {
    const dayCard = g1DayCard(w, d, cleanTopic);
    const a = 6 + d, b = 5 + (d % 4), subA = 14 + d, subB = 6 + (d % 4);
    const tens = 2 + d, ones = 3 + (d % 5), dimes = 2 + (d % 4), nickels = 1 + (d % 2);

    if (w <= 9) {
      // Q1: Addition & Subtraction Fluency Within 20, Doubles, Make-10, Fact Families
      const quizPool = [
        { q: `Use Make-10 to add: 8 + 5 = ?`, options: ["13", "12", "14", "11"], correct: 0, explanation: "8 + 2 = 10, then 10 + 3 = 13!" },
        { q: `Use your Doubles fact: 7 + 7 = ?`, options: ["14", "13", "15", "12"], correct: 0, explanation: "Double 7 is 14!" },
        { q: `Doubles Plus One: Since 6 + 6 = 12, what is 6 + 7?`, options: ["13", "11", "14", "12"], correct: 0, explanation: "12 + 1 more = 13!" },
        { q: `Subtract: 15 − 6 = ?`, options: ["9", "8", "10", "7"], correct: 0, explanation: "Because 9 + 6 = 15, 15 − 6 = 9!" },
        { q: `Find the missing number: 9 + ___ = 14`, options: ["5", "4", "6", "3"], correct: 0, explanation: "Count up from 9 to 14: 10, 11, 12, 13, 14 (5 jumps)!" },
        { q: `Noah found 9 seashells on Monday and 6 more on Tuesday. How many seashells total?`, options: ["15 seashells", "14 seashells", "3 seashells", "16 seashells"], correct: 0, explanation: "9 + 6 = 15 seashells!" },
        { q: `Which subtraction fact belongs in the SAME Fact Family as 8 + 4 = 12?`, options: ["12 − 4 = 8", "12 − 2 = 10", "8 − 4 = 4", "12 + 4 = 16"], correct: 0, explanation: "Fact families share the exact same three numbers (4, 8, 12)!" },
        { q: `Subtract: 17 − 8 = ?`, options: ["9", "8", "10", "11"], correct: 0, explanation: "8 + 9 = 17, so 17 − 8 = 9!" }
      ];
      return {
        _hasOwnDayFocusCard: true,
        objectives: [
          `Master "${cleanTopic}" using Grade 1 Make-10, Doubles, and Fact Family strategies`,
          "Add and subtract fluently within 20 and solve real-world word problems",
          "Find missing addends (like 7 + ___ = 15) cleanly"
        ],
        anchorVerse: "Psalm 147:4 — He counts the number of the stars and calls them by name.",
        bigIdea: "Smart 1st-grade mathematicians don't count by ones forever—we use Make-10, Doubles, and Fact Families to solve problems within 20 smoothly and fast!",
        sections: [
          dayCard,
          {
            stepBadge: "PART 1 · DOUBLES & MAKE-10 STRATEGIES",
            heading: "Two Superpowers for Adding Within 20",
            body: `<strong>Superpower 1 — Doubles &amp; Doubles+1:</strong> Know <code>6+6=12</code>, <code>7+7=14</code>, <code>8+8=16</code>, <code>9+9=18</code>! Then <code>7+8</code> is simply <code>7+7+1 = 15</code>!<br/><br/><strong>Superpower 2 — Make a Friendly 10:</strong> To solve <strong>9 + 6</strong>, borrow 1 from 6 to turn 9 into 10: <code>9 + 1 = 10</code>, plus the 5 left over → <strong>15</strong>!`,
            keyTakeaway: "Turn 8 or 9 into a friendly 10 first—adding to 10 is instant!"
          },
          {
            stepBadge: "PART 2 · FACT FAMILIES (ADD & SUBTRACT TWINS)",
            heading: "One Fact Unlocks Four Equations!",
            body: `The three numbers <strong>6, 8, and 14</strong> live in the same Fact Family house:<br/><code>6 + 8 = 14</code> · <code>8 + 6 = 14</code> · <code>14 − 6 = 8</code> · <code>14 − 8 = 6</code>!<br/>That means whenever you check subtraction, you can ADD back to verify!`,
            keyTakeaway: "Addition and subtraction are opposite twins sharing the same 3 numbers!"
          },
          {
            stepBadge: "PART 3 · HANDS-ON HOME ACTIVITY",
            heading: "Playing-Card Make-10 & Doubles War!",
            body: `Pull cards Ace (1) through 9 from a deck. Flip two cards and race to solve them using Make-10 or Doubles—explain your trick out loud to Mom or Dad!`,
            keyTakeaway: "Explaining your mental strategy out loud locks facts into memory!"
          }
        ],
        workedExamples: [
          { badge: "WORKED EXAMPLE 1 · MAKE-10", title: `Add ${a} + ${b}`, problem: `Find ${a} + ${b} cleanly.`, step1: `See how much ${a} needs to reach 10 (${10 - a}).`, step2: `Split ${b} into (${10 - a}) + (${b - (10 - a)}).`, step3: `10 + ${b - (10 - a)} = ${a + b}!`, pitfall: "Check by counting on from the bigger number!" },
          { badge: "WORKED EXAMPLE 2 · SUBTRACT WITH FACT FAMILY", title: `Subtract ${subA} − ${subB}`, problem: `Compute ${subA} − ${subB}.`, step1: `Ask: "${subB} + what number = ${subA}?"`, step2: `Jump from ${subB} to 10 (${10 - subB}), then to ${subA} (${subA - 10}).`, step3: `Total jumps: ${subA - subB}! Check: ${subB} + ${subA - subB} = ${subA} ✓.`, pitfall: "Always double-check subtraction by adding back!" }
        ],
        problems: [
          { prompt: `1. Add: ${a} + ${b} =`, answer: String(a + b), hint: `Try Make-10 or count on from ${a}!` },
          { prompt: `2. Subtract: ${subA} − ${subB} =`, answer: String(subA - subB), hint: `${subB} + ___ = ${subA}?` },
          { prompt: `3. Doubles: ${5 + d} + ${5 + d} =`, answer: String((5 + d) * 2), hint: `Double ${5 + d}!` },
          { prompt: `4. Missing number: 8 + ___ = ${13 + (d % 4)}`, answer: String(5 + (d % 4)), hint: `Count up from 8 to ${13 + (d % 4)}!` },
          { prompt: `5. Word Problem: Maya has ${a} berries and picks 4 more. Total?`, answer: String(a + 4), hint: `Add ${a} + 4!` }
        ],
        writingPrompt: `In 1–2 sentences, explain your favorite strategy (Doubles or Make-10) for adding ${a} + ${b}!`,
        writingExemplar: `To add ${a} + ${b}, I made a friendly 10 first and added the leftover ones to reach ${a + b}.`,
        quiz: fillQuiz(quizPool, quizTargetCount, w * 31 + d * 7, helper)
      };
    }

    if (w <= 18) {
      // Q2: Place Value (Tens & Ones to 120), Comparing < > =, Adding/Subtracting Multiples of 10
      const quizPool = [
        { q: "What number has 4 tens and 7 ones?", options: ["47", "74", "11", "407"], correct: 0, explanation: "4 tens (40) + 7 ones (7) = 47!" },
        { q: "What is 10 MORE than 53?", options: ["63", "43", "54", "73"], correct: 0, explanation: "Adding 1 ten changes 5 tens to 6 tens: 63!" },
        { q: "What is 10 LESS than 82?", options: ["72", "92", "81", "62"], correct: 0, explanation: "Subtracting 1 ten changes 8 tens to 7 tens: 72!" },
        { q: "Compare 64 and 46: Which symbol goes in the middle? 64 ___ 46", options: ["> (greater than)", "< (less than)", "= (equal to)", "+ (plus)"], correct: 0, explanation: "Compare the tens first: 6 tens is bigger than 4 tens, so 64 > 46!" },
        { q: "Add tens: 40 + 30 = ?", options: ["70", "10", "43", "80"], correct: 0, explanation: "4 tens + 3 tens = 7 tens = 70!" },
        { q: "Subtract tens: 80 − 50 = ?", options: ["30", "130", "3", "40"], correct: 0, explanation: "8 tens − 5 tens = 3 tens = 30!" },
        { q: "Is the equation 6 + 4 = 7 + 3 TRUE or FALSE?", options: ["TRUE (both sides equal 10!)", "FALSE", "Only left equals 10", "Cannot tell"], correct: 0, explanation: "The equal sign '=' means BOTH sides have the exact same value!" },
        { q: "Add three numbers: 5 + 5 + 4 = ?", options: ["14", "10", "15", "13"], correct: 0, explanation: "Make 10 first (5 + 5 = 10), then + 4 = 14!" }
      ];
      return {
        _hasOwnDayFocusCard: true,
        objectives: [
          `Master "${cleanTopic}" with crisp Grade 1 Tens & Ones place value`,
          "Compare two-digit numbers using >, <, and = by checking the TENS place first",
          "Mentally find 10 More, 10 Less, and add/subtract multiples of 10 (e.g., 40 + 30)"
        ],
        anchorVerse: "1 Corinthians 14:40 — Let all things be done decently and in order.",
        bigIdea: "Place value is like bundling sticks into groups of 10! Once you see tens and ones, numbers all the way to 120 become easy to compare, add, and subtract!",
        sections: [
          dayCard,
          { stepBadge: "PART 1 · BUNDLING TENS & ONES", heading: "Left Digit = Tens · Right Digit = Ones", body: `In <strong>${tens * 10 + ones}</strong>, there are <strong>${tens} full ten-rods (${tens * 10})</strong> and <strong>${ones} single cubes (${ones})</strong>. Notice how <strong>38</strong> and <strong>83</strong> use the same digits, yet 83 is MUCH bigger because 8 tens beats 3 tens!`, keyTakeaway: "Always compare the TENS digit first when comparing 2-digit numbers!" },
          { stepBadge: "PART 2 · 10 MORE, 10 LESS & ADDING TENS", heading: "Sliding Up & Down the Hundred Chart", body: `• <strong>10 More than ${tens * 10 + ones}</strong> = <strong>${(tens + 1) * 10 + ones}</strong> (the tens digit goes up by 1; ones stays the same!).<br/>• <strong>30 + 40</strong> is simply 3 tens + 4 tens = <strong>7 tens (70)</strong>!`, keyTakeaway: "When adding or subtracting 10, ONLY the tens digit changes!" },
          { stepBadge: "PART 3 · HANDS-ON HOME ACTIVITY", heading: "Toothpick or LEGO Ten-Bundles!", body: `Snap 10 LEGO bricks into a tall tower (that's 1 TEN!). Build 3 towers and 5 loose bricks on the table—ask: <em>"What number did we build? (35!) What happens if we add 1 more ten-tower? (45!)"</em>`, keyTakeaway: "Building real ten-towers makes place value unforgettable!" }
        ],
        workedExamples: [
          { badge: "WORKED EXAMPLE 1 · COMPARE", title: "Compare 52 and 29", problem: "Which is greater: 52 or 29?", step1: "Look at the TENS digits: 52 has 5 tens; 29 has 2 tens.", step2: "5 tens is greater than 2 tens.", step3: "52 > 29 (the alligator mouth opens toward the bigger number 52)!", pitfall: "Don't get fooled by the 9 in 29—always check TENS first!" },
          { badge: "WORKED EXAMPLE 2 · ADD 3 NUMBERS", title: "Add 7 + 4 + 3", problem: "Add 7 + 4 + 3 cleanly.", step1: "Spot two Make-10 friends: 7 + 3 = 10!", step2: "Add the leftover 4: 10 + 4.", step3: "Answer: 14!", pitfall: "You can add numbers in ANY order to make a fast 10!" }
        ],
        problems: [
          { prompt: `1. What number has ${tens} tens and ${ones} ones?`, answer: String(tens * 10 + ones), hint: `${tens * 10} + ${ones}!` },
          { prompt: `2. What is 10 MORE than ${tens * 10 + ones}?`, answer: String((tens + 1) * 10 + ones), hint: `Add 1 to the tens digit!` },
          { prompt: `3. Add tens: ${tens * 10} + 30 =`, answer: String((tens + 3) * 10), hint: `${tens} tens + 3 tens!` },
          { prompt: `4. Subtract tens: 90 − ${tens * 10} =`, answer: String(90 - tens * 10), hint: `9 tens minus ${tens} tens!` },
          { prompt: `5. Add three numbers: 6 + 4 + ${ones} =`, answer: String(10 + ones), hint: `Make 10 with 6 + 4 first!` }
        ],
        writingPrompt: `In 1–2 sentences, explain why 72 is greater than 29 even though 9 is bigger than 2!`,
        writingExemplar: `72 is greater than 29 because we compare the tens place first, and 7 tens (70) is much bigger than 2 tens (20).`,
        quiz: fillQuiz(quizPool, quizTargetCount, w * 31 + d * 7, helper)
      };
    }

    // Q3 & Q4 (Weeks 19–36): 2-Digit Addition, Time to Hour & Half-Hour, Coins, Graphs & Equal Shares (Halves/Fourths)
    const quizPool = [
      { q: `How much money is ${dimes} dime(s) and ${nickels} nickel(s)?`, options: [`${dimes * 10 + nickels * 5}¢`, `${dimes * 10 + nickels * 5 + 5}¢`, `${dimes + nickels}¢`, `${dimes * 5}¢`], correct: 0, explanation: `Dimes = 10¢ each, Nickels = 5¢ each → ${dimes * 10 + nickels * 5}¢!` },
      { q: "On a clock, when the minute hand points straight DOWN to 6 (halfway around), how many minutes past the hour is it?", options: ["30 minutes (half-past, like 4:30)", "00 minutes (o'clock)", "15 minutes", "5 minutes"], correct: 0, explanation: "Halfway around a 60-minute clock is :30 (half-past)!" },
      { q: "Add a 2-digit number and a 1-digit number: 34 + 5 = ?", options: ["39", "84", "31", "40"], correct: 0, explanation: "Add the ones (4 + 5 = 9) and keep 3 tens → 39!" },
      { q: "If you cut a round waffle into 2 EQUAL pieces, what is each piece called?", options: ["One HALF (1/2)", "One fourth", "One whole", "Three thirds"], correct: 0, explanation: "2 equal shares = Halves!" },
      { q: "If you cut a square sandwich into 4 EQUAL pieces, what is each piece called?", options: ["One FOURTH / Quarter (1/4)", "One half", "One tenth", "Two wholes"], correct: 0, explanation: "4 equal shares = Fourths (or Quarters)!" },
      { q: "Add 2-digit numbers: 23 + 14 = ?", options: ["37", "36", "47", "27"], correct: 0, explanation: "20 + 10 = 30 and 3 + 4 = 7 → 37!" },
      { q: "How many sides and corners (vertices) does a rectangle have?", options: ["4 sides and 4 square corners", "3 sides and 3 corners", "0 sides", "6 sides"], correct: 0, explanation: "Rectangles always have 4 sides and 4 square corners!" },
      { q: "A bar graph shows 7 votes for Dogs and 4 votes for Cats. How many MORE kids picked Dogs?", options: ["3 more kids (7 − 4)", "11 kids", "4 kids", "2 kids"], correct: 0, explanation: "'How many more' means subtract: 7 − 4 = 3!" }
    ];
    return {
      _hasOwnDayFocusCard: true,
      objectives: [
        `Master "${cleanTopic}" with real Grade 1 measurement, time, money, and geometry skills`,
        "Tell time to the hour (4:00) and half-hour (4:30) and count mixed dimes, nickels & pennies",
        "Split shapes into equal Halves (2 equal parts) and Fourths (4 equal parts)"
      ],
      anchorVerse: "Ecclesiastes 3:1 — To every thing there is a season and a time.",
      bigIdea: "Second-semester 1st Grade Math connects numbers to the real world: adding 2-digit numbers, reading clocks to the half-hour, counting coins, reading bar graphs, and sharing pizza in equal halves and fourths!",
      sections: [
        dayCard,
        { stepBadge: "PART 1 · TIME TO HALF-HOUR & MIXED COINS", heading: "Reading :00 vs. :30 & Counting Money", body: `• <strong>Minute hand on 12 = :00</strong> (o'clock) · <strong>Minute hand on 6 = :30</strong> (half-past, e.g. <strong>4:30</strong>).<br/>• When counting coins, start with the biggest value first: count <strong>Dimes by 10s</strong>, then add <strong>Nickels by 5s</strong>, then <strong>Pennies by 1s</strong>!`, keyTakeaway: "Always sort coins from biggest value to smallest before counting!" },
        { stepBadge: "PART 2 · EQUAL SHARES (HALVES & FOURTHS)", heading: "Fair Sharing of Shapes!", body: `Split a rectangle into <strong>2 EQUAL parts</strong> → each piece is <strong>one half (1/2)</strong>! Split it into <strong>4 EQUAL parts</strong> → each piece is <strong>one fourth / quarter (1/4)</strong>! Notice that MORE equal shares make EACH piece SMALLER!`, keyTakeaway: "Halves = 2 equal parts · Fourths = 4 equal parts!" },
        { stepBadge: "PART 3 · HANDS-ON HOME ACTIVITY", heading: "Paper-Fold Fraction & Coin Store!", body: `Fold a square napkin in half once (2 halves!), then fold it again (4 fourths!). Next, set up a mini toy store where toys cost 15¢, 25¢, or 35¢ and pay using real dimes and nickels!`, keyTakeaway: "Hands-on folding and coin play build instant mastery!" }
      ],
      workedExamples: [
        { badge: "WORKED EXAMPLE 1 · MIXED COINS", title: `${dimes} Dimes + ${nickels} Nickel(s)`, problem: "Find the total cents.", step1: `Count ${dimes} dimes by 10s → ${dimes * 10}¢.`, step2: `Add ${nickels} nickel(s) (+${nickels * 5}¢).`, step3: `Total = ${dimes * 10 + nickels * 5}¢!`, pitfall: "Remember: a small dime (10¢) is worth MORE than a bigger nickel (5¢)!" },
        { badge: "WORKED EXAMPLE 2 · 2-DIGIT ADDITION", title: "Add 24 + 13", problem: "Solve 24 + 13.", step1: "Add tens: 20 + 10 = 30.", step2: "Add ones: 4 + 3 = 7.", step3: "Combine: 30 + 7 = 37!", pitfall: "Keep tens with tens and ones with ones!" }
      ],
      problems: [
        { prompt: `1. Add: 24 + ${11 + d} =`, answer: String(35 + d), hint: `Add tens, then add ones!` },
        { prompt: `2. How many cents is ${dimes} dimes and ${nickels} nickel(s) (number only)?`, answer: String(dimes * 10 + nickels * 5), hint: `${dimes * 10} + ${nickels * 5}!` },
        { prompt: `3. When the minute hand points to 6, how many minutes past the hour is it?`, answer: "30", hint: "Half of 60 minutes = 30!" },
        { prompt: `4. How many EQUAL pieces make FOURTHS?`, answer: "4", hint: "Four equal pieces!" },
        { prompt: `5. Graph check: 9 apples vs. 4 pears. How many MORE apples?`, answer: "5", hint: "Subtract 9 − 4!" }
      ],
      writingPrompt: `In 1–2 sentences, explain how you count ${dimes} dimes and ${nickels} nickel(s) and what time it is when the long hand points to 6!`,
      writingExemplar: `I count ${dimes} dimes by tens to get ${dimes * 10} cents and add ${nickels * 5} cents for the nickel(s), totaling ${dimes * 10 + nickels * 5} cents. When the long minute hand points to 6, it is :30 (half-past the hour).`,
      quiz: fillQuiz(quizPool, quizTargetCount, w * 31 + d * 7, helper)
    };
  }

  // ==================== 2. GRADE 1 READING & ELA (ELA-101) ====================
  function buildGrade1Reading(w, d, cleanTopic, quizTargetCount, helper) {
    const dayCard = g1DayCard(w, d, cleanTopic);
    const qtr = Math.ceil(w / 9);
    const focus = {
      1: { rule: "Consonant Blends (bl, cl, cr, st, tr), Digraphs (sh, ch, th, wh), & Magic Silent E (cake, bike, home)", words: "ship, chin, star, frog, cake, bike, home, tune", tip: "In a Blend (st, fr) you hear BOTH sounds; in a Digraph (sh, ch, th) two letters team up to make ONE brand-new sound!" },
      2: { rule: "Vowel Teams (ai/ay = rain, play; ee/ea = tree, read; oa/ow = boat, snow) + Nouns, Verbs & Adjectives", words: "rain, play, tree, read, boat, snow, bright, jump", tip: "'When two vowels go walking, the first one often does the talking!' (e.g. R-AI-N says long A!)" },
      3: { rule: "R-Controlled Bossy R (ar = star, or = corn, er/ir/ur = bird, turn), Compound Words (sunshine) & Contractions (don't)", words: "star, corn, bird, turn, sunshine, backpack, can't, we're", tip: "In a contraction like don't (do + not), the apostrophe (') takes the place of missing letters!" },
      4: { rule: "Two-Syllable Decoding, Pronouns, Punctuation (. ? !), Commas in Lists, Narrative & Opinion Paragraphs", words: "rabbit, basket, because, friend, first, next, finally", tip: "Read your writing aloud—check for Capitals, Finger Spaces, Vivid Adjectives, and End Marks!" }
    }[qtr] || {};

    const quizPool = [
      { q: "In a consonant DIGRAPH like 'SH' in 'SHIP', how many sounds do S and H make together?", options: ["ONE smooth new sound (/sh/)", "Five sounds", "Zero sounds", "They stay silent"], correct: 0, explanation: "SH, CH, TH, and WH are digraph teams making one new sound!" },
      { q: "Which word has a LONG A vowel sound because of Magic Silent E?", options: ["Cake", "Cat", "Cap", "Man"], correct: 0, explanation: "Silent E at the end makes A say its own name: Cake!" },
      { q: "Which word contains a VOWEL TEAM making a long E sound?", options: ["Tree (ee)", "Bed", "Dog", "Sun"], correct: 0, explanation: "Double EE in 'tree' makes a smooth long E sound!" },
      { q: "Which word is a COMPOUND WORD made from two smaller real words?", options: ["Sunshine (sun + shine)", "Happy", "Jumping", "Apple"], correct: 0, explanation: "Sun + shine = Sunshine!" },
      { q: "What two words combine to make the contraction 'CAN'T'?", options: ["Can + not", "Cat + ant", "Can + it", "Could + not"], correct: 0, explanation: "The apostrophe replaces missing letters in 'can not' → can't!" },
      { q: "Which word is an ADJECTIVE (a describing word that paints a picture)?", options: ["Sparkly", "Run", "Puppy", "Jump"], correct: 0, explanation: "Adjectives describe nouns (like 'sparkly star' or 'fluffy dog')!" },
      { q: "Which sentence has 100% correct capitalization and end punctuation?", options: ["Where did the fluffy puppy hide?", "where did the fluffy puppy hide.", "Where did the fluffy puppy hide", "where Did The Puppy Hide?"], correct: 0, explanation: "Capital start + question mark (?) for a question!" },
      { q: "Why do informational books include a Table of Contents and Glossary?", options: ["To help readers find chapters quickly and look up new words", "To make books heavier", "Only for decoration", "To hide the story"], correct: 0, explanation: "Text features make nonfiction easy to navigate!" }
    ];
    return {
      _hasOwnDayFocusCard: true,
      objectives: [
        `Master "${cleanTopic}" with crisp Grade 1 phonics & fluency practice`,
        `Read and spell today's target word bank smoothly (${focus.words})`,
        "Apply today's reading skill to your assigned Digital Library storybook!"
      ],
      anchorVerse: "Proverbs 16:24 — Pleasant words are as an honeycomb, sweet to the soul.",
      bigIdea: `Grade 1 Reading transforms you from sounding out tiny words into reading whole adventure stories aloud with expression!`,
      sections: [
        dayCard,
        { stepBadge: "PART 1 · PHONICS & GRAMMAR RULE", heading: `${cleanTopic}`, body: `<strong>Today's Focus:</strong> ${focus.rule}<br/><br/><strong>Practice Word Bank (Read Aloud Twice!):</strong> <code>${focus.words}</code><br/><br/><strong>Memory Tip:</strong> ${focus.tip}`, keyTakeaway: "Look for chunks, blends, and vowel teams inside bigger words!" },
        { stepBadge: "PART 2 · FLUENCY & STORY COMPREHENSION", heading: "Reading Like a Storyteller", body: `Read your assigned <strong>Digital Library Chapter</strong> above out loud to Mom or Dad! Pause gently at commas (,), stop cleanly at periods (.), raise your voice at question marks (?), and retell <strong>Characters, Setting, Problem, and Solution</strong>!`, keyTakeaway: "Great readers read with smooth expression and picture the story in their mind!" },
        { stepBadge: "PART 3 · HANDS-ON WORD WORKSHOP", heading: "Build-a-Sentence Rainbow Challenge!", body: `Pick 2 words from today's Word Bank (<code>${focus.words}</code>) and write a vivid 1st-grade sentence that includes a <strong>Naming Word (Noun)</strong>, an <strong>Action Word (Verb)</strong>, and a <strong>Describing Word (Adjective)</strong>!`, keyTakeaway: "Adding one juicy adjective turns a plain sentence into a colorful picture!" }
      ],
      workedExamples: [
        { badge: "WORD DETECTIVE 1", title: "Spotting a Vowel Team", problem: "Sound out the word BOAT.", step1: "Spot the vowel team OA in the middle.", step2: "OA says long O ('oh').", step3: "Blend /b/ - /ō/ - /t/ → BOAT!", pitfall: "Don't say O and A separately—they work as one team!" },
        { badge: "SENTENCE UPGRADE 2", title: "Adding an Adjective", problem: "Upgrade: 'The dog ran.'", step1: "Ask: What did the dog look like? (fluffy brown)", step2: "Ask: Where did it run? (across the sunny yard)", step3: "Upgraded: 'The fluffy brown dog ran across the sunny yard.'", pitfall: "Check Capital start and Period end!" }
      ],
      wordBank: ["Digraph", "Adjective", "Compound", "Apostrophe", "Setting"],
      blanks: [
        { before: "1. Two letters like SH or CH teaming up to make ONE sound is a ", answer: "Digraph", after: ".", hint: "Starts with D" },
        { before: "2. A describing word like 'bright' or 'fluffy' is an ", answer: "Adjective", after: ".", hint: "Starts with A" },
        { before: "3. Two smaller words joined into one (like sunshine) make a ", answer: "Compound", after: " word.", hint: "Starts with C" }
      ],
      writingPrompt: `Write 1–2 complete sentences using an Adjective and one word from today's list (${focus.words.split(", ").slice(0, 3).join(", ")})!`,
      writingExemplar: `The bright golden star shone above our cozy home while the friendly puppy slept.`,
      quiz: fillQuiz(quizPool, quizTargetCount, w * 23 + d * 5, helper)
    };
  }

  // ==================== 3. GRADE 1 BIBLE, SCIENCE & HISTORY ====================
  function buildGrade1Subject(subj, w, d, cleanTopic, quizTargetCount, helper) {
    const dayCard = g1DayCard(w, d, cleanTopic);
    const qtr = Math.ceil(w / 9);

    if (subj === "bible") {
      const quizPool = [
        { q: "Who trusted God's promise when God told him to count the stars in the night sky?", options: ["Abraham", "Goliath", "Pharaoh", "A Roman soldier"], correct: 0, explanation: "God promised Abraham a huge family and kept His word!" },
        { q: "How did Joseph treat his brothers later in Egypt after they had been unkind to him?", options: ["He forgave them and helped save their whole family from hunger", "He refused to feed them", "He forgot who they were", "He ran away"], correct: 0, explanation: "Joseph said God turned what was meant for harm into good!" },
        { q: "What helped young David stand bravely against the giant Goliath?", options: ["Trusting in God's strength rather than his own size", "Wearing giant armor", "Running away", "Hiding behind a wall"], correct: 0, explanation: "David knew the battle belongs to the Lord!" },
        { q: "What did Jesus teach in the Golden Rule (Matthew 7:12)?", options: ["Treat others the very same kind way you want them to treat you", "Only help people who give you toys", "Always push to the front of the line", "Never forgive anyone"], correct: 0, explanation: "The Golden Rule turns love into everyday action!" },
        { q: "What did King Solomon ask God for instead of gold or riches?", options: ["Wisdom to lead and serve people well", "A bigger palace only", "Ten fast ships", "Nothing at all"], correct: 0, explanation: "God delighted in Solomon's request for wisdom!" },
        { q: "In the Parable of the Sower, what kind of soil grows a strong, fruitful harvest?", options: ["Good, receptive soil (a listening, obedient heart)", "Hard rocky pavement", "Thorny weeds", "Dry sand"], correct: 0, explanation: "A heart that listens to God's Word bears lasting fruit!" },
        { q: "Why did Queen Esther speak up courageously to the king?", options: ["To protect and save her people even though it felt scary", "To win a crown contest", "To travel to Egypt", "To skip dinner"], correct: 0, explanation: "God gave Esther courage 'for such a time as this!'" },
        { q: "What does the Resurrection on Easter morning prove about Jesus?", options: ["Jesus conquered sin and death and is alive forever!", "The disciples made up a fable", "Nothing changed", "Only Old Testament stories matter"], correct: 0, explanation: "Easter is the joyful center of Christian faith!" }
      ];
      return {
        _hasOwnDayFocusCard: true,
        objectives: [`Understand "${cleanTopic}" clearly in Grade 1 storytelling language`, "Connect Old Testament promises and heroes directly to Jesus's love", "Memorize today's key truth and practice forgiveness, courage, and wisdom"],
        anchorVerse: qtr <= 2 ? "Joshua 1:9 — Be strong and of a good courage; for the LORD thy God is with thee." : "Matthew 7:12 — Do unto others as you would have them do unto you.",
        bigIdea: `Every hero in the Bible—Abraham, Joseph, Moses, David, Esther—points ahead to Jesus, the faithful Savior who loves us and teaches us how to live!`,
        sections: [
          dayCard,
          { stepBadge: `PART 1 · BIBLE STORY (${cleanTopic.toUpperCase()})`, heading: "God's Faithfulness in Action", body: `In Week ${w} (<strong>${cleanTopic}</strong>), watch closely how real people faced real fears—crossing seas, standing up for truth, or forgiving family—and discovered that <strong>God never breaks a single promise!</strong> Open the <strong>Scripture Hub</strong> anytime to hear the chapter read aloud in Easy-to-Read English.`, keyTakeaway: "Courage isn't never feeling scared—it's trusting God even when something looks big!" },
          { stepBadge: "PART 2 · LIVING OUT THE GOLDEN RULE", heading: "Heart, Words & Actions", body: `Ask two simple Grade 1 Bible questions today: <em>1. What does "${cleanTopic}" teach me about God's heart?</em> <em>2. How can I show that same courage, honesty, or forgiveness in our home today?</em>`, keyTakeaway: "Love God wholeheartedly and treat others with the Golden Rule!" },
          { stepBadge: "PART 3 · HANDS-ON FAMILY ACTIVITY", heading: "Act It Out & Memory Verse Motion!", body: `Make up hand motions with Mom or Dad for today's memory verse—then sketch a comic panel showing your favorite scene from <strong>${cleanTopic}</strong>!`, keyTakeaway: "Hand motions help 1st graders memorize Scripture effortlessly!" }
        ],
        workedExamples: [
          { badge: "BIBLE CHARACTER 1", title: "Applying the Golden Rule", problem: "A new kid at the park looks shy and alone. What would the Golden Rule do?", step1: "Ask: How would I want someone to treat me if I felt shy?", step2: "Walk over with a smile and invite them to play!", step3: "Kindness shows Jesus's love in real life!", pitfall: "Waiting for others to go first misses a chance to lead with love!" },
          { badge: "STORY LINK 2", title: "How Joseph Practiced Forgiveness", problem: "Why did Joseph forgive his brothers?", step1: "He remembered God was with him the whole time.", step2: "He chose mercy instead of getting even.", step3: "Forgiveness healed his whole family!", pitfall: "Holding grudges hurts our own heart—forgiveness brings peace!" }
        ],
        wordBank: ["Promise", "Courage", "Wisdom", "Forgive", "Shepherd"],
        blanks: [
          { before: "1. Trusting God even when a challenge feels big shows ", answer: "Courage", after: ".", hint: "Starts with C" },
          { before: "2. King Solomon asked God for ", answer: "Wisdom", after: " to lead fairly.", hint: "Starts with W" },
          { before: "3. Choosing mercy instead of getting even means choosing to ", answer: "Forgive", after: ".", hint: "Starts with F" }
        ],
        writingPrompt: `In 1–2 sentences, tell one brave or kind lesson you learned from "${cleanTopic}"!`,
        writingExemplar: `Today's Bible lesson teaches me to trust God's promises, show courage, and treat others with kindness.`,
        quiz: fillQuiz(quizPool, quizTargetCount, w * 19 + d * 7, helper)
      };
    }

    if (subj === "science") {
      const quizPool = [
        { q: "How is EVERY sound (from a guitar string to your own voice) made?", options: ["By fast back-and-forth VIBRATIONS", "By freezing water", "By shining a flashlight", "By magnets alone"], correct: 0, explanation: "Sound ALWAYS starts with vibrations!" },
        { q: "What happens when a solid OPAQUE book blocks a beam of light?", options: ["It creates a dark SHADOW behind it", "Light bends around like water", "The book turns invisible", "Nothing happens"], correct: 0, explanation: "Opaque objects block light completely, forming shadows!" },
        { q: "Which word describes clear glass that lets almost ALL light shine straight through?", options: ["Transparent", "Opaque", "Rough", "Heavy"], correct: 0, explanation: "Transparent = clear · Translucent = frosted · Opaque = blocks light!" },
        { q: "Why does the Sun appear to move across the sky from East to West every day?", options: ["Because Earth spins (rotates) steadily on its axis", "Because the Sun rolls on wheels", "Because clouds push the Sun", "Because the Moon pulls it"], correct: 0, explanation: "Earth's smooth 24-hour rotation gives us sunrise, noon, and sunset!" },
        { q: "How does CAMOUFLAGE help a green tree frog survive in the forest?", options: ["Blending in with green leaves hides it from hungry predators", "It helps the frog fly", "It makes the frog glow bright neon", "It keeps the frog cold"], correct: 0, explanation: "Camouflage matches an animal's colors to its habitat!" },
        { q: "What is BIOMIMICRY in science and engineering?", options: ["Humans copying awesome designs from God's nature (like Velcro from burrs!)", "Painting pictures of fish", "Counting rocks", "Only studying space"], correct: 0, explanation: "Engineers study bird wings, burrs, and turtle shells to invent better tools!" },
        { q: "In which season do we have the LONGEST hours of daylight?", options: ["Summer", "Winter", "Midnight", "Never"], correct: 0, explanation: "Summer days stay bright much longer than chilly winter days!" },
        { q: "When two north poles of magnets face each other, what do they do?", options: ["REPEL (push away from each other)", "Stick tightly together", "Melt into water", "Turn into copper"], correct: 0, explanation: "Opposite poles attract (N–S); matching poles repel (N–N)!" }
      ];
      return {
        _hasOwnDayFocusCard: true,
        objectives: [`Investigate "${cleanTopic}" with real Grade 1 experiments and observations`, "Understand how vibrations make sound, how light makes shadows, and how Earth/Sun/Moon move", "Discover plant/animal survival structures, camouflage, and biomimicry"],
        anchorVerse: "Psalm 19:1 — The heavens declare the glory of God; and the firmament sheweth his handywork.",
        bigIdea: `Grade 1 Science reveals the hidden mechanics behind everyday wonders—vibrating sound waves, bouncing light beams, spinning planets, and clever animal designs!`,
        sections: [
          dayCard,
          { stepBadge: `PART 1 · CORE SCIENCE (${cleanTopic.toUpperCase()})`, heading: "How It Works in Real Life", body: `• <strong>Sound:</strong> Put two fingers gently on your throat and hum—feel the buzz? <strong>Vibrations</strong> make every sound!<br/>• <strong>Light:</strong> Clear glass is <strong>Transparent</strong>, frosted paper is <strong>Translucent</strong>, and a wooden door is <strong>Opaque</strong> (blocks light to cast a shadow!).<br/>• <strong>Life &amp; Space:</strong> Earth spins once every 24 hours, and plants &amp; animals use roots, claws, shells, and <strong>camouflage</strong> to thrive!`, keyTakeaway: "Vibrations = Sound · Blocked Light = Shadow · Nature designs inspire engineers!" },
          { stepBadge: "PART 2 · HANDS-ON HOME LAB (5 MINUTES)", heading: "Flashlight Shadow & Rubber-Band Sound Test!", body: `Stretch a rubber band around a plastic cup and pluck it—watch it vibrate and hear the sound! Then shine a flashlight at a clear glass vs. a toy block to compare Transparent vs. Opaque shadows!`, keyTakeaway: "Seeing and hearing science with simple kitchen tools makes every concept unforgettable!" }
        ],
        workedExamples: [
          { badge: "LAB CHECK 1", title: "Clear Window vs. Wooden Door", problem: "Which one casts a dark shadow?", step1: "A clear window is Transparent (light passes right through).", step2: "A wooden door is Opaque (blocks all light).", step3: "The wooden door casts a dark shadow!", pitfall: "You need a light source + an opaque object to make a crisp shadow!" },
          { badge: "NATURE DESIGN 2", title: "How Burrs Inspired Velcro", problem: "How is Velcro an example of Biomimicry?", step1: "Tiny plant burrs have microscopic hooks that stick to dog fur.", step2: "An engineer looked under a microscope and copied those hooks!", step3: "Copying nature's design to solve human problems = Biomimicry!", pitfall: "God's creation is the world's greatest engineering classroom!" }
        ],
        wordBank: ["Vibration", "Shadow", "Transparent", "Camouflage", "Habitat"],
        blanks: [
          { before: "1. Fast back-and-forth movement that creates sound is a ", answer: "Vibration", after: ".", hint: "Starts with V" },
          { before: "2. When an opaque object blocks light, it forms a dark ", answer: "Shadow", after: ".", hint: "Starts with S" },
          { before: "3. Blending in with leaves or snow to stay safe is ", answer: "Camouflage", after: ".", hint: "Starts with C" }
        ],
        writingPrompt: `In 1–2 sentences, describe one experiment or nature fact you discovered today about "${cleanTopic}"!`,
        writingExemplar: `Sound is made by vibrations, and blocking a flashlight beam with an opaque book makes a dark shadow behind it.`,
        quiz: fillQuiz(quizPool, quizTargetCount, w * 29 + d * 5, helper)
      };
    }

    // GRADE 1 HISTORY & CIVICS (HIST-101)
    const quizPool = [
      { q: "What are the FOUR main directions on a Compass Rose?", options: ["North, South, East, and West", "Up, Down, Spin, Jump", "Spring, Summer, Fall, Winter", "Red, White, Blue, Gold"], correct: 0, explanation: "Memory trick: Never Eat Soggy Waffles (N, E, S, W)!" },
      { q: "How many CONTINENTS are there on Planet Earth?", options: ["7 Continents", "2 Continents", "50 Continents", "1 Continent"], correct: 0, explanation: "North America, South America, Europe, Asia, Africa, Australia, and Antarctica = 7!" },
      { q: "Which of these is a SERVICE (helpful work someone does) rather than a GOOD (item you hold)?", options: ["A dentist cleaning your teeth", "A red apple", "A pair of sneakers", "A wooden pencil"], correct: 0, explanation: "Goods are physical objects; services are helpful jobs people perform!" },
      { q: "Which kind of community has tall skyscrapers, busy subways, and lots of apartments?", options: ["An URBAN community (big city)", "A rural farm", "A quiet forest", "An island desert"], correct: 0, explanation: "Urban = city · Suburban = neighborhoods near a city · Rural = countryside/farms!" },
      { q: "What does a TIMELINE show historians?", options: ["Important events placed in exact order from earliest to latest", "Only prices at a store", "Map directions", "Weather temperatures"], correct: 0, explanation: "Timelines organize past events in chronological order!" },
      { q: "Who led America's army to independence and served as the very first U.S. President?", options: ["George Washington", "Benjamin Franklin", "Paul Revere", "Daniel Boone"], correct: 0, explanation: "George Washington is honored as the Father of our Country!" },
      { q: "What courageous hero helped lead hundreds of enslaved people to freedom on the Underground Railroad?", options: ["Harriet Tubman", "Betsy Ross", "King George", "Christopher Columbus"], correct: 0, explanation: "Harriet Tubman risked her own safety with deep faith and bravery!" },
      { q: "What makes a good citizen in your neighborhood and country?", options: ["Obeying fair laws, respecting neighbors, telling the truth, and helping out", "Breaking rules", "Never sharing", "Ignoring community needs"], correct: 0, explanation: "Strong towns and nations are built by honest, caring citizens!" }
    ];
    return {
      _hasOwnDayFocusCard: true,
      objectives: [`Master "${cleanTopic}" with crisp Grade 1 geography, economics, and American heritage`, "Know the 7 Continents, Compass Rose (N, S, E, W), and Goods vs. Services", "Learn inspiring lessons from American founders and heroes"],
      anchorVerse: "Proverbs 11:11 — By the blessing of the upright the city is exalted.",
      bigIdea: `Grade 1 History & Civics zooms out from your bedroom to your town, your state, all 7 continents, and the brave men and women who shaped America!`,
      sections: [
        dayCard,
        { stepBadge: `PART 1 · GEOGRAPHY, ECONOMICS & HEROES (${cleanTopic.toUpperCase()})`, heading: "Connecting Maps, Work & History", body: `• <strong>Compass Rose Trick:</strong> <em>Never Eat Soggy Waffles</em> → <strong>North, East, South, West</strong>! Earth has <strong>7 Continents</strong> and <strong>5 Oceans</strong>.<br/>• <strong>Goods vs. Services:</strong> A baker sells a <strong>Good</strong> (loaf of bread); a doctor or teacher provides a <strong>Service</strong> (helpful work).<br/>• <strong>American Heroes:</strong> George Washington, Benjamin Franklin, Abraham Lincoln, and Harriet Tubman showed honesty, invention, and bravery!`, keyTakeaway: "Geography tells WHERE · Economics tells HOW we work & share · History tells WHO came before us!" },
        { stepBadge: "PART 2 · HANDS-ON HOME ACTIVITY", heading: "My Address Ladder & Family Timeline!", body: `Write your own <strong>Zoom-Out Address Ladder</strong>: <em>1. My Street → 2. My City → 3. My State → 4. United States → 5. North America → 6. Planet Earth!</em>`, keyTakeaway: "Seeing where you fit on Earth makes maps exciting!" }
      ],
      workedExamples: [
        { badge: "CIVICS CHECK 1", title: "Urban, Suburban, or Rural?", problem: "Which community has barns, tractors, and wide green cornfields?", step1: "Urban = tall city buildings.", step2: "Suburban = neighborhood houses near a city.", step3: "Rural = countryside & farms!", pitfall: "All three communities depend on each other!" },
        { badge: "ECONOMICS CHECK 2", title: "Producer vs. Consumer", problem: "When Mom buys apples from a farmer at a stand, who is the Producer?", step1: "The farmer GREW the apples (makes/provides goods = Producer).", step2: "Mom BUYS and enjoys them (Consumer).", step3: "Farmer = Producer · Buyer = Consumer!", pitfall: "Everyone is a consumer, and workers are producers!" }
      ],
      wordBank: ["Compass", "Continents", "Service", "Timeline", "Rural"],
      blanks: [
        { before: "1. The map tool showing North, South, East, and West is a ", answer: "Compass", after: " rose.", hint: "Starts with C" },
        { before: "2. Helpful work someone performs (like a doctor or teacher) is a ", answer: "Service", after: ".", hint: "Starts with S" },
        { before: "3. Placing historical events in order from earliest to latest makes a ", answer: "Timeline", after: ".", hint: "Starts with T" }
      ],
      writingPrompt: `In 1–2 sentences, name one American hero or map fact you learned today in "${cleanTopic}"!`,
      writingExemplar: `Harriet Tubman showed amazing bravery helping people reach freedom, and a compass rose helps travelers find North, South, East, and West.`,
      quiz: fillQuiz(quizPool, quizTargetCount, w * 37 + d * 9, helper)
    };
  }

  window.ACADEMY_GRADE_CURRICULA[1] = function (course, wNum, dayIdx, cleanTopic, quizTargetCount, helper) {
    const dept = (course.department || "").toLowerCase();
    const code = (course.code || "").toUpperCase();
    if (dept.includes("math") || code.startsWith("MATH")) return buildGrade1Math(wNum, dayIdx, cleanTopic, quizTargetCount, helper);
    if (dept.includes("literature") || code.startsWith("ELA") || code.startsWith("LIT")) return buildGrade1Reading(wNum, dayIdx, cleanTopic, quizTargetCount, helper);
    if (dept.includes("theology") || code.startsWith("THEO")) return buildGrade1Subject("bible", wNum, dayIdx, cleanTopic, quizTargetCount, helper);
    if (dept.includes("science") || code.startsWith("SCI")) return buildGrade1Subject("science", wNum, dayIdx, cleanTopic, quizTargetCount, helper);
    if (dept.includes("history") || code.startsWith("HIST")) return buildGrade1Subject("history", wNum, dayIdx, cleanTopic, quizTargetCount, helper);
    return null;
  };
})();
