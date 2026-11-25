// Christ Infinity Academy — K–12 Grade-Aligned Curriculum, Real Math Problem Engine & Assessment Suite
// Audited Grade-by-Grade: Separate calibrated content for K, 1, 2, 3, 4, 5, 6, 7, 8, 9–10, and 11–12 across ALL subjects!
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

  function repeatEmoji(emoji, n) {
    let out = "";
    for (let i = 0; i < n; i++) out += emoji;
    return out;
  }

  // ==================== 1. GRADE-BY-GRADE REAL MATH QUIZ GENERATOR (K THROUGH 12) ====================
  function generateMathQuizQuestions(grade, weekNum, dayIdx, count) {
    const qs = [];
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

    for (let i = 0; i < count; i++) {
      const s = weekNum * 19 + dayIdx * 7 + i * 5;
      let qObj;

      if (grade === 0) {
        // KINDERGARTEN MATH — Week-aligned! Weeks 1–8: Counting 1–5 / 1–10, Comparing, Shapes; Weeks 9+: Making 5/10, Simple +/- within 5–10
        const emojis = ["🍎", "⭐", "🐥", "🌸", "🦋"];
        const names = ["apples", "stars", "chicks", "flowers", "butterflies"];
        const em = emojis[i % emojis.length];
        const nm = names[i % names.length];

        if (weekNum <= 2) {
          // Weeks 1–2: Counting & Matching Objects 1 to 5 (and 1 to 10 in Week 2)
          const maxN = weekNum === 1 ? 5 : 10;
          const t = i % 4;
          if (t === 0 || t === 1) {
            const cnt = 1 + ((s + i) % maxN);
            const o1 = cnt === maxN ? cnt - 1 : cnt + 1;
            const o2 = cnt <= 2 ? cnt + 2 : cnt - 2;
            const o3 = cnt === 1 ? 4 : 1;
            qObj = {
              q: `Count the ${nm}: ${repeatEmoji(em, cnt)}  — How many ${nm} do you see?`,
              options: [String(cnt), String(o1), String(o2), String(o3)],
              correct: 0,
              explanation: `Point and count one by one: 1 to ${cnt}. There are ${cnt} ${nm}!`
            };
          } else if (t === 2) {
            const base = 1 + ((s + i) % (maxN - 1));
            qObj = {
              q: `What number comes RIGHT AFTER ${base} when counting? (${base}, ___)`,
              options: [String(base + 1), String(Math.max(0, base - 1)), String(base + 2), String(base)],
              correct: 0,
              explanation: `When we count up by 1 from ${base}, the very next number is ${base + 1}!`
            };
          } else {
            const a = 1 + (i % (maxN - 1));
            const b = Math.min(maxN, a + 1 + (i % 2));
            qObj = {
              q: `Which group has MORE ${nm}? Group A: ${repeatEmoji(em, b)} (${b}) or Group B: ${repeatEmoji(em, a)} (${a})?`,
              options: [`Group A (${b} ${nm})`, `Group B (${a} ${nm})`, "Both have 0", "Neither group"],
              correct: 0,
              explanation: `${b} is bigger than ${a}, so Group A has more!`
            };
          }
        } else if (weekNum <= 8) {
          // Weeks 3–8: Comparing, One More/One Less, Sorting, Patterns, Counting to 10–20
          const t = i % 4;
          if (t === 0) {
            const cnt = 3 + ((s + i) % 8);
            qObj = {
              q: `Count carefully: ${repeatEmoji(em, cnt)} — How many ${nm} are there?`,
              options: [String(cnt), String(cnt + 1), String(cnt - 1), String(cnt + 2)],
              correct: 0,
              explanation: `Counting one by one gives ${cnt} ${nm}.`
            };
          } else if (t === 1) {
            const n = 2 + ((s + i) % 8);
            qObj = {
              q: `What number is ONE MORE than ${n}?`,
              options: [String(n + 1), String(n - 1), String(n + 2), String(n)],
              correct: 0,
              explanation: `One more than ${n} is ${n + 1}.`
            };
          } else if (t === 2) {
            const pats = [
              { seq: "🔴 🔵 🔴 🔵 🔴 ___", ans: "🔵", wrong: ["🔴", "🟢", "⭐"] },
              { seq: "⭐ 🌙 ⭐ 🌙 ⭐ ___", ans: "🌙", wrong: ["⭐", "☀️", "🍎"] },
              { seq: "🍎 🍌 🍎 🍌 🍎 ___", ans: "🍌", wrong: ["🍎", "🍇", "🍊"] }
            ];
            const p = pats[i % pats.length];
            qObj = {
              q: `What comes next in this AB pattern?  ${p.seq}`,
              options: [p.ans, p.wrong[0], p.wrong[1], p.wrong[2]],
              correct: 0,
              explanation: `The pattern repeats two pictures over and over, so ${p.ans} comes next!`
            };
          } else {
            const shapes = [["Circle (round)", 0], ["Triangle", 3], ["Square", 4]];
            const [nmS, sd] = shapes[i % shapes.length];
            qObj = {
              q: sd === 0 ? "Which shape is round like a wheel with 0 straight sides?" : `Which flat shape has ${sd} straight sides?`,
              options: [nmS, shapes[(i + 1) % 3][0], shapes[(i + 2) % 3][0], "Star"],
              correct: 0,
              explanation: sd === 0 ? "A circle is completely round." : `A ${nmS} always has ${sd} straight sides.`
            };
          }
        } else {
          // Weeks 9–36: Making 5 & 10, Simple Addition & Subtraction within 10, Shapes
          const t = i % 4;
          if (t === 0) {
            const a = 1 + ((s + i) % 5);
            const b = 1 + (i % (10 - a));
            qObj = {
              q: `Add the ${nm}: ${a} + ${b} = ? (${repeatEmoji(em, a)} and ${repeatEmoji(em, b)})`,
              options: [String(a + b), String(a + b + 1), String(Math.max(1, a + b - 1)), String(a + b + 2)],
              correct: 0,
              explanation: `Putting ${a} and ${b} together makes ${a + b}!`
            };
          } else if (t === 1) {
            const n = 2 + ((s + i) % 8);
            qObj = {
              q: `Make 10! What number goes in the blank?  ${n} + ___ = 10`,
              options: [String(10 - n), String(10 - n + 1), String(Math.max(1, 9 - n)), String(n)],
              correct: 0,
              explanation: `${n} + ${10 - n} = 10!`
            };
          } else if (t === 2) {
            const tot = 4 + ((s + i) % 6);
            const take = 1 + (i % (tot - 1));
            qObj = {
              q: `You have ${tot} ${nm} and share ${take}. How many are left? (${tot} − ${take})`,
              options: [String(tot - take), String(tot + take), String(tot - take + 1), String(tot)],
              correct: 0,
              explanation: `${tot} take away ${take} leaves ${tot - take}.`
            };
          } else {
            const shapes = [["Triangle", 3], ["Square", 4], ["Circle", 0], ["Hexagon", 6]];
            const [nmS, sd] = shapes[i % shapes.length];
            qObj = {
              q: sd === 0 ? "Which shape has 0 corners and is completely round?" : `Which flat shape has ${sd} straight sides?`,
              options: [nmS, shapes[(i + 1) % 4][0], shapes[(i + 2) % 4][0], shapes[(i + 3) % 4][0]],
              correct: 0,
              explanation: sd === 0 ? "A circle is round with 0 corners." : `A ${nmS} has ${sd} straight sides.`
            };
          }
        }
      } else if (grade === 1) {
        // GRADE 1 MATH: Addition/Subtraction within 20, Doubles, Tens & Ones, Coins (Pennies/Nickels/Dimes)
        const type = i % 5;
        if (type === 0) {
          const a = 4 + (s % 9), b = 3 + ((s + 2) % 8);
          qObj = { q: `Add: ${a} + ${b} = ?`, options: [String(a + b), String(a + b + 1), String(a + b - 1), String(a + b + 2)], correct: 0, explanation: `Start at ${a} and count on ${b} to reach ${a + b}.` };
        } else if (type === 1) {
          const total = 11 + (s % 9), take = 3 + (s % 7);
          qObj = { q: `Subtract: ${total} − ${take} = ?`, options: [String(total - take), String(total - take + 2), String(total + take), String(total - take - 1)], correct: 0, explanation: `${total} minus ${take} equals ${total - take}.` };
        } else if (type === 2) {
          const d = 3 + (i % 7);
          qObj = { q: `Use your Doubles fact! What is ${d} + ${d}?`, options: [String(d + d), String(d + d + 1), String(d + d - 2), String(d + 2)], correct: 0, explanation: `Double ${d} is ${d + d}.` };
        } else if (type === 3) {
          const tens = 2 + (s % 7), ones = 1 + (i % 8);
          qObj = { q: `What number has ${tens} tens and ${ones} ones?`, options: [String(tens * 10 + ones), String(ones * 10 + tens), String(tens + ones), String(tens * 10)], correct: 0, explanation: `${tens} tens (${tens * 10}) + ${ones} ones = ${tens * 10 + ones}.` };
        } else {
          const dimes = 1 + (s % 4), nickels = 1 + (i % 2);
          const cents = dimes * 10 + nickels * 5;
          qObj = { q: `How much money is ${dimes} dime(s) and ${nickels} nickel(s)?`, options: [`${cents}¢`, `${cents + 5}¢`, `${cents - 5}¢`, `${dimes + nickels}¢`], correct: 0, explanation: `${dimes} dimes (${dimes * 10}¢) + ${nickels} nickel(s) (${nickels * 5}¢) = ${cents}¢.` };
        }
      } else if (grade === 2) {
        // GRADE 2 MATH: 2-Digit Regrouping, Place Value to 1,000, Arrays, Quarters/Dimes
        const type = i % 5;
        if (type === 0) {
          const a = 24 + (s % 35), b = 17 + (i % 25);
          qObj = { q: `Add with regrouping: ${a} + ${b} = ?`, options: [String(a + b), String(a + b - 10), String(a + b + 10), String(a + b + 2)], correct: 0, explanation: `Add the ones, regroup a ten if ≥10, then add tens: ${a} + ${b} = ${a + b}.` };
        } else if (type === 1) {
          const a = 54 + (s % 35), b = 18 + (i % 24);
          qObj = { q: `Subtract: ${a} − ${b} = ?`, options: [String(a - b), String(a - b + 10), String(a + b), String(a - b - 2)], correct: 0, explanation: `${a} − ${b} = ${a - b}.` };
        } else if (type === 2) {
          const rows = 3 + (i % 4), cols = 2 + (s % 4);
          qObj = { q: `An array has ${rows} rows with ${cols} stars in each row. How many stars in total?`, options: [String(rows * cols), String(rows + cols), String(rows * cols + rows), String(rows * cols - 1)], correct: 0, explanation: `${rows} equal rows of ${cols} = ${rows * cols} stars.` };
        } else if (type === 3) {
          const h = 2 + (s % 6), t = 3 + (i % 5), o = 1 + (i % 8);
          qObj = { q: `Write in standard form: ${h} hundreds, ${t} tens, and ${o} ones:`, options: [String(h * 100 + t * 10 + o), String(h * 10 + t + o), String(o * 100 + t * 10 + h), String(h * 100 + o)], correct: 0, explanation: `${h * 100} + ${t * 10} + ${o} = ${h * 100 + t * 10 + o}.` };
        } else {
          const qtr = 1 + (i % 3), dime = 1 + (s % 4);
          const tot = qtr * 25 + dime * 10;
          qObj = { q: `How much is ${qtr} quarter(s) and ${dime} dime(s)?`, options: [`${tot}¢`, `${tot + 10}¢`, `${tot - 5}¢`, `${qtr * 10 + dime * 5}¢`], correct: 0, explanation: `${qtr} quarters (${qtr * 25}¢) + ${dime} dimes (${dime * 10}¢) = ${tot}¢.` };
        }
      } else if (grade === 3) {
        // GRADE 3 MATH: Multiplication, Division, Intro Fractions, Area & Perimeter, Rounding
        const type = i % 5;
        if (type === 0) {
          const a = 3 + (s % 7), b = 4 + ((s + 2) % 7);
          qObj = { q: `Multiply: ${a} × ${b} = ?`, options: [String(a * b), String(a * b + a), String(a * b - b), String(a + b)], correct: 0, explanation: `${a} groups of ${b} equals ${a * b}.` };
        } else if (type === 1) {
          const div = 3 + (s % 6), quot = 4 + ((s + 3) % 7);
          qObj = { q: `Divide: ${div * quot} ÷ ${div} = ?`, options: [String(quot), String(quot + 2), String(quot - 1), String(div)], correct: 0, explanation: `Since ${div} × ${quot} = ${div * quot}, the quotient is ${quot}.` };
        } else if (type === 2) {
          const den = [4, 6, 8][i % 3], num = 1 + (i % (den - 1));
          qObj = { q: `A pizza is sliced into ${den} equal pieces and you eat ${num}. What fraction did you eat?`, options: [`${num}/${den}`, `${den}/${num}`, `${num}/${den + 1}`, `1/${den}`], correct: 0, explanation: `Numerator = slices eaten (${num}), Denominator = total equal slices (${den}).` };
        } else if (type === 3) {
          const l = 5 + (s % 6), w = 3 + (i % 5);
          qObj = { q: `Find the AREA of a rectangle that is ${l} ft long and ${w} ft wide:`, options: [`${l * w} sq ft`, `${2 * (l + w)} sq ft`, `${l + w} sq ft`, `${l * w + 3} sq ft`], correct: 0, explanation: `Area = length × width = ${l} × ${w} = ${l * w} sq ft.` };
        } else {
          const l = 6 + (i % 5), w = 4 + (s % 4);
          qObj = { q: `Find the PERIMETER (all the way around) of a rectangle measuring ${l} in by ${w} in:`, options: [`${2 * (l + w)} in`, `${l * w} in`, `${l + w} in`, `${2 * (l + w) + 4} in`], correct: 0, explanation: `Perimeter = ${l} + ${w} + ${l} + ${w} = ${2 * (l + w)} in.` };
        }
      } else if (grade === 4) {
        // GRADE 4 MATH: Multi-digit Multiplication, Long Division, Equivalent & Adding Fractions, Angles
        const type = i % 5;
        if (type === 0) {
          const a = 21 + (s % 18), b = 4 + (i % 6);
          qObj = { q: `Multiply: ${a} × ${b} = ?`, options: [String(a * b), String(a * b + b), String(a * b - a), String((a + 1) * b)], correct: 0, explanation: `Break ${a} into tens and ones, multiply each by ${b}, and add: ${a * b}.` };
        } else if (type === 1) {
          const div = 4 + (s % 6), quot = 12 + (i % 14);
          qObj = { q: `Divide: ${div * quot} ÷ ${div} = ?`, options: [String(quot), String(quot + 3), String(quot - 2), String(div * 2)], correct: 0, explanation: `${div} × ${quot} = ${div * quot}.` };
        } else if (type === 2) {
          const mult = 2 + (i % 4), num = 1 + (s % 3), den = 4 + (i % 3);
          qObj = { q: `Which fraction is EQUIVALENT to ${num}/${den}?`, options: [`${num * mult}/${den * mult}`, `${num + mult}/${den + mult}`, `${num * mult}/${den}`, `${num}/${den * mult}`], correct: 0, explanation: `Multiply top and bottom by ${mult}: ${num * mult}/${den * mult}.` };
        } else if (type === 3) {
          const den = [6, 8, 10, 12][i % 4], n1 = 1 + (s % 3), n2 = 2 + (i % 3);
          qObj = { q: `Add the fractions: ${n1}/${den} + ${n2}/${den} = ?`, options: [`${n1 + n2}/${den}`, `${n1 + n2}/${den * 2}`, `${n1 * n2}/${den}`, `${Math.abs(n2 - n1) + 1}/${den}`], correct: 0, explanation: `Add numerators (${n1} + ${n2}) and keep denominator ${den}: ${n1 + n2}/${den}.` };
        } else {
          const ang = 25 + (s % 45);
          qObj = { q: `Two angles form a 90° right angle. One angle is ${ang}°. What is the other angle?`, options: [`${90 - ang}°`, `${180 - ang}°`, `${90 + ang}°`, `${90 - ang + 10}°`], correct: 0, explanation: `90° − ${ang}° = ${90 - ang}°.` };
        }
      } else if (grade === 5) {
        // GRADE 5 MATH: Fractions, Decimals, Volume (L×W×H), PEMDAS, Multi-digit Operations
        const type = i % 5;
        if (type === 0) {
          const den = [8, 10, 12][i % 3], n1 = 2 + (s % 3), n2 = 3 + (i % 3);
          qObj = { q: `Add the fractions: ${n1}/${den} + ${n2}/${den} = ?`, options: [`${n1 + n2}/${den}`, `${n1 + n2}/${den * 2}`, `${n1 * n2}/${den}`, `${Math.abs(n2 - n1) + 1}/${den}`], correct: 0, explanation: `${n1}/${den} + ${n2}/${den} = ${n1 + n2}/${den}.` };
        } else if (type === 1) {
          const d1 = (15 + (s % 35)) / 10, d2 = (14 + ((s + 4) % 25)) / 10;
          qObj = { q: `Add the decimals: ${d1.toFixed(1)} + ${d2.toFixed(1)} = ?`, options: [(d1 + d2).toFixed(1), (d1 + d2 + 0.3).toFixed(1), (d1 + d2 - 0.2).toFixed(1), (d1 + d2 + 1.0).toFixed(1)], correct: 0, explanation: `Line up the decimal points to get ${(d1 + d2).toFixed(1)}.` };
        } else if (type === 2) {
          const l = 5 + (s % 5), w = 4 + (i % 4), h = 3 + (i % 3);
          qObj = { q: `Find the VOLUME of a box measuring ${l} ft × ${w} ft × ${h} ft:`, options: [`${l * w * h} cubic ft`, `${l + w + h} cubic ft`, `${l * w} cubic ft`, `${2 * (l + w + h)} cubic ft`], correct: 0, explanation: `Volume = L × W × H = ${l} × ${w} × ${h} = ${l * w * h} cubic ft.` };
        } else if (type === 3) {
          const a = 4 + (s % 7), b = 2 + (i % 5), c = 3 + (i % 4);
          qObj = { q: `Use Order of Operations (PEMDAS): ${a} + ${b} × ${c} = ?`, options: [String(a + b * c), String((a + b) * c), String(a + b + c), String(b * c)], correct: 0, explanation: `Multiply first (${b} × ${c} = ${b * c}), then add ${a} = ${a + b * c}.` };
        } else {
          const div = 5 + (s % 6), quot = 14 + (i % 15);
          qObj = { q: `Divide: ${div * quot} ÷ ${div} = ?`, options: [String(quot), String(quot + 2), String(quot - 1), String(div)], correct: 0, explanation: `${div} × ${quot} = ${div * quot}.` };
        }
      } else if (grade === 6) {
        // Grade 6: PEMDAS, GCF, Percents, Ratios, Area, Intro Equations
        const type = i % 6;
        if (type === 0) {
          const a = 4 + (s % 9), b = 2 + (i % 6), c = 3 + (s % 4);
          qObj = { q: `Evaluate using PEMDAS: ${a} + ${b} × ${c} = ?`, options: [String(a + b * c), String((a + b) * c), String(a + b + c), String(b * c)], correct: 0, explanation: `Multiply first (${b} × ${c} = ${b * c}), then add ${a} to get ${a + b * c}.` };
        } else if (type === 1) {
          const baseG = 3 + (i % 5), n1 = baseG * (2 + (s % 3)), n2 = baseG * (3 + ((s + 1) % 4)), g = gcd(n1, n2);
          qObj = { q: `What is the Greatest Common Factor (GCF) of ${n1} and ${n2}?`, options: [String(g), String(g * 2), String(n1), "1"], correct: 0, explanation: `The largest whole number dividing both ${n1} and ${n2} evenly is ${g}.` };
        } else if (type === 2) {
          const pct = [10, 20, 25, 50][i % 4], base = (3 + (s % 8)) * 20, ans = (base * pct) / 100;
          qObj = { q: `What is ${pct}% of ${base}?`, options: [String(ans), String(ans * 2), String(base - pct), String(ans + 10)], correct: 0, explanation: `${pct}% = ${pct / 100}, and ${pct / 100} × ${base} = ${ans}.` };
        } else if (type === 3) {
          const b = 6 + (s % 7) * 2, h = 4 + (i % 6);
          qObj = { q: `Find the area of a triangle with base ${b} cm and height ${h} cm:`, options: [`${(b * h) / 2} sq cm`, `${b * h} sq cm`, `${b + h} sq cm`, `${(b * h) / 2 + 4} sq cm`], correct: 0, explanation: `Triangle Area = (base × height) ÷ 2 = ${(b * h) / 2}.` };
        } else if (type === 4) {
          const x = 3 + (s % 9), m = 2 + (i % 4), add = 5 + (s % 7);
          qObj = { q: `Solve for x: ${m}x + ${add} = ${m * x + add}`, options: [String(x), String(x + 2), String(m * x), String(x + add)], correct: 0, explanation: `Subtract ${add} (${m}x = ${m * x}), then divide by ${m}: x = ${x}.` };
        } else {
          const r1 = 2 + (i % 4), r2 = 3 + (s % 5), mult = 3 + (s % 4);
          qObj = { q: `A trail mix uses ${r1} cups of nuts for every ${r2} cups of raisins. If you use ${r2 * mult} cups of raisins, how many cups of nuts do you need?`, options: [String(r1 * mult), String(r1 + mult), String(r2 * r1), String(r1 * mult + 2)], correct: 0, explanation: `Scale nuts by ×${mult}: ${r1} × ${mult} = ${r1 * mult}.` };
        }
      } else if (grade === 7) {
        const type = i % 5;
        if (type === 0) {
          const neg = -(5 + (s % 12)), pos = 8 + ((s + 3) % 15);
          qObj = { q: `Evaluate: ${neg} + ${pos} = ?`, options: [String(neg + pos), String(-(neg + pos)), String(Math.abs(neg) + pos), String(neg - pos)], correct: 0, explanation: `${neg} + ${pos} = ${neg + pos}.` };
        } else if (type === 1) {
          const a = -(2 + (i % 6)), b = -(3 + (s % 7));
          qObj = { q: `Multiply: (${a}) × (${b}) = ?`, options: [String(a * b), String(-(a * b)), String(a + b), String(Math.abs(a) + Math.abs(b))], correct: 0, explanation: `Negative × negative = positive: ${a * b}.` };
        } else if (type === 2) {
          const a = 3 + (i % 5), x = 2 + (s % 9), b = 4 + (s % 8);
          qObj = { q: `Solve for x: ${a}x − ${b} = ${a * x - b}`, options: [String(x), String(x + 2), String(x - 1), String(a * x)], correct: 0, explanation: `Add ${b} (${a}x = ${a * x}), divide by ${a}: x = ${x}.` };
        } else if (type === 3) {
          const k = 2 + (i % 4), x = 3 + (s % 7), add = 2 + (s % 5), rhs = k * (x + add);
          qObj = { q: `Solve: ${k}(x + ${add}) = ${rhs}`, options: [String(x), String(x + add), String(rhs / k), String(x + k)], correct: 0, explanation: `Divide by ${k} → x + ${add} = ${x + add} → x = ${x}.` };
        } else {
          const hrs = 3 + (i % 4), mph = 45 + (s % 5) * 5;
          qObj = { q: `A car travels ${mph * hrs} miles in ${hrs} hours. What is its unit rate?`, options: [`${mph} mph`, `${mph + 10} mph`, `${mph - 5} mph`, `${mph * hrs} mph`], correct: 0, explanation: `${mph * hrs} ÷ ${hrs} = ${mph} mph.` };
        }
      } else if (grade === 8) {
        const type = i % 5;
        if (type === 0) {
          const m = 2 + (s % 5), x1 = 1 + (i % 4), y1 = 2 + (s % 6), dx = 2 + (i % 3);
          qObj = { q: `Find the slope through (${x1}, ${y1}) and (${x1 + dx}, ${y1 + m * dx}):`, options: [String(m), String(m + 2), String(m * dx), `1/${m}`], correct: 0, explanation: `m = ${m * dx} / ${dx} = ${m}.` };
        } else if (type === 1) {
          const m = 2 + (i % 5), b = 3 + (s % 8), x = 3 + (i % 5);
          qObj = { q: `If f(x) = ${m}x + ${b}, find f(${x}):`, options: [String(m * x + b), String(m + x + b), String(m * x - b), String((m + b) * x)], correct: 0, explanation: `f(${x}) = ${m}(${x}) + ${b} = ${m * x + b}.` };
        } else if (type === 2) {
          const x = 2 + (s % 8), c = 3 * x - 4;
          qObj = { q: `Solve: 5x − 4 = 2x + ${c}`, options: [String(x), String(x + 3), String(x - 1), String(c)], correct: 0, explanation: `3x = ${3 * x} → x = ${x}.` };
        } else if (type === 3) {
          const r = 3 + (i % 8);
          qObj = { q: `What is the positive solution to x² = ${r * r}?`, options: [String(r), String(r * 2), String(r + 1), String((r * r) / 2)], correct: 0, explanation: `√${r * r} = ${r}.` };
        } else {
          const r1 = 2 + (i % 6), r2 = 1 + (s % 5);
          qObj = { q: `What are the solutions to (x − ${r1})(x + ${r2}) = 0?`, options: [`x = ${r1} or x = -${r2}`, `x = -${r1} or x = ${r2}`, `x = ${r1 + r2} only`, `x = ${r1 * r2} only`], correct: 0, explanation: `Zero Product Property gives x = ${r1} or x = −${r2}.` };
        }
      } else if (grade === 9 || grade === 10) {
        const triples = [[3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 15, 17], [9, 12, 15]];
        const type = i % 5;
        if (type === 0) {
          const [a, b, c] = triples[i % triples.length];
          qObj = { q: `A right triangle has legs ${a} and ${b}. Find hypotenuse c:`, options: [String(c), String(a + b), String(c * c), String(b - a)], correct: 0, explanation: `${a}² + ${b}² = ${c * c}, so c = ${c}.` };
        } else if (type === 1) {
          const a1 = 35 + (s % 45), a2 = 40 + (i % 40), a3 = 180 - a1 - a2;
          qObj = { q: `Two angles of a triangle measure ${a1}° and ${a2}°. Find the third angle:`, options: [`${a3}°`, `${a3 + 15}°`, `${180 - a1}°`, `${a1 + a2}°`], correct: 0, explanation: `180° − ${a1}° − ${a2}° = ${a3}°.` };
        } else if (type === 2) {
          const n = 5 + (i % 6), sum = (n - 2) * 180;
          qObj = { q: `Find the sum of all interior angles of a ${n}-sided polygon:`, options: [`${sum}°`, `${n * 180}°`, `${sum - 180}°`, "360°"], correct: 0, explanation: `(${n} − 2) × 180° = ${sum}°.` };
        } else if (type === 3) {
          const r = 3 + (i % 8);
          qObj = { q: `What is the exact area of a circle with radius ${r}?`, options: [`${r * r}π`, `${2 * r}π`, `${r}π`, `${r * r * 2}π`], correct: 0, explanation: `A = πr² = ${r * r}π.` };
        } else {
          const ang = 40 + (s % 95);
          qObj = { q: `What is the supplement of a ${ang}° angle?`, options: [`${180 - ang}°`, `${90 - Math.min(89, ang)}°`, `${360 - ang}°`, `${ang}°`], correct: 0, explanation: `180° − ${ang}° = ${180 - ang}°.` };
        }
      } else {
        const type = i % 5;
        if (type === 0) {
          const p = 2 + (i % 6), val = Math.pow(2, p);
          qObj = { q: `Evaluate log₂(${val}):`, options: [String(p), String(val / 2), String(p + 1), String(p * 2)], correct: 0, explanation: `2^${p} = ${val}, so log₂(${val}) = ${p}.` };
        } else if (type === 1) {
          const a = 2 + (i % 5), n = 2 + (s % 4), ans = a * n * Math.pow(2, n - 1);
          qObj = { q: `If f(x) = ${a}x^${n}, find f'(2):`, options: [String(ans), String(a * n), String(a * Math.pow(2, n)), String(ans + a)], correct: 0, explanation: `f'(x) = ${a * n}x^${n - 1} → f'(2) = ${ans}.` };
        } else if (type === 2) {
          const m = 2 + (i % 4), x = 2 + (s % 6), b = 3 + (i % 7);
          qObj = { q: `Evaluate lim (x → ${x}) of (${m}x + ${b}):`, options: [String(m * x + b), String(m + x + b), String(m * x), String(m * x - b)], correct: 0, explanation: `Direct substitution: ${m}(${x}) + ${b} = ${m * x + b}.` };
        } else if (type === 3) {
          const deg = 15 + (s % 70);
          qObj = { q: `What is sin²(${deg}°) + cos²(${deg}°)?`, options: ["1", "0", String(deg), "0.5"], correct: 0, explanation: "Pythagorean Identity: sin²(θ) + cos²(θ) = 1." };
        } else {
          const r1 = 2 + (i % 5), r2 = 3 + (s % 5);
          qObj = { q: `What is the larger root of x² − ${r1 + r2}x + ${r1 * r2} = 0?`, options: [String(Math.max(r1, r2)), String(r1 + r2), String(r1 * r2), String(Math.min(r1, r2) - 1)], correct: 0, explanation: `Factors to (x − ${r1})(x − ${r2}) = 0.` };
        }
      }
      qs.push(shuffleQuestionOptions(qObj, s + i));
    }
    return qs;
  }

  // ==================== 2. GRADE-CALIBRATED SUBJECT QUESTION BANKS ====================
  function expandSubjectQuiz(baseQuestions, subjectCategory, cleanTopic, courseTitle, grade, weekNum, dayIdx, targetCount) {
    const out = (baseQuestions || []).map((q, idx) => shuffleQuestionOptions(q, weekNum * 11 + dayIdx * 3 + idx));

    const extrasByCat = {
      k2_theology: [
        { q: "Who made the sun, the stars, the animals, and you?", options: ["God", "A robot", "A tree", "A bicycle"], correct: 0, explanation: "Genesis 1 teaches that God lovingly created everything!" },
        { q: "How does God feel about you?", options: ["God loves you and cares for you every day", "God forgets about kids", "God only loves grown-ups", "God is far away"], correct: 0, explanation: "Jesus welcomed the little children and showed God's deep love." },
        { q: "What is praying?", options: ["Talking and listening to God anytime", "Only yelling loudly", "Reading a math chart", "Taking a nap"], correct: 0, explanation: "We can pray to thank God, ask for help, and love others." },
        { q: "How can you show God's kindness at home today?", options: ["Sharing, helping Mom and Dad, and using kind words", "Grabbing toys away", "Telling a lie", "Ignoring everyone"], correct: 0, explanation: "Kindness and honesty honor God and bless our family!" },
        { q: "What did God put in the sky after Noah's flood as a special promise?", options: ["A bright rainbow", "A giant castle", "A snowstorm", "A spaceship"], correct: 0, explanation: "The rainbow reminds us that God always keeps His promises." },
        { q: "Who is the Good Shepherd who takes care of His sheep (Psalm 23)?", options: ["The Lord (Jesus)", "A sleepy bear", "A cloud", "A fisherman's net"], correct: 0, explanation: "Psalm 23 says 'The Lord is my shepherd.'" },
        { q: "Why did Jesus tell the story of the Good Samaritan?", options: ["To teach us to love and help anyone in need", "To teach us to run fast", "To talk about riding boats", "To hide from neighbors"], correct: 0, explanation: "A true neighbor shows mercy and helps others." },
        { q: "Which special book tells us God's big true story from Creation to Jesus?", options: ["The Bible", "A comic strip", "A cookbook", "A map of roads"], correct: 0, explanation: "The Bible is God's Word to us." },
        { q: "What did Jesus do when a big storm scared His friends on the boat?", options: ["He calmed the wind and waves with His voice", "He jumped into a tree", "He told them to panic", "He left the boat"], correct: 0, explanation: "Jesus has power over the wind and waves and gives us peace." },
        { q: "What does it mean to be truthful?", options: ["Telling the truth even when it feels hard", "Making up stories to hide mistakes", "Blaming your brother or sister", "Never speaking"], correct: 0, explanation: "God delights in honest hearts." }
      ],
      k2_reading: [
        { q: "Which word starts with the same /m/ sound as 'MOON'?", options: ["Milk", "Sun", "Dog", "Hat"], correct: 0, explanation: "Moon and Milk both start with the letter M (/m/)!" },
        { q: "Which word rhymes with 'CAT'?", options: ["Hat", "Dog", "Sun", "Cup"], correct: 0, explanation: "Cat and Hat both end with the -at sound!" },
        { q: "Which word rhymes with 'SUN'?", options: ["Run", "Fish", "Book", "Red"], correct: 0, explanation: "Sun and Run both end with the -un sound!" },
        { q: "What should EVERY sentence start with?", options: ["A CAPITAL (uppercase) letter", "A number 9", "A picture of a frog", "A period"], correct: 0, explanation: "Every sentence begins with a capital letter and ends with punctuation (. ? !)." },
        { q: "Which mark goes at the end of a question like 'Where is my puppy___'?", options: ["Question mark (?)", "Comma (,)", "Period (.)", "Nothing"], correct: 0, explanation: "Questions always end with a question mark (?)." },
        { q: "Who are the 'Characters' in a storybook?", options: ["The people or animals the story is about", "The page numbers", "Only the front cover", "The shelf in the library"], correct: 0, explanation: "Characters are who the story is about!" },
        { q: "What is the 'Setting' of a story?", options: ["Where and when the story happens", "The author's lunch", "The letters of the alphabet", "A spelling word"], correct: 0, explanation: "Setting tells us WHERE and WHEN a story takes place." },
        { q: "Which word is a NAMING word (Noun)?", options: ["Puppy", "Jump", "Fast", "Blue"], correct: 0, explanation: "A noun names a person, place, animal, or thing (like Puppy)." },
        { q: "Which word is an ACTION word (Verb)?", options: ["Run", "Apple", "Chair", "Green"], correct: 0, explanation: "A verb shows action—something you can do (like Run)!" },
        { q: "Blend the sounds /s/ - /u/ - /n/. What word do you hear?", options: ["Sun", "Sit", "Sad", "Top"], correct: 0, explanation: "/s/ + /u/ + /n/ blends smoothly into SUN!" }
      ],
      k2_science: [
        { q: "Which of our FIVE SENSES do we use with our eyes to see colors and shapes?", options: ["Sight", "Taste", "Smell", "Hearing"], correct: 0, explanation: "Our eyes give us the sense of sight!" },
        { q: "Which one of these is a LIVING thing that grows and needs water?", options: ["A sunflower plant", "A shiny rock", "A plastic spoon", "A toy brick"], correct: 0, explanation: "Plants and animals are living things; rocks and toys are nonliving." },
        { q: "What part of a plant grows underground and drinks water from the soil?", options: ["The roots", "The flower petals", "The clouds", "The wind"], correct: 0, explanation: "Roots anchor the plant and soak up water and nutrients." },
        { q: "What do plants need to grow healthy and green?", options: ["Sunlight, water, air, and soil", "Only darkness and ice", "Candy and soda", "Video games"], correct: 0, explanation: "Plants use sunlight, water, air, and soil to grow." },
        { q: "Which season brings warm sunny days and long bright evenings?", options: ["Summer", "Winter", "Midnight", "Tuesday"], correct: 0, explanation: "Summer is the warmest season with the longest daylight." },
        { q: "What happens to an ice cube when you set it in warm sunshine?", options: ["It melts into liquid water", "It turns into a rock", "It grows legs", "It freezes harder"], correct: 0, explanation: "Warmth melts solid ice into liquid water." },
        { q: "When you PUSH a toy car across the floor, what happens?", options: ["It rolls away from you", "It turns into a bird", "It stays glued forever", "It turns off the lights"], correct: 0, explanation: "A push moves an object away from you; a pull brings it closer." },
        { q: "What gives Earth light and warmth every morning?", options: ["The Sun", "A flashlight", "The ocean", "A cloud"], correct: 0, explanation: "The Sun lights and warms our planet every day." },
        { q: "Which sense helps you hear a bird singing in a tree?", options: ["Hearing (with your ears)", "Taste", "Smell", "Touch"], correct: 0, explanation: "Your ears hear sound vibrations like birdsong and music!" },
        { q: "Where does a fish live and breathe?", options: ["In water (oceans, rivers, or ponds)", "In dry desert sand", "High up in a cloud", "Inside a volcano"], correct: 0, explanation: "Fish have gills and fins designed for living in water." }
      ],
      k2_history: [
        { q: "Who helps put out fires and keep our neighborhood safe?", options: ["Firefighters", "Astronauts on Mars", "Pirates", "Dinosaurs"], correct: 0, explanation: "Firefighters are brave community helpers who protect our homes." },
        { q: "Which of these is a NEED (something every family must have to live)?", options: ["Food, water, and a safe home", "A shiny new video game", "Ten balloons", "A racing trophy"], correct: 0, explanation: "Needs keep us alive and healthy; wants are fun extras!" },
        { q: "What does a MAP help us do?", options: ["Find where places, roads, and water are located", "Bake a chocolate cake", "Sing a song", "Measure our temperature"], correct: 0, explanation: "Maps and globes show us where neighborhoods, countries, and oceans are." },
        { q: "On a globe, what does the big BLUE part usually show?", options: ["Water (oceans and lakes)", "Grass and trees", "Snowy mountains", "Brick roads"], correct: 0, explanation: "Blue on maps and globes represents water; green/brown represents land." },
        { q: "Why do families and towns have kind rules?", options: ["To keep everyone safe and treat people fairly", "So nobody can ever smile", "To make puzzles harder", "For no reason at all"], correct: 0, explanation: "Good rules protect people and help communities live in peace." },
        { q: "What are the four main directions on a compass rose?", options: ["North, South, East, and West", "Up, Spin, Jump, and Hop", "Red, Blue, Yellow, and Green", "Monday, Tuesday, Friday, Sunday"], correct: 0, explanation: "N, S, E, W help travelers know which way to go!" },
        { q: "Who was the very first President of the United States?", options: ["George Washington", "A movie actor", "King Arthur", "Christopher Robin"], correct: 0, explanation: "George Washington led America with courage and honesty." },
        { q: "What does it mean to be a good neighbor and citizen?", options: ["Being honest, helping others, and taking care of our neighborhood", "Leaving trash on the sidewalk", "Never sharing", "Breaking promises"], correct: 0, explanation: "Good citizens serve others with kindness and respect." },
        { q: "Which community helper delivers letters and packages to your mailbox?", options: ["A mail carrier", "A deep-sea diver", "A zookeeper", "A symphony conductor"], correct: 0, explanation: "Mail carriers connect families and businesses every day." },
        { q: "What is the difference between a GOOD (like an apple) and a SERVICE (like a haircut)?", options: ["A good is an item you can hold; a service is helpful work someone does for you", "They are both animals", "A service is always a toy", "There is no difference"], correct: 0, explanation: "Goods are physical items; services are helpful actions!" }
      ],
      ela_upper: [
        { q: "What is 'Text Evidence' when answering a reading comprehension question?", options: ["A specific quote, fact, or detail straight from the passage that proves your answer", "A random guess without looking back at the story", "Only the book's cover color", "Your favorite lunch"], correct: 0, explanation: "Strong readers always point right back to proof in the text!" },
        { q: "What is the difference between a story's TOPIC and its THEME?", options: ["Topic is what it's about in 1–2 words; Theme is the deeper life lesson or message", "Theme is the author's name", "They mean the exact same thing", "Topic is only for math"], correct: 0, explanation: "Example: Topic = friendship; Theme = true friends stand by each other in hard times." },
        { q: "What is the Main Idea of an informational paragraph?", options: ["The central point that all the supporting details explain and back up", "One tiny fun fact at the end", "The boldest word only", "A question with no answer"], correct: 0, explanation: "Supporting details all point toward the main idea." },
        { q: "Which sentence uses a SIMILE (comparing two things with 'like' or 'as')?", options: ["The runner sped down the track like a bolt of lightning.", "The library was a treasure chest.", "The tall oak tree stood quietly.", "We read three chapters today."], correct: 0, explanation: "Similes compare using 'like' or 'as'; metaphors compare directly without them." },
        { q: "What does the prefix 're-' mean in words like 'rewrite', 'rebuild', and 'return'?", options: ["Again / back", "Not / opposite", "Before", "Tiny"], correct: 0, explanation: "Knowing prefixes and roots unlocks hundreds of new vocabulary words!" },
        { q: "How do you use Context Clues when you see an unfamiliar word?", options: ["Read the surrounding sentences for hints, definitions, or examples of what the word means", "Skip the entire chapter immediately", "Guess a completely random word", "Close the book"], correct: 0, explanation: "Authors often leave helpful clues right next to big vocabulary words." },
        { q: "What are the three main parts of a strong paragraph?", options: ["Topic Sentence → Supporting Details → Concluding Sentence", "Three random emojis", "One giant run-on sentence", "Only a title"], correct: 0, explanation: "Clear structure makes your writing enjoyable and persuasive." },
        { q: "Which sentence uses quotation marks for dialogue correctly?", options: ["\"Let's check the map,\" said Noah, \"before we cross the creek.\"", "\"Lets check the map\" said Noah \"before we cross the creek.\"", "Let's check the map, said Noah.", "\"Let's check the map, said Noah.\""], correct: 0, explanation: "Quotation marks wrap the exact spoken words, with commas placed inside." },
        { q: "What is the difference between First-Person and Third-Person Point of View?", options: ["First-Person uses 'I/me/my' (a character inside the story); Third-Person uses 'he/she/they' (an outside narrator)", "First-Person is always nonfiction", "Third-Person uses 'I' everywhere", "There is no difference"], correct: 0, explanation: "Pronouns tell you immediately who is telling the story." },
        { q: "What does the Greek root 'bio-' (biology, biography) mean?", options: ["Life", "Water", "Earth", "Far away"], correct: 0, explanation: "Bio = life, Graph = write → Biography = writing about someone's life!" },
        { q: "Which sentence avoids a fragment and expresses a complete thought?", options: ["Because it rained all morning, the soccer match moved indoors.", "Because it rained all morning.", "Running quickly through the park.", "Under the tall wooden bridge."], correct: 0, explanation: "A complete sentence needs a subject, a verb, and a complete thought." },
        { q: "Why should writers revise and edit their first draft?", options: ["Revising sharpens ideas and word choice; editing fixes spelling, capitals, and punctuation", "First drafts are always perfect", "Editing erases your best ideas", "Only newspaper reporters edit"], correct: 0, explanation: "Great writing is rewritten—even famous authors edit carefully!" }
      ],
      history_upper: [
        { q: "What is the difference between a Primary Source and a Secondary Source?", options: ["A Primary Source comes directly from someone who witnessed the event; a Secondary Source analyzes it later", "Primary sources are always fiction", "Secondary sources were written first", "There is no difference"], correct: 0, explanation: "Letters, diaries, speeches, and treaties are primary sources; textbooks are secondary." },
        { q: "What are the Three Branches of the U.S. Government?", options: ["Legislative (makes laws), Executive (enforces laws), and Judicial (interprets laws)", "Mayors, Teachers, and Coaches", "Army, Navy, and Air Force", "North, South, and West"], correct: 0, explanation: "Separation of Powers keeps any one branch from holding unchecked control." },
        { q: "Why did the U.S. Constitution include Checks and Balances?", options: ["So each branch can limit the power of the other two and protect citizens' liberty", "So one leader can make every law alone", "To slow down mail delivery", "To ban state governments"], correct: 0, explanation: "Checks and balances preserve constitutional freedom." },
        { q: "What are the first ten amendments to the U.S. Constitution called?", options: ["The Bill of Rights", "The Oregon Trail", "The Magna Carta", "The Silk Road"], correct: 0, explanation: "The Bill of Rights protects religious freedom, speech, press, assembly, and fair trials." },
        { q: "In economics, what happens when demand for a popular item is high while supply is scarce?", options: ["The market price usually rises", "The price automatically drops to zero", "Nobody wants it anymore", "Supply has no effect on price"], correct: 0, explanation: "Supply and demand interact to set market prices." },
        { q: "How did geography (rivers, harbors, and mountains) shape where early civilizations settled?", options: ["Rivers provided fresh water, fertile farming soil, and trade routes", "People avoided water completely", "Geography never affected towns", "Everyone settled only on icy peaks"], correct: 0, explanation: "Civilizations from Mesopotamia and Egypt to Colonial America grew along rivers and ports." },
        { q: "What core principle did the Declaration of Independence (1776) proclaim?", options: ["All people are endowed by their Creator with unalienable rights—Life, Liberty, and the pursuit of Happiness", "Kings can never be questioned", "Only one colony gets to vote", "Rights come only from taxes"], correct: 0, explanation: "Natural God-given rights anchor American liberty." },
        { q: "What does 'Opportunity Cost' mean when making a budget choice?", options: ["The value of the next-best option you give up when you choose something else", "A free gift", "Only sales tax", "A history date"], correct: 0, explanation: "Every dollar or hour spent on one thing means giving up another option." },
        { q: "How does reading a historical timeline help historians understand Cause and Effect?", options: ["Seeing the exact order of events shows how earlier choices sparked later outcomes", "Timelines only decorate walls", "Order of events doesn't matter", "Timelines remove dates"], correct: 0, explanation: "Chronology makes cause-and-effect connections crystal clear." },
        { q: "What civic virtues keep a free republic strong?", options: ["Honesty, active citizenship, obeying just laws, serving neighbors, and staying informed", "Ignoring elections and community needs", "Refusing to listen to anyone", "Breaking promises"], correct: 0, explanation: "A healthy community depends on virtuous, informed citizens." },
        { q: "What major change did the 13th Amendment (1865) achieve in America?", options: ["It permanently abolished slavery across the United States", "It created the post office", "It set highway speed limits", "It bought Alaska"], correct: 0, explanation: "The 13th Amendment ended slavery permanently." },
        { q: "What is 'Federalism' in the U.S. government?", options: ["Power is shared between the national (federal) government and individual state governments", "Only one city rules the country", "States cannot pass local laws", "Courts write all budgets"], correct: 0, explanation: "Federalism balances national unity with local self-government." }
      ],
      theology: [
        { q: "Which four major movements connect the entire storyline of the Bible?", options: ["Creation → Fall → Redemption → Restoration", "Math → Logic → Art → Science", "Only disconnected short proverbs", "Summer → Fall → Winter → Spring"], correct: 0, explanation: "Every book in Scripture fits inside Creation, Fall, Redemption, and Restoration." },
        { q: "What does reading a Bible verse 'in context' mean?", options: ["Reading the verses before and after it so you understand the full setting and meaning", "Picking one random phrase without checking the chapter", "Skipping the story and reading only chapter numbers", "Guessing without reading the text"], correct: 0, explanation: "Context prevents misunderstandings and shows what the author truly meant." },
        { q: "In Genesis 1:27, what does being made in the 'Image of God' teach about every human being?", options: ["Every person has God-given value, dignity, and moral responsibility", "Only famous leaders have real worth", "People have no responsibility to care for creation", "Humans are identical to rocks and plants"], correct: 0, explanation: "Imago Dei affirms the dignity and stewardship calling of every person." },
        { q: "What is 'Stewardship' in a Christian worldview?", options: ["Faithfully caring for God's creation, our talents, and the people around us", "Ignoring responsibilities and wasting resources", "Refusing to help neighbors in need", "Thinking only about yourself"], correct: 0, explanation: "Stewardship means managing what God entrusts to us with wisdom and care." },
        { q: "Why does God invite people into a day of rest (Sabbath) after six days of work?", options: ["To worship Him, enjoy His good gifts, and restore our bodies and minds", "Because God ran out of energy", "So nobody ever works again", "As a punishment"], correct: 0, explanation: "Sabbath establishes a healthy, joyful rhythm of purposeful work and worshipful rest." },
        { q: "What is a 'Covenant' in the Bible?", options: ["A faithful, binding promise and relationship established by God with His people", "A casual guess that can be broken anytime", "A secret math equation", "A geographical map"], correct: 0, explanation: "God's covenants reveal His steadfast faithfulness." },
        { q: `How should studying "${cleanTopic}" shape a Grade ${grade === 0 ? "K" : grade} student's everyday life?`, options: ["By strengthening honesty, courage, kindness, and trust in God's Word", "By making us proud and argumentative", "By staying only in a notebook with zero real-life action", "By ignoring how we treat our family"], correct: 0, explanation: "Biblical wisdom transforms both the mind and everyday character." },
        { q: "When the Bible records stories of hardship (like Joseph, David, or Daniel), what core truth stands out?", options: ["God remains faithful and can bring good and growth even out of difficult seasons", "Hardship means God forgot His promises", "Faithful people never face challenges", "We should give up at the first obstacle"], correct: 0, explanation: "Scripture consistently shows God's providence and presence through trials." },
        { q: "What three simple study questions help you unlock any chapter of the Bible?", options: ["What happened? What does it show about God? How do I live it out today?", "How long is the page? What font is used? Can I skip it?", "Only memorizing dates", "Ignoring who is speaking"], correct: 0, explanation: "Observation, Understanding, and Application unlock clear Bible comprehension." },
        { q: "How do the Old Testament and New Testament connect together?", options: ["The Old Testament prepares and promises the Savior; the New Testament reveals Jesus fulfilling those promises", "They contradict each other completely", "They are unrelated history books", "Only the first chapter matters"], correct: 0, explanation: "Jesus taught that the Law, Prophets, and Psalms point to Him (Luke 24:44)." },
        { q: "In Matthew 22, what did Jesus call the two greatest commandments?", options: ["Love God with all your heart, soul, and mind, and love your neighbor as yourself", "Win every argument and never rest", "Collect the most gold and ignore others", "Memorize every rule without caring about people"], correct: 0, explanation: "Love of God and love of neighbor summarize the heart of God's law." },
        { q: "What are the Fruit of the Spirit listed in Galatians 5?", options: ["Love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control", "Anger, jealousy, and impatience", "Speed, fame, and wealth", "Luck and pride"], correct: 0, explanation: "Galatians 5:22–23 describes the character God grows inside believers." }
      ],
      science: [
        { q: "What is a Hypothesis in a real science experiment?", options: ["A testable 'If... then...' prediction based on observation and research", "A wild guess that cannot be tested", "The final summary written after the lab", "A list of lab safety goggles"], correct: 0, explanation: "A good hypothesis is always specific and testable." },
        { q: "In a fair test, what is the INDEPENDENT variable?", options: ["The ONE factor that the scientist intentionally changes", "The measurement recorded at the end", "Everything kept identical", "The title of the lab"], correct: 0, explanation: "Memory trick: 'I' change the Independent variable." },
        { q: "What is the DEPENDENT variable in an experiment?", options: ["The outcome or data that you measure because of your change", "The thing you never measure", "The brand of notebook used", "A random opinion"], correct: 0, explanation: "Memory trick: Dependent = Data you measure." },
        { q: "Why do scientists keep Control Variables constant during a test?", options: ["So you know for sure which single change caused the measured result", "To make experiments take longer", "To force the hypothesis to be right", "So you never need measurements"], correct: 0, explanation: "Changing multiple variables at once ruins a fair test." },
        { q: "What should a scientist do if experiment data proves their hypothesis WRONG?", options: ["Report the honest data and revise the explanation—disproving an idea is real progress!", "Erase the data and write fake numbers", "Hide the notebook", "Claim the hypothesis was right anyway"], correct: 0, explanation: "Honest data is the heartbeat of real science." },
        { q: "Which three steps form a clear scientific explanation (CER)?", options: ["Claim → Evidence → Reasoning", "Guess → Ignore → Repeat", "Title → Color → Margin", "Rumor → Hype → Luck"], correct: 0, explanation: "Claim states your answer, Evidence gives measured data, Reasoning connects them." },
        { q: "What is the difference between a Physical Change (like melting ice) and a Chemical Change (like burning wood)?", options: ["Physical changes keep the same substance; chemical changes create a brand-new substance", "Physical changes cannot be observed", "Chemical changes only happen in water", "There is no difference"], correct: 0, explanation: "Melting ice is still H₂O; burning wood turns it into ash and gases." },
        { q: "What are the three classic states of matter encountered every day?", options: ["Solid, Liquid, and Gas", "Hot, Warm, and Cold", "Big, Medium, and Small", "Fast, Slow, and Stopped"], correct: 0, explanation: "Solids hold shape, liquids take container shape, and gases fill available space." },
        { q: "What force pulls planets in orbit around the Sun and keeps our feet on Earth?", options: ["Gravity", "Magnetism", "Friction", "Static electricity"], correct: 0, explanation: "Gravity is the universal attractive force between masses." },
        { q: "In an ecosystem food web, what role do green plants (producers) play?", options: ["They capture sunlight via photosynthesis to make food energy for the whole web", "They only eat carnivores", "They block all oxygen", "They have no role"], correct: 0, explanation: "Producers convert solar energy into chemical energy." },
        { q: "What causes Day and Night on Earth?", options: ["Earth rotating (spinning) on its axis once every 24 hours", "The Moon blocking the Sun every evening", "Earth moving to a different galaxy at night", "Clouds turning off sunlight"], correct: 0, explanation: "Rotation creates day and night; tilt + orbit create seasons." },
        { q: "Why is repeating an experiment multiple times (multiple trials) so important?", options: ["It spots accidental errors and confirms the pattern is genuinely repeatable", "Because one trial is illegal", "To waste lab supplies", "So you get different numbers on purpose"], correct: 0, explanation: "Repeatable trials separate real scientific laws from lucky accidents." }
      ],
      asl: [
        { q: "In American Sign Language (ASL), why are facial expressions essential?", options: ["They carry grammar—turning a statement into a yes/no or wh-question and showing tone", "They are optional decorations", "ASL only uses fingers with a blank face", "They replace all hand signs"], correct: 0, explanation: "Eyebrows and expressions are a core part of ASL grammar." },
        { q: "When asking a Yes/No question in ASL, what should your eyebrows do?", options: ["Raise UP while tilting your head slightly forward", "Squeeze down tightly", "Stay completely still", "Look away"], correct: 0, explanation: "Eyebrows UP = Yes/No; eyebrows DOWN = Wh-question." },
        { q: "When asking a Wh-question (Who, What, Where, When, Why) in ASL, what do your eyebrows do?", options: ["Furrow/lower DOWN slightly", "Raise straight up", "Wink rapidly", "Never move"], correct: 0, explanation: "Furrowed eyebrows signal a Wh-question." },
        { q: "What is 'Fingerspelling' used for most often in ASL?", options: ["Proper nouns like names, cities, brands, and words without a dedicated sign", "Spelling out every word in every sentence", "Counting to 1,000 only", "Replacing facial expressions"], correct: 0, explanation: "Fingerspelling spells names and specific terms cleanly." },
        { q: "What are the 5 building blocks (parameters) of every ASL sign?", options: ["Handshape, Location, Movement, Palm Orientation, and Non-Manual Markers", "Volume, Pitch, Speed, Rhyme, and Spelling", "Color, Font, Size, Page, and Margin", "Only handshape"], correct: 0, explanation: "All 5 parameters combine to form exact ASL meaning." },
        { q: "How do you get a Deaf person's attention politely?", options: ["A gentle tap on the shoulder or a small friendly wave in their line of sight", "Yelling loudly from behind", "Grabbing their hands", "Ignoring eye contact"], correct: 0, explanation: "Respectful visual cues follow Deaf culture etiquette." },
        { q: "Why is eye contact so important during an ASL conversation?", options: ["ASL is a visual language—looking away is like plugging your ears in a spoken conversation", "It doesn't matter", "Stare at the floor", "Watch only your own hands"], correct: 0, explanation: "Eye contact lets you see both signs and facial grammar." },
        { q: "Where should you look when someone is signing to you?", options: ["At their face/upper chest area so you catch expressions AND hand signs together", "Directly at their fingertips only", "Down at your shoes", "Out the window"], correct: 0, explanation: "Peripheral vision catches hand signs while your eyes read facial grammar." }
      ],
      coding: [
        { q: "What is an Algorithm in coding?", options: ["A clear, step-by-step set of instructions that solves a problem", "A broken computer screen", "A type of battery", "Random guessing"], correct: 0, explanation: "Every program is built from exact step-by-step algorithms." },
        { q: "What does a Variable do in a game or app?", options: ["Stores a value (like score, player name, or timer) that can change while running", "Deletes the computer", "Only draws circles", "Turns off the monitor"], correct: 0, explanation: "Think of a variable like a labeled box holding data." },
        { q: "Why do programmers use Loops?", options: ["To repeat a block of code cleanly without copying it 100 times", "To slow down the computer", "To erase variables", "Only to change font color"], correct: 0, explanation: "Loops automate repetition cleanly." },
        { q: "What does an `if / else` Conditional let a game do?", options: ["Make smart decisions depending on whether a condition is true or false", "Ignore all clicks", "Run backwards", "Print blank spaces"], correct: 0, explanation: "Conditionals power game rules (e.g., IF score >= 100, You Win!)." },
        { q: "What is Debugging?", options: ["Finding and fixing mistakes (bugs) in your code step by step", "Adding insects to a keyboard", "Throwing away your laptop", "Never testing code"], correct: 0, explanation: "Error messages are helpful clues for debugging!" },
        { q: "What is a smart online safety habit?", options: ["Use strong passwords, never share private info with strangers, and ask a parent before clicking unknown links", "Use '123456' everywhere", "Click random pop-ups", "Share your address online"], correct: 0, explanation: "Digital safety protects you and your family." },
        { q: "How do computers store text, music, and images deep down?", options: ["Using Binary numbers made of 0s and 1s (bits)", "Tiny handwritten notes", "Roman numerals only", "Water droplets"], correct: 0, explanation: "All digital data is encoded in 0s and 1s." },
        { q: "What does a coordinate `(x, y)` control in 2D game design?", options: ["A character's horizontal (left/right) and vertical (up/down) position", "Music volume", "Battery percentage", "Wi-Fi bars"], correct: 0, explanation: "x moves left/right; y moves up/down." }
      ],
      art: [
        { q: "What are the three Primary Colors in traditional painting?", options: ["Red, Yellow, and Blue", "Green, Orange, and Purple", "Black, Gray, and White", "Pink, Brown, and Teal"], correct: 0, explanation: "Red, Yellow, and Blue mix to form secondary colors (Orange, Green, Purple)." },
        { q: "What color do you get when you mix Blue and Yellow paint?", options: ["Green", "Orange", "Purple", "Red"], correct: 0, explanation: "Blue + Yellow = Green!" },
        { q: "What does 'Value' mean in drawing and shading?", options: ["How light or dark an area appears, creating 3D form", "How much the pencil costs", "The number of pages", "Only neon colors"], correct: 0, explanation: "Light highlights and dark shadows make drawings look 3D." },
        { q: "How do artists make complex objects easier to draw?", options: ["Start lightly using simple basic shapes (circles, boxes, triangles)", "Press as hard as possible immediately", "Never sketch guidelines", "Quit on the first stroke"], correct: 0, explanation: "Light basic shapes lock in great proportions." },
        { q: "In Music, what is the difference between Beat and Rhythm?", options: ["Beat is the steady pulse (like a heartbeat); Rhythm is the pattern of long and short notes", "They are unrelated to music", "Beat is only lyrics", "Music has no pulse"], correct: 0, explanation: "A steady beat anchors every melody and rhythm." },
        { q: "Which colors are Warm Colors on the color wheel?", options: ["Red, Orange, and Yellow", "Blue, Green, and Violet", "Black and Silver", "Only White"], correct: 0, explanation: "Warm colors feel sunny and energetic; cool colors feel calm." },
        { q: "In One-Point Perspective, where do parallel road edges appear to meet?", options: ["At a Vanishing Point on the horizon line", "In four random corners", "Behind the sketchbook", "Nowhere"], correct: 0, explanation: "Vanishing points create believable 3D depth." },
        { q: "What is 'Texture' in visual art?", options: ["How a surface feels or looks like it would feel (rough bark, soft fur, smooth glass)", "Only the frame size", "The artist's signature", "The price tag"], correct: 0, explanation: "Varied marks create realistic texture." }
      ],
      general: [
        { q: `What is the smartest first step when learning "${cleanTopic}"?`, options: ["Grasp the big picture and main idea first, then connect details step by step", "Memorize random words without understanding them", "Skip straight to the test without reading", "Ignore examples"], correct: 0, explanation: "Understanding the big picture gives every detail a place to stick." },
        { q: "What makes a written answer strong and convincing in any subject?", options: ["A clear main point backed up by a specific fact, quote, or example", "A one-word guess with zero explanation", "Repeating the prompt", "Unrelated filler"], correct: 0, explanation: "Main Point + Specific Evidence + Clear Reasoning works everywhere." },
        { q: "Why does explaining a lesson out loud in your own words help so much?", options: ["Active recall locks the concept into memory and shows if anything is fuzzy", "It lets you skip reading", "It erases memory", "It only works for adults"], correct: 0, explanation: "Teaching a concept simply proves you truly own it." },
        { q: "In career, finance, and life skills, what should you ALWAYS do before spending big money or signing a contract?", options: ["Read written terms carefully, check the real math, and weigh risks", "Rush in because someone promised overnight riches", "Ignore fees and fine print", "Never ask a parent or mentor"], correct: 0, explanation: "Running real numbers protects your future." },
        { q: "Why does Christ Infinity Academy require ≥85% on Quizzes and Unit Tests?", options: ["To make sure you truly master each building block before moving on", "To make school stressful", "So students guess", "Because 85 is random"], correct: 0, explanation: "Mastery learning eliminates learning gaps." },
        { q: "What happens if you score below 85% on a quiz?", options: ["You review Step 2, check missed questions, and retry until you master it!", "You are kicked out forever", "The academy skips ahead anyway", "Nothing is tracked"], correct: 0, explanation: "Reviewing mistakes builds true mastery." },
        { q: "What is 'Integrity' in schoolwork and future careers?", options: ["Doing honest work, keeping promises, and doing right even when nobody is watching", "Cutting corners", "Copying answers", "Blaming others"], correct: 0, explanation: "Integrity earns lifelong trust." },
        { q: "What is the ultimate purpose of education at Christ Infinity Academy?", options: ["Growing in wisdom, faith, strong academics, and practical life skills to serve God and others", "Memorizing random trivia and forgetting it", "Competing unfairly", "Busywork with no purpose"], correct: 0, explanation: "True education forms mind, heart, character, and vocation." }
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

  // ==================== 3. GRADE-BY-GRADE MATH LESSON ENGINE (SEPARATE K, 1, 2, 3, 4, 5, 6–12!) ====================
  function buildMathPack(course, weekNum, dayIdx, cleanTopic, quizTargetCount) {
    const grade = (course.gradeLevels && course.gradeLevels[0]) ?? 6;
    const d = dayIdx;
    const w = weekNum;
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

    let pack;

    if (grade === 0) {
      // ==================== KINDERGARTEN MATH (100% AGE-APPROPRIATE & WEEK-MATCHED!) ====================
      if (w <= 2) {
        // Weeks 1–2: Counting & Matching Objects 1 to 5 (Week 1) / 6 to 10 (Week 2)
        const isW1 = w === 1;
        const c1 = isW1 ? 1 + (d % 4) : 5 + (d % 4);
        const c2 = isW1 ? Math.min(5, c1 + 1) : Math.min(10, c1 + 1);
        const c3 = isW1 ? 2 + ((d + 1) % 3) : 6 + ((d + 1) % 4);
        const c4 = isW1 ? 1 + ((d + 2) % 4) : 7 + (d % 3);
        pack = {
          objectives: [
            isW1 ? "Count objects 1, 2, 3, 4, 5 by touching one object at a time!" : "Count and write numbers 6, 7, 8, 9, 10 accurately!",
            `Match picture groups to the right number for "${cleanTopic}"`,
            "Tell which number comes next when counting up by 1"
          ],
          anchorVerse: "Psalm 147:4 — God counts the stars and calls them all by name!",
          bigIdea: isW1
            ? "Counting is touching ONE thing for EACH number we say: 1, 2, 3, 4, 5! The last number you say tells you HOW MANY are in the whole group."
            : "Now that you can count 1 to 5, let's count bigger groups all the way up to 10—pointing to one picture at a time!",
          sections: [
            {
              stepBadge: "PART 1 · TOUCH & COUNT ONE BY ONE",
              heading: isW1 ? "Counting 1 to 5 Slowly and Carefully" : "Counting 6 to 10 With Friendly Five-Groups",
              body: isW1
                ? `Put your finger on each picture as you count out loud:<br/><br/><strong>1</strong> = 🍎<br/><strong>2</strong> = 🍎 🍎<br/><strong>3</strong> = 🍎 🍎 🍎<br/><strong>4</strong> = 🍎 🍎 🍎 🍎<br/><strong>5</strong> = 🍎 🍎 🍎 🍎 🍎<br/><br/>Say ONE number for EACH apple—don't skip any and don't count the same apple twice!`
                : `Count a full row of 5 first, then keep counting up:<br/><br/><strong>6</strong> = ⭐⭐⭐⭐⭐ + ⭐<br/><strong>7</strong> = ⭐⭐⭐⭐⭐ + ⭐⭐<br/><strong>8</strong> = ⭐⭐⭐⭐⭐ + ⭐⭐⭐<br/><strong>9</strong> = ⭐⭐⭐⭐⭐ + ⭐⭐⭐⭐<br/><strong>10</strong> = ⭐⭐⭐⭐⭐ + ⭐⭐⭐⭐⭐`,
              keyTakeaway: isW1 ? "Touch each object once: 1, 2, 3, 4, 5! The last number is the total!" : "5 on top + extra ones below makes counting 6 to 10 super easy!"
            },
            {
              stepBadge: "PART 2 · MATCHING NUMBERS TO PICTURES",
              heading: "The Last Number Tells 'How Many!'",
              body: `When you count <strong>🐥 🐥 🐥</strong> (1... 2... 3!), you stop at <strong>3</strong>—so there are <strong>3 baby chicks</strong> in all! Even if we spread the chicks out in a circle or a line, there are STILL 3 chicks.`,
              keyTakeaway: "Moving objects around does NOT change how many there are!"
            }
          ],
          workedExamples: [
            {
              badge: "LET'S COUNT TOGETHER",
              title: isW1 ? "Count the Stars: ⭐ ⭐ ⭐ ⭐" : "Count the Apples: 🍎🍎🍎🍎🍎 🍎🍎",
              problem: isW1 ? "How many stars are in this row?" : "How many apples are in both rows?",
              step1: isW1 ? "Point to the first star and say '1', next star '2'." : "Count the top row of 5 apples: 1, 2, 3, 4, 5.",
              step2: isW1 ? "Keep pointing: third star '3', last star '4'!" : "Keep counting the bottom apples: 6, 7!",
              step3: isW1 ? "The last number we said is 4 → Answer: 4 stars!" : "The last number we said is 7 → Answer: 7 apples!",
              pitfall: "Slow down and point to each picture one time!"
            }
          ],
          problems: [
            { prompt: `1. Count the apples: ${repeatEmoji("🍎", c1)} — How many?`, answer: String(c1), hint: `Touch each apple and count 1 to ${c1}!` },
            { prompt: `2. Count the stars: ${repeatEmoji("⭐", c2)} — How many?`, answer: String(c2), hint: `Touch each star carefully!` },
            { prompt: `3. Count the butterflies: ${repeatEmoji("🦋", c3)} — How many?`, answer: String(c3), hint: `Count one by one!` },
            { prompt: `4. What number comes RIGHT AFTER ${c4}? (${c4}, ___)`, answer: String(c4 + 1), hint: `Say the counting numbers: ..., ${c4}, ___!` }
          ],
          writingPrompt: `With a parent's help, count out loud from 1 to ${isW1 ? 5 : 10} and type your favorite number you counted today!`,
          writingExemplar: `I counted carefully one by one from 1 to ${isW1 ? 5 : 10}, touching each object once so I got the exact total!`
        };
      } else if (/compar|more|fewer|equal/i.test(cleanTopic)) {
        // Kindergarten Comparing Groups (More, Fewer, Equal)
        const big = 3 + (d % 3), small = 1 + (d % 2);
        const eq = 2 + (d % 3);
        pack = {
          objectives: [
            `Compare two groups to tell which has MORE, FEWER, or EQUAL objects ("${cleanTopic}")`,
            "Line objects up one-to-one to see which row is longer",
            "Count both groups carefully before answering"
          ],
          anchorVerse: "Psalm 147:4 — God knows every number carefully!",
          bigIdea: "Comparing means looking at two groups side-by-side to see which group has MORE (bigger number), which has FEWER (smaller number), or if they are EQUAL (exact same number)!",
          sections: [
            {
              stepBadge: "PART 1 · MORE, FEWER & EQUAL",
              heading: "Lining Up Objects One-to-One",
              body: `Line up two rows of pictures:<br/>Row A: <strong>${repeatEmoji("🍎", big)} (${big})</strong><br/>Row B: <strong>${repeatEmoji("⭐", small)} (${small})</strong><br/><br/>Row A has <strong>MORE</strong> because ${big} is bigger than ${small}! Row B has <strong>FEWER</strong>. If both rows have <strong>${eq}</strong>, they are <strong>EQUAL</strong>!`,
              keyTakeaway: "More = bigger group · Fewer = smaller group · Equal = exact same amount!"
            }
          ],
          workedExamples: [
            {
              badge: "COMPARE TOGETHER",
              title: `Compare ${big} Apples vs. ${small} Stars`,
              problem: "Which number is MORE?",
              step1: `Count Row A: ${big} apples.`,
              step2: `Count Row B: ${small} stars.`,
              step3: `${big} is bigger than ${small}, so ${big} is MORE!`,
              pitfall: "Count each row before picking!"
            }
          ],
          problems: [
            { prompt: `1. Which number is MORE: ${big} or ${small}? (type the bigger number)`, answer: String(big), hint: `Count ${big} vs. ${small} on your fingers!` },
            { prompt: `2. Which number is FEWER: ${big + 1} or ${small}? (type the smaller number)`, answer: String(small), hint: `Pick the smaller number!` },
            { prompt: `3. Count the equal group: ${repeatEmoji("⭐", eq)} — How many?`, answer: String(eq), hint: `Touch and count one by one!` },
            { prompt: `4. What number is EQUAL to ${eq}?`, answer: String(eq), hint: `Equal means the exact same number!` }
          ],
          writingPrompt: `Tell a parent which is MORE: ${big} apples or ${small} apples, or type the bigger number!`,
          writingExemplar: `${big} apples is MORE than ${small} apples because ${big} is the bigger number.`
        };
      } else if (/pattern|sort/i.test(cleanTopic)) {
        // Kindergarten Sorting & Patterns (AB, AAB, ABC)
        pack = {
          objectives: [
            `Spot and finish fun repeating patterns for "${cleanTopic}"`,
            "Sort objects by color, shape, or size",
            "Say the pattern rule out loud (like Red-Blue-Red-Blue)!"
          ],
          anchorVerse: "Genesis 1:31 — God designed beautiful patterns everywhere in creation!",
          bigIdea: "A pattern repeats in a neat order over and over! Saying the pattern out loud helps your ears hear what comes next.",
          sections: [
            {
              stepBadge: "PART 1 · SPOTTING THE PATTERN RULE",
              heading: "Say It Out Loud to Find What Comes Next!",
              body: `Read this pattern out loud: <strong>1, 2, 1, 2, 1, ___</strong>! Since it repeats 1 then 2, the next number is <strong>2</strong>! You can also sort toys into neat piles by color, shape, or size.`,
              keyTakeaway: "Find the repeating part, say it out loud, and predict the very next item!"
            }
          ],
          workedExamples: [
            {
              badge: "PATTERN DETECTIVE",
              title: "What Comes Next? 1, 2, 1, 2, 1, ___",
              problem: "Find the next number in the AB pattern.",
              step1: "Say it with a beat: ONE, two, ONE, two, ONE...",
              step2: "After ONE always comes TWO!",
              step3: "Answer: 2!",
              pitfall: "Check the last item before guessing!"
            }
          ],
          problems: [
            { prompt: "1. Pattern: 1, 2, 1, 2, 1, ___ (what number comes next?)", answer: "2", hint: "Say 1, 2, 1, 2, 1..." },
            { prompt: "2. Pattern: 3, 4, 3, 4, 3, ___ (what number comes next?)", answer: "4", hint: "After 3 comes 4!" },
            { prompt: "3. Pattern: 1, 1, 2, 1, 1, ___ (what number comes next?)", answer: "2", hint: "Two 1s, then a 2!" },
            { prompt: "4. Count the stars: ⭐⭐⭐ — How many?", answer: "3", hint: "Count 1, 2, 3!" }
          ],
          writingPrompt: `Make a fun clap-snap pattern with a parent, or type the next number in 1, 2, 1, 2, 1, ___!`,
          writingExemplar: `An AB pattern repeats two things over and over, so 2 comes right after 1.`
        };
      } else if (/shape|2d|3d|hexagon|circle/i.test(cleanTopic)) {
        // Kindergarten 2D & 3D Shapes
        pack = {
          objectives: [
            `Name flat shapes (Circle, Triangle, Square, Rectangle, Hexagon) in "${cleanTopic}"`,
            "Count straight sides and pointy corners (vertices) on shapes",
            "Spot real-world shapes around your house!"
          ],
          anchorVerse: "Job 38:5 — God designed every shape in the world with wonder!",
          bigIdea: "Shapes are everywhere—wheels are circles, pizza slices are triangles, and windows are rectangles or squares!",
          sections: [
            {
              stepBadge: "PART 1 · COUNTING SIDES & CORNERS",
              heading: "Meet Your Friendly Shapes",
              body: `• <strong>Circle:</strong> Round like a cookie (<strong>0</strong> straight sides)<br/>• <strong>Triangle:</strong> <strong>3</strong> straight sides &amp; 3 corners<br/>• <strong>Square:</strong> <strong>4</strong> equal straight sides &amp; 4 corners<br/>• <strong>Hexagon:</strong> <strong>6</strong> straight sides (like a honeycomb!)`,
              keyTakeaway: "Count the straight sides to identify any flat shape!"
            }
          ],
          workedExamples: [
            { badge: "SHAPE HUNT", title: "How Many Sides Does a Square Have?", problem: "Count the sides of a square.", step1: "Top side (1) and bottom side (2).", step2: "Left side (3) and right side (4).", step3: "A square has 4 equal sides!", pitfall: "A circle has 0 straight sides because it is curved!" }
          ],
          problems: [
            { prompt: "1. How many straight sides does a TRIANGLE have?", answer: "3", hint: "Tri- means three!" },
            { prompt: "2. How many straight sides does a SQUARE have?", answer: "4", hint: "Top, bottom, left, right!" },
            { prompt: "3. How many straight sides does a CIRCLE have?", answer: "0", hint: "A circle is completely round!" },
            { prompt: "4. How many straight sides does a HEXAGON have?", answer: "6", hint: "Count a honeycomb cell: 6 sides!" }
          ],
          writingPrompt: `Look around the room with a parent and name one Circle and one Rectangle you see!`,
          writingExemplar: `A clock on the wall is a circle with 0 straight sides, and a door is a rectangle with 4 sides.`
        };
      } else {
        // Kindergarten Weeks 9–36: Making 5 & 10, Simple Addition & Subtraction within 10, Shapes
        const a1 = 1 + (d % 4), b1 = 1 + ((d + 1) % 4);
        const make10 = 3 + (d % 6);
        const subA = 5 + (d % 4), subB = 1 + (d % 3);
        pack = {
          objectives: [
            `Explore "${cleanTopic}" with pictures, fingers, and ten-frames!`,
            "Put small groups together (addition) and take away (subtraction) within 10",
            "Find friendly partners that make 10 and spot circles, triangles, and squares"
          ],
          anchorVerse: "Psalm 147:4 — God knows the exact number of every star in the sky!",
          bigIdea: `In Kindergarten Math, we use pictures, fingers, and ten-frames to see "${cleanTopic}" clearly—one joyful step at a time!`,
          sections: [
            {
              stepBadge: "PART 1 · PUTTING GROUPS TOGETHER (ADDITION)",
              heading: "Adding Means Counting All Together!",
              body: `If you have <strong>${a1} apples (${repeatEmoji("🍎", a1)})</strong> and your friend gives you <strong>${b1} more (${repeatEmoji("🍎", b1)})</strong>, put them together and count them all: <strong>${a1} + ${b1} = ${a1 + b1}</strong>!`,
              keyTakeaway: "The plus sign (+) means put groups together to find the total!"
            },
            {
              stepBadge: "PART 2 · TEN-FRAMES & TAKING AWAY",
              heading: "Making 10 & Subtracting (−)",
              body: `A <strong>Ten-Frame</strong> has 10 cozy boxes (5 on top, 5 on bottom). If <strong>${make10}</strong> boxes have dots, count the empty boxes to make 10: <code>${make10} + ${10 - make10} = 10</code>! And the minus sign (−) means take away some objects and count how many are left.`,
              keyTakeaway: "Plus (+) puts together · Minus (−) takes away · Ten-frame fills up to 10!"
            }
          ],
          workedExamples: [
            {
              badge: "KINDERGARTEN EXAMPLE",
              title: `Add ${a1} + ${b1}`,
              problem: `Count ${repeatEmoji("⭐", a1)} plus ${repeatEmoji("⭐", b1)}.`,
              step1: `Start with ${a1} stars.`,
              step2: `Count up ${b1} more stars on your fingers.`,
              step3: `You land on ${a1 + b1} stars in all!`,
              pitfall: "Count slowly so you don't skip a finger!"
            }
          ],
          problems: [
            { prompt: `1. Add: ${a1} + ${b1} = (${repeatEmoji("🍎", a1)} + ${repeatEmoji("🍎", b1)})`, answer: String(a1 + b1), hint: `Count all the apples together!` },
            { prompt: `2. Make 10: ${make10} + ___ = 10`, answer: String(10 - make10), hint: `Count up from ${make10} until you reach 10!` },
            { prompt: `3. Take away: ${subA} − ${subB} =`, answer: String(subA - subB), hint: `Hold up ${subA} fingers and put ${subB} down!` },
            { prompt: `4. How many sides does a triangle have?`, answer: "3", hint: `Tri- means three (like a tricycle's 3 wheels)!` }
          ],
          writingPrompt: `Tell a parent how you solved ${a1} + ${b1}, or type 1 short sentence about what you learned!`,
          writingExemplar: `I started with ${a1} apples and counted ${b1} more to get ${a1 + b1} apples in all!`
        };
      }
    } else if (grade === 1) {
      // ==================== GRADE 1 MATH ====================
      const a1 = 5 + d * 2, b1 = 4 + d;
      const subA = 13 + d, subB = 4 + (d % 4);
      const tens = 2 + d, ones = 3 + (d % 5);
      const dimes = 2 + (d % 4);
      pack = {
        objectives: [
          `Master "${cleanTopic}" using Grade 1 number-line and Make-10 strategies`,
          "Add and subtract fluently within 20 using doubles and fact families",
          "Build 2-digit numbers with tens & ones and count dimes and nickels"
        ],
        anchorVerse: "Psalm 147:4 — He telleth the number of the stars; he calleth them all by their names.",
        bigIdea: "Grade 1 Math unlocks friendly adding within 20, bundling tens and ones, telling time, and counting coins!",
        sections: [
          {
            stepBadge: "PART 1 · MAKING 10 & DOUBLES",
            heading: "Smart Mental Math Tricks Within 20",
            body: `Know your <strong>Doubles</strong> (<code>5+5=10</code>, <code>6+6=12</code>, <code>7+7=14</code>) and <strong>Make-10 pairs</strong> (<code>8+2=10</code>, <code>7+3=10</code>)! To add <strong>8 + 5</strong>, first do <code>8 + 2 = 10</code>, then add the extra 3 → <strong>13</strong>!`,
            keyTakeaway: "Make a friendly 10 first, then add the leftover ones!"
          },
          {
            stepBadge: "PART 2 · TENS & ONES PLACE VALUE",
            heading: "Understanding Two-Digit Numbers",
            body: `In the number <strong>${tens * 10 + ones}</strong>, the left digit (<strong>${tens}</strong>) means <strong>${tens} groups of ten (${tens * 10})</strong> and the right digit (<strong>${ones}</strong>) means <strong>${ones} single ones</strong>. Together: <code>${tens * 10} + ${ones} = ${tens * 10 + ones}</code>!`,
            keyTakeaway: "Left digit = tens · Right digit = ones · 1 dime = 10¢."
          }
        ],
        workedExamples: [
          {
            badge: "GRADE 1 WORKED EXAMPLE",
            title: "Add 8 + 6 by Making 10",
            problem: "How do we add 8 + 6 cleanly?",
            step1: "8 needs 2 more to make 10.",
            step2: "Split 6 into 2 + 4 → 8 + 2 = 10.",
            step3: "Add the leftover 4: 10 + 4 = 14!",
            pitfall: "Check by counting on 6 from 8: 9, 10, 11, 12, 13, 14 ✓."
          }
        ],
        problems: [
          { prompt: `1. Add: ${a1} + ${b1} =`, answer: String(a1 + b1), hint: `Start at ${a1} and count up ${b1} more.` },
          { prompt: `2. Subtract: ${subA} − ${subB} =`, answer: String(subA - subB), hint: `Count back ${subB} from ${subA}.` },
          { prompt: `3. Doubles fact: ${4 + d} + ${4 + d} =`, answer: String((4 + d) * 2), hint: `Add the same number twice!` },
          { prompt: `4. What number has ${tens} tens and ${ones} ones?`, answer: String(tens * 10 + ones), hint: `${tens * 10} + ${ones} = ?` },
          { prompt: `5. How many cents is ${dimes} dimes (number only)?`, answer: String(dimes * 10), hint: `Count by 10s ${dimes} times!` }
        ],
        writingPrompt: `In 1–2 simple sentences, explain how you added ${a1} + ${b1} and what ${tens} tens and ${ones} ones equals.`,
        writingExemplar: `I started at ${a1} and counted up ${b1} to get ${a1 + b1}. ${tens} tens (${tens * 10}) plus ${ones} ones makes ${tens * 10 + ones}.`
      };
    } else if (grade === 2) {
      // ==================== GRADE 2 MATH ====================
      const a1 = 26 + d * 7, b1 = 17 + d * 4;
      const subA = 63 + d * 5, subB = 18 + d * 3;
      const rows = 3 + (d % 3), cols = 4 + (d % 3);
      const qtr = 2 + (d % 2), dime = 1 + (d % 3);
      pack = {
        objectives: [
          `Master "${cleanTopic}" with confident Grade 2 place-value strategies`,
          "Add and subtract 2-digit numbers WITH regrouping (carrying and borrowing tens)",
          "Build rectangular arrays (rows × columns) and count quarters, dimes, and nickels"
        ],
        anchorVerse: "Proverbs 16:11 — A just weight and balance are the LORD's.",
        bigIdea: "Grade 2 Math powers you up to 2-digit and 3-digit regrouping, place value to 1,000, equal-row arrays, and counting real dollars and coins!",
        sections: [
          {
            stepBadge: "PART 1 · 2-DIGIT REGROUPING",
            heading: "Carrying & Borrowing a Ten Cleanly",
            body: `When adding <strong>${a1} + ${b1}</strong>, line up the <strong>ones</strong> and <strong>tens</strong>! Always add the ones column first—if the ones add up to 10 or more, trade 10 ones for <strong>1 new ten</strong> and carry it to the tens column!`,
            keyTakeaway: "Always start in the ONES column! 10 ones = 1 ten · 10 tens = 1 hundred."
          },
          {
            stepBadge: "PART 2 · ARRAYS & COINS",
            heading: "Equal Rows & Counting Quarters",
            body: `An <strong>array</strong> of <strong>${rows} rows</strong> with <strong>${cols} stars</strong> in each row uses repeated addition to total <strong>${rows * cols}</strong>—your gateway to multiplication! And remember: <strong>1 quarter = 25¢</strong>, 2 quarters = 50¢, 3 quarters = 75¢, 4 quarters = $1.00!`,
            keyTakeaway: "Count big coins first (Quarters 25¢ → Dimes 10¢ → Nickels 5¢ → Pennies 1¢)."
          }
        ],
        workedExamples: [
          {
            badge: "GRADE 2 WORKED EXAMPLE",
            title: "Regrouping: 38 + 25",
            problem: "Add 38 + 25 step by step.",
            step1: "Ones column: 8 + 5 = 13 → write 3, carry 1 ten!",
            step2: "Tens column: 3 + 2 + 1 (carried) = 6 tens.",
            step3: "Put them together: 63!",
            pitfall: "Don't forget to add the carried 1 in the tens column!"
          }
        ],
        problems: [
          { prompt: `1. Add with regrouping: ${a1} + ${b1} =`, answer: String(a1 + b1), hint: `Add ones first, regroup if ≥10, then add tens.` },
          { prompt: `2. Subtract: ${subA} − ${subB} =`, answer: String(subA - subB), hint: `Regroup a ten if the top ones digit is smaller!` },
          { prompt: `3. Array: ${rows} rows with ${cols} tiles in each row =`, answer: String(rows * cols), hint: `Add ${cols} together ${rows} times.` },
          { prompt: `4. How many cents is ${qtr} quarters and ${dime} dime(s) (number only)?`, answer: String(qtr * 25 + dime * 10), hint: `${qtr * 25} + ${dime * 10} = ?` },
          { prompt: `5. Standard form of 4 hundreds, 5 tens, 2 ones:`, answer: "452", hint: `400 + 50 + 2.` }
        ],
        writingPrompt: `In 2 clear sentences, explain when you need to regroup (carry) a ten in ${a1} + ${b1}, and tell how much 3 quarters are worth.`,
        writingExemplar: `When the ones digits add up to 10 or more, I trade 10 ones for 1 ten and carry it to the tens column, giving ${a1 + b1}. Three quarters are worth 75 cents (25 + 25 + 25).`
      };
    } else if (grade === 3) {
      // ==================== GRADE 3 MATH ====================
      const mA = 4 + d, mB = 6 + (w % 5);
      const divD = 4 + (d % 4), divQ = 6 + d;
      const rectL = 7 + d, rectW = 4 + (d % 3);
      pack = {
        objectives: [
          `Master "${cleanTopic}" using Grade 3 multiplication, division, and visual models`,
          "Connect multiplication & division fact families and intro unit fractions",
          "Compute both Area (inside) and Perimeter (outside edge) of rectangles"
        ],
        anchorVerse: "Proverbs 16:11 — A just weight and balance are the LORD's.",
        bigIdea: "Grade 3 is the powerhouse year of Multiplication, Division, Intro Fractions, and Area & Perimeter—the bedrock for all upper math!",
        sections: [
          {
            stepBadge: "PART 1 · MULTIPLICATION & DIVISION TWINS",
            heading: "Equal Groups & Fact Families",
            body: `<strong>${mA} × ${mB} = ${mA * mB}</strong> means ${mA} equal groups of ${mB}. And division is simply the opposite twin: if <strong>${divD} × ${divQ} = ${divD * divQ}</strong>, then <strong>${divD * divQ} ÷ ${divD} = ${divQ}</strong>!`,
            keyTakeaway: "Every multiplication fact automatically unlocks a division fact!"
          },
          {
            stepBadge: "PART 2 · INTRO FRACTIONS, AREA & PERIMETER",
            heading: "Equal Slices & Measuring Rectangles",
            body: `In a fraction like <strong>3/4</strong>, the bottom number (4) is total equal pieces and the top number (3) is shaded pieces. For a rectangle: <strong>Area = length × width</strong> (squares inside), while <strong>Perimeter = add all 4 sides</strong> (fence around the edge).`,
            keyTakeaway: "Area = inside (L × W) · Perimeter = around the outside (add all sides)."
          }
        ],
        workedExamples: [
          {
            badge: "GRADE 3 EXAMPLE",
            title: `Area & Perimeter of a ${rectL} × ${rectW} Rectangle`,
            problem: `Find both Area and Perimeter of a ${rectL} ft by ${rectW} ft garden.`,
            step1: `Area = ${rectL} × ${rectW} = ${rectL * rectW} square ft.`,
            step2: `Perimeter = ${rectL} + ${rectW} + ${rectL} + ${rectW}.`,
            step3: `Perimeter = ${2 * (rectL + rectW)} ft!`,
            pitfall: "Don't swap Area (multiply) and Perimeter (add all 4 sides)!"
          }
        ],
        problems: [
          { prompt: `1. Multiply: ${mA} × ${mB} =`, answer: String(mA * mB), hint: `Count ${mA} groups of ${mB}.` },
          { prompt: `2. Divide: ${divD * divQ} ÷ ${divD} =`, answer: String(divQ), hint: `${divD} times what number equals ${divD * divQ}?` },
          { prompt: `3. Area of a ${rectL} ft × ${rectW} ft rug (number only):`, answer: String(rectL * rectW), hint: `Multiply length × width.` },
          { prompt: `4. Perimeter of a ${rectL} ft × ${rectW} ft rug (number only):`, answer: String(2 * (rectL + rectW)), hint: `Add all 4 sides: ${rectL} + ${rectW} + ${rectL} + ${rectW}.` },
          { prompt: `5. Round 68 to the nearest ten:`, answer: "70", hint: `Since 8 ≥ 5, round up to 70!` }
        ],
        writingPrompt: `In 2–3 sentences, explain the difference between Area and Perimeter and how multiplication helped you check ${divD * divQ} ÷ ${divD}.`,
        writingExemplar: `Area measures the flat space inside a shape (length × width), while Perimeter measures the distance around all the sides. I checked ${divD * divQ} ÷ ${divD} = ${divQ} because ${divD} × ${divQ} = ${divD * divQ}.`
      };
    } else if (grade === 4) {
      // ==================== GRADE 4 MATH ====================
      const a = 22 + d * 4, b = 4 + (d % 4);
      const divD = 4 + (d % 5), divQ = 13 + d * 2;
      const fDen = [8, 10, 12, 8, 10][d], f1 = 2 + (d % 3), f2 = 3 + (d % 2);
      const ang = 30 + d * 8;
      pack = {
        objectives: [
          `Master "${cleanTopic}" with crisp Grade 4 multi-digit and fraction methods`,
          "Multiply multi-digit numbers, perform long division, and build equivalent fractions",
          "Add fractions with like denominators and calculate missing angles"
        ],
        anchorVerse: "Proverbs 16:11 — A just weight and balance are the LORD's.",
        bigIdea: "Grade 4 Math expands your toolkit to multi-digit multiplication, long division (DMSB), equivalent fractions, decimals to hundredths, and measuring angles in degrees!",
        sections: [
          {
            stepBadge: "PART 1 · MULTI-DIGIT MULTIPLICATION & LONG DIVISION",
            heading: "Place-Value Splitting & DMSB Long Division",
            body: `Split <strong>${a} × ${b}</strong> into tens + ones: <code>(${Math.floor(a / 10) * 10} × ${b}) + (${a % 10} × ${b}) = ${a * b}</code>! For Long Division, use the 4 steps: <strong>Divide → Multiply → Subtract → Bring down</strong> (DMSB) and check by multiplying back.`,
            keyTakeaway: "Always check long division by multiplying quotient × divisor!"
          },
          {
            stepBadge: "PART 2 · EQUIVALENT FRACTIONS & ANGLES",
            heading: "Multiplying Top & Bottom Equally + 90° Right Angles",
            body: `To make an equivalent fraction, multiply numerator and denominator by the SAME number: <code>1/3 = (1×2)/(3×2) = 2/6</code>. When adding like denominators (<code>${f1}/${fDen} + ${f2}/${fDen} = ${f1 + f2}/${fDen}</code>), keep the bottom slice size the same! And remember: a square corner (Right Angle) is always <strong>90°</strong>.`,
            keyTakeaway: "Right angle = 90° · Straight line = 180° · Never add denominators!"
          }
        ],
        workedExamples: [
          {
            badge: "GRADE 4 WORKED EXAMPLE",
            title: `Multiply ${a} × ${b} Using Place Value`,
            problem: `Compute ${a} × ${b} step by step.`,
            step1: `Split ${a} into ${Math.floor(a / 10) * 10} + ${a % 10}.`,
            step2: `Multiply each by ${b}: ${Math.floor(a / 10) * 10 * b} and ${(a % 10) * b}.`,
            step3: `Add them: ${Math.floor(a / 10) * 10 * b} + ${(a % 10) * b} = ${a * b}!`,
            pitfall: "Keep your place values aligned when adding partial products."
          }
        ],
        problems: [
          { prompt: `1. Multiply: ${a} × ${b} =`, answer: String(a * b), hint: `Split ${a} into tens and ones, multiply each by ${b}, and add.` },
          { prompt: `2. Divide: ${divD * divQ} ÷ ${divD} =`, answer: String(divQ), hint: `Use DMSB long division and check with ${divD} × answer.` },
          { prompt: `3. Fractions: Add ${f1}/${fDen} + ${f2}/${fDen} (e.g. 5/8):`, answer: `${f1 + f2}/${fDen}`, hint: `Add tops, keep denominator ${fDen}.` },
          { prompt: `4. Missing Angle: Two angles make a 90° right angle. One is ${ang}°. Other angle (number only):`, answer: String(90 - ang), hint: `Subtract 90 − ${ang}.` },
          { prompt: `5. Equivalent Fraction: 2/5 = ___/15 (missing numerator):`, answer: "6", hint: `Since 5 × 3 = 15, multiply 2 × 3!` }
        ],
        writingPrompt: `In 2–3 sentences, explain how you solved ${a} × ${b} using place value and how you found the missing angle inside a 90° right angle.`,
        writingExemplar: `I split ${a} into tens and ones, multiplied each part by ${b}, and added the partial products to get ${a * b}. Since a right angle equals 90°, subtracting ${ang}° left ${90 - ang}°.`
      };
    } else if (grade === 5) {
      // ==================== GRADE 5 MATH ====================
      const fDen = [8, 10, 12, 8, 10][d], f1 = 2 + (d % 3), f2 = 3 + (d % 2);
      const l = 6 + d, ww = 4 + (d % 3), h = 3 + (d % 2);
      const d1 = (24 + d * 3) / 10, d2 = (15 + d * 2) / 10;
      const pA = 5 + d, pB = 3 + d, pC = 4;
      const divD = 6 + (d % 4), divQ = 15 + d * 2;
      pack = {
        objectives: [
          `Master "${cleanTopic}" at full Grade 5 State EOG rigor`,
          "Perform fraction & decimal operations, PEMDAS, and 3D Volume (L × W × H)",
          "Check every multi-step calculation cleanly before moving on"
        ],
        anchorVerse: "1 Corinthians 14:40 — Let all things be done decently and in order.",
        bigIdea: "Grade 5 Math connects Fractions, Decimals to thousandths, Order of Operations (PEMDAS), and 3D Volume (L × W × H)—building rock-solid readiness for Middle School!",
        sections: [
          {
            stepBadge: "PART 1 · FRACTIONS & DECIMALS",
            heading: "Adding Fractions & Lining Up Decimals",
            body: `In Grade 5, fractions account for nearly 40% of State EOG math! Keep slice sizes equal when adding (<code>${f1}/${fDen} + ${f2}/${fDen} = ${f1 + f2}/${fDen}</code>), and when adding decimals like <strong>${d1.toFixed(1)} + ${d2.toFixed(1)}</strong>, ALWAYS stack the decimal points straight in a vertical line!`,
            keyTakeaway: "Stack decimal points vertically · Add numerators only when denominators match."
          },
          {
            stepBadge: "PART 2 · 3D VOLUME & PEMDAS",
            heading: "Measuring 3D Space (V = L × W × H) & Order of Operations",
            body: `<strong>Volume</strong> counts how many unit cubes fit inside a 3D box: <code>V = length × width × height</code>. For expressions like <strong>${pA} + ${pB} × ${pC}</strong>, follow <strong>PEMDAS</strong>—multiply FIRST (<code>${pB} × ${pC} = ${pB * pC}</code>), then add <code>${pA}</code> → <strong>${pA + pB * pC}</strong>!`,
            keyTakeaway: "Volume = L × W × H (cubic units) · PEMDAS = Parentheses, Exponents, Multiply/Divide, Add/Subtract."
          }
        ],
        workedExamples: [
          {
            badge: "GRADE 5 EXAMPLE · 3D VOLUME",
            title: `Box Volume: ${l} ft × ${ww} ft × ${h} ft`,
            problem: `Find the volume of a storage crate measuring ${l} × ${ww} × ${h} ft.`,
            step1: `Multiply base area: ${l} × ${ww} = ${l * ww} sq ft.`,
            step2: `Multiply by height (${h} layers): ${l * ww} × ${h}.`,
            step3: `Volume = ${l * ww * h} cubic feet!`,
            pitfall: "Don't add the dimensions—multiply all three!"
          }
        ],
        problems: [
          { prompt: `1. Fractions: Add ${f1}/${fDen} + ${f2}/${fDen} (e.g. 5/8):`, answer: `${f1 + f2}/${fDen}`, hint: `Add tops, keep denominator ${fDen}.` },
          { prompt: `2. Decimals: Add ${d1.toFixed(1)} + ${d2.toFixed(1)} =`, answer: (d1 + d2).toFixed(1), hint: `Line up the decimal points!` },
          { prompt: `3. Volume: Box measuring ${l} × ${ww} × ${h} ft (number only):`, answer: String(l * ww * h), hint: `Multiply ${l} × ${ww} × ${h}.` },
          { prompt: `4. PEMDAS: Compute ${pA} + ${pB} × ${pC} =`, answer: String(pA + pB * pC), hint: `Multiply ${pB} × ${pC} first, then add ${pA}.` },
          { prompt: `5. Divide: ${divD * divQ} ÷ ${divD} =`, answer: String(divQ), hint: `Use long division and check with ${divD} × answer.` }
        ],
        writingPrompt: `In 2–3 clear sentences, explain how PEMDAS works on ${pA} + ${pB} × ${pC} and how 3D Volume differs from 2D Area.`,
        writingExemplar: `PEMDAS tells us to multiply ${pB} × ${pC} (${pB * pC}) before adding ${pA}, giving ${pA + pB * pC}. While 2D Area measures a flat surface (L × W), 3D Volume measures cubic space inside a box (L × W × H).`
      };
    } else if (grade === 6) {
      const a1 = 12 + d * 6, b1 = 18 + d * 6, g1 = gcd(a1, b1);
      const ordA = 4 + d, ordB = 3 + d;
      const pctBase = (4 + d) * 20, pctVal = [25, 20, 50, 10, 25][d];
      const triB = 8 + d * 2, triH = 5 + (d % 3);
      const eqX = 4 + d, eqRight = eqX * 3 + 7;
      pack = {
        objectives: [
          `Understand "${cleanTopic}" clearly using plain-English Grade 6 math rules`,
          "Apply PEMDAS, GCF, Percents, and Triangle Area accurately",
          "Solve introductory equations like 3x + 7 = 22 and check every answer"
        ],
        anchorVerse: "1 Corinthians 14:40 — Let all things be done decently and in order.",
        bigIdea: "Grade 6 Math turns arithmetic into real problem-solving power: prime factors, PEMDAS, ratios, percents, triangle area, and solving for x.",
        sections: [
          { stepBadge: "PART 1 · PEMDAS & FACTORS", heading: "Order of Operations & GCF", body: `In <strong>${ordA} + ${ordB} × 2</strong>, multiply first before adding! And to find GCF of ${a1} and ${b1}, pick the largest shared factor (<strong>${g1}</strong>).`, keyTakeaway: "Multiply & Divide before Add & Subtract." },
          { stepBadge: "PART 2 · PERCENTS, TRIANGLE AREA & X", heading: "Formulas & Balance", body: `<strong>Percent</strong> means out of 100 · <strong>Triangle Area = (base × height) ÷ 2</strong> · Keep equations balanced on both sides!`, keyTakeaway: "Always plug your solution for x back in to verify." }
        ],
        workedExamples: [
          { badge: "WORKED EXAMPLE · PEMDAS", title: "Solve: 8 + 5 × (6 − 2)", problem: "Evaluate 8 + 5 × (6 − 2).", step1: "Parentheses: 6 − 2 = 4.", step2: "Multiply: 5 × 4 = 20.", step3: "Add: 8 + 20 = 28.", pitfall: "Never add 8 + 5 before multiplying!" }
        ],
        problems: [
          { prompt: `1. GCF of ${a1} and ${b1}:`, answer: String(g1), hint: `Find the largest shared factor.` },
          { prompt: `2. PEMDAS: ${ordA} + ${ordB} × 2 =`, answer: String(ordA + ordB * 2), hint: `Multiply first.` },
          { prompt: `3. Percent: ${pctVal}% of ${pctBase} =`, answer: String((pctBase * pctVal) / 100), hint: `Multiply ${pctVal / 100} × ${pctBase}.` },
          { prompt: `4. Triangle Area (base ${triB}, height ${triH}):`, answer: String((triB * triH) / 2), hint: `(${triB} × ${triH}) ÷ 2.` },
          { prompt: `5. Solve: 3x + 7 = ${eqRight}. What is x?`, answer: String(eqX), hint: `Subtract 7, then divide by 3.` }
        ],
        writingPrompt: `Explain in 2–3 clear sentences how you solved 3x + 7 = ${eqRight}.`,
        writingExemplar: `Subtract 7 from both sides to get 3x = ${eqRight - 7}, then divide by 3 to get x = ${eqX}.`
      };
    } else if (grade === 7) {
      const x1 = 3 + d, a = 4 + (w % 3), b = 5 + d * 2, rhs1 = a * x1 - b;
      const negA = -(7 + d * 2), posB = 12 + d * 3, distX = 2 + d, distRhs = 3 * (distX + 4);
      const rateDist = (45 + d * 10) * 3;
      pack = {
        objectives: [`Master "${cleanTopic}" with Pre-Algebra sign and equation rules`, "Compute integer operations cleanly", "Solve two-step and distributive equations"],
        anchorVerse: "Proverbs 4:7 — Wisdom is the principal thing; therefore get wisdom.",
        bigIdea: "Pre-Algebra bridges arithmetic and Algebra I through signed integers, proportional unit rates, and two-step equations.",
        sections: [
          { stepBadge: "PART 1 · SIGNED INTEGERS", heading: "Positive & Negative Rules", body: `Adding opposites cancels out; multiplying two negatives always yields a positive!`, keyTakeaway: "Same signs multiply to +, opposite signs multiply to −." },
          { stepBadge: "PART 2 · TWO-STEP & DISTRIBUTIVE EQUATIONS", heading: "Undo Operations in Reverse", body: `Undo addition/subtraction first, then multiplication/division—always doing the same to both sides.`, keyTakeaway: "Check every solution by plugging it back in." }
        ],
        workedExamples: [
          { badge: "WORKED EXAMPLE", title: "Solve 3(x + 4) = 27", problem: "Solve for x.", step1: "Divide both sides by 3 → x + 4 = 9.", step2: "Subtract 4 → x = 5.", step3: "Check: 3(5 + 4) = 27 ✓.", pitfall: "Remember to distribute to BOTH terms if expanding." }
        ],
        problems: [
          { prompt: `1. Integers: ${negA} + ${posB} =`, answer: String(negA + posB), hint: `Find difference and keep sign of larger magnitude.` },
          { prompt: `2. Multiply: (−4) × (−${3 + d}) =`, answer: String(4 * (3 + d)), hint: `Negative × negative = positive.` },
          { prompt: `3. Solve: ${a}x − ${b} = ${rhs1}. x =`, answer: String(x1), hint: `Add ${b}, then divide by ${a}.` },
          { prompt: `4. Solve: 3(x + 4) = ${distRhs}. x =`, answer: String(distX), hint: `Divide by 3, then subtract 4.` },
          { prompt: `5. Unit Rate: ${rateDist} miles in 3 hours = ___ mph:`, answer: String(rateDist / 3), hint: `Divide by 3.` }
        ],
        writingPrompt: `Explain in 2–3 sentences how you solved ${a}x − ${b} = ${rhs1}.`,
        writingExemplar: `Add ${b} to both sides to get ${a}x = ${a * x1}, then divide by ${a} to find x = ${x1}.`
      };
    } else if (grade === 8) {
      const m = 2 + d, x1 = 1 + d, y1 = 3 + d, x2 = x1 + 3, y2 = y1 + m * 3;
      const fx = 4 + d, xVar = 3 + d, cVar = 3 * xVar - 4, sqR = 4 + d;
      pack = {
        objectives: [`Master "${cleanTopic}" with linear functions and Algebra I tools`, "Compute slope m = (y₂ − y₁)/(x₂ − x₁) and evaluate f(x)", "Solve variables on both sides and simple quadratics"],
        anchorVerse: "Proverbs 2:6 — For the LORD giveth wisdom.",
        bigIdea: "Algebra I models real relationships with functions, slope-intercept lines (y = mx + b), and factoring.",
        sections: [
          { stepBadge: "PART 1 · SLOPE & LINEAR FUNCTIONS", heading: "Rise Over Run (y = mx + b)", body: `Slope <code>m = (y₂ − y₁) / (x₂ − x₁)</code> measures steepness; <code>b</code> is where the line crosses the y-axis.`, keyTakeaway: "Rise (Δy) over Run (Δx)." },
          { stepBadge: "PART 2 · MULTI-STEP & QUADRATIC EQUATIONS", heading: "Variables on Both Sides", body: `Collect x-terms on one side and constants on the other; use square roots or Zero Product Property for x².`, keyTakeaway: "Always plug your root back into the original equation." }
        ],
        workedExamples: [
          { badge: "WORKED EXAMPLE", title: "Slope Formula", problem: "Slope through (1, 3) and (4, 15).", step1: "Rise = 15 − 3 = 12.", step2: "Run = 4 − 1 = 3.", step3: "m = 12 / 3 = 4.", pitfall: "Put y in the numerator, x in the denominator!" }
        ],
        problems: [
          { prompt: `1. Slope through (${x1}, ${y1}) and (${x2}, ${y2}):`, answer: String(m), hint: `(${y2} − ${y1}) ÷ (${x2} − ${x1}).` },
          { prompt: `2. If f(x) = 3x + 5, find f(${fx}):`, answer: String(3 * fx + 5), hint: `Plug in ${fx}.` },
          { prompt: `3. Solve: 5x − 4 = 2x + ${cVar}. x =`, answer: String(xVar), hint: `Subtract 2x, add 4, divide by 3.` },
          { prompt: `4. Positive root of x² = ${sqR * sqR}:`, answer: String(sqR), hint: `Take √${sqR * sqR}.` },
          { prompt: `5. Positive solution of (x − ${xVar})(x + 2) = 0:`, answer: String(xVar), hint: `Set x − ${xVar} = 0.` }
        ],
        writingPrompt: `Explain in 2–3 sentences what slope m and y-intercept b represent in y = mx + b.`,
        writingExemplar: `In y = mx + b, m is the constant rate of change (rise over run) and b is the starting value where the line crosses the y-axis.`
      };
    } else if (grade === 9 || grade === 10) {
      const triples = [[3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 15, 17], [9, 12, 15]];
      const [legA, legB, hypC] = triples[d % triples.length];
      const ang1 = 45 + d * 5, ang2 = 55 + d * 3, suppAng = 65 + d * 10, polySides = 5 + d, rad = 4 + d;
      pack = {
        objectives: [`Master "${cleanTopic}" with Geometry theorems and proofs`, "Apply a² + b² = c² and triangle/polygon angle theorems", "Compute exact circle areas in terms of π"],
        anchorVerse: "Job 38:5 — Who hath laid the measures thereof, if thou knowest?",
        bigIdea: "Geometry unites logical proof with spatial measurement—triangles, circles, polygons, and trigonometry.",
        sections: [
          { stepBadge: "PART 1 · PYTHAGOREAN THEOREM & ANGLES", heading: "a² + b² = c² & 180° Triangle Sum", body: `In any right triangle, <code>a² + b² = c²</code>. All triangle angles sum to 180°, and any n-gon sums to <code>(n − 2) × 180°</code>.`, keyTakeaway: "Always take the square root at the end of a² + b² = c²." },
          { stepBadge: "PART 2 · CIRCLES", heading: "Exact Area = πr²", body: `A circle with radius r has exact area <code>r²π</code> and circumference <code>2πr</code>.`, keyTakeaway: "Square radius for Area; double radius for Circumference." }
        ],
        workedExamples: [
          { badge: "WORKED EXAMPLE", title: "Legs 6 and 8 → Find Hypotenuse", problem: "Compute c.", step1: "6² + 8² = 36 + 64 = 100.", step2: "c = √100 = 10.", step3: "Hypotenuse = 10.", pitfall: "Don't stop before taking √!" }
        ],
        problems: [
          { prompt: `1. Right triangle legs ${legA} and ${legB}. Hypotenuse c =`, answer: String(hypC), hint: `√(${legA}² + ${legB}²).` },
          { prompt: `2. Triangle angles ${ang1}° and ${ang2}°. 3rd angle (number):`, answer: String(180 - ang1 - ang2), hint: `180 − ${ang1} − ${ang2}.` },
          { prompt: `3. Supplement of ${suppAng}° (number):`, answer: String(180 - suppAng), hint: `180 − ${suppAng}.` },
          { prompt: `4. Interior angle sum of a ${polySides}-gon (number):`, answer: String((polySides - 2) * 180), hint: `(${polySides} − 2) × 180.` },
          { prompt: `5. Area of circle r = ${rad} is ___π (number before π):`, answer: String(rad * rad), hint: `${rad}².` }
        ],
        writingPrompt: `Explain how you found hypotenuse c = ${hypC} from legs ${legA} and ${legB}.`,
        writingExemplar: `By the Pythagorean Theorem, ${legA}² + ${legB}² = ${hypC * hypC}, and taking the square root gives c = ${hypC}.`
      };
    } else {
      const coeff = 2 + d, exp = 3 + (w % 3), derivVal = coeff * exp * Math.pow(2, exp - 1);
      const logPow = 3 + d, logVal = Math.pow(2, logPow), limX = 3 + d;
      pack = {
        objectives: [`Master "${cleanTopic}" with Pre-Calculus / AP Calculus rigor`, "Apply the Power Rule and direct-substitution limits", "Solve logarithms and trigonometric identities"],
        anchorVerse: "Colossians 1:17 — By him all things consist.",
        bigIdea: "Higher math models instantaneous rates of change, exponential/log growth, waves, and optimization.",
        sections: [
          { stepBadge: "PART 1 · POWER RULE & LOGARITHMS", heading: "Derivatives & Inverse Exponents", body: `Power Rule: <code>d/dx(a·xⁿ) = (a·n)·xⁿ⁻¹</code>. Logarithm: <code>log₂(32) = 5</code> means <code>2⁵ = 32</code>.`, keyTakeaway: "Derivative = instantaneous rate of change." },
          { stepBadge: "PART 2 · LIMITS & TRIG", heading: "Direct Substitution & Pythagorean Identity", body: `Substitute x directly first for limits; remember <code>sin²(θ) + cos²(θ) = 1</code>.`, keyTakeaway: "Always verify direct substitution first." }
        ],
        workedExamples: [
          { badge: "WORKED EXAMPLE", title: "f(x) = 4x³ → Find f'(2)", problem: "Differentiate and evaluate.", step1: "f'(x) = 12x².", step2: "f'(2) = 12(4).", step3: "f'(2) = 48.", pitfall: "Square 2 before multiplying by 12." }
        ],
        problems: [
          { prompt: `1. Evaluate log₂(${logVal}) =`, answer: String(logPow), hint: `2^? = ${logVal}.` },
          { prompt: `2. If f(x) = ${coeff}x^${exp}, find f'(2) =`, answer: String(derivVal), hint: `${coeff}×${exp} × 2^${exp - 1}.` },
          { prompt: `3. lim (x → ${limX}) of (2x + 5) =`, answer: String(2 * limX + 5), hint: `Plug in x = ${limX}.` },
          { prompt: `4. Larger root of x² − ${(2 + d) + (3 + d)}x + ${(2 + d) * (3 + d)} = 0:`, answer: String(3 + d), hint: `Factor (x − a)(x − b) = 0.` },
          { prompt: `5. sin²(47°) + cos²(47°) =`, answer: "1", hint: `Pythagorean Identity!` }
        ],
        writingPrompt: `Explain how the Power Rule gave f'(2) = ${derivVal} for f(x) = ${coeff}x^${exp}.`,
        writingExemplar: `Multiplying ${coeff} by ${exp} and dropping the exponent by 1 gives f'(x) = ${coeff * exp}x^${exp - 1}; plugging in x = 2 gives ${derivVal}.`
      };
    }

    pack.quiz = generateMathQuizQuestions(grade, weekNum, dayIdx, quizTargetCount);
    return pack;
  }

  // ==================== 4. GRADE-CALIBRATED SUBJECT PACKS (K–2, 3–5, 6–12 ACROSS ALL SUBJECTS!) ====================
  function buildSubjectPack(course, weekNum, dayIdx, cleanTopic, quizTargetCount) {
    const grade = (course.gradeLevels && course.gradeLevels[0]) ?? 6;
    const dept = (course.department || "").toLowerCase();
    const code = (course.code || "").toUpperCase();
    const w = weekNum;
    const d = dayIdx;
    const isK2 = grade <= 2;

    let category = "general";
    let pack = null;

    // 1. BIBLE / THEOLOGY (Separate K–2 vs. Grades 3–12!)
    if (dept.includes("theology") || code.startsWith("THEO")) {
      if (isK2) {
        category = "k2_theology";
        pack = {
          objectives: [
            `Hear and enjoy today's Bible story: "${cleanTopic}"`,
            "Remember that God loves you, made a wonderful world, and keeps His promises",
            "Practice one kind, honest action at home today!"
          ],
          anchorVerse: "Genesis 1:1 — In the beginning God created the heaven and the earth.",
          bigIdea: `God loves you so much! Today in "${cleanTopic}", we see how good, wise, and caring God is—and how we can love God and be kind to our family.`,
          sections: [
            {
              stepBadge: "PART 1 · TODAY'S BIBLE STORY",
              heading: `Let's Discover: ${cleanTopic}`,
              body: `Press the <strong>Listen</strong> button above or read with Mom or Dad! In <strong>${cleanTopic}</strong>, notice how God lovingly cares for His people and teaches us to be brave, truthful, and kind.`,
              keyTakeaway: "God made everything good and loves you every single day!"
            },
            {
              stepBadge: "PART 2 · LIVING IT OUT TODAY",
              heading: "How Can I Show God's Love Today?",
              body: `We show our love for God when we <strong>pray</strong>, tell the <strong>truth</strong>, share with friends, and obey our parents with a cheerful heart!`,
              keyTakeaway: "Love God · Pray anytime · Be kind and honest!"
            }
          ],
          workedExamples: [
            {
              badge: "FAMILY TALK TIME",
              title: `Talking About "${cleanTopic}"`,
              problem: "How can we remember today's Bible story?",
              step1: "Tell Mom or Dad who was in today's Bible story.",
              step2: "Say one thing this story shows us about God's love.",
              step3: "Pick one kind thing to do for someone in your house today!",
              pitfall: "Pray a short 1-sentence 'Thank you, God!' together!"
            }
          ],
          wordBank: ["God", "Love", "Kind", "Pray", "Good"],
          blanks: [
            { before: "1. Everything in the world was lovingly made by ", answer: "God", after: ".", hint: "3 letters, starts with G" },
            { before: "2. Talking and listening to God anytime is called ", answer: "Pray", after: ".", hint: "Starts with P" },
            { before: "3. We honor God when we use ", answer: "Kind", after: " words with our family.", hint: "Starts with K" }
          ],
          writingPrompt: grade === 0
            ? `Tell a parent one thing you loved about "${cleanTopic}", or type one happy word (like Love or Good)!`
            : `In 1–2 short sentences, tell what "${cleanTopic}" teaches us about God's love.`,
          writingExemplar: `Today's story reminds me that God loves me, keeps His promises, and helps me be kind and honest.`,
          baseQuiz: []
        };
      } else {
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
                body: `<strong>Days 1–3 (Building the Homes):</strong> Day 1 = Light · Day 2 = Sky &amp; Oceans · Day 3 = Dry Land &amp; Plants.<br/><strong>Days 4–6 (Filling the Homes):</strong> Day 4 = Sun, Moon &amp; Stars · Day 5 = Birds &amp; Fish · Day 6 = Land Animals &amp; People!<br/><br/>On <strong>Day 7 (Sabbath)</strong>, God rested—setting a healthy rhythm of purposeful work and joyful rest.`,
                keyTakeaway: "Days 1–3 build the spaces; Days 4–6 fill those exact spaces in matching order!"
              },
              {
                stepBadge: "PART 2 · MADE IN GOD'S IMAGE",
                heading: "Why Every Person Matters",
                body: `On Day 6, God made humanity in His own <strong>Image</strong> (Genesis 1:27). That means you can think, create, love, choose what is right, and practice <strong>Stewardship</strong>.`,
                keyTakeaway: "Because every person bears God's image, every life has real value."
              }
            ],
            workedExamples: [
              { badge: "EXAMPLE · MATCHING THE DAYS", title: "How Day 2 Matches Day 5", problem: "How does Day 5 connect to Day 2?", step1: "Day 2 created the sky above and oceans below.", step2: "Day 5 filled the sky with birds and oceans with fish.", step3: "Habitat first, living creatures second!", pitfall: "Remember: 1↔4, 2↔5, 3↔6." }
            ],
            wordBank: ["Order", "Image", "Stewardship", "Sabbath", "Good"],
            blanks: [
              { before: "1. Genesis 1 shows a clear 3 + 3 pattern of ", answer: "Order", after: ".", hint: "Starts with O" },
              { before: "2. Genesis 1:27 says humans are made in God's ", answer: "Image", after: ".", hint: "Starts with I" },
              { before: "3. Faithfully caring for creation and others is called ", answer: "Stewardship", after: ".", hint: "Starts with S" }
            ],
            writingPrompt: "In 2–4 clear sentences, explain how Days 1–3 match Days 4–6 in Genesis 1 and what being made in God's image means.",
            writingExemplar: "In Genesis 1, Days 1–3 build the habitats and Days 4–6 fill them. Being made in God's image means every person has real dignity and deserves kindness.",
            baseQuiz: [{ q: "How do Days 1–3 and Days 4–6 of Genesis 1 fit together?", options: ["Days 1–3 build the habitats and Days 4–6 fill each matching habitat", "They are completely random", "Days 4–6 erase Days 1–3", "Only plants were made"], correct: 0, explanation: "Day 1↔4, Day 2↔5, Day 3↔6." }]
          };
        } else {
          pack = {
            objectives: [
              `Understand "${cleanTopic}" clearly in plain, Grade ${grade}-friendly English`,
              "See how today's Bible passage fits into Creation → Fall → Redemption → Restoration",
              "Apply today's truth to real friendships, choices, and faith this week"
            ],
            anchorVerse: "Psalm 119:105 — Thy word is a lamp unto my feet, and a light unto my path.",
            bigIdea: `Today we explore "${cleanTopic}" in clear, everyday language—seeing real people, real choices, and how God faithfully keeps His promises.`,
            sections: [
              { stepBadge: "PART 1 · THE STORY IN CONTEXT", heading: `Understanding "${cleanTopic}"`, body: `Ask three clear questions: <strong>1. What happened?</strong> <strong>2. What does it show about God?</strong> <strong>3. How do I live it out today?</strong> Open the <strong>Scripture Hub</strong> anytime for Easy-to-Read English or Audio Read-Aloud.`, keyTakeaway: "Always read verses in context so you see the full story clearly." },
              { stepBadge: "PART 2 · LIVING IT OUT", heading: "Character & Wisdom in Real Life", body: `Think about one real situation this week where honesty, patience, courage, or trusting God applies from <strong>${cleanTopic}</strong>.`, keyTakeaway: "Real wisdom shows up in everyday kindness, honesty, and courage." }
            ],
            workedExamples: [
              { badge: "3-STEP BIBLE STUDY", title: `Breaking Down "${cleanTopic}"`, problem: "How do I study any Bible chapter clearly?", step1: "Observe who is there and what happens.", step2: "Notice God's promise or character.", step3: "Pick one practical way to live it out today.", pitfall: "Read the whole paragraph—never one disconnected verse!" }
            ],
            wordBank: ["Context", "Faithfulness", "Character", "Promise", "Wisdom"],
            blanks: [
              { before: "1. Reading the verses before and after a passage is reading in ", answer: "Context", after: ".", hint: "Starts with C" },
              { before: `2. "${cleanTopic}" reveals God's `, answer: "Faithfulness", after: " to His people.", hint: "Starts with F" },
              { before: "3. Practicing truth daily builds strong ", answer: "Character", after: ".", hint: "Starts with C" }
            ],
            writingPrompt: `In 2–4 plain sentences, explain what "${cleanTopic}" shows about God and one way to live it out this week.`,
            writingExemplar: `"${cleanTopic}" shows God's faithfulness and encourages us to live with honesty, courage, and kindness.`,
            baseQuiz: []
          };
        }
      }
    }
    // 2. READING, PHONICS & LANGUAGE ARTS (Separate K–2 vs. Grades 3–12!)
    else if (dept.includes("literature") || code.startsWith("ELA") || code.startsWith("LIT") || code.startsWith("RHET")) {
      if (isK2) {
        category = "k2_reading";
        pack = {
          objectives: [
            `Practice "${cleanTopic}" out loud with clear letter sounds and rhyming!`,
            grade === 0 ? "Blend short 3-letter words (cat, sun, dog) and spot story characters" : "Read smoothly aloud and write complete sentences with a capital and period",
            "Enjoy a matching K–5 Digital Library storybook after your lesson!"
          ],
          anchorVerse: "Proverbs 16:24 — Kind words are sweet like honey!",
          bigIdea: grade === 0
            ? `Every letter makes a special sound! When we put letter sounds together like /c/ - /a/ - /t/ → CAT, we unlock the magic of reading stories!`
            : `Today in "${cleanTopic}", we build super reading fluency, spot spelling patterns, and practice writing crisp, complete sentences!`,
          sections: [
            {
              stepBadge: "PART 1 · SOUNDS & WORDS",
              heading: grade === 0 ? `Sounding Out Words for "${cleanTopic}"` : `Word Patterns in "${cleanTopic}"`,
              body: grade === 0
                ? `Say each letter sound slowly, then slide them together fast:<br/>• <strong>/m/ - /a/ - /t/</strong> → <strong>MAT</strong><br/>• <strong>/s/ - /a/ - /t/</strong> → <strong>SAT</strong><br/>• <strong>/c/ - /a/ - /t/</strong> → <strong>CAT</strong><br/><br/>Notice how <strong>mat, sat, and cat</strong> all rhyme because they end with <strong>-at</strong>!`
                : `Look closely for blends, digraphs (<strong>sh, ch, th</strong>), and silent-E long vowels (<strong>cap → cape</strong>, <strong>kit → kite</strong>). Every sentence starts with a <strong>CAPITAL letter</strong> and ends with a <strong>period (.)</strong>, <strong>question mark (?)</strong>, or <strong>exclamation point (!)</strong>.`,
              keyTakeaway: grade === 0 ? "Slide letter sounds together smoothly to read new words!" : "Capital letter at the start + punctuation at the end = complete sentence!"
            },
            {
              stepBadge: "PART 2 · STORY ELEMENTS",
              heading: "Characters, Setting & Beginning–Middle–End",
              body: `When you read or listen to a story, ask: <strong>WHO</strong> is in the story (Characters)? <strong>WHERE</strong> does it happen (Setting)? And what happened <strong>First, Next, and Last</strong>?`,
              keyTakeaway: "Characters = WHO · Setting = WHERE & WHEN."
            }
          ],
          workedExamples: [
            {
              badge: "READING FUN EXAMPLE",
              title: grade === 0 ? "Blending /s/ - /u/ - /n/" : "Fixing a Sentence",
              problem: grade === 0 ? "Blend the sounds /s/ - /u/ - /n/." : "Fix: the red dog ran fast",
              step1: grade === 0 ? "Say the first sound: /ssss/." : "Start with a CAPITAL T: 'The'",
              step2: grade === 0 ? "Add the middle and end: /u/ ... /n/." : "Keep clear spaces between words.",
              step3: grade === 0 ? "Slide them together fast: SUN!" : "Add a period at the end: 'The red dog ran fast.'",
              pitfall: "Read your sentence out loud to hear if it sounds complete!"
            }
          ],
          wordBank: ["Rhyme", "Capital", "Setting", "Noun", "Verb"],
          blanks: [
            { before: "1. Words like cat and hat have the same ending sound—they ", answer: "Rhyme", after: "!", hint: "Starts with R" },
            { before: "2. Every sentence starts with a ", answer: "Capital", after: " letter.", hint: "Starts with C" },
            { before: "3. Where and when a story takes place is the ", answer: "Setting", after: ".", hint: "Starts with S" }
          ],
          writingPrompt: grade === 0
            ? `Say 2 rhyming words out loud to a parent (like cat and hat), or type one word you read today!`
            : `Write 1–2 complete sentences about your favorite animal, starting with a capital letter and ending with a period.`,
          writingExemplar: `The happy puppy ran across the green grass. He loves to play catch in the warm sunshine.`,
          baseQuiz: []
        };
      } else {
        category = "ela_upper";
        pack = {
          objectives: [
            `Master "${cleanTopic}" with Grade ${grade} reading and writing strategies`,
            "Cite exact text evidence to support inferences, theme, and main idea",
            "Write clear, structured sentences and paragraphs with accurate grammar"
          ],
          anchorVerse: "Proverbs 25:11 — A word fitly spoken is like apples of gold in pictures of silver.",
          bigIdea: `Strong readers look closely for text evidence, and strong writers organize clear ideas into Topic Sentence → Supporting Details → Conclusion!`,
          sections: [
            { stepBadge: "PART 1 · CLOSE READING & EVIDENCE", heading: `Unlocking "${cleanTopic}"`, body: `Whenever you answer a question about a story or article in <strong>${course.title}</strong>, go back into the passage and grab <strong>Text Evidence</strong> (a specific quote or detail) that proves your claim!`, keyTakeaway: "Good readers don't guess—they prove their answers with Text Evidence." },
            { stepBadge: "PART 2 · VOCABULARY & CLEAR WRITING", heading: "Context Clues, Roots & Paragraph Structure", body: `Use <strong>Context Clues</strong> and Greek/Latin roots (like <code>bio-</code> = life, <code>tele-</code> = far, <code>re-</code> = again) to decode big words. Build every paragraph with a clear <strong>Topic Sentence</strong>, 2–3 specific details, and a crisp wrap-up.`, keyTakeaway: "Topic Sentence + Evidence/Details + Concluding Thought = A+ Paragraph." }
          ],
          workedExamples: [
            { badge: "READING & WRITING EXAMPLE", title: "Answering With Text Evidence (RACE)", problem: "How do I write a top-scoring reading response?", step1: "Restate & Answer the question clearly in one sentence.", step2: "Cite one exact detail or short quote from the passage.", step3: "Explain in your own words how that detail proves your answer!", pitfall: "Never drop in a quote without explaining what it shows." }
          ],
          wordBank: ["Evidence", "Theme", "MainIdea", "Context", "Simile"],
          blanks: [
            { before: "1. A specific detail or quote from the passage that proves your answer is Text ", answer: "Evidence", after: ".", hint: "Starts with E" },
            { before: "2. The deeper life lesson or message of a story is its ", answer: "Theme", after: ".", hint: "Starts with T" },
            { before: "3. Using nearby sentences to figure out an unfamiliar word uses ", answer: "Context", after: " clues.", hint: "Starts with C" }
          ],
          writingPrompt: `In 2–4 clear sentences, explain "${cleanTopic}" and share one tip that helps you read or write more clearly.`,
          writingExemplar: `In "${cleanTopic}", backing up our main idea with specific text evidence and organizing paragraphs with a clear topic sentence makes both reading comprehension and writing stronger.`,
          baseQuiz: []
        };
      }
    }
    // 3. SCIENCE (Separate K–2 vs. Grades 3–12!)
    else if (dept.includes("science") || code.startsWith("SCI")) {
      if (isK2) {
        category = "k2_science";
        pack = {
          objectives: [
            `Explore "${cleanTopic}" using your senses and real-world observations!`,
            grade === 0 ? "Tell Living vs. Nonliving things apart and name what plants and animals need" : "Observe light, sound, states of matter, weather, and animal life cycles",
            "Ask curious science questions about God's amazing creation!"
          ],
          anchorVerse: "Psalm 19:1 — The heavens declare the glory of God!",
          bigIdea: grade === 0
            ? `God filled the world with wonders you can see, hear, touch, smell, and taste! Today we explore "${cleanTopic}" with curious eyes!`
            : `Science is looking closely at how nature works! Today in "${cleanTopic}", we observe real patterns in plants, animals, weather, and matter.`,
          sections: [
            {
              stepBadge: "PART 1 · OBSERVING GOD'S WORLD",
              heading: `Discovering "${cleanTopic}"`,
              body: grade === 0
                ? `Scientists use their <strong>Five Senses</strong> (Sight, Hearing, Touch, Smell, Taste) to explore! Remember: <strong>Living things</strong> (plants, puppies, birds, YOU!) grow and need water, air, and food. <strong>Nonliving things</strong> (rocks, toys) do not grow.`
                : `Look closely at how nature works in <strong>${cleanTopic}</strong>! Every plant uses <strong>roots</strong> to drink water and <strong>leaves</strong> to soak up sunshine, while matter can be a <strong>Solid</strong> (ice), <strong>Liquid</strong> (water), or <strong>Gas</strong> (steam)!`,
              keyTakeaway: grade === 0 ? "Living things grow and need water, food, and air!" : "Observe closely with your senses and notice real patterns in nature!"
            },
            {
              stepBadge: "PART 2 · TRY IT AT HOME",
              heading: "Mini Nature Explorer Activity",
              body: `Look out a window or step outside with a parent! Spot <strong>one living thing</strong>, check today's <strong>weather</strong> (sunny, cloudy, windy, or rainy), and notice how pushes and pulls make everyday objects move.`,
              keyTakeaway: "Every curious observation makes you a real junior scientist!"
            }
          ],
          workedExamples: [
            {
              badge: "JUNIOR SCIENTIST CHECK",
              title: "Living or Nonliving?",
              problem: "Is a sunflower living or nonliving?",
              step1: "Does a sunflower grow taller? YES!",
              step2: "Does it need water, air, and sunlight? YES!",
              step3: "So a sunflower is a LIVING thing!",
              pitfall: "A toy robot can move with batteries, but it doesn't grow or need food—so it's nonliving!"
            }
          ],
          wordBank: ["Living", "Roots", "Sunlight", "Liquid", "Senses"],
          blanks: [
            { before: "1. Plants and animals that grow and need water are ", answer: "Living", after: " things.", hint: "Starts with L" },
            { before: "2. The underground part of a plant that drinks up water is its ", answer: "Roots", after: ".", hint: "Starts with R" },
            { before: "3. When solid ice melts in the warm sun, it turns into a ", answer: "Liquid", after: ".", hint: "Starts with L" }
          ],
          writingPrompt: grade === 0
            ? `Tell a parent one living thing you saw today (like a tree, bird, or dog), or type its name!`
            : `In 1–2 short sentences, share one cool science fact you learned today about "${cleanTopic}".`,
          writingExemplar: `Plants are living things that use their roots to drink water and their leaves to soak up sunlight so they can grow tall.`,
          baseQuiz: []
        };
      } else {
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
            : `Today we break down "${cleanTopic}" into clear cause-and-effect steps you can picture, measure, and explain in plain English.`,
          sections: [
            {
              stepBadge: "PART 1 · CLEAR FOUNDATIONS",
              heading: w === 1 ? "The 6 Simple Steps of the Scientific Method" : `Understanding "${cleanTopic}" in Real Life`,
              body: w === 1
                ? `1. <strong>Ask a Question</strong> → 2. <strong>Research</strong> → 3. <strong>Make a Hypothesis</strong> ("If... then...") → 4. <strong>Run a Fair Test</strong> → 5. <strong>Analyze Data</strong> → 6. <strong>Draw a Conclusion</strong>.`
                : `In Week ${w} of <strong>${course.title}</strong>, <strong>${cleanTopic}</strong> explains a real cause-and-effect pattern happening in nature. Always ask: <em>What causes the change, and what measurable effect do we observe?</em>`,
              keyTakeaway: "Science relies on careful observation, fair testing, and honest measurements."
            },
            {
              stepBadge: "PART 2 · MAKING TESTS FAIR (VARIABLES)",
              heading: "Change Only ONE Thing at a Time!",
              body: `• <strong>Independent Variable:</strong> The ONE thing <em>I</em> change.<br/>• <strong>Dependent Variable:</strong> The <em>Data</em> I measure.<br/>• <strong>Control Variables:</strong> Everything kept <em>Constant</em> so the test stays fair!`,
              keyTakeaway: "Independent = I change · Dependent = Data measured · Control = Constant."
            }
          ],
          workedExamples: [
            { badge: "EXAMPLE · FAIR TEST", title: "Does Salt Melt Ice Faster?", problem: "Identify the 3 variables.", step1: "Independent: Salt vs. no salt.", step2: "Dependent: Minutes until melted.", step3: "Controls: Same cube size, room temp, and plate.", pitfall: "If one cube starts larger, the test isn't fair!" }
          ],
          wordBank: ["Hypothesis", "Independent", "Control", "Evidence", "Observation"],
          blanks: [
            { before: "1. A testable 'If... then...' prediction is called a ", answer: "Hypothesis", after: ".", hint: "Starts with H" },
            { before: "2. The ONE factor you purposefully change is the ", answer: "Independent", after: " variable.", hint: "Starts with I" },
            { before: "3. Everything kept identical for a fair test is a ", answer: "Control", after: " variable.", hint: "Starts with C" }
          ],
          writingPrompt: `In 2–4 plain sentences, explain "${cleanTopic}" in your own words and describe one fair test or real-life example.`,
          writingExemplar: `In "${cleanTopic}", changing only one independent variable at a time while keeping controls constant lets us measure honest data and explain our findings with Claim, Evidence, and Reasoning.`,
          baseQuiz: []
        };
      }
    }
    // 4. HISTORY & SOCIAL STUDIES (Separate K–2 vs. Grades 3–12!)
    else if (dept.includes("history") || code.startsWith("HIST")) {
      if (isK2) {
        category = "k2_history";
        pack = {
          objectives: [
            `Explore "${cleanTopic}" in friendly, everyday stories!`,
            grade === 0 ? "Meet helpful community workers, learn Needs vs. Wants, and read simple maps" : "Use a compass rose (N, S, E, W), learn Goods vs. Services, and meet American heroes",
            "Practice being a kind, honest helper in your family and neighborhood!"
          ],
          anchorVerse: "Proverbs 22:1 — A good name is rather to be chosen than great riches.",
          bigIdea: grade === 0
            ? `Communities work best when neighbors help each other! Today in "${cleanTopic}", we learn about helpers, maps, and how to be a great citizen.`
            : `History is the true story of real people, brave explorers, clever inventors, and how communities work together!`,
          sections: [
            {
              stepBadge: "PART 1 · COMMUNITIES, MAPS & HELPERS",
              heading: `Exploring "${cleanTopic}"`,
              body: grade === 0
                ? `Every town has wonderful <strong>Community Helpers</strong>—firefighters, police officers, doctors, teachers, farmers, and mail carriers! On a <strong>map or globe</strong>, blue shows water and green/brown shows land.`
                : `Use a <strong>Compass Rose</strong> (North, South, East, West) to read maps cleanly! Remember the difference between <strong>Needs</strong> (food, water, safe home) and <strong>Wants</strong> (extra toys), and between <strong>Goods</strong> (items you hold) and <strong>Services</strong> (helpful work people do for you).`,
              keyTakeaway: "Good citizens obey kind rules, tell the truth, and help their neighbors!"
            }
          ],
          workedExamples: [
            { badge: "EVERYDAY CITIZEN CHECK", title: "Need or Want?", problem: "Is a warm winter coat a Need or a Want?", step1: "Ask: Does a warm coat keep you safe and healthy in winter?", step2: "YES—clothes and shelter protect your body!", step3: "So a winter coat is a NEED (while an extra toy is a WANT)!", pitfall: "Smart families take care of Needs first, save some, and share!" }
          ],
          wordBank: ["Map", "Need", "Helper", "North", "Citizen"],
          blanks: [
            { before: "1. A flat drawing that shows roads, towns, and rivers is a ", answer: "Map", after: ".", hint: "3 letters, starts with M" },
            { before: "2. Food, water, and a safe home are things every family must have—a ", answer: "Need", after: ".", hint: "Starts with N" },
            { before: "3. A person who helps keep their neighborhood kind and safe is a good ", answer: "Citizen", after: ".", hint: "Starts with C" }
          ],
          writingPrompt: grade === 0
            ? `Tell a parent your favorite community helper (like a firefighter or doctor), or type one helper word!`
            : `In 1–2 short sentences, name one community helper or American hero and tell how they served others.`,
          writingExemplar: `Firefighters are brave community helpers who keep families safe, and we can be good citizens by being honest and helping our neighbors.`,
          baseQuiz: []
        };
      } else {
        category = "history_upper";
        pack = {
          objectives: [
            `Understand "${cleanTopic}" through real timelines, geography, and primary sources`,
            "Connect cause-and-effect in history, constitutional civics, and everyday economics",
            "Summarize today's historical insight clearly in your own words"
          ],
          anchorVerse: "Psalm 78:4 — Showing to the generation to come the praises of the LORD.",
          bigIdea: `History isn't just memorizing dates—it's understanding real people's choices, how geography shaped nations, and how constitutional freedom and economics work today!`,
          sections: [
            { stepBadge: "PART 1 · STORY, GEOGRAPHY & SOURCES", heading: `What Happened in "${cleanTopic}"?`, body: `Look for <strong>Primary Sources</strong> (letters, speeches, constitutions written at the time) and trace <strong>Cause and Effect</strong>: why did leaders or citizens act as they did, and what lasting results followed?`, keyTakeaway: "Primary Sources + Cause & Effect bring history alive." },
            { stepBadge: "PART 2 · CIVICS & ECONOMICS", heading: "Liberty, Rule of Law & Wise Stewardship", body: `Remember the three branches of constitutional government (<strong>Legislative, Executive, Judicial</strong>) protected by <strong>Checks and Balances</strong>, and core economic truths like Supply, Demand, and Opportunity Cost.`, keyTakeaway: "Informed, honest citizens keep communities and nations free." }
          ],
          workedExamples: [
            { badge: "HISTORIAN TOOLKIT", title: "Primary vs. Secondary Source", problem: "Is George Washington's 1776 letter a Primary or Secondary source?", step1: "Ask: Did Washington live through the event himself?", step2: "YES—he wrote it firsthand!", step3: "Therefore it is a Primary Source!", pitfall: "A modern textbook summarizing his letter is a Secondary Source." }
          ],
          wordBank: ["Primary", "Constitution", "Liberty", "Cause", "Supply"],
          blanks: [
            { before: "1. A diary, letter, or speech from someone who lived through an event is a ", answer: "Primary", after: " source.", hint: "Starts with P" },
            { before: "2. Separation of Powers and Checks & Balances are established in the U.S. ", answer: "Constitution", after: ".", hint: "Starts with C" },
            { before: "3. Understanding why an event happened means finding its ", answer: "Cause", after: ".", hint: "Starts with C" }
          ],
          writingPrompt: `In 2–4 clear sentences, explain "${cleanTopic}" in your own words and describe one important cause or lasting effect.`,
          writingExemplar: `Studying "${cleanTopic}" through primary sources shows clear cause-and-effect and reminds us how constitutional rule of law and civic virtue protect freedom.`,
          baseQuiz: []
        };
      }
    }
    // 5. ASL
    else if (code.startsWith("ASL")) {
      category = "asl";
      pack = {
        objectives: [`Learn the handshapes, movements, and facial expressions for "${cleanTopic}"`, "Practice smooth fingerspelling and polite Deaf culture etiquette", "Use clear eye contact and eyebrow grammar in greetings"],
        anchorVerse: "Proverbs 16:24 — Pleasant words are as an honeycomb, sweet to the soul.",
        bigIdea: "American Sign Language (ASL) is a vibrant visual language where hands, movement, and facial expressions work together!",
        sections: [
          { stepBadge: "PART 1 · VISUAL LANGUAGE BASICS", heading: `Learning "${cleanTopic}" Step by Step`, body: `Every ASL sign uses <strong>5 building blocks</strong>: Handshape, Location, Movement, Palm Orientation, and Facial Expression.`, keyTakeaway: "Keep your dominant signing hand consistent and steady." },
          { stepBadge: "PART 2 · FACIAL GRAMMAR", heading: "Eyebrows Up vs. Eyebrows Down", body: `<strong>Yes/No Question:</strong> Eyebrows UP! · <strong>Wh-Question (Who, What, Where):</strong> Eyebrows DOWN!`, keyTakeaway: "Eyebrows UP = Yes/No · Eyebrows DOWN = Wh-questions." }
        ],
        workedExamples: [
          { badge: "SIGNING PRACTICE TIP", title: "Introducing Yourself in ASL", problem: "How do you greet a friend in ASL?", step1: "Sign HELLO + MY NAME + fingerspell your name steadily.", step2: "Sign NICE-MEET-YOU with a warm smile.", step3: "Ask YOUR NAME WHAT? (eyebrows gently furrowed down).", pitfall: "Avoid bouncing your hand between letters!" }
        ],
        wordBank: ["Handshape", "Eyebrows", "Fingerspelling", "Location", "Smile"],
        blanks: [
          { before: "1. Spelling names letter-by-letter with the manual alphabet is called ", answer: "Fingerspelling", after: ".", hint: "Starts with F" },
          { before: "2. Raising or furrowing your ", answer: "Eyebrows", after: " shows what kind of question you ask in ASL.", hint: "Starts with E" },
          { before: "3. The exact shape your fingers make is the sign's ", answer: "Handshape", after: ".", hint: "Starts with H" }
        ],
        writingPrompt: `In 1–3 sentences, explain what your eyebrows do for a Yes/No question vs. a Wh-question in ASL.`,
        writingExemplar: `In ASL, eyebrows go up for a Yes/No question and furrow down for a Wh-question (like Who or What).`,
        baseQuiz: []
      };
    }
    // 6. CODING & AI — AUTOMATICALLY SCALES TO STUDENT'S EXACT GRADE LEVEL (K–2 vs. 3–5 vs. 6–12!)
    else if (code.startsWith("CS") || dept.includes("computer")) {
      category = "coding";
      const stuObj = typeof window.getAcademyActiveStudent === "function" ? window.getAcademyActiveStudent() : null;
      const effGrade = course.gradeLevels && course.gradeLevels.length > 1 && stuObj && stuObj.grade !== undefined
        ? Number(stuObj.grade)
        : grade;
      if (effGrade <= 2) {
        pack = {
          objectives: [
            `Explore "${cleanTopic}" with fun K–2 arrow directions (⬆️ ➡️ ⬇️ ⬅️) & robot games!`,
            "Give step-by-step instructions in the right order (an Algorithm) and fix silly mix-ups (Bugs)",
            "Practice staying safe and kind whenever using a tablet or computer"
          ],
          anchorVerse: "Proverbs 24:3 — Through wisdom is an house builded!",
          bigIdea: "Coding for Grades K–2 is like giving a friendly robot clear arrow steps (Forward, Turn, Jump!) in the exact right order—no tricky typing needed!",
          sections: [
            { stepBadge: "K–2 JUNIOR CODING · ROBOT STEPS", heading: `Robot Directions for "${cleanTopic}"`, body: `Pretend Mom or Dad is a silly robot! Give them exact step-by-step commands (an <strong>Algorithm</strong>): <em>"Step 1: Take 2 steps forward. Step 2: Turn right. Step 3: High-five!"</em> If the robot bumps into a pillow, you found a <strong>Bug</strong>—just fix the step and try again!`, keyTakeaway: "Algorithm = step-by-step recipe · Bug = a silly mistake we can fix!" },
            { stepBadge: "K–2 JUNIOR CODING · REPEAT LOOPS & SAFETY", heading: "Repeat Loops Save Time!", body: `Instead of saying <em>"Clap, Clap, Clap, Clap"</em> four times, a coder says <strong>"REPEAT 4 TIMES: Clap!"</strong> That's a <strong>Loop</strong>! And remember our #1 digital rule: always ask a parent before clicking new links!`, keyTakeaway: "Loops repeat steps neatly · Always check with a parent online!" }
          ],
          workedExamples: [
            { badge: "K–2 ROBOT GAME", title: "Guide the Griffin to the Star ⭐", problem: "The star is 3 squares straight ahead.", step1: "Step 1: Move Forward 1.", step2: "Step 2: Move Forward 1, Move Forward 1 (or REPEAT 3×: Move Forward!).", step3: "You reached the star!", pitfall: "Put steps in the exact right order!" }
          ],
          wordBank: ["Algorithm", "Loop", "Bug", "Step", "Safe"],
          blanks: [
            { before: "1. A step-by-step list of directions for a robot is an ", answer: "Algorithm", after: ".", hint: "Starts with A" },
            { before: "2. Repeating the same move over and over uses a ", answer: "Loop", after: ".", hint: "Starts with L" },
            { before: "3. A silly mistake in robot directions is called a ", answer: "Bug", after: ".", hint: "3 letters, starts with B" }
          ],
          writingPrompt: "Tell a parent 3 robot steps to walk from your chair to the door (or type 'Algorithm')!",
          writingExemplar: "Step 1 stand up, Step 2 walk forward 4 steps, Step 3 touch the door—that is an algorithm!",
          baseQuiz: []
        };
      } else if (effGrade <= 5) {
        pack = {
          objectives: [
            `Build "${cleanTopic}" using Grades 3–5 visual block-coding concepts (Scratch-style!)`,
            "Use Variables (score, lives), Loops, X/Y Coordinates, and IF/ELSE Game Rules",
            "Debug errors step by step like a real junior game designer"
          ],
          anchorVerse: "Proverbs 24:3 — Through wisdom is an house builded; and by understanding it is established.",
          bigIdea: "In Grades 3–5 Coding, you snap visual logic blocks together—using Variables to track score, Loops to animate movement, and IF/ELSE blocks so your game reacts when players collect stars!",
          sections: [
            { stepBadge: "GRADES 3–5 GAME DESIGN · BLOCK LOGIC", heading: `Building "${cleanTopic}" With Visual Blocks`, body: `Every fun 2D game runs on 4 core blocks:<br/>• <strong>Events:</strong> <code>When Green Flag Clicked</code> or <code>When Spacebar Pressed</code><br/>• <strong>Variables:</strong> A labeled box holding <code>score = 0</code> or <code>lives = 3</code><br/>• <strong>Loops:</strong> <code>Forever</code> or <code>Repeat 10 times</code><br/>• <strong>Conditionals:</strong> <code>IF touching Coin → change score by +10!</code>`, keyTakeaway: "Events start actions · Variables hold scores · Conditionals make game rules!" },
            { stepBadge: "GRADES 3–5 GAME DESIGN · X/Y COORDINATES & DEBUGGING", heading: "Moving Sprites & Squashing Bugs", body: `Changing <strong>X</strong> moves your sprite left/right; changing <strong>Y</strong> moves it up/down! When a game glitches, trace one block at a time to <strong>Debug</strong> it.`, keyTakeaway: "Plan → Snap a small block group → Test → Debug → Polish!" }
          ],
          workedExamples: [
            { badge: "BLOCK-CODE WALKTHROUGH", title: "Coin-Collector Score Rule", problem: "How does a game award points and win at 100?", step1: "When Game Starts → set score = 0.", step2: "IF touching Gold Coin → score = score + 10.", step3: "IF score >= 100 → show 'You Win!'", pitfall: "Remember to reset score = 0 at the start of every new game!" }
          ],
          wordBank: ["Algorithm", "Variable", "Loop", "Debugging", "Conditional"],
          blanks: [
            { before: "1. A step-by-step list of instructions for a computer is an ", answer: "Algorithm", after: ".", hint: "Starts with A" },
            { before: "2. A labeled box storing score or lives in a game is a ", answer: "Variable", after: ".", hint: "Starts with V" },
            { before: "3. Finding and fixing glitches in your game blocks is ", answer: "Debugging", after: ".", hint: "Starts with D" }
          ],
          writingPrompt: "In 2–3 sentences, describe a video game you'd like to design and what Variable and IF/ELSE rule it would use!",
          writingExemplar: "My game would use a Variable called score starting at 0, and an IF/ELSE conditional so if the player catches 10 stars they unlock Level 2.",
          baseQuiz: []
        };
      } else {
        pack = {
          objectives: [
            `Apply "${cleanTopic}" at Middle/High School depth (Python, HTML/CSS & Logic)`,
            "Trace real `for` loops, `if/elif/else` branches, functions, lists, and debugging logs",
            "Practice responsible AI verification and strong cybersecurity habits"
          ],
          anchorVerse: "Proverbs 24:3 — Through wisdom is an house builded; and by understanding it is established.",
          bigIdea: "In Grades 6–8+ Coding, you transition from visual blocks into real text-based programming (Python & HTML/CSS)—writing clean functions, loops, conditionals, and structured data!",
          sections: [
            { stepBadge: "GRADES 6–8+ TEXT CODING · PYTHON & WEB", heading: `Engineering "${cleanTopic}" in Real Code`, body: `Compare how real Python expresses logic cleanly:<br/><code>score = 0</code><br/><code>for star in range(5):</code><br/><code>&nbsp;&nbsp;score += 20</code><br/><code>if score >= 100: print("Level Cleared!")</code><br/><br/>On the web, <strong>HTML</strong> builds page structure, <strong>CSS</strong> styles colors/layouts, and <strong>JavaScript</strong> adds live interactivity!`, keyTakeaway: "Modular functions + exact syntax + step-by-step tracing produce clean software." },
            { stepBadge: "DEBUGGING & CYBERSECURITY", heading: "Reading Tracebacks & Protecting Accounts", body: `Read error line numbers calmly—90% of bugs are misspelled variable names, missing colons/brackets, or off-by-one loops. Pair coding skill with strong unique passwords and critical fact-checking of AI outputs.`, keyTakeaway: "Error tracebacks are diagnostic clues—trace variable values line by line!" }
          ],
          workedExamples: [
            { badge: "PYTHON TRACE WALKTHROUGH", title: "Tracing a Python Loop & Conditional", problem: "What does `total = 0; for n in [10, 20, 30]: total += n; print(total)` output?", step1: "Iteration 1: total = 0 + 10 = 10.", step2: "Iteration 2: total = 10 + 20 = 30.", step3: "Iteration 3: total = 30 + 30 = 60 → prints 60!", pitfall: "Watch Python indentation—lines inside a loop must indent evenly!" }
          ],
          wordBank: ["Algorithm", "Variable", "Loop", "Debugging", "Function"],
          blanks: [
            { before: "1. A step-by-step set of instructions solving a problem is an ", answer: "Algorithm", after: ".", hint: "Starts with A" },
            { before: "2. A reusable named block of code you can call anytime is a ", answer: "Function", after: ".", hint: "Starts with F" },
            { before: "3. Tracing errors and fixing broken code is called ", answer: "Debugging", after: ".", hint: "Starts with D" }
          ],
          writingPrompt: "In 2–4 sentences, explain how HTML, CSS, and Python/JavaScript each play a different role—or trace how an `if/else` statement works in a program.",
          writingExemplar: "HTML defines the semantic structure of a webpage, CSS controls visual styling and layout, and Python or JavaScript drives logic using variables, loops, and if/else conditionals.",
          baseQuiz: []
        };
      }
    }
    // 7. ART & MUSIC
    else if (code.startsWith("ART") || code.startsWith("MUS") || dept.includes("art") || dept.includes("music")) {
      category = "art";
      pack = {
        objectives: [`Practice "${cleanTopic}" with fun, step-by-step creative skills`, "Use basic shapes, colors, value shading, and steady musical beat", "Grow creative confidence through joyful practice"],
        anchorVerse: "Exodus 31:3 — Filled with the spirit of God, in wisdom and workmanship.",
        bigIdea: "Anyone can draw and make music! Start lightly with simple basic shapes or a steady beat, then layer details and color.",
        sections: [
          { stepBadge: "PART 1 · CREATIVE FOUNDATIONS", heading: `Core Technique for "${cleanTopic}"`, body: `Sketch lightly with circles, squares, and triangles first, then add <strong>Value</strong> (lights & shadows) and mix <strong>Primary Colors</strong> (Red, Yellow, Blue)! In music, lock into the steady <strong>Beat</strong> first.`, keyTakeaway: "Sketch lightly first so adjusting shapes is effortless!" }
        ],
        workedExamples: [
          { badge: "STUDIO TIP", title: "3-Step Sketch Method", problem: "How do I draw cleanly without getting frustrated?", step1: "Draw light basic shapes first.", step2: "Refine the outline gently.", step3: "Add bright color or smooth shading!", pitfall: "Save dark lines for the very last step." }
        ],
        wordBank: ["Value", "Primary", "Beat", "Sketch", "Perspective"],
        blanks: [
          { before: "1. How light or dark an area looks in a drawing is ", answer: "Value", after: ".", hint: "Starts with V" },
          { before: "2. Red, Yellow, and Blue are the three ", answer: "Primary", after: " colors.", hint: "Starts with P" },
          { before: "3. The steady heartbeat pulse of a song is its ", answer: "Beat", after: ".", hint: "Starts with B" }
        ],
        writingPrompt: `In 1–3 sentences, tell one art or music tip from "${cleanTopic}" and what you'd like to create today!`,
        writingExemplar: `Starting lightly with simple shapes and mixing primary colors makes drawing fun and accurate.`,
        baseQuiz: []
      };
    }
    // 8. CAREER, FINANCE, TRADES, LIFE SKILLS & LANGUAGES
    else {
      category = "general";
      pack = {
        objectives: [`Understand "${cleanTopic}" in clear, Grade ${grade === 0 ? "K" : grade}-friendly language`, "Connect practical real-life examples from today's topic", "Summarize the big idea clearly in your own words"],
        anchorVerse: "Proverbs 18:15 — The heart of the prudent getteth knowledge.",
        bigIdea: `Today we break down "${cleanTopic}" into clear, everyday English with practical real-world examples!`,
        sections: [
          { stepBadge: "PART 1 · THE BIG PICTURE", heading: `What Is "${cleanTopic}" All About?`, body: `In Week ${w} of <strong>${course.title}</strong>, focus on how <strong>${cleanTopic}</strong> works in real life—asking who it helps, how to verify the facts or numbers, and how wise habits pay off!`, keyTakeaway: "Understand the big idea first, then practice it in real life." }
        ],
        workedExamples: [
          { badge: "QUICK WALKTHROUGH", title: `Mastering "${cleanTopic}"`, problem: "How do I explain this clearly?", step1: "State the main idea in one plain sentence.", step2: "Give one real-world example.", step3: "Explain why it matters!", pitfall: "Plain, clear words always beat complicated jargon." }
        ],
        wordBank: ["MainIdea", "Evidence", "Summary", "Habit", "Integrity"],
        blanks: [
          { before: `1. Start learning "${cleanTopic}" by spotting the `, answer: "MainIdea", after: ".", hint: "MainIdea" },
          { before: "2. Back up claims with real facts or ", answer: "Evidence", after: ".", hint: "Starts with E" },
          { before: "3. Doing honest, dependable work builds ", answer: "Integrity", after: ".", hint: "Starts with I" }
        ],
        writingPrompt: grade === 0
          ? `Tell a parent one helpful thing you learned today about "${cleanTopic}"!`
          : `In 2–4 clear sentences, explain "${cleanTopic}" in your own words with one real-life example.`,
        writingExemplar: `In Week ${w} of ${course.title}, "${cleanTopic}" teaches a practical habit we can apply right away with honesty and care.`,
        baseQuiz: []
      };
    }

    pack.quiz = expandSubjectQuiz(pack.baseQuiz, category, cleanTopic, course.title, grade, w, d, quizTargetCount);
    return pack;
  }

  // ==================== 5. INSTALL UNIFIED K–12 CURRICULUM & ASSESSMENT SYNC ENGINE ====================
  const previousSync = window.syncCourseWeekContent;

  window.syncCourseWeekContent = function (course, weekNum) {
    if (!course) return;
    if (typeof previousSync === "function") {
      previousSync(course, weekNum);
    }

    if (!Array.isArray(course.lessons) || course.lessons.length < 5) {
      course.lessons = [0, 1, 2, 3, 4].map((idx) => ({
        id: `${course.id}-d${idx + 1}`,
        unit: `WEEK ${weekNum || 1} · DAY ${idx + 1}`,
        title: `Day ${idx + 1}`,
        duration: "35 mins",
        completed: false,
        dailyTasks: { blankDone: false, writingDone: false, quizDone: false },
        resources: [],
        practiceSet: [],
        quiz: []
      }));
    }

    const wNum = Math.max(1, Math.min(36, parseInt(weekNum, 10) || 1));
    const qtr = Math.ceil(wNum / 9);
    const activeStu = typeof window.getAcademyActiveStudent === "function" ? window.getAcademyActiveStudent() : null;
    const isMultiGradeElective = Array.isArray(course.gradeLevels) && course.gradeLevels.length > 1;
    const grade = isMultiGradeElective && activeStu && activeStu.grade !== undefined
      ? Number(activeStu.grade)
      : (course.gradeLevels && course.gradeLevels[0]) ?? 6;

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
      grade === 0 ? "Weekly Fun Check (10 Questions)" : grade <= 2 ? "Weekly Check (15 Questions)" : "Weekly Unit Test (20 Questions)"
    ];

    const dayFocusBadges = [
      "MONDAY · DAY 1 FOCUS (MEET TODAY'S IDEA)",
      "TUESDAY · DAY 2 FOCUS (STEP-BY-STEP STRATEGY)",
      "WEDNESDAY · DAY 3 FOCUS (REAL-WORLD HANDS-ON APPLICATION)",
      "THURSDAY · DAY 4 FOCUS (SPIRAL REVIEW & CONFIDENCE CHECK)",
      "FRIDAY · DAY 5 FOCUS (WEEKLY RECAP & MASTERY CHECK)"
    ];

    const buildDaySpecificSection = (dayIndex, topic, gNum, courseTitleStr) => {
      const gLbl = gNum === 0 ? "Kindergarten" : `Grade ${gNum}`;
      if (dayIndex === 0) {
        return {
          stepBadge: dayFocusBadges[0],
          heading: `Monday Kickoff: Introducing "${topic}" (${gLbl})`,
          body: gNum === 0
            ? `Welcome to Day 1 of Week ${wNum}! Today we take our very first friendly look at <strong>${topic}</strong>. Go slowly, press Listen, and celebrate every new thing you learn!`
            : `Welcome to Day 1 of Week ${wNum} in <strong>${courseTitleStr}</strong>! Today is all about grasping the big picture of <strong>${topic}</strong> clearly before speeding up tomorrow.`,
          keyTakeaway: `Day 1 Goal: Understand the core idea of "${topic}" cleanly.`
        };
      }
      if (dayIndex === 1) {
        return {
          stepBadge: dayFocusBadges[1],
          heading: `Tuesday Strategy: Walking Through "${topic}" Step by Step`,
          body: gNum === 0
            ? `Great job finishing Day 1! Today on Day 2, let's practice <strong>${topic}</strong> one more time with fresh pictures and try doing each step together with Mom or Dad!`
            : `Now that you met <strong>${topic}</strong> yesterday, Day 2 focuses on <strong>method and accuracy</strong>—following each step in order and double-checking your work with fresh Day 2 examples.`,
          keyTakeaway: `Day 2 Goal: Practice "${topic}" step-by-step without rushing.`
        };
      }
      if (dayIndex === 2) {
        return {
          stepBadge: dayFocusBadges[2],
          heading: `Wednesday Real-World Lab: Using "${topic}" in Everyday Life`,
          body: gNum === 0
            ? `Time for a fun Wednesday treasure hunt! Spot <strong>${topic}</strong> right inside your home, kitchen, or yard today—real-life practice makes learning stick!`
            : `Day 3 takes <strong>${topic}</strong> off the page and into real life! Think about how families, builders, scientists, or writers actually use <strong>${topic}</strong> every single day.`,
          keyTakeaway: `Day 3 Goal: Connect "${topic}" to a real-world home or life example.`
        };
      }
      if (dayIndex === 3) {
        return {
          stepBadge: dayFocusBadges[3],
          heading: `Thursday Review: Locking In "${topic}" Before Friday`,
          body: gNum === 0
            ? `Almost to Friday! Today on Day 4, review what we learned about <strong>${topic}</strong> this week and see how easy it feels now!`
            : `Day 4 is your confidence builder before tomorrow's weekly check! Review your key rules for <strong>${topic}</strong>, watch out for common mistakes, and explain the main idea out loud in your own words.`,
          keyTakeaway: `Day 4 Goal: Review "${topic}" calmly so tomorrow's check feels easy!`
        };
      }
      return {
        stepBadge: dayFocusBadges[4],
        heading: `Friday Mastery Celebration: Showing What You Know on "${topic}"`,
        body: gNum === 0
          ? `Happy Friday, Griffin Explorer! You practiced <strong>${topic}</strong> all week—now enjoy your short Friday Check and earn your Week ${wNum} stars!`
          : `You worked steadily across Days 1–4 on <strong>${topic}</strong>! Skim the takeaways below, take a calm breath, and show what you mastered on today's Weekly Check (≥85% unlocks Week ${Math.min(36, wNum + 1)}—and you can always redo any day if you want extra practice!).`,
        keyTakeaway: `Day 5 Goal: Celebrate a full week of growth on "${topic}"!`
      };
    };

    course.lessons.forEach((lesson, idx) => {
      const isWeeklyUnitTest = idx === 4;
      const quizTargetCount = isWeeklyUnitTest
        ? (grade === 0 ? 10 : grade <= 2 ? 15 : 20)
        : (grade === 0 ? 5 : grade <= 2 ? 8 : 12);

      // Check for a dedicated deep Grade-Level Curriculum Module first (grade_k_curriculum.js, grade_1_curriculum.js, etc.)!
      const gradeBuilder = window.ACADEMY_GRADE_CURRICULA && window.ACADEMY_GRADE_CURRICULA[grade];
      const customGradePack =
        typeof gradeBuilder === "function"
          ? gradeBuilder(course, wNum, idx, cleanTopic, quizTargetCount, { isMath, shuffleQuestionOptions })
          : null;

      const pack =
        customGradePack ||
        (isMath
          ? buildMathPack(course, wNum, idx, cleanTopic, quizTargetCount)
          : buildSubjectPack(course, wNum, idx, cleanTopic, quizTargetCount));

      // Prepend a Day-Specific Focus Card so Day 1 Monday through Day 5 Friday each deliver genuinely distinct daily guidance!
      if (!pack._hasOwnDayFocusCard) {
        const dayFocusCard = buildDaySpecificSection(idx, cleanTopic, grade, course.title);
        pack.sections = [dayFocusCard, ...(pack.sections || [])];
      }

      lesson.isMathProblemSet = isMath;
      lesson.isWeeklyUnitTest = isWeeklyUnitTest;
      lesson.quizQuestionCount = pack.quiz.length;
      lesson.studentObjectives = pack.objectives || [];
      lesson.unit = `QUARTER ${qtr} · WEEK ${wNum} OF 36 · ${dayNames[idx] || `DAY ${idx + 1}`}${isWeeklyUnitTest ? " · WEEKLY CHECK" : ""}`;
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
        coachingScript: grade === 0
          ? `"Let's press Listen and point to each picture together! Count out loud slowly and celebrate every right answer!"`
          : isMath
            ? `"Let's read the worked example together first, then try Problem #1 side-by-side. Always show your step and check your answer!"`
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
