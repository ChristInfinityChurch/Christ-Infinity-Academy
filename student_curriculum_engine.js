// Christ Infinity Academy — K–12 Student-Friendly Curriculum, Real Math Problem Engine & 12Q/20Q Assessment Suite
(function () {
  // Deterministic option shuffler so the correct answer is evenly spread across A/B/C/D (never always A!)
  function shuffleQuestionOptions(qObj, seedNum) {
    if (!qObj || !Array.isArray(qObj.options) || qObj.options.length < 2) return qObj;
    const correctText = qObj.options[qObj.correct || 0];
    const indexed = qObj.options.map((opt, idx) => ({
      opt,
      rank: ((idx + 1) * 37 + seedNum * 13) % 101
    }));
    indexed.sort((a, b) => a.rank - b.rank);
    const newOptions = indexed.map((x) => x.opt);
    const newCorrect = Math.max(0, newOptions.indexOf(correctText));
    return { ...qObj, options: newOptions, correct: newCorrect };
  }

  // ==================== 1. REAL NUMERICAL MATH QUIZ GENERATOR (12 DAILY / 20 UNIT TEST) ====================
  function generateMathQuizQuestions(grade, weekNum, dayIdx, count) {
    const qs = [];
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

    for (let i = 0; i < count; i++) {
      const s = weekNum * 19 + dayIdx * 7 + i * 5;
      let qObj;

      if (grade <= 2) {
        // K–2: Addition, Subtraction, Skip Counting, Coins, Place Value
        const type = i % 5;
        if (type === 0) {
          const a = 4 + (s % 12);
          const b = 3 + ((s + 3) % 10);
          qObj = {
            q: `Add: ${a} + ${b} = ?`,
            options: [String(a + b), String(a + b + 1), String(a + b - 2), String(a + b + 3)],
            correct: 0,
            explanation: `Start at ${a} and count up ${b} more to reach ${a + b}.`
          };
        } else if (type === 1) {
          const total = 12 + (s % 15);
          const take = 3 + (s % 8);
          qObj = {
            q: `Subtract: ${total} − ${take} = ?`,
            options: [String(total - take), String(total - take + 2), String(total + take), String(total - take - 1)],
            correct: 0,
            explanation: `${total} minus ${take} equals ${total - take}.`
          };
        } else if (type === 2) {
          const step = [2, 5, 10][i % 3];
          const start = step * (2 + (s % 4));
          qObj = {
            q: `Skip counting by ${step}s: ${start}, ${start + step}, ${start + step * 2}, ___ ?`,
            options: [String(start + step * 3), String(start + step * 2 + 1), String(start + step * 4), String(start + step)],
            correct: 0,
            explanation: `Adding ${step} to ${start + step * 2} gives ${start + step * 3}.`
          };
        } else if (type === 3) {
          const dimes = 1 + (s % 5);
          const nickels = 1 + (i % 3);
          const cents = dimes * 10 + nickels * 5;
          qObj = {
            q: `How much money is ${dimes} dime(s) and ${nickels} nickel(s)?`,
            options: [`${cents}¢`, `${cents + 5}¢`, `${cents - 5}¢`, `${dimes + nickels}¢`],
            correct: 0,
            explanation: `Each dime is 10¢ (${dimes * 10}¢) and each nickel is 5¢ (${nickels * 5}¢), totaling ${cents}¢.`
          };
        } else {
          const tens = 2 + (s % 7);
          const ones = 1 + (i % 8);
          qObj = {
            q: `What number has ${tens} tens and ${ones} ones?`,
            options: [String(tens * 10 + ones), String(ones * 10 + tens), String(tens + ones), String(tens * 100 + ones)],
            correct: 0,
            explanation: `${tens} tens = ${tens * 10}, plus ${ones} ones = ${tens * 10 + ones}.`
          };
        }
      } else if (grade <= 5) {
        // Grades 3–5: Multiplication, Division, Fractions, Decimals, Area/Volume, Word Problems
        const type = i % 6;
        if (type === 0) {
          const a = 6 + (s % 7);
          const b = 4 + ((s + 2) % 9);
          qObj = {
            q: `Multiply: ${a} × ${b} = ?`,
            options: [String(a * b), String(a * b + a), String(a * b - b), String(a + b)],
            correct: 0,
            explanation: `${a} groups of ${b} equals ${a * b}.`
          };
        } else if (type === 1) {
          const div = 3 + (s % 7);
          const quot = 6 + ((s + 4) % 12);
          const num = div * quot;
          qObj = {
            q: `Divide: ${num} ÷ ${div} = ?`,
            options: [String(quot), String(quot + 2), String(quot - 1), String(div)],
            correct: 0,
            explanation: `Because ${div} × ${quot} = ${num}, ${num} ÷ ${div} = ${quot}.`
          };
        } else if (type === 2) {
          const den = [6, 8, 10, 12][i % 4];
          const n1 = 1 + (s % (den / 2 - 1));
          const n2 = 1 + ((s + 1) % (den / 2));
          qObj = {
            q: `Add the fractions: ${n1}/${den} + ${n2}/${den} = ?`,
            options: [`${n1 + n2}/${den}`, `${n1 + n2}/${den * 2}`, `${n1 * n2}/${den}`, `${Math.abs(n1 - n2)}/${den}`],
            correct: 0,
            explanation: `With the same denominator (${den}), add the numerators: ${n1} + ${n2} = ${n1 + n2}, giving ${n1 + n2}/${den}.`
          };
        } else if (type === 3) {
          const d1 = (12 + (s % 35)) / 10;
          const d2 = (14 + ((s + 5) % 25)) / 10;
          const ans = (d1 + d2).toFixed(1);
          qObj = {
            q: `Add the decimals: ${d1.toFixed(1)} + ${d2.toFixed(1)} = ?`,
            options: [ans, (d1 + d2 + 0.2).toFixed(1), (d1 + d2 - 0.3).toFixed(1), (d1 + d2 + 1.0).toFixed(1)],
            correct: 0,
            explanation: `Line up the decimal points: ${d1.toFixed(1)} + ${d2.toFixed(1)} = ${ans}.`
          };
        } else if (type === 4) {
          const l = 5 + (s % 8);
          const w = 3 + (i % 6);
          qObj = {
            q: `A garden bed is ${l} ft long and ${w} ft wide. What is its AREA?`,
            options: [`${l * w} sq ft`, `${2 * (l + w)} sq ft`, `${l + w} sq ft`, `${l * w + l} sq ft`],
            correct: 0,
            explanation: `Rectangle Area = length × width = ${l} × ${w} = ${l * w} square feet.`
          };
        } else {
          const x = 5 + (s % 12);
          const add = 4 + (i % 9);
          qObj = {
            q: `Solve for the mystery number: x + ${add} = ${x + add}. What is x?`,
            options: [String(x), String(x + add * 2), String(x + 2), String(add)],
            correct: 0,
            explanation: `Subtract ${add} from ${x + add} to find x = ${x}.`
          };
        }
      } else if (grade === 6) {
        // Grade 6: PEMDAS, GCF, Percents, Ratios, Area, Intro Equations
        const type = i % 6;
        if (type === 0) {
          const a = 4 + (s % 9);
          const b = 2 + (i % 6);
          const c = 3 + (s % 4);
          qObj = {
            q: `Evaluate using PEMDAS: ${a} + ${b} × ${c} = ?`,
            options: [String(a + b * c), String((a + b) * c), String(a + b + c), String(b * c)],
            correct: 0,
            explanation: `Multiply first (${b} × ${c} = ${b * c}), then add ${a} to get ${a + b * c}.`
          };
        } else if (type === 1) {
          const baseG = 3 + (i % 5);
          const n1 = baseG * (2 + (s % 3));
          const n2 = baseG * (3 + ((s + 1) % 4));
          const g = gcd(n1, n2);
          qObj = {
            q: `What is the Greatest Common Factor (GCF) of ${n1} and ${n2}?`,
            options: [String(g), String(g * 2), String(n1), "1"],
            correct: 0,
            explanation: `The largest whole number dividing both ${n1} and ${n2} evenly is ${g}.`
          };
        } else if (type === 2) {
          const pct = [10, 20, 25, 50][i % 4];
          const base = (3 + (s % 8)) * 20;
          const ans = (base * pct) / 100;
          qObj = {
            q: `What is ${pct}% of ${base}?`,
            options: [String(ans), String(ans * 2), String(base - pct), String(ans + 10)],
            correct: 0,
            explanation: `${pct}% = ${pct / 100}, and ${pct / 100} × ${base} = ${ans}.`
          };
        } else if (type === 3) {
          const b = 6 + (s % 7) * 2;
          const h = 4 + (i % 6);
          qObj = {
            q: `Find the area of a triangle with base ${b} cm and height ${h} cm:`,
            options: [`${(b * h) / 2} sq cm`, `${b * h} sq cm`, `${b + h} sq cm`, `${(b * h) / 2 + 4} sq cm`],
            correct: 0,
            explanation: `Triangle Area = (base × height) ÷ 2 = (${b} × ${h}) ÷ 2 = ${(b * h) / 2}.`
          };
        } else if (type === 4) {
          const x = 3 + (s % 9);
          const m = 2 + (i % 4);
          const add = 5 + (s % 7);
          qObj = {
            q: `Solve for x: ${m}x + ${add} = ${m * x + add}`,
            options: [String(x), String(x + 2), String(m * x), String(x + add)],
            correct: 0,
            explanation: `Subtract ${add} (${m}x = ${m * x}), then divide by ${m}: x = ${x}.`
          };
        } else {
          const r1 = 2 + (i % 4);
          const r2 = 3 + (s % 5);
          const mult = 3 + (s % 4);
          qObj = {
            q: `A trail mix uses ${r1} cups of nuts for every ${r2} cups of raisins. If you use ${r2 * mult} cups of raisins, how many cups of nuts do you need?`,
            options: [String(r1 * mult), String(r1 + mult), String(r2 * r1), String(r1 * mult + 2)],
            correct: 0,
            explanation: `Since raisins scaled by ×${mult}, scale nuts by ×${mult}: ${r1} × ${mult} = ${r1 * mult}.`
          };
        }
      } else if (grade === 7) {
        // Grade 7 Pre-Algebra: Integers, Two-Step, Distributive, Unit Rates
        const type = i % 5;
        if (type === 0) {
          const neg = -(5 + (s % 12));
          const pos = 8 + ((s + 3) % 15);
          qObj = {
            q: `Evaluate: ${neg} + ${pos} = ?`,
            options: [String(neg + pos), String(-(neg + pos)), String(Math.abs(neg) + pos), String(neg - pos)],
            correct: 0,
            explanation: `${neg} + ${pos} = ${neg + pos}.`
          };
        } else if (type === 1) {
          const a = -(2 + (i % 6));
          const b = -(3 + (s % 7));
          qObj = {
            q: `Multiply: (${a}) × (${b}) = ?`,
            options: [String(a * b), String(-(a * b)), String(a + b), String(Math.abs(a) + Math.abs(b))],
            correct: 0,
            explanation: `Negative times negative is positive: (${a}) × (${b}) = ${a * b}.`
          };
        } else if (type === 2) {
          const a = 3 + (i % 5);
          const x = 2 + (s % 9);
          const b = 4 + (s % 8);
          qObj = {
            q: `Solve for x: ${a}x − ${b} = ${a * x - b}`,
            options: [String(x), String(x + 2), String(x - 1), String(a * x)],
            correct: 0,
            explanation: `Add ${b} to both sides (${a}x = ${a * x}), then divide by ${a}: x = ${x}.`
          };
        } else if (type === 3) {
          const k = 2 + (i % 4);
          const x = 3 + (s % 7);
          const add = 2 + (s % 5);
          const rhs = k * (x + add);
          qObj = {
            q: `Solve: ${k}(x + ${add}) = ${rhs}`,
            options: [String(x), String(x + add), String(rhs / k), String(x + k)],
            correct: 0,
            explanation: `Divide by ${k} to get x + ${add} = ${x + add}, then subtract ${add}: x = ${x}.`
          };
        } else {
          const hrs = 3 + (i % 4);
          const mph = 45 + (s % 5) * 5;
          qObj = {
            q: `A car travels ${mph * hrs} miles in ${hrs} hours. What is its unit rate?`,
            options: [`${mph} mph`, `${mph + 10} mph`, `${mph - 5} mph`, `${mph * hrs} mph`],
            correct: 0,
            explanation: `${mph * hrs} ÷ ${hrs} = ${mph} mph.`
          };
        }
      } else if (grade === 8) {
        // Grade 8 Algebra I: Slope, Functions, Multi-Step Equations, Quadratics
        const type = i % 5;
        if (type === 0) {
          const m = 2 + (s % 5);
          const x1 = 1 + (i % 4);
          const y1 = 2 + (s % 6);
          const dx = 2 + (i % 3);
          qObj = {
            q: `Find the slope through (${x1}, ${y1}) and (${x1 + dx}, ${y1 + m * dx}):`,
            options: [String(m), String(m + 2), String(m * dx), `1/${m}`],
            correct: 0,
            explanation: `m = (${y1 + m * dx} − ${y1}) / (${x1 + dx} − ${x1}) = ${m * dx} / ${dx} = ${m}.`
          };
        } else if (type === 1) {
          const m = 2 + (i % 5);
          const b = 3 + (s % 8);
          const x = 3 + (i % 5);
          qObj = {
            q: `If f(x) = ${m}x + ${b}, find f(${x}):`,
            options: [String(m * x + b), String(m + x + b), String(m * x - b), String((m + b) * x)],
            correct: 0,
            explanation: `f(${x}) = ${m}(${x}) + ${b} = ${m * x + b}.`
          };
        } else if (type === 2) {
          const x = 2 + (s % 8);
          const c = 3 * x - 4;
          qObj = {
            q: `Solve: 5x − 4 = 2x + ${c}`,
            options: [String(x), String(x + 3), String(x - 1), String(c)],
            correct: 0,
            explanation: `Subtract 2x: 3x − 4 = ${c}. Add 4: 3x = ${3 * x}. Divide by 3: x = ${x}.`
          };
        } else if (type === 3) {
          const r = 3 + (i % 8);
          qObj = {
            q: `What is the positive solution to x² = ${r * r}?`,
            options: [String(r), String(r * 2), String(r + 1), String(r * r / 2)],
            correct: 0,
            explanation: `√${r * r} = ${r}.`
          };
        } else {
          const r1 = 2 + (i % 6);
          const r2 = 1 + (s % 5);
          qObj = {
            q: `What are the solutions to (x − ${r1})(x + ${r2}) = 0?`,
            options: [`x = ${r1} or x = -${r2}`, `x = -${r1} or x = ${r2}`, `x = ${r1 + r2} only`, `x = ${r1 * r2} only`],
            correct: 0,
            explanation: `Zero Product Property: x − ${r1} = 0 gives x = ${r1}; x + ${r2} = 0 gives x = −${r2}.`
          };
        }
      } else if (grade === 9 || grade === 10) {
        // Grades 9–10 Geometry & Algebra II
        const triples = [
          [3, 4, 5],
          [6, 8, 10],
          [5, 12, 13],
          [8, 15, 17],
          [9, 12, 15]
        ];
        const type = i % 5;
        if (type === 0) {
          const [a, b, c] = triples[i % triples.length];
          qObj = {
            q: `A right triangle has legs ${a} and ${b}. Find hypotenuse c:`,
            options: [String(c), String(a + b), String(c * c), String(b - a)],
            correct: 0,
            explanation: `${a}² + ${b}² = ${c * c}, so c = √${c * c} = ${c}.`
          };
        } else if (type === 1) {
          const a1 = 35 + (s % 45);
          const a2 = 40 + (i % 40);
          const a3 = 180 - a1 - a2;
          qObj = {
            q: `Two angles of a triangle measure ${a1}° and ${a2}°. Find the third angle:`,
            options: [`${a3}°`, `${a3 + 15}°`, `${180 - a1}°`, `${a1 + a2}°`],
            correct: 0,
            explanation: `180° − ${a1}° − ${a2}° = ${a3}°. `
          };
        } else if (type === 2) {
          const n = 5 + (i % 6);
          const sum = (n - 2) * 180;
          qObj = {
            q: `Find the sum of all interior angles of a ${n}-sided polygon:`,
            options: [`${sum}°`, `${n * 180}°`, `${sum - 180}°`, "360°"],
            correct: 0,
            explanation: `(${n} − 2) × 180° = ${sum}°. `
          };
        } else if (type === 3) {
          const r = 3 + (i % 8);
          qObj = {
            q: `What is the exact area of a circle with radius ${r}?`,
            options: [`${r * r}π`, `${2 * r}π`, `${r}π`, `${r * r * 2}π`],
            correct: 0,
            explanation: `A = πr² = ${r * r}π.`
          };
        } else {
          const ang = 40 + (s % 95);
          qObj = {
            q: `What is the supplement of a ${ang}° angle?`,
            options: [`${180 - ang}°`, `${90 - Math.min(89, ang)}°`, `${360 - ang}°`, `${ang}°`],
            correct: 0,
            explanation: `Supplementary angles sum to 180°: 180° − ${ang}° = ${180 - ang}°.`
          };
        }
      } else {
        // Grades 11–12: Pre-Calc & AP Calculus
        const type = i % 5;
        if (type === 0) {
          const p = 2 + (i % 6);
          const val = Math.pow(2, p);
          qObj = {
            q: `Evaluate log₂(${val}):`,
            options: [String(p), String(val / 2), String(p + 1), String(p * 2)],
            correct: 0,
            explanation: `2^${p} = ${val}, so log₂(${val}) = ${p}.`
          };
        } else if (type === 1) {
          const a = 2 + (i % 5);
          const n = 2 + (s % 4);
          const x = 2;
          const ans = a * n * Math.pow(x, n - 1);
          qObj = {
            q: `If f(x) = ${a}x^${n}, find the derivative value f'(2):`,
            options: [String(ans), String(a * n), String(a * Math.pow(2, n)), String(ans + a)],
            correct: 0,
            explanation: `f'(x) = ${a * n}x^${n - 1}, so f'(2) = ${ans}.`
          };
        } else if (type === 2) {
          const m = 2 + (i % 4);
          const x = 2 + (s % 6);
          const b = 3 + (i % 7);
          qObj = {
            q: `Evaluate lim (x → ${x}) of (${m}x + ${b}):`,
            options: [String(m * x + b), String(m + x + b), String(m * x), String(m * x - b)],
            correct: 0,
            explanation: `Direct substitution gives ${m}(${x}) + ${b} = ${m * x + b}.`
          };
        } else if (type === 3) {
          const deg = 15 + (s % 70);
          qObj = {
            q: `What is sin²(${deg}°) + cos²(${deg}°)?`,
            options: ["1", "0", String(deg), "0.5"],
            correct: 0,
            explanation: "The Pythagorean Identity states sin²(θ) + cos²(θ) = 1 for every angle."
          };
        } else {
          const r1 = 2 + (i % 5);
          const r2 = 3 + (s % 5);
          qObj = {
            q: `What is the larger root of x² − ${r1 + r2}x + ${r1 * r2} = 0?`,
            options: [String(Math.max(r1, r2)), String(r1 + r2), String(r1 * r2), String(Math.min(r1, r2) - 1)],
            correct: 0,
            explanation: `Factors to (x − ${r1})(x − ${r2}) = 0, so the larger root is ${Math.max(r1, r2)}.`
          };
        }
      }
      qs.push(shuffleQuestionOptions(qObj, s + i));
    }
    return qs;
  }

  // ==================== 2. SUBJECT QUESTION BANK EXPANDER (12 DAILY / 20 UNIT TEST) ====================
  function expandSubjectQuiz(baseQuestions, subjectCategory, cleanTopic, courseTitle, grade, weekNum, dayIdx, targetCount) {
    const out = (baseQuestions || []).map((q, idx) => shuffleQuestionOptions(q, weekNum * 11 + dayIdx * 3 + idx));

    const extrasByCat = {
      theology: [
        { q: "Which four major movements connect the entire storyline of the Bible?", options: ["Creation → Fall → Redemption → Restoration", "Math → Logic → Art → Science", "Only disconnected short proverbs", "Summer → Fall → Winter → Spring"], correct: 0, explanation: "Every book in Scripture fits inside Creation, Fall, Redemption, and Restoration." },
        { q: "What does reading a Bible verse 'in context' mean?", options: ["Reading the verses before and after it so you understand the full setting and meaning", "Picking one random phrase without checking the chapter", "Skipping the story and reading only chapter numbers", "Guessing without reading the text"], correct: 0, explanation: "Context prevents misunderstandings and shows what the author truly meant." },
        { q: "In Genesis 1:27, what does being made in the 'Image of God' teach about every human being?", options: ["Every person has God-given value, dignity, and moral responsibility", "Only famous leaders have real worth", "People have no responsibility to care for creation", "Humans are identical to rocks and plants"], correct: 0, explanation: "Imago Dei affirms the dignity and stewardship calling of every person." },
        { q: "What is 'Stewardship' in a Christian worldview?", options: ["Faithfully caring for God's creation, our talents, and the people around us", "Ignoring responsibilities and wasting resources", "Refusing to help neighbors in need", "Thinking only about yourself"], correct: 0, explanation: "Stewardship means managing what God entrusts to us with wisdom and care." },
        { q: "Why does God invite people into a day of rest (Sabbath) after six days of work?", options: ["To worship Him, enjoy His good gifts, and restore our bodies and minds", "Because God ran out of energy", "So nobody ever works again", "As a punishment"], correct: 0, explanation: "Sabbath establishes a healthy, joyful rhythm of purposeful work and worshipful rest." },
        { q: "What is a 'Covenant' in the Bible?", options: ["A faithful, binding promise and relationship established by God with His people", "A casual guess that can be broken anytime", "A secret math equation", "A geographical map"], correct: 0, explanation: "God's covenants (Noah, Abraham, Moses, David, New Covenant in Christ) reveal His steadfast faithfulness." },
        { q: `How should studying "${cleanTopic}" shape a Grade ${grade} student's everyday life?`, options: ["By strengthening honesty, courage, kindness, and trust in God's Word", "By making us proud and argumentative", "By staying only in a notebook with zero real-life action", "By ignoring how we treat our family"], correct: 0, explanation: "Biblical wisdom transforms both the mind and everyday character." },
        { q: "Where in Christ Infinity Academy can you compare Easy-to-Read Modern English with Classic KJV or hear any chapter read aloud?", options: ["In the built-in Scripture Hub (all 81 books offline)", "Nowhere inside the academy", "Only in the Math tab", "Only after graduating 12th grade"], correct: 0, explanation: "The Scripture Hub lets students toggle Easy-to-Read, Parallel, Classic KJV, and audio read-aloud anytime." },
        { q: "When the Bible records stories of hardship (like Joseph, David, or Daniel), what core truth stands out?", options: ["God remains faithful and can bring good and growth even out of difficult seasons", "Hardship means God forgot His promises", "Faithful people never face challenges", "We should give up at the first obstacle"], correct: 0, explanation: "Scripture consistently shows God's providence and presence through trials." },
        { q: "What three simple study questions help you unlock any chapter of the Bible?", options: ["What happened? What does it show about God? How do I live it out today?", "How long is the page? What font is used? Can I skip it?", "Only memorizing dates", "Ignoring who is speaking"], correct: 0, explanation: "Observation, Understanding, and Application unlock clear Bible comprehension." },
        { q: "Why do Proverbs and Psalms emphasize seeking wisdom early in life?", options: ["Wise habits built young guide friendships, work, faith, and choices for a lifetime", "Wisdom is only useful after age 60", "Wisdom means never asking questions", "Wisdom replaces kindness"], correct: 0, explanation: "Proverbs teaches that wisdom guards our steps and brings lasting blessing." },
        { q: "What does 'creating out of nothing' (Ex Nihilo) mean in Genesis 1:1?", options: ["God spoke the universe into existence by His Word without needing pre-existing materials", "God recycled an older universe", "Humans built the stars first", "Everything appeared randomly with no purpose"], correct: 0, explanation: "God alone is eternal and self-existent; everything else depends on Him." },
        { q: "How do the Old Testament and New Testament connect together?", options: ["The Old Testament prepares and promises the Savior; the New Testament reveals Jesus fulfilling those promises", "They contradict each other completely", "They are unrelated history books", "Only the first chapter matters"], correct: 0, explanation: "Jesus Himself taught that the Law, Prophets, and Psalms point to Him (Luke 24:44)." },
        { q: "What is the best attitude when you read a Bible verse that feels confusing at first?", options: ["Slow down, read the surrounding chapter in Easy-to-Read English, and ask your parent or mentor", "Close the book permanently", "Make up a meaning without checking the text", "Skip every hard verse forever"], correct: 0, explanation: "Patient reading in context and talking with parents/mentors builds deep understanding." },
        { q: "In Matthew 22, what did Jesus call the two greatest commandments?", options: ["Love God with all your heart, soul, and mind, and love your neighbor as yourself", "Win every argument and never rest", "Collect the most gold and ignore others", "Memorize every rule without caring about people"], correct: 0, explanation: "Love of God and love of neighbor summarize the heart of God's law." },
        { q: "What are the Fruit of the Spirit listed in Galatians 5?", options: ["Love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control", "Anger, jealousy, and impatience", "Speed, fame, and wealth", "Luck and pride"], correct: 0, explanation: "Galatians 5:22–23 describes the character God grows inside believers." },
        { q: "Why is family discussion helpful after finishing a Bible lesson?", options: ["Talking through Scripture together sharpens understanding and turns truth into family habits", "So someone else does all your thinking", "To skip the quiz", "Because reading alone isn't allowed"], correct: 0, explanation: "Deuteronomy 6 encourages families to talk about God's Word naturally in daily life." }
      ],
      science: [
        { q: "What is a Hypothesis in a real science experiment?", options: ["A testable 'If... then...' prediction based on observation and research", "A wild guess that cannot be tested", "The final summary written after the lab", "A list of lab safety goggles"], correct: 0, explanation: "A good hypothesis is always specific and testable." },
        { q: "In a fair test, what is the INDEPENDENT variable?", options: ["The ONE factor that the scientist intentionally changes", "The measurement recorded at the end", "Everything kept identical", "The title of the lab"], correct: 0, explanation: "Memory trick: 'I' change the Independent variable." },
        { q: "What is the DEPENDENT variable in an experiment?", options: ["The outcome or data that you measure because of your change", "The thing you never measure", "The brand of notebook used", "A random opinion"], correct: 0, explanation: "Memory trick: Dependent = Data you measure." },
        { q: "Why do scientists keep Control Variables constant during a test?", options: ["So you know for sure which single change caused the measured result", "To make experiments take longer", "To force the hypothesis to be right", "So you never need measurements"], correct: 0, explanation: "Changing multiple variables at once ruins a fair test." },
        { q: "What should a scientist do if experiment data proves their hypothesis WRONG?", options: ["Report the honest data and revise the explanation—disproving an idea is real progress!", "Erase the data and write fake numbers", "Hide the notebook", "Claim the hypothesis was right anyway"], correct: 0, explanation: "Honest data is the heartbeat of real science." },
        { q: "Which three steps form a clear scientific explanation (CER)?", options: ["Claim → Evidence → Reasoning", "Guess → Ignore → Repeat", "Title → Color → Margin", "Rumor → Hype → Luck"], correct: 0, explanation: "Claim states your answer, Evidence gives measured data, Reasoning connects them." },
        { q: "Why do scientists worldwide use the Metric System (meters, grams, liters, °C)?", options: ["It works cleanly in powers of 10 and lets scientists everywhere compare exact results", "Because metric rulers are longer", "It avoids using numbers", "It changes every year"], correct: 0, explanation: "Base-10 metric units prevent conversion errors and allow global collaboration." },
        { q: "What is the difference between a Physical Change (like melting ice) and a Chemical Change (like burning wood)?", options: ["Physical changes keep the same substance; chemical changes create a brand-new substance", "Physical changes cannot be observed", "Chemical changes only happen in water", "There is no difference"], correct: 0, explanation: "Melting ice is still H₂O; burning wood turns it into ash and gases." },
        { q: "Why is repeating an experiment multiple times (multiple trials) so important?", options: ["It spots accidental errors and confirms the pattern is genuinely repeatable", "Because one trial is illegal", "To waste lab supplies", "So you get different numbers on purpose"], correct: 0, explanation: "Repeatable trials separate real scientific laws from lucky accidents." },
        { q: `What is the best way to prove you truly understand "${cleanTopic}"?`, options: ["Explain how it works in your own plain words and point to a real-world example", "Copy a paragraph without understanding the words", "Skip the visual diagram", "Guess on the quiz without reading"], correct: 0, explanation: "Teaching a concept clearly in plain language confirms genuine mastery." },
        { q: "What are the three classic states of matter encountered every day?", options: ["Solid, Liquid, and Gas", "Hot, Warm, and Cold", "Big, Medium, and Small", "Fast, Slow, and Stopped"], correct: 0, explanation: "Solids hold shape, liquids take container shape, and gases fill available space." },
        { q: "What force pulls planets in orbit around the Sun and keeps our feet on Earth?", options: ["Gravity", "Magnetism", "Friction", "Static electricity"], correct: 0, explanation: "Gravity is the universal attractive force between masses." },
        { q: "In an ecosystem food web, what role do green plants (producers) play?", options: ["They capture sunlight via photosynthesis to make food energy for the whole web", "They only eat carnivores", "They block all oxygen", "They have no role"], correct: 0, explanation: "Producers convert solar energy into chemical energy." },
        { q: "What causes Day and Night on Earth?", options: ["Earth rotating (spinning) on its axis once every 24 hours", "The Moon blocking the Sun every evening", "Earth moving to a different galaxy at night", "Clouds turning off sunlight"], correct: 0, explanation: "Rotation creates the 24-hour cycle of day and night; tilt + orbit create seasons." },
        { q: "What does a line graph show best in a science lab?", options: ["How a measured quantity changes steadily over time or across values", "A list of student names", "Paragraph essays", "Spelling rules"], correct: 0, explanation: "Line graphs clearly reveal trends, slopes, and patterns in continuous data." },
        { q: "Why should you write down observations DURING a lab instead of trying to remember them next week?", options: ["Immediate notes capture exact measurements before memory fades", "So the paper looks messy", "Because numbers change next week", "To avoid doing calculations"], correct: 0, explanation: "Real-time lab logs guarantee accuracy and integrity." },
        { q: "How does studying the order of nature connect to faith at Christ Infinity Academy?", options: ["Discovering consistent natural laws inspires awe for the Creator who designed them", "Science and faith can never talk to each other", "Nature has no patterns at all", "Only artists look closely at nature"], correct: 0, explanation: "Psalm 19:1 celebrates how the order of creation reflects God's handiwork." }
      ],
      asl: [
        { q: "In American Sign Language (ASL), why are facial expressions (non-manual markers) essential?", options: ["They carry grammar—like turning a statement into a yes/no or wh-question and showing tone", "They are optional decorations", "ASL only uses the fingers with a blank face", "They replace all hand signs"], correct: 0, explanation: "In ASL, raised or furrowed eyebrows and facial expressions are a vital part of grammar!" },
        { q: "When asking a Yes/No question in ASL, what should your eyebrows do?", options: ["Raise UP while tilting your head slightly forward", "Squeeze down tightly", "Stay completely still with eyes closed", "Look away from the person"], correct: 0, explanation: "Eyebrows UP = Yes/No question; eyebrows DOWN/furrowed = Wh-question (Who, What, Where, When, Why)." },
        { q: "When asking a Wh-question (Who, What, Where, When, Why) in ASL, what do your eyebrows do?", options: ["Furrow/lower DOWN slightly", "Raise straight up", "Wink rapidly", "Never move"], correct: 0, explanation: "Furrowed eyebrows signal a Wh-question in ASL." },
        { q: "What is 'Fingerspelling' used for most often in ASL?", options: ["Proper nouns like names, cities, brands, and words without a dedicated sign", "Spelling out every single English word in every sentence", "Counting to 1,000 only", "Replacing facial expressions"], correct: 0, explanation: "Fingerspelling smoothly spells names, places, and specialized terms." },
        { q: "What are the 5 building blocks (parameters) of every ASL sign?", options: ["Handshape, Location, Movement, Palm Orientation, and Non-Manual Markers", "Volume, Pitch, Speed, Rhyme, and Spelling", "Color, Font, Size, Page, and Margin", "Only handshape"], correct: 0, explanation: "Changing any one of the 5 parameters can change the meaning of a sign!" },
        { q: "Which hand should you use as your primary (dominant) signing hand?", options: ["Stay consistent with the hand you naturally write/lead with (right or left)", "Switch dominant hands mid-word randomly", "Use only your pinky finger", "Never use your non-dominant hand for support"], correct: 0, explanation: "Consistent dominant-hand signing makes you clear and easy to read." },
        { q: "How do you get a Deaf person's attention politely?", options: ["A gentle tap on the shoulder or a small friendly wave in their line of sight", "Yelling loudly from behind them", "Grabbing their hands while they are signing", "Ignoring eye contact"], correct: 0, explanation: "Gentle shoulder taps or a polite visual wave respect Deaf culture etiquette." },
        { q: "Why is eye contact so important during an ASL conversation?", options: ["ASL is a visual language—looking away is like plugging your ears during a spoken conversation", "It doesn't matter where you look", "You should stare only at the floor", "You should watch only your own hands"], correct: 0, explanation: "Maintaining natural eye contact shows respect and lets you catch both signs and facial grammar." },
        { q: "Is ASL just English translated word-for-word on the hands?", options: ["No—ASL is its own complete visual language with its own Topic-Comment grammar", "Yes, it is identical to spoken English word order", "No, ASL has no grammar at all", "ASL only has 26 letters and no words"], correct: 0, explanation: "ASL is a rich, independent natural language with Topic-Comment sentence structure." },
        { q: "What is the best way to practice fingerspelling cleanly?", options: ["Keep your hand steady at comfortable shoulder height without bouncing between letters", "Bounce your hand wildly up and down for every letter", "Hide your hand behind your back", "Spell as fast as possible even if blurry"], correct: 0, explanation: "Smooth, steady hand positioning makes fingerspelling easy to read—accuracy first, speed second!" },
        { q: "In Deaf culture, who helped establish the first permanent American school for the Deaf in 1817?", options: ["Thomas Hopkins Gallaudet and Laurent Clerc", "George Washington and Ben Franklin", "Isaac Newton and Galileo", "Shakespeare"], correct: 0, explanation: "Laurent Clerc and Thomas Gallaudet co-founded the American School for the Deaf in Hartford, Connecticut." },
        { q: "Where should you look when someone else is signing to you?", options: ["At their face/upper chest area so you see facial expressions AND hand signs together", "Directly at the tips of their fingers only", "Down at your shoes", "Out the window"], correct: 0, explanation: "Focusing on their face lets your peripheral vision smoothly capture every hand movement and facial cue." },
        { q: `How can practicing "${cleanTopic}" daily make you fluent in ASL faster?`, options: ["5–10 minutes of daily signing in a mirror or with family builds muscle memory quickly", "Only reading about signs once a month without moving your hands", "Never practicing facial expressions", "Skipping greetings"], correct: 0, explanation: "Consistent daily visual practice builds fluent handshapes and recognition." },
        { q: "When signing numbers 1–5 in ASL (standalone counting), which way does your palm usually face?", options: ["Inward toward yourself (for 1–5), then outward for 6–9", "Always pointing straight down at the floor", "Always facing behind your ear", "Palm orientation never matters"], correct: 0, explanation: "Numbers 1–5 typically face inward when counting, while 6–9 face outward." },
        { q: "What is a great polite phrase to learn on Day 1 of ASL?", options: ["NICE-MEET-YOU, PLEASE, THANK-YOU, and SLOW-DOWN / AGAIN-PLEASE", "Only complicated medical words", "No polite words are needed", "Just pointing randomly"], correct: 0, explanation: "Warm greetings and 'Again, please' help you enjoy real conversations right away!" },
        { q: "How does learning ASL help serve your community and church?", options: ["It welcomes Deaf neighbors and friends into warm fellowship and clear communication", "It has no practical use", "It only works on paper", "It replaces learning to read"], correct: 0, explanation: "ASL opens doors to real friendship, ministry, and careers in interpreting and education." },
        { q: "What should you do if you forget an ASL sign mid-conversation?", options: ["Calmly fingerspell the word or describe it visually—never panic!", "Walk away immediately", "Wave randomly", "Stop trying to learn ASL"], correct: 0, explanation: "Fingerspelling or describing the concept keeps the conversation flowing naturally." }
      ],
      coding: [
        { q: "What is an Algorithm in coding?", options: ["A clear, step-by-step set of instructions that solves a problem", "A broken computer screen", "A type of battery", "Random guessing"], correct: 0, explanation: "Every program is built from exact step-by-step algorithms." },
        { q: "What does a Variable do in a program or video game?", options: ["Stores a value (like score, player name, or timer) that can change while the program runs", "Deletes the whole computer", "Only draws circles", "Turns off the monitor"], correct: 0, explanation: "Think of a variable like a labeled box holding data you can read and update." },
        { q: "Why do programmers use Loops (like `for` or `while`)?", options: ["To repeat a block of code cleanly without copying and pasting it 100 times", "To slow down the computer", "To erase variables", "Only to change font color"], correct: 0, explanation: "Loops automate repetition cleanly and accurately." },
        { q: "What does an `if / else` Conditional statement allow a game or app to do?", options: ["Make smart decisions depending on whether a condition is true or false", "Ignore all user clicks", "Run every line backwards", "Print only blank spaces"], correct: 0, explanation: "Conditionals power game rules (e.g., IF health == 0, show Game Over; ELSE keep playing)." },
        { q: "What is Debugging?", options: ["Finding and fixing mistakes (bugs) in your code step by step", "Adding insects to a keyboard", "Throwing away your laptop when an error appears", "Never testing your code"], correct: 0, explanation: "Every real developer debugs daily—error messages are helpful clues!" },
        { q: "What is a Function in programming?", options: ["A named, reusable block of code you can call whenever you need that task done", "A single typo", "A hardware cable", "A broken loop"], correct: 0, explanation: "Functions keep programs clean, organized, and easy to maintain." },
        { q: "How do computers store all text, music, and images deep down?", options: ["Using Binary numbers made of 0s and 1s (bits)", "Using tiny handwritten notes inside the screen", "Using Roman numerals only", "Using water droplets"], correct: 0, explanation: "Every digital file is encoded in binary (0s and 1s)." },
        { q: "In web design, what does HTML control vs. CSS?", options: ["HTML builds the page structure/content; CSS controls colors, fonts, and visual layout", "HTML only picks colors; CSS writes passwords", "They do the exact same thing", "Neither is used on websites"], correct: 0, explanation: "HTML = skeleton/structure, CSS = styling/paint, JavaScript = interactivity!" },
        { q: "What is a smart cybersecurity habit every student should practice?", options: ["Use strong unique passwords, never share private info with strangers, and watch out for phishing links", "Use '123456' for every account", "Click every random pop-up prize link", "Post your home address online"], correct: 0, explanation: "Strong passwords and healthy skepticism protect your accounts and family." },
        { q: "When using AI tools responsibly, what should you ALWAYS do?", options: ["Fact-check important answers, think for yourself, and never let AI do your learning for you", "Copy everything blindly without checking", "Share private passwords with chatbots", "Assume AI can never make a mistake"], correct: 0, explanation: "AI is a helpful tool when guided by human wisdom, verification, and honesty." },
        { q: "What is the best order for building a new game or app?", options: ["Plan on paper → Build a small piece → Test & Debug → Polish & Expand", "Write 1,000 lines without ever testing", "Skip planning completely", "Quit on the first error"], correct: 0, explanation: "Small, testable steps make complex software easy and fun to build." },
        { q: "In Python, what does `print('Hello!')` do?", options: ["Displays the text Hello! on the screen", "Turns on a paper printer automatically", "Deletes the file", "Multiplies two numbers"], correct: 0, explanation: "`print()` outputs text or variable values to the console." },
        { q: "What is a List (or Array) in coding?", options: ["An ordered collection that holds multiple items (like a player's inventory or high scores)", "A single yes/no switch", "A broken cable", "A font style"], correct: 0, explanation: "Lists let programs store and loop through many values cleanly." },
        { q: "What happens if an `if` condition evaluates to `false`?", options: ["The program skips the `if` block and runs the `else` block (if one exists)", "The computer shuts off", "It runs the `if` block twice", "It deletes the variable"], correct: 0, explanation: "Only the matching branch executes." },
        { q: "Why are comments (`//` or `#`) useful inside code?", options: ["They explain in plain English what a section of code does so humans can read it later", "They make games run 10x slower", "They cause syntax errors", "Computers read them as passwords"], correct: 0, explanation: "Good comments make your code easy for your future self and teammates to understand." },
        { q: "What does a coordinate `(x, y)` control in 2D game design?", options: ["A character's horizontal (left/right) and vertical (up/down) position on the screen", "Only the background music volume", "The battery percentage", "The Wi-Fi signal"], correct: 0, explanation: "Changing x moves left/right; changing y moves up/down!" },
        { q: "What should you check first when your code doesn't work as expected?", options: ["Read the error message/line number and check spelling, punctuation, and variable values", "Guess randomly without looking at the code", "Delete the entire project immediately", "Unplug the monitor"], correct: 0, explanation: "Careful reading of error clues solves 90% of bugs in seconds." }
      ],
      art: [
        { q: "What are the three Primary Colors in traditional painting?", options: ["Red, Yellow, and Blue", "Green, Orange, and Purple", "Black, Gray, and White", "Pink, Brown, and Teal"], correct: 0, explanation: "Red, Yellow, and Blue mix to form secondary colors (Orange, Green, Purple)." },
        { q: "What does 'Value' mean in drawing and shading?", options: ["How light or dark an area appears, creating the illusion of 3D form", "How expensive the pencil costs", "The number of pages in a sketchbook", "Only bright neon colors"], correct: 0, explanation: "Value contrast (highlights, midtones, shadows) makes flat drawings pop into 3D!" },
        { q: "How do artists make complex objects (like animals or buildings) much easier to draw?", options: ["Start lightly by breaking the subject into simple basic shapes (circles, boxes, cylinders)", "Press as hard as possible on the very first line", "Never sketch guidelines", "Give up if the first stroke isn't perfect"], correct: 0, explanation: "Light basic shapes establish accurate proportions before adding details." },
        { q: "In One-Point Perspective, where do parallel lines (like railroad tracks or road edges) appear to meet?", options: ["At a single Vanishing Point on the horizon line", "In four random corners", "Nowhere—they bend upward", "Behind the sketchbook"], correct: 0, explanation: "A vanishing point on the horizon line creates realistic depth." },
        { q: "Which colors are considered 'Warm Colors' on the color wheel?", options: ["Red, Orange, and Yellow", "Blue, Green, and Violet", "Black and Silver", "Only White"], correct: 0, explanation: "Warm colors feel energetic and sunny; cool colors (blue, green, purple) feel calm and recede into distance." },
        { q: "What is the 'Rule of Thirds' in art and photography composition?", options: ["Placing your main subject slightly off-center along a 3×3 grid for a more dynamic, balanced image", "Cutting your paper into three tiny pieces", "Using only three pencil strokes", "Drawing everything dead-center only"], correct: 0, explanation: "Off-center focal points naturally draw the viewer's eye through the scene." },
        { q: "What creates a realistic shadow on a sphere or apple?", options: ["Observing the light source direction and smoothly shading from bright highlight to darker shadow", "Coloring the whole object one flat shade", "Drawing heavy black outlines everywhere", "Ignoring where the light comes from"], correct: 0, explanation: "Knowing your light source tells you exactly where highlights and cast shadows belong." },
        { q: "What are Complementary Colors (like Blue & Orange or Red & Green)?", options: ["Colors directly opposite each other on the color wheel that create strong visual contrast", "Colors right next to each other", "Only shades of gray", "Colors that can never be used together"], correct: 0, explanation: "Complementary pairs make each other pop vibrantly." },
        { q: "Why do master artists like Leonardo da Vinci keep daily sketchbooks?", options: ["Observing and sketching regularly trains both your eye and your hand to improve steadily", "Only to show finished masterpieces", "Because they never made mistakes", "To avoid practicing"], correct: 0, explanation: "Every great artist fills sketchbooks with rough studies, experiments, and practice." },
        { q: "What is 'Negative Space' in a drawing?", options: ["The empty background space around and between your main subject", "A bad mood while drawing", "Only dark black paint", "Erasing the whole page"], correct: 0, explanation: "Paying attention to negative space shapes makes your proportions dramatically more accurate." },
        { q: "In Music, what is the difference between Beat and Rhythm?", options: ["Beat is the steady pulse (like a heartbeat); Rhythm is the pattern of long and short notes over that beat", "They are completely unrelated to music", "Beat is only drums and rhythm is only lyrics", "Music never has a steady pulse"], correct: 0, explanation: "A steady beat anchors every melody and rhythm pattern." },
        { q: "What does a Major scale generally sound like compared to a Minor scale?", options: ["Major typically sounds bright and joyful; Minor often sounds thoughtful, mysterious, or reflective", "Major is always silent", "Minor can only be played loudly", "They sound identical"], correct: 0, explanation: "Composers choose major and minor scales to express rich emotions." },
        { q: "Why should artists sketch lightly first before adding dark shading or ink?", options: ["Light lines are easy to adjust and erase cleanly without damaging the paper", "Because dark pencils don't work", "So nobody can ever see the final art", "To finish in 5 seconds"], correct: 0, explanation: "Light construction lines give you freedom to refine shapes cleanly." },
        { q: "How does creating art or music reflect being made in God's image?", options: ["God is the Master Creator, and creating beauty reflects His creativity, order, and joy", "Art has nothing to do with beauty or purpose", "Only robots can appreciate art", "Creativity is discouraged"], correct: 0, explanation: "Exodus 31 celebrates God gifting artists and craftspeople with wisdom and skill." },
        { q: "What is a helpful way to improve a finished drawing or musical piece?", options: ["Step back, notice one thing that worked well and one specific detail to refine on your next draft", "Throw it away in frustration", "Never look closely at your work", "Compare yourself harshly to others"], correct: 0, explanation: "Kind, specific self-review turns every project into steady growth." },
        { q: "What is 'Texture' in visual art?", options: ["How a surface actually feels—or looks like it would feel (rough bark, soft fur, smooth glass)", "Only the size of the frame", "The artist's signature", "The price tag"], correct: 0, explanation: "Varied brushstrokes and pencil marks bring believable texture to life." },
        { q: "Which careers use visual art, design, and music skills every day?", options: ["Architecture, animation, product design, graphic design, film scoring, and illustration", "None—art is only a hobby", "Only museum security", "No modern jobs use design"], correct: 0, explanation: "Everything from apps and books to buildings and films depends on skilled creative designers." }
      ],
      general: [
        { q: `What is the smartest first step when learning a brand-new topic like "${cleanTopic}"?`, options: ["Grasp the big picture and main idea first, then connect the details step by step", "Memorize random words without knowing what they mean", "Skip straight to the final test without reading", "Ignore examples"], correct: 0, explanation: "Understanding the big picture gives every detail a place to stick." },
        { q: "What makes a written answer strong and convincing in any subject?", options: ["A clear main point backed up by a specific fact, quote, or example", "A one-word guess with zero explanation", "Repeating the prompt without answering it", "Unrelated filler sentences"], correct: 0, explanation: "Main Point + Specific Evidence + Clear Reasoning works across every grade and subject." },
        { q: "Why does explaining a lesson out loud in your own words help so much?", options: ["Active recall locks the concept into long-term memory and shows right away if anything is fuzzy", "It lets you skip reading", "It erases what you learned", "It only works for adults"], correct: 0, explanation: "If you can teach it simply in your own words, you truly own it." },
        { q: "In history and literature, what does looking for 'Cause and Effect' reveal?", options: ["Why key events or choices happened and what consequences followed from them", "Only how many pages are in the chapter", "Random unrelated trivia", "Only the cover color of the book"], correct: 0, explanation: "Cause and effect turns dates and events into a meaningful human story." },
        { q: "When reading a difficult paragraph, what is the best strategy?", options: ["Break it into one sentence at a time, look up unfamiliar words, and restate the idea in plain English", "Skip the whole chapter immediately", "Read faster without thinking", "Guess what it might say"], correct: 0, explanation: "Slowing down and translating tough sentences into plain words builds strong reading skill." },
        { q: "In career, finance, and life skills, what should you ALWAYS do before signing a contract or spending big money?", options: ["Read the written terms carefully, check the real math, and weigh the risks", "Rush in because someone promised overnight riches", "Ignore fees and fine print", "Never ask a parent or mentor for advice"], correct: 0, explanation: "Running the numbers and reading written agreements protects your future." },
        { q: "Why does Christ Infinity Academy require at least 85% on Exit Tickets and Weekly Unit Tests?", options: ["To make sure you truly master each building block before moving on so you never fall behind", "To make school stressful", "So students guess randomly", "Because 85 is a random number"], correct: 0, explanation: "Mastery learning ensures rock-solid foundations without learning gaps." },
        { q: "What happens if you score below 85% on a quiz?", options: ["You review the Step 2 lesson, see which questions need work, and retry until you master it—zero permanent failure!", "You are kicked out of the course forever", "The academy skips ahead anyway", "Nothing is tracked"], correct: 0, explanation: "Mistakes are part of learning! Reviewing and retrying builds real mastery." },
        { q: "What is the difference between a Primary Source and a Secondary Source in history?", options: ["A Primary Source comes directly from someone who lived through the event; a Secondary Source analyzes it later", "Primary sources are always fictional", "Secondary sources are written first", "There is no difference"], correct: 0, explanation: "Diaries, letters, speeches, and treaties are primary sources; textbooks are secondary sources." },
        { q: "How does a 5-day weekly rhythm (4 daily lessons + Day 5 Weekly Unit Test) help students succeed?", options: ["Consistent daily bites prevent cramming and lock concepts into long-term memory", "It forces you to memorize a whole year in one night", "It removes all practice", "It hides your progress from parents"], correct: 0, explanation: "Steady daily learning + weekly review beats last-minute cramming every time." },
        { q: "What is 'Integrity' in schoolwork and future careers?", options: ["Doing honest work, keeping your promises, and doing what is right even when nobody is watching", "Cutting corners whenever possible", "Copying answers without learning", "Blaming others for mistakes"], correct: 0, explanation: "Integrity builds character and earns lifelong trust." },
        { q: "Why is asking good questions a sign of a strong learner?", options: ["Thoughtful questions uncover missing links and deepen real understanding", "Smart students never ask questions", "Questions waste time", "Only teachers are allowed to ask questions"], correct: 0, explanation: "Curiosity and honest questions accelerate learning across every subject." },
        { q: "What is the best habit when organizing a multi-sentence paragraph?", options: ["Start with a clear topic sentence, add 2–3 supporting details, and wrap up with a concluding thought", "Write one giant run-on sentence with no periods", "List random words", "Forget to check spelling"], correct: 0, explanation: "Clear structure makes your ideas effortless for readers to follow." },
        { q: "How do practical skills (budgeting, clear writing, communication, and discipline) help EVERY career path?", options: ["Whether you go to college, launch a business, or enter a licensed trade, those habits multiply your success", "They only matter in one single job", "They aren't useful after middle school", "Only robots need communication skills"], correct: 0, explanation: "Strong character, clear thinking, and financial wisdom pay off in every calling." },
        { q: "When comparing two viewpoints or historical leaders, what should a fair thinker do?", options: ["Examine each side's actual words, motives, and evidence carefully before judging", "Listen to only one rumor", "Ignore primary evidence", "Decide based solely on loudness"], correct: 0, explanation: "Fair-minded analysis grounded in evidence is the hallmark of wisdom." },
        { q: "What is a smart way to prepare for Day 5's 20-question Weekly Unit Test?", options: ["Skim your Step 2 takeaways and practice work from Days 1–4, then take the test calmly one question at a time", "Stay up all night panicking", "Never review Days 1–4", "Click answers as fast as possible without reading"], correct: 0, explanation: "Calm review of your week's takeaways makes the 20-question unit test feel straightforward." },
        { q: "What is the ultimate purpose of education at Christ Infinity Academy?", options: ["Growing in wisdom, faith, strong academics, and practical life skills to serve God and others well", "Memorizing random trivia and forgetting it next week", "Competing unfairly against classmates", "Doing busywork with no real-world purpose"], correct: 0, explanation: "True education forms the whole person—mind, heart, character, and vocation." }
      ]
    };

    const pool = extrasByCat[subjectCategory] || extrasByCat.general;
    let poolIdx = (weekNum * 3 + dayIdx * 2) % pool.length;
    const seenQs = new Set(out.map((x) => x.q));

    while (out.length < targetCount && seenQs.size < out.length + pool.length + 5) {
      const cand = pool[poolIdx % pool.length];
      poolIdx++;
      if (!seenQs.has(cand.q)) {
        seenQs.add(cand.q);
        out.push(shuffleQuestionOptions(cand, weekNum * 17 + dayIdx * 5 + out.length));
      } else {
        break;
      }
    }
    return out.slice(0, targetCount);
  }

  // ==================== 3. INTERACTIVE MATH LESSON ENGINE (GRADES K–12) ====================
  function buildMathPack(course, weekNum, dayIdx, cleanTopic, quizTargetCount) {
    const grade = (course.gradeLevels && course.gradeLevels[0]) ?? 6;
    const d = dayIdx;
    const w = weekNum;
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

    let pack;
    if (grade <= 2) {
      const a1 = 5 + d * 2;
      const b1 = 4 + d;
      const subA = 14 + d * 2;
      const subB = 5 + d;
      const step = [2, 5, 10, 2, 5][d];
      const dimes = 2 + d;
      const tens = 3 + d;
      const ones = 4 + (d % 4);
      pack = {
        objectives: [
          `Practice "${cleanTopic}" with fun, clear counting and number patterns`,
          "Add and subtract numbers smoothly using a number line and fact families",
          "Count tens, ones, and coins accurately with confidence"
        ],
        anchorVerse: "Psalm 147:4 — He telleth the number of the stars; he calleth them all by their names.",
        bigIdea: "Numbers help us count, share fairly, tell time, and build cool things! Take one small step at a time and you'll become a math superstar.",
        sections: [
          {
            stepBadge: "PART 1 · COUNTING & MAKING 10",
            heading: "Friendly Number Friends That Make Adding Easy",
            body: `Did you know <strong>10</strong> is your best friend in math? When you know pairs that make 10 (like <code>6 + 4 = 10</code>, <code>7 + 3 = 10</code>, <code>8 + 2 = 10</code>), adding bigger numbers becomes super easy!<br/><br/>For example, to add <strong>8 + 5</strong>, split 5 into <strong>2 + 3</strong>. First make 10 (<code>8 + 2 = 10</code>), then add the leftover 3 → <strong>13</strong>!`,
            keyTakeaway: "Make a friendly 10 first, then add the leftover ones!"
          },
          {
            stepBadge: "PART 2 · PLACE VALUE (TENS & ONES)",
            heading: "Bundling Groups of Ten",
            body: `In a two-digit number like <strong>47</strong>, the <strong>4</strong> is in the tens place (4 groups of ten = <strong>40</strong>) and the <strong>7</strong> is in the ones place (<strong>7</strong> single blocks). Together: <code>40 + 7 = 47</code>!`,
            keyTakeaway: "Left digit = tens bundles; right digit = single ones."
          },
          {
            stepBadge: "PART 3 · COINS & SKIP COUNTING",
            heading: "Counting Fast by 2s, 5s, and 10s",
            body: `Skip counting lets you count money fast! Count <strong>dimes by 10s</strong> (10, 20, 30, 40...) and <strong>nickels by 5s</strong> (5, 10, 15, 20...).`,
            keyTakeaway: "1 dime = 10¢ · 1 nickel = 5¢ · 1 quarter = 25¢."
          }
        ],
        workedExamples: [
          {
            badge: "WORKED EXAMPLE 1 · ADDING BY MAKING 10",
            title: "Add: 8 + 6",
            problem: "How do we add 8 + 6 cleanly?",
            step1: "Step 1 — How many more does 8 need to make 10? It needs 2!",
            step2: "Step 2 — Split 6 into 2 + 4. Now do 8 + 2 = 10.",
            step3: "Step 3 — Add the leftover 4: 10 + 4 = 14!",
            pitfall: "Double-check by counting up 6 fingers from 8: 9, 10, 11, 12, 13, 14 ✓."
          }
        ],
        problems: [
          { prompt: `1. Add: ${a1} + ${b1} =`, answer: String(a1 + b1), hint: `Start at ${a1} and count up ${b1} more.` },
          { prompt: `2. Subtract: ${subA} − ${subB} =`, answer: String(subA - subB), hint: `Start at ${subA} and count backward ${subB}.` },
          { prompt: `3. Skip count by ${step}s: ${step}, ${step * 2}, ${step * 3}, ___`, answer: String(step * 4), hint: `Add ${step} to ${step * 3}.` },
          { prompt: `4. How many cents is ${dimes} dimes (number only)?`, answer: String(dimes * 10), hint: `Count by 10s ${dimes} times!` },
          { prompt: `5. What number has ${tens} tens and ${ones} ones?`, answer: String(tens * 10 + ones), hint: `${tens * 10} + ${ones} = ?` }
        ],
        writingPrompt: `In 1–2 simple sentences, tell how you solved ${a1} + ${b1} and how much ${dimes} dimes are worth.`,
        writingExemplar: `I started at ${a1} and counted up ${b1} to get ${a1 + b1}. Since each dime is worth 10 cents, ${dimes} dimes equals ${dimes * 10} cents.`
      };
    } else if (grade <= 5) {
      // Grades 3–5 (including Grade 5!): Multiplication, Long Division, Fractions, Decimals, Area & Volume
      const mA = 7 + d;
      const mB = 6 + (w % 6);
      const divD = 4 + (d % 5);
      const divQ = 8 + d * 2;
      const divN = divD * divQ;
      const fDen = [8, 10, 12, 8, 10][d];
      const f1 = 2 + (d % 3);
      const f2 = 3 + (d % 2);
      const rectL = 8 + d;
      const rectW = 5 + (w % 4);
      const eqX = 6 + d * 2;
      const eqAdd = 9 + d;
      pack = {
        objectives: [
          `Master "${cleanTopic}" step by step with crystal-clear elementary math methods`,
          "Multiply and divide multi-digit numbers accurately and check your work with inverse operations",
          "Add fractions, compute rectangle area/volume, and solve real-life word problems"
        ],
        anchorVerse: "Proverbs 16:11 — A just weight and balance are the LORD's.",
        bigIdea: "Multiplication is just fast repeated addition, division is fair sharing into equal groups, and fractions are equal slices of a whole! Once you see the picture, the math clicks.",
        sections: [
          {
            stepBadge: "PART 1 · MULTIPLICATION & DIVISION CONNECTION",
            heading: "How Multiplication & Division Undo Each Other",
            body: `Multiplication and division are opposite twins! Knowing <strong>${divD} × ${divQ} = ${divN}</strong> immediately tells you <strong>${divN} ÷ ${divD} = ${divQ}</strong>.<br/><br/>When dividing a bigger number using <strong>Long Division</strong>, remember the 4-word chant: <strong>D</strong>oes <strong>M</strong>cDonald's <strong>S</strong>ell <strong>B</strong>urgers? → <strong>Divide, Multiply, Subtract, Bring down</strong>!`,
            keyTakeaway: "Always check a division answer by multiplying your quotient × divisor—you should get your starting number back!"
          },
          {
            stepBadge: "PART 2 · FRACTIONS & DECIMALS MADE VISUAL",
            heading: "Slices of a Whole Pizza (Numerator & Denominator)",
            body: `In a fraction like <strong>3/8</strong>, the bottom number (<strong>Denominator = 8</strong>) tells you how many equal slices the whole pizza was cut into. The top number (<strong>Numerator = 3</strong>) tells you how many slices you have.<br/><br/>When two fractions have the <strong>same denominator</strong> (same slice size!), just add the tops and keep the bottom the same: <code>2/8 + 3/8 = 5/8</code>!`,
            keyTakeaway: "NEVER add denominators when adding fractions! Add the numerators (tops) and keep the denominator (bottom)."
          },
          {
            stepBadge: "PART 3 · AREA, PERIMETER & MYSTERY NUMBERS",
            heading: "Measuring Spaces & Finding Missing Values",
            body: `<strong>Perimeter</strong> is the fence all the way AROUND a shape (add all sides). <strong>Area</strong> is the carpet covering the INSIDE (<code>length × width</code>). For a 3D box, <strong>Volume</strong> is <code>length × width × height</code>!`,
            keyTakeaway: "Perimeter = around the edge (add sides) · Area = inside surface (l × w) · Volume = 3D space (l × w × h)."
          }
        ],
        workedExamples: [
          {
            badge: "WORKED EXAMPLE 1 · MULTI-DIGIT MULTIPLICATION",
            title: "Multiply: 24 × 6 Using Place Value",
            problem: "Problem: Compute 24 × 6 without getting mixed up.",
            step1: "Step 1 — Split 24 into tens and ones: 20 + 4.",
            step2: "Step 2 — Multiply each part by 6: (20 × 6 = 120) and (4 × 6 = 24).",
            step3: "Step 3 — Add them together: 120 + 24 = 144!",
            pitfall: "Splitting big numbers into tens + ones makes mental math super fast and accurate."
          },
          {
            badge: "WORKED EXAMPLE 2 · FRACTION ADDITION",
            title: "Add: 3/10 + 4/10",
            problem: "Problem: You walk 3/10 mile to the park and 4/10 mile home. How far did you walk?",
            step1: "Step 1 — Check denominators: both are 10 (same size pieces!).",
            step2: "Step 2 — Add the numerators: 3 + 4 = 7.",
            step3: "Step 3 — Keep the denominator 10: Answer = 7/10 mile!",
            pitfall: "Don't write 7/20! The slice size stays tenths (10)."
          }
        ],
        problems: [
          { prompt: `1. Multiplication: Compute ${mA} × ${mB} =`, answer: String(mA * mB), hint: `Break it into friendly groups or count ${mA} times ${mB}.` },
          { prompt: `2. Division: Compute ${divN} ÷ ${divD} =`, answer: String(divQ), hint: `Ask: ${divD} times what number equals ${divN}?` },
          { prompt: `3. Fractions: Add ${f1}/${fDen} + ${f2}/${fDen} (type as fraction like 5/8):`, answer: `${f1 + f2}/${fDen}`, hint: `Add the top numbers (${f1} + ${f2}) and keep the bottom number (${fDen}).` },
          { prompt: `4. Area: A rectangular soccer drill zone is ${rectL} yards long and ${rectW} yards wide. Find its area (number only):`, answer: String(rectL * rectW), hint: `Area = length × width = ${rectL} × ${rectW}.` },
          { prompt: `5. Mystery Number: Solve x + ${eqAdd} = ${eqX + eqAdd}. What is x?`, answer: String(eqX), hint: `Subtract ${eqAdd} from ${eqX + eqAdd}.` }
        ],
        writingPrompt: `In 2–3 clear sentences, explain how you checked your division answer for ${divN} ÷ ${divD} and explain the difference between Area and Perimeter.`,
        writingExemplar: `I checked ${divN} ÷ ${divD} = ${divQ} by multiplying ${divD} × ${divQ} to confirm it equals ${divN}. Perimeter measures the total distance around the outside edge of a shape, while Area measures the flat space inside it (length × width).`
      };
    } else if (grade === 6) {
      const a1 = 12 + d * 6;
      const b1 = 18 + d * 6;
      const g1 = gcd(a1, b1);
      const ordA = 4 + d;
      const ordB = 3 + d;
      const pctBase = (4 + d) * 20;
      const pctVal = [25, 20, 50, 10, 25][d];
      const triB = 8 + d * 2;
      const triH = 5 + (d % 3);
      const eqX = 4 + d;
      const eqRight = eqX * 3 + 7;
      pack = {
        objectives: [
          `Understand "${cleanTopic}" clearly using plain-English Grade 6 math rules`,
          "Apply PEMDAS (Order of Operations), GCF/Prime Factorization, Percents, and Triangle Area accurately",
          "Solve introductory equations like 3x + 7 = 22 and check every answer"
        ],
        anchorVerse: "1 Corinthians 14:40 — Let all things be done decently and in order.",
        bigIdea: "Grade 6 Math turns arithmetic into real problem-solving power: prime numbers, order of operations, ratios, percents, geometry area, and solving for your first unknown variable x.",
        sections: [
          {
            stepBadge: "PART 1 · ORDER OF OPERATIONS & FACTORS",
            heading: "PEMDAS Traffic Rules & Prime Building Blocks",
            body: `In <strong>5 + 3 × 4</strong>, math always follows <strong>PEMDAS</strong> (Parentheses → Exponents → Multiply/Divide left to right → Add/Subtract left to right), so <code>3 × 4 = 12</code> happens first, then <code>5 + 12 = 17</code>!<br/><br/>And to find the <strong>Greatest Common Factor (GCF)</strong> of two numbers like 24 and 36, list their factors and grab the largest number in BOTH lists (<strong>12</strong>).`,
            keyTakeaway: "Multiply & Divide ALWAYS come before Add & Subtract unless parentheses say otherwise."
          },
          {
            stepBadge: "PART 2 · PERCENTS, RATIOS & TRIANGLE AREA",
            heading: "Turning Real-Life Scenarios Into Simple Formulas",
            body: `<strong>Percent</strong> means "out of 100." So <strong>25% of 80</strong> is simply <code>0.25 × 80 = 20</code> (or 1/4 of 80). For geometry: a rectangle's area is <code>l × w</code>, and a triangle is half a rectangle, so its area is <code>(base × height) ÷ 2</code>.`,
            keyTakeaway: "Percent = out of 100 · Triangle Area = (base × height) ÷ 2."
          },
          {
            stepBadge: "PART 3 · INTRO TO SOLVING FOR X",
            heading: "Unwrapping Your First Algebra Equations",
            body: `For <strong>3x + 7 = 22</strong>, undo addition first (subtract 7 from both sides → <code>3x = 15</code>), then undo multiplication (divide by 3 → <code>x = 5</code>). Always plug 5 back in: <code>3(5) + 7 = 22 ✓</code>!`,
            keyTakeaway: "Keep both sides balanced and always plug your answer back in to check."
          }
        ],
        workedExamples: [
          {
            badge: "WORKED EXAMPLE 1 · PEMDAS",
            title: "Solve: 8 + 5 × (6 − 2)",
            problem: "Problem: Evaluate 8 + 5 × (6 − 2).",
            step1: "Step 1 (Parentheses): 6 − 2 = 4 → 8 + 5 × 4.",
            step2: "Step 2 (Multiply): 5 × 4 = 20 → 8 + 20.",
            step3: "Step 3 (Add): 8 + 20 = 28.",
            pitfall: "Adding 8 + 5 first gives the wrong answer (52)—multiply before adding!"
          },
          {
            badge: "WORKED EXAMPLE 2 · PERCENT DISCOUNT",
            title: "Find 20% of 150",
            problem: "Problem: A $150 bike is 20% off. How much do you save?",
            step1: "Step 1: Turn 20% into 0.20 (or 1/5).",
            step2: "Step 2: Multiply 150 × 0.20 = 30.",
            step3: "Step 3: You save $30!",
            pitfall: "Check whether the problem asks for the savings ($30) or final price ($120)."
          }
        ],
        problems: [
          { prompt: `1. GCF: Find the Greatest Common Factor of ${a1} and ${b1}:`, answer: String(g1), hint: `List factors of ${a1} and ${b1} and pick the biggest shared factor.` },
          { prompt: `2. PEMDAS: Solve ${ordA} + ${ordB} × 2 =`, answer: String(ordA + ordB * 2), hint: `Multiply ${ordB} × 2 first, then add ${ordA}.` },
          { prompt: `3. Percent: Find ${pctVal}% of ${pctBase}:`, answer: String((pctBase * pctVal) / 100), hint: `Multiply ${pctVal / 100} × ${pctBase}.` },
          { prompt: `4. Triangle Area: Base = ${triB} in, Height = ${triH} in. Find the area:`, answer: String((triB * triH) / 2), hint: `Multiply ${triB} × ${triH}, then divide by 2.` },
          { prompt: `5. Solve for x: 3x + 7 = ${eqRight}. What is x?`, answer: String(eqX), hint: `Subtract 7 from ${eqRight}, then divide by 3.` }
        ],
        writingPrompt: `Explain in 2–3 clear sentences how you solved 3x + 7 = ${eqRight} and why PEMDAS matters in ${ordA} + ${ordB} × 2.`,
        writingExemplar: `To solve 3x + 7 = ${eqRight}, I subtracted 7 to get 3x = ${eqRight - 7} and divided by 3 to get x = ${eqX}. PEMDAS ensures everyone multiplies ${ordB} × 2 before adding ${ordA} so every person gets the exact same right answer.`
      };
    } else if (grade === 7) {
      const x1 = 3 + d;
      const a = 4 + (w % 3);
      const b = 5 + d * 2;
      const rhs1 = a * x1 - b;
      const negA = -(7 + d * 2);
      const posB = 12 + d * 3;
      const distX = 2 + d;
      const distRhs = 3 * (distX + 4);
      const rateDist = (45 + d * 10) * 3;
      pack = {
        objectives: [
          `Master "${cleanTopic}" with clear Pre-Algebra sign and equation rules`,
          "Compute positive and negative integer operations with zero sign slips",
          "Solve two-step equations, distributive property equations, and unit rate problems"
        ],
        anchorVerse: "Proverbs 4:7 — Wisdom is the principal thing; therefore get wisdom.",
        bigIdea: "Pre-Algebra prepares you smoothly for high school Algebra I. Think of equations like a balanced scale and negative numbers like money owed vs. earned.",
        sections: [
          {
            stepBadge: "PART 1 · NEGATIVE NUMBER RULES",
            heading: "Adding & Multiplying Integers Without Sign Mistakes",
            body: `Think of positive numbers as money you <strong>have</strong> and negative numbers as money you <strong>owe</strong> (<code>-9 + 15 = +6</code>). When multiplying/dividing: <strong>Same signs = Positive (+)</strong>; <strong>Different signs = Negative (−)</strong>.`,
            keyTakeaway: "(-a) × (-b) is ALWAYS positive; (-a) × (+b) is ALWAYS negative."
          },
          {
            stepBadge: "PART 2 · TWO-STEP & DISTRIBUTIVE EQUATIONS",
            heading: "Solving Equations Step by Step",
            body: `For <strong>4x − 9 = 19</strong>: add 9 to both sides (<code>4x = 28</code>), then divide by 4 (<code>x = 7</code>). For <strong>3(x + 4) = 27</strong>, distribute 3 to BOTH terms inside (<code>3x + 12 = 27</code>) or divide both sides by 3 first (<code>x + 4 = 9</code>)!`,
            keyTakeaway: "Always plug your solution back into the starting equation to verify."
          }
        ],
        workedExamples: [
          {
            badge: "WORKED EXAMPLE · TWO-STEP EQUATION",
            title: "Solve: 5x − 8 = 27",
            problem: "Find x when 5x − 8 = 27.",
            step1: "Step 1 — Add 8 to both sides: 5x = 35.",
            step2: "Step 2 — Divide both sides by 5: x = 7.",
            step3: "Step 3 — Check: 5(7) − 8 = 35 − 8 = 27 ✓.",
            pitfall: "Undo −8 by ADDING 8 to both sides."
          }
        ],
        problems: [
          { prompt: `1. Integers: ${negA} + ${posB} =`, answer: String(negA + posB), hint: `Combine a negative and positive by finding their difference and keeping the larger sign.` },
          { prompt: `2. Integer Multiply: (-6) × (-${3 + d}) =`, answer: String(6 * (3 + d)), hint: `Negative times negative is positive!` },
          { prompt: `3. Two-Step Equation: ${a}x − ${b} = ${rhs1}. What is x?`, answer: String(x1), hint: `Add ${b} to ${rhs1}, then divide by ${a}.` },
          { prompt: `4. Distributive Equation: 3(x + 4) = ${distRhs}. What is x?`, answer: String(distX), hint: `Divide both sides by 3 first, then subtract 4.` },
          { prompt: `5. Unit Rate: ${rateDist} miles in 3 hours = ___ mph`, answer: String(rateDist / 3), hint: `Divide ${rateDist} by 3.` }
        ],
        writingPrompt: `Explain step-by-step how you solved ${a}x − ${b} = ${rhs1} and why (-6) × (-${3 + d}) is positive.`,
        writingExemplar: `I added ${b} to both sides to get ${a}x = ${a * x1}, then divided by ${a} to get x = ${x1}. Multiplying two negative numbers yields a positive product.`
      };
    } else if (grade === 8) {
      const m = 2 + (d % 4);
      const x1 = 1 + d;
      const y1 = 3 + d;
      const solX = 2 + d;
      const yInt = 4 + d;
      const quadRoot = 3 + d;
      pack = {
        objectives: [
          `Master "${cleanTopic}" using Algebra I linear and quadratic methods`,
          "Find slope m = (y₂ − y₁)/(x₂ − x₁) and evaluate functions f(x) = mx + b",
          "Solve multi-step equations with variables on both sides and simple quadratics"
        ],
        anchorVerse: "Proverbs 25:2 — It is the glory of God to conceal a thing: but the honour of kings is to search out a matter.",
        bigIdea: "Algebra I turns real-world patterns into equations: slope tells you the rate of change, and the y-intercept tells you where you start.",
        sections: [
          {
            stepBadge: "PART 1 · SLOPE & LINEAR FUNCTIONS",
            heading: "Understanding y = mx + b",
            body: `Slope is <strong>Rise over Run</strong>: <code>m = (y₂ − y₁) ÷ (x₂ − x₁)</code>. In <code>f(x) = mx + b</code>, <strong>m</strong> is the steady rate of change and <strong>b</strong> is the starting value when x = 0.`,
            keyTakeaway: "Always put y-change on top and x-change on the bottom."
          },
          {
            stepBadge: "PART 2 · VARIABLES ON BOTH SIDES & QUADRATICS",
            heading: "Isolating x & Using the Zero Product Property",
            body: `Collect x-terms on one side and constants on the other, then divide. For factored quadratics like <code>(x − 5)(x + 2) = 0</code>, set each factor equal to 0!`,
            keyTakeaway: "Variables to one side, numbers to the other; for (x−a)(x−b)=0, roots are x=a and x=b."
          }
        ],
        workedExamples: [
          {
            badge: "WORKED EXAMPLE · SLOPE",
            title: "Slope through (2, 5) and (6, 17)",
            problem: "Find m through (2, 5) and (6, 17).",
            step1: "Step 1: m = (17 − 5) / (6 − 2).",
            step2: "Step 2: m = 12 / 4 = 3.",
            step3: "Step 3: Slope = 3.",
            pitfall: "Keep the order of points consistent in both top and bottom."
          }
        ],
        problems: [
          { prompt: `1. Slope through (${x1}, ${y1}) and (${x1 + 3}, ${y1 + m * 3}):`, answer: String(m), hint: `(${y1 + m * 3} − ${y1}) ÷ 3.` },
          { prompt: `2. If f(x) = ${m}x + ${yInt}, find f(4):`, answer: String(m * 4 + yInt), hint: `Plug 4 in for x.` },
          { prompt: `3. Solve 5x − 3 = ${5 * solX - 3}. What is x?`, answer: String(solX), hint: `Add 3, then divide by 5.` },
          { prompt: `4. Solve 6x − 4 = 2x + ${4 * solX - 4}. What is x?`, answer: String(solX), hint: `Subtract 2x from both sides first.` },
          { prompt: `5. Positive solution to x² = ${quadRoot * quadRoot}:`, answer: String(quadRoot), hint: `Take the square root of ${quadRoot * quadRoot}.` }
        ],
        writingPrompt: `Explain in 2–3 sentences what slope m = ${m} and y-intercept b = ${yInt} represent in f(x) = ${m}x + ${yInt}.`,
        writingExemplar: `In f(x) = ${m}x + ${yInt}, ${yInt} is the starting y-value at x = 0, and ${m} is the slope meaning y increases by ${m} for every +1 step in x.`
      };
    } else if (grade === 9 || grade === 10) {
      const triples = [[3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 15, 17], [9, 12, 15]];
      const [legA, legB, hypC] = triples[d % triples.length];
      const ang1 = 42 + d * 7;
      const ang2 = 58 + d * 3;
      const suppAng = 65 + d * 8;
      const polySides = 5 + d;
      const rad = 3 + d;
      pack = {
        objectives: [
          `Apply "${cleanTopic}" to concrete Geometry & Algebra II problems`,
          "Use the Pythagorean Theorem (a² + b² = c²) to solve right triangles",
          "Compute triangle angles, polygon angle sums (n−2)×180°, and exact circle areas"
        ],
        anchorVerse: "Job 38:5 — Who hath laid the measures thereof, if thou knowest?",
        bigIdea: "Every geometric figure obeys exact, provable laws. Master a² + b² = c², 180° angle rules, and πr² and you can measure anything.",
        sections: [
          {
            stepBadge: "PART 1 · PYTHAGOREAN THEOREM",
            heading: "a² + b² = c² in Action",
            body: `In every right triangle, legs <strong>a</strong> and <strong>b</strong> meet at 90°, and hypotenuse <strong>c</strong> is the longest side across from 90°: <code>a² + b² = c²</code>. Always take the square root at the end!`,
            keyTakeaway: "Hypotenuse c is always the longest side opposite the 90° angle."
          },
          {
            stepBadge: "PART 2 · ANGLES, POLYGONS & CIRCLES",
            heading: "Angle Sums & Exact π Formulas",
            body: `Triangles sum to <strong>180°</strong>; supplementary angles sum to <strong>180°</strong>; an n-sided polygon's interior angles sum to <code>(n − 2) × 180°</code>; circle area is <code>A = πr²</code>.`,
            keyTakeaway: "Triangle = 180° · n-gon = (n−2)×180° · Circle Area = πr²."
          }
        ],
        workedExamples: [
          {
            badge: "WORKED EXAMPLE · PYTHAGOREAN THEOREM",
            title: "Legs 6 and 8 → Find Hypotenuse",
            problem: "Find c if a = 6 and b = 8.",
            step1: "6² + 8² = 36 + 64 = 100.",
            step2: "c = √100 = 10.",
            step3: "Hypotenuse = 10.",
            pitfall: "Don't forget the final square root!"
          }
        ],
        problems: [
          { prompt: `1. Right triangle with legs ${legA} and ${legB}. Find hypotenuse c:`, answer: String(hypC), hint: `Compute ${legA}² + ${legB}², then take √.` },
          { prompt: `2. Triangle angles ${ang1}° and ${ang2}°. Find the 3rd angle (number):`, answer: String(180 - ang1 - ang2), hint: `Subtract both from 180.` },
          { prompt: `3. Supplement of a ${suppAng}° angle (number):`, answer: String(180 - suppAng), hint: `180 − ${suppAng}.` },
          { prompt: `4. Sum of interior angles of a ${polySides}-sided polygon (number):`, answer: String((polySides - 2) * 180), hint: `(${polySides} − 2) × 180.` },
          { prompt: `5. Area of circle with radius ${rad} is ___π (number before π):`, answer: String(rad * rad), hint: `Square the radius: ${rad}².` }
        ],
        writingPrompt: `Explain how you found hypotenuse c = ${hypC} from legs ${legA} and ${legB} and why a ${polySides}-sided polygon has ${(polySides - 2) * 180}° total interior angles.`,
        writingExemplar: `Using a² + b² = c², ${legA}² + ${legB}² = ${hypC * hypC}, whose square root is ${hypC}. A ${polySides}-sided polygon splits into ${polySides - 2} triangles, each totaling 180°, giving ${(polySides - 2) * 180}°.`
      };
    } else {
      const coeff = 2 + d;
      const exp = 3 + (w % 3);
      const derivVal = coeff * exp * Math.pow(2, exp - 1);
      const logPow = 3 + d;
      const logVal = Math.pow(2, logPow);
      const limX = 3 + d;
      pack = {
        objectives: [
          `Master "${cleanTopic}" with rigorous Pre-Calculus / AP Calculus computation`,
          "Apply the Power Rule d/dx(axⁿ) = a·n·xⁿ⁻¹ and evaluate limits directly",
          "Solve logarithms log₂(x) and verify trigonometric identities cleanly"
        ],
        anchorVerse: "Colossians 1:17 — By him all things consist.",
        bigIdea: "Higher math connects algebra, functions, trig, and calculus to model real rates of change, waves, physics, and compound financial growth.",
        sections: [
          {
            stepBadge: "PART 1 · POWER RULE & LOGARITHMS",
            heading: "Instantaneous Change & Inverse Exponents",
            body: `Power Rule: for <code>f(x) = a·xⁿ</code>, <code>f'(x) = (a·n)·xⁿ⁻¹</code>. Logarithm rule: <code>log₂(32) = 5</code> simply means <code>2⁵ = 32</code>!`,
            keyTakeaway: "Derivative = instantaneous slope · Logarithm = unknown exponent."
          },
          {
            stepBadge: "PART 2 · LIMITS & TRIG IDENTITIES",
            heading: "Direct Substitution & sin²(θ) + cos²(θ) = 1",
            body: `Evaluate limits by plugging in x first (factor if 0/0 appears), and remember the universal Pythagorean Trig Identity: <code>sin²(θ) + cos²(θ) = 1</code>.`,
            keyTakeaway: "Always check direct substitution first on limits."
          }
        ],
        workedExamples: [
          {
            badge: "WORKED EXAMPLE · POWER RULE",
            title: "f(x) = 4x³ → Find f'(2)",
            problem: "Differentiate and evaluate at x = 2.",
            step1: "f'(x) = 12x².",
            step2: "f'(2) = 12(2²) = 12 × 4.",
            step3: "f'(2) = 48.",
            pitfall: "Square 2 before multiplying by 12!"
          }
        ],
        problems: [
          { prompt: `1. Logarithm: Evaluate log₂(${logVal}) =`, answer: String(logPow), hint: `2 to what power equals ${logVal}?` },
          { prompt: `2. Derivative: If f(x) = ${coeff}x^${exp}, find f'(2) =`, answer: String(derivVal), hint: `Multiply ${coeff}×${exp}, drop exponent by 1, plug in 2.` },
          { prompt: `3. Limit: lim (x → ${limX}) of (2x + 5) =`, answer: String(2 * limX + 5), hint: `Plug in x = ${limX}.` },
          { prompt: `4. Larger root of x² − ${(2 + d) + (3 + d)}x + ${(2 + d) * (3 + d)} = 0:`, answer: String(3 + d), hint: `Factor into (x − a)(x − b) = 0.` },
          { prompt: `5. Trig Identity: sin²(47°) + cos²(47°) =`, answer: "1", hint: `Universal Pythagorean Identity!` }
        ],
        writingPrompt: `Explain in 2–3 sentences how the Power Rule gave f'(2) = ${derivVal} for f(x) = ${coeff}x^${exp}.`,
        writingExemplar: `By the Power Rule, multiplying ${coeff} by exponent ${exp} and reducing the exponent by 1 gives f'(x) = ${coeff * exp}x^${exp - 1}. Substituting x = 2 yields ${derivVal}.`
      };
    }

    // Attach exact 12-question Daily Quiz (Days 1–4) or 20-question Weekly Unit Test (Day 5)!
    pack.quiz = generateMathQuizQuestions(grade, weekNum, dayIdx, quizTargetCount);
    return pack;
  }

  // ==================== 4. STUDENT-FRIENDLY SUBJECT PACKS (THEO, SCI, ASL, CODING, ART, CAREER, LIT/HIST) ====================
  function buildSubjectPack(course, weekNum, dayIdx, cleanTopic, quizTargetCount) {
    const grade = (course.gradeLevels && course.gradeLevels[0]) ?? 6;
    const dept = (course.department || "").toLowerCase();
    const code = (course.code || "").toUpperCase();
    const w = weekNum;
    const d = dayIdx;

    let category = "general";
    let pack = null;

    if (dept.includes("theology") || code.startsWith("THEO")) {
      category = "theology";
      if (w === 1) {
        pack = {
          objectives: [
            "Read Genesis 1 in plain English and spot the clear 3 + 3 pattern God used to build the world",
            "Understand what 'Made in God's Image' means for how we value ourselves and every person we meet",
            "Tell the difference between creating out of nothing (God) and crafting from existing materials (humans)"
          ],
          anchorVerse: "Genesis 1:1, 27 — In the beginning God created the heaven and the earth... So God created man in his own image.",
          bigIdea: "The Bible begins with purpose, not an accident. God designed the universe with clear order—and made human beings to reflect His love, creativity, and wisdom.",
          sections: [
            {
              stepBadge: "PART 1 · STARTING AT THE BEGINNING (GENESIS 1)",
              heading: "The 3 + 3 Pattern of Creation",
              body: `Just like an artist prepares a canvas before painting, Genesis 1 shows God building the spaces first and then filling them with life:<br/><br/><strong>Days 1–3 (Building the Homes):</strong> Day 1 = Light · Day 2 = Sky &amp; Oceans · Day 3 = Dry Land &amp; Plants.<br/><strong>Days 4–6 (Filling the Homes):</strong> Day 4 = Sun, Moon &amp; Stars · Day 5 = Birds &amp; Fish · Day 6 = Land Animals &amp; People!<br/><br/>On <strong>Day 7 (Sabbath)</strong>, God rested—setting a healthy rhythm of purposeful work and joyful rest.`,
              keyTakeaway: "Days 1–3 build the spaces; Days 4–6 fill those exact spaces in matching order!"
            },
            {
              stepBadge: "PART 2 · CREATING OUT OF NOTHING",
              heading: "How God's Creating Is Unique",
              body: `When people bake a cake or build a house, we use ingredients and wood that already exist. In Genesis 1:1, God spoke the entire universe into existence <strong>out of nothing</strong> simply by His Word!`,
              keyTakeaway: "Humans reshape materials; God created everything out of nothing by His Word."
            },
            {
              stepBadge: "PART 3 · MADE IN GOD'S IMAGE",
              heading: "Why Every Person Matters",
              body: `On Day 6, God made humanity in His own <strong>Image</strong> (Genesis 1:27). That means you can think, create, love, choose what is right, and care for God's world (<strong>Stewardship</strong>)—and every person deserves dignity and respect.`,
              keyTakeaway: "Because every person bears God's image, every life has real value."
            }
          ],
          workedExamples: [
            {
              badge: "EXAMPLE · MATCHING THE DAYS",
              title: "How Day 2 Matches Day 5",
              problem: "How does Day 5 connect directly to Day 2 in Genesis 1?",
              step1: "Day 2 created the sky above and the oceans below.",
              step2: "Day 5 filled the sky with birds and the oceans with fish.",
              step3: "God built the habitat first, then filled it with living creatures!",
              pitfall: "Remember: Day 1↔4, Day 2↔5, Day 3↔6."
            }
          ],
          wordBank: ["Order", "Image", "Stewardship", "Sabbath", "Good"],
          blanks: [
            { before: "1. Genesis 1 shows a clear 3 + 3 pattern of ", answer: "Order", after: ".", hint: "Starts with O (opposite of chaos)" },
            { before: "2. Genesis 1:27 says humans are made in God's ", answer: "Image", after: ".", hint: "Starts with I (reflecting God)" },
            { before: "3. Faithfully caring for creation and others is called ", answer: "Stewardship", after: ".", hint: "Starts with S (responsible care)" }
          ],
          writingPrompt: "In 2–4 clear sentences, explain how Days 1–3 match Days 4–6 in Genesis 1 and what being made in God's image means for how we treat others.",
          writingExemplar: "In Genesis 1, Days 1–3 build the spaces (light, sky/seas, land) and Days 4–6 fill them (sun/stars, birds/fish, animals/people). Being made in God's image means every person has real value and deserves kindness and respect.",
          baseQuiz: [
            { q: "How do Days 1–3 and Days 4–6 of Genesis 1 fit together?", options: ["Days 1–3 build the habitats and Days 4–6 fill each matching habitat", "They are completely random", "Days 4–6 erase Days 1–3", "Only plants were made"], correct: 0, explanation: "Day 1 matches Day 4, Day 2 matches Day 5, and Day 3 matches Day 6." }
          ]
        };
      } else {
        pack = {
          objectives: [
            `Understand "${cleanTopic}" clearly in plain, Grade ${grade === 0 ? "K" : grade}-friendly English`,
            "See how today's Bible story fits into God's big story (Creation → Fall → Redemption → Restoration)",
            "Apply today's truth to real friendships, choices, and faith this week"
          ],
          anchorVerse: "Psalm 119:105 — Thy word is a lamp unto my feet, and a light unto my path.",
          bigIdea: `Today we explore "${cleanTopic}" in clear, everyday language—seeing real people, real choices, and how God faithfully keeps His promises.`,
          sections: [
            {
              stepBadge: "PART 1 · THE STORY IN PLAIN ENGLISH",
              heading: `What Is Happening in "${cleanTopic}"?`,
              body: `Whenever you read Scripture, ask three clear questions: <strong>1. What happened here?</strong> <strong>2. What does this show us about God?</strong> <strong>3. How does it help me live wisely today?</strong><br/><br/>In Week ${w} of <strong>${course.title}</strong>, look closely at the people in <strong>${cleanTopic}</strong>, the challenge they faced, and how God remained faithful.`,
              keyTakeaway: "Always read verses in context so you see the whole story clearly."
            },
            {
              stepBadge: "PART 2 · EASY-TO-READ SCRIPTURE HUB TIP",
              heading: "Connecting Today's Passage to the Whole Bible",
              body: `You can click the <strong>Scripture Hub</strong> tab at the top anytime to read any chapter in <strong>Easy-to-Read Modern English</strong> side-by-side with Classic KJV—or listen to the chapter read aloud!`,
              keyTakeaway: "Every Bible story connects inside Creation → Fall → Redemption → Restoration."
            },
            {
              stepBadge: "PART 3 · LIVING IT OUT",
              heading: "Faith & Character in Real Life",
              body: `Think about one real situation this week—at home, with siblings, or with friends—where honesty, patience, courage, or trusting God applies directly from <strong>${cleanTopic}</strong>.`,
              keyTakeaway: "Real wisdom shows up in everyday kindness, honesty, and courage."
            }
          ],
          workedExamples: [
            {
              badge: "3-STEP BIBLE STUDY METHOD",
              title: `Breaking Down "${cleanTopic}"`,
              problem: "How do I understand any Bible chapter without getting confused?",
              step1: "Observe: Who is there and what problem are they facing?",
              step2: "Understand: What promise or trait of God stands out?",
              step3: "Apply: What is one real way I can practice this truth today?",
              pitfall: "Read the whole paragraph—never just one disconnected sentence!"
            }
          ],
          wordBank: ["Context", "Faithfulness", "Character", "Promise", "Wisdom"],
          blanks: [
            { before: "1. Reading the verses before and after a passage is called reading in ", answer: "Context", after: ".", hint: "Starts with C" },
            { before: `2. "${cleanTopic}" reveals God's `, answer: "Faithfulness", after: " to His people.", hint: "Starts with F" },
            { before: "3. Practicing truth in daily life builds strong ", answer: "Character", after: ".", hint: "Starts with C" }
          ],
          writingPrompt: `In 2–4 plain sentences, explain what "${cleanTopic}" shows about God and one way you can live that out this week.`,
          writingExemplar: `"${cleanTopic}" reminds us that God is faithful and purposeful even in tough seasons, encouraging us to live with honesty, courage, and love toward others.`,
          baseQuiz: []
        };
      }
    } else if (dept.includes("science") || code.startsWith("SCI")) {
      category = "science";
      pack = {
        objectives: [
          w === 1 ? "Learn the 6 clear steps of the Scientific Method in plain English" : `Understand how "${cleanTopic}" works in everyday life`,
          "Tell the difference between Independent (what YOU change), Dependent (what YOU measure), and Control variables",
          "Explain a scientific idea clearly using Claim → Evidence → Reasoning"
        ],
        anchorVerse: "Psalm 19:1 — The heavens declare the glory of God; and the firmament sheweth his handywork.",
        bigIdea: w === 1
          ? "Science is organized curiosity! The Scientific Method is a simple 6-step checklist that helps you run fair tests and discover how God's world works."
          : `Today we break down "${cleanTopic}" into simple cause-and-effect steps you can actually picture, measure, and explain in plain English.`,
        sections: [
          {
            stepBadge: "PART 1 · CLEAR FOUNDATIONS",
            heading: w === 1 ? "The 6 Simple Steps of the Scientific Method" : `Understanding "${cleanTopic}" in Real Life`,
            body: w === 1
              ? `Every fair experiment follows 6 simple steps:<br/>1. <strong>Ask a Question</strong> → 2. <strong>Research</strong> → 3. <strong>Make a Hypothesis</strong> ("If... then...") → 4. <strong>Run a Fair Test</strong> → 5. <strong>Analyze Data</strong> → 6. <strong>Draw a Conclusion</strong>.`
              : `In Week ${w} of <strong>${course.title}</strong>, <strong>${cleanTopic}</strong> explains a real cause-and-effect pattern happening in nature. Always ask: <em>What is causing the change, and what measurable effect do we see?</em>`,
            keyTakeaway: "Science relies on careful observation, fair testing, and honest measurements."
          },
          {
            stepBadge: "PART 2 · MAKING TESTS FAIR (VARIABLES)",
            heading: "Change Only ONE Thing at a Time!",
            body: `• <strong>Independent Variable:</strong> The ONE thing <em>I</em> change.<br/>• <strong>Dependent Variable:</strong> The <em>Data</em> I measure.<br/>• <strong>Control Variables:</strong> Everything kept <em>Constant</em> so the test stays fair!`,
            keyTakeaway: "Independent = I change · Dependent = Data measured · Control = Constant."
          },
          {
            stepBadge: "PART 3 · EXPLAINING LIKE A SCIENTIST",
            heading: "Claim → Evidence → Reasoning",
            body: `State your answer clearly (<strong>Claim</strong>), share your actual measurement or observation (<strong>Evidence</strong>), and explain WHY that evidence proves your answer (<strong>Reasoning</strong>).`,
            keyTakeaway: "Honest data always beats guessing—even when a hypothesis turns out wrong!"
          }
        ],
        workedExamples: [
          {
            badge: "EXAMPLE · FAIR TEST CHECK",
            title: "Does Salt Melt Ice Faster?",
            problem: "Identify the 3 variables in an ice-melting test.",
            step1: "Independent (you change): Salt on Cube 1 vs. no salt on Cube 2.",
            step2: "Dependent (you measure): Minutes until each cube melts.",
            step3: "Controls (kept identical): Same size cubes, same room temperature, same plate.",
            pitfall: "If one ice cube starts larger, the test isn't fair!"
          }
        ],
        wordBank: ["Hypothesis", "Independent", "Control", "Evidence", "Observation"],
        blanks: [
          { before: "1. A testable 'If... then...' prediction is called a ", answer: "Hypothesis", after: ".", hint: "Starts with H" },
          { before: "2. The ONE factor you purposefully change is the ", answer: "Independent", after: " variable.", hint: "Starts with I" },
          { before: "3. Everything kept identical for a fair test is a ", answer: "Control", after: " variable.", hint: "Starts with C" }
        ],
        writingPrompt: `In 2–4 plain sentences, explain "${cleanTopic}" in your own words and describe one real-life example or fair test.`,
        writingExemplar: `In "${cleanTopic}", we observe a clear cause-and-effect pattern in nature. By changing only one independent variable at a time and recording honest measurements, we can explain our findings with Claim, Evidence, and Reasoning.`,
        baseQuiz: []
      };
    } else if (code.startsWith("ASL")) {
      category = "asl";
      pack = {
        objectives: [
          `Learn the handshapes, movements, and facial expressions for "${cleanTopic}"`,
          "Practice smooth, steady fingerspelling and polite Deaf culture etiquette",
          "Use ASL Topic-Comment structure and clear eye contact in everyday greetings"
        ],
        anchorVerse: "Proverbs 16:24 — Pleasant words are as an honeycomb, sweet to the soul.",
        bigIdea: "American Sign Language (ASL) is a vibrant visual language! Your hands, movement, and facial expressions work together like music to communicate clearly and warmly.",
        sections: [
          {
            stepBadge: "PART 1 · VISUAL LANGUAGE BASICS",
            heading: `Learning "${cleanTopic}" Step by Step`,
            body: `Every ASL sign uses <strong>5 building blocks</strong>: 1. <strong>Handshape</strong> (how your fingers form), 2. <strong>Location</strong> (where on/near your body), 3. <strong>Movement</strong> (how it travels), 4. <strong>Palm Orientation</strong> (which way your palm faces), and 5. <strong>Facial Expression</strong> (non-manual markers)!`,
            keyTakeaway: "Keep your dominant signing hand consistent and hold signs comfortably at chest/shoulder height."
          },
          {
            stepBadge: "PART 2 · FACIAL EXPRESSIONS ARE GRAMMAR",
            heading: "Eyebrows Up vs. Eyebrows Down",
            body: `In ASL, your eyebrows act like punctuation marks!<br/>• <strong>Yes/No Question</strong> ("Are you hungry?"): Raise eyebrows <strong>UP</strong>.<br/>• <strong>Wh-Question</strong> ("What is your name?"): Furrow eyebrows <strong>DOWN</strong>.`,
            keyTakeaway: "Eyebrows UP = Yes/No question · Eyebrows DOWN = Who/What/Where/When/Why question."
          },
          {
            stepBadge: "PART 3 · PRACTICE & DEAF CULTURE",
            heading: "Mirror Practice & Respectful Etiquette",
            body: `Practice today's signs for 5 minutes in front of a mirror or with a parent! Always maintain natural eye contact when signing, and tap a shoulder gently or give a friendly wave to get attention.`,
            keyTakeaway: "Accuracy and smooth handshapes first—speed comes naturally with daily practice!"
          }
        ],
        workedExamples: [
          {
            badge: "SIGNING PRACTICE TIP",
            title: "Introducing Yourself in ASL",
            problem: "How do you greet a new friend in ASL?",
            step1: "Sign HELLO (friendly wave from forehead) + MY NAME + fingerspell your name steadily.",
            step2: "Sign NICE-MEET-YOU with a warm smile.",
            step3: "Ask YOUR NAME WHAT? (eyebrows furrowed slightly down on WHAT).",
            pitfall: "Avoid bouncing your hand up and down between letters when fingerspelling!"
          }
        ],
        wordBank: ["Handshape", "Eyebrows", "Fingerspelling", "EyeContact", "Location"],
        blanks: [
          { before: "1. Spelling names and places letter-by-letter with the manual alphabet is called ", answer: "Fingerspelling", after: ".", hint: "Starts with F" },
          { before: "2. In ASL questions, raising or furrowing your ", answer: "Eyebrows", after: " shows what kind of question you are asking.", hint: "Starts with E" },
          { before: "3. The exact way your fingers form a sign is its ", answer: "Handshape", after: ".", hint: "Starts with H" }
        ],
        writingPrompt: `In 2–3 sentences, explain the difference between eyebrow movement for a Yes/No question vs. a Wh-question in ASL, and share one thing you practiced in "${cleanTopic}".`,
        writingExemplar: `In ASL, you raise your eyebrows up for a Yes/No question and furrow them down for a Wh-question (like Who or What). Keeping my signing hand steady and maintaining eye contact makes my signing clear and polite.`,
        baseQuiz: []
      };
    } else if (code.startsWith("CS") || dept.includes("computer")) {
      category = "coding";
      pack = {
        objectives: [
          `Understand "${cleanTopic}" by breaking problems into clear, logical steps`,
          "Practice core coding concepts: Algorithms, Variables, Loops, Conditionals, and Debugging",
          "Build safe, responsible digital and AI habits"
        ],
        anchorVerse: "Proverbs 24:3 — Through wisdom is an house builded; and by understanding it is established.",
        bigIdea: "Coding isn't mysterious—it's just giving a computer clear, exact instructions one step at a time so you can build games, websites, and helpful tools!",
        sections: [
          {
            stepBadge: "PART 1 · THINKING LIKE A CODER",
            heading: `How "${cleanTopic}" Works Step by Step`,
            body: `Computers are super fast, but they follow instructions literally. That's why coders write clear <strong>Algorithms</strong> (step-by-step recipes), use <strong>Variables</strong> (labeled boxes that hold scores or names), <strong>Loops</strong> (repeat tasks automatically), and <strong>Conditionals</strong> (<code>if / else</code> decisions)!`,
            keyTakeaway: "Break every big coding idea into tiny, testable steps."
          },
          {
            stepBadge: "PART 2 · DEBUGGING WITHOUT STRESS",
            heading: "Error Messages Are Clues, Not Failures",
            body: `Even senior software engineers get bugs every single day! When something doesn't work, read the error line, check spelling and punctuation, test one small fix, and run it again.`,
            keyTakeaway: "Plan → Build a small piece → Test & Debug → Improve."
          }
        ],
        workedExamples: [
          {
            badge: "MINI CODE WALKTHROUGH",
            title: "Simple Game Score Logic",
            problem: "How does a game know when a player wins?",
            step1: "Create a variable: score = 0.",
            step2: "When the player collects a star: score = score + 10.",
            step3: "Use a conditional: IF score >= 100, show 'You Win!'; ELSE keep playing!",
            pitfall: "Check exact capitalization—`Score` and `score` are treated as two different variables in most languages!"
          }
        ],
        wordBank: ["Algorithm", "Variable", "Loop", "Debugging", "Conditional"],
        blanks: [
          { before: "1. A step-by-step list of instructions for a computer is called an ", answer: "Algorithm", after: ".", hint: "Starts with A" },
          { before: "2. A labeled container that stores a score or player name is a ", answer: "Variable", after: ".", hint: "Starts with V" },
          { before: "3. Finding and fixing errors in your code is called ", answer: "Debugging", after: ".", hint: "Starts with D" }
        ],
        writingPrompt: `In 2–3 sentences, explain what a Variable and an If/Else Conditional do in a game or app you would like to build.`,
        writingExemplar: `A Variable stores changing values like player score or health, while an If/Else Conditional lets the game make decisions—for example, if score reaches 100, unlock the next level, else keep playing.`,
        baseQuiz: []
      };
    } else if (code.startsWith("ART") || code.startsWith("MUS") || dept.includes("art") || dept.includes("music")) {
      category = "art";
      pack = {
        objectives: [
          `Practice "${cleanTopic}" with clear, approachable creative techniques`,
          "Understand core visual/musical building blocks (shapes, value, color, perspective, beat & melody)",
          "Build creative confidence through joyful daily sketching or practice"
        ],
        anchorVerse: "Exodus 31:3 — Filled with the spirit of God, in wisdom, and in understanding, and in all manner of workmanship.",
        bigIdea: "Anyone can learn to draw, design, and make music! Great art isn't magic talent—it's learning to observe closely and practicing simple fundamentals step by step.",
        sections: [
          {
            stepBadge: "PART 1 · SEEING LIKE AN ARTIST",
            heading: `Core Technique for "${cleanTopic}"`,
            body: `Whether sketching a castle, painting a sunset, or playing a melody, start with simple building blocks! In drawing, sketch light basic shapes (circles, boxes, triangles) first, then add <strong>Value</strong> (highlights and shadows) to make it pop into 3D. In music, lock into the steady <strong>Beat</strong> first, then layer rhythm and melody.`,
            keyTakeaway: "Sketch lightly first so adjusting proportions is easy and stress-free!"
          },
          {
            stepBadge: "PART 2 · COLOR, COMPOSITION & CREATIVE JOY",
            heading: "Making Your Work Come Alive",
            body: `Use the <strong>Color Wheel</strong> (warm colors pop forward, cool colors recede) and the <strong>Rule of Thirds</strong> (slightly off-center focal points) to make every drawing or poster look like a pro designed it.`,
            keyTakeaway: "Daily 10-minute sketchbook or music practice builds remarkable skill fast."
          }
        ],
        workedExamples: [
          {
            badge: "STUDIO WALKTHROUGH",
            title: "3-Step Sketch Method",
            problem: "How do I draw an object accurately without getting frustrated?",
            step1: "Step 1: Lightly draw the big basic shapes (circle/oval/rectangle).",
            step2: "Step 2: Refine the outer contour and check negative space around it.",
            step3: "Step 3: Pick your light direction, keep highlights bright, and shade the shadow side smoothly.",
            pitfall: "Don't press hard on your pencil at the beginning—save dark lines for the final step!"
          }
        ],
        wordBank: ["Value", "Primary", "Perspective", "Sketch", "Composition"],
        blanks: [
          { before: "1. How light or dark an area appears in a drawing is called ", answer: "Value", after: ".", hint: "Starts with V" },
          { before: "2. Red, Yellow, and Blue are the three ", answer: "Primary", after: " colors.", hint: "Starts with P" },
          { before: "3. Using a vanishing point on the horizon line to show depth is called ", answer: "Perspective", after: ".", hint: "Starts with P" }
        ],
        writingPrompt: `In 2–3 sentences, describe one art or music technique from "${cleanTopic}" and what you'd like to create this week.`,
        writingExemplar: `Starting lightly with basic shapes and shading according to one clear light source creates realistic 3D form. This week I want to sketch a landscape using one-point perspective and warm-to-cool color contrast.`,
        baseQuiz: []
      };
    } else {
      category = "general";
      pack = {
        objectives: [
          `Understand "${cleanTopic}" in clear, Grade ${grade === 0 ? "K" : grade}-friendly language`,
          "Connect real-world examples, cause-and-effect, and practical skills from today's topic",
          "Summarize the big idea in your own words and pass today's quiz at ≥85%"
        ],
        anchorVerse: "Proverbs 18:15 — The heart of the prudent getteth knowledge; and the ear of the wise seeketh knowledge.",
        bigIdea: `Today we break down "${cleanTopic}" into clear, everyday English—with concrete examples so it actually makes sense and sticks!`,
        sections: [
          {
            stepBadge: "PART 1 · THE BIG PICTURE",
            heading: `What Is "${cleanTopic}" All About?`,
            body: `In Week ${w} of <strong>${course.title}</strong>, we focus on <strong>${cleanTopic}</strong>. Instead of memorizing dry definitions, picture how this works in real life! Ask: <strong>Who is involved? What is the core principle or decision? Why does it still matter today?</strong>`,
            keyTakeaway: "Understand the big idea first, then connect specific examples to it."
          },
          {
            stepBadge: "PART 2 · STEP-BY-STEP DETAILS",
            heading: "Cause, Effect & Real-World Application",
            body: `Strong thinkers back up every claim with real <strong>Evidence</strong> (a fact, quote, number, or primary source) and look at cause-and-effect—how one smart choice or principle produces lasting results.`,
            keyTakeaway: "Main Point + Specific Evidence + Plain-English Explanation = Mastery."
          }
        ],
        workedExamples: [
          {
            badge: "QUICK WALKTHROUGH",
            title: `Mastering "${cleanTopic}"`,
            problem: "How do I write a crisp 3-sentence summary?",
            step1: "Sentence 1: State the main idea in plain English.",
            step2: "Sentence 2: Give one concrete example, fact, or number from today.",
            step3: "Sentence 3: Explain why it matters in real life.",
            pitfall: "Short, clear sentences in your own words are always better than copying big words!"
          }
        ],
        wordBank: ["MainIdea", "Evidence", "Summary", "Cause", "Integrity"],
        blanks: [
          { before: `1. Start studying "${cleanTopic}" by spotting the `, answer: "MainIdea", after: ".", hint: "Two words combined: MainIdea" },
          { before: "2. Back up your answer with a real fact or piece of ", answer: "Evidence", after: ".", hint: "Starts with E" },
          { before: "3. Explaining what you learned in your own words is writing a ", answer: "Summary", after: ".", hint: "Starts with S" }
        ],
        writingPrompt: `In 2–4 clear sentences, explain "${cleanTopic}" in your own words and include one specific example.`,
        writingExemplar: `In Week ${w} of ${course.title}, "${cleanTopic}" teaches an important principle we can understand through clear cause-and-effect and real-life examples.`,
        baseQuiz: []
      };
    }

    pack.quiz = expandSubjectQuiz(
      pack.baseQuiz,
      category,
      cleanTopic,
      course.title,
      grade,
      w,
      d,
      quizTargetCount
    );
    return pack;
  }

  // ==================== 5. INSTALL UNIFIED K–12 CURRICULUM & ASSESSMENT SYNC ENGINE ====================
  const previousSync = window.syncCourseWeekContent;

  window.syncCourseWeekContent = function (course, weekNum) {
    if (!course) return;
    if (typeof previousSync === "function") {
      previousSync(course, weekNum);
    }

    // Ensure every K–12 course always has 5 daily lessons (Mon–Fri)
    if (!Array.isArray(course.lessons) || course.lessons.length < 5) {
      course.lessons = [0, 1, 2, 3, 4].map((idx) => ({
        id: `${course.id}-d${idx + 1}`,
        unit: `WEEK ${weekNum || 1} · DAY ${idx + 1}`,
        title: `Day ${idx + 1}`,
        duration: "40 mins",
        completed: false,
        dailyTasks: { blankDone: false, writingDone: false, quizDone: false },
        resources: [],
        practiceSet: [],
        quiz: []
      }));
    }

    const wNum = Math.max(1, Math.min(36, parseInt(weekNum, 10) || 1));
    const qtr = Math.ceil(wNum / 9);
    const grade = (course.gradeLevels && course.gradeLevels[0]) ?? 6;

    // ZERO pre-checked weeks — every week starts clean at 0/5 Days unless genuinely earned
    if (Array.isArray(course.syllabus36Weeks)) {
      course.syllabus36Weeks.forEach((w) => {
        if (!w._earnedByStudent) {
          w.daysCompleted = 0;
          w.masteryScore = null;
          w.status = w.weekNum === wNum ? "Current Week" : "5 Days Ready";
        }
      });
    }

    const wObj =
      (course.syllabus36Weeks || []).find((w) => w.weekNum === wNum) ||
      { weekNum: wNum, quarter: qtr, title: `Week ${wNum}: ${course.title}` };
    const cleanTopic = wObj.title.replace(/^Week\s+\d+\s*(\([^)]*\))?:\s*/i, "").trim();
    const isMath =
      (course.department || "").toLowerCase().includes("math") ||
      (course.code || "").toUpperCase().startsWith("MATH");

    const dayNames = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY"];
    const daySubtitles = [
      "Core Concept & Foundations",
      "Worked Examples & Step-by-Step Practice",
      "Hands-On Application",
      "Spiral Review & Prep",
      "Weekly Unit Test (20 Questions)"
    ];

    course.lessons.forEach((lesson, idx) => {
      const isWeeklyUnitTest = idx === 4; // Day 5 (Friday) = Comprehensive 20-Question Weekly Unit Test!
      const quizTargetCount = isWeeklyUnitTest ? 20 : grade <= 2 ? 8 : 12;

      const pack = isMath
        ? buildMathPack(course, wNum, idx, cleanTopic, quizTargetCount)
        : buildSubjectPack(course, wNum, idx, cleanTopic, quizTargetCount);

      lesson.isMathProblemSet = isMath;
      lesson.isWeeklyUnitTest = isWeeklyUnitTest;
      lesson.quizQuestionCount = pack.quiz.length;
      lesson.studentObjectives = pack.objectives || [];
      lesson.unit = `QUARTER ${qtr} · WEEK ${wNum} OF 36 · ${dayNames[idx] || `DAY ${idx + 1}`}${isWeeklyUnitTest ? " · WEEKLY UNIT TEST" : ""}`;
      lesson.title = `Day ${idx + 1}: ${cleanTopic} — ${daySubtitles[idx] || "Guided Lesson"}`;
      lesson.videoChapter = `WEEK ${wNum} · DAY ${idx + 1} · ${course.code}`;
      lesson.readingHtml = `
        <div class="lesson-callout">
          <strong>${course.code} · Week ${wNum}, Day ${idx + 1}:</strong> ${pack.bigIdea}
        </div>
        <h3>${cleanTopic}</h3>
        ${(pack.sections || [])
          .map((s) => `<h4 style="margin-top:0.85rem;">${s.heading}</h4><p>${s.body}</p>`)
          .join("")}
      `;

      if (isMath) {
        lesson.mathProblems = pack.problems || [];
        lesson.wordBank = [];
        lesson.fillInBlanks = (pack.problems || []).map((p) => ({
          before: p.prompt,
          answer: p.answer,
          after: "",
          hint: p.hint
        }));
      } else {
        lesson.mathProblems = null;
        lesson.wordBank = pack.wordBank || [];
        lesson.fillInBlanks = pack.blanks || [];
      }

      if (!lesson.dailyWriting) lesson.dailyWriting = {};
      lesson.dailyWriting.title = isMath
        ? `Explain Your Math Steps (${course.code} · Week ${wNum}, Day ${idx + 1})`
        : `Put It in Your Own Words (${course.code} · Week ${wNum}, Day ${idx + 1})`;
      lesson.dailyWriting.prompt = pack.writingPrompt;
      lesson.dailyWriting.exemplar = pack.writingExemplar;
      lesson.quiz = pack.quiz || [];

      lesson.deepTeaching = {
        dayHeader: `${course.code} · WEEK ${wNum} OF 36 · DAY ${idx + 1}`,
        methodology: isMath ? "Step-by-Step Math Mastery" : "Clear Student-Friendly Teaching",
        bigIdea: pack.bigIdea,
        overview: pack.bigIdea,
        anchorVerse: pack.anchorVerse,
        sections: pack.sections || [],
        vocabularyTable: (isMath ? pack.problems || [] : pack.blanks || []).map((item, i) => ({
          term: isMath ? `Problem #${i + 1}` : item.answer,
          category: isMath ? "Math Practice" : "Key Concept",
          definition: isMath ? item.prompt : `${item.before} [${item.answer}] ${item.after || ""}`,
          studyTip: item.hint || ""
        })),
        workedExamples: pack.workedExamples || []
      };

      lesson.parentGuide = {
        dayTitle: `${course.code} — Week ${wNum}, Day ${idx + 1}: ${cleanTopic}`,
        quickOverview: pack.bigIdea,
        explainIn60Seconds: pack.bigIdea + " " + ((pack.sections && pack.sections[0] && pack.sections[0].keyTakeaway) || ""),
        coachingScript: isMath
          ? `"Let's read the worked example together first, then try Problem #1 side-by-side. Always show your step and plug your answer back in to check!"`
          : `"After reading the teaching cards, tell me the main idea in your own words as if you were teaching a friend!"`,
        socraticQuestions: (pack.objectives || []).map((obj) => ({
          q: `Can you show or explain: "${obj}"?`,
          listenFor: "Clear explanation in the student's own words with one concrete example or worked step."
        })),
        answerKeySummary: {
          blanksAnswers: isMath
            ? (pack.problems || []).map((p, i) => `Problem #${i + 1}: ${p.prompt} → Answer: ${p.answer} (${p.hint})`)
            : (pack.blanks || []).map((b, i) => `Blank #${i + 1}: "${b.answer}" (${b.hint})`),
          writingModel: pack.writingExemplar,
          quizAnswers: (pack.quiz || []).map((q, qi) => `Q${qi + 1}: "${q.options[q.correct]}" — Why: ${q.explanation}`)
        }
      };
    });
  };
})();
