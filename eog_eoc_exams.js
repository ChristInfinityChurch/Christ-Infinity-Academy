// Christ Infinity Academy — Public-Sector Aligned End-of-Grade (EOG) & End-of-Course (EOC) Final Exam Suite (Grades K–12)
// Dedicated Grade-by-Grade Final Exams for EVERY SINGLE GRADE (Kindergarten through Grade 12 — 42 Individual Exams!)

(function () {
  function shuffleOpts(qObj, seed) {
    const correctText = qObj.options[qObj.correct || 0];
    const arr = qObj.options.map((opt, idx) => ({
      opt,
      rank: ((idx + 1) * 41 + seed * 17) % 103
    }));
    arr.sort((a, b) => a.rank - b.rank);
    const newOpts = arr.map((x) => x.opt);
    return { ...qObj, options: newOpts, correct: Math.max(0, newOpts.indexOf(correctText)) };
  }

  // EVERY SINGLE GRADE (K, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12) HAS ITS OWN DEDICATED EOG / EOC TESTS!
  const EXAM_CATALOG = [
    // ==================== KINDERGARTEN (GRADE K) ====================
    { id: "eog-g0-read", grade: 0, subject: "read", qCount: 20, label: "Kindergarten EOG Reading & Phonics Final", type: "Kindergarten EOG", timeMins: 40, domains: ["Letter Sounds & Phonics", "Sight Words & Rhyming", "Story Comprehension"] },
    { id: "eog-g0-math", grade: 0, subject: "math", qCount: 20, label: "Kindergarten EOG Mathematics Final", type: "Kindergarten EOG", timeMins: 40, domains: ["Counting & Number Sense", "Making 10 & Simple Addition", "Shapes & Comparing"] },
    { id: "eog-g0-sci", grade: 0, subject: "sci", qCount: 20, label: "Kindergarten EOG Science & Nature Final", type: "Kindergarten EOG", timeMins: 35, domains: ["Living vs. Nonliving", "Weather & Seasons", "Five Senses & Plants"] },

    // ==================== GRADE 1 ====================
    { id: "eog-g1-read", grade: 1, subject: "read", qCount: 20, label: "Grade 1 EOG Reading & Comprehension Final", type: "Grade 1 EOG", timeMins: 45, domains: ["Phonics & Blends", "Story Characters & Events", "Sentences & Vocabulary"] },
    { id: "eog-g1-math", grade: 1, subject: "math", qCount: 20, label: "Grade 1 EOG Mathematics Final", type: "Grade 1 EOG", timeMins: 45, domains: ["Addition & Subtraction Within 20", "Tens & Ones Place Value", "Time, Coins & 2D Shapes"] },
    { id: "eog-g1-sci", grade: 1, subject: "sci", qCount: 20, label: "Grade 1 EOG Science Foundations Final", type: "Grade 1 EOG", timeMins: 40, domains: ["Light, Sound & Forces", "Earth, Sun & Moon", "Plant & Animal Needs"] },

    // ==================== GRADE 2 ====================
    { id: "eog-g2-read", grade: 2, subject: "read", qCount: 25, label: "Grade 2 EOG Reading & Vocabulary Final", type: "Grade 2 EOG", timeMins: 55, domains: ["Reading Literature (RL)", "Informational Text (RI)", "Grammar & Context Clues"] },
    { id: "eog-g2-math", grade: 2, subject: "math", qCount: 25, label: "Grade 2 EOG Mathematics Final", type: "Grade 2 EOG", timeMins: 55, domains: ["2-Digit Regrouping (+/-)", "Place Value to 1,000 & Arrays", "Money, Time & Measurement"] },
    { id: "eog-g2-sci", grade: 2, subject: "sci", qCount: 25, label: "Grade 2 EOG Science Foundations Final", type: "Grade 2 EOG", timeMins: 50, domains: ["States of Matter", "Life Cycles & Habitats", "Weather & Water Cycle"] },

    // ==================== GRADE 3 ====================
    { id: "eog-g3-read", grade: 3, subject: "read", qCount: 40, label: "Grade 3 EOG Reading Comprehension Final", type: "Grade 3 State EOG", timeMins: 90, domains: ["Reading Literature (RL)", "Reading Informational Text (RI)", "Language & Vocabulary (L)"] },
    { id: "eog-g3-math", grade: 3, subject: "math", qCount: 40, label: "Grade 3 EOG Mathematics Final (Calc-Inactive & Active)", type: "Grade 3 State EOG", timeMins: 90, domains: ["Multiplication & Division Facts", "Intro Fractions on Number Line", "Area, Perimeter & Time"] },
    { id: "eog-g3-sci", grade: 3, subject: "sci", qCount: 40, label: "Grade 3 EOG Science Comprehensive Final", type: "Grade 3 State EOG", timeMins: 75, domains: ["Forces, Motion & Gravity", "Solar System & Earth", "Plants, Soil & Human Body"] },

    // ==================== GRADE 4 ====================
    { id: "eog-g4-read", grade: 4, subject: "read", qCount: 40, label: "Grade 4 EOG Reading Comprehension Final", type: "Grade 4 State EOG", timeMins: 90, domains: ["Theme & Text Evidence (RL)", "Main Idea & Text Structure (RI)", "Greek/Latin Roots & Grammar (L)"] },
    { id: "eog-g4-math", grade: 4, subject: "math", qCount: 40, label: "Grade 4 EOG Mathematics Final (Calc-Inactive & Active)", type: "Grade 4 State EOG", timeMins: 90, domains: ["Multi-Digit Multiplication & Division", "Equivalent Fractions & Adding Fractions", "Angles, Area & Measurement"] },
    { id: "eog-g4-sci", grade: 4, subject: "sci", qCount: 40, label: "Grade 4 EOG Science Comprehensive Final", type: "Grade 4 State EOG", timeMins: 75, domains: ["Electricity & Magnetism", "Rocks, Fossils & Landforms", "Animal Adaptations & Energy"] },

    // ==================== GRADE 5 ====================
    { id: "eog-g5-read", grade: 5, subject: "read", qCount: 45, label: "Grade 5 EOG Reading Comprehension Final", type: "Grade 5 State EOG", timeMins: 120, domains: ["Reading Literature (RL)", "Reading Informational Text (RI)", "Language & Vocabulary (L)"] },
    { id: "eog-g5-math", grade: 5, subject: "math", qCount: 45, label: "Grade 5 EOG Mathematics Final (Calc-Inactive & Active)", type: "Grade 5 State EOG", timeMins: 120, domains: ["Fractions (~39%)", "Decimals & Base Ten Operations", "Volume (L×W×H) & Order of Operations"] },
    { id: "eog-g5-sci", grade: 5, subject: "sci", qCount: 45, label: "Grade 5 EOG Science State Comprehensive Final", type: "Grade 5 State EOG", timeMins: 120, domains: ["Forces & Motion", "Matter, Heat & Conservation", "Ecosystems & Weather Systems"] },

    // ==================== GRADE 6 ====================
    { id: "eog-g6-read", grade: 6, subject: "read", qCount: 45, label: "Grade 6 EOG Reading & Text Evidence Final", type: "Grade 6 State EOG", timeMins: 120, domains: ["Literary Analysis (RL)", "Informational Text & Claims (RI)", "Grammar & Academic Vocabulary (L)"] },
    { id: "eog-g6-math", grade: 6, subject: "math", qCount: 45, label: "Grade 6 EOG Mathematics Final (Calc-Inactive & Active)", type: "Grade 6 State EOG", timeMins: 120, domains: ["Ratios, Rates & Percents", "Integers & 1-Step Equations", "Area, Surface Area & Statistics"] },
    { id: "eog-g6-sci", grade: 6, subject: "sci", qCount: 45, label: "Grade 6 EOG Earth & Space Science Final", type: "Grade 6 State EOG", timeMins: 90, domains: ["Waves, Light & Thermal Energy", "Plate Tectonics & Solar System", "Ecosystems & Photosynthesis"] },

    // ==================== GRADE 7 ====================
    { id: "eog-g7-read", grade: 7, subject: "read", qCount: 45, label: "Grade 7 EOG Reading & Argument Analysis Final", type: "Grade 7 State EOG", timeMins: 120, domains: ["Point of View & Theme (RL)", "Evaluating Evidence & Claims (RI)", "Conventions & Figurative Language (L)"] },
    { id: "eog-g7-math", grade: 7, subject: "math", qCount: 45, label: "Grade 7 EOG Mathematics (Pre-Algebra) Final", type: "Grade 7 State EOG", timeMins: 120, domains: ["Proportional Relationships & Percents", "Two-Step Equations & Inequalities", "Circles, Angles & Probability"] },
    { id: "eog-g7-sci", grade: 7, subject: "sci", qCount: 45, label: "Grade 7 EOG Life & Physical Science Final", type: "Grade 7 State EOG", timeMins: 90, domains: ["Atmosphere & Weather", "Newton's Laws & Simple Machines", "Cells, Genetics & Human Systems"] },

    // ==================== GRADE 8 ====================
    { id: "eog-g8-read", grade: 8, subject: "read", qCount: 45, label: "Grade 8 EOG Reading & Literature Final", type: "Grade 8 State EOG", timeMins: 120, domains: ["Literary Inference & Structure (RL)", "Informational Synthesis (RI)", "Rhetoric, Roots & Editing (L)"] },
    { id: "eog-g8-math", grade: 8, subject: "math", qCount: 45, label: "Grade 8 EOG Mathematics Final (Calc-Inactive & Active)", type: "Grade 8 State EOG", timeMins: 120, domains: ["Linear Functions & Slope (y=mx+b)", "Pythagorean Theorem & Geometry", "Exponents, Systems & Statistics"] },
    { id: "eog-g8-sci", grade: 8, subject: "sci", qCount: 45, label: "Grade 8 EOG Science State Comprehensive Final", type: "Grade 8 State EOG", timeMins: 120, domains: ["Matter & Chemistry", "Earth Systems & Hydrosphere", "Molecular Biology & Ecosystems"] },

    // ==================== GRADE 9 (FRESHMAN EOCs) ====================
    { id: "eoc-g9-math1", grade: 9, subject: "math", qCount: 45, label: "Grade 9 EOC — Math 1 (Algebra I) Final", type: "Grade 9 State EOC", timeMins: 150, domains: ["Linear & Exponential Functions", "Quadratic Factoring & Systems", "Data & Statistical Modeling"] },
    { id: "eoc-g9-eng1", grade: 9, subject: "read", qCount: 45, label: "Grade 9 EOC — English I Literature & Rhetoric Final", type: "Grade 9 State EOC", timeMins: 150, domains: ["Close Literary Analysis", "Informational Argument & Evidence", "Grammar & Style Conventions"] },
    { id: "eoc-g9-sci", grade: 9, subject: "sci", qCount: 45, label: "Grade 9 EOC — Physical & Earth Science Final", type: "Grade 9 State EOC", timeMins: 120, domains: ["Kinematics, Forces & Energy", "Atomic Structure & Bonding", "Earth Systems & Climate"] },
    { id: "eoc-g9-hist", grade: 9, subject: "hist", qCount: 45, label: "Grade 9 EOC — World History & Civilizations Final", type: "Grade 9 State EOC", timeMins: 120, domains: ["Ancient & Classical Empires", "Reformation & Global Trade", "Revolutions & Modern World"] },

    // ==================== GRADE 10 (SOPHOMORE EOCs) ====================
    { id: "eoc-g10-math2", grade: 10, subject: "math", qCount: 45, label: "Grade 10 EOC — Math 2 (Geometry & Proofs) Final", type: "Grade 10 State EOC", timeMins: 150, domains: ["Triangle Congruence & Similarity", "Circles, Area & Volume", "Right-Triangle Trigonometry & Quadratics"] },
    { id: "eoc-g10-eng2", grade: 10, subject: "read", qCount: 45, label: "Grade 10 EOC — English II State Comprehensive Final", type: "Grade 10 State EOC", timeMins: 150, domains: ["World Literature Analysis", "Rhetorical Persuasion & Evidence", "Advanced Editing & Synthesis"] },
    { id: "eoc-g10-bio", grade: 10, subject: "bio", qCount: 45, label: "Grade 10 EOC — Biology State Comprehensive Final", type: "Grade 10 State EOC", timeMins: 150, domains: ["Cell Structure & Bioenergetics", "DNA, Genetics & Heredity", "Ecosystems & Populations"] },

    // ==================== GRADE 11 (JUNIOR EOCs) ====================
    { id: "eoc-g11-math3", grade: 11, subject: "math", qCount: 45, label: "Grade 11 EOC — Math 3 (Algebra II) Final", type: "Grade 11 State EOC", timeMins: 150, domains: ["Polynomial & Rational Functions", "Logarithms & Exponentials", "Trigonometry & Geometric Modeling"] },
    { id: "eoc-g11-eng3", grade: 11, subject: "read", qCount: 45, label: "Grade 11 EOC — English III (American Literature) Final", type: "Grade 11 State EOC", timeMins: 150, domains: ["American Literary Movements", "Foundational Civic Texts", "Rhetorical Analysis & Conventions"] },
    { id: "eoc-g11-chem", grade: 11, subject: "chem", qCount: 45, label: "Grade 11 EOC — Chemistry Comprehensive Final", type: "Grade 11 State EOC", timeMins: 150, domains: ["Periodic Table & Bonding", "Stoichiometry & Balancing Equations", "Acids, Bases & Gas Laws"] },
    { id: "eoc-g11-ushist", grade: 11, subject: "ushist", qCount: 45, label: "Grade 11 EOC — U.S. History & Constitutional Civics Final", type: "Grade 11 State EOC", timeMins: 120, domains: ["Founding & Constitution", "Expansion & Civil War", "Modern Era & Economics"] },

    // ==================== GRADE 12 (SENIOR EOCs) ====================
    { id: "eoc-g12-math4", grade: 12, subject: "math", qCount: 45, label: "Grade 12 EOC — Math 4 (Pre-Calculus & Calculus Readiness) Final", type: "Grade 12 State EOC", timeMins: 150, domains: ["Functions, Limits & Rates of Change", "Trigonometric Identities & Unit Circle", "Vectors, Sequences & Probability"] },
    { id: "eoc-g12-eng4", grade: 12, subject: "read", qCount: 45, label: "Grade 12 EOC — English IV (Collegiate Rhetoric) Final", type: "Grade 12 State EOC", timeMins: 150, domains: ["British & Classical World Literature", "Academic Research & Argumentation", "Collegiate Syntax & Logic"] },
    { id: "eoc-g12-phys", grade: 12, subject: "phys", qCount: 45, label: "Grade 12 EOC — Physics & Engineering Foundations Final", type: "Grade 12 State EOC", timeMins: 150, domains: ["Mechanics, Vectors & Momentum", "Work, Power & Conservation of Energy", "Electricity, Circuits & Waves"] },
    { id: "eoc-g12-econ", grade: 12, subject: "econ", qCount: 45, label: "Grade 12 EOC — Economics, Personal Finance & Government Final", type: "Grade 12 State EOC", timeMins: 120, domains: ["Supply, Demand & Macroeconomics", "Personal Finance, Taxes & Investing", "Constitutional Governance & Law"] }
  ];

  // ==================== GRADE-BY-GRADE MATH EOG/EOC GENERATOR (GRADES K–12) ====================
  function buildMathEogQuestions(examMeta) {
    const g = examMeta.grade;
    const count = examMeta.qCount || 45;
    const qs = [];

    for (let i = 0; i < count; i++) {
      const calcSection = i < Math.floor(count / 2) ? "Part 1 · Calculator Inactive" : "Part 2 · Calculator Active";
      let qObj;

      if (g === 0) {
        // KINDERGARTEN MATH
        const t = i % 4;
        if (t === 0) {
          const a = 1 + (i % 5), b = 1 + ((i + 2) % 4);
          qObj = { domain: "Making 10 & Simple Addition", section: calcSection, q: `You see ${a} red apples and ${b} green apples in a basket. How many apples are there in all?`, options: [String(a + b), String(a + b + 1), String(Math.max(1, a + b - 1)), String(a + b + 2)], correct: 0 };
        } else if (t === 1) {
          const n = 2 + (i % 8);
          qObj = { domain: "Making 10 & Simple Addition", section: calcSection, q: `What number do you add to ${n} to make 10? (${n} + ___ = 10)`, options: [String(10 - n), String(10 - n + 1), String(n), String(Math.max(1, 9 - n))], correct: 0 };
        } else if (t === 2) {
          const a = 6 + (i % 4), b = 1 + (i % 4);
          qObj = { domain: "Counting & Number Sense", section: calcSection, q: `There are ${a} birds on a fence. ${b} birds fly away. How many birds are left?`, options: [String(a - b), String(a + b), String(a - b + 1), String(a)], correct: 0 };
        } else {
          const shapes = [["Triangle", 3], ["Square", 4], ["Circle", 0], ["Hexagon", 6]];
          const [nm, sd] = shapes[i % shapes.length];
          qObj = { domain: "Shapes & Comparing", section: calcSection, q: sd === 0 ? "Which shape is completely round and has 0 straight sides?" : `Which shape has exactly ${sd} straight sides?`, options: [nm, shapes[(i + 1) % 4][0], shapes[(i + 2) % 4][0], shapes[(i + 3) % 4][0]], correct: 0 };
        }
      } else if (g === 1) {
        // GRADE 1 MATH
        const t = i % 4;
        if (t === 0) {
          const a = 6 + (i % 9), b = 4 + (i % 8);
          qObj = { domain: "Addition & Subtraction Within 20", section: calcSection, q: `What is ${a} + ${b}?`, options: [String(a + b), String(a + b + 2), String(a + b - 1), String(a + b + 3)], correct: 0 };
        } else if (t === 1) {
          const a = 14 + (i % 6), b = 5 + (i % 6);
          qObj = { domain: "Addition & Subtraction Within 20", section: calcSection, q: `Noah collected ${a} shells and gave ${b} to his sister. How many shells does Noah have now?`, options: [String(a - b), String(a + b), String(a - b + 2), String(a - b - 1)], correct: 0 };
        } else if (t === 2) {
          const tens = 2 + (i % 7), ones = 1 + (i % 8);
          qObj = { domain: "Tens & Ones Place Value", section: calcSection, q: `Which number has ${tens} tens and ${ones} ones?`, options: [String(tens * 10 + ones), String(ones * 10 + tens), String(tens + ones), String(tens * 100 + ones)], correct: 0 };
        } else {
          const dimes = 1 + (i % 4), nickels = 1 + (i % 3);
          const total = dimes * 10 + nickels * 5;
          qObj = { domain: "Time, Coins & 2D Shapes", section: calcSection, q: `How many cents is ${dimes} dime(s) and ${nickels} nickel(s)?`, options: [`${total}¢`, `${total + 5}¢`, `${total + 10}¢`, `${Math.max(5, total - 5)}¢`], correct: 0 };
        }
      } else if (g === 2) {
        // GRADE 2 MATH
        const t = i % 4;
        if (t === 0) {
          const a = 26 + (i % 35), b = 17 + (i % 25);
          qObj = { domain: "2-Digit Regrouping (+/-)", section: calcSection, q: `Add with regrouping: ${a} + ${b} = ?`, options: [String(a + b), String(a + b - 10), String(a + b + 10), String(a + b + 2)], correct: 0 };
        } else if (t === 1) {
          const a = 62 + (i % 28), b = 18 + (i % 24);
          qObj = { domain: "2-Digit Regrouping (+/-)", section: calcSection, q: `A library shelf had ${a} books. Students checked out ${b} books. How many books remain on the shelf?`, options: [String(a - b), String(a + b), String(a - b + 10), String(a - b - 2)], correct: 0 };
        } else if (t === 2) {
          const r = 3 + (i % 4), c = 2 + (i % 4);
          qObj = { domain: "Place Value to 1,000 & Arrays", section: calcSection, q: `A garden has ${r} rows of flowers with ${c} flowers in each row. How many flowers are in the garden?`, options: [String(r * c), String(r + c), String(r * c + r), String(r * c - 2)], correct: 0 };
        } else {
          const qtr = 2 + (i % 3), dime = 1 + (i % 4);
          const tot = qtr * 25 + dime * 10;
          qObj = { domain: "Money, Time & Measurement", section: calcSection, q: `How much money is ${qtr} quarters and ${dime} dime(s)?`, options: [`${tot}¢`, `${tot + 15}¢`, `${tot - 10}¢`, `${qtr * 10 + dime * 5}¢`], correct: 0 };
        }
      } else if (g === 3) {
        // GRADE 3 MATH
        const t = i % 4;
        if (t === 0) {
          const a = 4 + (i % 6), b = 6 + (i % 4);
          qObj = { domain: "Multiplication & Division Facts", section: calcSection, q: `A coach arranges ${a} teams with ${b} players on each team. How many players are there in total?`, options: [String(a * b), String(a + b), String(a * b + a), String(a * b - b)], correct: 0 };
        } else if (t === 1) {
          const d = 4 + (i % 5), q = 5 + (i % 6);
          qObj = { domain: "Multiplication & Division Facts", section: calcSection, q: `Share ${d * q} pencils equally among ${d} tables. How many pencils does each table get?`, options: [String(q), String(q + 2), String(q - 1), String(d)], correct: 0 };
        } else if (t === 2) {
          const den = [4, 6, 8][i % 3], num = 1 + (i % (den - 1));
          qObj = { domain: "Intro Fractions on Number Line", section: calcSection, q: `A chocolate bar is split into ${den} equal pieces. Maya eats ${num} piece(s). What fraction of the bar did she eat?`, options: [`${num}/${den}`, `${den}/${num}`, `${num}/${den - 1}`, `1/${num + 1}`], correct: 0 };
        } else {
          const l = 5 + (i % 6), w = 3 + (i % 5);
          qObj = { domain: "Area, Perimeter & Time", section: calcSection, q: `A rectangular rug is ${l} feet long and ${w} feet wide. What is its AREA?`, options: [`${l * w} sq ft`, `${2 * (l + w)} sq ft`, `${l + w} sq ft`, `${l * w + 4} sq ft`], correct: 0 };
        }
      } else if (g === 4) {
        // GRADE 4 MATH
        const t = i % 4;
        if (t === 0) {
          const a = 23 + (i % 18), b = 4 + (i % 6);
          qObj = { domain: "Multi-Digit Multiplication & Division", section: calcSection, q: `Multiply: ${a} × ${b} = ?`, options: [String(a * b), String(a * b + b), String(a * b - a), String((a + 2) * b)], correct: 0 };
        } else if (t === 1) {
          const den = [6, 8, 10, 12][i % 4], n1 = 1 + (i % 3), n2 = 2 + (i % 3);
          qObj = { domain: "Equivalent Fractions & Adding Fractions", section: calcSection, q: `Add the fractions: ${n1}/${den} + ${n2}/${den} = ?`, options: [`${n1 + n2}/${den}`, `${n1 + n2}/${den * 2}`, `${n1 * n2}/${den}`, `${Math.abs(n2 - n1) + 1}/${den}`], correct: 0 };
        } else if (t === 2) {
          const mult = 2 + (i % 4), num = 1 + (i % 3), den = 4 + (i % 3);
          qObj = { domain: "Equivalent Fractions & Adding Fractions", section: calcSection, q: `Which fraction is EQUIVALENT to ${num}/${den}?`, options: [`${num * mult}/${den * mult}`, `${num + mult}/${den + mult}`, `${num * mult}/${den}`, `${num}/${den * mult}`], correct: 0 };
        } else {
          const a1 = 25 + (i % 40);
          qObj = { domain: "Angles, Area & Measurement", section: calcSection, q: `Two angles combine to form a 90° right angle. One angle measures ${a1}°. What is the measure of the other angle?`, options: [`${90 - a1}°`, `${180 - a1}°`, `${90 + a1}°`, `${90 - a1 + 10}°`], correct: 0 };
        }
      } else if (g === 5) {
        // GRADE 5 MATH (NC Grade 5 EOG Blueprint: Fractions ~39%, Decimals, Volume, PEMDAS)
        const t = i % 5;
        if (t === 0 || t === 1) {
          const den = [6, 8, 10, 12][i % 4], n1 = 1 + (i % 3), n2 = 1 + ((i + 2) % 3);
          qObj = t === 0
            ? { domain: "Fractions (~39%)", section: calcSection, q: `A baker uses ${n1}/${den} cup of brown sugar and ${n2}/${den} cup of white sugar. How much sugar is used altogether?`, options: [`${n1 + n2}/${den} cup`, `${n1 + n2}/${den * 2} cup`, `${n1 * n2}/${den} cup`, `${Math.abs(n1 - n2) + 1}/${den} cup`], correct: 0 }
            : { domain: "Fractions (~39%)", section: calcSection, q: `Multiply: 1/${2 + (i % 3)} × ${2 + (i % 4)}/${5 + (i % 3)} = ?`, options: [`${2 + (i % 4)}/${(2 + (i % 3)) * (5 + (i % 3))}`, `${3 + (i % 4)}/${(2 + (i % 3)) + (5 + (i % 3))}`, `${2 + (i % 4)}/${5 + (i % 3)}`, `1/${2 + (i % 3)}`], correct: 0 };
        } else if (t === 2) {
          const l = 5 + (i % 6), w = 4 + (i % 4), h = 3 + (i % 3);
          qObj = { domain: "Volume (L×W×H) & Order of Operations", section: calcSection, q: `Find the VOLUME of a rectangular prism measuring ${l} ft × ${w} ft × ${h} ft:`, options: [`${l * w * h} cubic ft`, `${l + w + h} cubic ft`, `${l * w} cubic ft`, `${2 * (l + w + h)} cubic ft`], correct: 0 };
        } else if (t === 3) {
          const d1 = (24 + i * 3) / 10, d2 = (13 + i * 2) / 10;
          qObj = { domain: "Decimals & Base Ten Operations", section: calcSection, q: `A runner logs ${d1.toFixed(1)} miles Monday and ${d2.toFixed(1)} miles Tuesday. Total miles run?`, options: [`${(d1 + d2).toFixed(1)} miles`, `${(d1 + d2 + 0.4).toFixed(1)} miles`, `${Math.abs(d1 - d2).toFixed(1)} miles`, `${(d1 + d2 + 1.0).toFixed(1)} miles`], correct: 0 };
        } else {
          const a = 3 + (i % 5), b = 2 + (i % 4), c = 4 + (i % 5);
          qObj = { domain: "Volume (L×W×H) & Order of Operations", section: calcSection, q: `Evaluate using Order of Operations (PEMDAS): ${a} + ${b} × ${c}`, options: [String(a + b * c), String((a + b) * c), String(a * b + c), String(a + b + c)], correct: 0 };
        }
      } else if (g === 6) {
        // GRADE 6 MATH
        const t = i % 4;
        if (t === 0) {
          const pct = [15, 20, 25, 30, 40][i % 5], base = (4 + (i % 6)) * 20, ans = (base * pct) / 100;
          qObj = { domain: "Ratios, Rates & Percents", section: calcSection, q: `A jacket costs $${base} and is ${pct}% off. How much money is saved?`, options: [`$${ans}`, `$${base - ans}`, `$${ans + 10}`, `$${pct}`], correct: 0 };
        } else if (t === 1) {
          const neg = -(5 + (i % 9)), pos = 12 + (i % 9);
          qObj = { domain: "Integers & 1-Step Equations", section: calcSection, q: `Evaluate the integer sum: ${neg} + ${pos} = ?`, options: [String(neg + pos), String(-(neg + pos)), String(Math.abs(neg) + pos), String(neg - pos)], correct: 0 };
        } else if (t === 2) {
          const x = 4 + (i % 10), k = 7 + (i % 8);
          qObj = { domain: "Integers & 1-Step Equations", section: calcSection, q: `Solve for x: x + ${k} = ${x + k}`, options: [String(x), String(x + k + k), String(k), String(x + 2)], correct: 0 };
        } else {
          const b = 6 + (i % 6), h = 4 + (i % 5);
          qObj = { domain: "Area, Surface Area & Statistics", section: calcSection, q: `Find the area of a triangle with base ${b} cm and height ${h} cm (Area = ½ × b × h):`, options: [`${(b * h) / 2} sq cm`, `${b * h} sq cm`, `${b + h} sq cm`, `${b * h * 2} sq cm`], correct: 0 };
        }
      } else if (g === 7) {
        // GRADE 7 MATH (PRE-ALGEBRA)
        const t = i % 4;
        if (t === 0) {
          const a = 3 + (i % 5), x = 2 + (i % 8), b = 5 + (i % 7);
          qObj = { domain: "Two-Step Equations & Inequalities", section: calcSection, q: `Solve for x: ${a}x + ${b} = ${a * x + b}`, options: [String(x), String(x + 2), String(a * x), String(Math.max(1, x - 1))], correct: 0 };
        } else if (t === 1) {
          const rate = 4 + (i % 6), hrs = 3 + (i % 5);
          qObj = { domain: "Proportional Relationships & Percents", section: calcSection, q: `A proportional relationship follows y = ${rate}x. If x = ${hrs}, what is y?`, options: [String(rate * hrs), String(rate + hrs), String(rate * hrs + rate), String(hrs)], correct: 0 };
        } else if (t === 2) {
          const r = 3 + (i % 6);
          qObj = { domain: "Circles, Angles & Probability", section: calcSection, q: `What is the exact circumference of a circle with radius r = ${r} inches? (C = 2πr)`, options: [`${2 * r}π inches`, `${r * r}π inches`, `${r}π inches`, `${4 * r}π inches`], correct: 0 };
        } else {
          const red = 2 + (i % 4), blue = 3 + (i % 4), tot = red + blue;
          qObj = { domain: "Circles, Angles & Probability", section: calcSection, q: `A bag holds ${red} red marbles and ${blue} blue marbles. What is the probability of drawing a red marble at random?`, options: [`${red}/${tot}`, `${blue}/${tot}`, `${red}/${blue}`, `1/${tot}`], correct: 0 };
        }
      } else if (g === 8) {
        // GRADE 8 MATH
        const t = i % 4;
        if (t === 0) {
          const m = 2 + (i % 5), x1 = 1 + (i % 3), y1 = 4 + (i % 5), dx = 3;
          qObj = { domain: "Linear Functions & Slope (y=mx+b)", section: calcSection, q: `Find the slope of the line passing through (${x1}, ${y1}) and (${x1 + dx}, ${y1 + m * dx}):`, options: [String(m), String(m * dx), `1/${m}`, String(m + 2)], correct: 0 };
        } else if (t === 1) {
          const triples = [[3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 15, 17]];
          const [a, b, c] = triples[i % triples.length];
          qObj = { domain: "Pythagorean Theorem & Geometry", section: calcSection, q: `A right triangle has legs ${a} m and ${b} m. Using a² + b² = c², find hypotenuse c:`, options: [`${c} m`, `${a + b} m`, `${c * c} m`, `${b - a} m`], correct: 0 };
        } else if (t === 2) {
          const p1 = 2 + (i % 4), p2 = 3 + (i % 4);
          qObj = { domain: "Exponents, Systems & Statistics", section: calcSection, q: `Simplify using exponent laws: x^${p1} · x^${p2} = ?`, options: [`x^${p1 + p2}`, `x^${p1 * p2}`, `2x^${p1 + p2}`, `x^${Math.abs(p2 - p1) + 1}`], correct: 0 };
        } else {
          const n1 = 80 + (i % 5) * 2, n2 = 86 + (i % 4) * 2, avg = 88;
          const n3 = avg * 3 - n1 - n2;
          qObj = { domain: "Exponents, Systems & Statistics", section: calcSection, q: `Find the mean (average) of these three test scores: ${n1}, ${n2}, and ${n3}.`, options: [String(avg), String(avg + 3), String(avg - 2), String(n1)], correct: 0 };
        }
      } else if (g === 9) {
        // GRADE 9 EOC — MATH 1 (ALGEBRA I)
        const t = i % 5;
        if (t === 0) {
          const m = 3 + (i % 5), b = 4 + (i % 7), x = 5 + (i % 4);
          qObj = { domain: "Linear & Exponential Functions", section: calcSection, q: `A gym charges a $${b} signup fee plus $${m} per class: C(x) = ${m}x + ${b}. What is C(${x})?`, options: [`$${m * x + b}`, `$${(m + b) * x}`, `$${m * x}`, `$${m * x + b + m}`], correct: 0 };
        } else if (t === 1) {
          const r1 = 2 + (i % 6), r2 = 3 + (i % 5);
          qObj = { domain: "Quadratic Factoring & Systems", section: calcSection, q: `What are the zeros (x-intercepts) of f(x) = (x − ${r1})(x + ${r2})?`, options: [`x = ${r1} and x = -${r2}`, `x = -${r1} and x = ${r2}`, `x = ${r1 + r2} only`, `x = ${r1 * r2} only`], correct: 0 };
        } else if (t === 2) {
          const init = 100 * (1 + (i % 4)), yrs = 2 + (i % 3);
          qObj = { domain: "Linear & Exponential Functions", section: calcSection, q: `A colony starts with ${init} cells and doubles every hour: P(t) = ${init}·2^t. How many cells after ${yrs} hours?`, options: [String(init * Math.pow(2, yrs)), String(init * 2 * yrs), String(init + 2 * yrs), String((init * Math.pow(2, yrs)) / 2)], correct: 0 };
        } else if (t === 3) {
          const x = 3 + (i % 6), y = 2 + (i % 5);
          qObj = { domain: "Quadratic Factoring & Systems", section: calcSection, q: `Solve the linear system: x + y = ${x + y} and x − y = ${x - y}. What is x?`, options: [String(x), String(y), String(x + y), String(x * 2)], correct: 0 };
        } else {
          const x = 2 + (i % 7);
          qObj = { domain: "Data & Statistical Modeling", section: calcSection, q: `A line of best fit is y = 4x + 10. What y-value does it predict at x = ${x}?`, options: [String(4 * x + 10), String(4 * (x + 10)), String(4 + x + 10), String(4 * x - 10)], correct: 0 };
        }
      } else if (g === 10) {
        // GRADE 10 EOC — MATH 2 (GEOMETRY)
        const t = i % 4;
        if (t === 0) {
          const a = 35 + (i % 30), b = 45 + (i % 25);
          qObj = { domain: "Triangle Congruence & Similarity", section: calcSection, q: `Two interior angles of a triangle measure ${a}° and ${b}°. What is the measure of the third angle?`, options: [`${180 - a - b}°`, `${a + b}°`, `${360 - a - b}°`, `${180 - a - b + 10}°`], correct: 0 };
        } else if (t === 1) {
          const r = 4 + (i % 6);
          qObj = { domain: "Circles, Area & Volume", section: calcSection, q: `What is the exact area of a circle whose equation is x² + y² = ${r * r}?`, options: [`${r * r}π`, `${2 * r}π`, `${r}π`, `${2 * r * r}π`], correct: 0 };
        } else if (t === 2) {
          const n = 5 + (i % 6);
          qObj = { domain: "Circles, Area & Volume", section: calcSection, q: `Find the sum of interior angles of a regular ${n}-gon: (n − 2) × 180°`, options: [`${(n - 2) * 180}°`, `${n * 180}°`, "360°", `${(n - 1) * 180}°`], correct: 0 };
        } else {
          const opp = 3 + (i % 4), adj = 4 + (i % 4);
          qObj = { domain: "Right-Triangle Trigonometry & Quadratics", section: calcSection, q: `In a right triangle, opposite side = ${opp} and adjacent side = ${adj}. What is tan(θ)?`, options: [`${opp}/${adj}`, `${adj}/${opp}`, `${opp + adj}/${adj}`, `1/${opp}`], correct: 0 };
        }
      } else if (g === 11) {
        // GRADE 11 EOC — MATH 3 (ALGEBRA II)
        const t = i % 4;
        if (t === 0) {
          const p = 2 + (i % 6), val = Math.pow(2, p);
          qObj = { domain: "Logarithms & Exponentials", section: calcSection, q: `Solve for x: log₂(${val}) = x`, options: [String(p), String(val / 2), String(p + 1), String(p * 2)], correct: 0 };
        } else if (t === 1) {
          const a = 2 + (i % 4), ans = a * 8 - 5;
          qObj = { domain: "Polynomial & Rational Functions", section: calcSection, q: `Evaluate the cubic polynomial P(x) = ${a}x³ − 5 at x = 2:`, options: [String(ans), String(a * 6 - 5), String(ans + 5), String(a * 8 + 5)], correct: 0 };
        } else if (t === 2) {
          const deg = 20 + (i % 55);
          qObj = { domain: "Trigonometry & Geometric Modeling", section: calcSection, q: `Using the Pythagorean identity, simplify sin²(${deg}°) + cos²(${deg}°):`, options: ["1", "0", String(deg), "2"], correct: 0 };
        } else {
          const k = 3 + (i % 6);
          qObj = { domain: "Polynomial & Rational Functions", section: calcSection, q: `For the rational function f(x) = 1 / (x − ${k}), where is the vertical asymptote?`, options: [`x = ${k}`, `x = -${k}`, "x = 0", `y = ${k}`], correct: 0 };
        }
      } else {
        // GRADE 12 EOC — MATH 4 (PRE-CALCULUS & CALCULUS READINESS)
        const t = i % 4;
        if (t === 0) {
          const a = 2 + (i % 5), b = 3 + (i % 6), x = 3;
          qObj = { domain: "Functions, Limits & Rates of Change", section: calcSection, q: `Evaluate the limit: lim (x → ${x}) of (${a}x² + ${b})`, options: [String(a * x * x + b), String(a * x + b), String(2 * a * x), String(a * x * x - b)], correct: 0 };
        } else if (t === 1) {
          const c = 3 + (i % 6), p = 2 + (i % 4);
          qObj = { domain: "Functions, Limits & Rates of Change", section: calcSection, q: `Using the Power Rule, find the derivative f'(x) of f(x) = ${c}x^${p}:`, options: [`${c * p}x^${p - 1}`, `${c}x^${p - 1}`, `${c * p}x^${p}`, `${c + p}x^${p - 1}`], correct: 0 };
        } else if (t === 2) {
          const rads = [["π/6", "30°"], ["π/4", "45°"], ["π/3", "60°"], ["π/2", "90°"], ["π", "180°"]];
          const [rad, deg] = rads[i % rads.length];
          qObj = { domain: "Trigonometric Identities & Unit Circle", section: calcSection, q: `Convert the radian angle ${rad} into degrees:`, options: [deg, rads[(i + 1) % rads.length][1], rads[(i + 2) % rads.length][1], "360°"], correct: 0 };
        } else {
          const a1 = 2 + (i % 5), d = 3 + (i % 4), n = 5;
          qObj = { domain: "Vectors, Sequences & Probability", section: calcSection, q: `An arithmetic sequence starts at a₁ = ${a1} with common difference d = ${d}. What is the ${n}th term a₅?`, options: [String(a1 + (n - 1) * d), String(a1 + n * d), String(a1 * d), String(a1 + d)], correct: 0 };
        }
      }
      qs.push(shuffleOpts(qObj, i * 13 + g * 29 + count));
    }
    return qs;
  }

  // ==================== SUBJECT QUESTION BANKS (K–12 CALIBRATED) ====================
  function buildSubjectEogQuestions(examMeta) {
    const count = examMeta.qCount || 45;
    const g = examMeta.grade;
    const subj = examMeta.subject;

    const banks = {
      k2read: [
        { domain: "Letter Sounds & Phonics", q: "Which word begins with the same /sh/ sound as 'SHIP'?", options: ["Shell", "Cat", "Ball", "Tree"], correct: 0 },
        { domain: "Sight Words & Rhyming", q: "Which word rhymes with 'STAR'?", options: ["Car", "Book", "Fish", "Sun"], correct: 0 },
        { domain: "Story Comprehension", passage: "SHORT STORY: Ben planted a tiny sunflower seed in warm soil. Every morning he watered it and watched the sunshine warm the pot. Soon a bright green sprout popped up!", q: "What happened AFTER Ben watered the seed in the sunshine?", options: ["A bright green sprout popped up", "It snowed inside the house", "Ben forgot where the pot was", "The seed turned into a rock"], correct: 0 },
        { domain: "Story Comprehension", q: "Who is the main character in the sunflower story?", options: ["Ben", "A giant bear", "A fire truck", "A talking fish"], correct: 0 },
        { domain: "Sentences & Vocabulary", q: "Which sentence starts with a capital letter and ends with a period?", options: ["The golden griffin flew over the hill.", "the golden griffin flew over the hill", "The golden griffin flew over the hill?", "flew over the hill."], correct: 0 },
        { domain: "Letter Sounds & Phonics", q: "How many syllables (claps) are in the word 'BUT-TER-FLY'?", options: ["3 syllables", "1 syllable", "5 syllables", "2 syllables"], correct: 0 },
        { domain: "Sentences & Vocabulary", q: "Which word is the OPPOSITE (antonym) of 'HAPPY'?", options: ["Sad", "Glad", "Joyful", "Smiling"], correct: 0 },
        { domain: "Sight Words & Rhyming", q: "Which pair of words BOTH rhyme?", options: ["Light and Bright", "Dog and Cup", "Blue and Tree", "Pen and Hat"], correct: 0 }
      ],
      reading: [
        { domain: "Reading Informational Text (RI)", passage: "PASSAGE A: Honeybees communicate the exact location of flowers using a figure-eight movement called the 'waggle dance.' The angle of the dance tells hive-mates which direction to fly relative to the Sun, while the duration of the waggle signals how far away the nectar is.", q: "According to Passage A, what does the DURATION (length of time) of a honeybee's waggle dance communicate?", options: ["How far away the flowers are from the hive", "What color the petals are", "How cold the weather is outside", "Which predator is nearby"], correct: 0 },
        { domain: "Reading Informational Text (RI)", q: "In Passage A, what is the author's primary purpose?", options: ["To explain how honeybees share precise navigation clues with their hive", "To persuade readers to avoid gardens", "To tell a fictional fable about a talking bee", "To compare bees with butterflies"], correct: 0 },
        { domain: "Reading Literature (RL)", passage: "PASSAGE B: Maya stared at the steep wooden bridge swaying gently above the creek. Her younger brother squeezed her hand nervously. Taking a slow breath, Maya stepped onto the first sturdy plank and smiled back. 'One steady board at a time, Noah—I'm right in front of you.'", q: "Which character trait does Maya demonstrate most clearly in Passage B?", options: ["Courage and reassuring leadership despite feeling cautious", "Impatience with her younger brother", "Carelessness about safety", "Refusal to cross the creek"], correct: 0 },
        { domain: "Reading Literature (RL)", q: "Which detail from Passage B provides the BEST text evidence that Maya stays calm to help Noah?", options: ["'Taking a slow breath, Maya stepped onto the first sturdy plank and smiled back.'", "'The wooden bridge swayed gently above the creek.'", "'Maya stared at the bridge.'", "'The creek flowed under the trees.'"], correct: 0 },
        { domain: "Language & Vocabulary (L)", q: "In the sentence 'The explorers had to CONSERVE their remaining water during the desert crossing,' what does CONSERVE most nearly mean?", options: ["Use carefully so it lasts longer", "Pour out rapidly", "Boil over a fire", "Trade away for maps"], correct: 0 },
        { domain: "Language & Vocabulary (L)", q: "Choose the sentence with 100% correct punctuation and capitalization:", options: ["\"Let's review our science notes,\" said Elena, \"before Friday's unit test.\"", "\"Lets review our science notes\" said elena \"before Fridays unit test.\"", "Let's review our science notes, said Elena before Friday's unit test.", "\"Let's review our science notes, said Elena.\""], correct: 0 },
        { domain: "Reading Informational Text (RI)", q: "What is the best definition of a text's CENTRAL IDEA (Main Idea)?", options: ["The most important overall message that all the supporting details point toward", "The very last word in the paragraph", "A minor fun fact mentioned once", "The author's birthday"], correct: 0 },
        { domain: "Reading Literature (RL)", q: "In a story, what is the difference between a story's SETTING and its THEME?", options: ["Setting is when and where the story takes place; Theme is the deeper life lesson or message", "Setting is the moral; Theme is the map location", "They mean the exact same thing", "Theme is only the main character's name"], correct: 0 },
        { domain: "Language & Vocabulary (L)", q: "What does the Greek/Latin root 'tele-' (as in telescope, telephone, telegraph) mean?", options: ["Far away / at a distance", "Tiny / microscopic", "Water / ocean", "Fast / running"], correct: 0 },
        { domain: "Language & Vocabulary (L)", q: "Which sentence uses a METAPHOR (direct comparison without 'like' or 'as')?", options: ["The library was a treasure chest of ancient wisdom.", "The wind howled like a hungry wolf.", "The river was as clear as glass.", "The runners sprinted quickly down the lane."], correct: 0 },
        { domain: "Reading Informational Text (RI)", q: "When evaluating an author's argument in an essay, what makes a claim MOST trustworthy?", options: ["Specific facts, verified data, and credible primary sources backing up each point", "Repeating an opinion in all capital letters", "Insulting people who disagree", "Relying only on rumors"], correct: 0 },
        { domain: "Language & Vocabulary (L)", q: "Choose the sentence with correct subject-verb agreement:", options: ["The team of young scientists prepares its experiment carefully.", "The team of young scientists prepare their experiments every day without match.", "Each of the students have finished their book yesterday.", "Neither of the maps show the right compass."], correct: 0 }
      ],
      k2sci: [
        { domain: "Living vs. Nonliving", q: "Which of these is a LIVING thing that needs water, food, and air to grow?", options: ["An oak tree", "A granite rock", "A plastic toy truck", "A wooden pencil"], correct: 0 },
        { domain: "Weather & Seasons", q: "In which season do leaves turn red and gold and temperatures start getting cooler?", options: ["Autumn (Fall)", "Summer", "Spring", "Winter"], correct: 0 },
        { domain: "Five Senses & Plants", q: "Which part of a plant grows underground and drinks up water from the soil?", options: ["The roots", "The petals", "The clouds", "The shadow"], correct: 0 },
        { domain: "States of Matter", q: "When an ice cube sits in a warm room and turns into a puddle, it changed from a SOLID to a:", options: ["Liquid", "Rock", "Cloud", "Magnet"], correct: 0 },
        { domain: "Light, Sound & Forces", q: "If you push a toy wagon harder across the sidewalk, what happens to its motion?", options: ["It moves faster and farther", "It disappears", "It turns into water", "It stops immediately"], correct: 0 },
        { domain: "Earth, Sun & Moon", q: "What gives Earth its daylight and warmth every morning?", options: ["The Sun", "The Moon", "Streetlights", "Ocean waves"], correct: 0 }
      ],
      science: [
        { domain: "Forces & Motion", q: "A soccer ball sits motionless on the grass until a player kicks it. Which of Newton's Laws explains why an object at rest stays at rest unless acted on by an unbalanced force?", options: ["Newton's First Law (Law of Inertia)", "Newton's Third Law only", "Law of Evaporation", "Law of Reflection"], correct: 0 },
        { domain: "Forces & Motion", q: "A cyclist rides 36 miles in 3 hours at a steady pace. What is her average speed?", options: ["12 miles per hour", "39 miles per hour", "108 miles per hour", "9 miles per hour"], correct: 0 },
        { domain: "Matter & Energy", q: "When liquid water in a puddle heats up in the sunshine and turns into invisible water vapor, which phase change occurred?", options: ["Evaporation", "Condensation", "Freezing", "Precipitation"], correct: 0 },
        { domain: "Matter & Energy", q: "Which of the following is a CHEMICAL CHANGE (forming a brand-new substance)?", options: ["Iron rusting outdoors or wood burning into ash", "Cutting paper into squares", "Melting an ice cube into water", "Dissolving salt in warm water"], correct: 0 },
        { domain: "Matter & Energy", q: "According to the Law of Conservation of Mass, if you seal 100 grams of ice in a closed jar and let it melt completely, what will the liquid water weigh?", options: ["Exactly 100 grams", "50 grams", "120 grams", "0 grams"], correct: 0 },
        { domain: "Ecosystems & Earth Systems", q: "In a forest food web (Sun → Grass → Rabbit → Hawk), what role does the GRASS play?", options: ["Producer (makes food energy via photosynthesis)", "Tertiary Consumer", "Decomposer", "Carnivore"], correct: 0 },
        { domain: "Ecosystems & Earth Systems", q: "What causes the four seasons on Earth?", options: ["Earth's 23.5° axial tilt as it orbits around the Sun", "Earth moving 10 times closer to the Sun in July", "The Moon blocking the Sun in winter", "Ocean tides changing direction"], correct: 0 },
        { domain: "Forces & Motion", q: "What force slows down a rolling skateboard when it moves from smooth pavement onto thick grass?", options: ["Friction", "Gravity alone", "Buoyancy", "Static charge"], correct: 0 },
        { domain: "Matter & Energy", q: "In an electric circuit, copper wire is covered in plastic coating because:", options: ["Copper is an electrical conductor and plastic is a safe insulator", "Plastic conducts electricity faster than copper", "Copper is an insulator", "Neither carries current"], correct: 0 },
        { domain: "Molecular Biology & Ecosystems", q: "Which organelle in a eukaryotic cell releases usable ATP energy through cellular respiration?", options: ["Mitochondria", "Cell wall", "Vacuole", "Ribosome"], correct: 0 }
      ],
      bio: [
        { domain: "Cell Structure & Bioenergetics", q: "Which structural feature distinguishes a Eukaryotic cell from a Prokaryotic cell?", options: ["Eukaryotic cells contain a membrane-bound nucleus and organelles", "Prokaryotic cells have two nuclei", "Eukaryotic cells lack DNA", "Prokaryotic cells have chloroplasts and mitochondria"], correct: 0 },
        { domain: "Cell Structure & Bioenergetics", q: "Which balanced equation summarizes cellular respiration?", options: ["C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP energy", "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂", "H₂O → H₂ + O₂", "Na + Cl → NaCl"], correct: 0 },
        { domain: "DNA, Genetics & Heredity", q: "In DNA base-pairing, Adenine (A) pairs with Thymine (T), and Cytosine (C) always pairs with:", options: ["Guanine (G)", "Uracil (U)", "Adenine (A)", "Thymine (T)"], correct: 0 },
        { domain: "DNA, Genetics & Heredity", q: "In a Punnett Square crossing Tt × Tt (T = tall dominant, t = short recessive), what percentage of offspring show the recessive short phenotype (tt)?", options: ["25%", "50%", "75%", "100%"], correct: 0 },
        { domain: "DNA, Genetics & Heredity", q: "What is the main difference between Mitosis and Meiosis?", options: ["Mitosis makes 2 identical diploid body cells; Meiosis makes 4 genetically varied haploid gametes", "Mitosis creates gametes; Meiosis repairs skin cuts", "Meiosis doubles chromosome count", "They produce identical results"], correct: 0 },
        { domain: "Ecosystems & Populations", q: "In an ecological energy pyramid, roughly what percentage of energy transfers from one trophic level to the next?", options: ["About 10%", "100%", "90%", "0%"], correct: 0 }
      ],
      chem: [
        { domain: "Periodic Table & Bonding", q: "An atom's identity (which element it is on the Periodic Table) is determined by its number of:", options: ["Protons (Atomic Number)", "Neutrons only", "Valence shells only", "Free electrons"], correct: 0 },
        { domain: "Periodic Table & Bonding", q: "What type of chemical bond forms when two nonmetal atoms SHARE pairs of valence electrons (such as in H₂O)?", options: ["Covalent bond", "Ionic bond", "Metallic bond", "Nuclear bond"], correct: 0 },
        { domain: "Stoichiometry & Balancing Equations", q: "Which balanced chemical equation obeys the Law of Conservation of Mass for forming water?", options: ["2H₂ + O₂ → 2H₂O", "H₂ + O₂ → H₂O", "H₂ + 2O₂ → 2H₂O", "2H₂ + 2O₂ → H₂O"], correct: 0 },
        { domain: "Acids, Bases & Gas Laws", q: "On the pH scale (0–14), a solution with pH = 2 (like lemon juice) is classified as:", options: ["Strongly Acidic", "Neutral", "Strongly Basic (Alkaline)", "Pure distilled water"], correct: 0 },
        { domain: "Acids, Bases & Gas Laws", q: "According to Boyle's Law (P₁V₁ = P₂V₂ at constant temperature), if you compress a gas to HALF its volume, what happens to its pressure?", options: ["Its pressure doubles", "Its pressure drops in half", "Its pressure stays unchanged", "It drops to zero"], correct: 0 },
        { domain: "Stoichiometry & Balancing Equations", q: "Avogadro's number tells chemists that 1 mole of any substance contains approximately:", options: ["6.022 × 10²³ particles", "100 particles", "12 grams always", "3.14 × 10⁵ particles"], correct: 0 }
      ],
      phys: [
        { domain: "Mechanics, Vectors & Momentum", q: "Using Newton's Second Law (F = ma), what net force accelerates a 5 kg object at 4 m/s²?", options: ["20 Newtons", "9 Newtons", "1.25 Newtons", "40 Newtons"], correct: 0 },
        { domain: "Work, Power & Conservation of Energy", q: "What is the kinetic energy (KE = ½mv²) of a 2 kg ball moving at 6 m/s?", options: ["36 Joules", "12 Joules", "72 Joules", "6 Joules"], correct: 0 },
        { domain: "Electricity, Circuits & Waves", q: "According to Ohm's Law (V = IR), how much current flows through a 4-ohm resistor connected to a 12-volt battery?", options: ["3 Amps", "48 Amps", "16 Amps", "8 Amps"], correct: 0 },
        { domain: "Electricity, Circuits & Waves", q: "A wave has frequency f = 5 Hz and wavelength λ = 4 m. What is its wave speed (v = fλ)?", options: ["20 m/s", "9 m/s", "1.25 m/s", "1 m/s"], correct: 0 },
        { domain: "Mechanics, Vectors & Momentum", q: "What is the momentum (p = mv) of a 1,000 kg car traveling at 15 m/s?", options: ["15,000 kg·m/s", "1,015 kg·m/s", "66.7 kg·m/s", "150 kg·m/s"], correct: 0 },
        { domain: "Work, Power & Conservation of Energy", q: "A motor does 600 Joules of work in 10 seconds. What is its power output (P = W/t)?", options: ["60 Watts", "6,000 Watts", "610 Watts", "6 Watts"], correct: 0 }
      ],
      hist: [
        { domain: "Ancient & Classical Empires", q: "Which ancient river valley civilization developed cuneiform writing and the Code of Hammurabi?", options: ["Mesopotamia (Babylon/Sumer)", "Medieval England", "Colonial Virginia", "Industrial Japan"], correct: 0 },
        { domain: "Reformation & Global Trade", q: "How did Johannes Gutenberg's movable-type printing press (c. 1440) transform Europe and the Reformation?", options: ["It made Bibles and books affordable, rapidly spreading literacy and ideas across Europe", "It ended written books permanently", "It only printed ocean maps", "It outlawed schools"], correct: 0 },
        { domain: "Revolutions & Modern World", q: "Which major 18th-century shift replaced hand-crafted cottage production with steam-powered factories and railroads?", options: ["The Industrial Revolution", "The Bronze Age", "The Roman Pax", "Feudalism"], correct: 0 },
        { domain: "Ancient & Classical Empires", q: "Which Roman innovation carried fresh water miles across valleys into cities and public fountains?", options: ["Aqueducts", "Pyramids", "Railroads", "Telegraph wires"], correct: 0 },
        { domain: "Reformation & Global Trade", q: "What was the Magna Carta (1215) famous for establishing in Western constitutional law?", options: ["Even the king is subject to the rule of law and cannot tax or imprison arbitrarily", "Kings hold unlimited absolute power", "Parliament was abolished", "Trade was banned"], correct: 0 }
      ],
      ushist: [
        { domain: "Founding & Constitution", q: "What core principle did the Declaration of Independence (1776) proclaim regarding human rights?", options: ["All people are endowed by their Creator with unalienable rights—Life, Liberty, and the pursuit of Happiness", "Rights are temporary favors granted only by monarchs", "Only Parliament can hold elections", "Governments never need the consent of the governed"], correct: 0 },
        { domain: "Founding & Constitution", q: "How does the U.S. Constitution prevent any single branch of federal government from gaining unchecked power?", options: ["Through Separation of Powers (Legislative, Executive, Judicial) and Checks & Balances", "By merging all three branches into one office", "By eliminating state governments", "By banning written laws"], correct: 0 },
        { domain: "Founding & Constitution", q: "What are the first ten amendments to the U.S. Constitution collectively called?", options: ["The Bill of Rights", "The Magna Carta", "The Federalist Papers", "The Monroe Doctrine"], correct: 0 },
        { domain: "Expansion & Civil War", q: "Which constitutional amendment (1865) permanently abolished slavery throughout the United States?", options: ["The 13th Amendment", "The 1st Amendment", "The 10th Amendment", "The 22nd Amendment"], correct: 0 },
        { domain: "Expansion & Civil War", q: "Which 1803 land purchase under President Thomas Jefferson doubled the geographic size of the United States?", options: ["The Louisiana Purchase", "The Treaty of Paris", "The Oregon Trail Act", "The Homestead Act"], correct: 0 },
        { domain: "Modern Era & Economics", q: "What landmark 1954 Supreme Court ruling declared racial segregation in public schools unconstitutional?", options: ["Brown v. Board of Education", "Marbury v. Madison", "McCulloch v. Maryland", "Gibbons v. Ogden"], correct: 0 }
      ],
      econ: [
        { domain: "Supply, Demand & Macroeconomics", q: "When consumer demand for a product rises sharply while supply stays fixed, what typically happens to its market price?", options: ["Price rises until quantity demanded and quantity supplied reach a new equilibrium", "Price automatically drops to zero", "Supply disappears forever", "Demand has zero impact on price"], correct: 0 },
        { domain: "Personal Finance, Taxes & Investing", q: "Why does starting a compound-interest investment at age 18 produce vastly more wealth than starting at age 38?", options: ["Earnings generate their own earnings exponentially over extra decades of compounding", "Interest rates double automatically for teenagers", "Taxes never apply to anyone", "Inflation makes cash grow faster"], correct: 0 },
        { domain: "Personal Finance, Taxes & Investing", q: "What is the primary purpose of diversifying an investment portfolio across index funds, bonds, and assets?", options: ["Reducing single-company risk while capturing long-term market growth", "Guaranteeing 100% daily profit", "Avoiding all financial planning", "Putting every dollar into one speculative stock"], correct: 0 },
        { domain: "Constitutional Governance & Law", q: "In the U.S. Constitution, which branch of government has the power to levy federal taxes and pass national budgets?", options: ["The Legislative Branch (Congress — starting in the House of Representatives)", "The Supreme Court", "City mayors", "Foreign diplomats"], correct: 0 },
        { domain: "Supply, Demand & Macroeconomics", q: "What does 'Opportunity Cost' mean in economics and personal budgeting?", options: ["The value of the next-best alternative you give up when making a financial or time choice", "A free coupon", "Only the sales tax on a receipt", "The total population of a country"], correct: 0 }
      ]
    };

    let bankKey = "reading";
    if (subj === "read") bankKey = g <= 2 ? "k2read" : "reading";
    else if (subj === "sci") bankKey = g <= 2 ? "k2sci" : "science";
    else if (banks[subj]) bankKey = subj;

    const pool = banks[bankKey] || banks.reading;
    const qs = [];
    for (let i = 0; i < count; i++) {
      const base = pool[i % pool.length];
      qs.push(shuffleOpts(base, i * 19 + g * 11 + 7));
    }
    return qs;
  }

  let activeExamTimer = null;
  let selectedCenterGradeFilter = null; // null = active student's grade, "all" = all K–12, or 0..12

  function renderExamRunner(examMeta, student) {
    const qCount = examMeta.qCount || (examMeta.grade <= 2 ? 20 : 45);
    const questions = examMeta.subject === "math" ? buildMathEogQuestions(examMeta) : buildSubjectEogQuestions(examMeta);
    window.__ACTIVE_EOG_EXAM = { examMeta, questions, startedAt: Date.now() };

    if (activeExamTimer) clearInterval(activeExamTimer);
    let secsLeft = examMeta.timeMins * 60;

    const modalTitle = document.getElementById("modalTitle");
    const modalBody = document.getElementById("modalBodyContent");
    if (modalTitle) modalTitle.textContent = `🏛️ ${examMeta.label}`;
    if (!modalBody) return;

    modalBody.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem; padding:0.75rem 0.95rem; background:#0F1E36; color:#FFFFFF; border-radius:8px; margin-bottom:0.9rem;">
        <div>
          <span class="badge badge-gold">${examMeta.type.toUpperCase()}</span>
          <strong style="margin-left:0.45rem;">${student ? student.name : "Scholar"} · ${qCount} State-Style Questions</strong>
          <div style="font-size:0.76rem; color:#CBD5E1; margin-top:0.15rem;">Domains: ${examMeta.domains.join(" · ")}</div>
        </div>
        <div style="text-align:right;">
          <div id="eogTimerClock" style="font-family:var(--font-mono); font-size:1.05rem; font-weight:700; color:var(--gold-400);">⏱ ${examMeta.timeMins}:00</div>
          <button type="button" class="btn btn-sm" style="margin-top:0.25rem; background:#FFFFFF; color:#0A192F; border:1.5px solid #C59B27; font-size:0.74rem; font-weight:700;" onclick="window.openEogEocExamCenter()">← All EOG/EOC Exams</button>
        </div>
      </div>

      <div id="eogQuestionsWrap" class="assignments-stack" style="gap:0.75rem; margin-bottom:1rem;">
        ${questions
          .map(
            (qItem, idx) => `
          <div class="quiz-q-card" id="eogCard_${idx}" style="background:var(--bg-ivory); border:1px solid var(--border-subtle);">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.35rem; margin-bottom:0.4rem;">
              <span class="mono-label" style="color:var(--navy-700);">Q${idx + 1} OF ${qCount} · ${qItem.domain.toUpperCase()}${qItem.section ? ` · ${qItem.section.toUpperCase()}` : ""}</span>
              <span id="eogQBadge_${idx}" style="font-size:0.76rem; font-weight:700;"></span>
            </div>
            ${
              qItem.passage
                ? `<div style="background:#FFFFFF; border-left:3px solid var(--gold-500); padding:0.6rem 0.8rem; border-radius:6px; font-size:0.84rem; line-height:1.58; margin-bottom:0.55rem; color:var(--navy-900);">${qItem.passage}</div>`
                : ""
            }
            <div style="font-weight:700; color:var(--navy-900); margin-bottom:0.5rem;">${qItem.q}</div>
            <div class="quiz-options">
              ${qItem.options
                .map(
                  (opt, oIdx) => `
                <label class="quiz-option-label">
                  <input type="radio" name="eog_q_${idx}" value="${oIdx}" />
                  <span>${opt}</span>
                </label>
              `
                )
                .join("")}
            </div>
          </div>
        `
          )
          .join("")}
      </div>

      <div id="eogScoreReportBox" class="hidden" style="margin-bottom:1rem;"></div>

      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.55rem; padding-top:0.75rem; border-top:1px solid var(--border-subtle);">
        <span style="font-size:0.78rem; color:var(--text-secondary);">Scored on official Public-Sector Achievement Levels (Not Proficient · Level 3 · Level 4 · Level 5)</span>
        <button type="button" class="btn btn-emerald" id="submitEogEocExamBtn">🏛️ Grade Official EOG / EOC Exam</button>
      </div>
    `;

    activeExamTimer = setInterval(() => {
      secsLeft = Math.max(0, secsLeft - 1);
      const el = document.getElementById("eogTimerClock");
      if (!el) {
        clearInterval(activeExamTimer);
        return;
      }
      const m = String(Math.floor(secsLeft / 60)).padStart(2, "0");
      const s = String(secsLeft % 60).padStart(2, "0");
      el.textContent = `⏱ ${m}:${s}`;
    }, 1000);
  }

  window.openEogEocExamCenter = function (studentObj, gradeFilterOverride) {
    if (activeExamTimer) clearInterval(activeExamTimer);
    const stu = studentObj || (typeof window.getAcademyActiveStudent === "function" ? window.getAcademyActiveStudent() : null);
    const stuGrade = stu ? Number(stu.grade) : 5;

    if (gradeFilterOverride !== undefined) {
      selectedCenterGradeFilter = gradeFilterOverride;
    } else {
      selectedCenterGradeFilter = stuGrade;
    }

    const modalTitle = document.getElementById("modalTitle");
    const modalBody = document.getElementById("modalBodyContent");
    const backdrop = document.getElementById("appModalBackdrop");
    if (!modalTitle || !modalBody || !backdrop) return;

    const activeFilter = selectedCenterGradeFilter;
    const isAll = activeFilter === "all";
    const activeExams = isAll ? EXAM_CATALOG : EXAM_CATALOG.filter((ex) => ex.grade === Number(activeFilter));
    const filterGradeLabel = isAll
      ? "ALL GRADES K–12 (42 INDIVIDUAL FINAL EXAMS)"
      : Number(activeFilter) === 0
        ? "KINDERGARTEN EOG FINAL EXAMS"
        : `GRADE ${activeFilter} ${Number(activeFilter) >= 9 ? "EOC" : "EOG"} FINAL EXAMS`;

    const gradePills = [
      { val: "all", lbl: "All K–12 (42)" },
      { val: 0, lbl: "K" },
      { val: 1, lbl: "1st" },
      { val: 2, lbl: "2nd" },
      { val: 3, lbl: "3rd" },
      { val: 4, lbl: "4th" },
      { val: 5, lbl: "5th" },
      { val: 6, lbl: "6th" },
      { val: 7, lbl: "7th" },
      { val: 8, lbl: "8th" },
      { val: 9, lbl: "9th" },
      { val: 10, lbl: "10th" },
      { val: 11, lbl: "11th" },
      { val: 12, lbl: "12th" }
    ];

    modalTitle.textContent = "🏛️ Public-Sector Aligned EOG & EOC Final Exam Center (Every Grade K–12)";
    modalBody.innerHTML = `
      <div class="quiz-q-card" style="background:linear-gradient(135deg,#0F1E36,#1A3359); color:#FFFFFF; border:2px solid var(--gold-500); margin-bottom:0.9rem;">
        <span class="badge badge-gold">EVERY SINGLE GRADE K–12 · 42 INDIVIDUAL EOG &amp; EOC BENCHMARK EXAMS</span>
        <h3 style="color:#FFFFFF; margin:0.35rem 0 0.25rem;">Dedicated Grade-Level EOG &amp; EOC Final Exams</h3>
        <p style="font-size:0.84rem; color:#E2E8F0; margin:0;">
          Every single grade from <strong>Kindergarten through Grade 12</strong> has its own dedicated Reading/English, Mathematics (Calculator-Inactive &amp; Active), Science, and High School Subject EOC exams—complete with countdown timer and official <strong>Achievement Levels 1–5</strong> logged straight to your Parent Portal.
        </p>
      </div>

      <!-- Grade Selector Bar -->
      <div style="margin-bottom:0.95rem;">
        <div class="mono-label" style="color:var(--navy-800); margin-bottom:0.4rem;">SELECT GRADE LEVEL TO VIEW ITS DEDICATED EOG / EOC TESTS:</div>
        <div style="display:flex; flex-wrap:wrap; gap:0.35rem;">
          ${gradePills
            .map((p) => {
              const isSelected = String(activeFilter) === String(p.val);
              const isMyGrade = stu && String(stuGrade) === String(p.val);
              return `
                <button
                  type="button"
                  data-eog-grade-filter="${p.val}"
                  style="padding:0.35rem 0.68rem; border-radius:999px; font-size:0.78rem; font-weight:700; cursor:pointer; border:1.5px solid ${
                    isSelected ? "#0A192F" : isMyGrade ? "#10B981" : "#CBD5E1"
                  }; background:${
                    isSelected ? "#0A192F" : isMyGrade ? "#ECFDF5" : "#FFFFFF"
                  }; color:${
                    isSelected ? "#FDE68A" : "#0A192F"
                  };"
                >
                  ${p.lbl}${isMyGrade ? " ★" : ""}
                </button>
              `;
            })
            .join("")}
        </div>
      </div>

      <div>
        <div class="mono-label" style="color:var(--emerald-700); margin-bottom:0.5rem;">
          ${filterGradeLabel} ${stu && !isAll && Number(activeFilter) === stuGrade ? `· RECOMMENDED FOR ${stu.name.toUpperCase()}` : ""}
        </div>
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(255px, 1fr)); gap:0.65rem;">
          ${activeExams
            .map(
              (ex) => `
            <div class="quiz-q-card" style="background:${ex.grade === stuGrade ? "#F4FAF7" : "var(--bg-ivory)"}; border:1.5px solid ${ex.grade === stuGrade ? "var(--emerald-600)" : "var(--border-subtle)"}; display:flex; flex-direction:column; justify-content:space-between; gap:0.5rem;">
              <div>
                <div style="display:flex; justify-content:space-between; align-items:center; gap:0.35rem; flex-wrap:wrap;">
                  <span class="badge ${ex.grade >= 9 ? "badge-gold" : "badge-emerald"}">${ex.type}</span>
                  <span class="mono-label" style="font-size:0.7rem;">${ex.qCount} Qs · ${ex.timeMins} min</span>
                </div>
                <h4 style="margin:0.32rem 0 0.2rem; color:var(--navy-900); font-size:0.95rem;">${ex.label}</h4>
                <div style="font-size:0.76rem; color:var(--text-secondary);">Domains: ${ex.domains.join(" · ")}</div>
              </div>
              <button type="button" class="btn btn-primary btn-sm" data-launch-eog-exam="${ex.id}">Launch Final Exam →</button>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    `;
    backdrop.classList.remove("hidden");
  };

  document.addEventListener("click", (e) => {
    const gradeFilterBtn = e.target.closest("[data-eog-grade-filter]");
    if (gradeFilterBtn) {
      const val = gradeFilterBtn.getAttribute("data-eog-grade-filter");
      window.openEogEocExamCenter(null, val === "all" ? "all" : Number(val));
      return;
    }

    const launchBtn = e.target.closest("[data-launch-eog-exam]");
    if (launchBtn) {
      const exId = launchBtn.getAttribute("data-launch-eog-exam");
      const meta = EXAM_CATALOG.find((x) => x.id === exId);
      const stu = typeof window.getAcademyActiveStudent === "function" ? window.getAcademyActiveStudent() : null;
      if (meta) renderExamRunner(meta, stu);
      return;
    }

    if (e.target.closest("#submitEogEocExamBtn")) {
      const active = window.__ACTIVE_EOG_EXAM;
      if (!active) return;
      if (activeExamTimer) clearInterval(activeExamTimer);

      let correct = 0;
      const domainStats = {};
      active.questions.forEach((qItem, idx) => {
        if (!domainStats[qItem.domain]) domainStats[qItem.domain] = { right: 0, total: 0 };
        domainStats[qItem.domain].total++;
        const sel = document.querySelector(`input[name="eog_q_${idx}"]:checked`);
        const chosen = sel ? parseInt(sel.value, 10) : -1;
        const card = document.getElementById(`eogCard_${idx}`);
        const badge = document.getElementById(`eogQBadge_${idx}`);
        if (chosen === qItem.correct) {
          correct++;
          domainStats[qItem.domain].right++;
          if (card) card.style.borderColor = "var(--emerald-600)";
          if (badge) {
            badge.style.color = "var(--emerald-700)";
            badge.textContent = "✓ Correct";
          }
        } else {
          if (card) card.style.borderColor = "#DC2626";
          if (badge) {
            badge.style.color = "#B91C1C";
            badge.textContent = "✗ Review";
          }
        }
      });

      const total = active.questions.length;
      const pct = Math.round((correct / total) * 100);
      const level =
        pct >= 92
          ? { label: "Level 5 — Superior Command (Exceeds Grade-Level Standards)", cls: "badge-emerald", bg: "#F4FAF7", border: "var(--emerald-600)" }
          : pct >= 80
            ? { label: "Level 4 — Solid Command (College & Career Ready)", cls: "badge-emerald", bg: "#F4FAF7", border: "var(--emerald-600)" }
            : pct >= 70
              ? { label: "Level 3 — Sufficient Command (Grade-Level Proficient)", cls: "badge-gold", bg: "#FFFDF6", border: "var(--gold-500)" }
              : { label: "Not Proficient (<70%) — Targeted Domain Review Recommended", cls: "badge-amber", bg: "#FEF2F2", border: "#DC2626" };

      const domainRows = Object.entries(domainStats)
        .map(([dom, st]) => {
          const dPct = Math.round((st.right / st.total) * 100);
          return `<div style="display:flex; justify-content:space-between; font-size:0.84rem; padding:0.25rem 0; border-bottom:1px solid rgba(15,30,54,0.08);"><span>${dom}</span><strong>${st.right}/${st.total} (${dPct}%)</strong></div>`;
        })
        .join("");

      const box = document.getElementById("eogScoreReportBox");
      if (box) {
        box.classList.remove("hidden");
        box.innerHTML = `
          <div class="quiz-q-card" style="background:${level.bg}; border:2px solid ${level.border};">
            <span class="badge ${level.cls}">${level.label}</span>
            <h3 style="margin:0.35rem 0 0.2rem; color:var(--navy-900);">Official Benchmark Score: ${correct} / ${total} (${pct}%)</h3>
            <p style="font-size:0.83rem; color:var(--text-secondary); margin:0 0 0.65rem;">${active.examMeta.label} · Logged to Parent Portal &amp; Official Academic Record.</p>
            <div style="background:#FFFFFF; padding:0.65rem 0.85rem; border-radius:8px; border:1px solid var(--border-subtle);">
              <div class="mono-label" style="margin-bottom:0.3rem;">DOMAIN-BY-DOMAIN PERFORMANCE REPORT</div>
              ${domainRows}
            </div>
          </div>
        `;
        box.scrollIntoView({ behavior: "smooth", block: "center" });
      }

      if (typeof window.recordAcademyEogResult === "function") {
        window.recordAcademyEogResult(active.examMeta.label, correct, total, pct, level.label);
      }
    }
  });
})();
