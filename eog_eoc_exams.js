// Christ Infinity Academy — Public-Sector Aligned End-of-Grade (EOG) & End-of-Course (EOC) Final Exam Suite (Grades K–12)
// Modeled on NCDPI / State Standard Course of Study Blueprints (Reading, Math Calc-Inactive/Active, Science 5 & 8, High School EOCs)

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

  const EXAM_CATALOG = [
    { id: "eog-k2-read", gradeMin: 0, gradeMax: 2, label: "Grades K–2 Reading & Phonics Readiness Final", type: "EOG Readiness", timeMins: 45, domains: ["Phonics & Decoding", "Story Comprehension", "Vocabulary & Sentences"] },
    { id: "eog-k2-math", gradeMin: 0, gradeMax: 2, label: "Grades K–2 Math Foundations Readiness Final", type: "EOG Readiness", timeMins: 45, domains: ["Addition & Subtraction", "Place Value", "Time, Money & Shapes"] },
    { id: "eog-35-read", gradeMin: 3, gradeMax: 5, label: "Grades 3–5 EOG Reading Comprehension Final", type: "State EOG Benchmark", timeMins: 90, domains: ["Reading Literature (RL)", "Reading Informational Text (RI)", "Language & Vocabulary (L)"] },
    { id: "eog-35-math", gradeMin: 3, gradeMax: 5, label: "Grades 3–5 EOG Mathematics Final (Calc-Inactive & Active)", type: "State EOG Benchmark", timeMins: 90, domains: ["Fractions (~39%)", "Base Ten & Operations", "Measurement, Volume & Geometry"] },
    { id: "eog-5-sci", gradeMin: 3, gradeMax: 5, label: "Grade 5 EOG Science Comprehensive Final", type: "State EOG Benchmark", timeMins: 90, domains: ["Forces & Motion", "Matter & Energy", "Ecosystems & Earth Systems"] },
    { id: "eog-68-read", gradeMin: 6, gradeMax: 8, label: "Grades 6–8 EOG Reading & Text Evidence Final", type: "State EOG Benchmark", timeMins: 120, domains: ["Reading Literature (RL)", "Informational Analysis (RI)", "Language & Argument (L)"] },
    { id: "eog-68-math", gradeMin: 6, gradeMax: 8, label: "Grades 6–8 EOG Mathematics Final (Calc-Inactive & Active)", type: "State EOG Benchmark", timeMins: 120, domains: ["Ratios & Number System", "Expressions, Equations & Functions", "Geometry & Statistics"] },
    { id: "eog-8-sci", gradeMin: 6, gradeMax: 8, label: "Grade 8 EOG Science Comprehensive Final", type: "State EOG Benchmark", timeMins: 120, domains: ["Matter & Chemistry", "Earth Systems & Hydrosphere", "Molecular Biology & Ecosystems"] },
    { id: "eoc-math1", gradeMin: 8, gradeMax: 12, label: "High School Math 1 (Algebra I) EOC Final", type: "State EOC Benchmark", timeMins: 150, domains: ["Linear & Exponential Functions", "Quadratic Systems", "Data & Statistical Modeling"] },
    { id: "eoc-eng2", gradeMin: 9, gradeMax: 12, label: "High School English II EOC Final", type: "State EOC Benchmark", timeMins: 150, domains: ["Literary Analysis", "Informational & Rhetorical Evidence", "Conventions & Editing"] },
    { id: "eoc-bio", gradeMin: 9, gradeMax: 12, label: "High School Biology EOC Final", type: "State EOC Benchmark", timeMins: 150, domains: ["Cell Structure & Energy", "DNA, Genetics & Heredity", "Ecosystems & Populations"] },
    { id: "eoc-math3", gradeMin: 10, gradeMax: 12, label: "High School Math 3 (Algebra II / Pre-Calc) EOC Final", type: "State EOC Benchmark", timeMins: 150, domains: ["Polynomial & Rational Functions", "Logarithms & Trigonometry", "Geometric Proof & Modeling"] },
    { id: "eoc-ushist", gradeMin: 9, gradeMax: 12, label: "High School U.S. History & Constitutional Civics EOC Final", type: "State EOC Benchmark", timeMins: 120, domains: ["Founding & Constitution", "Expansion & Civil War", "Modern Era & Economics"] }
  ];

  function buildMathEogQuestions(examId, count) {
    const qs = [];
    for (let i = 0; i < count; i++) {
      const calcSection = i < Math.floor(count / 2) ? "Part 1 · Calculator Inactive" : "Part 2 · Calculator Active";
      let qObj;

      if (examId === "eog-k2-math") {
        const t = i % 5;
        if (t === 0) {
          const a = 7 + (i % 11), b = 5 + (i % 9);
          qObj = { domain: "Addition & Subtraction", section: calcSection, q: `What is ${a} + ${b}?`, options: [String(a + b), String(a + b + 2), String(a + b - 1), String(a + b + 4)], correct: 0 };
        } else if (t === 1) {
          const a = 18 + (i % 12), b = 6 + (i % 7);
          qObj = { domain: "Addition & Subtraction", section: calcSection, q: `Liam had ${a} stickers and gave ${b} to his friend. How many stickers does Liam have left?`, options: [String(a - b), String(a + b), String(a - b + 2), String(a - b - 1)], correct: 0 };
        } else if (t === 2) {
          const tens = 2 + (i % 7), ones = 1 + (i % 8);
          qObj = { domain: "Place Value", section: calcSection, q: `Which number is equal to ${tens} tens and ${ones} ones?`, options: [String(tens * 10 + ones), String(ones * 10 + tens), String(tens + ones), String(tens * 100 + ones)], correct: 0 };
        } else if (t === 3) {
          const qtr = 1 + (i % 3), dime = 1 + (i % 4);
          const total = qtr * 25 + dime * 10;
          qObj = { domain: "Time, Money & Shapes", section: calcSection, q: `How much is ${qtr} quarter(s) and ${dime} dime(s)?`, options: [`${total}¢`, `${total + 10}¢`, `${total - 5}¢`, `${qtr * 10 + dime * 5}¢`], correct: 0 };
        } else {
          const sides = [3, 4, 5, 6][i % 4];
          const names = ["Triangle", "Rectangle", "Pentagon", "Hexagon"];
          qObj = { domain: "Time, Money & Shapes", section: calcSection, q: `Which flat shape always has exactly ${sides} straight sides?`, options: [names[i % 4], names[(i + 1) % 4], names[(i + 2) % 4], "Circle"], correct: 0 };
        }
      } else if (examId === "eog-35-math") {
        // Matches NC Grade 5 EOG heavy weight on Fractions (~39%), Base Ten, Volume & Multi-Step Operations!
        const t = i % 6;
        if (t === 0 || t === 1) {
          const den = [6, 8, 10, 12][i % 4];
          const n1 = 1 + (i % (den / 2 - 1));
          const n2 = 1 + ((i + 2) % (den / 2));
          if (t === 0) {
            qObj = { domain: "Fractions", section: calcSection, q: `A baker uses ${n1}/${den} cup of brown sugar and ${n2}/${den} cup of white sugar. How much sugar is used in total?`, options: [`${n1 + n2}/${den} cup`, `${n1 + n2}/${den * 2} cup`, `${n1 * n2}/${den} cup`, `${Math.abs(n1 - n2)}/${den} cup`], correct: 0 };
          } else {
            const mult = 2 + (i % 4);
            qObj = { domain: "Fractions", section: calcSection, q: `Which fraction is equivalent to ${n1}/${den}?`, options: [`${n1 * mult}/${den * mult}`, `${n1 + mult}/${den + mult}`, `${n1 * mult}/${den}`, `${n1}/${den * mult}`], correct: 0 };
          }
        } else if (t === 2) {
          const a = 24 + (i % 15), b = 6 + (i % 7);
          qObj = { domain: "Base Ten & Operations", section: calcSection, q: `Multiply: ${a} × ${b} = ?`, options: [String(a * b), String(a * b + a), String(a * b - b), String((a + 1) * b)], correct: 0 };
        } else if (t === 3) {
          const div = 4 + (i % 6), quot = 12 + (i % 15);
          qObj = { domain: "Base Ten & Operations", section: calcSection, q: `A school packs ${div * quot} books equally into ${div} boxes. How many books go in each box?`, options: [String(quot), String(quot + 3), String(quot - 2), String(div * 2)], correct: 0 };
        } else if (t === 4) {
          const l = 5 + (i % 6), w = 4 + (i % 4), h = 3 + (i % 3);
          qObj = { domain: "Measurement, Volume & Geometry", section: calcSection, q: `Find the VOLUME of a rectangular storage box measuring ${l} ft × ${w} ft × ${h} ft:`, options: [`${l * w * h} cubic ft`, `${l + w + h} cubic ft`, `${l * w} cubic ft`, `${2 * (l + w + h)} cubic ft`], correct: 0 };
        } else {
          const d1 = (25 + i * 3) / 10, d2 = (14 + i * 2) / 10;
          qObj = { domain: "Base Ten & Operations", section: calcSection, q: `A runner jogs ${d1.toFixed(1)} miles on Monday and ${d2.toFixed(1)} miles on Tuesday. How many miles did she jog altogether?`, options: [`${(d1 + d2).toFixed(1)} miles`, `${(d1 + d2 + 0.3).toFixed(1)} miles`, `${(d1 - d2).toFixed(1)} miles`, `${(d1 + d2 + 1.0).toFixed(1)} miles`], correct: 0 };
        }
      } else if (examId === "eog-68-math") {
        const t = i % 6;
        if (t === 0) {
          const pct = [15, 20, 25, 30, 40][i % 5];
          const base = (4 + (i % 6)) * 20;
          const ans = (base * pct) / 100;
          qObj = { domain: "Ratios & Number System", section: calcSection, q: `A backpack regularly costs $${base} and is on sale for ${pct}% off. How much money is saved?`, options: [`$${ans}`, `$${base - ans}`, `$${ans + 10}`, `$${pct}`], correct: 0 };
        } else if (t === 1) {
          const a = 3 + (i % 5), x = 2 + (i % 8), b = 5 + (i % 7);
          qObj = { domain: "Expressions, Equations & Functions", section: calcSection, q: `Solve for x: ${a}x + ${b} = ${a * x + b}`, options: [String(x), String(x + 2), String(a * x), String(x - 1)], correct: 0 };
        } else if (t === 2) {
          const m = 2 + (i % 4), x1 = 1 + (i % 3), y1 = 4 + (i % 5), dx = 3;
          qObj = { domain: "Expressions, Equations & Functions", section: calcSection, q: `What is the slope of the linear function passing through (${x1}, ${y1}) and (${x1 + dx}, ${y1 + m * dx})?`, options: [String(m), String(m * dx), `1/${m}`, String(m + 2)], correct: 0 };
        } else if (t === 3) {
          const triples = [[3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 15, 17]];
          const [a, b, c] = triples[i % triples.length];
          qObj = { domain: "Geometry & Statistics", section: calcSection, q: `A right triangle has legs ${a} m and ${b} m. What is the length of the hypotenuse?`, options: [`${c} m`, `${a + b} m`, `${c * c} m`, `${b - a} m`], correct: 0 };
        } else if (t === 4) {
          const n1 = 80 + (i % 5) * 2, n2 = 86 + (i % 4) * 2, n3 = 92;
          const avg = Math.round((n1 + n2 + n3) / 3);
          const adjN3 = avg * 3 - n1 - n2;
          qObj = { domain: "Geometry & Statistics", section: calcSection, q: `Find the mean (average) of these three quiz scores: ${n1}, ${n2}, and ${adjN3}.`, options: [String(avg), String(avg + 3), String(avg - 2), String(n2)], correct: 0 };
        } else {
          const neg = -(6 + (i % 9)), pos = 11 + (i % 10);
          qObj = { domain: "Ratios & Number System", section: calcSection, q: `Evaluate: ${neg} + ${pos} = ?`, options: [String(neg + pos), String(-(neg + pos)), String(Math.abs(neg) + pos), String(neg - pos)], correct: 0 };
        }
      } else if (examId === "eoc-math1") {
        const t = i % 5;
        if (t === 0) {
          const m = 3 + (i % 5), b = 4 + (i % 7), x = 5 + (i % 4);
          qObj = { domain: "Linear & Exponential Functions", section: calcSection, q: `A gym charges a $${b} signup fee plus $${m} per class: C(x) = ${m}x + ${b}. What is the total cost for ${x} classes?`, options: [`$${m * x + b}`, `$${(m + b) * x}`, `$${m * x}`, `$${m * x + b + m}`], correct: 0 };
        } else if (t === 1) {
          const r1 = 2 + (i % 6), r2 = 3 + (i % 5);
          qObj = { domain: "Quadratic Systems", section: calcSection, q: `What are the zeros (x-intercepts) of f(x) = (x − ${r1})(x + ${r2})?`, options: [`x = ${r1} and x = -${r2}`, `x = -${r1} and x = ${r2}`, `x = ${r1 + r2} only`, `x = ${r1 * r2} only`], correct: 0 };
        } else if (t === 2) {
          const init = 100 * (1 + (i % 4)), yrs = 2 + (i % 3);
          const ans = init * Math.pow(2, yrs);
          qObj = { domain: "Linear & Exponential Functions", section: calcSection, q: `A bacteria colony starts with ${init} cells and doubles every hour: P(t) = ${init}·2^t. How many cells exist after ${yrs} hours?`, options: [String(ans), String(init * 2 * yrs), String(init + 2 * yrs), String(ans / 2)], correct: 0 };
        } else if (t === 3) {
          const x = 3 + (i % 6), y = 2 + (i % 5);
          qObj = { domain: "Quadratic Systems", section: calcSection, q: `Solve the system: x + y = ${x + y} and x − y = ${x - y}. What is the value of x?`, options: [String(x), String(y), String(x + y), String(x * 2)], correct: 0 };
        } else {
          const x = 2 + (i % 7);
          qObj = { domain: "Data & Statistical Modeling", section: calcSection, q: `A line of best fit is y = 4x + 10. What y-value does the model predict when x = ${x}?`, options: [String(4 * x + 10), String(4 * (x + 10)), String(4 + x + 10), String(4 * x - 10)], correct: 0 };
        }
      } else {
        // Math 3 EOC (Polynomials, Logs, Trig, Geometry Modeling)
        const t = i % 5;
        if (t === 0) {
          const p = 2 + (i % 6), val = Math.pow(2, p);
          qObj = { domain: "Logarithms & Trigonometry", section: calcSection, q: `Solve for x: log₂(${val}) = x`, options: [String(p), String(val / 2), String(p + 1), String(p * 2)], correct: 0 };
        } else if (t === 1) {
          const r = 4 + (i % 6);
          qObj = { domain: "Geometric Proof & Modeling", section: calcSection, q: `What is the exact area of a circle whose equation is x² + y² = ${r * r}?`, options: [`${r * r}π`, `${r}π`, `${2 * r}π`, `${r * r * 2}π`], correct: 0 };
        } else if (t === 2) {
          const deg = 20 + (i % 60);
          qObj = { domain: "Logarithms & Trigonometry", section: calcSection, q: `For θ = ${deg}°, simplify sin²(θ) + cos²(θ):`, options: ["1", "0", String(deg), "2"], correct: 0 };
        } else if (t === 3) {
          const a = 2 + (i % 4), x = 2;
          const ans = a * Math.pow(x, 3) - 5;
          qObj = { domain: "Polynomial & Rational Functions", section: calcSection, q: `Evaluate the polynomial P(x) = ${a}x³ − 5 at x = 2:`, options: [String(ans), String(a * 6 - 5), String(ans + 5), String(a * 8 + 5)], correct: 0 };
        } else {
          const n = 6 + (i % 5);
          qObj = { domain: "Geometric Proof & Modeling", section: calcSection, q: `Find the sum of interior angles of a regular ${n}-gon:`, options: [`${(n - 2) * 180}°`, `${n * 180}°`, "360°", `${(n - 1) * 180}°`], correct: 0 };
        }
      }
      qs.push(shuffleOpts(qObj, i * 13 + count));
    }
    return qs;
  }

  function buildSubjectEogQuestions(examId, count) {
    const banks = {
      reading: [
        {
          domain: "Reading Informational Text (RI)",
          passage: "PASSAGE A: Honeybees communicate the exact location of flowers using a figure-eight movement called the 'waggle dance.' The angle of the dance tells hive-mates which direction to fly relative to the Sun, while the duration of the waggle signals how far away the nectar is.",
          q: "According to Passage A, what does the DURATION (length of time) of a honeybee's waggle dance communicate?",
          options: ["How far away the flowers are from the hive", "What color the petals are", "How cold the weather is outside", "Which predator is nearby"],
          correct: 0
        },
        {
          domain: "Reading Informational Text (RI)",
          q: "In Passage A, what is the author's primary purpose?",
          options: ["To explain how honeybees share precise navigation clues with their hive", "To persuade readers to avoid gardens", "To tell a fictional fable about a talking bee", "To compare bees with butterflies"],
          correct: 0
        },
        {
          domain: "Reading Literature (RL)",
          passage: "PASSAGE B: Maya stared at the steep wooden bridge swaying gently above the creek. Her younger brother squeezed her hand nervously. Taking a slow breath, Maya stepped onto the first sturdy plank and smiled back. 'One steady board at a time, Noah—I'm right in front of you.'",
          q: "Which character trait does Maya demonstrate most clearly in Passage B?",
          options: ["Courage and reassuring leadership despite feeling cautious", "Impatience with her younger brother", "Carelessness about safety", "Refusal to cross the creek"],
          correct: 0
        },
        {
          domain: "Reading Literature (RL)",
          q: "Which detail from Passage B provides the BEST text evidence that Maya stays calm to help Noah?",
          options: ["'Taking a slow breath, Maya stepped onto the first sturdy plank and smiled back.'", "'The wooden bridge swayed gently above the creek.'", "'Maya stared at the bridge.'", "'The creek flowed under the trees.'"],
          correct: 0
        },
        {
          domain: "Language & Vocabulary (L)",
          q: "In the sentence 'The explorers had to CONSERVE their remaining water during the desert crossing,' what does CONSERVE most nearly mean?",
          options: ["Use carefully so it lasts longer", "Pour out rapidly", "Boil over a fire", "Trade away for maps"],
          correct: 0
        },
        {
          domain: "Language & Vocabulary (L)",
          q: "Choose the sentence with 100% correct punctuation and capitalization:",
          options: ["\"Let's review our science notes,\" said Elena, \"before Friday's unit test.\"", "\"Lets review our science notes\" said elena \"before Fridays unit test.\"", "Let's review our science notes, said Elena before Friday's unit test.", "\"Let's review our science notes, said Elena.\""],
          correct: 0
        },
        {
          domain: "Reading Informational Text (RI)",
          q: "What is the best definition of a text's CENTRAL IDEA (Main Idea)?",
          options: ["The most important overall message that all the supporting details point toward", "The very last word in the paragraph", "A minor fun fact mentioned once", "The author's birthday"],
          correct: 0
        },
        {
          domain: "Reading Literature (RL)",
          q: "In a story, what is the difference between a story's SETTING and its THEME?",
          options: ["Setting is when and where the story takes place; Theme is the deeper life lesson or message", "Setting is the moral; Theme is the map location", "They mean the exact same thing", "Theme is only the main character's name"],
          correct: 0
        },
        {
          domain: "Language & Vocabulary (L)",
          q: "What does the Greek/Latin root 'tele-' (as in telescope, telephone, telegraph) mean?",
          options: ["Far away / at a distance", "Tiny / microscopic", "Water / ocean", "Fast / running"],
          correct: 0
        },
        {
          domain: "Language & Vocabulary (L)",
          q: "Which sentence uses a METAPHOR (direct comparison without 'like' or 'as')?",
          options: ["The library was a treasure chest of ancient wisdom.", "The wind howled like a hungry wolf.", "The river was as clear as glass.", "The runners sprinted quickly down the lane."],
          correct: 0
        },
        {
          domain: "Reading Informational Text (RI)",
          q: "When evaluating an author's argument in an editorial or essay, what makes a claim MOST trustworthy?",
          options: ["Specific facts, verified data, and credible primary sources backing up each point", "Repeating an opinion in all capital letters", "Insulting people who disagree", "Relying only on rumors"],
          correct: 0
        },
        {
          domain: "Language & Vocabulary (L)",
          q: "Choose the sentence with correct subject-verb agreement:",
          options: ["The team of young scientists prepares its experiment carefully.", "The team of young scientists prepare their experiments every day without subject match.", "Each of the students have finished their book yesterday.", "Neither of the maps show the right compass."],
          correct: 0
        },
        {
          domain: "Reading Literature (RL)",
          q: "When a narrator uses 'I', 'me', and 'my' to tell the story from their own eyes, which point of view is that?",
          options: ["First-Person Point of View", "Third-Person Omniscient", "Second-Person Instructional", "Historical Biography"],
          correct: 0
        },
        {
          domain: "Reading Informational Text (RI)",
          q: "Why do informational articles include headings, diagrams, and captions?",
          options: ["To organize complex ideas clearly and help readers locate and visualize key evidence", "To fill empty white space randomly", "To hide the main point", "Because paragraphs aren't allowed"],
          correct: 0
        },
        {
          domain: "Language & Vocabulary (L)",
          q: "What does the prefix 'pre-' in words like 'predict', 'preview', and 'prehistoric' mean?",
          options: ["Before", "After", "Against", "Underneath"],
          correct: 0
        }
      ],
      science: [
        { domain: "Forces & Motion", q: "A soccer ball sits motionless on the grass until a player kicks it. Which of Newton's Laws explains why an object at rest stays at rest unless acted on by an unbalanced force?", options: ["Newton's First Law (Law of Inertia)", "Newton's Third Law only", "Law of Evaporation", "Law of Reflection"], correct: 0 },
        { domain: "Forces & Motion", q: "A cyclist rides 36 miles in 3 hours at a steady pace. What is her average speed?", options: ["12 miles per hour", "39 miles per hour", "108 miles per hour", "9 miles per hour"], correct: 0 },
        { domain: "Matter & Energy", q: "When liquid water in a puddle heats up in the sunshine and turns into invisible water vapor rising into the sky, which phase change occurred?", options: ["Evaporation", "Condensation", "Freezing", "Precipitation"], correct: 0 },
        { domain: "Matter & Energy", q: "Which of the following is a CHEMICAL CHANGE (forming a brand-new substance)?", options: ["Iron rusting outdoors or wood burning into ash", "Cutting paper into squares", "Melting an ice cube into water", "Dissolving salt in warm water"], correct: 0 },
        { domain: "Matter & Energy", q: "According to the Law of Conservation of Mass, if you seal 100 grams of ice in a closed jar and let it melt completely, what will the liquid water weigh?", options: ["Exactly 100 grams", "50 grams", "120 grams", "0 grams"], correct: 0 },
        { domain: "Ecosystems & Earth Systems", q: "In a forest food web (Sun → Grass → Rabbit → Hawk), what role does the GRASS play?", options: ["Producer (makes food energy via photosynthesis)", "Tertiary Consumer", "Decomposer", "Carnivore"], correct: 0 },
        { domain: "Ecosystems & Earth Systems", q: "Which organisms break down dead leaves and logs, returning vital nutrients back into the soil?", options: ["Decomposers (fungi, bacteria, earthworms)", "Apex predators", "Producers only", "Herbivores"], correct: 0 },
        { domain: "Ecosystems & Earth Systems", q: "What causes the four seasons (Spring, Summer, Autumn, Winter) on Earth?", options: ["Earth's 23.5° axial tilt as it orbits around the Sun", "Earth moving 10 times closer to the Sun in July", "The Moon blocking the Sun in winter", "Ocean tides changing direction"], correct: 0 },
        { domain: "Ecosystems & Earth Systems", q: "What kind of heat transfer warms your hands when you hold them near a campfire—or warms Earth from the Sun across empty space?", options: ["Radiation", "Conduction only", "Sublimation", "Magnetism"], correct: 0 },
        { domain: "Forces & Motion", q: "What force slows down a rolling skateboard when it moves from smooth pavement onto thick grass?", options: ["Friction", "Gravity alone", "Buoyancy", "Static charge"], correct: 0 },
        { domain: "Matter & Energy", q: "In a simple electric circuit, copper wire is covered in plastic coating because:", options: ["Copper is an electrical conductor and plastic is a safe insulator", "Plastic conducts electricity faster than copper", "Copper is an insulator", "Neither carries current"], correct: 0 },
        { domain: "Molecular Biology & Ecosystems", q: "Which organelle in a eukaryotic cell is the 'powerhouse' that releases usable ATP energy through cellular respiration?", options: ["Mitochondria", "Cell wall", "Vacuole", "Ribosome"], correct: 0 },
        { domain: "Molecular Biology & Ecosystems", q: "During photosynthesis, plants take in sunlight, water, and carbon dioxide to produce glucose (sugar) and release which essential gas?", options: ["Oxygen (O₂)", "Nitrogen gas only", "Helium", "Methane"], correct: 0 },
        { domain: "Earth Systems & Hydrosphere", q: "Most of Earth's surface (about 71%) is covered by water. Where is the largest share of Earth's FRESHWATER stored?", options: ["Frozen in glaciers and polar ice caps", "In backyard swimming pools", "In desert clouds", "In salt oceans"], correct: 0 },
        { domain: "Forces & Motion", q: "In a controlled experiment testing how ramp height affects toy car speed, what is the INDEPENDENT variable?", options: ["The height of the ramp (the one factor you purposefully change)", "The measured speed of the car", "The weight of the toy car kept identical", "The classroom floor"], correct: 0 }
      ],
      bio: [
        { domain: "Cell Structure & Energy", q: "Which structural feature distinguishes a Eukaryotic cell (like plant/animal cells) from a Prokaryotic cell (bacteria)?", options: ["Eukaryotic cells contain a membrane-bound nucleus and organelles", "Prokaryotic cells have two nuclei", "Eukaryotic cells lack DNA", "Prokaryotic cells have chloroplasts and mitochondria"], correct: 0 },
        { domain: "Cell Structure & Energy", q: "Which balanced equation summarizes cellular respiration?", options: ["C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP energy", "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂", "H₂O → H₂ + O₂", "Na + Cl → NaCl"], correct: 0 },
        { domain: "Cell Structure & Energy", q: "What happens to an animal cell placed in a strongly HYPERTONIC (very salty) solution due to osmosis?", options: ["Water moves OUT of the cell, causing it to shrink", "Water rushes IN until it bursts", "Salt turns into glucose", "No water moves at all"], correct: 0 },
        { domain: "DNA, Genetics & Heredity", q: "In DNA base-pairing, Adenine (A) always pairs with Thymine (T), and Cytosine (C) always pairs with:", options: ["Guanine (G)", "Uracil (U)", "Adenine (A)", "Thymine (T)"], correct: 0 },
        { domain: "DNA, Genetics & Heredity", q: "In a Punnett Square crossing two heterozygous parents (Tt × Tt, where T = tall dominant and t = short recessive), what percentage of offspring are predicted to show the recessive short phenotype (tt)?", options: ["25%", "50%", "75%", "100%"], correct: 0 },
        { domain: "DNA, Genetics & Heredity", q: "What is the main difference between Mitosis and Meiosis?", options: ["Mitosis makes 2 identical diploid body cells; Meiosis makes 4 genetically varied haploid gametes", "Mitosis creates gametes; Meiosis repairs skin cuts", "Meiosis doubles chromosome count", "They produce identical results"], correct: 0 },
        { domain: "DNA, Genetics & Heredity", q: "During transcription and translation (protein synthesis), which molecule carries the genetic code from DNA in the nucleus out to the ribosome?", options: ["Messenger RNA (mRNA)", "Cellulose", "Lipids", "Hemoglobin"], correct: 0 },
        { domain: "Cell Structure & Energy", q: "Enzymes are biological catalysts made of proteins. How do enzymes speed up chemical reactions in cells?", options: ["By lowering the activation energy required for the reaction to start", "By raising body temperature to boiling", "By being permanently destroyed on first use", "By deleting DNA"], correct: 0 },
        { domain: "Ecosystems & Populations", q: "In an ecological energy pyramid, roughly what percentage of energy transfers from one trophic level to the next higher level?", options: ["About 10% (the remaining ~90% is used for life processes or lost as heat)", "100%", "90%", "0%"], correct: 0 },
        { domain: "Ecosystems & Populations", q: "What does 'Carrying Capacity' mean for a wildlife population in an ecosystem?", options: ["The maximum population size an environment can sustainably support with available food, water, and habitat", "How heavy an animal can lift", "Zero births per year", "Unlimited exponential growth forever"], correct: 0 }
      ],
      ushist: [
        { domain: "Founding & Constitution", q: "What core principle did the Declaration of Independence (1776) proclaim regarding human rights?", options: ["All people are endowed by their Creator with unalienable rights—including Life, Liberty, and the pursuit of Happiness", "Rights are temporary favors granted only by monarchs", "Only Parliament can hold elections", "Governments never need the consent of the governed"], correct: 0 },
        { domain: "Founding & Constitution", q: "How does the U.S. Constitution prevent any single branch of federal government from gaining unchecked power?", options: ["Through Separation of Powers (Legislative, Executive, Judicial) and Checks & Balances", "By merging all three branches into one office", "By eliminating state governments", "By banning written laws"], correct: 0 },
        { domain: "Founding & Constitution", q: "What are the first ten amendments to the U.S. Constitution—protecting freedom of religion, speech, press, assembly, and trial by jury—collectively called?", options: ["The Bill of Rights", "The Magna Carta", "The Federalist Papers", "The Monroe Doctrine"], correct: 0 },
        { domain: "Expansion & Civil War", q: "Which constitutional amendment (1865) permanently abolished slavery throughout the United States?", options: ["The 13th Amendment", "The 1st Amendment", "The 10th Amendment", "The 22nd Amendment"], correct: 0 },
        { domain: "Expansion & Civil War", q: "Which 1803 land purchase negotiated under President Thomas Jefferson doubled the geographic size of the United States?", options: ["The Louisiana Purchase", "The Treaty of Paris", "The Oregon Trail Act", "The Homestead Act"], correct: 0 },
        { domain: "Modern Era & Economics", q: "In basic economics, what typically happens to the market price of a product when consumer demand rises sharply while supply remains limited?", options: ["The price tends to rise until supply and demand reach a new equilibrium", "The price drops to zero automatically", "Supply disappears permanently", "Demand has no effect on price"], correct: 0 },
        { domain: "Founding & Constitution", q: "In the U.S. system of Federalism, how is governing authority divided?", options: ["Shared between the national (federal) government and the individual state governments", "Held exclusively by city mayors", "Controlled by foreign parliaments", "Assigned only to the Supreme Court"], correct: 0 },
        { domain: "Modern Era & Economics", q: "What landmark 1954 Supreme Court ruling declared racial segregation in public schools unconstitutional?", options: ["Brown v. Board of Education", "Marbury v. Madison", "McCulloch v. Maryland", "Gibbons v. Ogden"], correct: 0 }
      ]
    };

    const key = examId.includes("read") || examId.includes("eng")
      ? "reading"
      : examId.includes("bio")
        ? "bio"
        : examId.includes("ushist")
          ? "ushist"
          : "science";
    const pool = banks[key] || banks.reading;
    const qs = [];
    for (let i = 0; i < count; i++) {
      const base = pool[i % pool.length];
      qs.push(shuffleOpts(base, i * 19 + 7));
    }
    return qs;
  }

  let activeExamTimer = null;

  function renderExamRunner(examMeta, student) {
    const qCount = examMeta.gradeMax <= 2 ? 20 : 45;
    const isMath = examMeta.id.includes("math");
    const questions = isMath ? buildMathEogQuestions(examMeta.id, qCount) : buildSubjectEogQuestions(examMeta.id, qCount);
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
          <button type="button" class="btn btn-outline btn-sm" style="margin-top:0.25rem; color:#FFFFFF; border-color:rgba(255,255,255,0.35); font-size:0.72rem;" onclick="window.openEogEocExamCenter()">← All EOG/EOC Exams</button>
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

  window.openEogEocExamCenter = function (studentObj) {
    if (activeExamTimer) clearInterval(activeExamTimer);
    const stu = studentObj || (typeof window.getAcademyActiveStudent === "function" ? window.getAcademyActiveStudent() : null);
    const g = stu ? Number(stu.grade) : 5;

    const modalTitle = document.getElementById("modalTitle");
    const modalBody = document.getElementById("modalBodyContent");
    const backdrop = document.getElementById("appModalBackdrop");
    if (!modalTitle || !modalBody || !backdrop) return;

    const recommended = EXAM_CATALOG.filter((ex) => g >= ex.gradeMin && g <= ex.gradeMax);
    const others = EXAM_CATALOG.filter((ex) => !(g >= ex.gradeMin && g <= ex.gradeMax));

    modalTitle.textContent = "🏛️ Public-Sector Aligned EOG & EOC Final Exam Center (Grades K–12)";
    modalBody.innerHTML = `
      <div class="quiz-q-card" style="background:linear-gradient(135deg,#0F1E36,#1A3359); color:#FFFFFF; border:2px solid var(--gold-500); margin-bottom:1rem;">
        <span class="badge badge-gold">PUBLIC-SECTOR BENCHMARK ALIGNMENT · NC EOG / EOC &amp; NATIONAL STANDARDS</span>
        <h3 style="color:#FFFFFF; margin:0.35rem 0 0.25rem;">End-of-Grade (EOG) &amp; End-of-Course (EOC) Final Exams</h3>
        <p style="font-size:0.85rem; color:#E2E8F0; margin:0;">
          Modeled closely on official State EOG (Grades 3–8 Reading, Math, and Science 5 &amp; 8) and High School EOC (Math 1, English II, Biology, Math 3, U.S. History) blueprints—complete with Calculator-Inactive &amp; Active sections, passage text-evidence items, countdown timer, and official <strong>Achievement Levels 1–5</strong> logged straight to your Parent Portal.
        </p>
      </div>

      <div style="margin-bottom:1rem;">
        <div class="mono-label" style="color:var(--emerald-700); margin-bottom:0.45rem;">
          RECOMMENDED FINAL EXAMS FOR ${stu ? `${stu.name.toUpperCase()} (${g === 0 ? "KINDERGARTEN" : `GRADE ${g}`})` : "YOUR GRADE LEVEL"}
        </div>
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap:0.65rem;">
          ${recommended
            .map(
              (ex) => `
            <div class="quiz-q-card" style="background:#F4FAF7; border:1.5px solid var(--emerald-600); display:flex; flex-direction:column; justify-content:space-between; gap:0.5rem;">
              <div>
                <span class="badge badge-emerald">${ex.type}</span>
                <h4 style="margin:0.3rem 0 0.2rem; color:var(--navy-900);">${ex.label}</h4>
                <div style="font-size:0.76rem; color:var(--text-secondary);">Domains: ${ex.domains.join(" · ")} · Timed (${ex.timeMins} mins)</div>
              </div>
              <button type="button" class="btn btn-primary btn-sm" data-launch-eog-exam="${ex.id}">Launch Final Exam →</button>
            </div>
          `
            )
            .join("")}
        </div>
      </div>

      <div>
        <div class="mono-label" style="color:var(--navy-800); margin-bottom:0.45rem;">ALL K–12 EOG &amp; HIGH SCHOOL EOC BENCHMARK EXAMS</div>
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap:0.55rem;">
          ${others
            .map(
              (ex) => `
            <div class="quiz-q-card" style="background:var(--bg-ivory); display:flex; flex-direction:column; justify-content:space-between; gap:0.45rem;">
              <div>
                <span class="badge badge-navy">${ex.type}</span>
                <h4 style="margin:0.25rem 0 0.15rem; font-size:0.9rem; color:var(--navy-900);">${ex.label}</h4>
                <div style="font-size:0.74rem; color:var(--text-muted);">${ex.domains.join(" · ")}</div>
              </div>
              <button type="button" class="btn btn-outline btn-sm" data-launch-eog-exam="${ex.id}">Open Exam →</button>
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
