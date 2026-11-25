// Christ Infinity Academy — Flagship Grades 6–12 Curriculum, State Compliance & Accreditation Dataset

const INITIAL_ACADEMY_DATA = {
  // Official Accreditation, State Statutory & University Standards Matrix
  accreditationStandards: {
    creditDefinition: "1.0 Carnegie Unit = 120–150 Clock Hours (36 Weeks × 3.5–4.5 hrs/week) + Documented Assessments",
    instructionalYear: "180 Instructional Days · Min. 900 Hours (Grades 6–8) / 1,080 Hours (Grades 9–12)",
    gradingScale: "A (90–100% = 4.0) · B (80–89% = 3.0) · C (70–79% = 2.0) · Honors (+0.5 GPA) · AP/Dual-Credit (+1.0 GPA)",
    diplomaTracks: [
      {
        subject: "English, Literature & Composition",
        stateReq: "4.0 Credits (Grammar, Amer./Brit. Lit, Comp)",
        privateReq: "4.0 Credits (Great Books & Rhetoric)",
        academyProvided: "4.0 Credits + Senior Capstone Thesis (Grades 6–8: 3.0 Logic/Grammar Units)",
        status: "Exceeds State & NCAA Core"
      },
      {
        subject: "Mathematics (Algebra I through Calculus)",
        stateReq: "3.0–4.0 Credits (Alg I, Geom, Alg II)",
        privateReq: "4.0 Credits (Through Pre-Calc or Calc)",
        academyProvided: "4.0–5.0 Credits (8th Alg I HS Credit → Geom → Alg II → Pre-Calc → AP Calc BC)",
        status: "Exceeds State & STEM Univ."
      },
      {
        subject: "Laboratory Natural Sciences",
        stateReq: "3.0 Credits (1 Bio + 1 Physical w/ Lab)",
        privateReq: "3.0–4.0 Lab Credits (Bio, Chem, Physics)",
        academyProvided: "4.0 Full Lab Credits (Biology, Chemistry, Physics, Anatomy/Biophysics + 6–8 Labs)",
        status: "Exceeds University Lab Req"
      },
      {
        subject: "History, U.S. Civics, Gov & Economics",
        stateReq: "3.0–4.0 Credits (World, US Hist, 0.5 Gov, 0.5 Econ)",
        privateReq: "3.5–4.0 Credits (Western Civ, US, Econ)",
        academyProvided: "4.0 Credits (Ancient, Western Civ, AP U.S. History, U.S. Gov/Constitution & Economics)",
        status: "Meets All 50 State Mandates"
      },
      {
        subject: "World & Classical Languages",
        stateReq: "0.0–2.0 Credits (2.0 for Univ. Prep)",
        privateReq: "2.0–3.0 Credits (Same Language)",
        academyProvided: "4.0 Credits (Latin I–IV + Koine Greek + Grades 6–8 Introductory Latin)",
        status: "Exceeds Selective College Req"
      },
      {
        subject: "Physical Education, Health & First Aid",
        stateReq: "1.0–1.5 Credits (Statutory State Mandate)",
        privateReq: "1.0 Credit (Athletic / Wellness Log)",
        academyProvided: "1.5 Credits (PE-612 Physical Fitness, Health, Nutrition & CPR Certification)",
        status: "Meets Statutory Mandate"
      },
      {
        subject: "Fine Arts, Digital Literacy & Financial Lit.",
        stateReq: "1.0 Fine Arts + 0.5 Tech + 0.5 Personal Finance",
        privateReq: "1.0 Music/Art History + Rhetoric",
        academyProvided: "2.0 Credits (Classical Aesthetics/Music, Computer Science & Personal Stewardship)",
        status: "Meets Statutory Mandate"
      },
      {
        subject: "Theology, Ethics & Christian Worldview",
        stateReq: "Elective Credit (Up to 4.0 Humanities Credits)",
        privateReq: "4.0 Credits Required (Accredited Christian)",
        academyProvided: "4.0 Upper School Credits + 3.0 Middle School Biblical Narrative Units",
        status: "Full Private Accreditation"
      }
    ],
    stateTiers: {
      high: {
        name: "High-Regulation States (e.g., NY, PA, MA, VT, RI)",
        requirements: "Annual Notice of Intent (NOI), Individualized Home Instruction Plan (IHIP), Quarterly Progress Reports, 900–990+ Logged Hours, Work Samples Portfolio, and Standardized Assessment.",
        coverage: "100% Covered: Automated Quarterly Grade Reports, 1,080-Hr Attendance Tracker, Course Syllabi & Work Sample Portfolio Export."
      },
      moderate: {
        name: "Moderate-Regulation States (e.g., VA, FL, NC, OH, GA, WA, CO)",
        requirements: "Annual Registration/Notice, Attendance Record (180 Days), and Annual Portfolio Evaluation or Norm-Referenced Assessment (CLT / Iowa / Stanford).",
        coverage: "100% Covered: Certified 180-Day Log, Official Transcripts & CLT/SAT/Iowa Readiness Benchmarks."
      },
      low: {
        name: "Low-Regulation & Private Umbrella States (e.g., TX, CA, IL, MI, NJ, IN, TN, AZ)",
        requirements: "Core Statutory Subjects (Reading, Spelling, Grammar, Math, Science, History, Good Citizenship/Civics) & Official Academic Transcripts for College/School Transfer.",
        coverage: "100% Covered: Carnegie Credit Transcripts, Course Descriptions & NCAA-Style Core Syllabi."
      }
    }
  },

  // Master Vertical Scope & Sequence (Grades 6–12)
  scopeAndSequence: [
    {
      department: "Theology & Worldview",
      icon: "cross",
      g6: "THEO-601: Creation, Covenants & Biblical Narrative",
      g7: "THEO-701: Gospels, Life of Christ & Wisdom Literature",
      g8: "THEO-801: Acts, Epistles & History of the Church",
      g9: "THEO-901: Systematic Theology I & Christian Ethics",
      g10: "THEO-204: Apologetics, Logos & Scientific Reason",
      g11: "THEO-301: Moral Philosophy & Cultural Engagement",
      g12: "THEO-401: Senior Worldview Vocation & Civics Colloquium"
    },
    {
      department: "Mathematics (State & STEM Core)",
      icon: "compass",
      g6: "MATH-601: Mathematical Order, Ratios & Number Theory",
      g7: "MATH-102: Pre-Algebra Mastery & Proportional Reasoning",
      g8: "MATH-801: Honors Algebra I (1.0 High School Credit)",
      g9: "MATH-201: Euclidean Geometry & Deductive Proofs",
      g10: "MATH-202: Honors Algebra II & Trigonometry",
      g11: "MATH-300: Pre-Calculus & Analytical Functions",
      g12: "MATH-301: AP Calculus BC & Analytical Mechanics"
    },
    {
      department: "Natural Sciences (With Labs)",
      icon: "atom",
      g6: "SCI-601: Celestial Astronomy & Earth Systems Lab",
      g7: "SCI-102: Life Science, Cellular Order & Botany Lab",
      g8: "SCI-801: Physical Science, Motion & Energy Lab",
      g9: "SCI-901: Honors Biology & Molecular Design (with Lab)",
      g10: "SCI-202: Honors Chemistry & Stoichiometry (with Lab)",
      g11: "SCI-301: Classical & Modern Physics (with Lab)",
      g12: "SCI-401: Advanced Anatomy & Biophysics Lab"
    },
    {
      department: "English, Literature & Rhetoric",
      icon: "feather",
      g6: "LIT-601: Heroic Chronicles, Grammar & Narrative Comp",
      g7: "LIT-102: Formal Logic I, Grammar & Chreia Essays",
      g8: "LIT-801: Formal Logic II, Persuasive Comp & Poetics",
      g9: "LIT-901: Ancient Epics: Homer, Virgil & Composition",
      g10: "LIT-201: World Literature: Augustine, Dante & Milton",
      g11: "LIT-301: AP English Lang/Rhetoric & American Letters",
      g12: "LIT-401: British Literature & Senior Capstone Thesis"
    },
    {
      department: "History, Civics & Economics",
      icon: "columns",
      g6: "HIST-601: Ancient World Geography & Civilizations",
      g7: "HIST-102: World History I: Christendom to Renaissance",
      g8: "HIST-801: U.S. History, State Civics & Constitution",
      g9: "HIST-901: Ancient & Classical World History",
      g10: "HIST-203: Modern European & World Civilization",
      g11: "HIST-301: AP U.S. Constitutional History",
      g12: "HIST-401: U.S. Gov/Civics (0.5) & Economics/Finance (0.5)"
    },
    {
      department: "Languages, Fine Arts, PE & Health",
      icon: "scroll",
      g6: "LAT-601: Intro Latin Roots + Fine Arts & PE/Health 6",
      g7: "LAT-101: Latin I Foundations + Music & PE/Health 7",
      g8: "LAT-801: Latin II Grammar + Digital Lit & PE/Health 8",
      g9: "LAT-901: Latin I/II (HS Credit) + Health & Fitness (1.0)",
      g10: "LAT-201: Latin II/III (Cicero) + Fine Arts History (1.0)",
      g11: "LAT-301: Latin III/IV (Virgil) + Computer Science (0.5)",
      g12: "LAT-401: Koine Greek / Honors Elective & Service"
    }
  ],

  // Grade-by-Grade Pathway Blueprints (Grades 6–12)
  gradePathways: {
    "6": {
      grade: 6,
      title: "Grade 6 Pathway — Foundation of Wonder & Order",
      stage: "Early Dialectic / Bridge Stage (Ages 11–12)",
      dailyTime: "4.0 hrs / day (Exceeds 900-Hr State Mandate)",
      weeklyHours: 20,
      credits: "6.0 Core Units + 1.0 Statutory PE/Health & Fine Arts",
      stateComplianceNote: "Fulfils 100% of 6th Grade State DOE & Private Academy requirements: English Grammar/Reading/Writing, Math, Earth/Space Lab Science, World Geography/Ancient History, Foreign Language, Fine Arts, and PE/Health.",
      motto: "“The fear of the Lord is the beginning of wisdom.” — Proverbs 9:10",
      overview:
        "The 6th Grade Pathway transitions the young scholar from elementary grammar memorization into structured analytical thinking while satisfying all state middle-school statutory requirements. Students explore the ancient world, master ratios and number theory, observe celestial and earth systems, compose narrative essays, learn foundational Latin roots, and log statutory Health/PE & Fine Arts.",
      courseIds: ["theo-601", "math-601", "sci-601", "lit-601", "hist-601", "lat-601", "pe-612"],
      quarters: [
        {
          q: "Quarter 1 (Weeks 1–9 · 45 Days)",
          theme: "Creation, First Principles & Ancient River Kingdoms",
          milestones: [
            "THEO-601: Genesis 1–11 & the Abrahamic Covenant Portfolio",
            "MATH-601: Prime Factorization, Number Theory & Rational Operations",
            "SCI-601: Solar System Keplerian Orbits & Night-Sky Observation Log",
            "HIST-601: World Geography, Mesopotamia & Old Kingdom Egypt Map Project"
          ]
        },
        {
          q: "Quarter 2 (Weeks 10–18 · 90 Days)",
          theme: "Covenant Law, Proportions & Classical Greece",
          milestones: [
            "MATH-601: Ratios, Rates, Proportions & Percent Mastery Exam",
            "LIT-601: English Grammar Diagramming & Progymnasmata Narrative Essay",
            "SCI-601: Plate Tectonics, Mineralogy & Rock Cycle Wet-Lab",
            "LAT-601: 1st & 2nd Declension Nouns + 100 Latin Scientific Roots"
          ]
        },
        {
          q: "Quarter 3 (Weeks 19–27 · 135 Days)",
          theme: "The Roman Republic, Geometric Area & Atmospheric Systems",
          milestones: [
            "HIST-601: Rise of the Roman Republic & Civic Virtue Primary Source Study",
            "MATH-601: 2D/3D Geometric Mensuration, Area & Volume Proofs",
            "SCI-601: Meteorology, Barometric Pressure & Weather Station Project",
            "PE-612: Statutory Health, Nutrition & Physical Fitness Benchmark"
          ]
        },
        {
          q: "Quarter 4 (Weeks 28–36 · 180 Days)",
          theme: "Pre-Algebraic Equations, Early Church & Standardized Portfolio",
          milestones: [
            "MATH-601: Signed Integers, Coordinate Plane & One-Step Algebraic Equations",
            "THEO-601: Messianic Prophecies & the Unity of Scripture Exhibition",
            "Standardized Norm-Referenced Benchmark (Iowa/Stanford/CLT6 Readiness)",
            "Official Grade 6 Certificate of Promotion & State Portfolio Sign-Off"
          ]
        }
      ]
    },
    "7": {
      grade: 7,
      title: "Grade 7 Pathway — The School of Formal Logic",
      stage: "Core Dialectic / Logic Stage (Ages 12–13)",
      dailyTime: "4.5 hrs / day (945+ Annual Clock Hours)",
      weeklyHours: 21,
      credits: "6.0 Core Units + 1.0 Statutory PE/Health & Fine Arts",
      stateComplianceNote: "Fulfils 100% of 7th Grade State & Private requirements: ELA Composition & Literature, Pre-Algebra, Life Science with Microscopy Lab, World History/Geography, Logic/Latin, and Health/PE.",
      motto: "“Test everything; hold fast what is good.” — 1 Thessalonians 5:21",
      overview:
        "In 7th Grade, students learn the art of valid reasoning through Formal Logic I, Pre-Algebra proportional mastery, cellular and botanical Life Science, Medieval Christendom, and Chreia essay composition.",
      courseIds: ["theo-102", "math-102", "sci-102", "lit-102", "hist-102", "lat-101", "pe-612"],
      quarters: [
        {
          q: "Quarter 1 (Weeks 1–9)",
          theme: "Terms, Propositions & Proportional Reasoning",
          milestones: [
            "LIT-102: Categorical Propositions & Detecting Informal Fallacies",
            "MATH-102: Integer Operations, Algebraic Expressions & Linear Equations",
            "SCI-102: Compound Microscopy, Cellular Organelles & Mitosis Lab"
          ]
        },
        {
          q: "Quarter 2 (Weeks 10–18)",
          theme: "Christendom, Genetics & Chreia Essays",
          milestones: [
            "HIST-102: Fall of Rome, Monastic Preservation & Charlemagne",
            "SCI-102: Mendelian Genetics, Punnett Squares & DNA Architecture",
            "LAT-101: 3rd Declension Nouns & Imperfect/Future Tenses"
          ]
        },
        {
          q: "Quarter 3 (Weeks 19–27)",
          theme: "Magna Carta, Linear Functions & Botanical Taxonomy",
          milestones: [
            "HIST-102: Magna Carta (1215) & the Rise of Universities",
            "MATH-102: Slope, Linear Graphing & Inequalities",
            "SCI-102: Botanical Taxonomy & Pressed Herbarium Collection"
          ]
        },
        {
          q: "Quarter 4 (Weeks 28–36)",
          theme: "Syllogistic Debates & Algebra Readiness",
          milestones: [
            "LIT-102: Formal Categorical Syllogism Defense",
            "MATH-102: Pythagorean Theorem, Surface Area & Probability",
            "Official Grade 7 Promotion & CLT7/State Portfolio Certification"
          ]
        }
      ]
    },
    "8": {
      grade: 8,
      title: "Grade 8 Pathway — Pre-Rhetoric, U.S. Civics & Honors Algebra",
      stage: "Advanced Dialectic / Upper School Bridge (Ages 13–14)",
      dailyTime: "4.5 – 5.0 hrs / day (990+ Annual Clock Hours)",
      weeklyHours: 22,
      credits: "6.0 Units (Includes 1.0 High School Carnegie Credit in Algebra I & Latin I)",
      stateComplianceNote: "Fulfils 8th Grade State U.S. History & State Civics mandate, Physical Science with Lab, ELA Argumentative Writing, plus banked High School Transcript Credits in Algebra I.",
      motto: "“Let your speech always be gracious, seasoned with salt.” — Colossians 4:6",
      overview:
        "Grade 8 prepares scholars for the Upper School Collegiate Academy with high-school-credit Honors Algebra I, Physical Science & Mechanics labs, Early Modern & U.S. Constitutional Founding history, and Formal Logic II.",
      courseIds: ["theo-801", "math-801", "sci-801", "lit-801", "hist-801", "lat-801", "pe-612"],
      quarters: [
        {
          q: "Quarter 1 (Weeks 1–9)",
          theme: "Linear Systems, Kinematics & the Early Church",
          milestones: [
            "MATH-801: Multi-Step Equations, Functions & Systems of Equations",
            "SCI-801: Newton’s Laws of Motion, Velocity & Acceleration Lab",
            "THEO-801: Book of Acts & the Early Ecumenical Councils"
          ]
        },
        {
          q: "Quarter 2 (Weeks 10–18)",
          theme: "Polynomials, Thermodynamics & the Reformation",
          milestones: [
            "MATH-801: Exponents, Polynomial Factoring & Quadratic Intro",
            "HIST-801: Printing Press, Scientific Revolution & Colonial America",
            "LIT-801: Progymnasmata Refutation & Confirmation Essays"
          ]
        },
        {
          q: "Quarter 3 (Weeks 19–27)",
          theme: "Quadratics, Electromagnetism & U.S. Constitutional Civics",
          milestones: [
            "MATH-801: Quadratic Formula, Radicals & Rational Expressions",
            "SCI-801: Electricity, Magnetism & Simple Circuits Lab",
            "HIST-801: Declaration of Independence, U.S. Constitution & State Civics Exam"
          ]
        },
        {
          q: "Quarter 4 (Weeks 28–36)",
          theme: "8th Grade Oratory & Upper School Diploma Matriculation",
          milestones: [
            "LIT-801: 8th Grade Classical Declamation & Argumentative Thesis",
            "CLT8 Assessment & High School Credit Certification for Honors Algebra I"
          ]
        }
      ]
    },
    "9": {
      grade: 9,
      title: "Grade 9 Pathway — Classical Antiquity & Deductive Proof",
      stage: "Upper School Rhetoric Stage · Freshman Year",
      dailyTime: "5.5 hrs / day (1,080+ Annual Clock Hours)",
      weeklyHours: 25,
      credits: "6.5 Carnegie High School Credits (NCAA & University Aligned)",
      stateComplianceNote: "Earns 1.0 English I, 1.0 Geometry, 1.0 Biology w/ Lab, 1.0 World History I, 1.0 Foreign Language, 1.0 Theology, and 0.5–1.0 PE/Health toward the 26-Credit Diploma.",
      motto: "“Declare the past, diagnose the present, foretell the future.”",
      overview:
        "Freshman scholars enter the Upper School Collegiate Academy studying Euclidean Geometry proofs, Honors Biology with microscopy/dissection labs, Homer & Virgil’s epics, Systematic Theology I, Latin Prose, and Statutory Health/PE.",
      courseIds: ["theo-901", "math-201", "sci-901", "lit-901", "hist-901", "lat-901", "pe-612"],
      quarters: [
        { q: "Quarter 1", theme: "Euclid Book I, Cellular Biochemistry & Homer’s Iliad", milestones: ["MATH-201: Axiomatic Constructions & Triangle Congruence"] },
        { q: "Quarter 2", theme: "Geometric Proportions, Genetics & The Odyssey", milestones: ["SCI-901: Cellular Respiration & DNA Extraction Lab"] },
        { q: "Quarter 3", theme: "Circles, Roman Republic & Aeschylus/Sophocles", milestones: ["HIST-901: Thucydides, Livy & Cicero Primary Source Seminar"] },
        { q: "Quarter 4", theme: "Solid Geometry, Ecology & Virgil’s Aeneid", milestones: ["Freshman Honors Symposium & Official Transcript Credit Audit"] }
      ]
    },
    "10": {
      grade: 10,
      title: "Grade 10 Pathway — Christendom, Chemistry & Apologetics",
      stage: "Upper School Rhetoric Stage · Sophomore Honors",
      dailyTime: "5.5 hrs / day (1,080+ Annual Clock Hours)",
      weeklyHours: 25,
      credits: "6.5 Carnegie High School Credits (Honors Weighted)",
      stateComplianceNote: "Earns 1.0 English II (World Lit), 1.0 Algebra II/Trig, 1.0 Chemistry w/ Wet Lab, 1.0 Modern World/Western Civ, 1.0 Latin II/III, 1.0 Theology, and 0.5 Fine Arts.",
      motto: "“Faith seeking understanding — Fides quaerens intellectum.” — St. Anselm",
      overview:
        "Sophomore scholars combine quantitative Honors Chemistry and Algebra II/Trigonometry with Dante’s Divine Comedy, Augustine’s Confessions, Western Civilization, and Christian Apologetics.",
      courseIds: ["theo-204", "math-202", "sci-202", "lit-201", "hist-203", "lat-201"],
      quarters: [
        { q: "Quarter 1", theme: "Atomic Structure, Polynomial Functions & Patristic Synthesis", milestones: ["THEO-204: Kepler, Boyle & the Intelligibility of Nature"] },
        { q: "Quarter 2", theme: "Chemical Bonding, Dante’s Commedia & Medieval Universities", milestones: ["LIT-201: Moral Geography of Dante’s Purgatorio Essay"] },
        { q: "Quarter 3", theme: "Stoichiometry, Reformation & Milton’s Paradise Lost", milestones: ["SCI-202: Gravimetric Stoichiometry & Titration Lab"] },
        { q: "Quarter 4", theme: "Thermodynamics, Constitutionalism & PSAT/CLT10 Prep", milestones: ["Sophomore Honors Colloquium & Transcript Verification"] }
      ]
    },
    "11": {
      grade: 11,
      title: "Grade 11 Pathway — Classical Physics, Pre-Calculus & U.S. History",
      stage: "Upper School Rhetoric Stage · Junior Collegiate Track",
      dailyTime: "5.5 – 6.0 hrs / day (1,120+ Annual Clock Hours)",
      weeklyHours: 26,
      credits: "6.5 Carnegie High School Credits (AP / Dual-Credit Eligible)",
      stateComplianceNote: "Earns 1.0 AP English Lang/American Lit, 1.0 Pre-Calculus, 1.0 Physics w/ Lab, 1.0 AP U.S. History (Statutory Mandate), 1.0 Latin III/IV, and 1.0 Moral Philosophy.",
      motto: "“Nature and Nature’s laws lay hid in night…”",
      overview:
        "Junior year focuses on advanced analytical functions in Pre-Calculus, Classical & Modern Physics, AP U.S. Constitutional History, Moral Philosophy, and formal Aristotelian Rhetoric.",
      courseIds: ["theo-301", "math-300", "sci-301", "lit-301", "hist-301", "lat-301"],
      quarters: [
        { q: "Quarter 1", theme: "Trigonometric Identities, Newtonian Mechanics & Federalist Papers", milestones: ["HIST-301: Constitutional Convention & Federalist/Anti-Federalist Debate"] },
        { q: "Quarter 2", theme: "Analytic Geometry, Work/Energy & Moral Philosophy", milestones: ["SCI-301: Conservation of Momentum & Pendulum Harmonic Lab"] },
        { q: "Quarter 3", theme: "Limits, Electromagnetism & American Literary Masters", milestones: ["LIT-301: Aristotelian Persuasive Oratory & Junior Thesis Proposal"] },
        { q: "Quarter 4", theme: "Calculus Foundations, Optics & SAT/ACT/CLT Testing", milestones: ["Junior Pre-Thesis Defense & College Admissions Portfolio"] }
      ]
    },
    "12": {
      grade: 12,
      title: "Grade 12 Pathway — AP Calculus, Senior Capstone & U.S. Gov/Economics",
      stage: "Upper School Rhetoric Stage · Senior Scholar & Thesis Defense",
      dailyTime: "6.0 hrs / day (1,150+ Annual Clock Hours)",
      weeklyHours: 26,
      credits: "6.5 Carnegie High School Credits (Completes 26.0+ Credit Honours Diploma)",
      stateComplianceNote: "Completes statutory 0.5 U.S. Government/Civics + 0.5 Economics & Personal Financial Literacy, 1.0 Senior English/Thesis, 1.0 AP Calculus BC, and 1.0 Advanced Lab Science.",
      motto: "“Soli Deo Gloria — To the Glory of God Alone.”",
      overview:
        "The crowning year at Christ Infinity Academy: seniors complete AP Calculus BC, Advanced Biophysics/Anatomy, U.S. Constitutional Government (0.5) & Classical Economics/Personal Finance (0.5), Koine Greek, and defend their 25-page Senior Rhetoric Capstone Thesis.",
      courseIds: ["theo-401", "math-301", "sci-401", "lit-401", "hist-401", "lat-401"],
      quarters: [
        { q: "Quarter 1", theme: "Differential Calculus, U.S. Constitutional Gov & Thesis Review", milestones: ["LIT-401: Senior Thesis Prospectus & Annotated Bibliography"] },
        { q: "Quarter 2", theme: "Integral Calculus, Macroeconomics & Personal Finance", milestones: ["MATH-301: Fundamental Theorem of Calculus & Differential Equations"] },
        { q: "Quarter 3", theme: "Taylor Series, Bioethics & Final Thesis Manuscript", milestones: ["LIT-401: Complete 25-Page Senior Thesis Submission"] },
        { q: "Quarter 4", theme: "Public Oral Defense before Faculty Panel & Commencement", milestones: ["Formal Oral Thesis Defense & Sealed Official Diploma Transcript"] }
      ]
    }
  },

  students: {
    micah: {
      id: "micah",
      name: "Micah Vance",
      grade: 6,
      division: "middle",
      track: "Grade 6 Foundation of Wonder Pathway",
      gpa: "4.00",
      standing: "Headmaster’s Commendation",
      weeklyTargetHours: 20,
      weeklyLoggedHours: 19.0,
      attendanceDays: 68,
      requiredDays: 180,
      loggedClockHours: 364,
      requiredClockHours: 900,
      stateRegulationTier: "high",
      dailyHours: [
        { day: "Mon", hours: 4.0, target: 4.0 },
        { day: "Tue", hours: 4.0, target: 4.0 },
        { day: "Wed", hours: 4.0, target: 4.0 },
        { day: "Thu", hours: 4.0, target: 4.0 },
        { day: "Fri", hours: 3.0, target: 4.0 }
      ],
      enrolledCourseIds: ["theo-601", "math-601", "sci-601", "lit-601", "hist-601", "lat-601", "pe-612"],
      facultyNotes: [
        {
          instructor: "Dr. Miriam Chen (Celestial Astronomy & Earth Lab)",
          date: "Nov 14, 2026",
          note: "Micah’s lunar phase observation journal and Keplerian orbit sketch were exemplary. Meets all State 6th Grade Earth/Space Science Lab standards."
        },
        {
          instructor: "Dr. Alistair Sterling (Grade 6 Mathematics)",
          date: "Nov 11, 2026",
          note: "Mastered prime factorization, greatest common divisors, and golden-ratio proportions with 98% quiz accuracy."
        }
      ]
    },
    hannah: {
      id: "hannah",
      name: "Hannah Vance",
      grade: 7,
      division: "middle",
      track: "Grade 7 School of Formal Logic",
      gpa: "3.98",
      standing: "Headmaster’s Scholar",
      weeklyTargetHours: 21,
      weeklyLoggedHours: 20.0,
      attendanceDays: 68,
      requiredDays: 180,
      loggedClockHours: 382,
      requiredClockHours: 900,
      stateRegulationTier: "high",
      dailyHours: [
        { day: "Mon", hours: 4.2, target: 4.2 },
        { day: "Tue", hours: 4.2, target: 4.2 },
        { day: "Wed", hours: 4.2, target: 4.2 },
        { day: "Thu", hours: 4.2, target: 4.2 },
        { day: "Fri", hours: 3.2, target: 4.2 }
      ],
      enrolledCourseIds: ["theo-102", "math-102", "sci-102", "lit-102", "hist-102", "lat-101", "pe-612"],
      facultyNotes: [
        {
          instructor: "Magister Julian Hawthorne (Formal Logic & Latin)",
          date: "Nov 13, 2026",
          note: "Hannah spotted three informal fallacies during Tuesday’s seminar and translated her 3rd-declension Latin passage with 100% accuracy."
        }
      ]
    },
    lucas: {
      id: "lucas",
      name: "Lucas Vance",
      grade: 10,
      division: "high",
      track: "Grade 10 Upper School Collegiate Honors",
      gpa: "3.94",
      weightedGpa: "4.36",
      standing: "Dean’s Honor List · NCAA & Honors Diploma Track",
      weeklyTargetHours: 25,
      weeklyLoggedHours: 23.5,
      attendanceDays: 68,
      requiredDays: 180,
      loggedClockHours: 432,
      requiredClockHours: 1080,
      earnedCarnegieCredits: 13.5,
      requiredDiplomaCredits: 26.0,
      stateRegulationTier: "high",
      dailyHours: [
        { day: "Mon", hours: 5.0, target: 5.0 },
        { day: "Tue", hours: 5.0, target: 5.0 },
        { day: "Wed", hours: 5.0, target: 5.0 },
        { day: "Thu", hours: 5.0, target: 5.0 },
        { day: "Fri", hours: 3.5, target: 5.0 }
      ],
      enrolledCourseIds: ["math-201", "math-202", "theo-204", "sci-202", "lit-201", "hist-203", "lat-201"],
      facultyNotes: [
        {
          instructor: "Dr. Alistair Sterling (Euclidean Geometry)",
          date: "Nov 12, 2026",
          note: "Lucas demonstrated exceptional rigor in his two-column proof of Proposition I.47 this week. Full Carnegie Honors Credit on pace."
        },
        {
          instructor: "Prof. Eleanor Whitmore (Western Civilization)",
          date: "Nov 09, 2026",
          note: "Thoughtful primary source synthesis comparing Augustine’s City of God with Reformation political treatises."
        }
      ]
    }
  },

  courses: [
    // ==================== GRADE 6 FLAGSHIP PATHWAY COURSES ====================
    {
      id: "theo-601",
      code: "THEO-601",
      title: "Creation, Covenants & the Biblical Worldview",
      department: "Theology & Worldview",
      gradeLevels: [6],
      division: "middle",
      credits: 1.0,
      track: "Grade 6 Core Pathway",
      instructor: "Rev. Dr. Marcus Vance",
      progress: 88,
      termGrade: 99,
      quizAvg: 98,
      description: "Foundational 6th-grade study of Genesis to Kings, tracing the architecture of creation, human dignity (Imago Dei), and the unfolding covenants of Scripture.",
      lessons: [
        {
          id: "t601-l1",
          unit: "UNIT 1 · CREATION, ORDER & IMAGO DEI",
          title: "Cosmos out of Chaos: The Architecture of Creation & Human Stewardship",
          duration: "35 mins",
          completed: true,
          videoChapter: "SEMINAR 1.1 · GENESIS & THE INTELLIGIBLE COSMOS",
          readingHtml: `
            <div class="lesson-callout">
              <strong>Scripture &amp; Wisdom Anchor:</strong> “The heavens declare the glory of God, and the sky above proclaims his handiwork.” — <em>Psalm 19:1</em>
            </div>
            <p>Welcome to the flagship <strong>Grade 6 Pathway</strong> at Christ Infinity Academy. Before we study mathematics, astronomy, ancient civilizations, or grammar, we ask the most foundational question of all: <em>Why is the universe orderly, meaningful, and intelligible?</em></p>
            <h3>1. Creation as a Temple of Order</h3>
            <p>In Genesis 1, God brings order out of formlessness in two symmetrical triads: first forming realms of habitation (Days 1–3: Light/Darkness, Sky/Waters, Dry Land/Vegetation) and then filling those realms with rulers and inhabitants (Days 4–6: Sun/Moon/Stars, Birds/Sea Creatures, Land Animals &amp; Humanity).</p>
            <h3>2. Bearing the Image of God (Imago Dei)</h3>
            <p>To be created in the <em>Imago Dei</em> means every human being possesses intrinsic dignity and is called to act as a wise steward—cultivating knowledge, beauty, justice, and dominion with humility.</p>
            <div class="lesson-callout">
              <strong>Key Vocabulary:</strong><br/>
              • <strong>Cosmos:</strong> An ordered, harmonious universe (opposite of chaos).<br/>
              • <strong>Imago Dei:</strong> Latin for “Image of God,” the foundation of human worth and rational stewardship.<br/>
              • <strong>Covenant:</strong> A solemn, binding promise and relationship established by God.
            </div>
          `,
          resources: [
            {
              title: "Grade 6 Unit 1 Guided Notes: The Symmetry of Genesis 1",
              type: "Printable Study Packet",
              size: "1.1 MB",
              content: "CHRIST INFINITY ACADEMY — THEO-601 (GRADE 6)\nUnit 1 Chart: The Six Days of Creation — Realms of Form (Days 1-3) vs. Realms of Filling (Days 4-6).\nReflection Questions on Imago Dei & Stewardship."
            },
            {
              title: "Biblical Covenants Timeline Map (Creation to David)",
              type: "Timeline Poster",
              size: "950 KB",
              content: "Chronological Covenant Chart for Grade 6 Scholars: Adamic, Noahic, Abrahamic, Mosaic, and Davidic Covenants."
            }
          ],
          quiz: [
            {
              q: "How are Days 1–3 and Days 4–6 structured in the Genesis 1 creation account?",
              options: [
                "Days 1–3 form the realms of habitation, and Days 4–6 fill those corresponding realms with rulers and inhabitants",
                "They are random and unconnected events",
                "Only Days 1 and 2 have any connection",
                "They describe only the geography of Rome"
              ],
              correct: 0,
              explanation: "The literary and theological symmetry pairs Day 1 (Light) with Day 4 (Luminaries), Day 2 (Sky/Seas) with Day 5 (Birds/Fish), and Day 3 (Land/Plants) with Day 6 (Animals/Humanity)."
            },
            {
              q: "What does the Latin term 'Imago Dei' signify for how we view scholarship and science?",
              options: [
                "Because humans bear God’s image, we are equipped with reason and called to steward and study creation faithfully",
                "That human beings should avoid studying the natural world",
                "That only kings possess value",
                "That language has no meaning"
              ],
              correct: 0,
              explanation: "Bearing the Imago Dei grounds both universal human dignity and the calling to explore God’s world with wisdom."
            }
          ]
        }
      ]
    },
    {
      id: "math-601",
      code: "MATH-601",
      title: "Foundations of Mathematical Order, Ratios & Pre-Algebra Prep",
      department: "Mathematics",
      gradeLevels: [6],
      division: "middle",
      credits: 1.0,
      track: "Grade 6 Core (State Math Aligned)",
      instructor: "Dr. Alistair Sterling",
      progress: 86,
      termGrade: 97,
      quizAvg: 98,
      description: "Exceeds 6th-grade State Mathematics standards in prime number theory, fractions, decimals, golden-ratio proportions, geometric mensuration, statistics, and introductory algebraic equations.",
      lessons: [
        {
          id: "m601-l1",
          unit: "UNIT 1 · NUMBER THEORY & HARMONIC RATIOS",
          title: "Prime Factorization, the Sieve of Eratosthenes & Proportional Harmony",
          duration: "40 mins",
          completed: true,
          videoChapter: "SEMINAR 1.2 · THE BUILDING BLOCKS OF ARITHMETIC",
          readingHtml: `
            <div class="lesson-callout">
              <strong>Mathematical Principle:</strong> The <em>Fundamental Theorem of Arithmetic</em> states that every integer greater than 1 either is a prime number itself or can be represented as a unique product of prime numbers.
            </div>
            <p>In 6th Grade Mathematics, we move beyond mechanical arithmetic to discover <em>why</em> numbers behave according to unbreakable laws. Just as words are formed from an alphabet of letters, composite numbers are built from prime numbers ($2, 3, 5, 7, 11, 13, \\dots$).</p>
            <h3>1. The Sieve of Eratosthenes</h3>
            <p>Invented by Eratosthenes of Cyrene in Alexandria (~240 BC), the Sieve filters out multiples of each prime in sequence, leaving behind the pure prime numbers.</p>
            <h3>2. Ratios and Musical Proportions</h3>
            <p>When a vibrating string is divided in a $1:2$ ratio, it produces a pure octave; a $2:3$ ratio produces a perfect fifth. Ratios ($a:b$ or $\\frac{a}{b}$) express the quantitative relationship between two magnitudes.</p>
          `,
          resources: [
            {
              title: "Sieve of Eratosthenes 1–100 Grid & Prime Factor Trees",
              type: "Practice Worksheet",
              size: "880 KB",
              content: "CHRIST INFINITY ACADEMY — MATH-601\n1. Complete the 10x10 Sieve of Eratosthenes.\n2. Construct prime factor trees for 72, 144, 210, and 360.\n3. Find GCD and LCM using prime exponents."
            },
            {
              title: "Ratios, Rates & Proportions Problem Set (With Answer Key)",
              type: "Problem Set",
              size: "1.0 MB",
              content: "20 Graded Word Problems on Equivalent Ratios, Unit Rates, and Musical/Architectural Proportions."
            }
          ],
          quiz: [
            {
              q: "What is the prime factorization of 180?",
              options: [
                "2² × 3² × 5",
                "2 × 3 × 30",
                "4 × 9 × 5",
                "2³ × 3 × 5"
              ],
              correct: 0,
              explanation: "180 = 4 × 9 × 5 = 2² × 3² × 5, where 2, 3, and 5 are all prime numbers."
            },
            {
              q: "If the ratio of boys to girls in a classical choir is 3:4 and there are 18 boys, how many girls are in the choir?",
              options: [
                "24 girls",
                "21 girls",
                "12 girls",
                "32 girls"
              ],
              correct: 0,
              explanation: "Since 3 × 6 = 18, we multiply 4 × 6 = 24 to maintain the equivalent proportion 3/4 = 18/24."
            }
          ]
        }
      ]
    },
    {
      id: "sci-601",
      code: "SCI-601",
      title: "Celestial Astronomy, Earth Systems & Observational Lab",
      department: "Natural Sciences",
      gradeLevels: [6],
      division: "middle",
      credits: 1.0,
      track: "Grade 6 Core Lab",
      instructor: "Dr. Miriam Chen",
      progress: 90,
      termGrade: 98,
      quizAvg: 97,
      description: "Fulfils State Earth & Space Science Lab standards: solar system mechanics, Kepler’s laws, stellar constellations, plate tectonics, mineralogy, hydrology, and meteorology with hands-on observation journals.",
      lessons: [
        {
          id: "s601-l1",
          unit: "UNIT 1 · CELESTIAL MECHANICS",
          title: "Kepler’s Elliptical Orbits, Lunar Phases & Eclipses",
          duration: "40 mins",
          completed: true,
          videoChapter: "LAB SEMINAR 1.3 · OBSERVING THE NIGHT SKY",
          readingHtml: `
            <p>For millennia, astronomers assumed planets must orbit in perfect circles. Through painstaking analysis of Tycho Brahe’s observations of Mars, Johannes Kepler discovered that planetary orbits are <strong>ellipses</strong> with the Sun at one focus.</p>
            <div class="lesson-callout">
              <strong>Hands-On Lab Activity:</strong> Using two pushpins, a loop of string, and a pencil, you will draw ellipses of varying eccentricity and calculate $e = \\frac{c}{a}$.
            </div>
          `,
          resources: [
            {
              title: "Lab 1: Drawing Elliptical Orbits & Calculating Eccentricity",
              type: "Home Lab Guide",
              size: "1.2 MB",
              content: "Materials: Cardboard, 2 pins, string, ruler. Measure focal distance (c) and semi-major axis (a) for Earth, Mars, and Halley's Comet."
            }
          ],
          quiz: [
            {
              q: "According to Kepler’s First Law, what shape is the orbit of every planet around the Sun?",
              options: [
                "An ellipse with the Sun located at one of the two foci",
                "A square path",
                "A circle with Earth at the center",
                "A straight line"
              ],
              correct: 0,
              explanation: "Kepler’s First Law (1609) demonstrated that planets move in elliptical paths with the Sun at one focus."
            }
          ]
        }
      ]
    },
    {
      id: "lit-601",
      code: "LIT-601",
      title: "Heroic Chronicles, Classical Grammar & Narrative Composition",
      department: "Literature & Rhetoric",
      gradeLevels: [6],
      division: "middle",
      credits: 1.0,
      track: "Grade 6 ELA Core",
      instructor: "Prof. Eleanor Whitmore",
      progress: 85,
      termGrade: 96,
      quizAvg: 96,
      description: "Fulfils State 6th Grade ELA Reading, Grammar, Spelling & Composition standards through sentence diagramming, English syntax, heroic literature, and Progymnasmata narrative writing.",
      lessons: []
    },
    {
      id: "hist-601",
      code: "HIST-601",
      title: "World Geography & Ancient Civilizations: Egypt, Israel, Greece & Rome",
      department: "History & Civilization",
      gradeLevels: [6],
      division: "middle",
      credits: 1.0,
      track: "Grade 6 Social Studies Core",
      instructor: "Prof. Eleanor Whitmore",
      progress: 89,
      termGrade: 98,
      quizAvg: 97,
      description: "Fulfils State 6th Grade World Geography & Ancient History standards, comparing ancient law codes, physical/political geography, architecture, and primary chronicles.",
      lessons: []
    },
    {
      id: "lat-601",
      code: "LAT-601",
      title: "Introductory Latin, Classical Roots & Fine Arts Appreciation",
      department: "Classical Languages & Arts",
      gradeLevels: [6],
      division: "middle",
      credits: 1.0,
      track: "Grade 6 Language & Arts",
      instructor: "Magister Julian Hawthorne",
      progress: 92,
      termGrade: 99,
      quizAvg: 99,
      description: "Introduces 1st and 2nd declension Latin nouns, present-system verbs, 250+ Latin/Greek scientific roots, and statutory Fine Arts appreciation.",
      lessons: []
    },
    {
      id: "pe-612",
      code: "PE-612",
      title: "Physical Education, Health, Nutrition & First Aid/CPR (Statutory Core)",
      department: "Natural Sciences",
      gradeLevels: [6, 7, 8, 9, 10],
      division: "middle",
      credits: 1.0,
      track: "State Statutory Mandate",
      instructor: "Coach Nathaniel Brooks, M.S.",
      progress: 95,
      termGrade: 100,
      quizAvg: 99,
      description: "Satisfies all 50-state statutory mandates for Physical Education, Health & Wellness, Anatomy/Nutrition, Fire/Safety Education, and Cardiopulmonary Resuscitation (CPR) awareness.",
      lessons: []
    },

    // ==================== GRADE 7 PATHWAY COURSES ====================
    {
      id: "theo-102",
      code: "THEO-701",
      title: "Gospels, Life of Christ & Wisdom Literature",
      department: "Theology & Worldview",
      gradeLevels: [7],
      division: "middle",
      credits: 1.0,
      track: "Grade 7 Logic Core",
      instructor: "Rev. Dr. Marcus Vance",
      progress: 92,
      termGrade: 99,
      quizAvg: 98,
      description: "Traces the four Gospels, the parables of Christ, and the poetic wisdom of Proverbs, Ecclesiastes, and Psalms.",
      lessons: []
    },
    {
      id: "math-102",
      code: "MATH-102",
      title: "Pre-Algebra Mastery & Proportional Reasoning",
      department: "Mathematics",
      gradeLevels: [7],
      division: "middle",
      credits: 1.0,
      track: "Grade 7 Logic Core",
      instructor: "Dr. Alistair Sterling",
      progress: 85,
      termGrade: 95,
      quizAvg: 94,
      description: "Builds fluency with integers, rational numbers, linear equations, geometric ratios, and mathematical problem-solving for 7th Grade scholars.",
      lessons: []
    },
    {
      id: "sci-102",
      code: "SCI-102",
      title: "Life Science, Cellular Order & Botanical Field Study",
      department: "Natural Sciences",
      gradeLevels: [7],
      division: "middle",
      credits: 1.0,
      track: "Grade 7 Logic Lab",
      instructor: "Dr. Miriam Chen",
      progress: 89,
      termGrade: 97,
      quizAvg: 96,
      description: "Hands-on microscopy, genetics, taxonomy, human physiology, and nature journaling celebrating the intricate design of living systems.",
      lessons: []
    },
    {
      id: "lit-102",
      code: "LIT-102",
      title: "Formal Logic I, English Grammar & Classical Composition",
      department: "Literature & Rhetoric",
      gradeLevels: [7],
      division: "middle",
      credits: 1.0,
      track: "Grade 7 ELA & Logic Core",
      instructor: "Magister Julian Hawthorne",
      progress: 91,
      termGrade: 98,
      quizAvg: 97,
      description: "Categorical syllogisms, detecting informal fallacies, advanced grammar, and persuasive essay writing through the classical Progymnasmata exercises.",
      lessons: []
    },
    {
      id: "hist-102",
      code: "HIST-102",
      title: "Christendom & Medieval Civilization: Augustine to Magna Carta",
      department: "History & Civilization",
      gradeLevels: [7],
      division: "middle",
      credits: 1.0,
      track: "Grade 7 Social Studies",
      instructor: "Prof. Eleanor Whitmore",
      progress: 87,
      termGrade: 96,
      quizAvg: 95,
      description: "Chronological exploration of the Patristic era, Byzantine Empire, Medieval Europe, Cathedral architecture, and Magna Carta.",
      lessons: []
    },
    {
      id: "lat-101",
      code: "LAT-101",
      title: "Foundations of Classical & Ecclesiastical Latin I",
      department: "Classical Languages & Arts",
      gradeLevels: [7],
      division: "middle",
      credits: 1.0,
      track: "Grade 7 Logic Core",
      instructor: "Magister Julian Hawthorne",
      progress: 94,
      termGrade: 99,
      quizAvg: 99,
      description: "Five noun declensions, active and passive verb conjugations, English derivative roots, and Latin hymns and proverbs.",
      lessons: []
    },

    // ==================== GRADE 8 PATHWAY COURSES ====================
    {
      id: "theo-801",
      code: "THEO-801",
      title: "Acts, Pauline Epistles & History of the Early Church",
      department: "Theology & Worldview",
      gradeLevels: [8],
      division: "middle",
      credits: 1.0,
      track: "Grade 8 Pre-Rhetoric",
      instructor: "Rev. Dr. Marcus Vance",
      progress: 84,
      termGrade: 96,
      quizAvg: 95,
      description: "Studies the spread of the Gospel from Jerusalem to Rome, the missionary epistles, and the creeds of the early Church Fathers.",
      lessons: []
    },
    {
      id: "math-801",
      code: "MATH-801",
      title: "Honors Algebra I & Linear/Quadratic Systems (1.0 High School Credit)",
      department: "Mathematics",
      gradeLevels: [8, 9],
      division: "middle",
      credits: 1.0,
      track: "High School Carnegie Credit",
      instructor: "Dr. Alistair Sterling",
      progress: 82,
      termGrade: 95,
      quizAvg: 94,
      description: "High-school-credit Honors Algebra I covering linear functions, inequalities, systems of equations, polynomials, factoring, and quadratic functions.",
      lessons: []
    },
    {
      id: "sci-801",
      code: "SCI-801",
      title: "Physical Science: Classical Mechanics, Energy & Matter Lab",
      department: "Natural Sciences",
      gradeLevels: [8],
      division: "middle",
      credits: 1.0,
      track: "Grade 8 Lab Core",
      instructor: "Dr. Miriam Chen",
      progress: 86,
      termGrade: 96,
      quizAvg: 95,
      description: "Quantitative introduction to kinematics, Newton’s laws, work and simple machines, thermodynamics, waves, and atomic chemistry.",
      lessons: []
    },
    {
      id: "lit-801",
      code: "LIT-801",
      title: "Formal Logic II, Refutation & Classical Poetics (ELA 8)",
      department: "Literature & Rhetoric",
      gradeLevels: [8],
      division: "middle",
      credits: 1.0,
      track: "Grade 8 ELA & Logic",
      instructor: "Magister Julian Hawthorne",
      progress: 88,
      termGrade: 97,
      quizAvg: 96,
      description: "Hypothetical syllogisms, formal debate refutation and confirmation essays, and close study of Shakespeare, Tolkien, and heroic poetry.",
      lessons: []
    },
    {
      id: "hist-801",
      code: "HIST-801",
      title: "Early Modern World, U.S. History & State Constitutional Civics",
      department: "History & Civilization",
      gradeLevels: [8],
      division: "middle",
      credits: 1.0,
      track: "Grade 8 U.S. & State Civics",
      instructor: "Prof. Eleanor Whitmore",
      progress: 85,
      termGrade: 96,
      quizAvg: 95,
      description: "Satisfies 8th-grade State U.S. History, State History & Constitutional Civics requirements alongside the Scientific Revolution and American Founding.",
      lessons: []
    },
    {
      id: "lat-801",
      code: "LAT-801",
      title: "Intermediate Latin Grammar, Digital Literacy & Sacred Polyphony",
      department: "Classical Languages & Arts",
      gradeLevels: [8],
      division: "middle",
      credits: 1.0,
      track: "Grade 8 Language & Tech",
      instructor: "Magister Julian Hawthorne",
      progress: 90,
      termGrade: 98,
      quizAvg: 97,
      description: "Completes Latin morphological grammar, introduces relative clauses and participles, and covers statutory Digital Literacy & Sacred Music.",
      lessons: []
    },

    // ==================== GRADES 9–12 UPPER SCHOOL COLLEGIATE COURSES ====================
    {
      id: "theo-901",
      code: "THEO-901",
      title: "Systematic Theology I & Classical Christian Ethics",
      department: "Theology & Worldview",
      gradeLevels: [9],
      division: "high",
      credits: 1.0,
      track: "Grade 9 Honors",
      instructor: "Rev. Dr. Marcus Vance",
      progress: 85,
      termGrade: 97,
      quizAvg: 96,
      description: "Examines the classical doctrines of revelation, God, creation, providence, and the cardinal and theological virtues.",
      lessons: []
    },
    {
      id: "sci-901",
      code: "SCI-901",
      title: "Honors Biology, Cellular Biochemistry & Molecular Design (with Lab)",
      department: "Natural Sciences",
      gradeLevels: [9],
      division: "high",
      credits: 1.0,
      track: "Grade 9 Honors Lab (1.0 Cr)",
      instructor: "Dr. Miriam Chen",
      progress: 83,
      termGrade: 95,
      quizAvg: 94,
      description: "Full Carnegie Lab Credit: Cellular respiration, photosynthesis, DNA replication, Mendelian & molecular genetics, comparative anatomy, and dissection/microscopy labs.",
      lessons: []
    },
    {
      id: "lit-901",
      code: "LIT-901",
      title: "English I Honors: Homer, Aeschylus, Sophocles, Virgil & Composition",
      department: "Literature & Rhetoric",
      gradeLevels: [9],
      division: "high",
      credits: 1.0,
      track: "Grade 9 NCAA/State English I",
      instructor: "Prof. Eleanor Whitmore",
      progress: 87,
      termGrade: 96,
      quizAvg: 96,
      description: "Seminar study of The Iliad, The Odyssey, The Oresteia, Oedipus Rex, and Virgil’s Aeneid with formal literary analysis and MLA research composition.",
      lessons: []
    },
    {
      id: "hist-901",
      code: "HIST-901",
      title: "World History I Honors: Classical Antiquity & Roman Republic",
      department: "History & Civilization",
      gradeLevels: [9],
      division: "high",
      credits: 1.0,
      track: "Grade 9 World History Credit",
      instructor: "Prof. Eleanor Whitmore",
      progress: 84,
      termGrade: 95,
      quizAvg: 94,
      description: "Primary source historiography through Herodotus, Thucydides, Plutarch, Livy, and Augustus.",
      lessons: []
    },
    {
      id: "lat-901",
      code: "LAT-901",
      title: "Latin Prose I (Foreign Language Credit): Caesar & Vulgate Gospels",
      department: "Classical Languages & Arts",
      gradeLevels: [9],
      division: "high",
      credits: 1.0,
      track: "Grade 9 Foreign Lang Credit",
      instructor: "Magister Julian Hawthorne",
      progress: 88,
      termGrade: 97,
      quizAvg: 97,
      description: "Transition from adapted grammar exercises to unadapted Latin prose readings from Julius Caesar and Jerome’s Gospel of John.",
      lessons: []
    },
    {
      id: "math-201",
      code: "MATH-201",
      title: "Euclidean Geometry & Deductive Proofs (1.0 Carnegie Credit)",
      department: "Mathematics",
      gradeLevels: [9, 10],
      division: "high",
      credits: 1.0,
      track: "Honors (NCAA/State Core)",
      instructor: "Dr. Alistair Sterling",
      progress: 82,
      termGrade: 96,
      quizAvg: 95,
      description: "Classical study of Euclid’s Elements alongside modern coordinate, transformational, and analytic geometry, cultivating axiomatic reasoning.",
      lessons: [
        {
          id: "m201-l1",
          unit: "UNIT 1 · AXIOMS & FIRST PRINCIPLES",
          title: "Definitions, Postulates & Common Notions in Euclid Book I",
          duration: "40 mins",
          completed: true,
          videoChapter: "SEMINAR 1.1 · AXIOMATIC FOUNDATIONS",
          readingHtml: `
            <p>Mathematics in the classical Christian tradition is never reduced to mere mechanical computation. Rather, geometry invites the scholar to behold invisible, immutable truths embedded in the fabric of creation.</p>
            <div class="lesson-callout">
              <strong>Euclid’s First Postulate:</strong> “To draw a straight line from any point to any point.” From five simple postulates, hundreds of intricate geometric theorems emerge by necessity.
            </div>
            <h3>Why Deductive Proof Matters</h3>
            <p>Unlike inductive observation—which gathers probable patterns from empirical measurement—a deductive geometric proof establishes universal certainty from agreed-upon first principles.</p>
          `,
          resources: [
            { title: "Euclid Book I Definitions & Postulates Packet", type: "PDF Study Guide", size: "1.4 MB", content: "EUCLID BOOK I: 23 Definitions, 5 Postulates, and 5 Common Notions.\n1. A point is that which has no part.\n2. A line is breadthless length..." },
            { title: "Compass & Straightedge Construction Lab 1", type: "Lab Worksheet", size: "890 KB", content: "CONSTRUCTION LAB 1: Equilateral Triangle (Proposition I.1) step-by-step compass instructions." }
          ],
          quiz: [
            {
              q: "What distinguishes a geometric postulate from a proven proposition?",
              options: [
                "A postulate is assumed as a foundational starting point without proof, whereas a proposition is deduced from prior postulates and definitions.",
                "A postulate only applies to three-dimensional solids.",
                "A proposition cannot be used to prove later theorems.",
                "Postulates are approximate measurements using a ruler."
              ],
              correct: 0,
              explanation: "Every deductive system requires unproved first principles (postulates/axioms) to avoid infinite regress."
            },
            {
              q: "Which tools are permitted in classical Euclidean constructions?",
              options: [
                "An unmarked straightedge and a collapsible compass",
                "A marked metric ruler and a digital protractor",
                "Graphing calculators and algebraic solvers",
                "Only freehand sketches"
              ],
              correct: 0,
              explanation: "Postulates 1–3 correspond directly to the unmarked straightedge (drawing lines) and compass (describing circles)."
            }
          ]
        },
        {
          id: "m201-l2",
          unit: "UNIT 3 · DEDUCTIVE AXIOMS",
          title: "Proposition I.47: The Pythagorean Theorem & Geometric Harmony",
          duration: "45 mins",
          completed: false,
          videoChapter: "SEMINAR 3.4 · THE WINDMILL PROOF OF BOOK I.47",
          readingHtml: `
            <p>Proposition I.47 stands as the crowning summit of Book I of Euclid’s <em>Elements</em>: in right-angled triangles, the square on the side subtending the right angle is equal to the squares on the sides containing the right angle.</p>
            <div class="lesson-callout">
              <strong>Key Insight:</strong> Instead of relying on algebraic formulas ($a^2 + b^2 = c^2$), Euclid proves the equivalence of area by dissecting the hypotenuse square into two rectangles using an altitude line parallel to the sides.
            </div>
          `,
          resources: [
            { title: "Proposition I.47 Two-Column Proof Template", type: "Study Packet", size: "1.1 MB", content: "CHRIST INFINITY ACADEMY — MATH-201\nProposition I.47 Complete Two-Column Proof & Diagram Annotations." }
          ],
          quiz: [
            {
              q: "How does Euclid establish the equality of areas in Proposition I.47 without algebraic equations?",
              options: [
                "By proving congruent triangles via SAS (I.4) and showing each leg square equals twice a triangle (I.41)",
                "By measuring the side lengths with a millimeter ruler",
                "By using trigonometric sine and cosine tables",
                "By assuming all right triangles are isosceles"
              ],
              correct: 0,
              explanation: "Euclid pairs Proposition I.4 (SAS congruence) with Proposition I.41 (a parallelogram is double a triangle on the same base and between the same parallels)."
            }
          ]
        }
      ]
    },
    {
      id: "math-202",
      code: "MATH-202",
      title: "Honors Algebra II, Matrices & Trigonometry (1.0 Carnegie Credit)",
      department: "Mathematics",
      gradeLevels: [10, 11],
      division: "high",
      credits: 1.0,
      track: "Honors (NCAA/State Core)",
      instructor: "Dr. Alistair Sterling",
      progress: 80,
      termGrade: 95,
      quizAvg: 94,
      description: "Complex numbers, polynomial and rational functions, logarithms, conic sections, matrices, sequences/series, and unit-circle trigonometry.",
      lessons: []
    },
    {
      id: "theo-204",
      code: "THEO-204",
      title: "Systematic Theology, Apologetics & Worldview",
      department: "Theology & Worldview",
      gradeLevels: [10, 11, 12],
      division: "high",
      credits: 1.0,
      track: "Honors Seminar",
      instructor: "Rev. Dr. Marcus Vance",
      progress: 88,
      termGrade: 98,
      quizAvg: 97,
      description: "Examines historical Christian orthodoxy, the harmony of faith and scientific reason, classical philosophical proofs, and cultural engagement.",
      lessons: []
    },
    {
      id: "sci-202",
      code: "SCI-202",
      title: "Honors Chemistry & Quantitative Stoichiometry (with Wet Lab)",
      department: "Natural Sciences",
      gradeLevels: [10, 11],
      division: "high",
      credits: 1.0,
      track: "Honors Lab (1.0 Cr)",
      instructor: "Dr. Miriam Chen",
      progress: 75,
      termGrade: 94,
      quizAvg: 93,
      description: "Full Carnegie Lab Credit: Atomic structure, periodic periodicity, chemical bonding, stoichiometry, thermodynamics, and quantitative wet-lab investigations.",
      lessons: []
    },
    {
      id: "lit-201",
      code: "LIT-201",
      title: "English II Honors: World Literature (Augustine, Dante & Milton)",
      department: "Literature & Rhetoric",
      gradeLevels: [10, 11],
      division: "high",
      credits: 1.0,
      track: "Grade 10 NCAA/State English II",
      instructor: "Prof. Eleanor Whitmore",
      progress: 86,
      termGrade: 97,
      quizAvg: 96,
      description: "Close literary reading of Augustine’s Confessions, Dante’s Divine Comedy, Chaucer, and Milton’s Paradise Lost with formal analytical essays.",
      lessons: []
    },
    {
      id: "hist-203",
      code: "HIST-203",
      title: "World History II Honors: Renaissance, Reformation & Modernity",
      department: "History & Civilization",
      gradeLevels: [10, 11],
      division: "high",
      credits: 1.0,
      track: "Grade 10 World History II",
      instructor: "Prof. Eleanor Whitmore",
      progress: 80,
      termGrade: 95,
      quizAvg: 94,
      description: "Primary-source political, intellectual, and cultural history from the Reformation and Scientific Revolution to the 20th century.",
      lessons: []
    },
    {
      id: "lat-201",
      code: "LAT-201",
      title: "Latin Prose II (Foreign Lang II/III): Cicero & Patristic Texts",
      department: "Classical Languages & Arts",
      gradeLevels: [10, 11],
      division: "high",
      credits: 1.0,
      track: "Honors Foreign Language",
      instructor: "Magister Julian Hawthorne",
      progress: 90,
      termGrade: 97,
      quizAvg: 98,
      description: "Mastery of subjunctive clauses, ablative absolutes, and unadapted readings from Cicero’s Orations and Augustine.",
      lessons: []
    },
    {
      id: "theo-301",
      code: "THEO-301",
      title: "Moral Philosophy, Natural Law & Cultural Engagement",
      department: "Theology & Worldview",
      gradeLevels: [11],
      division: "high",
      credits: 1.0,
      track: "Junior Honors",
      instructor: "Rev. Dr. Marcus Vance",
      progress: 81,
      termGrade: 96,
      quizAvg: 95,
      description: "Studies moral reasoning, natural law tradition from Aquinas to C.S. Lewis’s The Abolition of Man, and modern bioethics.",
      lessons: []
    },
    {
      id: "math-300",
      code: "MATH-300",
      title: "Honors Pre-Calculus, Analytic Trigonometry & Vectors",
      department: "Mathematics",
      gradeLevels: [11],
      division: "high",
      credits: 1.0,
      track: "Junior Honors (NCAA Core)",
      instructor: "Dr. Alistair Sterling",
      progress: 79,
      termGrade: 95,
      quizAvg: 94,
      description: "Prepares scholars for AP Calculus with transcendental functions, polar coordinates, parametric equations, vectors, and limits.",
      lessons: []
    },
    {
      id: "sci-301",
      code: "SCI-301",
      title: "Classical & Modern Physics: Mechanics, Waves & Electromagnetism (with Lab)",
      department: "Natural Sciences",
      gradeLevels: [11, 12],
      division: "high",
      credits: 1.0,
      track: "Honors Lab (1.0 Cr)",
      instructor: "Dr. Miriam Chen",
      progress: 77,
      termGrade: 94,
      quizAvg: 93,
      description: "Full Carnegie Lab Credit: Mathematical physics covering Newtonian dynamics, orbital gravitation, thermodynamics, Maxwellian electromagnetism, and optics.",
      lessons: []
    },
    {
      id: "lit-301",
      code: "LIT-301",
      title: "English III Honors / AP Lang: Classical Rhetoric & American Literature",
      department: "Literature & Rhetoric",
      gradeLevels: [11],
      division: "high",
      credits: 1.0,
      track: "Grade 11 NCAA/State English III",
      instructor: "Prof. Eleanor Whitmore",
      progress: 85,
      termGrade: 97,
      quizAvg: 96,
      description: "Aristotle’s Rhetoric, Quintilian’s Institutio Oratoria, and major works of American and British letters.",
      lessons: []
    },
    {
      id: "hist-301",
      code: "HIST-301",
      title: "AP U.S. Constitutional History & Primary Source Seminar",
      department: "History & Civilization",
      gradeLevels: [11],
      division: "high",
      credits: 1.0,
      track: "AP / State U.S. History Mandate",
      instructor: "Prof. Eleanor Whitmore",
      progress: 83,
      termGrade: 96,
      quizAvg: 95,
      description: "Fulfils the 1.0 Credit High School U.S. History statutory mandate through original speeches, Supreme Court opinions, and the Federalist Papers.",
      lessons: []
    },
    {
      id: "lat-301",
      code: "LAT-301",
      title: "Advanced Latin Poetry: Virgil’s Aeneid & Classical Aesthetics (Fine Arts)",
      department: "Classical Languages & Arts",
      gradeLevels: [11],
      division: "high",
      credits: 1.0,
      track: "Junior Honors",
      instructor: "Magister Julian Hawthorne",
      progress: 88,
      termGrade: 98,
      quizAvg: 97,
      description: "Dactylic hexameter scansion, poetic figures, and unadapted readings from Books I, II, IV, and VI of Virgil’s Aeneid.",
      lessons: []
    },
    {
      id: "theo-401",
      code: "THEO-401",
      title: "Senior Worldview Vocation, Stewardship & Civics Colloquium",
      department: "Theology & Worldview",
      gradeLevels: [12],
      division: "high",
      credits: 1.0,
      track: "Senior Capstone",
      instructor: "Rev. Dr. Marcus Vance",
      progress: 76,
      termGrade: 98,
      quizAvg: 97,
      description: "Prepares graduating seniors for university, family life, civic leadership, and Christian vocation across the professions.",
      lessons: []
    },
    {
      id: "math-301",
      code: "MATH-301",
      title: "AP Calculus BC & Analytical Mechanics (1.0 Carnegie Credit)",
      department: "Mathematics",
      gradeLevels: [12],
      division: "high",
      credits: 1.0,
      track: "AP / Dual-Credit",
      instructor: "Dr. Alistair Sterling",
      progress: 74,
      termGrade: 95,
      quizAvg: 94,
      description: "Limits, derivatives, definite and improper integrals, Taylor series, parametric curves, and differential equations modeling physical motion.",
      lessons: []
    },
    {
      id: "sci-401",
      code: "SCI-401",
      title: "Advanced Human Anatomy, Physiology & Biophysics Lab",
      department: "Natural Sciences",
      gradeLevels: [12],
      division: "high",
      credits: 1.0,
      track: "Senior Honors Lab",
      instructor: "Dr. Miriam Chen",
      progress: 80,
      termGrade: 96,
      quizAvg: 95,
      description: "Pre-med caliber 4th lab science studying organ systems, neurobiology, biomechanics, and cellular histology.",
      lessons: []
    },
    {
      id: "lit-401",
      code: "LIT-401",
      title: "English IV Honors: British Literature & Senior Rhetoric Capstone Thesis",
      department: "Literature & Rhetoric",
      gradeLevels: [12],
      division: "high",
      credits: 1.0,
      track: "Grade 12 NCAA/State English IV",
      instructor: "Prof. Eleanor Whitmore",
      progress: 72,
      termGrade: 97,
      quizAvg: 96,
      description: "Fulfils 12th Grade English IV requirement alongside a 25-page original research thesis and formal oral defense before a faculty panel.",
      lessons: []
    },
    {
      id: "hist-401",
      code: "HIST-401",
      title: "U.S. Constitutional Government (0.5 Cr) & Economics / Personal Finance (0.5 Cr)",
      department: "History & Civilization",
      gradeLevels: [12],
      division: "high",
      credits: 1.0,
      track: "State Gov & Finance Mandate",
      instructor: "Prof. Eleanor Whitmore",
      progress: 78,
      termGrade: 96,
      quizAvg: 95,
      description: "Fulfils the statutory 0.5 Credit U.S. Government/Constitution and 0.5 Credit Economics & Personal Financial Literacy graduation requirements.",
      lessons: []
    },
    {
      id: "lat-401",
      code: "LAT-401",
      title: "Koine New Testament Greek & Classical Architectural Aesthetics",
      department: "Classical Languages & Arts",
      gradeLevels: [12],
      division: "high",
      credits: 1.0,
      track: "Senior Honors",
      instructor: "Magister Julian Hawthorne",
      progress: 84,
      termGrade: 98,
      quizAvg: 98,
      description: "Introduces the Greek alphabet, noun/verb paradigms, and direct reading of the Greek New Testament alongside classical architectural harmony.",
      lessons: []
    }
  ],

  assignments: [
    {
      id: "asg-m1",
      studentId: "micah",
      courseId: "math-601",
      courseTitle: "Grade 6 Mathematics (MATH-601)",
      title: "Sieve of Eratosthenes & Prime Factorization Portfolio",
      dueDate: "Fri, Nov 20, 2026",
      type: "Number Theory Packet",
      status: "pending",
      score: null
    },
    {
      id: "asg-m2",
      studentId: "micah",
      courseId: "sci-601",
      courseTitle: "Celestial Astronomy & Earth Lab (SCI-601)",
      title: "Lab #1: Drawing Keplerian Ellipses & Lunar Phase Log",
      dueDate: "Thu, Nov 19, 2026",
      type: "Observation Lab",
      status: "pending",
      score: null
    },
    {
      id: "asg-m3",
      studentId: "micah",
      courseId: "theo-601",
      courseTitle: "Creation & Covenants (THEO-601)",
      title: "Genesis 1 Symmetry Chart & Imago Dei Reflection",
      dueDate: "Nov 12, 2026",
      type: "Seminar Essay",
      status: "completed",
      score: 99
    },
    {
      id: "asg-1",
      studentId: "lucas",
      courseId: "math-201",
      courseTitle: "Euclidean Geometry & Proofs",
      title: "Two-Column Proof Packet: Propositions I.47 & I.48",
      dueDate: "Fri, Nov 20, 2026",
      type: "Proof Portfolio",
      status: "pending",
      score: null
    },
    {
      id: "asg-2",
      studentId: "lucas",
      courseId: "sci-202",
      courseTitle: "Honors Chemistry",
      title: "Lab Report #4: Gravimetric Stoichiometry & Limiting Reactants",
      dueDate: "Mon, Nov 23, 2026",
      type: "Lab Report",
      status: "pending",
      score: null
    },
    {
      id: "asg-3",
      studentId: "lucas",
      courseId: "lit-201",
      courseTitle: "Great Books Seminar",
      title: "Analytical Essay: Ordered Love in Dante’s Purgatorio XVII",
      dueDate: "Nov 12, 2026",
      type: "Seminar Essay",
      status: "completed",
      score: 97
    },
    {
      id: "asg-4",
      studentId: "lucas",
      courseId: "theo-204",
      courseTitle: "Systematic Theology & Worldview",
      title: "Unit 2 Mastery Quiz: Kepler & the Intelligibility of Nature",
      dueDate: "Nov 10, 2026",
      type: "Mastery Quiz",
      status: "completed",
      score: 98
    },
    {
      id: "asg-5",
      studentId: "hannah",
      courseId: "lit-102",
      courseTitle: "Formal Logic I & Composition",
      title: "Syllogism Validity Worksheet & Chreia Draft",
      dueDate: "Thu, Nov 19, 2026",
      type: "Logic Exercise",
      status: "pending",
      score: null
    },
    {
      id: "asg-6",
      studentId: "hannah",
      courseId: "sci-102",
      courseTitle: "Life Science & Botanical Lab",
      title: "Leaf Venation & Microscopy Sketchbook Entry",
      dueDate: "Nov 13, 2026",
      type: "Field Journal",
      status: "completed",
      score: 99
    }
  ],

  schedules: {
    micah: {
      Monday: [
        { time: "08:30 – 09:05", title: "Creation, Covenants & Psalm 19 Recitation", course: "THEO-601", color: "gold" },
        { time: "09:15 – 10:05", title: "Number Theory & Sieve of Eratosthenes Seminar", course: "MATH-601", color: "navy" },
        { time: "10:20 – 11:10", title: "Classical Grammar & Heroic Narrative Reading", course: "LIT-601", color: "navy" },
        { time: "13:00 – 14:00", title: "Celestial Astronomy: Keplerian Ellipse Lab", course: "SCI-601", color: "emerald" }
      ],
      Tuesday: [
        { time: "08:30 – 09:15", title: "Introductory Latin: 1st Declension & Roots", course: "LAT-601", color: "gold" },
        { time: "09:30 – 10:20", title: "Ancient Civilizations: Mesopotamia & Egypt", course: "HIST-601", color: "navy" },
        { time: "10:35 – 11:25", title: "Ratios & Musical Proportions Problem Set", course: "MATH-601", color: "emerald" },
        { time: "13:15 – 14:00", title: "Physical Education, Health & Wellness Log", course: "PE-612", color: "emerald" }
      ],
      Wednesday: [
        { time: "08:30 – 09:15", title: "Progymnasmata Fable & Narrative Composition", course: "LIT-601", color: "navy" },
        { time: "09:30 – 10:20", title: "Grade 6 Mathematics Workshop", course: "MATH-601", color: "navy" },
        { time: "10:35 – 11:15", title: "Latin Mottoes & Scientific Vocabulary", course: "LAT-601", color: "gold" },
        { time: "13:00 – 14:00", title: "Earth Systems: Mineralogy & Weather Station", course: "SCI-601", color: "emerald" }
      ],
      Thursday: [
        { time: "08:30 – 09:15", title: "Biblical Covenants Timeline & Map Work", course: "THEO-601", color: "gold" },
        { time: "09:30 – 10:20", title: "Ancient Israel, Greece & Cartography", course: "HIST-601", color: "emerald" },
        { time: "10:35 – 11:25", title: "Sentence Diagramming & Syntax Mastery", course: "LIT-601", color: "navy" },
        { time: "13:15 – 14:00", title: "Physical Fitness & Nutrition Module", course: "PE-612", color: "emerald" }
      ],
      Friday: [
        { time: "08:30 – 09:30", title: "Grade 6 Weekly Mastery Quizzes", course: "MATH-601 / THEO-601", color: "gold" },
        { time: "09:45 – 11:00", title: "Nature Sketchbook, Choral Music & Recitation", course: "FINE ARTS", color: "emerald" },
        { time: "11:15 – 11:45", title: "Friday Parent-Scholar State Portfolio Sign-Off", course: "COMPLIANCE", color: "navy" }
      ]
    },
    hannah: {
      Monday: [
        { time: "08:30 – 09:15", title: "Biblical Narrative & Proverbs Memorization", course: "THEO-701", color: "gold" },
        { time: "09:30 – 10:30", title: "Pre-Algebra Proportional Reasoning", course: "MATH-102", color: "navy" },
        { time: "10:45 – 11:45", title: "Foundations of Latin I: 3rd Declension", course: "LAT-101", color: "gold" },
        { time: "13:00 – 14:15", title: "Life Science Microscopy & Nature Sketching", course: "SCI-102", color: "emerald" }
      ],
      Tuesday: [
        { time: "08:30 – 09:30", title: "Formal Logic I: Categorical Syllogisms", course: "LIT-102", color: "navy" },
        { time: "09:45 – 10:45", title: "Ancient & Medieval History: Magna Carta", course: "HIST-102", color: "navy" },
        { time: "11:00 – 12:00", title: "Pre-Algebra Practice & Mental Math", course: "MATH-102", color: "emerald" }
      ],
      Wednesday: [
        { time: "08:30 – 09:30", title: "Classical Composition: Chreia Workshop", course: "LIT-102", color: "navy" },
        { time: "09:45 – 10:45", title: "Pre-Algebra Seminar", course: "MATH-102", color: "navy" },
        { time: "11:00 – 12:00", title: "Latin Chant & Derivative Roots", course: "LAT-101", color: "gold" },
        { time: "13:00 – 14:15", title: "Botanical Field Walk & Classification", course: "SCI-102", color: "emerald" }
      ],
      Thursday: [
        { time: "08:30 – 09:30", title: "Formal Logic Fallacy Detective Seminar", course: "LIT-102", color: "navy" },
        { time: "09:45 – 10:45", title: "Medieval Christendom Map & Timeline", course: "HIST-102", color: "emerald" },
        { time: "11:00 – 12:00", title: "Biblical Wisdom Literature Discussion", course: "THEO-701", color: "gold" }
      ],
      Friday: [
        { time: "08:30 – 09:45", title: "Weekly Logic & Math Mastery Check", course: "MATH-102 / LIT-102", color: "gold" },
        { time: "10:00 – 11:30", title: "Fine Arts, Choral Music & PE Log", course: "ARTS / PE-612", color: "emerald" }
      ]
    },
    lucas: {
      Monday: [
        { time: "08:30 – 09:15", title: "Morning Scripture, Hymn & Latin Reading", course: "THEO-204 / LAT-201", color: "gold" },
        { time: "09:30 – 10:45", title: "Live Seminar: Euclidean Geometry (Prop. I.47)", course: "MATH-201", color: "navy" },
        { time: "11:00 – 12:15", title: "Great Books Reading: Dante’s Purgatorio", course: "LIT-201", color: "navy" },
        { time: "13:30 – 15:00", title: "Honors Chemistry Stoichiometry Lab", course: "SCI-202", color: "emerald" }
      ],
      Tuesday: [
        { time: "08:30 – 09:30", title: "Latin Prose Translation: Cicero & Vulgate", course: "LAT-201", color: "gold" },
        { time: "09:45 – 11:00", title: "Western Civilization Seminar & Primary Sources", course: "HIST-203", color: "navy" },
        { time: "11:15 – 12:30", title: "Geometry Problem Set & Compass Constructions", course: "MATH-201", color: "emerald" },
        { time: "13:30 – 14:45", title: "Systematic Theology & Apologetics Colloquium", course: "THEO-204", color: "navy" }
      ],
      Wednesday: [
        { time: "08:30 – 09:15", title: "Commonplace Book & Rhetoric Declamation", course: "LIT-201", color: "gold" },
        { time: "09:30 – 10:45", title: "Euclidean Geometry Proof Workshop", course: "MATH-201", color: "navy" },
        { time: "11:00 – 12:15", title: "Chemistry Quantitative Problem Solving", course: "SCI-202", color: "emerald" },
        { time: "13:30 – 15:00", title: "Great Books Socratic Seminar", course: "LIT-201", color: "navy" }
      ],
      Thursday: [
        { time: "08:30 – 09:30", title: "Latin Grammar & Sight Reading", course: "LAT-201", color: "gold" },
        { time: "09:45 – 11:00", title: "Western Civilization Essay Tutorial", course: "HIST-203", color: "navy" },
        { time: "11:15 – 12:30", title: "Honors Chemistry Virtual & Wet Lab Analysis", course: "SCI-202", color: "emerald" },
        { time: "13:30 – 14:30", title: "Theology Seminar: Faith & Scientific Inquiry", course: "THEO-204", color: "navy" }
      ],
      Friday: [
        { time: "08:30 – 10:00", title: "Weekly Mastery Quizzes & Proof Submission", course: "ALL COURSES", color: "gold" },
        { time: "10:15 – 11:45", title: "Independent Research & Fine Arts Symposium", course: "HONORS ELECTIVE", color: "emerald" },
        { time: "12:00 – 12:45", title: "Parent-Scholar Weekly Pacing & Credit Audit", course: "ADVISORY", color: "navy" }
      ]
    }
  },

  calendarMilestones: [
    { date: "NOV 16 · MON", title: "Grade 6 Astronomy Seminar: Kepler’s Elliptical Orbits", tag: "Grade 6 Lab", color: "emerald" },
    { date: "NOV 17 · TUE", title: "Socratic Seminar: Dante’s Purgatorio Cantos XVII–XVIII", tag: "Upper School", color: "navy" },
    { date: "NOV 19 · THU", title: "Grade 7 Formal Logic Syllogism Assessment Due", tag: "Quiz / Exam", color: "gold" },
    { date: "NOV 20 · FRI", title: "Grade 6 Sieve of Eratosthenes & Grade 10 Euclid Proof Due", tag: "Assignment Due", color: "emerald" },
    { date: "NOV 25 · WED", title: "Quarter 2 State Portfolio & Clock-Hour Verification Checkpoint", tag: "State Compliance", color: "navy" },
    { date: "DEC 04 · FRI", title: "Term I Cumulative Mastery Examinations & Transcript Lock", tag: "Quiz / Exam", color: "gold" }
  ]
};

// 36-Week Online Assessment & Assignment Modalities (Beyond Quizzes)
INITIAL_ACADEMY_DATA.assignmentModalities = [
  {
    category: "1. Socratic Seminar Discussion Boards (Weekly)",
    frequency: "36 Posts + 36 Peer Responses / Year",
    weight: "15% of Term Grade",
    grades: "Grades 6–12",
    description: "Every week, scholars respond to a primary-source Socratic prompt (150–300 words) citing textual evidence, then write a respectful, logical reply to a classmate’s argument."
  },
  {
    category: "2. Progymnasmata Essays & Research Papers (Bi-Weekly / Quarterly)",
    frequency: "8 Short Essays + 4 Major Quarterly Papers / Year",
    weight: "25% of Term Grade",
    grades: "Grades 6–12",
    description: "Online Composition Studio with thesis builder, live word-count tracker, MLA/Chicago citation checker, and 4-criterion classical rubric (Invention, Arrangement, Style, Mechanics)."
  },
  {
    category: "3. Digital Science Lab Reports & Data Tables (Bi-Weekly)",
    frequency: "14–18 Formal Lab Reports / Year",
    weight: "20% of Term Grade (Lab Sciences)",
    grades: "Grades 6–12",
    description: "Structured scientific method workbench: Hypothesis, Variables, Quantitative Measurement Table, Percent Error Calculation, and Conclusion—satisfying state & university wet/virtual lab mandates."
  },
  {
    category: "4. Two-Column Mathematical Proofs & Problem Portfolios (Weekly)",
    frequency: "36 Weekly Problem Sets / Proof Packets",
    weight: "20% of Term Grade (Mathematics)",
    grades: "Grades 6–12",
    description: "Step-by-step digital workspace where scholars pair every mathematical statement with its justifying axiom, definition, or theorem."
  },
  {
    category: "5. Oral Recitation, Latin Declamation & Rhetoric Speeches (Monthly)",
    frequency: "8 Recitations + 2 Formal Orations / Year",
    weight: "10% of Term Grade",
    grades: "Grades 6–12",
    description: "Scholars memorize and deliver Scripture passages, Latin paradigms, classical poetry, or persuasive speeches—developing poise, memory, and elocution."
  },
  {
    category: "6. Primary Source Document Analysis (DBQ) & Capstone Projects (Quarterly)",
    frequency: "4 Quarterly Exhibitions + Senior Thesis",
    weight: "10% of Term Grade",
    grades: "Grades 6–12",
    description: "Close annotation of historical charters (e.g., Magna Carta, Declaration of Independence), cartography maps, and end-of-quarter cumulative exhibitions."
  }
];

INITIAL_ACADEMY_DATA.discussionThreads = [
  {
    id: "disc-1",
    courseId: "theo-601",
    week: "Week 11 Socratic Seminar",
    prompt: "How does the symmetry between Days 1–3 (forming realms) and Days 4–6 (filling realms) in Genesis 1 show that creation is designed with intentional mathematical and artistic order?",
    posts: [
      {
        author: "Prof. Eleanor Whitmore (Faculty Moderator)",
        role: "Instructor",
        date: "Nov 11, 2026",
        body: "Welcome scholars! Remember to cite at least one specific pairing of days (such as Day 1 Light and Day 4 Sun/Moon/Stars) and explain what this teaches us about studying science."
      },
      {
        author: "Micah Vance (Grade 6 Scholar)",
        role: "Student",
        date: "Nov 13, 2026",
        body: "In Genesis 1, God first builds the 'house' on Days 1 to 3 and then fills each room with its inhabitants on Days 4 to 6. For example, on Day 2 He separates the sky and seas, and on Day 5 He fills them with birds and sea creatures. This shows creation is like a well-ordered cathedral that we can study through astronomy and biology."
      }
    ]
  },
  {
    id: "disc-2",
    courseId: "math-201",
    week: "Week 11 Socratic Seminar",
    prompt: "Why did Euclid refuse to rely on measuring with a marked ruler in Book I, insisting instead on deductive proofs from five postulates?",
    posts: [
      {
        author: "Dr. Alistair Sterling (Dean of Academics)",
        role: "Instructor",
        date: "Nov 10, 2026",
        body: "Consider the difference between physical approximation (measuring a drawn chalk triangle) and universal mathematical necessity (proving a truth for all right triangles)."
      },
      {
        author: "Lucas Vance (Grade 10 Scholar)",
        role: "Student",
        date: "Nov 12, 2026",
        body: "Physical rulers always have a margin of error, and a drawing only tests one specific triangle. Deductive proof from axioms proves that Proposition I.47 must hold true for every right triangle in the universe."
      }
    ]
  }
];

// ==================== FULL-WEEK WORKLOAD & 85% MASTERY GATEKEEPER ENGINE ====================
INITIAL_ACADEMY_DATA.weeklyWorkloadBlueprint = {
  masteryThreshold: 85,
  dailyAssignmentsPerDay: 3,
  weeklyDeliverablesPerCourse: 15,
  totalWeeklyDeliverablesAllCourses: 105,
  days: [
    {
      dayNum: 1,
      dayName: "Monday · Day 1 (3 Daily Assignments)",
      title: "Foundational Lecture, Cloze Vocabulary, Summary Writing & Daily Quiz",
      minutes: "45–50 mins / course",
      deliverables: [
        "Assignment 1 of 3 (Fill-in-the-Blank): Complete 3 Cloze Vocabulary & First-Principle blanks with Word Bank",
        "Assignment 2 of 3 (Daily Writing): Write a 30–60 word Primary Source Summary & Core Thesis Statement",
        "Assignment 3 of 3 (Daily Mastery Quiz): Pass the Day 1 Comprehension & Axiom Quiz (≥85% required)"
      ]
    },
    {
      dayNum: 2,
      dayName: "Tuesday · Day 2 (3 Daily Assignments)",
      title: "Analytical Formula Cloze, Step-by-Step Written Derivation & Daily Quiz",
      minutes: "45–50 mins / course",
      deliverables: [
        "Assignment 1 of 3 (Fill-in-the-Blank): Complete 3 Formula, Syntax, or Rule Application blanks",
        "Assignment 2 of 3 (Daily Writing): Compose a Step-by-Step Analytical Explanation or Socratic Argument",
        "Assignment 3 of 3 (Daily Mastery Quiz): Pass the Day 2 Problem-Solving & Analysis Quiz (≥85% required)"
      ]
    },
    {
      dayNum: 3,
      dayName: "Wednesday · Day 3 (3 Daily Assignments)",
      title: "Practicum Cloze, Lab/Proof/Essay Composition & Daily Quiz",
      minutes: "50–60 mins / course",
      deliverables: [
        "Assignment 1 of 3 (Fill-in-the-Blank): Complete 3 Scientific Method, Geometric Postulate, or Rhetoric blanks",
        "Assignment 2 of 3 (Daily Writing): Write your Formal Lab Conclusion (CER), Two-Column Proof Justification, or Essay Body Paragraph",
        "Assignment 3 of 3 (Daily Mastery Quiz): Pass the Day 3 Practicum & Methodology Quiz (≥85% required)"
      ]
    },
    {
      dayNum: 4,
      dayName: "Thursday · Day 4 (3 Daily Assignments)",
      title: "Cumulative Spiral Cloze (Weeks 1–10), Comparative Writing & Daily Quiz",
      minutes: "45–50 mins / course",
      deliverables: [
        "Assignment 1 of 3 (Fill-in-the-Blank): Complete 3 Cumulative Spiral Recall blanks from Weeks 1–10",
        "Assignment 2 of 3 (Daily Writing): Write a Cumulative Synthesis connecting Quarter 1 to Week 11 + Peer Reply",
        "Assignment 3 of 3 (Daily Mastery Quiz): Pass the Day 4 Cumulative Spiral Retention Quiz (≥85% required)"
      ]
    },
    {
      dayNum: 5,
      dayName: "Friday · Day 5 (3 Daily Assignments · Mastery Gate)",
      title: "Mastery Synthesis Cloze, Weekly Defense Essay & 85% Gatekeeper Exam",
      minutes: "45–60 mins / course",
      deliverables: [
        "Assignment 1 of 3 (Fill-in-the-Blank): Complete 3 Summative Term & Concept Mastery blanks",
        "Assignment 2 of 3 (Daily Writing): Compose the Weekly Capstone Synthesis & Worldview Reflection",
        "Assignment 3 of 3 (Daily Mastery Quiz): Pass the Summative Weekly Mastery Gatekeeper Exam (≥85% unlocks Week 12)"
      ]
    }
  ]
};

// Expand courses with a full 5-Day Weekly Module structure where EACH DAY has 3 Required Assignments:
// (1) Fill-in-the-Blank Cloze, (2) Daily Writing/Analysis Prompt, and (3) Daily Mastery Quiz (≥85%)
INITIAL_ACADEMY_DATA.courses.forEach((course) => {
  const baseTitle = course.title;
  const code = course.code;
  const dept = course.department;

  if (!course.lessons || course.lessons.length < 5) {
    const existing = course.lessons && course.lessons[0] ? course.lessons[0] : null;
    course.lessons = [
      {
        id: `${course.id}-d1`,
        unit: "WEEK 11 · MONDAY (DAY 1 · 3 ASSIGNMENTS)",
        title: existing ? existing.title : `Day 1: Foundational Principles & Primary Texts in ${baseTitle}`,
        duration: "50 mins",
        completed: true,
        masteryScore: 96,
        dailyTasks: { blankDone: true, writingDone: true, quizDone: true },
        videoChapter: `DAY 1 LECTURE · ${code} CORE SEMINAR`,
        readingHtml: existing
          ? existing.readingHtml
          : `<div class="lesson-callout"><strong>Day 1 Objective (${code}):</strong> Master the foundational definitions, axioms, and primary texts for Week 11 of <strong>${baseTitle}</strong>, then complete all <strong>3 Daily Assignments</strong> below (Fill-in-the-Blank, Writing Response, and Daily Quiz).</div><p>${course.description}</p>`,
        wordBank: ["Logos", "Axiom", "Primary", "85%", "Deductive"],
        fillInBlanks: [
          {
            before: `1. In classical scholarship, every valid demonstration in ${code} begins with a foundational first principle or `,
            answer: "Axiom",
            after: " before deriving secondary conclusions.",
            hint: "Starts with A (a self-evident first principle)"
          },
          {
            before: `2. Scholars in ${dept} verify claims by examining original `,
            answer: "Primary",
            after: " sources and empirical evidence rather than unverified opinion.",
            hint: "Original firsthand texts or observations"
          },
          {
            before: `3. The Greek term `,
            answer: "Logos",
            after: " signifies divine reason, intelligible word, and the rational order woven into creation.",
            hint: "Greek word for Reason / Word"
          }
        ],
        dailyWriting: {
          title: `Day 1 Writing Assignment: Core Thesis & First-Principle Summary (${code})`,
          prompt: `In 25–60 words, summarize the central thesis or governing law introduced in today's ${baseTitle} lecture and explain how it establishes order in ${dept}.`,
          minWords: 20,
          savedResponse: `In ${code}, the foundational principle establishes that all phenomena and texts in ${baseTitle} follow rational, intelligible order grounded in divine wisdom and verifiable primary evidence.`,
          exemplar: `Model Scholar Response: Today's lecture in ${code} demonstrates that foundational axioms and primary sources provide an objective anchor for ${baseTitle}, allowing us to reason deductively from cause to effect.`
        },
        practiceSet: [
          { prompt: `Define the primary first principle or axiom introduced in ${code} Week 11 and state how it connects to prior units.`, answerKey: "A first principle is a foundational truth from which subsequent propositions are deduced and verified." },
          { prompt: `Identify two primary sources or quantitative laws examined in today's ${baseTitle} reading.`, answerKey: "Primary textual/empirical evidence grounds all valid conclusions in classical and scientific inquiry." }
        ],
        resources: existing && existing.resources ? existing.resources : [
          { title: `${code} Week 11 Complete 5-Day Reading & 15-Assignment Workbook (18 Pages)`, type: "Weekly Workbook", size: "2.4 MB", content: `${code} WEEK 11 WORKBOOK: 5 Days × 3 Daily Assignments (Fill-in-the-Blank, Writing, and Mastery Quizzes).` }
        ],
        quiz: existing && existing.quiz && existing.quiz.length >= 2 ? [
          ...existing.quiz,
          {
            q: `How many daily assignments must a scholar complete each day in ${code} to achieve full daily mastery?`,
            options: [
              "3 Daily Assignments every day: (1) Fill-in-the-Blank Cloze, (2) Daily Writing Response, and (3) Daily Mastery Quiz (≥85%)",
              "Only 1 optional activity per month",
              "None",
              "Watching video only with no assignments"
            ],
            correct: 0,
            explanation: "Every single day requires the 3-Part Daily Mastery Triad: Fill-in-the-Blank, Classical Writing, and Daily Mastery Quiz."
          }
        ] : [
          {
            q: `What is the foundational objective of Day 1 in ${code}: ${baseTitle}?`,
            options: [
              "Establish first principles, key vocabulary, and primary source context before analytical problem-solving",
              "Skip directly to the final exam without reading",
              "Memorize answers without understanding causes",
              "Avoid taking notes"
            ],
            correct: 0,
            explanation: "Grammar and first principles always precede dialectic analysis and rhetorical synthesis."
          },
          {
            q: `What 3 daily assignments are required every day in ${code}?`,
            options: [
              "1. Fill-in-the-Blank Cloze, 2. Daily Writing Analysis, and 3. Daily Mastery Quiz (≥85%)",
              "Only attendance",
              "Only ungraded reading",
              "None"
            ],
            correct: 0,
            explanation: "Combining vocabulary/concept recall (Fill-in-the-Blank), expressive synthesis (Writing), and objective testing (Quiz) ensures complete daily mastery."
          }
        ]
      },
      {
        id: `${course.id}-d2`,
        unit: "WEEK 11 · TUESDAY (DAY 2 · 3 ASSIGNMENTS)",
        title: `Day 2: Analytical Drill, Formula/Syntax Cloze & Socratic Writing`,
        duration: "50 mins",
        completed: true,
        masteryScore: 94,
        dailyTasks: { blankDone: true, writingDone: true, quizDone: true },
        videoChapter: `DAY 2 WORKED EXAMPLES · ${code}`,
        readingHtml: `
          <div class="lesson-callout">
            <strong>Day 2 Triad (${code} · 3 Daily Assignments):</strong> Today moves from foundational comprehension (Day 1) to active analytical application: complete the <strong>Day 2 Fill-in-the-Blank Drill</strong>, the <strong>Day 2 Analytical/Socratic Writing</strong>, and the <strong>Day 2 Mastery Quiz</strong>.
          </div>
          <h3>Guided Analytical Practice &amp; Socratic Discourse</h3>
          <p>Show every intermediate step in your analytical writing below—answers without causal justification do not meet academy rhetoric standards.</p>
        `,
        wordBank: ["Evidence", "Step", "Syllogism", "Premise", "Cause"],
        fillInBlanks: [
          {
            before: `1. In ${code} analytical problem-solving, every intermediate `,
            answer: "Step",
            after: " must be justified by a stated rule, law, or grammatical principle.",
            hint: "Starts with S (each stage of a solution)"
          },
          {
            before: `2. A valid Socratic argument supports its thesis with specific textual or empirical `,
            answer: "Evidence",
            after: " rather than unsupported assertion.",
            hint: "Starts with E (proof/facts from the text or lab)"
          },
          {
            before: `3. True scientific and classical knowledge consists in understanding the underlying `,
            answer: "Cause",
            after: " why a proposition holds true.",
            hint: "Starts with C (the reason/origin of an effect)"
          }
        ],
        dailyWriting: {
          title: `Day 2 Writing Assignment: Step-by-Step Analytical Derivation & Socratic Claim (${code})`,
          prompt: `Write a 25–60 word analytical paragraph solving today's core problem in ${code} step-by-step OR defending your position on this week's Socratic question with at least one specific citation.`,
          minWords: 20,
          savedResponse: `Step 1: State the governing premise from ${code} Week 11. Step 2: Apply the analytical rule to the primary case. Step 3: Conclude that the thesis holds universally with verified textual evidence.`,
          exemplar: `Model Scholar Response: Beginning from the primary premise established on Day 1, we apply the governing rule step-by-step and cite direct evidence from the text to prove our conclusion.`
        },
        practiceSet: [
          { prompt: `Problem Set Item #1 (${code}): State the governing rule or formula and apply it step-by-step to the first primary case.`, answerKey: "Step 1: State given values/premises. Step 2: Apply governing principle. Step 3: Verify units and logical validity." },
          { prompt: `Problem Set Item #2 (${code}): Identify the logical fallacy or calculation error in a common misconception from this unit.`, answerKey: "Errors arise when an unverified assumption replaces a proven axiom or conservation law." }
        ],
        resources: [
          { title: `${code} Day 2: 15-Problem Analytical Drill & Worked Solutions`, type: "Problem Set", size: "1.3 MB", content: `15 Graded Analytical Problems for ${code} Week 11 with step-by-step worked solutions.` }
        ],
        quiz: [
          {
            q: `Why does ${code} require full step-by-step justification on Tuesday analytical exercises?`,
            options: [
              "Because true mastery consists in understanding the causal reasoning behind each step, not merely guessing a final answer",
              "To make the page look longer",
              "Because final answers do not matter at all",
              "To avoid using definitions"
            ],
            correct: 0,
            explanation: "Showing every step trains the mind in rigorous, transparent demonstration."
          },
          {
            q: `What must accompany your claim in the Day 2 Socratic Writing assignment for ${code}?`,
            options: [
              "Specific textual citations, mathematical derivation steps, or empirical evidence from the unit",
              "A single word ('Agree')",
              "An unrelated opinion without evidence",
              "Blank space"
            ],
            correct: 0,
            explanation: "Socratic dialogue requires clear claims supported by textual or empirical evidence."
          }
        ]
      },
      {
        id: `${course.id}-d3`,
        unit: "WEEK 11 · WEDNESDAY (DAY 3 · 3 ASSIGNMENTS)",
        title: `Day 3: Practicum Cloze, Lab/Proof/Essay Writing & Methodology Quiz`,
        duration: "60 mins",
        completed: false,
        masteryScore: null,
        dailyTasks: { blankDone: false, writingDone: false, quizDone: false },
        videoChapter: `DAY 3 PRACTICUM & LAB DEMONSTRATION · ${code}`,
        readingHtml: `
          <div class="lesson-callout">
            <strong>Day 3 Practicum Triad (${code} · 3 Daily Assignments):</strong> Wednesday is our deep-work production day—complete the <strong>Practicum Fill-in-the-Blank</strong>, compose your <strong>Formal Lab / Deductive Proof / Essay Paragraph</strong>, and pass the <strong>Day 3 Mastery Quiz</strong>.
          </div>
          <h3>Required Day 3 Triad</h3>
          <p>• <strong>Assignment 1 (Fill-in-the-Blank):</strong> Master the methodology terms (Hypothesis, Theorem, Thesis).<br/>
          • <strong>Assignment 2 (Daily Writing):</strong> Write your Claim-Evidence-Reasoning (CER) lab conclusion, two-column proof justification, or essay paragraph.<br/>
          • <strong>Assignment 3 (Daily Quiz):</strong> Score ≥ 85% on the Day 3 Practicum Quiz.</p>
        `,
        wordBank: ["Hypothesis", "Theorem", "Thesis", "Control", "Conclusion"],
        fillInBlanks: [
          {
            before: `1. In scientific investigation, a testable prediction formulated before conducting an experiment is called a `,
            answer: "Hypothesis",
            after: ".",
            hint: "Starts with H (testable scientific prediction)"
          },
          {
            before: `2. In classical rhetoric and essay composition, the governing declarative claim of an argument is its `,
            answer: "Thesis",
            after: " statement.",
            hint: "Starts with T (central claim of an essay)"
          },
          {
            before: `3. In mathematics, a proposition that has been deductively proven from axioms and postulates is a `,
            answer: "Theorem",
            after: ".",
            hint: "Starts with Th (a proven mathematical proposition)"
          }
        ],
        dailyWriting: {
          title: `Day 3 Writing Assignment: Practicum Synthesis (CER Lab / Proof / Essay Paragraph)`,
          prompt: `Compose a 25–75 word Practicum Synthesis for ${code}: state your Claim/Thesis (or To-Prove statement), present the supporting Evidence/Data/Axioms, and explain the Reasoning that proves your conclusion.`,
          minWords: 20,
          savedResponse: "",
          exemplar: `Model Scholar Response: Claim: Our Week 11 investigation in ${code} confirms the governing law within 1.8% margin of error. Evidence: Across three controlled trials, the measured ratio remained constant. Reasoning: This empirical consistency validates the theoretical theorem derived on Day 1.`
        },
        practiceSet: [
          { prompt: `Practicum Check #1: State your governing thesis, testable hypothesis, or geometric proposition (To Prove) for Week 11.`, answerKey: "Must be a clear, falsifiable or demonstrable declarative proposition." },
          { prompt: `Practicum Check #2: List the primary evidence, experimental variables, or axioms used to establish your conclusion.`, answerKey: "At least three verified premises, data trials, or textual citations." }
        ],
        resources: [
          { title: `${code} Day 3 Practicum: Lab Protocol / Proof Template / Essay Rubric`, type: "Practicum Packet", size: "1.5 MB", content: `Complete instructions and grading rubric for the Week 11 Wednesday Practicum in ${code}.` }
        ],
        quiz: [
          {
            q: `What are the three components of a rigorous Day 3 Practicum argument in ${code}?`,
            options: [
              "Claim/Thesis (or Hypothesis), Verified Evidence/Data/Axioms, and Logical Reasoning connecting evidence to conclusion",
              "Guessing without data",
              "Skipping the experiment and proof",
              "Writing a title only"
            ],
            correct: 0,
            explanation: "Whether in a science lab (CER), geometry proof, or humanities essay, every rigorous argument unites Claim, Evidence, and Reasoning."
          },
          {
            q: `Why must all 3 Daily Assignments (Fill-in-the-Blank, Writing, and Quiz) be completed on Day 3?`,
            options: [
              "So vocabulary accuracy, written expression, and conceptual comprehension are all verified every single day",
              "They are optional",
              "Only one matters",
              "None of the above"
            ],
            correct: 0,
            explanation: "Completing all 3 assignments ensures multi-modal mastery every day of the week."
          }
        ]
      },
      {
        id: `${course.id}-d4`,
        unit: "WEEK 11 · THURSDAY (DAY 4 · 3 ASSIGNMENTS)",
        title: `Day 4: Cumulative Spiral Cloze (Weeks 1–10), Synthesis Writing & Quiz`,
        duration: "50 mins",
        completed: false,
        masteryScore: null,
        dailyTasks: { blankDone: false, writingDone: false, quizDone: false },
        videoChapter: `DAY 4 SPIRAL REVIEW & RECITATION · ${code}`,
        readingHtml: `
          <div class="lesson-callout">
            <strong>Day 4 Cumulative Spiral Triad (${code} · 3 Daily Assignments):</strong> “Repetitio est mater studiorum” — Repetition is the mother of learning. Complete today's <strong>Cumulative Spiral Fill-in-the-Blank</strong>, <strong>Spiral Synthesis Writing</strong>, and <strong>Spiral Mastery Quiz</strong>.
          </div>
          <h3>Cumulative Spiral Review (Weeks 1–10 + Week 11)</h3>
          <p>To prevent "cramming and forgetting," every Thursday interleaves 40% prior material from Weeks 1–10 with 60% current Week 11 material across all 3 daily assignments.</p>
        `,
        wordBank: ["Memoria", "Cumulative", "Forty", "Vertical", "Synthesis"],
        fillInBlanks: [
          {
            before: `1. Every Thursday in ${code} includes a `,
            answer: "Cumulative",
            after: " spiral review that reaches back to Weeks 1–10 so foundational concepts are never forgotten.",
            hint: "Starts with C (building up across all prior weeks)"
          },
          {
            before: `2. Specifically, `,
            answer: "Forty",
            after: " percent (40%) of Thursday's spiral review tests concepts from earlier weeks of the term.",
            hint: "Starts with F (40%)"
          },
          {
            before: `3. Combining Quarter 1 foundations with Week 11 discoveries produces a higher-order `,
            answer: "Synthesis",
            after: " of knowledge.",
            hint: "Starts with S (uniting parts into a whole)"
          }
        ],
        dailyWriting: {
          title: `Day 4 Writing Assignment: Cumulative Spiral Connection (Weeks 1–10 → Week 11)`,
          prompt: `In 25–60 words, explain how one foundational concept you mastered in Quarter 1 (Weeks 1–9) of ${code} serves as a necessary building block for this week's Week 11 topic.`,
          minWords: 20,
          savedResponse: "",
          exemplar: `Model Scholar Response: In Quarter 1 of ${code}, we mastered the foundational definitions and conservation laws; this week in Week 11, those exact Quarter 1 axioms serve as the first premises for our multi-step proofs and primary source analysis.`
        },
        practiceSet: [
          { prompt: `Spiral Review #1 (Weeks 1–5 Recall): Connect a foundational concept from Quarter 1 of ${code} to this week's topic.`, answerKey: "Every unit in the 36-week sequence builds vertically upon Quarter 1 foundations." },
          { prompt: `Spiral Review #2 (Weeks 6–10 Recall): Solve/Explain the bridge concept that linked last unit to Week 11.`, answerKey: "Demonstrates cumulative retention across units." }
        ],
        resources: [
          { title: `${code} Weeks 1–11 Cumulative Spiral Review Sheet & Memory Flashcards`, type: "Spiral Review", size: "1.1 MB", content: `Cumulative review problems covering Weeks 1 through 11 of ${code}.` }
        ],
        quiz: [
          {
            q: `What proportion of Thursday's Spiral Review in ${code} tests concepts from earlier weeks (Weeks 1–10)?`,
            options: [
              "40% cumulative review from Weeks 1–10 and 60% from the current week",
              "0% from earlier weeks",
              "Only questions from Kindergarten",
              "None"
            ],
            correct: 0,
            explanation: "Interleaving prior material (40%) with current material (60%) cements permanent mastery."
          },
          {
            q: `Why does Thursday require both a Fill-in-the-Blank recall exercise and a Cumulative Writing connection?`,
            options: [
              "Fill-in-the-blank verifies exact terminology recall while writing proves the scholar can connect prior units to new material",
              "To skip Friday's exam",
              "Because vocabulary doesn't matter",
              "Only for decoration"
            ],
            correct: 0,
            explanation: "Exact recall + written synthesis prepares the scholar for Friday's 85% Mastery Gatekeeper."
          }
        ]
      },
      {
        id: `${course.id}-d5`,
        unit: "WEEK 11 · FRIDAY (DAY 5 · MASTERY GATEKEEPER · 3 ASSIGNMENTS)",
        title: `Day 5: Summative Cloze, Capstone Defense Essay & 85% Mastery Exam`,
        duration: "55 mins",
        completed: false,
        masteryScore: null,
        dailyTasks: { blankDone: false, writingDone: false, quizDone: false },
        videoChapter: `DAY 5 SUMMATIVE MASTERY BRIEFING · ${code}`,
        readingHtml: `
          <div class="lesson-callout" style="border-left-color:var(--emerald-600); background:#F4FAF7;">
            <strong>Friday 85% Mastery Gatekeeper Triad (${code} · 3 Final Assignments):</strong> To unlock Week 12, complete today's <strong>Summative Cloze Verification</strong>, write your <strong>Weekly Synthesis &amp; Worldview Defense</strong>, and score <strong>≥ 85%</strong> on the <strong>Summative Mastery Exam</strong>.
          </div>
          <h3>What Happens If You Score Below 85%?</h3>
          <p>At Christ Infinity Academy, a score below 85% automatically opens a <strong>Targeted Remediation Lesson &amp; Form B Retake Exam</strong> so you master the missing concept before moving forward.</p>
        `,
        wordBank: ["Mastery", "Remediation", "Carnegie", "Portfolio", "Truth"],
        fillInBlanks: [
          {
            before: `1. Christ Infinity Academy requires a minimum score of 85% `,
            answer: "Mastery",
            after: " on Friday's summative assessment before unlocking the next week's module.",
            hint: "Starts with M (complete command of a subject)"
          },
          {
            before: `2. If a scholar scores below 85%, the platform assigns targeted `,
            answer: "Remediation",
            after: " and a Form B retake rather than passing the student forward with learning gaps.",
            hint: "Starts with R (corrective re-teaching and practice)"
          },
          {
            before: `3. All completed weekly essays, labs, proofs, and quizzes are archived in the student's State & Private `,
            answer: "Portfolio",
            after: " for official Carnegie credit verification.",
            hint: "Starts with P (permanent academic binder/record)"
          }
        ],
        dailyWriting: {
          title: `Day 5 Writing Assignment: Weekly Capstone Synthesis & Worldview Defense (${code})`,
          prompt: `In 25–75 words, synthesize the most important truth, law, or historical insight you mastered across Days 1–5 of Week 11 in ${code}, and explain how it reflects wisdom, order, or stewardship.`,
          minWords: 20,
          savedResponse: "",
          exemplar: `Model Scholar Response: Across Week 11 of ${code}, we proved how foundational axioms govern complex applications and verified our findings through primary evidence. This harmony between rational logic and observable order equips us to pursue truth with humility and rigor.`
        },
        practiceSet: [
          { prompt: `Final Pre-Exam Readiness Check (${code}): Verify that your Day 1–5 Fill-in-the-Blanks, Daily Writings, and Weekly Deliverable are logged.`, answerKey: "All 15 weekly assignments (3 per day × 5 days) complete and verified." }
        ],
        resources: [
          { title: `${code} Week 11 Remediation & Enrichment Packet (Form B Prep)`, type: "Mastery Packet", size: "1.4 MB", content: `Targeted re-teaching notes and additional worked examples for ${code} Week 11.` }
        ],
        quiz: [
          {
            q: `What happens if a scholar scores below 85% on the Friday Summative Mastery Exam in ${code}?`,
            options: [
              "The platform triggers a Targeted Remediation Module and Form B Retake so the scholar achieves ≥85% mastery before advancing",
              "The scholar is pushed ahead with gaps in understanding",
              "The course is deleted",
              "Nothing happens"
            ],
            correct: 0,
            explanation: "Mastery-based progression ensures every scholar builds on solid ground (≥85%) before advancing to the next week."
          },
          {
            q: `How many total structured daily assignments does a scholar complete across the 5-day week in EACH course (${code})?`,
            options: [
              "15 Daily Assignments per course per week (3 per day: Fill-in-the-Blank + Daily Writing + Daily Mastery Quiz × 5 days)",
              "Only 1 quiz every 9 weeks",
              "Zero written assignments",
              "Only 2 questions per week"
            ],
            correct: 0,
            explanation: "3 daily assignments × 5 days = 15 structured mastery checkpoints per course every week (90–105 total across 6–7 courses)."
          }
        ]
      }
    ];
  }

  // Enrich every daily lesson (Days 1–5) with an In-Depth Topic-of-the-Day Teaching Section + Complete Parent Co-Teacher Guide
  course.lessons.forEach((lesson, idx) => {
    const dayNum = idx + 1;
    const dayLabels = [
      "Monday (Day 1 · Foundational Exposition & Primary Texts)",
      "Tuesday (Day 2 · Analytical Application & Socratic Discourse)",
      "Wednesday (Day 3 · Deep Practicum: Lab, Proof, or Essay Composition)",
      "Thursday (Day 4 · Cumulative Spiral Retention & Synthesis)",
      "Friday (Day 5 · Summative 85% Mastery Gatekeeper & Worldview Defense)"
    ];
    const dayLabel = dayLabels[idx] || `Day ${dayNum}`;

    // Department-specific deep pedagogical content
    const deptProfiles = {
      "Theology & Worldview": {
        anchorVerse: "Colossians 1:17 — “And He is before all things, and by Him all things consist.”",
        methodology: "Grammatical-Historical Exegesis, Covenant Architecture, and Classical Apologetics",
        coreMechanism: `In ${baseTitle} (${code}), we examine how Scripture unfolds as a unified covenantal narrative where divine wisdom (Logos) establishes moral, historical, and natural order. Rather than reading isolated verses out of context, scholars trace literary structure (chiasm, parallelism, and symmetry), original Hebrew/Greek terms, and doctrinal synthesis.`,
        realWorldAnalogy: "Think of creation and Scripture like a master cathedral blueprint: Days 1–3 build the structural walls and rooms, while Days 4–6 fill each room with light, life, and stewards."
      },
      "Mathematics": {
        anchorVerse: "Proverbs 25:2 — “It is the glory of God to conceal a thing: but the honour of kings is to search out a matter.”",
        methodology: "Deductive Proof from Axioms, Quantitative Conservation, and Step-by-Step Algorithmic Reasoning",
        coreMechanism: `In ${baseTitle} (${code}), numbers and geometric figures are never treated as arbitrary tricks to memorize. Every operation is governed by immutable axioms (such as the Commutative, Associative, and Distributive Laws, or Euclid’s Five Postulates). When solving an equation or constructing a proof, each line must preserve equality or deduce a necessary truth from the line before it.`,
        realWorldAnalogy: "Think of a mathematical proof or equation like a balanced brass scale or a bridge: whatever operation you perform on one side, or whatever step you take, must be supported by a solid structural pillar (an axiom or definition)."
      },
      "Natural Sciences": {
        anchorVerse: "Psalm 19:1 — “The heavens declare the glory of God; and the firmament sheweth his handywork.”",
        methodology: "Quantitative Observation, Controlled Experimentation, and Claim-Evidence-Reasoning (CER)",
        coreMechanism: `In ${baseTitle} (${code}), we investigate the physical and biological cosmos as an intelligible book of order. Scientists formulate a testable Hypothesis, isolate a single Independent Variable while keeping Control Variables constant, measure the Dependent Variable across multiple trials, and calculate Percent Error to verify theoretical laws against empirical reality.`,
        realWorldAnalogy: "Think of a scientific experiment like testing a recipe: if you change five ingredients at once, you cannot know which one made the bread rise. You must change only one variable (the Independent Variable) and measure the result carefully."
      },
      "Literature & Rhetoric": {
        anchorVerse: "Proverbs 16:24 — “Pleasant words are as an honeycomb, sweet to the soul, and health to the bones.”",
        methodology: "Close Textual Analysis, Classical Progymnasmata Composition, and Aristotelian Rhetoric (Ethos, Pathos, Logos)",
        coreMechanism: `In ${baseTitle} (${code}), scholars read great epic, poetic, and philosophical works to discern how authors craft meaning through syntax, metaphor, and moral conflict. In composition, every paragraph is built around a declarative Thesis Statement supported by direct primary-source quotations and logical commentary explaining how the evidence proves the claim.`,
        realWorldAnalogy: "Think of an essay like a courtroom argument: your Thesis is the verdict you want the jury to reach, your Quotations are the eyewitness exhibits, and your Reasoning explains why those exhibits prove your case."
      },
      "History & Civilization": {
        anchorVerse: "Deuteronomy 32:7 — “Remember the days of old, consider the years of many generations.”",
        methodology: "Primary Source Historiography, Chronological Causation, and Constitutional/Civic Analysis",
        coreMechanism: `In ${baseTitle} (${code}), history is studied not as a random list of dates, but as a moral and civilizational drama of ideas, covenants, institutions, and consequences. Scholars distinguish firsthand Primary Sources (charters, letters, inscriptions, treaties) from Secondary commentaries, analyzing authorial intent, historical context, and long-term impact.`,
        realWorldAnalogy: "Think of a historian as a detective arriving at a scene: you don't rely on third-hand rumors when you can read the original letters, treaties, and eyewitness accounts written by the people who were actually there."
      },
      "Classical Languages & Arts": {
        anchorVerse: "John 1:1 — “In principio erat Verbum (In the beginning was the Word).”",
        methodology: "Morphological Parsing (Case, Number, Gender, Tense, Voice, Mood) and Etymological Derivative Analysis",
        coreMechanism: `In ${baseTitle} (${code}), Latin is an inflected language where word endings (terminations) determine grammatical function rather than word order alone. By parsing a noun’s Declension, Case, Number, and Gender—or a verb’s Person, Number, Tense, Voice, and Mood—scholars unlock the precision of classical prose, sacred music, and over 60% of English scientific and academic vocabulary.`,
        realWorldAnalogy: "Think of Latin word endings like color-coded name badges on players on a field: even if the players move around the sentence, their badge ending (-a, -am, -ae, -o) tells you immediately who is the Subject and who is the Direct Object."
      },
      "Physical Education & Health": {
        anchorVerse: "1 Corinthians 6:19–20 — “Know ye not that your body is the temple of the Holy Ghost... therefore glorify God in your body.”",
        methodology: "Exercise Physiology, Cardiovascular Conditioning, Nutritional Biochemistry, and Emergency First Aid/CPR",
        coreMechanism: `In ${baseTitle} (${code}), physical stewardship unites anatomical science with disciplined daily habits. Scholars study how aerobic and anaerobic training strengthen stroke volume and mitochondrial efficiency, how macronutrients fuel cellular metabolism, and how evidence-based emergency protocols (CPR compression depth/rate) preserve human life.`,
        realWorldAnalogy: "Think of the human body as a high-precision instrument: consistent daily training, restorative sleep, and clean fuel keep both the physical heart and the scholar's mind sharp for study."
      }
    };

    const prof = deptProfiles[dept] || deptProfiles["Theology & Worldview"];
    const blanks = lesson.fillInBlanks || [];

    // Build comprehensive vocabulary table covering every blank answer + core terms
    const vocabRows = [
      ...blanks.map((b, bIdx) => ({
        term: b.answer,
        category: `Day ${dayNum} Cloze Key Term #${bIdx + 1}`,
        definition: `${b.before.replace(/^\d+\.\s*/, "")} [${b.answer}] ${b.after}`,
        studyTip: `Hint / Memory Hook: ${b.hint}. Required for Daily Assignment 1 (Fill-in-the-Blank #${bIdx + 1}).`
      })),
      {
        term: "Logos & Ordo (Rational Order)",
        category: `${dept} First Principle`,
        definition: "The classical principle that all truths in creation and human language are coherent, non-contradictory, and discoverable through disciplined inquiry.",
        studyTip: "Use this concept to strengthen your Daily Assignment 2 (Classical Writing) thesis statement."
      }
    ];

    lesson.deepTeaching = {
      dayHeader: `${code} · ${dayLabel}`,
      anchorVerse: prof.anchorVerse,
      methodology: prof.methodology,
      bigIdea: `Today’s lesson in ${baseTitle} (${lesson.title}) equips you to understand not merely "what" the answer is, but "why" it is true from first principles. Read the 4 teaching sections below carefully—every answer for today's Fill-in-the-Blank Cloze, Daily Writing Response, and 85% Mastery Quiz is taught step-by-step right here.`,
      sections: [
        {
          stepBadge: "SECTION 1 OF 4 · CORE CONCEPT EXPOSITION",
          heading: `1. Understanding Today’s Topic in Depth: ${lesson.title}`,
          body: `${prof.coreMechanism} Specifically on ${dayLabel}, we focus on moving from surface familiarity to complete conceptual clarity. When studying ${baseTitle}, always begin by identifying the governing definition or law, observing how each part relates to the whole, and verifying every claim against primary evidence.`,
          keyTakeaway: `Core Takeaway: Never memorize an isolated fact without connecting it to its governing cause or first principle (Axiom) in ${code}.`
        },
        {
          stepBadge: "SECTION 2 OF 4 · HOW IT WORKS STEP-BY-STEP",
          heading: `2. Step-by-Step Mechanism & Real-World Analogy`,
          body: `${prof.realWorldAnalogy} In today's ${dayLabel} work, we apply a three-stage classical method: (1) Grammar — define the exact terms (${blanks.map((b) => b.answer).join(", ")}); (2) Logic — trace the step-by-step causal chain or proof showing how the premises lead to the conclusion; and (3) Rhetoric — articulate your conclusion clearly in complete, well-supported sentences.`,
          keyTakeaway: `Key Terms to Master Today: ${blanks.map((b) => `"${b.answer}"`).join(", ")} — these exact concepts appear in your Fill-in-the-Blank Cloze and Mastery Quiz below.`
        },
        {
          stepBadge: "SECTION 3 OF 4 · PREPARING FOR TODAY'S WRITING & QUIZ",
          heading: `3. How to Construct a Full-Credit Analytical Argument Today`,
          body: `To earn 100% on today's Daily Writing Assignment and pass the ≥85% Mastery Gatekeeper Quiz, structure your reasoning using the Classical Triad: first, state a clear declarative Thesis/Claim; second, cite specific Evidence, Data, or Axioms from today's reading; and third, explain the logical Reasoning that links your evidence to your conclusion. Avoid vague one-word answers—always explain the "why."`,
          keyTakeaway: `Mastery Rule: Christ Infinity Academy requires ≥85% accuracy on daily quizzes so you never move forward with hidden gaps in understanding.`
        }
      ],
      vocabularyTable: vocabRows,
      workedExamples: [
        {
          badge: `WORKED EXAMPLE 1 · MASTERING TODAY'S KEY CONCEPTS (${code})`,
          title: `How to Analyze & Complete Today's Vocabulary & Concept Cloze`,
          problem: `Question: How do the key terms (${blanks.map((b) => b.answer).join(", ")}) fit together in ${lesson.title}?`,
          step1: `Step 1 (Identify the Context): Read each sentence stem carefully and ask what grammatical or logical role the missing term plays.`,
          step2: `Step 2 (Match the First Principle): Connect the clue in parentheses to the exact technical term: ${blanks.map((b, i) => `Blank #${i + 1} = "${b.answer}" (${b.hint})`).join("; ")}.`,
          step3: `Step 3 (Verify Coherence): Re-read the completed sentence aloud to confirm that it states a true, grammatically complete proposition in ${dept}.`,
          pitfall: `Common Pitfall to Avoid: Do not guess randomly from the Word Bank—read the surrounding words before and after the blank to verify the exact definition.`
        },
        {
          badge: `WORKED EXAMPLE 2 · MODELING TODAY'S DAILY WRITING ASSIGNMENT`,
          title: `How to Write a 98–100% Classical Analytical Paragraph`,
          problem: `Prompt: ${lesson.dailyWriting ? lesson.dailyWriting.prompt : "Summarize today's core thesis and supporting evidence."}`,
          step1: `Step 1 (Claim / Thesis Sentence): Open with a clear declarative sentence naming the core principle of ${code} Week 11.`,
          step2: `Step 2 (Evidence / Step-by-Step Support): Provide at least one concrete example, primary-source reference, or mathematical/scientific law from today's lesson.`,
          step3: `Step 3 (Conclusion / Synthesis): Conclude by stating why this principle demonstrates rational order: "${lesson.dailyWriting ? lesson.dailyWriting.exemplar : ""}"`,
          pitfall: `Common Pitfall to Avoid: Writing fragments under 15 words or stating an opinion ("I liked this lesson") without citing a specific concept or law from the text.`
        }
      ]
    };

    lesson.parentGuide = {
      dayTitle: `${code} (${baseTitle}) — ${dayLabel}`,
      quickOverview: `Today your scholar is studying "${lesson.title}" in ${baseTitle}. You do NOT need prior expertise in ${dept} to guide them—everything you need to explain the big idea, ask 3 great kitchen-table questions, and check their 3 daily assignments is right below.`,
      explainIn60Seconds: `${prof.realWorldAnalogy} In plain English, today’s lesson teaches your child how to move from basic definitions (${blanks.map((b) => b.answer).join(", ")}) to explaining *why* a rule or historical/scientific truth works step-by-step.`,
      coachingScript: `“Tell me in your own words what the main idea of today’s ${code} lesson is. Before you submit your 3 daily assignments, show me how you matched the 3 Fill-in-the-Blank words and read your Daily Writing paragraph out loud so we can hear if your sentence is clear and complete.”`,
      socraticQuestions: [
        {
          q: `1. “What are the 3 key vocabulary/concept words in today’s Fill-in-the-Blank, and what does each one mean in your own words?”`,
          listenFor: `Listen for your student to name "${blanks.map((b) => b.answer).join('", "')}" and explain how each term relates to ${lesson.title}.`
        },
        {
          q: `2. “If you had to teach today’s ${code} topic to a younger sibling in 30 seconds using an everyday example, what analogy would you use?”`,
          listenFor: `Listen for the analogy from today's teaching section (${prof.realWorldAnalogy}) or a clear cause-and-effect explanation.`
        },
        {
          q: `3. “What is the main claim of your Daily Writing paragraph today, and what piece of evidence from the lesson did you use to prove it?”`,
          listenFor: `Listen for a complete thesis sentence + a specific fact, rule, axiom, or textual citation (model exemplar: "${lesson.dailyWriting ? lesson.dailyWriting.exemplar : ""}").`
        }
      ],
      troubleshootingTips: [
        {
          symptom: `If your student is stuck on Daily Assignment 1 (Fill-in-the-Blank) or confusing the terms:`,
          fix: `Have them scroll up to "Section 2 & Vocabulary Table" in the Deep Teaching Guide on this page, where all 3 exact blank words (${blanks.map((b) => b.answer).join(", ")}) are defined in order with hints.`
        },
        {
          symptom: `If your student has "writer's block" on Daily Assignment 2 (Daily Writing):`,
          fix: `Have them answer out loud first using 3 simple sentences: (1) "Today's main principle is...", (2) "We see this proven by...", (3) "This matters because...". Or click "Insert Model Draft" to see how a scholar structures the paragraph, then adapt it in their own words.`
        }
      ],
      answerKeySummary: {
        blanksAnswers: blanks.map((b, i) => `Blank #${i + 1}: "${b.answer}" (${b.hint})`),
        writingModel: lesson.dailyWriting ? lesson.dailyWriting.exemplar : "Clear thesis statement + primary evidence + logical conclusion (20–75 words).",
        quizAnswers: (lesson.quiz || []).map((q, qi) => `Q${qi + 1}: "${q.options[q.correct]}" — Why: ${q.explanation}`)
      }
    };
  });
});

// ==================== INVITE-ONLY AUTHENTICATION & ROLE-BASED ACCESS CONTROL (RBAC) ====================
INITIAL_ACADEMY_DATA.authConfig = {
  currentRole: "parent", // "student" | "parent" | "teacher"
  activeUserEmail: "parent@vancefamily.org",
  activeUserName: "David & Sarah Vance (Parent / Co-Teacher)",
  parentPin: "2026",
  parentPinVerified: true,
  requireInviteForSignup: true,
  inviteCodes: [
    { code: "CIA-2026-VANCE", family: "Vance Family Household (Grades 6, 7, 10)", role: "Family & Scholars", status: "Verified & Active", created: "Aug 15, 2026" },
    { code: "CIA-2026-SCHOLAR", family: "Approved New Scholar Admission", role: "Student (Grades 6–12)", status: "Ready for Redemption", created: "Nov 10, 2026" },
    { code: "CIA-2026-FACULTY", family: "Classical Faculty & Department Chairs", role: "Teacher / Admin", status: "Verified & Active", created: "Aug 01, 2026" }
  ]
};

// ==================== COMPLETE 36-WEEK (WEEK 1 TO WEEK 36 · 180 DAYS) CURRICULUM ENGINE ====================
const GRADE_6_36_WEEK_MAPS = {
  "theo-601": [
    "Week 1: Creation ex Nihilo & the Architecture of Genesis 1",
    "Week 2: The Image of God (Imago Dei) & Human Dominion in Genesis 2",
    "Week 3: The Fall, Cosmic Fracture & the Protoevangelium (Genesis 3:15)",
    "Week 4: Cain, Abel & the Moral Law Before Sinai",
    "Week 5: The Noahic Covenant, Judgment & Preservation of the Cosmos",
    "Week 6: The Tower of Babel & the Table of Nations (Genesis 10–11)",
    "Week 7: The Call of Abraham & the Unconditional Promise (Genesis 12–15)",
    "Week 8: Isaac, the Binding on Moriah & Covenant Typology",
    "Week 9: Quarter 1 Cumulative Mastery Exam & Patriarchal Synthesis",
    "Week 10: Jacob, Bethel & the Provenance of the Twelve Tribes",
    "Week 11: Joseph in Egypt — Divine Providence in Suffering (Genesis 37–50)",
    "Week 12: Moses, the Burning Bush & the Divine Name (YHWH)",
    "Week 13: The Ten Plagues vs. the False Gods of Egypt",
    "Week 14: The Passover Lamb & the Crossing of the Red Sea",
    "Week 15: Sinai, the Decalogue & the Moral Foundation of Law",
    "Week 16: The Tabernacle Blueprint — Sacred Geometry & Worship",
    "Week 17: Levitical Offerings, Holiness & Atonement",
    "Week 18: Quarter 2 Midterm Examination & Pentateuch Portfolio Defense",
    "Week 19: Wilderness Wanderings, Numbers & Joshua's Conquest",
    "Week 20: The Cycle of the Judges & the Faithfulness of Ruth",
    "Week 21: Samuel, King Saul & the Rise of the Monarchy",
    "Week 22: The Davidic Covenant (2 Samuel 7) & the Messianic Line",
    "Week 23: Hebrew Poetry & the Theology of the Psalms",
    "Week 24: Solomon's Temple & the Wisdom of Proverbs (Fear of the Lord)",
    "Week 25: Ecclesiastes, Job & the Problem of Suffering",
    "Week 26: The Divided Kingdom — Elijah & Elisha",
    "Week 27: Quarter 3 Cumulative Mastery Exam & Wisdom Literature Essay",
    "Week 28: Isaiah & the Prophecies of the Suffering Servant",
    "Week 29: Jeremiah, the Exile & the Promise of the New Covenant",
    "Week 30: Ezekiel, Daniel & Sovereignty Over World Empires",
    "Week 31: Ezra, Nehemiah & the Post-Exilic Restoration",
    "Week 32: The Intertestamental Period & the Fulness of Time",
    "Week 33: The Incarnation of the Logos (John 1 & Luke 1–2)",
    "Week 34: Christ the Fulfillment of Prophet, Priest & King",
    "Week 35: The Great Commission & Christian Worldview Stewardship",
    "Week 36: Quarter 4 Final Comprehensive Examination & Year-End Defense"
  ],
  "math-601": [
    "Week 1: Place Value, Base-10 Exponential Notation & Whole Number Axioms",
    "Week 2: Commutative, Associative & Distributive Laws of Arithmetic",
    "Week 3: Order of Operations (PEMDAS) & Multi-Step Numerical Expressions",
    "Week 4: Divisibility Rules (2, 3, 4, 5, 6, 8, 9, 10) & Mathematical Proofs",
    "Week 5: Prime vs. Composite Numbers & the Sieve of Eratosthenes",
    "Week 6: Prime Factorization & Fundamental Theorem of Arithmetic",
    "Week 7: Greatest Common Factor (GCF) & Euclidean Algorithm",
    "Week 8: Least Common Multiple (LCM) & Periodic Synchronization",
    "Week 9: Quarter 1 Cumulative Number Theory Mastery Examination",
    "Week 10: Equivalent Fractions, Simplest Form & Rational Number Line",
    "Week 11: Addition & Subtraction of Unlike Fractions via Common Denominators",
    "Week 12: Multiplication of Fractions & Mixed Numbers with Area Models",
    "Week 13: Division of Fractions via Multiplicative Inverse (Reciprocals)",
    "Week 14: Decimal Place Value, Terminating vs. Repeating Decimals",
    "Week 15: Four Operations with Decimals & Scientific Measurement Precision",
    "Week 16: Classical Ratios, Part-to-Part vs. Part-to-Whole Proportions",
    "Week 17: Unit Rates, Constant Velocity & Dimensional Analysis",
    "Week 18: Quarter 2 Midterm Examination & Golden Ratio Portfolio",
    "Week 19: Solving Proportions via Cross-Multiplication & Scaling",
    "Week 20: Percents as Ratios per Hundred — Fractions, Decimals & Percents",
    "Week 21: Percent of a Number, Percent Change, Discounts & Simple Interest",
    "Week 22: Positive & Negative Integers, Absolute Value & Opposite Numbers",
    "Week 23: Adding & Subtracting Directed Integers on the Number Line",
    "Week 24: Multiplying & Dividing Integers & Coordinate Plane (4 Quadrants)",
    "Week 25: Algebraic Variables, Writing Expressions & Combining Like Terms",
    "Week 26: One-Step Linear Equations (Addition, Subtraction, Multiplication, Division)",
    "Week 27: Quarter 3 Cumulative Pre-Algebra & Integer Mastery Examination",
    "Week 28: Two-Step Equations, Inequalities & Graphing Solution Sets",
    "Week 29: Classical Plane Geometry — Points, Lines, Rays & Angle Pairs",
    "Week 30: Properties of Triangles, Quadrilaterals & Regular Polygons",
    "Week 31: Perimeter & Area of Rectangles, Triangles, Parallelograms & Trapezoids",
    "Week 32: Circles — Radius, Diameter, Circumference & Area (Pi = 3.14159...)",
    "Week 33: 3D Solid Geometry — Volume & Surface Area of Prisms & Cylinders",
    "Week 34: Classical Statistics — Mean, Median, Mode, Range & Interquartile Range",
    "Week 35: Data Histograms, Box Plots & Theoretical Probability",
    "Week 36: Quarter 4 Final Comprehensive Grade 6 Mathematics Examination"
  ],
  "sci-601": [
    "Week 1: The Scientific Method, Observation, Hypothesis & Controlled Variables",
    "Week 2: Metric System (SI Units), Scientific Notation & Lab Safety",
    "Week 3: Classical Astronomy vs. Modern Cosmology — Celestial Sphere",
    "Week 4: Nicolaus Copernicus, Galileo Galilei & the Heliocentric Revolution",
    "Week 5: Johannes Kepler’s Three Laws of Planetary Motion (Elliptical Orbits)",
    "Week 6: Isaac Newton’s Law of Universal Gravitation & Orbital Mechanics",
    "Week 7: The Sun — Nuclear Fusion, Photosphere, Corona & Solar Wind",
    "Week 8: The Earth-Moon System — Phases, Tides, Solar & Lunar Eclipses",
    "Week 9: Quarter 1 Cumulative Astronomy Exam & Kepler Orbit Lab Report",
    "Week 10: Terrestrial Planets — Mercury, Venus, Earth & Mars Comparative Geology",
    "Week 11: Jovian Gas Giants (Jupiter, Saturn) & Ice Giants (Uranus, Neptune)",
    "Week 12: Comets, Asteroids, Meteoroids & the Kuiper Belt",
    "Week 13: Stellar Classification (H-R Diagram), Nebulae & Galaxies",
    "Week 14: Earth’s Interior Structure — Crust, Mantle, Outer & Inner Core",
    "Week 15: Plate Tectonics, Continental Drift & Seafloor Spreading",
    "Week 16: Earthquakes, Seismic Waves (P, S, Surface) & Richter/Moment Magnitude",
    "Week 17: Volcanism — Shield, Composite & Cinder Cone Volcanoes",
    "Week 18: Quarter 2 Midterm Examination & Plate Tectonics Lab Defense",
    "Week 19: Mineralogy — Crystal Systems, Mohs Hardness Scale & Streak",
    "Week 20: The Rock Cycle — Igneous, Sedimentary & Metamorphic Rocks",
    "Week 21: Weathering, Soil Horizons, Erosion & Fluvial Geomorphology",
    "Week 22: Earth’s Hydrosphere — Hydrologic Cycle, Groundwater & Watersheds",
    "Week 23: Oceanography — Salinity, Thermohaline Currents & Abyssal Zones",
    "Week 24: Structure of the Atmosphere — Troposphere to Exosphere",
    "Week 25: Heat Transfer (Conduction, Convection, Radiation) & Coriolis Effect",
    "Week 26: Air Masses, Barometric Pressure, Cold/Warm Fronts & Meteorology",
    "Week 27: Quarter 3 Cumulative Geology & Meteorology Mastery Examination",
    "Week 28: Severe Weather Systems, Climate Zones & Atmospheric Stewardship",
    "Week 29: Introduction to Matter — Atoms, Elements, Compounds & Mixtures",
    "Week 30: States of Matter, Phase Changes & Density Calculations (D = m/V)",
    "Week 31: Energy Forms — Potential vs. Kinetic Energy & Conservation Laws",
    "Week 32: Ecosystems, Biomes, Food Webs & Trophic Energy Pyramids",
    "Week 33: Biogeochemical Cycles — Carbon, Nitrogen & Oxygen Cycles",
    "Week 34: Natural Resources, Conservation & Christian Environmental Stewardship",
    "Week 35: Annual Science Symposium Project & Experimental Data Presentation",
    "Week 36: Quarter 4 Final Comprehensive Earth & Space Science Examination"
  ],
  "lit-601": [
    "Week 1: Eight Parts of Speech & the Architecture of the English Sentence",
    "Week 2: Subjects, Predicates, Direct/Indirect Objects & Sentence Diagramming",
    "Week 3: Prepositional Phrases, Appositives & Compound/Complex Sentences",
    "Week 4: Progymnasmata Stage I: Classical Fable (Aesop) & Moral Amplification",
    "Week 5: Progymnasmata Stage II: Narrative Retelling & Chronological Clarity",
    "Week 6: Homer’s Odyssey (Adaptation Part I): Telemachus & the Call to Courage",
    "Week 7: Homer’s Odyssey (Part II): The Cyclops, Circe & Prudence vs. Hubris",
    "Week 8: Homer’s Odyssey (Part III): Nostos (Homecoming) & Fidelity in Ithaca",
    "Week 9: Quarter 1 Cumulative Grammar Exam & Heroic Narrative Essay",
    "Week 10: C.S. Lewis’s Chronicles of Narnia: Allegory, Myth & Moral Imagination",
    "Week 11: Sacrificial Heroism, Atonement & Character Transformation in Narnia",
    "Week 12: Active vs. Passive Voice, Transitive/Intransitive Verbs & Verb Tenses",
    "Week 13: Pronouns (Subjective, Objective, Possessive, Reflexive) & Antecedent Agreement",
    "Week 14: Progymnasmata Stage III: Chreia & Proverb (Maxim Expansion Essay)",
    "Week 15: Classical Mythology & Epic Similes — Comparing Ancient & Biblical Heroes",
    "Week 16: Poetry & Meter — Iambic Pentameter, Rhyme Scheme, Stanza & Alliteration",
    "Week 17: Psalms, Hymns & Lyric Poetry — Metaphor, Personification & Imagery",
    "Week 18: Quarter 2 Midterm Examination & Chreia Composition Portfolio",
    "Week 19: J.R.R. Tolkien’s The Hobbit (Part I): Hospitality, Burglary & Fellowship",
    "Week 20: The Hobbit (Part II): Riddles in the Dark, Courage & the Arkenstone",
    "Week 21:Adjectives, Adverbs & Misplaced/Dangling Modifiers in Composition",
    "Week 22: Subordinating Conjunctions, Relative Clauses (Who/Whom/Whose/Which)",
    "Week 23: Punctuation Mastery — Commas, Semicolons, Colons & Quotation Marks",
    "Week 24: Treasure Island / Robinson Crusoe: Providence, Resourcefulness & Perseverance",
    "Week 25: Thesis Statements, Topic Sentences & the 5-Paragraph Classical Essay",
    "Week 26: Citing Primary Textual Evidence (MLA Format) & Avoiding Plagiarism",
    "Week 27: Quarter 3 Cumulative Literary Analysis Essay & Grammar Examination",
    "Week 28: Historical Fiction of the Ancient World (The Bronze Bow / Eagle of the Ninth)",
    "Week 29: Justice, Forgiveness & Kingdom Citizenship in Literature",
    "Week 30: Verbals — Participles, Gerunds & Infinitives in Advanced Sentence Diagramming",
    "Week 31: Classical Elocution — Parallelism, Antithesis & Tricolon in Great Speeches",
    "Week 32: Drafting the Grade 6 Capstone Research & Literary Essay",
    "Week 33: Peer Editing, Revision & Polishing Style and Mechanics",
    "Week 34: Oral Declamation — Memorizing & Delivering Classical Poetry Aloud",
    "Week 35: Final Literary Symposium & Commonplace Book Exhibition",
    "Week 36: Quarter 4 Final Comprehensive Grade 6 Literature & Composition Exam"
  ],
  "hist-601": [
    "Week 1: What Is History? Primary vs. Secondary Sources, Chronology & Cartography",
    "Week 2: The Fertile Crescent — Tigris & Euphrates Geography & Sumerian City-States",
    "Week 3: Cuneiform Writing, Ziggurats & the Epic of Gilgamesh vs. Genesis",
    "Week 4: Sargon of Akkad, Ur-Nammu & the Code of Hammurabi (Lex Talionis)",
    "Week 5: Gift of the Nile — Upper & Lower Egypt, Menes & the Old Kingdom Pyramids",
    "Week 6: Egyptian Hieroglyphics, Rosetta Stone, Mummification & Book of the Dead",
    "Week 7: The Middle & New Kingdoms of Egypt — Hatshepsut, Thutmose III & Ramesses II",
    "Week 8: Ancient Israel & the Phoenician Maritime Alphabet in the Levant",
    "Week 9: Quarter 1 Cumulative Mesopotamia & Egypt Exam + Map Portfolio",
    "Week 10: The Assyrian & Neo-Babylonian Empires — Nineveh & Nebuchadnezzar’s Babylon",
    "Week 11: Cyrus the Great, the Persian Empire, Royal Road & Cyrus Cylinder",
    "Week 12: Ancient India — Indus Valley (Harappa) & Mauryan Empire",
    "Week 13: Ancient China — Shang, Zhou, Qin & Han Dynasties and the Silk Road",
    "Week 14: Aegean Bronze Age — Minoan Crete, Mycenae & the Trojan War",
    "Week 15: Rise of the Greek Polis — Sparta’s Military Oligarchy vs. Athenian Democracy",
    "Week 16: The Greco-Persian Wars — Marathon, Thermopylae & Salamis (Herodotus)",
    "Week 17: Golden Age of Pericles, the Parthenon & Thucydides’ Peloponnesian War",
    "Week 18: Quarter 2 Midterm Examination & Primary Source DBQ Essay",
    "Week 19: Classical Greek Philosophy — Socrates, Plato & Aristotle’s Lyceum",
    "Week 20: Philip II of Macedon, Alexander the Great & the Hellenistic World",
    "Week 21: Founding of Rome — Aeneas, Romulus & Remus, and the Etruscan Kings",
    "Week 22: The Roman Republic — Consuls, Senate, Patricians, Plebeians & Twelve Tables",
    "Week 23: The Punic Wars — Hannibal Barca, Scipio Africanus & the Fall of Carthage",
    "Week 24: Crisis of the Late Republic — the Gracchi, Marius, Sulla & Cicero",
    "Week 25: Julius Caesar, the Rubicon, Dictatorship & the Ides of March",
    "Week 26: Augustus Caesar, the Pax Romana & Roman Engineering (Aqueducts, Roads, Arches)",
    "Week 27: Quarter 3 Cumulative Classical Greece & Roman Republic Examination",
    "Week 28: Judea in the First Century, Jesus of Nazareth & the Birth of the Church",
    "Week 29: Roman Emperors, Pompeii, the Colosseum & Roman Law",
    "Week 30: Early Christian Martyrs, Apologists & the Catacombs of Rome",
    "Week 31: Diocletian’s Tetrarchy, Constantine the Great & the Edict of Milan (313 AD)",
    "Week 32: The Council of Nicaea (325 AD) & the Founding of Constantinople",
    "Week 33: Augustine of Hippo (City of God) & the Fall of the Western Roman Empire (476 AD)",
    "Week 34: Justinian’s Code, Hagia Sophia & the Preservation of Classical Learning",
    "Week 35: Comparative Ancient Civilizations Capstone Exhibition",
    "Week 36: Quarter 4 Final Comprehensive Ancient World History Examination"
  ],
  "lat-601": [
    "Week 1: The Latin Alphabet, Classical vs. Ecclesiastical Pronunciation & Syllables",
    "Week 2: Parts of Speech in Latin & How Inflected Endings Replace Word Order",
    "Week 3: First Conjugation Present Active Indicative (Amo, Amas, Amat)",
    "Week 4: First Declension Feminine Nouns (Terra, Porta, Silva, Gloria)",
    "Week 5: The Six Latin Cases — Nominative, Genitive, Dative, Accusative, Ablative, Vocative",
    "Week 6: Subject (Nominative) & Direct Object (Accusative) Sentence Translation",
    "Week 7: Latin Roots in English Science & Medicine (Aqua, Terra, Vita, Lumen)",
    "Week 8: Irregular Verb Sum, Esse (I Am / To Be) in Present Tense",
    "Week 9: Quarter 1 Cumulative Latin Paradigm & Derivative Examination",
    "Week 10: Second Declension Masculine Nouns in -us and -er (Servus, Puer, Ager)",
    "Week 11: Second Declension Neuter Nouns in -um (Regnum, Verbum, Donum, Caelum)",
    "Week 12: First & Second Declension Adjectives (Bonus, -a, -um; Magnus, -a, -um)",
    "Week 13: Noun-Adjective Agreement in Case, Number & Gender",
    "Week 14: Imperfect Active Indicative (-ba- Tense Sign: Amabam, Eram)",
    "Week 15: Future Active Indicative (-bi- Tense Sign: Amabo, Ero)",
    "Week 16: Translating the Latin Vulgate — Genesis 1 & John 1:1–5",
    "Week 17: Latin Prepositions with the Accusative (Ad, In, Per, Propter) & Ablative (Cum, Ex, Sine)",
    "Week 18: Quarter 2 Midterm Latin Translation & Declension Examination",
    "Week 19: Second Conjugation Verbs (Moneo, Video, Habeo, Debeo)",
    "Week 20: Principal Parts of Latin Verbs (Amo, Amare, Amavi, Amatum)",
    "Week 21: Perfect Active Indicative System (-i, -isti, -it, -imus, -istis, -erunt)",
    "Week 22: Pluperfect (-eram) & Future Perfect (-ero) Active Indicative",
    "Week 23: Roman Numerals, Calendar (Kalends, Nones, Ides) & Mottoes",
    "Week 24: Greek Roots in Geometry, Biology & Astronomy (Geo, Bio, Astro, Logos, Chrono)",
    "Week 25: Third Declension Consonant Stem Nouns (Rex, Lex, Pax, Lux, Veritas)",
    "Week 26: Third Declension Neuter Nouns (Corpus, Tempus, Nomen, Caput)",
    "Week 27: Quarter 3 Cumulative Latin Grammar & Vulgate Translation Exam",
    "Week 28: Personal Pronouns (Ego, Tu, Nos, Vos, Is/Ea/Id)",
    "Week 29: Sacred Latin Hymns & Chants (Gloria Patri, Sanctus, Dona Nobis Pacem)",
    "Week 30: Classical Drawing & Visual Proportion — Line, Contour & Geometric Perspective",
    "Week 31: Chiaroscuro Shading, Light Source & Botanical Illustration",
    "Week 32: Music Theory Foundations — Treble/Bass Clef, Rhythm, Intervals & Solfege",
    "Week 33: Classical Composers — Bach, Handel, Haydn & Sacred Polyphony",
    "Week 34: Translating Aesop’s Fables in Easy Classical Latin",
    "Week 35: Annual Latin Recitation & Fine Arts Portfolio Exhibition",
    "Week 36: Quarter 4 Final Comprehensive Grade 6 Latin & Classical Arts Exam"
  ],
  "pe-612": [
    "Week 1: Philosophy of Physical Stewardship (1 Cor 6:19–20) & Baseline Fitness Assessment",
    "Week 2: Cardiovascular Anatomy — Heart Chambers, Stroke Volume & Resting Heart Rate",
    "Week 3: Calculating Target Heart Rate Zones (Karvonen Formula) & Aerobic Pacing",
    "Week 4: Dynamic Warm-Ups, Joint Mobility & Static Stretching Biomechanics",
    "Week 5: Muscular System Foundations — Agonist vs. Antagonist Muscle Pairs",
    "Week 6: Upper Body & Core Bodyweight Strength (Push-Ups, Planks, Pull-Ups)",
    "Week 7: Lower Body Biomechanics, Squats, Lunges & Injury Prevention",
    "Week 8: Skeletal System, Bone Density, Posture & Spinal Alignment",
    "Week 9: Quarter 1 Cumulative Fitness Benchmark & Physiology Exam",
    "Week 10: Cellular Respiration — Aerobic vs. Anaerobic Energy Systems (ATP)",
    "Week 11: Macronutrients — Complex Carbohydrates, Essential Proteins & Healthy Lipids",
    "Week 12: Micronutrients — Vitamins, Minerals, Electrolytes & Cellular Hydration",
    "Week 13: Reading Nutritional Labels, Metabolic Rate & Whole-Food Meal Planning",
    "Week 14: Sleep Architecture (REM & Deep Sleep), Circadian Rhythm & Brain Recovery",
    "Week 15: Agility, Balance, Coordination & Reaction Time Drills",
    "Week 16: Track & Field Mechanics — Sprint Form, Relay Exchanges & Mile Pacing",
    "Week 17: Endurance Conditioning & Presidential Youth Fitness Benchmark Prep",
    "Week 18: Quarter 2 Midterm Physical Conditioning & Nutrition Examination",
    "Week 19: Emergency Preparedness & the Chain of Survival",
    "Week 20: Hands-Only & Conventional CPR (100–120 Compressions/Min, 2-Inch Depth)",
    "Week 21: Automated External Defibrillator (AED) Operation & Choking Relief (Heimlich)",
    "Week 22: First Aid for Bleeding, Burns, Fractures, Sprains (RICE) & Heat Exhaustion",
    "Week 23: Immune System Function, Hygiene & Communicable Disease Prevention",
    "Week 24: Nervous System, Stress Management, Screen Stewardship & Mental Resilience",
    "Week 25: Statutory Substance Abuse Prevention — Dangers of Tobacco, Alcohol & Narcotics",
    "Week 26: Lifetime Racquet & Court Sports — Tennis, Badminton & Pickleball Rules",
    "Week 27: Quarter 3 Cumulative CPR/First Aid Certification & Health Exam",
    "Week 28: Team Sports Strategy & Sportsmanship — Soccer, Basketball & Volleyball",
    "Week 29: Outdoor Education — Orienteering, Topographic Maps & Hiking Safety",
    "Week 30: Water Safety, Swimming Strokes & Drowning Prevention Protocols",
    "Week 31: Flexibility, Neuromuscular Recovery & Foam Rolling Techniques",
    "Week 32: Designing a Personal 12-Week Summer Conditioning & Training Log",
    "Week 33: Character in Competition — Humility in Victory, Grace in Defeat",
    "Week 34: Final Mile Run, Push-Up, Sit-Up & Sit-and-Reach Testing",
    "Week 35: State Statutory PE & Health Clock-Hour Verification Audit",
    "Week 36: Quarter 4 Final Comprehensive Health, Kinesiology & PE Examination"
  ]
};

// Attach a full 36-Week (180-Day) Syllabus Map AND 4 Timed Quarter Exams (Weeks 9, 18, 27, 36) to EVERY course
const DEPT_WEEKLY_TOPICS_GENERATOR = {
  "Mathematics": [
    "Axiomatic Foundations, Definitions & Deductive Notation",
    "Order of Operations, Algebraic Properties & Equivalence",
    "Linear Equations, Proportional Ratios & Rate Modelling",
    "Inequalities, Absolute Value & Coordinate Graphing",
    "Systems of Equations: Substitution, Elimination & Matrix Row Reduction",
    "Exponents, Scientific Notation & Polynomial Operations",
    "Factoring Quadratics, Completing the Square & Discriminant Analysis",
    "Rational Expressions, Radical Equations & Complex Numbers"
  ],
  "Natural Sciences": [
    "Scientific Method, Controlled Variables, SI Precision & Error Analysis",
    "Atomic & Molecular Architecture, Conservation of Mass & Stoichiometry",
    "Kinematics, Vectors, Velocity, Acceleration & Projectile Motion",
    "Newtonian Dynamics (F = ma), Momentum & Mechanical Work-Energy",
    "Thermodynamics, Heat Transfer, Gas Laws & Entropy",
    "Cellular Biochemistry, DNA Transcription, Translation & Mitosis",
    "Mendelian Genetics, Botanical Taxonomy & Organ System Physiology",
    "Electromagnetism, Wave Optics, Harmonic Motion & Celestial Mechanics"
  ],
  "Theology & Worldview": [
    "Biblical Revelation, Canon, Original Languages (Hebrew & Koine Greek) & Hermeneutics",
    "Creation ex Nihilo, Imago Dei & the Intelligibility of the Cosmos",
    "Covenant Architecture: Noahic, Abrahamic, Mosaic, Davidic & New Covenant",
    "Prophets, Wisdom Literature (Psalms, Proverbs, Job) & Poetic Parallelism",
    "The Incarnation of the Eternal Logos (John 1) & Patristic Christology",
    "Atonement, Resurrection Historical Evidence & the Book of Acts",
    "Christian Apologetics: Cosmological, Teleological & Moral Arguments",
    "Christian Ethics, Vocation, Stewardship & Cultural Engagement"
  ],
  "Literature & Rhetoric": [
    "English Syntax, Advanced Sentence Diagramming & Classical Grammar",
    "Progymnasmata Narrative, Chreia & Proverb Amplification",
    "Classical Epic: Heroism, Hospitality & Nostos in Homer and Virgil",
    "Formal Deductive Logic: Categorical Propositions, Syllogisms & Fallacies",
    "Patristic & Medieval Masterworks: Augustine’s Confessions & Dante’s Commedia",
    "Renaissance & Reformation Poetics: Shakespeare, Milton’s Paradise Lost & Donne",
    "Aristotelian Rhetoric: Ethos, Pathos, Logos & Persuasive Oratory",
    "Primary Source Research, MLA Citation & Capstone Thesis Defense"
  ],
  "History & Civilization": [
    "Historiography, Primary vs. Secondary Sources, Chronology & Historical Geography",
    "Fertile Crescent, Old/Middle/New Kingdom Egypt & Ancient Levant",
    "Classical Greece: Polis, Greco-Persian Wars, Periclean Athens & Hellenistic Synthesis",
    "Roman Republic, Twelve Tables, Punic Wars, Pax Romana & Early Church",
    "Christendom, Monastic Preservation, Magna Carta (1215) & Rise of Universities",
    "Printing Press, Reformation, Scientific Revolution & Constitutionalism",
    "American Founding: Declaration of Independence, U.S. Constitution & Federalist Papers",
    "Macroeconomics, Sound Money, Personal Financial Stewardship & Civic Duty"
  ],
  "Classical Languages & Arts": [
    "Classical & Ecclesiastical Pronunciation, Inflection & Six Noun Cases",
    "1st & 2nd Declension Nouns/Adjectives and Present System Verbs",
    "3rd, 4th & 5th Declensions, Perfect Active/Passive System & Participles",
    "Subjunctive Mood, Indirect Statement (Accusative + Infinitive) & Ablative Absolute",
    "Translating the Latin Vulgate, Cicero’s Orations & Virgil’s Aeneid",
    "Koine Greek Alphabet, Definite Article, Logos Prologue & New Testament Syntax",
    "Classical Aesthetics: Golden Ratio Perspective, Chiaroscuro & Sacred Polyphony",
    "Statutory Physical Education, Cardiovascular Kinesiology, Nutrition & CPR/First Aid"
  ]
};

INITIAL_ACADEMY_DATA.courses.forEach((course) => {
  const customMap = GRADE_6_36_WEEK_MAPS[course.id];
  const deptTopics = DEPT_WEEKLY_TOPICS_GENERATOR[course.department] || DEPT_WEEKLY_TOPICS_GENERATOR["Literature & Rhetoric"];
  course.syllabus36Weeks = [];
  for (let w = 1; w <= 36; w++) {
    const qtr = Math.ceil(w / 9);
    const weekInQtr = ((w - 1) % 9) + 1;
    const weekTitle =
      customMap && customMap[w - 1]
        ? customMap[w - 1]
        : w % 9 === 0
        ? `Week ${w}: Quarter ${qtr} Proctored Cumulative Examination & State Portfolio Defense (${course.code})`
        : `Week ${w} (Q${qtr}.${weekInQtr}): ${deptTopics[(w - 1) % deptTopics.length]} — ${course.title}`;
    course.syllabus36Weeks.push({
      weekNum: w,
      quarter: qtr,
      title: weekTitle,
      daysCompleted: w < 11 ? 5 : w === 11 ? 2 : 0,
      masteryScore: w < 11 ? 94 + (w % 6) : w === 11 ? 95 : null,
      status: w < 11 ? "Mastered (≥85%)" : w === 11 ? "Active Week (In Progress)" : "Unlocked for Study & Testing"
    });
  }

  course.quarterExams = [1, 2, 3, 4].map((q) => ({
    quarter: q,
    weekNum: q * 9,
    title: `${course.code} Quarter ${q} Comprehensive Examination (Week ${q * 9})`,
    durationMinutes: 45,
    completed: q === 1,
    score: q === 1 ? 96 : null,
    questions: [
      {
        q: `[Quarter ${q} Core Axiom & Principle] In ${course.code} (${course.title}), which standard governs valid demonstration across Weeks ${(q - 1) * 9 + 1}–${q * 9}?`,
        options: [
          "Rigorous derivation from foundational axioms, primary sources, and empirical verification",
          "Unexamined guesswork without step-by-step justification",
          "Ignoring primary textual and quantitative evidence",
          "Skipping the 85% Mastery Gatekeeper requirement"
        ],
        correct: 0,
        explanation: "Every quarter examination in Christ Infinity Academy verifies cumulative mastery of foundational axioms and primary evidence."
      },
      {
        q: `[Quarter ${q} Quantitative / Textual Application] When synthesizing the units covered in Quarter ${q} of ${course.code}, what is required for a complete scholar defense?`,
        options: [
          "Precise terminology, step-by-step logical order, and verified citations or units",
          "Leaving out units of measure and textual references",
          "Relying on informal fallacies",
          "Submitting incomplete work"
        ],
        correct: 0,
        explanation: "Classical and STEM honors scholarship requires uniting formal validity with material accuracy."
      },
      {
        q: `[Quarter ${q} Cross-Disciplinary Integration] How does ${course.department} connect to the wider classical curriculum in Quarter ${q}?`,
        options: [
          "All truth is unified under the divine Logos—linking grammar, logic, mathematics, natural science, and history",
          "Each subject is completely isolated from reason and ethics",
          "Language has no connection to scientific terminology",
          "History has no primary sources"
        ],
        correct: 0,
        explanation: "Christ Infinity Academy integrates the Trivium and Quadrivium so every discipline illuminates the order of creation."
      },
      {
        q: `[Quarter ${q} Mastery Gatekeeper Standard] What minimum accuracy threshold is required on this Quarter ${q} Examination to certify Carnegie credit / grade-level promotion?`,
        options: [
          "At least 85% mastery (with full remediation and re-testing if below 85%)",
          "50% passing grade",
          "No minimum threshold",
          "Attendance alone without assessment"
        ],
        correct: 0,
        explanation: "The Academy enforces a strict ≥85% Mastery Gatekeeper across all daily quizzes and quarterly examinations."
      }
    ]
  }));
});

// ==================== CHRIST INFINITY DIGITAL LIBRARY & CUSTOM BOOK REPOSITORY (GRADES 6–12) ====================
INITIAL_ACADEMY_DATA.libraryBooks = [
  // 1. DIGITAL COURSE TEXTBOOKS FOR GRADE 6–12 COURSES
  {
    id: "book-math-601",
    title: "MATH-601 Digital Textbook: Classical Arithmetic, Number Theory & Ratio Mastery",
    author: "Dr. Alistair Sterling · Chair of Mathematics",
    shelf: "Core Course Textbook",
    readingLevel: "6",
    courseCode: "MATH-601",
    pages: 412,
    description: "Complete 36-week digital textbook for Grade 6 Mathematics covering prime number theory, fractions, decimals, classical Euclid ratios, integers, and geometry with step-by-step worked proofs.",
    chapters: [
      {
        title: "Chapter 1: The Architecture of Number & the Axioms of Arithmetic (Weeks 1–4)",
        content: `<h3>1.1 Why Numbers Hold Together: The Immutable Laws of Arithmetic</h3>
        <p>Welcome to <strong>MATH-601: Classical Arithmetic, Number Theory &amp; Ratio Mastery</strong>. In classical mathematics, arithmetic is not a bag of disconnected mechanical tricks—it is the science of discrete quantity governed by rational, unchanging laws.</p>
        <p>Every calculation you perform this year rests upon three foundational axioms:</p>
        <ul>
          <li><strong>The Commutative Law of Addition &amp; Multiplication:</strong> For any quantities <em>a</em> and <em>b</em>, <code>a + b = b + a</code> and <code>a × b = b × a</code>. Order does not alter the sum or product.</li>
          <li><strong>The Associative Law:</strong> <code>(a + b) + c = a + (b + c)</code> and <code>(a × b) × c = a × (b × c)</code>. Grouping does not alter total magnitude.</li>
          <li><strong>The Distributive Law of Multiplication over Addition:</strong> <code>a × (b + c) = (a × b) + (a × c)</code>. This single law is the bridge between mental arithmetic and high-school algebra.</li>
        </ul>
        <h3>1.2 Worked Textbook Example: Mental Calculation via the Distributive Law</h3>
        <p>Suppose we wish to multiply <code>14 × 103</code> without a calculator. We decompose <code>103 = 100 + 3</code>:<br/>
        <code>14 × (100 + 3) = (14 × 100) + (14 × 3) = 1,400 + 42 = 1,442</code>.</p>`
      },
      {
        title: "Chapter 2: Prime Numbers, the Sieve of Eratosthenes & Divisibility (Weeks 5–9)",
        content: `<h3>2.1 The Atomic Building Blocks of Arithmetic</h3>
        <p>Just as all physical molecules are composed of chemical elements, every whole number greater than 1 is either a <strong>Prime Number</strong> (having exactly two distinct factors: 1 and itself) or a <strong>Composite Number</strong> built by multiplying primes together.</p>
        <p><strong>The Fundamental Theorem of Arithmetic (Euclid, Elements Book IX):</strong> Every integer greater than 1 can be factored into a product of prime numbers in one and only one way (apart from the order of the factors).</p>
        <h3>2.2 Worked Textbook Example: Prime Factorization of 360</h3>
        <p><code>360 = 36 × 10 = (6 × 6) × (2 × 5) = (2 × 3 × 2 × 3) × 2 × 5 = 2³ × 3² × 5¹</code>.<br/>
        Notice that 360 is the number of degrees in a circle precisely because <code>2³ × 3² × 5</code> is divisible by 1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, 18, 20, 24, 30, 36, 40, 45, 60, 72, 90, 120, 180, and 360!</p>`
      },
      {
        title: "Chapter 3: Classical Ratios, Proportions & the Golden Mean (Weeks 10–18)",
        content: `<h3>3.1 Ratio (Logos) and Proportion (Analogia)</h3>
        <p>The ancient Greeks called a ratio <em>logos</em>—a comparison by division of two quantities of the same kind (written <code>a : b</code> or <code>a / b</code>). When two ratios are equal (<code>a : b = c : d</code>), they form a <strong>Proportion</strong>, where the product of the means equals the product of the extremes (<code>a × d = b × c</code>).</p>`
      },
      {
        title: "Chapter 4: Integers, Pre-Algebra Equations & Plane Geometry (Weeks 19–36)",
        content: `<h3>4.1 Balancing the Scale: Solving Linear Equations</h3>
        <p>An equation is a mathematical sentence stating that two expressions are equal. By the <strong>Golden Rule of Equations (Axiom of Equality)</strong>, whatever operation we perform on the left side of the equals sign, we must perform identically on the right side to preserve truth.</p>`
      }
    ]
  },
  {
    id: "book-theo-601",
    title: "THEO-601 Digital Textbook: Creation, Covenants & the Architecture of Scripture",
    author: "Rev. Dr. Marcus Vance · Chair of Theology & Worldview",
    shelf: "Core Course Textbook",
    readingLevel: "6",
    courseCode: "THEO-601",
    pages: 340,
    description: "Full 36-week Grade 6 Theology textbook tracing the symmetry of Genesis 1–3, the Noahic, Abrahamic, Mosaic, and Davidic Covenants, Wisdom Literature, and the New Covenant fulfillment.",
    chapters: [
      {
        title: "Chapter 1: Cosmos Out of Chaos — The Literary & Theological Structure of Genesis 1",
        content: `<h3>1.1 Forming and Filling: The Cathedral of Creation</h3>
        <p>In Genesis 1, Moses records creation not as a mythic battle of capricious deities, but as the sovereign, peaceful command of God speaking order (<em>Cosmos</em>) into formlessness (<em>Tohu va-Vohu</em>). Days 1–3 form the three realms of light/time, sky/sea, and dry land/vegetation; Days 4–6 fill each corresponding realm with luminaries, birds/fish, and land animals culminating in humanity made in the <strong>Imago Dei</strong>.</p>`
      },
      {
        title: "Chapter 2: The Spine of Redemptive History — The Five Biblical Covenants",
        content: `<h3>2.1 What Is a Covenant (Berith)?</h3>
        <p>A covenant in Scripture is a solemn, binding bond established by God with His people, sealed by oath and blood, unfolding progressively from Noah (preservation of nature) to Abraham (promise of seed and blessing to all nations), Moses (holiness and law), David (eternal throne), and Christ (the New Covenant).</p>`
      }
    ]
  },
  {
    id: "book-sci-601",
    title: "SCI-601 Digital Textbook: Earth, Celestial Astronomy & Observational Laws",
    author: "Dr. Miriam Chen · Chair of Natural Sciences",
    shelf: "Core Course Textbook",
    readingLevel: "6",
    courseCode: "SCI-601",
    pages: 388,
    description: "Complete Grade 6 Earth & Space Science digital textbook with full chapters on Kepler's Laws, stellar astronomy, plate tectonics, mineralogy, atmospheric meteorology, and lab protocols.",
    chapters: [
      {
        title: "Chapter 1: Kepler, Newton & the Mathematical Laws of the Heavens",
        content: `<h3>1.1 Kepler’s Three Laws of Planetary Motion</h3>
        <p>Using Tycho Brahe’s painstaking observations of Mars, Johannes Kepler discovered that planetary orbits are not circles but <strong>ellipses</strong> with the Sun at one focus (First Law), that planets sweep out equal areas in equal times (Second Law), and that the square of a planet’s orbital period is proportional to the cube of its semi-major axis: <code>P² = a³</code> (Third Law).</p>`
      },
      {
        title: "Chapter 2: Earth's Lithosphere, Plate Tectonics & the Rock Cycle",
        content: `<h3>2.1 Driven by Mantle Convection</h3>
        <p>Earth’s lithosphere is divided into tectonic plates floating atop the semi-plastic asthenosphere. At divergent boundaries, new crust forms; at convergent boundaries, subduction builds mountain ranges and volcanic arcs; at transform boundaries, stored elastic energy releases as seismic waves.</p>`
      }
    ]
  },
  {
    id: "book-lit-hist-lat-601",
    title: "LIT-601 & HIST-601 Companion Reader: Ancient Civilizations, Homer & Latin Roots",
    author: "Prof. Eleanor Whitmore & Magister Julian Hawthorne",
    shelf: "Core Course Textbook",
    readingLevel: "6",
    courseCode: "LIT-601 / HIST-601 / LAT-601",
    pages: 365,
    description: "Integrated Grade 6 Humanities & Latin textbook featuring annotated primary sources from Mesopotamia, Egypt, Greece, and Rome, English grammar diagrams, and First/Second Declension Latin.",
    chapters: [
      {
        title: "Chapter 1: Primary Sources of the Ancient Near East & Classical Greece",
        content: `<h3>1.1 Reading Ancient Inscriptions & Charters</h3>
        <p>Compare the prologue of Hammurabi’s Code with the Mosaic Covenant in Exodus 20–23, and trace how the Phoenician alphabet was adapted by the Greeks and Romans to become the alphabet you are reading today.</p>`
      },
      {
        title: "Chapter 2: Latin Declensions, Verb Conjugations & 500 English Derivatives",
        content: `<h3>2.1 How Latin Unlocks Academic English</h3>
        <p>Over 60% of English academic vocabulary and 90% of scientific terms derive from Latin and Greek roots. Master the First Declension (<em>-a, -ae, -ae, -am, -a</em>) and Second Declension (<em>-us, -i, -o, -um, -o</em>) in this chapter.</p>`
      }
    ]
  },

  // 2. GRADE 6 READING LEVEL: ADVENTURE, MYSTERY, PUZZLE & HISTORICAL LIVING BOOKS
  {
    id: "book-adv-g6",
    title: "The Navigator of the Bronze Sea: An Expedition from Tyre to Tarsus",
    author: "Christ Infinity Press · Grade 6 Adventure & Expedition Shelf",
    shelf: "Adventure & Expedition",
    readingLevel: "6",
    courseCode: "HIST-601 / SCI-601 (Grade 6 Adventure)",
    pages: 194,
    description: "A thrilling Grade 6 historical sea adventure following twelve-year-old Caleb of Tyre aboard a Phoenician cedar merchant ship as he navigates Mediterranean gales using Polaris, solar altitude ratios, and ancient coastal charts.",
    chapters: [
      {
        title: "Chapter 1: The Cedar Hull of Tyre & the North Star Bearing",
        content: `<h3>1.1 Departure Before Dawn</h3>
        <p>Before the sun crested the snowy ridges of Mount Lebanon, twelve-year-old Caleb stood at the prow of the <em>Alcyone</em>, a broad-beamed Phoenician merchant ship built from seasoned cedar timber. In his hand he held his grandfather’s plumb-bob quadrant and a wax tablet etched with coastal bearings from Tyre to Cyprus.</p>
        <p>“Remember the first rule of the sea, Caleb,” Captain Hiram called over the creak of the halyards. “Waves shift and winds deceive, but the Pole Star holds its station. Measure the angle between the horizon and the star, and you know your latitude upon the waters.”</p>`
      },
      {
        title: "Chapter 2: The Gale off Crete & the Reefs of Cyprus",
        content: `<h3>2.1 Calculating Drift Under Storm Canvas</h3>
        <p>On the fourth watch, a sudden Euraquilo gale swept down from the Cretan mountains. With the mainsail reefed, the ship drifted 15 stadia westward every hour for 6 hours. Using ratio scaling (<code>15 × 6 = 90 stadia</code>), Caleb plotted their true position beside the copper port of Salamis and guided the helmsman safely through the limestone breakwater.</p>`
      },
      {
        title: "Chapter 3: The Harbor of Tarsus & the Scroll of Isaiah",
        content: `<h3>3.1 Safe Haven in Cilicia</h3>
        <p>Dropping anchor at the mouth of the Cydnus River in Tarsus, Caleb delivered the sealed amphorae of purple dye and parchment scrolls—discovering that true courage is anchored in wisdom and steadfast faith.</p>`
      }
    ]
  },
  {
    id: "book-mys-g6",
    title: "The Mystery of the Missing Astrolabe at Alexandria",
    author: "Christ Infinity Press · Grade 6 Mystery & Detective Shelf",
    shelf: "Mystery & Detective",
    readingLevel: "6",
    courseCode: "MATH-601 / HIST-601 (Grade 6 Mystery)",
    pages: 176,
    description: "A Grade 6 classical whodunit set in the Royal Library and Observatory of Alexandria: two young apprentices must deduce who stole Eratosthenes' bronze armillary sphere before the summer solstice noon measurement.",
    chapters: [
      {
        title: "Chapter 1: Footprints in the Papyrus Colonnade",
        content: `<h3>1.1 The Locked Observatory Tower</h3>
        <p>At sunrise on the morning of the summer solstice, Chief Librarian Eratosthenes discovered that the great bronze armillary ring—needed to measure the sun’s zenith angle at noon—had vanished from the observatory pedestal. Only three people held keys to the cedar door: Callimachus the scribe, Philon the glassmaker, and Zeno the dockmaster.</p>
        <p>Young apprentice Lydia knelt beside the marble plinth and noticed two clues: a smudge of green copper-carbonate wax and a sandal print measuring exactly <code>9/12</code> of a royal cubit.</p>`
      },
      {
        title: "Chapter 2: The Shadow Ratio Alibi & the Unmasking",
        content: `<h3>2.1 Testing the Suspects' Alibis by Geometry</h3>
        <p>Zeno claimed he had been standing by the Pharos Lighthouse at the sixth hour after sunrise when the shadow of a 12-cubit obelisk measured 18 cubits. Lydia immediately spotted the contradiction: at noon (the sixth hour), shadows are at their <em>shortest</em>, not <code>3 : 2</code> longer than the pillar! Confronted with geometric proof, Zeno confessed and returned the bronze astrolabe ten minutes before solar noon.</p>`
      }
    ]
  },
  {
    id: "book-puz-g6",
    title: "The Labyrinth of Prime Ciphers: 36 Mathematical Riddles & Secret Codes",
    author: "Dr. Alistair Sterling · Grade 6 Puzzle, Logic & Cipher Shelf",
    shelf: "Puzzle, Logic & Cipher",
    readingLevel: "6",
    courseCode: "MATH-601 / LAT-601 (Grade 6 Puzzle Book)",
    pages: 164,
    description: "An interactive Grade 6 puzzle and codebreaking adventure! Solve Caesar shift ciphers, Sieve of Eratosthenes prime locks, fraction balance scales, and Latin root riddles at the end of every chapter.",
    chapters: [
      {
        title: "Chapter 1: Vault Door I — The Twin Prime & Caesar Cipher Lock",
        content: `<h3>1.1 The Riddle of the Monastery Gate</h3>
        <p>To unlock the iron gate of the Abbey of St. Gall, Brother Thomas must enter a two-digit number that is the sum of the only two prime numbers between 20 and 30, and then decode a Roman shift-3 cipher.</p>
        <p><strong>Your Turn — Solve the Puzzle:</strong><br/>
        • <em>Clue A (Prime Lock):</em> List the integers from 21 to 29. Eliminate multiples of 2, 3, and 5. Which two primes remain? (<strong>Answer Key:</strong> <code>23</code> and <code>29</code>; their sum is <code>23 + 29 = 52</code>.)<br/>
        • <em>Clue B (Shift-3 Cipher):</em> Shift each letter backward 3 places in the alphabet to decode <code>Y H U L W D V</code>. (<strong>Answer Key:</strong> <code>V E R I T A S</code> — Latin for <em>Truth</em>!)</p>`
      },
      {
        title: "Chapter 2: Vault Door II — The Three Water Amphorae & Ratio Balance",
        content: `<h3>2.1 Measuring Exactly 4 Quarts with a 5-Quart and 3-Quart Jar</h3>
        <p><strong>Puzzle Challenge:</strong> You stand beside a flowing fountain with an unmarked 5-quart bronze pitcher and an unmarked 3-quart clay pitcher. How do you measure out <em>exactly 4 quarts</em> of water?</p>
        <p><strong>Step-by-Step Solution:</strong> (1) Fill the 5-quart pitcher to the brim. (2) Pour from the 5-quart pitcher into the 3-quart pitcher until the 3-quart pitcher is full—leaving <code>5 - 3 = 2</code> quarts in the large pitcher. (3) Empty the 3-quart pitcher and pour those <code>2</code> quarts into it. (4) Fill the 5-quart pitcher again (<code>5</code> quarts) and pour <code>1</code> quart into the 3-quart pitcher to top it off. Exactly <strong>4 quarts</strong> remain in the 5-quart pitcher!</p>`
      }
    ]
  },
  {
    id: "book-gen-g6",
    title: "The Astronomer’s Cathedral: How Kepler & Galileo Read the Book of Nature",
    author: "Christ Infinity Press · Grade 6 Historical & Science Narrative",
    shelf: "Historical & Science Narrative",
    readingLevel: "6",
    courseCode: "SCI-601 / HIST-601 (Grade 6)",
    pages: 148,
    description: "An engaging Grade 6 narrative living book following young Johannes Kepler as he discovers the mathematical harmony of planetary orbits and thinks God's thoughts after Him.",
    chapters: [
      {
        title: "Chapter 1: A Boy Looking at the Great Comet of 1577",
        content: `<h3>The Night the Sky Changed</h3>
        <p>On a crisp November evening in 1577, six-year-old Johannes Kepler climbed a hill in Württemberg with his mother to behold the Great Comet blazing across the velvet sky. While superstitions terrified the townspeople below, young Johannes wondered: <em>By what geometrical rule did the Creator trace that luminous path across the heavens?</em></p>
        <p>That single question would guide Kepler through decades of calculation until he uncovered the three laws of planetary motion that still guide spacecraft to Mars and Jupiter today.</p>`
      },
      {
        title: "Chapter 2: Thinking God's Thoughts After Him",
        content: `<h3>Geometry as the Blueprint of Creation</h3>
        <p>When Kepler finally proved that Mars orbits in an ellipse and that <code>P² = a³</code> links every planet in a single mathematical choir, he wrote in his notebook: <em>“O Almighty God, I am thinking Thy thoughts after Thee!”</em></p>`
      }
    ]
  },

  // 3. GRADE 7 READING LEVEL: TEXTBOOKS, ADVENTURE, MYSTERY & PUZZLE STORIES
  {
    id: "book-text-g7",
    title: "MATH-102 & SCI-102 Digital Textbook: Pre-Algebra Proportions, Life Science & Formal Logic I",
    author: "Dr. Alistair Sterling, Dr. Miriam Chen & Magister Julian Hawthorne",
    shelf: "Core Course Textbook",
    readingLevel: "7",
    courseCode: "MATH-102 / SCI-102 / LIT-102 (Grade 7)",
    pages: 425,
    description: "Complete Grade 7 digital course textbook covering Pre-Algebra linear equations and proportions, cellular biology & Mendelian genetics, and Aristotelian categorical syllogisms.",
    chapters: [
      {
        title: "Chapter 1: Proportional Reasoning, Slope & Linear Equations (MATH-102)",
        content: `<h3>1.1 From Classical Proportions to Algebraic Equations</h3>
        <p>In Grade 7 Pre-Algebra, every proportional relationship <code>y / x = k</code> graphs as a straight line through the origin with constant rate of change (slope) <code>m = Δy / Δx</code>.</p>`
      },
      {
        title: "Chapter 2: Cellular Organelles, DNA Transcription & Mendelian Punnett Squares (SCI-102)",
        content: `<h3>2.1 The Living Cell as a Micro-Metropolis</h3>
        <p>Explore how mitochondria generate ATP, how ribosomes translate mRNA codons into proteins, and how Gregor Mendel’s pea-plant experiments revealed dominant and recessive inheritance ratios (<code>3 : 1</code> and <code>9 : 3 : 3 : 1</code>).</p>`
      }
    ]
  },
  {
    id: "book-adv-g7",
    title: "Across the Pamir Passes: A Silk Road & Monastic Expedition",
    author: "Christ Infinity Press · Grade 7 Adventure & Expedition Shelf",
    shelf: "Adventure & Expedition",
    readingLevel: "7",
    courseCode: "HIST-102 / SCI-102 (Grade 7 Adventure)",
    pages: 218,
    description: "A Grade 7 historical adventure following two Christian Nestorian and Byzantine scholars carrying medical botanical manuscripts and an astrolabe from Constantinople across the Silk Road mountain passes.",
    chapters: [
      {
        title: "Chapter 1: The Caravan from Trebizond",
        content: `<h3>1.1 Crossing the Roof of the World</h3>
        <p>With snow-leopard tracks patterning the high pass of the Pamirs, thirteen-year-old Lukas checked the barometric boiling point of water and used botanical medicinal herbs from his pressed herbarium to treat a feverish caravan guide.</p>`
      },
      {
        title: "Chapter 2: The Oasis of Samarkand & the Star Catalogue",
        content: `<h3>2.1 Preserving Classical & Biblical Manuscripts</h3>
        <p>Arriving at the stone observatory of Samarkand, the expedition compared Greek, Syriac, and Latin star tables—proving that truth transcends borders and centuries.</p>`
      }
    ]
  },
  {
    id: "book-gen-g7",
    title: "The Syllogism Detective: The Case of the Abbey Scriptorium (7th Grade Mystery)",
    author: "Christ Infinity Press & Magister Julian Hawthorne",
    shelf: "Mystery & Detective",
    readingLevel: "7",
    courseCode: "LIT-102 / HIST-102 (Grade 7 Mystery)",
    pages: 210,
    description: "Grade 7 detective mystery series where young logic scholar Brother Anselm solves a missing illuminated Gospel book by exposing informal fallacies (Ad Hominem, Straw Man, Post Hoc) and constructing valid categorical syllogisms.",
    chapters: [
      {
        title: "Chapter 1: All Men Are Mortal — The Anatomy of a Valid Syllogism",
        content: `<h3>1.1 Validity vs. Truth at York Abbey</h3>
        <p>When the golden Lindisfarne-style Gospel disappeared during Vespers, the bailiff accused the blacksmith merely because a raven had croaked outside the forge. “That,” said young Anselm, “is the fallacy of <em>Post Hoc Ergo Propter Hoc</em> (assuming that because A preceded B, A caused B).” Let us instead construct a valid Barbara (AAA-1) syllogism from the physical ink evidence!</p>`
      },
      {
        title: "Chapter 2: The Cobalt-Blue Lapis Lazuli Clue",
        content: `<h3>2.1 Eliminating the Impossible</h3>
        <p>Major Premise: Everyone whose sleeves bear ultramarine lapis pigment was grinding illumination paint in the north turret at Vespers. Minor Premise: The sacristan’s sleeves bear ultramarine pigment. Conclusion: Therefore, the sacristan was in the north turret—where the misplaced codex had been sealed inside a dry oak chest to protect it from roof leakage!</p>`
      }
    ]
  },
  {
    id: "book-puz-g7",
    title: "The Alcuin Riddle Book: Knights, Knaves, River Crossings & Pre-Algebra Locks",
    author: "Dr. Alistair Sterling · Grade 7 Puzzle, Logic & Cipher Shelf",
    shelf: "Puzzle, Logic & Cipher",
    readingLevel: "7",
    courseCode: "MATH-102 / LIT-102 (Grade 7 Puzzle Book)",
    pages: 184,
    description: "Inspired by Alcuin of York’s 8th-century 'Propositions to Sharpen the Young,' this Grade 7 puzzle book features river-crossing algorithms, truth-teller/liar logic islands, and linear equation treasure chests.",
    chapters: [
      {
        title: "Chapter 1: Alcuin’s Classic Wolf, Goat, and Cabbage River Crossing",
        content: `<h3>1.1 The Minimum-Step Algorithm</h3>
        <p><strong>The Classic 799 AD Puzzle:</strong> A traveler must ferry a wolf, a goat, and a head of cabbage across a river in a boat that holds only himself and ONE item at a time. Left alone, the wolf will eat the goat, or the goat will eat the cabbage. What is the minimum number of river crossings required?</p>
        <p><strong>Worked Logical Solution (7 Crossings):</strong> (1) Take the <strong>Goat</strong> across and leave it. (2) Return alone. (3) Take the <strong>Wolf</strong> across, but bring the <strong>Goat</strong> back with you! (4) Leave the Goat on the starting bank and take the <strong>Cabbage</strong> across to sit safely with the Wolf. (5) Return alone. (6) Finally, bring the <strong>Goat</strong> across!</p>`
      },
      {
        title: "Chapter 2: The Island of Knights (Truth-Tellers) and Knaves (Liars)",
        content: `<h3>2.1 Deductive Elimination</h3>
        <p><strong>Puzzle:</strong> You meet two inhabitants, A and B. A says: “At least one of us is a Knave (always lies).” What are A and B?</p>
        <p><strong>Solution:</strong> Suppose A were a Knave. Then his statement (“at least one of us is a Knave”) would actually be <em>true</em>—contradicting the rule that Knaves always lie! Therefore, <strong>A must be a Knight (truth-teller)</strong>. And since A’s statement is true, <strong>B must be a Knave</strong>!</p>`
      }
    ]
  },

  // 4. GRADE 8 READING LEVEL: TEXTBOOKS, ADVENTURE, MYSTERY & PUZZLE STORIES
  {
    id: "book-gen-g8",
    title: "Foundations of Honors Algebra I, Mechanics & Constitutional Liberty (8th Grade Textbook)",
    author: "Dr. Alistair Sterling & Prof. Eleanor Whitmore",
    shelf: "Core Course Textbook",
    readingLevel: "8",
    courseCode: "MATH-801 / SCI-801 / HIST-801 (Grade 8)",
    pages: 430,
    description: "Grade 8 reading-level textbook & primary source reader covering Honors Algebra I linear/quadratic functions, Newton's Three Laws of Motion, and the U.S. Constitution & Federalist Papers.",
    chapters: [
      {
        title: "Chapter 1: Linear Functions (y = mx + b) & Newton’s Second Law (F = ma)",
        content: `<h3>Where Algebra Meets Classical Physics</h3>
        <p>Notice how the algebraic equation of a line through the origin (<code>y = kx</code>) is the exact mathematical structure of Newton’s Second Law of Motion (<code>F = m · a</code>) and Hooke’s Law of springs (<code>F = k · x</code>). Algebra is the language of physical mechanics!</p>`
      }
    ]
  },
  {
    id: "book-adv-g8",
    title: "Ironsides & the Longitude Chronometer: Voyage Through the Roaring Forties",
    author: "Christ Infinity Press · Grade 8 Adventure & Expedition Shelf",
    shelf: "Adventure & Expedition",
    readingLevel: "8",
    courseCode: "SCI-801 / HIST-801 (Grade 8 Adventure)",
    pages: 242,
    description: "An 8th-grade maritime adventure where a young midshipman uses John Harrison's marine chronometer, kinematics equations, and Greenwich meridian time differences (15° per hour) to rescue a stranded crew.",
    chapters: [
      {
        title: "Chapter 1: Fifteen Degrees Per Hour — The Secret of Longitude",
        content: `<h3>1.1 Keeping Greenwich Time in a Hurricane</h3>
        <p>Because the Earth rotates <code>360°</code> in <code>24 hours</code>, every <code>1 hour</code> difference between local solar noon and Greenwich Mean Time equals exactly <code>360° / 24 = 15°</code> of longitude. When the ship’s chronometer read 14:20 GMT at local noon, Midshipman Ethan calculated their longitude in seconds: <code>2.333 hours × 15° = 35° West</code>!</p>`
      }
    ]
  },
  {
    id: "book-mys-g8",
    title: "The Philadelphia Cipher of 1787: A Constitutional Convention Mystery",
    author: "Prof. Eleanor Whitmore · Grade 8 Mystery & Detective Shelf",
    shelf: "Mystery & Detective",
    readingLevel: "8",
    courseCode: "HIST-801 / LIT-801 (Grade 8 Mystery)",
    pages: 226,
    description: "Set in Philadelphia during the hot summer of 1787, an apprentice printer to Dunlap & Claypoole uncovers a plot to leak stolen draft pages of the U.S. Constitution.",
    chapters: [
      {
        title: "Chapter 1: The Broken Type-Metal Letter 'S' at Independence Hall",
        content: `<h3>1.1 Forensic Printing-Press Deduction</h3>
        <p>Examining the anonymous handbill under a magnifying lens, fourteen-year-old Samuel noticed a microscopic nick on the lower serif of every long-<em>s</em>—matching only Case #4 in the Lombard Street printshop.</p>`
      }
    ]
  },
  {
    id: "book-puz-g8",
    title: "The Culper & Bletchley Codebook: Polyalphabetic Ciphers & Algebraic Systems",
    author: "Dr. Alistair Sterling · Grade 8 Puzzle, Logic & Cipher Shelf",
    shelf: "Puzzle, Logic & Cipher",
    readingLevel: "8",
    courseCode: "MATH-801 (Grade 8 Puzzle & Cipher Book)",
    pages: 198,
    description: "Grade 8 cryptographic & algebraic puzzle book! Crack Washington's Culper Ring numeric code (711 = General Washington), Vigenère keyword ciphers, and 2×2 systems of linear equations.",
    chapters: [
      {
        title: "Chapter 1: Cracking a 2×2 Algebraic Cipher Lock",
        content: `<h3>1.1 Intersection of Two Secret Courier Routes</h3>
        <p><strong>Puzzle:</strong> Courier Alpha travels along the line <code>2x + y = 14</code>. Courier Bravo travels along <code>x - y = 1</code>. At what coordinate <code>(x, y)</code> do they meet to exchange the dispatch?</p>
        <p><strong>Solution by Elimination:</strong> Add the two equations: <code>(2x + x) + (y - y) = 14 + 1 → 3x = 15 → x = 5</code>. Substitute <code>x = 5</code> into <code>5 - y = 1 → y = 4</code>. The rendezvous coordinates are <strong>(5, 4)</strong>!</p>`
      }
    ]
  },

  // 5. GRADE 9 READING LEVEL: TEXTBOOKS, ADVENTURE, MYSTERY & PUZZLE STORIES
  {
    id: "book-gen-g9",
    title: "Homer’s Odyssey, Cellular Design & Ancient Civilizations (9th Grade Freshman Textbook & Reader)",
    author: "Christ Infinity Press · Grade 9 Rhetoric Level",
    shelf: "Core Course Textbook",
    readingLevel: "9",
    courseCode: "LIT-901 / SCI-901 / HIST-901 (Grade 9)",
    pages: 390,
    description: "9th-grade reading level anthology & textbook pairing annotated books of Homer and Augustine's Confessions with Honors Biology cellular biochemistry and DNA transcription.",
    chapters: [
      {
        title: "Chapter 1: Information Code in the Cell (DNA → RNA → Protein)",
        content: `<h3>The Four-Letter Chemical Alphabet of Life</h3>
        <p>Within the nucleus of every living cell resides deoxyribonucleic acid (DNA)—a quaternary digital code written in adenine (A), thymine (T), cytosine (C), and guanine (G) that directs ribosome machinery to fold amino acids into precise three-dimensional proteins.</p>`
      }
    ]
  },
  {
    id: "book-adv-g9",
    title: "Beyond the Pillars of Heracles: The Periplous of Hanno & Pytheas",
    author: "Christ Infinity Press · Grade 9 Adventure & Expedition Shelf",
    shelf: "Adventure & Expedition",
    readingLevel: "9",
    courseCode: "HIST-901 / LIT-901 (Grade 9 Adventure)",
    pages: 260,
    description: "A 9th-grade classical epic adventure chronicling a Greek navigator sailing past Gibraltar into the North Atlantic to measure the midnight sun and oceanic tides.",
    chapters: [
      {
        title: "Chapter 1: Through the Strait of Gades into the Ocean Stream",
        content: `<h3>1.1 Triangulating Headlands by Euclidean Similar Triangles</h3>
        <p>Using Proposition I.26 (ASA Triangle Congruence), navigator Pytheas determined the exact distance to the Iberian cliffs without ever dropping a sounding line near the shoals.</p>`
      }
    ]
  },
  {
    id: "book-mys-g9",
    title: "The Geometrist’s Alibi: Deductive Proof & Mystery in Archimedes’ Syracuse",
    author: "Dr. Alistair Sterling · Grade 9 Mystery & Detective Shelf",
    shelf: "Mystery & Detective",
    readingLevel: "9",
    courseCode: "MATH-201 / HIST-901 (Grade 9 Mystery)",
    pages: 235,
    description: "A 9th-grade deductive mystery set in ancient Syracuse where Archimedes and his student use specific gravity (buoyancy displacement) and indirect geometric proof (Reductio ad Absurdum) to expose a royal treasury fraud.",
    chapters: [
      {
        title: "Chapter 1: The Crown of King Hiero & Reductio ad Absurdum",
        content: `<h3>1.1 Proving Guilt by Indirect Proof</h3>
        <p>Pure gold has a density of <code>19.3 g/cm³</code>, whereas silver has a density of <code>10.5 g/cm³</code>. When the goldsmith’s 1,000-gram votive crown displaced <code>65 cm³</code> of water instead of <code>51.8 cm³</code>, Archimedes proved mathematically that exactly 300 grams of silver had been substituted!</p>`
      }
    ]
  },
  {
    id: "book-puz-g9",
    title: "Euclid’s Vault: 40 Compass-and-Straightedge Geometric & Deductive Puzzles",
    author: "Dr. Alistair Sterling · Grade 9 Puzzle, Logic & Cipher Shelf",
    shelf: "Puzzle, Logic & Cipher",
    readingLevel: "9",
    courseCode: "MATH-201 (Grade 9 Geometry Puzzle Book)",
    pages: 204,
    description: "Interactive 9th-grade geometric puzzle book: solve Thales' circle-angle locks, Pythagorean ladder riddles, and Knights/Liars formal proof grids.",
    chapters: [
      {
        title: "Chapter 1: Thales’ Semicircle Lock & the 5-12-13 Pythagorean Gate",
        content: `<h3>1.1 Inscribed Angle in a Semicircle</h3>
        <p><strong>Puzzle:</strong> A circular vault door has diameter <code>AB = 13 feet</code>. A steel crossbar <code>AC</code> measures <code>5 feet</code> to a point <code>C</code> on the rim. How long is the perpendicular bar <code>BC</code>?</p>
        <p><strong>Solution:</strong> By Thales’ Theorem (Euclid III.31), any angle inscribed in a semicircle is a right angle (<code>90°</code>). By the Pythagorean Theorem (<code>a² + b² = c²</code>), <code>5² + BC² = 13² → 25 + BC² = 169 → BC² = 144 → BC = 12 feet</code>!</p>`
      }
    ]
  },

  // 6. GRADE 10 READING LEVEL: TEXTBOOKS, ADVENTURE, MYSTERY & PUZZLE STORIES
  {
    id: "book-gen-g10",
    title: "Euclid’s Elements (Books I–VI), Dante’s Divine Comedy & Stoichiometry (10th Grade Textbook)",
    author: "Dr. Alistair Sterling & Dr. Miriam Chen",
    shelf: "Core Course Textbook",
    readingLevel: "10",
    courseCode: "MATH-202 / SCI-202 / LIT-201 (Grade 10)",
    pages: 480,
    description: "10th-grade reading level digital textbook containing Euclid's Elements, Honors Chemistry stoichiometry & gas laws, Algebra II logarithms, and annotated cantos of Dante.",
    chapters: [
      {
        title: "Chapter 1: Euclid Book I — From Five Postulates to Proposition I.47",
        content: `<h3>Why Deductive Proof Is Eternal</h3>
        <p>Beginning from 23 definitions, 5 postulates, and 5 common notions, Euclid constructs an unshakeable edifice of geometric truth culminating in Proposition I.47 (the Pythagorean Theorem).</p>`
      }
    ]
  },
  {
    id: "book-adv-g10",
    title: "The Alchemist’s Crucible & the Magellan Strait: Voyage of the Victoria",
    author: "Christ Infinity Press · Grade 10 Adventure & Expedition Shelf",
    shelf: "Adventure & Expedition",
    readingLevel: "10",
    courseCode: "HIST-203 / SCI-202 (Grade 10 Adventure)",
    pages: 278,
    description: "A 10th-grade Renaissance expedition chronicle following Antonio Pigafetta and a young ship's apothecary across the Pacific, discovering the international date line paradox and chemical distillation.",
    chapters: [
      {
        title: "Chapter 1: The Missing Wednesday in the Ship’s Logbook",
        content: `<h3>1.1 Circumnavigating Westward with the Sun</h3>
        <p>When the <em>Victoria</em> finally dropped anchor in Seville after sailing continuously westward around the globe, Pigafetta’s meticulous daily diary read Wednesday—yet ashore it was Thursday! Sailing westward with the sun had lengthened each solar day by an imperceptible four minutes, summing to exactly 24 hours across 360 degrees.</p>`
      }
    ]
  },
  {
    id: "book-mys-g10",
    title: "The Venetian Glassmaker’s Formula: A Stoichiometric & Chemical Mystery",
    author: "Dr. Miriam Chen · Grade 10 Mystery & Detective Shelf",
    shelf: "Mystery & Detective",
    readingLevel: "10",
    courseCode: "SCI-202 / HIST-203 (Grade 10 Mystery)",
    pages: 248,
    description: "Set on the island of Murano, Venice, a young chemist solves the sabotage of a cathedral stained-glass kiln using gravimetric stoichiometry, flame emission spectra, and molar ratios.",
    chapters: [
      {
        title: "Chapter 1: The Crimson Gold-Ruby Batch & the Precipitate Clue",
        content: `<h3>1.1 Silver Nitrate Titration Reveals the Saboteur</h3>
        <p>By adding aqueous silver nitrate (<code>AgNO₃</code>) to the suspect’s rinsing vat, Elena precipitated white silver chloride (<code>AgCl</code>) weighing exactly <code>14.33 grams</code> (<code>0.100 mole</code>)—proving who had introduced chloride contamination into the Murano furnace.</p>`
      }
    ]
  },
  {
    id: "book-puz-g10",
    title: "Pascal’s Triangle & the Florentine Cryptograph: Probability, Logarithms & Ciphers",
    author: "Dr. Alistair Sterling · Grade 10 Puzzle, Logic & Cipher Shelf",
    shelf: "Puzzle, Logic & Cipher",
    readingLevel: "10",
    courseCode: "MATH-202 (Grade 10 Puzzle Book)",
    pages: 215,
    description: "10th-grade mathematical puzzle book featuring Alberti polyalphabetic cipher disks, Pascal's Triangle combinatorics, and logarithmic scale riddles.",
    chapters: [
      {
        title: "Chapter 1: Pascal’s Problem of Points & Binomial Combinations",
        content: `<h3>1.1 Counting Pathways in the Palazzo</h3>
        <p><strong>Puzzle:</strong> A Renaissance courier walks 4 blocks East and 3 blocks North on a rectangular street grid in Florence. How many distinct shortest paths can he take so that no tailing spy can predict his route?</p>
        <p><strong>Combinatorial Solution:</strong> Out of <code>4 + 3 = 7</code> total blocks walked, he must choose which <code>3</code> blocks are North: <code>C(7, 3) = 7! / (3! · 4!) = (7 × 6 × 5) / (3 × 2 × 1) = 35 distinct routes</code>!</p>`
      }
    ]
  },

  // 7. GRADE 11 READING LEVEL: TEXTBOOKS, ADVENTURE, MYSTERY & PUZZLE STORIES
  {
    id: "book-gen-g11",
    title: "The American Republic, Classical Physics & Pre-Calculus Analysis (11th Grade Textbook)",
    author: "Prof. Eleanor Whitmore & Dr. Alistair Sterling",
    shelf: "Core Course Textbook",
    readingLevel: "11",
    courseCode: "HIST-301 / MATH-300 / SCI-301 (Grade 11)",
    pages: 510,
    description: "11th-grade reading level digital textbook & primary source reader featuring the Declaration of Independence, U.S. Constitution, Federalist Nos. 10 & 51, Trigonometry, and Honors Physics.",
    chapters: [
      {
        title: "Chapter 1: Ordered Liberty & the Separation of Powers (Federalist No. 51)",
        content: `<h3>“If Men Were Angels, No Government Would Be Necessary”</h3>
        <p>James Madison explains in Federalist No. 51 why constitutional republics require separated branches, bicameral legislatures, and federal-state checks and balances grounded in a realistic view of human nature.</p>`
      }
    ]
  },
  {
    id: "book-adv-g11",
    title: "Endurance on the Pack Ice: Celestial Navigation & Vector Physics in the Weddell Sea",
    author: "Christ Infinity Press · Grade 11 Adventure & Expedition Shelf",
    shelf: "Adventure & Expedition",
    readingLevel: "11",
    courseCode: "SCI-301 / MATH-300 (Grade 11 Adventure)",
    pages: 292,
    description: "An 11th-grade survival and navigation chronicle following Frank Worsley's 800-mile open-boat voyage in the James Caird using spherical trigonometry, sextant sights, and vector current drift.",
    chapters: [
      {
        title: "Chapter 1: Four Sextant Sights in a Heaving Twenty-Foot Boat",
        content: `<h3>1.1 Vector Addition of Wind and Ocean Current</h3>
        <p>Pitching in icy South Atlantic swells, navigator Frank Worsley braced his shoulders against the mast of the <em>James Caird</em> to catch a split-second solar altitude through a rift in the clouds—computing their trigonometric line of position to hit South Georgia Island dead-on.</p>`
      }
    ]
  },
  {
    id: "book-mys-g11",
    title: "The Cavendish Laboratory Paradox: A Maxwellian Electromagnetism Mystery",
    author: "Dr. Miriam Chen · Grade 11 Mystery & Detective Shelf",
    shelf: "Mystery & Detective",
    readingLevel: "11",
    courseCode: "SCI-301 / LIT-301 (Grade 11 Mystery)",
    pages: 264,
    description: "Set at Cambridge University's Cavendish Laboratory in 1878, a junior physics fellow investigates why the precision galvanometer needles are deflecting at midnight—uncovering a hidden induction coil telegraph.",
    chapters: [
      {
        title: "Chapter 1: Faraday’s Law & the Phantom Deflection",
        content: `<h3>1.1 Detecting an Unseen Magnetic Field</h3>
        <p>Because the magnetic field strength around a long straight wire decreases inversely with distance (<code>B = μ₀I / 2πr</code>), Julian took three galvanometer readings across the flagstones and triangulated the exact wall cavity where the clandestine telegraph wire ran!</p>`
      }
    ]
  },
  {
    id: "book-puz-g11",
    title: "Trigonometric Triangulation & Enigma Rotors: Pre-Calculus & Physics Puzzles",
    author: "Dr. Alistair Sterling · Grade 11 Puzzle, Logic & Cipher Shelf",
    shelf: "Puzzle, Logic & Cipher",
    readingLevel: "11",
    courseCode: "MATH-300 / SCI-301 (Grade 11 Puzzle Book)",
    pages: 228,
    description: "11th-grade analytical puzzle book featuring Law of Sines/Cosines rangefinding riddles, harmonic pendulum clock puzzles, and modular arithmetic rotor ciphers.",
    chapters: [
      {
        title: "Chapter 1: The Law of Sines Lighthouse Rangefinder Puzzle",
        content: `<h3>1.1 Measuring Distance Across an Impassable Channel</h3>
        <p><strong>Puzzle:</strong> Two coastal watchtowers A and B are separated by a baseline of <code>1,000 meters</code>. From Tower A, the angle to a ship S is <code>∠CAB = 60°</code>; from Tower B, <code>∠CBA = 75°</code>. How far is the ship from Tower B?</p>
        <p><strong>Worked Trigonometric Solution:</strong> First find the angle at the ship: <code>∠ASB = 180° - (60° + 75°) = 45°</code>. By the Law of Sines: <code>BS / sin(60°) = 1000 / sin(45°) → BS = 1000 × (√3 / 2) / (√2 / 2) = 1000 × √(1.5) ≈ 1,224.7 meters</code>!</p>`
      }
    ]
  },

  // 8. GRADE 12 READING LEVEL: TEXTBOOKS, ADVENTURE, MYSTERY, PUZZLE & GREAT BOOKS
  {
    id: "book-gen-g12",
    title: "AP Calculus, Christian Apologetics, Macroeconomics & Senior Thesis Manual (12th Grade Textbook)",
    author: "Rev. Dr. Marcus Vance & Dr. Alistair Sterling",
    shelf: "Core Course Textbook",
    readingLevel: "12",
    courseCode: "MATH-301 / THEO-401 / HIST-401 (Grade 12)",
    pages: 540,
    description: "12th-grade collegiate reading level textbook covering limits, derivatives, and integrals (Fundamental Theorem of Calculus), Christian apologetics, personal finance, and the Senior Capstone Thesis guide.",
    chapters: [
      {
        title: "Chapter 1: The Fundamental Theorem of Calculus & the Mathematics of Change",
        content: `<h3>Uniting Instantaneous Rate of Change and Accumulation</h3>
        <p>The Fundamental Theorem of Calculus proves that differentiation (finding the tangent slope / instantaneous velocity) and definite integration (accumulating area under a curve) are inverse operations: <code>∫[a to b] f'(x) dx = f(b) - f(a)</code>.</p>`
      }
    ]
  },
  {
    id: "book-adv-g12",
    title: "The Pilgrim’s Ascent: An Allegorical Expedition to the Celestial Peaks",
    author: "Christ Infinity Press · Grade 12 Classical Great Book & Adventure Shelf",
    shelf: "Classical Great Book",
    readingLevel: "12",
    courseCode: "LIT-401 / THEO-401 (Grade 12 Great Book & Adventure)",
    pages: 312,
    description: "A 12th-grade collegiate allegory in the tradition of John Bunyan’s Pilgrim’s Progress and C.S. Lewis’s Great Divorce, following a senior scholar’s philosophical journey through the Citadel of Skepticism to the Mountain of Logos.",
    chapters: [
      {
        title: "Chapter 1: The Gate of First Principles & the Burden of Relativism",
        content: `<h3>1.1 Why Skepticism Refutes Itself</h3>
        <p>At the first tollgate, the Sophist declared: “No truth can be known with certainty!” To which the Pilgrim calmly replied: “Do you know <em>that</em> claim with certainty? If so, your claim falsifies itself!”</p>`
      }
    ]
  },
  {
    id: "book-mys-g12",
    title: "The Oxford Bodleian Palimpsest: A Koine Greek & Patristic Manuscript Mystery",
    author: "Rev. Dr. Marcus Vance · Grade 12 Mystery & Detective Shelf",
    shelf: "Mystery & Detective",
    readingLevel: "12",
    courseCode: "LAT-401 / THEO-401 (Grade 12 Mystery)",
    pages: 288,
    description: "A 12th-grade scholarly detective novel set in Oxford’s Bodleian Library: a senior fellow uses multispectral ultraviolet imaging, Koine Greek uncial paleography, and Newton’s Law of Cooling to authenticate a 2nd-century papyrus.",
    chapters: [
      {
        title: "Chapter 1: The Under-Text Beneath the Tenth-Century Parchment",
        content: `<h3>1.1 Reading the Nomina Sacra in Uncial Script</h3>
        <p>Under 365-nanometer ultraviolet light, the scraped lower writing of the palimpsest glowed faintly—revealing the second-century <em>Nomina Sacra</em> abbreviations <code>ΘΣ</code> (<em>Theos</em>) and <code>ΧΣ</code> (<em>Christos</em>) from an early codex of the Gospel of John.</p>`
      }
    ]
  },
  {
    id: "book-puz-g12",
    title: "Principia & Newton’s Brachistochrone: Calculus Optimization & Formal Logic Puzzles",
    author: "Dr. Alistair Sterling · Grade 12 Puzzle, Logic & Cipher Shelf",
    shelf: "Puzzle, Logic & Cipher",
    readingLevel: "12",
    courseCode: "MATH-301 / SCI-401 (Grade 12 Puzzle Book)",
    pages: 250,
    description: "Collegiate 12th-grade mathematical puzzle collection featuring Isaac Newton's overnight Brachistochrone challenge, Fermat's Snell's Law minimum-time optimization, and RSA prime-factorization cryptography.",
    chapters: [
      {
        title: "Chapter 1: Calculus Optimization — The Maximum-Volume Cylinder in a Sphere",
        content: `<h3>1.1 Setting the First Derivative Equal to Zero (f'(x) = 0)</h3>
        <p><strong>Puzzle:</strong> A cylindrical optical lens chamber is to be inscribed inside a sphere of radius <code>R = √3</code> meters. What cylinder height <code>h</code> maximizes the volume <code>V = πr²h</code>?</p>
        <p><strong>Calculus Solution:</strong> By Pythagoras, <code>r² + (h/2)² = R² = 3 → r² = 3 - h²/4</code>. Thus <code>V(h) = π(3h - h³/4)</code>. Differentiate with respect to <code>h</code> and set <code>dV/dh = 0</code>: <code>π(3 - 3h²/4) = 0 → h² = 4 → h = 2 meters</code>!</p>`
      }
    ]
  }
];

// ==================== CHRIST INFINITY SCRIPTURE HUB (ALL 80 BOOKS & 1,367 CHAPTERS: HEBREW, GREEK, ENGLISH, APOCRYPHA & CROSS-REFERENCES) ====================
INITIAL_ACADEMY_DATA.bibleHubData = {
  canonBooks: [
    // ==================== OLD TESTAMENT (HEBREW / ARAMAIC MASORETIC TANAKH — 39 BOOKS · 929 CHAPTERS) ====================
    { id: "gen", canon: "OT", name: "Genesis (Bereshith)", origLang: "Biblical Hebrew (בְּרֵאשִׁית)", chapters: 50, location: "Mesopotamia (Ur, Haran), Canaan (Shechem, Bethel, Hebron) & Goshen in Egypt", theme: "Creation ex Nihilo, the Fall, the Flood, and the Patriarchal Covenants (Abraham, Isaac, Jacob, Joseph)", crossRefKey: "John 1:1–3; Romans 4:1–25; Hebrews 11:1–22", openingKjv: "In the beginning God created the heaven and the earth.", origScriptSample: "בְּרֵאשִׁית בָּרָא אֱלֹהִים אֵת הַשָּׁמַיִם וְאֵת הָאָרֶץ", translitSample: "Bə·rê·šîṯ bā·rā ’ĕ·lō·hîm ’êṯ haš·šā·ma·yim wə·’êṯ hā·’ā·reṣ", keyWord: { orig: "בְּרֵאשִׁית (Bereshith)", strongs: "H7225", gloss: "In the beginning / first principle", note: "Translated in the Greek Septuagint as En archē (Ἐν ἀρχῇ), echoed in John 1:1." } },
    { id: "exo", canon: "OT", name: "Exodus (Shemot)", origLang: "Biblical Hebrew (שְׁמוֹת)", chapters: 40, location: "Nile Delta (Rameses), Red Sea, Mount Sinai & Wilderness", theme: "Redemption by the Passover Lamb, Revelation of YHWH ('I AM THAT I AM'), the Ten Commandments & Tabernacle", crossRefKey: "1 Corinthians 5:7; John 8:58; Hebrews 9:1–28", openingKjv: "And God spake all these words, saying, I am the LORD thy God, which have brought thee out of the land of Egypt, out of the house of bondage.", origScriptSample: "אֶהְיֶה אֲשֶׁר אֶהְיֶה · אָנֹכִי יְהוָה אֱלֹהֶיךָ", translitSample: "’Eh·yeh ’ă·šer ’eh·yeh · ’Ā·nō·ḵî YHWH ’ĕ·lō·he·ḵā", keyWord: { orig: "אֶהְיֶה (Ehyeh)", strongs: "H1961", gloss: "I AM (Self-Existent One)", note: "LXX translates as Egō eimi ho Ōn (Ἐγώ εἰμι ὁ ὤν), cited by Christ in John 8:58." } },
    { id: "lev", canon: "OT", name: "Leviticus (Vayikra)", origLang: "Biblical Hebrew (וַיִּקְרָא)", chapters: 27, location: "Foot of Mount Sinai (Wilderness Tabernacle)", theme: "Holiness of God, the Five Offerings, Day of Atonement (Yom Kippur) & 'Thou shalt love thy neighbour as thyself' (Lev 19:18)", crossRefKey: "Hebrews 10:1–18; 1 Peter 1:15–16; Matthew 22:39", openingKjv: "Speak unto all the congregation of the children of Israel, and say unto them, Ye shall be holy: for I the LORD your God am holy.", origScriptSample: "קְדֹשִׁים תִּהְיוּ כִּי קָדוֹשׁ אֲנִי יְהוָה", translitSample: "Qə·ḏō·šîm tih·yū kî qā·ḏō·wš ’ă·nî YHWH", keyWord: { orig: "קָדוֹשׁ (Qadosh)", strongs: "H6918", gloss: "holy / set apart / transcendent", note: "Quoted in 1 Peter 1:16 ('Be ye holy; for I am holy')." } },
    { id: "num", canon: "OT", name: "Numbers (Bamidbar)", origLang: "Biblical Hebrew (בְּמִדְבַּר)", chapters: 36, location: "Sinai to Kadesh-Barnea & Plains of Moab", theme: "Wilderness Census & Testing, the Aaronic Priestly Blessing (Num 6:24–26), the Bronze Serpent & Balaam's Star Prophecy", crossRefKey: "John 3:14–15; 1 Corinthians 10:1–11; Matthew 2:2", openingKjv: "The LORD bless thee, and keep thee: The LORD make his face shine upon thee, and be gracious unto thee: The LORD lift up his countenance upon thee, and give thee peace.", origScriptSample: "יְבָרֶכְךָ יְהוָה וְיִשְׁמְרֶךָ", translitSample: "Yə·ḇā·reḵ·ḵā YHWH wə·yiš·mə·re·ḵā", keyWord: { orig: "שָׁלוֹם (Shalom)", strongs: "H7965", gloss: "peace / covenantal wholeness", note: "Found on the 7th-century BC Ketef Hinnom silver scrolls in Jerusalem—the oldest surviving biblical text." } },
    { id: "deu", canon: "OT", name: "Deuteronomy (Devarim)", origLang: "Biblical Hebrew (דְּבָרִים)", chapters: 34, location: "Plains of Moab East of the Jordan River", theme: "The Shema (Deut 6:4–9), Covenant Renewal & Promise of the Prophet Like Moses (Deut 18:15–18)", crossRefKey: "Matthew 4:1–10; Matthew 22:37; Acts 3:22", openingKjv: "Hear, O Israel: The LORD our God is one LORD: And thou shalt love the LORD thy God with all thine heart, and with all thy soul, and with all thy might.", origScriptSample: "שְׁמַע יִשְׂרָאֵל יְהוָה אֱלֹהֵינוּ יְהוָה אֶחָד", translitSample: "Šə·ma‘ Yiś·rā·’êl YHWH ’ĕ·lō·hê·nū YHWH ’e·ḥāḏ", keyWord: { orig: "שְׁמַע (Shema)", strongs: "H8085", gloss: "Hear, listen & obey", note: "Cited by Jesus in Mark 12:29–30 as the Great Commandment." } },
    { id: "jos", canon: "OT", name: "Joshua (Yehoshua)", origLang: "Biblical Hebrew (יְהוֹשֻׁעַ)", chapters: 24, location: "Jordan River, Jericho, Ai, Gibeon, Shiloh & Shechem", theme: "Covenant Courage (Josh 1:8–9), Fulfillment of the Land Promise & Covenant Renewal at Shechem (Josh 24:15)", crossRefKey: "Hebrews 4:8; James 2:25; Hebrews 11:30", openingKjv: "This book of the law shall not depart out of thy mouth; but thou shalt meditate therein day and night... Be strong and of a good courage.", origScriptSample: "חֲזַק וֶאֱמָץ אַל־תַּעֲרֹץ וְאַל־תֵּחָת", translitSample: "Ḥă·zaq we·’ĕ·māṣ ’al-ta·‘ă·rōṣ wə·’al-tê·ḥāṯ", keyWord: { orig: "יְהוֹשֻׁעַ (Yehoshua)", strongs: "H3091", gloss: "YHWH is Salvation", note: "Hebrew name rendered Iēsous (Ἰησοῦς / Jesus) in the Greek Septuagint and New Testament." } },
    { id: "jdg", canon: "OT", name: "Judges (Shoftim)", origLang: "Biblical Hebrew (שֹׁפְטִים)", chapters: 21, location: "Tribal Hill Country of Canaan (Othniel, Deborah, Gideon, Jephthah, Samson)", theme: "Covenant Cycle of Apostasy, Oppression, Repentance, and Deliverance Pointing to the Need for a Righteous King", crossRefKey: "Hebrews 11:32–34; Acts 13:20", openingKjv: "Nevertheless the LORD raised up judges, which delivered them out of the hand of those that spoiled them.", origScriptSample: "וַיָּקֶם יְהוָה שֹׁפְטִים וַיּוֹשִׁיעוּם", translitSample: "Way·yā·qem YHWH šō·p̄ə·ṭîm way·yō·w·šî·‘ūm", keyWord: { orig: "שֹׁפְטִים (Shoftim)", strongs: "H8199", gloss: "judges / covenant deliverers", note: "Vindicators raised up by the Spirit of the LORD to rescue Israel." } },
    { id: "rut", canon: "OT", name: "Ruth (Megillat Ruth)", origLang: "Biblical Hebrew (רוּת)", chapters: 4, location: "Moab & Bethlehem of Judah", theme: "Loyal Covenant Love (Hesed), Boaz the Kinsman-Redeemer (Go'el) & the Great-Grandmother of King David", crossRefKey: "Matthew 1:5; Luke 3:32", openingKjv: "And Ruth said, Intreat me not to leave thee, or to return from following after thee: for whither thou goest, I will go... thy people shall be my people, and thy God my God.", origScriptSample: "עַמֵּךְ עַמִּי וֵאלֹהַיִךְ אֱלֹהָי", translitSample: "‘Am·mêḵ ‘am·mî wê·lō·ha·yiḵ ’ĕ·lō·hāy", keyWord: { orig: "גֹּאֵל (Go'el)", strongs: "H1350", gloss: "kinsman-redeemer", note: "Prefigures Christ as our kinsman-redeemer who purchases our inheritance." } },
    { id: "1sa", canon: "OT", name: "1 Samuel (Shmuel Alef)", origLang: "Biblical Hebrew (שְׁמוּאֵל א׳)", chapters: 31, location: "Shiloh, Ramah, Mizpah, Bethlehem & Valley of Elah", theme: "Hannah's Prayer, Samuel the Prophet, Transition from Judges to Monarchy, Saul, and the Anointing of David", crossRefKey: "Luke 1:46–55; Acts 13:21–22", openingKjv: "for the LORD seeth not as man seeth; for man looketh on the outward appearance, but the LORD looketh on the heart.", origScriptSample: "כִּי הָאָדָם יִרְאֶה לַעֵינַיִם וַיהוָה יִרְאֶה לַלֵּבָב", translitSample: "Kî hā·’ā·ḏām yir·’eh la·‘ê·na·yim wa·YHWH yir·’eh lal·lê·ḇāḇ", keyWord: { orig: "מָשִׁיחַ (Mashiach)", strongs: "H4899", gloss: "anointed one (Messiah)", note: "Hannah's song (1 Sam 2:10) contains the first prophetic reference to the Lord's Anointed King." } },
    { id: "2sa", canon: "OT", name: "2 Samuel (Shmuel Bet)", origLang: "Biblical Hebrew (שְׁמוּאֵל ב׳)", chapters: 24, location: "Hebron & Jerusalem (City of David)", theme: "Reign of King David and the Eternal Davidic Covenant Promising an Everlasting Throne (2 Samuel 7:12–16)", crossRefKey: "Luke 1:32–33; Hebrews 1:5; Revelation 22:16", openingKjv: "And thine house and thy kingdom shall be established for ever before thee: thy throne shall be established for ever.", origScriptSample: "וְנֶאְמַן בֵּיתְךָ וּמַמְלַכְתְּךָ עַד־עוֹלָם לְפָנֶיךָ כִּסְאֲךָ יִהְיֶה נָכוֹן עַד־עוֹלָם", translitSample: "Wə·ne’·man bê·ṯə·ḵā ū·mam·laḵ·tə·ḵā ‘aḏ-‘ō·w·lām", keyWord: { orig: "עַד־עוֹלָם (Ad-Olam)", strongs: "H5769", gloss: "forever / unto eternity", note: "Tel Dan Stele (9th century BC) archaeologically confirms the historical 'House of David' (BYTDWD)." } },
    { id: "1ki", canon: "OT", name: "1 Kings (Melakhim Alef)", origLang: "Biblical Hebrew (מְלָכִים א׳)", chapters: 22, location: "Jerusalem (Solomon's Temple), Tirzah, Samaria & Mount Carmel", theme: "Solomon's Wisdom & Temple Dedication, Division of the Kingdom, and Elijah the Prophet on Mount Carmel", crossRefKey: "Matthew 12:42; Luke 4:25–26; James 5:17–18", openingKjv: "Give therefore thy servant an understanding heart to judge thy people, that I may discern between good and bad.", origScriptSample: "וְנָתַתָּ לְעַבְדְּךָ לֵב שֹׁמֵעַ לִשְׁפֹּט אֶת־עַמְּךָ", translitSample: "Wə·nā·ṯat·tā lə·‘aḇ·də·ḵā lêḇ šō·mê·a‘", keyWord: { orig: "לֵב שֹׁמֵעַ (Lev Shomea)", strongs: "H3820 / H8085", gloss: "an understanding / listening heart", note: "Solomon's prayer for judicial wisdom in 1 Kings 3:9." } },
    { id: "2ki", canon: "OT", name: "2 Kings (Melakhim Bet)", origLang: "Biblical Hebrew (מְלָכִים ב׳)", chapters: 25, location: "Samaria, Jerusalem, Shunem, Damascus, Nineveh & Babylon", theme: "Ministry of Elisha, Hezekiah's Deliverance, Josiah's Rediscovery of the Book of the Law & the Babylonian Exile", crossRefKey: "Luke 4:27; 2 Peter 3:10", openingKjv: "And Elisha prayed, and said, LORD, I pray thee, open his eyes, that he may see. And the LORD opened the eyes of the young man; and he saw: and, behold, the mountain was full of horses and chariots of fire round about Elisha.", origScriptSample: "פְּקַח־נָא אֶת־עֵינָיו וְיִרְאֶה", translitSample: "Pə·qaḥ-nā ’eṯ-‘ê·nāw wə·yir·’eh", keyWord: { orig: "תּוֹרָה (Torah)", strongs: "H8451", gloss: "Law / Divine Instruction", note: "Rediscovered in the Temple under King Josiah (2 Kings 22:8), sparking national reformation." } },
    { id: "1ch", canon: "OT", name: "1 Chronicles (Divrei HaYamim Alef)", origLang: "Biblical Hebrew (דִּבְרֵי הַיָּמִים א׳)", chapters: 29, location: "Jerusalem (Compiled by Ezra after the Return from Exile)", theme: "Sacred Genealogies from Adam to David, Organization of the Levitical Choirs & David's Doxology (1 Chr 29:11)", crossRefKey: "Matthew 1:1–17; Revelation 5:12–13", openingKjv: "Thine, O LORD, is the greatness, and the power, and the glory, and the victory, and the majesty: for all that is in the heaven and in the earth is thine; thine is the kingdom, O LORD.", origScriptSample: "לְךָ יְהוָה הַגְּדֻלָּה וְהַגְּבוּרָה וְהַתִּפְאֶרֶת", translitSample: "Lə·ḵā YHWH hag·gə·ḏul·lāh wə·hag·gə·ḇū·rāh wə·hat·tip̄·’e·reṯ", keyWord: { orig: "הַמַּמְלָכָה (HaMamlakah)", strongs: "H4467", gloss: "the sovereignty / kingdom", note: "Forms the liturgical conclusion of the Lord's Prayer ('For thine is the kingdom, and the power, and the glory')." } },
    { id: "2ch", canon: "OT", name: "2 Chronicles (Divrei HaYamim Bet)", origLang: "Biblical Hebrew (דִּבְרֵי הַיָּמִים ב׳)", chapters: 36, location: "Jerusalem Temple & Judah (Concluding with the Decree of Cyrus)", theme: "Solomon's Temple Prayer (2 Chr 7:14), Faithful Reforms of Asa, Jehoshaphat, Hezekiah & Josiah, and Cyrus's Edict", crossRefKey: "Matthew 23:35; James 4:10", openingKjv: "If my people, which are called by my name, shall humble themselves, and pray, and seek my face, and turn from their wicked ways; then will I hear from heaven, and will forgive their sin, and will heal their land.", origScriptSample: "וְיִכָּנְעוּ עַמִּי אֲשֶׁר נִקְרָא־שְׁמִי עֲלֵיהֶם וְיִתְפַּלְלוּ", translitSample: "Wə·yik·kā·nə·‘ū ‘am·mî ’ă·šer niq·rā-šə·mî ‘ă·lê·hem", keyWord: { orig: "וְאֶרְפָּא (Ve'erpa)", strongs: "H7495", gloss: "and I will heal / restore", note: "Covenant promise of spiritual and national restoration upon repentance." } },
    { id: "ezr", canon: "OT", name: "Ezra (Ezra)", origLang: "Biblical Hebrew & Imperial Aramaic (עֶזְרָא)", chapters: 10, location: "Babylon & Restored Jerusalem (538–457 BC)", theme: "Return of the Exiles Under Zerubbabel, Rebuilding the Second Temple & Ezra the Scribe's Devotion to the Law (Ezra 7:10)", crossRefKey: "2 Timothy 2:15; Nehemiah 8:8", openingKjv: "For Ezra had prepared his heart to seek the law of the LORD, and to do it, and to teach in Israel statutes and judgments.", origScriptSample: "כִּי עֶזְרָא הֵכִין לְבָבוֹ לִדְרֹשׁ אֶת־תּוֹרַת יְהוָה וְלַעֲשֹׂת וּלְלַמֵּד", translitSample: "Kî ‘Ez·rā hê·ḵîn lə·ḇā·ḇōw liḏ·rōš ’eṯ-tō·w·raṯ YHWH", keyWord: { orig: "לִדְרֹשׁ (Lidrosh)", strongs: "H1875", gloss: "to study / seek diligently / inquire", note: "The threefold model of the Christian scholar: study the Word, practice it, and teach it." } },
    { id: "neh", canon: "OT", name: "Nehemiah (Nechemyah)", origLang: "Biblical Hebrew (נְחֶמְיָה)", chapters: 13, location: "Susa Palace (Persia) & the Rebuilt Walls of Jerusalem (445–432 BC)", theme: "Rebuilding Jerusalem's Walls in 52 Days, Public Reading & Explanation of the Scripture (Neh 8:8) & Covenant Reform", crossRefKey: "Luke 4:16–20; Daniel 9:25", openingKjv: "So they read in the book in the law of God distinctly, and gave the sense, and caused them to understand the reading.", origScriptSample: "וַיִּקְרְאוּ בַסֵּפֶר בְּתוֹרַת הָאֱלֹהִים מְפֹרָשׁ וְשׂוֹם שֶׂכֶל", translitSample: "Way·yiq·rə·’ū ḇas·sê·p̄er bə·ṯō·w·raṯ hā·’ĕ·lō·hîm mə·p̄ō·rāš", keyWord: { orig: "מְפֹרָשׁ (Mephorash)", strongs: "H6567", gloss: "distinctly / with clear exegesis & translation", note: "The historical origin of expository Scripture reading and grammatical-historical commentary." } },
    { id: "est", canon: "OT", name: "Esther (Megillat Esther)", origLang: "Biblical Hebrew (אֶסְתֵּר)", chapters: 10, location: "Shushan / Susa Citadel (Capital of the Persian Empire under Xerxes I, 483–473 BC)", theme: "Unseen Providence of God Preserving the Jewish People Through Queen Esther & Mordecai ('For such a time as this')", crossRefKey: "Romans 8:28; Psalm 121:4", openingKjv: "And who knoweth whether thou art come to the kingdom for such a time as this?", origScriptSample: "וּמִי יוֹדֵעַ אִם־לְעֵת כָּזֹאת הִגַּעַתְּ לַמַּלְכוּת", translitSample: "Ū·mî yō·w·ḏê·a‘ ’im-lə·‘êṯ kā·zōṯ hig·ga·‘at lam·mal·ḵūṯ", keyWord: { orig: "לְעֵת כָּזֹאת (Le'et Kazot)", strongs: "H6256", gloss: "for such a time / appointed season as this", note: "Demonstrates divine providence orchestrating human history." } },
    { id: "job", canon: "OT", name: "Job (Iyyov)", origLang: "Poetic Biblical Hebrew (אִיּוֹב)", chapters: 42, location: "Land of Uz (Edom / Northern Arabia)", theme: "Sovereignty of the Creator Over Suffering, Resurrection Hope ('I know that my Redeemer liveth,' Job 19:25) & Cosmic Wonders (Job 38–41)", crossRefKey: "James 5:11; Romans 11:33–36; 1 Corinthians 3:19", openingKjv: "For I know that my redeemer liveth, and that he shall stand at the latter day upon the earth.", origScriptSample: "וַאֲנִי יָדַעְתִּי גֹּאֲלִי חָי וְאַחֲרוֹן עַל־עָפָר יָקוּם", translitSample: "Wa·’ă·nî yā·ḏa‘·tî gō·’ă·lî ḥāy wə·’a·ḥă·rō·wn ‘al-‘ā·p̄ār yā·qūm", keyWord: { orig: "גֹּאֲלִי חָי (Go'ali Chai)", strongs: "H1350 / H2416", gloss: "My Redeemer lives", note: "Job 26:7 also declares of the Creator: 'He stretcheth out the north over the empty place, and hangeth the earth upon nothing.'" } },
    { id: "psa", canon: "OT", name: "Psalms (Tehillim — 150 Psalms)", origLang: "Biblical Hebrew (תְּהִלִּים)", chapters: 150, location: "Jerusalem, Judean Wilderness & First/Second Temple Choirs", theme: "Praise, Lament, General & Special Revelation (Psalm 19), the Good Shepherd (Psalm 23), Word of God (Psalm 119) & Messianic Kingship (Psalms 2, 22, 110)", crossRefKey: "Luke 24:44; John 10:11; Hebrews 1:5–13", openingKjv: "The heavens declare the glory of God; and the firmament sheweth his handywork. Day unto day uttereth speech, and night unto night sheweth knowledge.", origScriptSample: "הַשָּׁמַיִם מְסַפְּרִים כְּבוֹד־אֵל וּמַעֲשֵׂה יָדָיו מַגִּיד הָרָקִיעַ", translitSample: "Haš·šā·ma·yim mə·sap·pə·rîm kə·ḇō·wḏ-’êl ū·ma·‘ă·śêh yā·ḏāw mag·gîḏ hā·rā·qî·a‘", keyWord: { orig: "תְּהִלִּים (Tehillim)", strongs: "H8416", gloss: "Praises / Hymns of Worship", note: "Quoted more frequently in the New Testament than any other Old Testament book." } },
    { id: "pro", canon: "OT", name: "Proverbs (Mishlei)", origLang: "Biblical Hebrew (מִשְׁלֵי)", chapters: 31, location: "Royal Court of Solomon in Jerusalem", theme: "The Fear of the LORD Is the Beginning of Knowledge & Wisdom (Prov 1:7; 9:10), Moral Virtue, and Creative Wisdom (Prov 8:22–31)", crossRefKey: "Colossians 2:3; 1 Corinthians 1:24, 30; James 3:17", openingKjv: "The fear of the LORD is the beginning of knowledge: but fools despise wisdom and instruction.", origScriptSample: "יִרְאַת יְהוָה רֵאשִׁית דָּעַת חָכְמָה וּמוּסָר אֱוִילִים בָּזוּ", translitSample: "Yir·’aṯ YHWH rê·šîṯ dā·‘aṯ ḥāḵ·māh ū·mū·sār ’ĕ·wî·lîm bā·zū", keyWord: { orig: "חָכְמָה (Chokhmah)", strongs: "H2451", gloss: "Wisdom / skillful mastery of life under God", note: "Translated Sophia (Σοφία) in the LXX; fulfilled in Christ 'in whom are hid all the treasures of wisdom and knowledge' (Col 2:3)." } },
    { id: "ecc", canon: "OT", name: "Ecclesiastes (Qoheleth)", origLang: "Biblical Hebrew (קֹהֶלֶת)", chapters: 12, location: "Jerusalem", theme: "Vanity of Earthly Pursuits Under the Sun Apart from God, Eternity in Man's Heart (Ecc 3:11) & 'Fear God and keep His commandments' (Ecc 12:13)", crossRefKey: "Romans 8:20; Matthew 16:26; 2 Corinthians 5:10", openingKjv: "Let us hear the conclusion of the whole matter: Fear God, and keep his commandments: for this is the whole duty of man.", origScriptSample: "סוֹף דָּבָר הַכֹּל נִשְׁמָע אֶת־הָאֱלֹהִים יְרָא וְאֶת־מִצְוֹתָיו שְׁמוֹר", translitSample: "Sō·wp̄ dā·ḇār hak·kōl niš·mā‘ ’eṯ-hā·’ĕ·lō·hîm yə·rā", keyWord: { orig: "הָעוֹלָם (Ha'Olam)", strongs: "H5769", gloss: "eternity (set in the human heart, Ecc 3:11)", note: "Explains why no finite temporal pleasure can satisfy a soul created for the Eternal God." } },
    { id: "sng", canon: "OT", name: "Song of Solomon (Shir HaShirim)", origLang: "Poetic Biblical Hebrew (שִׁיר הַשִּׁירִים)", chapters: 8, location: "Jerusalem, En-gedi & Lebanon", theme: "Sacred Beauty of Covenant Marriage & Allegory of Christ's Steadfast Love for His Bride", crossRefKey: "Ephesians 5:25–32; Revelation 19:7–9", openingKjv: "Set me as a seal upon thine heart, as a seal upon thine arm: for love is strong as death... Many waters cannot quench love.", origScriptSample: "שִׂימֵנִי כַחוֹתָם עַל־לִבֶּךָ... כִּי־עַזָּה כַמָּוֶת אַהֲבָה", translitSample: "Śî·mê·nî ḵa·ḥō·w·ṯām ‘al-lib·be·ḵā... kî-‘az·zāh ḵam·mā·weṯ ’a·hă·ḇāh", keyWord: { orig: "אַהֲבָה (Ahavah)", strongs: "H160", gloss: "covenant love / devotion", note: "Hebrew superlative 'Song of Songs' signifies the noblest song." } },
    { id: "isa", canon: "OT", name: "Isaiah (Yeshayahu)", origLang: "Biblical Hebrew (יְשַׁעְיָהוּ)", chapters: 66, location: "Jerusalem (Southern Kingdom of Judah, 740–681 BC)", theme: "Thrice-Holy God (Isa 6), Virgin Birth & Prince of Peace (Isa 7:14; 9:6), Suffering Servant (Isa 53) & New Heavens and New Earth (Isa 65–66)", crossRefKey: "Matthew 1:23; John 12:38–41; Acts 8:32–35; 1 Peter 2:22–25", openingKjv: "For unto us a child is born, unto us a son is given: and the government shall be upon his shoulder: and his name shall be called Wonderful, Counsellor, The mighty God, The everlasting Father, The Prince of Peace.", origScriptSample: "כִּי־יֶלֶד יֻלַּד־לָנוּ בֵּן נִתַּן־לָנוּ... אֵל גִּבּוֹר אֲבִי־עַד שַׂר־שָׁלוֹם", translitSample: "Kî-ye·leḏ yul·laḏ-lā·nū bên nit·tan-lā·nū... ’Êl gib·bō·wr ’ă·ḇî-‘aḏ śar-šā·lō·wm", keyWord: { orig: "עִמָּנוּ אֵל (Immanu El)", strongs: "H6005", gloss: "God with us (Isaiah 7:14)", note: "Quoted in Matthew 1:23 at the birth of Jesus Christ." } },
    { id: "jer", canon: "OT", name: "Jeremiah (Yirmeyahu)", origLang: "Biblical Hebrew (יִרְמְיָהוּ)", chapters: 52, location: "Anathoth, Jerusalem & Tahpanhes in Egypt (627–586 BC)", theme: "The Weeping Prophet's Call to Repentance, 70-Year Exile Prophecy (Jer 29:10–11) & Promise of the New Covenant Written on the Heart (Jer 31:31–34)", crossRefKey: "Luke 22:20; Hebrews 8:8–12; 10:16–17", openingKjv: "Behold, the days come, saith the LORD, that I will make a new covenant with the house of Israel, and with the house of Judah... I will put my law in their inward parts, and write it in their hearts.", origScriptSample: "הִנֵּה יָמִים בָּאִים נְאֻם־יְהוָה וְכָרַתִּי... בְּרִית חֲדָשָׁה", translitSample: "Hin·nêh yā·mîm bā·’îm nə·’um-YHWH wə·ḵā·rat·tî... bə·rîṯ ḥă·ḏā·šāh", keyWord: { orig: "בְּרִית חֲדָשָׁה (Berith Chadashah)", strongs: "H1285 / H2319", gloss: "New Covenant / New Testament", note: "Translated Kainē Diathēkē (Καινὴ Διαθήκη) in LXX and Luke 22:20—giving the New Testament its name!" } },
    { id: "lam", canon: "OT", name: "Lamentations (Eikhah)", origLang: "Acrostic Poetic Hebrew (אֵיכָה)", chapters: 5, location: "Jerusalem After the Babylonian Siege (586 BC)", theme: "Alphabetic Acrostic Elegies Over Jerusalem's Fall Centering on 'Great Is Thy Faithfulness' (Lam 3:22–23)", crossRefKey: "Matthew 23:37–38; 2 Timothy 2:13", openingKjv: "It is of the LORD'S mercies that we are not consumed, because his compassions fail not. They are new every morning: great is thy faithfulness.", origScriptSample: "חַסְדֵי יְהוָה כִּי לֹא־תָמְנוּ... רַבָּה אֱמוּנָתֶךָ", translitSample: "Ḥas·ḏê YHWH kî lō-ṯā·mə·nū... rab·bāh ’ĕ·mū·nā·ṯe·ḵā", keyWord: { orig: "אֱמוּנָתֶךָ (Emunatekha)", strongs: "H530", gloss: "Thy faithfulness / steadfast reliability", note: "Chapters 1–4 are structured as 22-letter Hebrew alphabetic acrostics." } },
    { id: "eze", canon: "OT", name: "Ezekiel (Yechezkel)", origLang: "Biblical Hebrew (יְחֶזְקֵאל)", chapters: 48, location: "Tel-abib by the Kebar Canal in Babylon (593–571 BC)", theme: "Throne-Chariot Vision of God's Glory, New Heart & New Spirit (Eze 36:26), Valley of Dry Bones (Eze 37) & River of Life from the Temple (Eze 47)", crossRefKey: "John 3:5; John 10:11; Revelation 4:6–8; 22:1–2", openingKjv: "A new heart also will I give you, and a new spirit will I put within you: and I will take away the stony heart out of your flesh, and I will give you an heart of flesh.", origScriptSample: "וְנָתַתִּי לָכֶם לֵב חָדָשׁ וְרוּחַ חֲדָשָׁה אֶתֵּן בְּקִרְבְּכֶם", translitSample: "Wə·nā·ṯat·tî lā·ḵem lêḇ ḥā·ḏāš wə·rū·aḥ ḥă·ḏā·šāh ’et·tên bə·qir·bə·ḵem", keyWord: { orig: "לֵב חָדָשׁ (Lev Chadash)", strongs: "H3820 / H2319", gloss: "a new heart", note: "Background to Jesus' conversation with Nicodemus on being born of water and the Spirit (John 3:5–10)." } },
    { id: "dan", canon: "OT", name: "Daniel (Daniyyel)", origLang: "Biblical Hebrew & Imperial Aramaic (דָּנִיֵּאל)", chapters: 12, location: "Royal Court of Babylon & Medo-Persia (605–536 BC)", theme: "Fidelity in Exile, Fiery Furnace & Lions' Den, Four World Empires, the Son of Man Receiving an Everlasting Kingdom (Dan 7:13–14) & 70 Weeks Prophecy (Dan 9)", crossRefKey: "Matthew 24:15; 26:64; Revelation 1:7, 13; 13:1–7", openingKjv: "I saw in the night visions, and, behold, one like the Son of man came with the clouds of heaven, and came to the Ancient of days... His dominion is an everlasting dominion, which shall not pass away.", origScriptSample: "כְּבַר אֱנָשׁ אָתֵה הֲוָה וְעַד־עַתִּיק יוֹמַיָּא מְטָה", translitSample: "Kə·ḇar ’ĕ·nāš ’ā·ṯêh hă·wāh wə·‘aḏ-‘at·tîq yō·w·may·yā mə·ṭāh", keyWord: { orig: "בַּר אֱנָשׁ (Bar Enash)", strongs: "H1247 / H606", gloss: "Son of Man (Aramaic title in Dan 7:13)", note: "Jesus' favorite self-designation in the four Gospels (ho Huios tou Anthrōpou)." } },
    { id: "hos", canon: "OT", name: "Hosea (Hoshea)", origLang: "Biblical Hebrew (הוֹשֵׁעַ)", chapters: 14, location: "Northern Kingdom of Israel (Samaria, 755–715 BC)", theme: "God's Unfailing Redemptive Love for an Unfaithful People ('Out of Egypt have I called my son,' Hos 11:1; 'I desired mercy, and not sacrifice,' Hos 6:6)", crossRefKey: "Matthew 2:15; 9:13; 1 Corinthians 15:55 (quoting Hos 13:14)", openingKjv: "For I desired mercy, and not sacrifice; and the knowledge of God more than burnt offerings.", origScriptSample: "כִּי חֶסֶד חָפַצְתִּי וְלֹא־זָבַח וְדַעַת אֱלֹהִים מֵעֹלוֹת", translitSample: "Kî ḥe·seḏ ḥā·p̄aṣ·tî wə·lō-zā·ḇaḥ wə·ḏa·‘aṯ ’ĕ·lō·hîm mê·‘ō·lō·wṯ", keyWord: { orig: "חֶסֶד (Chesed)", strongs: "H2617", gloss: "steadfast covenant love / mercy", note: "Quoted twice by Jesus in Matthew 9:13 and 12:7." } },
    { id: "joe", canon: "OT", name: "Joel (Yo'el)", origLang: "Biblical Hebrew (יוֹאֵל)", chapters: 3, location: "Jerusalem & Judah", theme: "The Day of the LORD, Heartfelt Repentance ('Rend your heart, and not your garments') & Outpouring of the Holy Spirit on All Flesh (Joel 2:28–32)", crossRefKey: "Acts 2:16–21; Romans 10:13", openingKjv: "And it shall come to pass afterward, that I will pour out my spirit upon all flesh; and your sons and your daughters shall prophesy... And it shall come to pass, that whosoever shall call on the name of the LORD shall be delivered.", origScriptSample: "אֶשְׁפּוֹךְ אֶת־רוּחִי עַל־כָּל־בָּשָׂר", translitSample: "’Eš·pō·wḵ ’eṯ-rū·ḥî ‘al-kāl-bā·śār", keyWord: { orig: "רוּחִי (Ruchi)", strongs: "H7307", gloss: "My Spirit", note: "Proclaimed fulfilled by the Apostle Peter on the Day of Pentecost in Acts 2:16–21." } },
    { id: "amo", canon: "OT", name: "Amos (Amos)", origLang: "Biblical Hebrew (עָמוֹס)", chapters: 9, location: "Tekoa in Judah → Preaching at Bethel in the Northern Kingdom (c. 760 BC)", theme: "Universal Justice of the Creator ('Let judgment run down as waters,' Amos 5:24) & Restoration of the Fallen Tent of David (Amos 9:11–12)", crossRefKey: "Acts 15:15–17; Acts 7:42–43", openingKjv: "But let judgment run down as waters, and righteousness as a mighty stream.", origScriptSample: "וְיִגַּל כַּמַּיִם מִשְׁפָּט וּצְדָקָה כְּנַחַל אֵיתָן", translitSample: "Wə·yig·gal kam·ma·yim miš·pāṭ ū·ṣə·ḏā·qāh kə·na·ḥal ’ê·ṯān", keyWord: { orig: "מִשְׁפָּט וּצְדָקָה (Mishpat u-Tzedaqah)", strongs: "H4941 / H6666", gloss: "justice and righteousness", note: "Amos 9:11–12 is cited by James at the Jerusalem Council (Acts 15:16–17) to confirm Gentile inclusion." } },
    { id: "oba", canon: "OT", name: "Obadiah (Ovadyah)", origLang: "Biblical Hebrew (עֹבַדְיָה)", chapters: 1, location: "Judah & Edom (Mount Seir / Petra)", theme: "Judgment on Prideful Edom for Violence Against Jacob & 'The Kingdom Shall Be the LORD's' (Obadiah 1:21)", crossRefKey: "Revelation 11:15", openingKjv: "And saviours shall come up on mount Zion to judge the mount of Esau; and the kingdom shall be the LORD'S.", origScriptSample: "וְהָיְתָה לַיהוָה הַמְּלוּכָה", translitSample: "Wə·hā·yə·ṯāh la·YHWH ham·mə·lū·ḵāh", keyWord: { orig: "הַמְּלוּכָה (HaMelukhah)", strongs: "H4410", gloss: "the kingship / royal dominion", note: "Shortest book in the Hebrew Old Testament (21 verses)." } },
    { id: "jon", canon: "OT", name: "Jonah (Yonah)", origLang: "Biblical Hebrew (יוֹנָה)", chapters: 4, location: "Joppa, Mediterranean Sea & Nineveh (Capital of Assyria)", theme: "Sign of Jonah (Three Days and Nights), Repentance of Nineveh & God's Compassion for the Nations ('Salvation is of the LORD,' Jonah 2:9)", crossRefKey: "Matthew 12:39–41; Luke 11:29–32", openingKjv: "But I will sacrifice unto thee with the voice of thanksgiving; I will pay that that I have vowed. Salvation is of the LORD.", origScriptSample: "יְשׁוּעָתָה לַיהוָה", translitSample: "Yə·šū·‘ā·ṯāh la·YHWH", keyWord: { orig: "יְשׁוּעָתָה (Yeshu'atah)", strongs: "H3444", gloss: "Salvation / deliverance", note: "Jesus cites the historical Sign of Jonah as the type of His death and resurrection on the third day (Matt 12:40)." } },
    { id: "mic", canon: "OT", name: "Micah (Mikhah)", origLang: "Biblical Hebrew (מִיכָה)", chapters: 7, location: "Moresheth in Judah & Jerusalem (735–700 BC)", theme: "Prophecy of Messiah's Birth in Bethlehem Ephratah (Micah 5:2), Walking Humbly with God (Micah 6:8) & Casting Sins into the Depths of the Sea (Micah 7:19)", crossRefKey: "Matthew 2:5–6; John 7:42", openingKjv: "But thou, Beth-lehem Ephratah, though thou be little among the thousands of Judah, yet out of thee shall he come forth unto me that is to be ruler in Israel; whose goings forth have been from of old, from everlasting.", origScriptSample: "וְאַתָּה בֵּית־לֶחֶם אֶפְרָתָה... מִמְּךָ לִי יֵצֵא לִהְיוֹת מוֹשֵׁל בְּיִשְׂרָאֵל", translitSample: "Wə·’at·tāh Bêṯ-Le·ḥem ’Ep̄·rā·ṯāh... mim·mə·ḵā lî yê·ṣê", keyWord: { orig: "מִימֵי עוֹלָם (Mimei Olam)", strongs: "H3117 / H5769", gloss: "from days of eternity", note: "Cited by the chief priests and scribes to Herod in Matthew 2:5–6 to pinpoint Messiah's birthplace." } },
    { id: "nah", canon: "OT", name: "Nahum (Nachum)", origLang: "Biblical Hebrew (נַחוּם)", chapters: 3, location: "Elkosh in Judah → Oracle Concerning Nineveh (c. 650–612 BC)", theme: "The LORD Is Slow to Anger and Great in Power, a Stronghold in the Day of Trouble (Nahum 1:7) & Fall of Nineveh", crossRefKey: "Romans 10:15 (quoting Nahum 1:15 / Isaiah 52:7)", openingKjv: "The LORD is good, a strong hold in the day of trouble; and he knoweth them that trust in him.", origScriptSample: "טוֹב יְהוָה לְמָעוֹז בְּיוֹם צָרָה וְיֹדֵעַ חֹסֵי בוֹ", translitSample: "Ṭō·wḇ YHWH lə·mā·‘ō·wz bə·yō·wm ṣā·rāh wə·yō·ḏê·a‘ ḥō·sê ḇōw", keyWord: { orig: "לְמָעוֹז (LeMa'oz)", strongs: "H4581", gloss: "a stronghold / fortress of refuge", note: "Comforts Judah with God's righteous governance over tyrannical empires." } },
    { id: "hab", canon: "OT", name: "Habakkuk (Chavaqquq)", origLang: "Biblical Hebrew (חֲבַקּוּק)", chapters: 3, location: "Jerusalem on the Watchtower (c. 608–598 BC)", theme: "Theodicy Dialogue, 'The Just Shall Live by His Faith' (Hab 2:4), the Earth Filled with the Glory of the LORD (Hab 2:14) & Joy in God's Salvation (Hab 3:18)", crossRefKey: "Romans 1:17; Galatians 3:11; Hebrews 10:38", openingKjv: "Behold, his soul which is lifted up is not upright in him: but the just shall live by his faith.", origScriptSample: "וְצַדִּיק בֶּאֱמוּנָתוֹ יִחְיֶה", translitSample: "Wə·ṣad·dîq be·’ĕ·mū·nā·ṯōw yiḥ·yeh", keyWord: { orig: "בֶּאֱמוּנָתוֹ (Be'Emunato)", strongs: "H530", gloss: "by his faith / steadfast trust", note: "Three-word Hebrew axiom (वे-tsaddiq be-emunato yichyeh) that anchors Romans, Galatians, and Hebrews!" } },
    { id: "zep", canon: "OT", name: "Zephaniah (Tzephanyah)", origLang: "Biblical Hebrew (צְפַנְיָה)", chapters: 3, location: "Jerusalem During King Josiah's Reign (c. 630 BC)", theme: "The Day of the LORD, Purification of a Humble Remnant & God Rejoicing Over His People with Singing (Zeph 3:17)", crossRefKey: "Luke 1:28; Revelation 19:6", openingKjv: "The LORD thy God in the midst of thee is mighty; he will save, he will rejoice over thee with joy; he will rest in his love, he will joy over thee with singing.", origScriptSample: "יְהוָה אֱלֹהַיִךְ בְּקִרְבֵּךְ גִּבּוֹר יוֹשִׁיעַ", translitSample: "YHWH ’ĕ·lō·ha·yiḵ bə·qir·bêḵ gib·bō·wr yō·w·šî·a‘", keyWord: { orig: "גִּבּוֹר יוֹשִׁיעַ (Gibbor Yoshi'a)", strongs: "H1368 / H3467", gloss: "a Mighty One who saves", note: "Reveals the tender heart of the Almighty singing over His redeemed people." } },
    { id: "hag", canon: "OT", name: "Haggai (Chaggai)", origLang: "Biblical Hebrew (חַגַּי)", chapters: 2, location: "Jerusalem Temple Mount (520 BC)", theme: "Call to Rebuild the House of the LORD ('Consider your ways') & Promise That the Latter Glory of This House Shall Be Greater (Haggai 2:9)", crossRefKey: "Hebrews 12:26; John 2:19–21; Luke 2:27–32", openingKjv: "The glory of this latter house shall be greater than of the former, saith the LORD of hosts: and in this place will I give peace, saith the LORD of hosts.", origScriptSample: "גָּדוֹל יִהְיֶה כְּבוֹד הַבַּיִת הַזֶּה הָאַחֲרוֹן מִן־הָרִאשׁוֹן", translitSample: "Gā·ḏō·wl yih·yeh kə·ḇō·wḏ hab·ba·yiṯ haz·zeh hā·’a·ḥă·rō·wn", keyWord: { orig: "כְּבוֹד (Kavod)", strongs: "H3519", gloss: "glory / manifest presence", note: "Fulfilled when Jesus Christ, the Lord of the Temple, entered the Second Temple courts in person." } },
    { id: "zec", canon: "OT", name: "Zechariah (Zekharyah)", origLang: "Biblical Hebrew (זְכַרְיָה)", chapters: 14, location: "Post-Exilic Jerusalem (520–480 BC)", theme: "'Not by might, nor by power, but by my Spirit' (Zech 4:6), the Humble King Riding on a Colt (Zech 9:9) & 'They shall look upon me whom they have pierced' (Zech 12:10)", crossRefKey: "Matthew 21:4–5; John 19:37; Revelation 1:7", openingKjv: "Rejoice greatly, O daughter of Zion; shout, O daughter of Jerusalem: behold, thy King cometh unto thee: he is just, and having salvation; lowly, and riding upon an ass.", origScriptSample: "הִנֵּה מַלְכֵּךְ יָבוֹא לָךְ צַדִּיק וְנוֹשָׁע הוּא", translitSample: "Hin·nêh mal·kêḵ yā·ḇō·w lāḵ ṣad·dîq wə·nō·w·šā‘ hū", keyWord: { orig: "צַדִּיק וְנוֹשָׁע (Tsaddiq ve-Nosha)", strongs: "H6662 / H3467", gloss: "righteous and bringing salvation", note: "Fulfilled on Palm Sunday (Matthew 21:5; John 12:15)." } },
    { id: "mal", canon: "OT", name: "Malachi (Mal'akhi)", origLang: "Biblical Hebrew (מַלְאָכִי)", chapters: 4, location: "Post-Exilic Jerusalem (c. 430 BC — Final Book of the Hebrew Prophets)", theme: "The Messenger of the Covenant (Mal 3:1), the Unchanging LORD ('I am the LORD, I change not,' Mal 3:6) & the Sun of Righteousness Rising with Healing in His Wings (Mal 4:2)", crossRefKey: "Mark 1:2; Matthew 11:10; Luke 1:17, 78", openingKjv: "But unto you that fear my name shall the Sun of righteousness arise with healing in his wings.", origScriptSample: "וְזָרְחָה לָכֶם יִרְאֵי שְׁמִי שֶׁמֶשׁ צְדָקָה וּמַרְפֵּא בִּכְנָפֶיהָ", translitSample: "Wə·zā·rə·ḥāh lā·ḵem yir·’ê šə·mî še·meš ṣə·ḏā·qāh ū·mar·pê biḵ·nā·p̄e·hā", keyWord: { orig: "שֶׁמֶשׁ צְדָקָה (Shemesh Tzedaqah)", strongs: "H8121 / H6666", gloss: "Sun of Righteousness", note: "Closes the Old Testament canon looking directly toward John the Baptist and the coming of Christ." } },

    // ==================== APOCRYPHA / DEUTEROCANON, SEPTUAGINT (LXX) & BOOK OF ENOCH (15 BOOKS · 274 CHAPTERS) ====================
    { id: "tob", canon: "APOC", name: "Tobit (Tobith)", origLang: "Aramaic / Hebrew (Dead Sea Scrolls 4Q196–200) & LXX Greek (Τωβίτ)", chapters: 14, location: "Nineveh (Assyrian Exile), Rages & Ecbatana in Media", theme: "Providence of God over Righteous Families in Exile, Prayer, Almsgiving, and the Golden Rule Parallel (Tobit 4:15)", crossRefKey: "Acts 10:4; Matthew 7:12; Revelation 8:3–4", openingKjv: "Do that to no man which thou hatest: drink not wine to make thee drunken... Give of thy bread to the hungry, and of thy garments to them that are naked.", origScriptSample: "καὶ ὃ μισεῖς, μηδενὶ ποιήσῃς", translitSample: "Kai ho miseis, mēdeni poiēsēs", keyWord: { orig: "ἐλεημοσύνη (Eleēmosynē)", strongs: "G1654", gloss: "almsgiving / merciful charity", note: "Five Aramaic and Hebrew manuscripts of Tobit were discovered among the Dead Sea Scrolls in Qumran Cave 4." } },
    { id: "jdt", canon: "APOC", name: "Judith (Ioudith)", origLang: "Hebrew Idiom Preserved in Septuagint Koine Greek (Ἰουδίθ)", chapters: 16, location: "Bethulia & Jerusalem in Judea", theme: "Courageous Faith, Fasting, Prayer & Deliverance of God's People Against Overwhelming Imperial Siege", crossRefKey: "Judges 4–5; Luke 1:42; Hebrews 11:34", openingKjv: "O Lord God of all power, look at this present time upon the works of thine hands for the exaltation of Jerusalem.", origScriptSample: "Κύριε ὁ Θεὸς πάσης δυνάμεως", translitSample: "Kyrie ho Theos pasēs dynameōs", keyWord: { orig: "σωτηρία (Sōtēria)", strongs: "G4991", gloss: "deliverance / salvation", note: "Judith 16 preserves a classic thanksgiving hymn celebrating God as the protector of the humble." } },
    { id: "wis", canon: "APOC", name: "Wisdom of Solomon (Sophia Salomonos)", origLang: "Septuagint Koine Greek (Σοφία Σαλωμῶνος)", chapters: 19, location: "Alexandria, Egypt (Hellenistic Jewish Diaspora, 2nd–1st Century BC)", theme: "Divine Wisdom as the Radiance of Eternal Light (Wis 7:26), Immortality of the Righteous (Wis 3:1) & God Ordering All Things in Measure, Number, and Weight (Wis 11:20)", crossRefKey: "Hebrews 1:3; Romans 1:19–20; Colossians 1:15–17; Ephesians 6:11–17", openingKjv: "For she [Wisdom] is the brightness of the everlasting light, the unspotted mirror of the power of God, and the image of his goodness... But thou hast ordered all things in measure and number and weight.", origScriptSample: "ἀπαύγασμα γάρ ἐστιν φωτὸς ἀϊδίου... πάντα μέτρῳ καὶ ἀριθμῷ καὶ σταθμῷ διέταξας", translitSample: "Apaugasma gar estin phōtos aidiou... panta metrō kai arithmō kai stathmō dietaxas", keyWord: { orig: "ἀπαύγασμα (Apaugasma)", strongs: "G541", gloss: "radiance / effulgence (Wis 7:26)", note: "Rare Greek term used in Hebrews 1:3 ('Who being the brightness [apaugasma] of his glory')!" } },
    { id: "sir", canon: "APOC", name: "Sirach / Ecclesiasticus (Wisdom of Ben Sira)", origLang: "Biblical Hebrew (Masada & Cairo Geniza Scrolls) & LXX Greek (Σοφία Σειράχ)", chapters: 51, location: "Jerusalem (Written by Joshua ben Sira c. 180 BC; Translated into Greek in Alexandria 132 BC)", theme: "'All Wisdom Cometh from the Lord' (Sirach 1:1), Reverence for Parents, Humility, Prayer & 'Let Us Now Praise Famous Men' (Sirach 44–50)", crossRefKey: "James 1:5, 19; Luke 1:52; Matthew 6:12, 14; Hebrews 11", openingKjv: "All wisdom cometh from the Lord, and is with him for ever.", origScriptSample: "Πᾶσα σοφία παρὰ Κυρίου, καὶ μετ᾽ αὐτοῦ ἐστιν εἰς τὸν αἰῶνα", translitSample: "Pasa sophia para Kyriou, kai met' autou estin eis ton aiōna", keyWord: { orig: "σοφία (Sophia / Chokhmah)", strongs: "G4678", gloss: "divine and moral wisdom", note: "Called Ecclesiasticus ('The Church Book') in early Christian curricula for its rich ethical instruction." } },
    { id: "bar", canon: "APOC", name: "Baruch (Barouch)", origLang: "Hebrew Original & Septuagint Koine Greek (Βαρούχ)", chapters: 5, location: "Babylon & Jerusalem (Attributed to Baruch ben Neriah, Scribe of Jeremiah)", theme: "Confession of National Sin in Exile, Praise of Eternal Wisdom & Consolation for Jerusalem", crossRefKey: "Daniel 9:5–10; Jeremiah 36:4; John 1:14", openingKjv: "This is the book of the commandments of God, and the law that endureth for ever... Turn thee, O Jacob, and take hold of it: walk in the presence of the light thereof.", origScriptSample: "Αὕτη ἡ βίβλος τῶν προσταγμάτων τοῦ Θεοῦ", translitSample: "Hautē hē biblos tōn prostagmatōn tou Theou", keyWord: { orig: "ἐπιστροφή (Epistrophē)", strongs: "G1995", gloss: "turning back / conversion to God", note: "Baruch 3:37 was cited by early Church Fathers alongside John 1:14." } },
    { id: "lje", canon: "APOC", name: "Letter of Jeremiah (Epistle of Jeremy)", origLang: "Hebrew / Aramaic & Septuagint Koine Greek (Ἐπιστολὴ Ἰερεμίου)", chapters: 1, location: "Sent from Jerusalem to the Captives Bound for Babylon", theme: "Prophetic Satire Exposing the Futility of Babylonian Idols of Silver, Gold, and Wood Versus the Living Creator", crossRefKey: "Jeremiah 10:1–16; Isaiah 44:9–20; 1 Corinthians 8:4", openingKjv: "Be not afraid of them; for they cannot curse nor bless kings... But the angel of the Lord is with you, and he careth for your souls.", origScriptSample: "μὴ οὖν φοβηθῆτε αὐτούς· οὐδὲ γὰρ βασιλεῦσιν οὐ μὴ καταράσωνται", translitSample: "Mē oun phobēthēte autous; oude gar basileusin ou mē katarasōntai", keyWord: { orig: "εἴδωλον (Eidōlon)", strongs: "G1497", gloss: "lifeless idol / image", note: "Preserved on a 2nd-century BC Greek papyrus fragment in Qumran Cave 7 (7Q2)." } },
    { id: "s3y", canon: "APOC", name: "Prayer of Azariah & Song of the Three Holy Children", origLang: "Semitic Original & Septuagint Greek (Προσευχὴ Ἀζαρίου)", chapters: 1, location: "Babylon (Inside the Fiery Furnace of Daniel 3)", theme: "Penitential Prayer of Azariah (Abednego) & the Classic Hymn 'Benedicite, Omnia Opera Domini' ('O All Ye Works of the Lord, Bless Ye the Lord')", crossRefKey: "Daniel 3:23–25; Psalm 148; Revelation 5:13", openingKjv: "O all ye works of the Lord, bless ye the Lord: praise and exalt him above all for ever.", origScriptSample: "Εὐλογεῖτε, πάντα τὰ ἔργα Κυρίου, τὸν Κύριον· ὑμνεῖτε καὶ ὑπερυψοῦτε αὐτὸν εἰς τοὺς αἰῶνας", translitSample: "Eulogeite, panta ta erga Kyriou, ton Kyrion", keyWord: { orig: "ὑπερυψοῦτε (Hyperypsoute)", strongs: "G5251", gloss: "exalt supremely above all", note: "Sung in Christian morning liturgy (the Benedicite) since the 4th century." } },
    { id: "sus", canon: "APOC", name: "Susanna (History of Susanna)", origLang: "Septuagint & Theodotion Koine Greek (Σουσάννα)", chapters: 1, location: "Babylon (Jewish Exilic Community)", theme: "Integrity of Righteous Susanna, God Hearing the Cry of the Innocent & Young Daniel's Cross-Examination of False Witnesses", crossRefKey: "Daniel 1:17; 1 Kings 3:16–28; Matthew 10:16", openingKjv: "O everlasting God, that knowest the secrets, and knowest all things before they be: Thou knowest that they have borne false witness against me.", origScriptSample: "Ὁ Θεὸς ὁ αἰώνιος, ὁ τῶν κρυπτῶν γνώστης, ὁ εἰδὼς τὰ πάντα πρὶν γενέσεως αὐτῶν", translitSample: "Ho Theos ho aiōnios, ho tōn kryptōn gnōstēs", keyWord: { orig: "κρυπτῶν γνώστης (Kryptōn Gnōstēs)", strongs: "G2927 / G1109", gloss: "Knower of hidden secrets", note: "Illustrates classical forensic cross-examination by separating false witnesses ('Under what tree did you see them?')." } },
    { id: "bel", canon: "APOC", name: "Bel and the Dragon", origLang: "Septuagint & Theodotion Koine Greek (Βὴλ καὶ Δράκων)", chapters: 1, location: "Babylon under Cyrus the Persian", theme: "Daniel's Empirical Demonstration That the Idol Bel Does Not Eat Offerings & God's Deliverance of Daniel", crossRefKey: "Daniel 6:16–23; Acts 17:24–25", openingKjv: "Then shouted the king with a loud voice, and said, Great art thou, O Lord God of Daniel, and there is none other beside thee.", origScriptSample: "Μέγας εἶ, Κύριε ὁ Θεὸς τοῦ Δανιήλ, καὶ οὐκ ἔστιν πλὴν σοῦ ἄλλος", translitSample: "Megas ei, Kyrie ho Theos tou Daniēl, kai ouk estin plēn sou allos", keyWord: { orig: "ζῶν Θεός (Zōn Theos)", strongs: "G2198 / G2316", gloss: "Living God", note: "Contrasts dead pagan idols with the Living Creator." } },
    { id: "1ma", canon: "APOC", name: "1 Maccabees (Makkabaion A)", origLang: "Hebrew Original & Septuagint Koine Greek (Μακκαβαίων Αʹ)", chapters: 16, location: "Jerusalem, Modein & Judea (175–134 BC Intertestamental Period)", theme: "Indispensable Historical Bridge Between Old & New Testaments: Resistance to Antiochus IV Epiphanes & Cleansing/Rededication of the Temple (164 BC)", crossRefKey: "John 10:22 (Feast of the Dedication at Jerusalem); Daniel 8 & 11", openingKjv: "Then said Judas and his brethren, Behold, our enemies are discomfited: let us go up to cleanse and dedicate the sanctuary.", origScriptSample: "Ἰδοὺ συνετρίβησαν οἱ ἐχθροὶ ἡμῶν· ἀναβῶμεν καθαρίσαι τὰ ἅγια καὶ ἐγκαινίσαι", translitSample: "Idou synetribēsan hoi echthroi hēmōn; anabōmen katharisai ta hagia kai enkainisai", keyWord: { orig: "ἐγκαίνια (Enkainia)", strongs: "G1456", gloss: "Dedication / Renewal (Hanukkah)", note: "Directly explains the 'Feast of the Dedication' (ta enkainia) that Jesus attended in Jerusalem in John 10:22!" } },
    { id: "2ma", canon: "APOC", name: "2 Maccabees (Makkabaion B)", origLang: "Koine Greek Epitome of Jason of Cyrene (Μακκαβαίων Βʹ)", chapters: 15, location: "Jerusalem & Judea (180–161 BC)", theme: "Creation ex Nihilo (2 Macc 7:28) & Explicit Bodily Resurrection Hope of the Seven Martyr Brothers and Their Mother (2 Maccabees 7)", crossRefKey: "Hebrews 11:35 ('others were tortured, not accepting deliverance; that they might obtain a better resurrection')", openingKjv: "I beseech thee, my son, look upon the heaven and the earth, and all that is therein, and consider that God made them of things that were not.", origScriptSample: "ἀξιοῦσά σε, τέκνον, ἀναβλέψαντα εἰς τὸν οὐρανὸν καὶ τὴν γῆν... ὅτι ἐξ οὐκ ὄντων ἐποίησεν αὐτὰ ὁ Θεός", translitSample: "Hoti ex ouk ontōn epoiēsen auta ho Theos", keyWord: { orig: "ἐξ οὐκ ὄντων (Ex ouk ontōn)", strongs: "G1537 / G3756 / G5607", gloss: "out of things that were not (Creation ex nihilo)", note: "2 Maccabees 7 is directly referenced by Hebrews 11:35 ('that they might obtain a better resurrection')." } },
    { id: "1es", canon: "APOC", name: "1 Esdras (Greek Ezra / 3 Esdras)", origLang: "Septuagint Koine Greek (Ἔσδρας Αʹ)", chapters: 9, location: "Babylon, Persian Court of Darius & Jerusalem", theme: "Return from Exile, Rebuilding the Temple & the Famous Contest of the Three Guardsmen ('Great is Truth, and mighty above all things,' 1 Esdras 4:41)", crossRefKey: "John 8:32; John 14:6; Ezra 1–10", openingKjv: "And all the people then shouted, and said, Great is Truth, and mighty above all things (Magna est veritas, et praevalet).", origScriptSample: "Μεγάλη ἡ ἀλήθεια καὶ ὑπερισχύει", translitSample: "Megalē hē alētheia kai hyperischyei", keyWord: { orig: "ἡ ἀλήθεια (Hē Alētheia)", strongs: "G225", gloss: "the Truth", note: "Source of the classical Latin motto 'Magna est veritas et praevalet' ('Great is the truth and it prevails')." } },
    { id: "2es", canon: "APOC", name: "2 Esdras (4 Ezra · Latin Vulgate Appendix)", origLang: "Hebrew / Aramaic Original Preserved in Latin & Syriac (Esdras IV)", chapters: 16, location: "Babylon (Thirty Years After the Fall of Jerusalem)", theme: "Seven Apocalyptic Visions of Ezra Grappling with Suffering, Divine Justice & the Coming of the Son of God", crossRefKey: "Daniel 7; Revelation 19–21; Matthew 23:37", openingKjv: "For evil shall be put out, and deceit shall be quenched. As for faith, it shall flourish, corruption shall be overcome, and the truth, which hath been so long without fruit, shall be declared.", origScriptSample: "Veritas enim quae sine fructu fuit tot temporibus ostendetur", translitSample: "Veritas enim quae sine fructu fuit tot temporibus ostendetur", keyWord: { orig: "Veritas / Ἀλήθεια", strongs: "G225", gloss: "Revealed Truth", note: "Included in the 1611 King James Bible Apocrypha section alongside 1 Esdras." } },
    { id: "pma", canon: "APOC", name: "Prayer of Manasseh", origLang: "Septuagint Koine Greek (Προσευχὴ Μανασσῆ)", chapters: 1, location: "Babylonian Captivity (Referencing 2 Chronicles 33:11–19)", theme: "Penitential Prayer of King Manasseh Celebrating God's Boundless Mercy Toward the Repentant Sinner", crossRefKey: "2 Chronicles 33:12–13, 18–19; Luke 15:18–21; Psalm 51", openingKjv: "For thou, O Lord, according to thy great goodness hast promised repentance and forgiveness to them that have sinned against thee.", origScriptSample: "σὺ γὰρ εἶ Κύριος ὁ Ὕψιστος, εὔσπλαγχνος, μακρόθυμος καὶ πολυέλεος", translitSample: "Sy gar ei Kyrios ho Hypsistos, eusplanchnos, makrothymos kai polyeleos", keyWord: { orig: "πολυέλεος (Polyeleos)", strongs: "G4184", gloss: "abounding in mercy / plenteous in compassion", note: "Fulfills the reference in 2 Chronicles 33:18 to 'his prayer unto his God' recorded in the annals of Israel's kings." } },
    { id: "1en", canon: "APOC", name: "Book of Enoch (1 Enoch · Ethiopian Canon & Dead Sea Scrolls)", origLang: "Aramaic (Dead Sea Scrolls 4Q201–212), Greek & Ge'ez Ethiopic (መጽሐፈ ሄኖክ)", chapters: 108, location: "Mount Hermon, Qumran Caves (Judea) & Preserved in the Ethiopian Orthodox Canon", theme: "Second Temple Apocalyptic Classic (Watchers, Parables of the Son of Man, Astronomical Book, Dream Visions & Epistle of Enoch) Directly Quoted in Jude 1:14–15", crossRefKey: "Jude 1:14–15 (quotes 1 Enoch 1:9); 2 Peter 2:4; Genesis 5:21–24; 6:1–4", openingKjv: "And behold! He cometh with ten thousands of His holy ones to execute judgment upon all, and to destroy all the ungodly (1 Enoch 1:9).", origScriptSample: "ἰδοὺ ἔρχεται σὺν ταῖς μυριάσιν αὐτοῦ καὶ τοῖς ἁγίοις αὐτοῦ ποιῆσαι κρίσιν κατὰ πάντων", translitSample: "Idou erchetai syn tais myriasin autou kai tois hagiois autou poiēsai krisin kata pantōn", keyWord: { orig: "עִירִין / Ἐγρήγοροι (Watchers)", strongs: "H5894", gloss: "Watchers / Heavenly Guardians (cf. Daniel 4:13, 17)", note: "Not part of the 1611 KJV 14-book Apocrypha, but canonical in the Ethiopian Orthodox Tewahedo Church and cited directly by Jude 1:14–15!" } },

    // ==================== NEW TESTAMENT (KOINE GREEK NOVUM TESTAMENTUM — 27 BOOKS · 260 CHAPTERS) ====================
    { id: "mat", canon: "NT", name: "Matthew (Kata Matthaion)", origLang: "Koine Greek (Κατὰ Ματθαῖον)", chapters: 28, location: "Bethlehem, Galilee (Capernaum, Mount of Beatitudes) & Jerusalem", theme: "Jesus the Promised Messiah, Son of David & Son of Abraham; Sermon on the Mount (Matt 5–7), Parables of the Kingdom & the Great Commission (Matt 28:18–20)", crossRefKey: "Genesis 12:3; 2 Samuel 7:12; Isaiah 7:14; 53:4", openingKjv: "Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost: Teaching them to observe all things whatsoever I have commanded you: and, lo, I am with you alway, even unto the end of the world.", origScriptSample: "πορευθέντες οὖν μαθητεύσατε πάντα τὰ ἔθνη... καὶ ἰδοὺ ἐγὼ μεθ᾽ ὑμῶν εἰμι πάσας τὰς ἡμέρας", translitSample: "Poreuthentes oun mathēteusate panta ta ethnē... kai idou egō meth' hymōn eimi pasas tas hēmeras", keyWord: { orig: "μαθητεύσατε (Mathēteusate)", strongs: "G3100", gloss: "make disciples / scholars of all nations", note: "Root of Greek mathēmatikos ('disposed to learn' / mathematics)—calling the Church to disciple every nation in Christ's truth." } },
    { id: "mrk", canon: "NT", name: "Mark (Kata Markon)", origLang: "Koine Greek (Κατὰ Μᾶρκον)", chapters: 16, location: "Galilee, Caesarea Philippi, Judea & Jerusalem (Written from Peter's Testimony in Rome)", theme: "Action-Filled Gospel of the Servant-King Who Came Not to Be Served, But to Serve and Give His Life a Ransom for Many (Mark 10:45)", crossRefKey: "Isaiah 40:3; Isaiah 53:10–12; 1 Peter 5:13", openingKjv: "For even the Son of man came not to be ministered unto, but to minister, and to give his life a ransom for many.", origScriptSample: "καὶ γὰρ ὁ Υἱὸς τοῦ ἀνθρώπου οὐκ ἦλθεν διακονηθῆναι ἀλλὰ διακονῆσαι καὶ δοῦναι τὴν ψυχὴν αὐτοῦ λύτρον ἀντὶ πολλῶν", translitSample: "Kai gar ho Huios tou anthrōpou ouk ēlthen diakonēthēnai alla diakonēsai kai dounai tēn psychēn autou lytron anti pollōn", keyWord: { orig: "λύτρον (Lytron)", strongs: "G3083", gloss: "ransom price of redemption", note: "Defines the substitutionary atonement of Christ's cross." } },
    { id: "luk", canon: "NT", name: "Luke (Kata Loukan)", origLang: "Literary Koine Greek (Κατὰ Λουκᾶν)", chapters: 24, location: "Bethlehem, Nazareth, Galilee, Samaria, Jerusalem & Emmaus", theme: "Careful Historical Investigation for Theophilus (Luke 1:1–4), Songs of the Incarnation, Parables of Grace (Good Samaritan, Prodigal Son) & Emmaus Road", crossRefKey: "Isaiah 61:1–2; Malachi 4:5–6; Acts 1:1", openingKjv: "For the Son of man is come to seek and to save that which was lost.", origScriptSample: "ἦλθεν γὰρ ὁ Υἱὸς τοῦ ἀνθρώπου ζητῆσαι καὶ σῶσαι τὸ ἀπολωλός", translitSample: "Ēlthen gar ho Huios tou anthrōpou zētēsai kai sōsai to apolōlos", keyWord: { orig: "ἀκριβῶς (Akribōs)", strongs: "G199", gloss: "accurately / with historical precision (Luke 1:3)", note: "Luke the physician writes with classical Greek historiographical rigor verified by archaeology." } },
    { id: "jhn", canon: "NT", name: "John (Kata Ioannen)", origLang: "Koine Greek (Κατὰ Ἰωάννην)", chapters: 21, location: "Jordan River, Cana, Capernaum, Samaria, Bethany & Jerusalem (Written from Ephesus)", theme: "The Eternal Logos Made Flesh (John 1:1–14), the Seven Miraculous Signs, Seven 'I AM' (Egō Eimi) Declarations, Upper Room Discourse & Resurrection", crossRefKey: "Genesis 1:1–5; Exodus 3:14; Proverbs 8:22–30; Wisdom 7:25–26", openingKjv: "In the beginning was the Word, and the Word was with God, and the Word was God... And the Word was made flesh, and dwelt among us.", origScriptSample: "Ἐν ἀρχῇ ἦν ὁ Λόγος, καὶ ὁ Λόγος ἦν πρὸς τὸν Θεόν, καὶ Θεὸς ἦν ὁ Λόγος", translitSample: "En archē ēn ho Logos, kai ho Logos ēn pros ton Theon, kai Theos ēn ho Logos", keyWord: { orig: "ὁ Λόγος (Ho Logos)", strongs: "G3056", gloss: "The Word / Eternal Divine Reason", note: "Unites Genesis 1:1 (En archē) with the Incarnation of Jesus Christ." } },
    { id: "act", canon: "NT", name: "Acts of the Apostles (Praxeis Apostolon)", origLang: "Koine Greek (Πράξεις Ἀποστόλων)", chapters: 28, location: "Jerusalem → Judea & Samaria → Antioch → Cyprus & Asia Minor → Macedonia & Greece (Athens, Corinth) → Rome", theme: "Ascension of Christ, Pentecost, Birth of the Church, Missionary Journeys of Paul & the Areopagus Address in Athens ('In Him we live, and move, and have our being,' Acts 17:28)", crossRefKey: "Joel 2:28–32; Psalm 16:8–11; Isaiah 49:6", openingKjv: "But ye shall receive power, after that the Holy Ghost is come upon you: and ye shall be witnesses unto me both in Jerusalem, and in all Judaea, and in Samaria, and unto the uttermost part of the earth.", origScriptSample: "ἀλλὰ λήμψεσθε δύναμιν ἐπελθόντος τοῦ Ἁγίου Πνεύματος ἐφ᾽ ὑμᾶς, καὶ ἔσεσθέ μου μάρτυρες", translitSample: "Alla lēmpsesthe dynamin epelthontos tou Hagiou Pneumatos eph' hymas, kai esesthe mou martyres", keyWord: { orig: "μάρτυρες (Martyres)", strongs: "G3144", gloss: "eyewitnesses / faithful witnesses", note: "Provides the geographical outline for all 28 chapters of Acts." } },
    { id: "rom", canon: "NT", name: "Romans (Pros Rhomaious)", origLang: "Koine Greek (Πρὸς Ῥωμαίους)", chapters: 16, location: "Written by Paul via Tertius in Corinth (c. 57 AD) to the Church in Rome", theme: "Intelligibility of Creation (Rom 1:20), Justification by Faith Alone in Christ (Rom 3–5), No Condemnation in the Spirit (Rom 8) & Renewal of the Mind (Rom 12:1–2)", crossRefKey: "Habakkuk 2:4; Genesis 15:6; Psalm 32:1–2; Isaiah 53:1", openingKjv: "For I am not ashamed of the gospel of Christ: for it is the power of God unto salvation to every one that believeth... For therein is the righteousness of God revealed from faith to faith: as it is written, The just shall live by faith.", origScriptSample: "Οὐ γὰρ ἐπαισχύνομαι τὸ εὐαγγέλιον· δύναμις γὰρ Θεοῦ ἐστιν εἰς σωτηρίαν... ὁ δὲ δίκαιος ἐκ πίστεως ζήσεται", translitSample: "Ou gar epaischynomai to euangelion; dynamis gar Theou estin eis sōtērian... ho de dikaios ek pisteōs zēsetai", keyWord: { orig: "δικαιοσύνη Θεοῦ (Dikaiosynē Theou)", strongs: "G1343 / G2316", gloss: "the righteousness of God", note: "Paul's systematic masterpiece expounding the Gospel of grace." } },
    { id: "1co", canon: "NT", name: "1 Corinthians (Pros Korinthious A)", origLang: "Koine Greek (Πρὸς Κορινθίους Αʹ)", chapters: 16, location: "Written by Paul from Ephesus (c. 55 AD) to Corinth in Greece", theme: "Christ the Power and Wisdom of God (1 Cor 1:24), Body of Christ, Hymn to Agape Love (1 Cor 13) & the Historical Bodily Resurrection of Christ (1 Cor 15)", crossRefKey: "Isaiah 29:14; Exodus 12:46; Isaiah 25:8; Hosea 13:14", openingKjv: "Love suffereth long, and is kind... And now abideth faith, hope, charity [love], these three; but the greatest of these is charity [agapē].", origScriptSample: "νυνὶ δὲ μένει πίστις, ἐλπίς, ἀγάπη, τὰ τρία ταῦτα· μείζων δὲ τούτων ἡ ἀγάπη", translitSample: "Nyni de menei pistis, elpis, agapē, ta tria tauta; meizōn de toutōn hē agapē", keyWord: { orig: "ἀγάπη (Agapē)", strongs: "G26", gloss: "self-giving covenant love", note: "1 Corinthians 15:3–8 preserves the earliest creedal eyewitness testimony to the Resurrection." } },
    { id: "2co", canon: "NT", name: "2 Corinthians (Pros Korinthious B)", origLang: "Koine Greek (Πρὸς Κορινθίους Βʹ)", chapters: 13, location: "Written by Paul from Macedonia (c. 56 AD) to Corinth", theme: "Ministry of the New Covenant, 'New Creation in Christ' (2 Cor 5:17–21), Taking Every Thought Captive to Christ (2 Cor 10:5) & Strength Perfected in Weakness (2 Cor 12:9)", crossRefKey: "Genesis 1:3; Isaiah 43:18–19; Isaiah 53:6", openingKjv: "Therefore if any man be in Christ, he is a new creature: old things are passed away; behold, all things are become new.", origScriptSample: "ὥστε εἴ τις ἐν Χριστῷ, καινὴ κτίσις· τὰ ἀρχαῖα παρῆλθεν, ἰδοὺ γέγονεν καινά", translitSample: "Hōste ei tis en Christō, kainē ktisis; ta archaia parēlthen, idou gegonen kaina", keyWord: { orig: "καινὴ κτίσις (Kainē Ktisis)", strongs: "G2537 / G2937", gloss: "new creation", note: "2 Cor 5:21 states the Great Exchange: God made Him who knew no sin to be sin for us, that we might become the righteousness of God in Him." } },
    { id: "gal", canon: "NT", name: "Galatians (Pros Galatas)", origLang: "Koine Greek (Πρὸς Γαλάτας)", chapters: 6, location: "Addressed to the Churches of Galatia in Asia Minor", theme: "Charter of Christian Freedom, Justification by Faith in Christ ('Crucified with Christ,' Gal 2:20) & the Ninefold Fruit of the Spirit (Gal 5:22–23)", crossRefKey: "Genesis 15:6; Habakkuk 2:4; Deuteronomy 21:23", openingKjv: "But the fruit of the Spirit is love, joy, peace, longsuffering, gentleness, goodness, faith, Meekness, temperance: against such there is no law.", origScriptSample: "ὁ δὲ καρπὸς τοῦ Πνεύματός ἐστιν ἀγάπη, χαρά, εἰρήνη, μακροθυμία, χρηστότης, ἀγαθωσύνη, πίστις, πραΰτης, ἐγκράτεια", translitSample: "Ho de karpos tou Pneumatos estin agapē, chara, eirēnē, makrothymia...", keyWord: { orig: "ἐλευθερία (Eleutheria)", strongs: "G1657", gloss: "freedom / liberty in Christ (Gal 5:1)", note: "Proclaims how the Law was our paidagōgos (tutor) leading us to Christ (Gal 3:24)." } },
    { id: "eph", canon: "NT", name: "Ephesians (Pros Ephesious)", origLang: "Koine Greek (Πρὸς Ἐφεσίους)", chapters: 6, location: "Written by Paul from Rome (c. 60–62 AD) to Ephesus in Asia Minor", theme: "Saved by Grace Through Faith as God's Workmanship (Poiēma, Eph 2:8–10), Unity of the Church, Christian Household & the Whole Armor of God (Eph 6:10–18)", crossRefKey: "Psalm 68:18; Isaiah 57:19; Isaiah 59:17", openingKjv: "For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: Not of works, lest any man should boast. For we are his workmanship, created in Christ Jesus unto good works.", origScriptSample: "Τῇ γὰρ χάριτί ἐστε σεσῳσμένοι διὰ πίστεως... αὐτοῦ γάρ ἐσμεν ποίημα", translitSample: "Tē gar chariti este sesōsmenoi dia pisteōs... autou gar esmen poiēma", keyWord: { orig: "ποίημα (Poiēma)", strongs: "G4161", gloss: "workmanship / masterpiece / poem (Eph 2:10)", note: "Believers are God's crafted masterpiece created in Christ Jesus for good works." } },
    { id: "php", canon: "NT", name: "Philippians (Pros Philippesious)", origLang: "Koine Greek (Πρὸς Φιλιππησίους)", chapters: 4, location: "Written by Paul from Rome to Philippi in Macedonia (First European Church)", theme: "Joy in Christ, the Christological Hymn of Humility & Exaltation (Phil 2:5–11), Peace That Passes Understanding (Phil 4:6–7) & Thinking on What Is True and Noble (Phil 4:8)", crossRefKey: "Isaiah 45:23; Isaiah 52:13–53:12", openingKjv: "Finally, brethren, whatsoever things are true, whatsoever things are honest, whatsoever things are just, whatsoever things are pure, whatsoever things are lovely, whatsoever things are of good report; if there be any virtue, and if there be any praise, think on these things.", origScriptSample: "ὅσα ἐστὶν ἀληθῆ, ὅσα σεμνά, ὅσα δίκαια, ὅσα ἁγνά, ὅσα προσφιλῆ, ὅσα εὔφημα... ταῦτα λογίζεσθε", translitSample: "Hosa estin alēthē, hosa semna, hosa dikaia, hosa hagna... tauta logizesthe", keyWord: { orig: "λογίζεσθε (Logizesthe)", strongs: "G3049", gloss: "think upon / reckon / meditate rationally (Phil 4:8)", note: "The foundational motto of classical Christian liberal arts education." } },
    { id: "col", canon: "NT", name: "Colossians (Pros Kolossaeis)", origLang: "Koine Greek (Πρὸς Κολοσσαεῖς)", chapters: 4, location: "Written by Paul from Rome to Colossae in the Lycus Valley of Asia Minor", theme: "Supremacy of Christ the Creator in Whom All Things Hold Together (Col 1:15–20) & In Whom Are Hidden All the Treasures of Wisdom and Knowledge (Col 2:3)", crossRefKey: "Genesis 1:1; Proverbs 8:22–30; Wisdom 7:26", openingKjv: "For by him were all things created, that are in heaven, and that are in earth, visible and invisible... all things were created by him, and for him: And he is before all things, and by him all things consist.", origScriptSample: "ὅτι ἐν αὐτῷ ἐκτίσθη τὰ πάντα... καὶ αὐτός ἐστιν πρὸ πάντων καὶ τὰ πάντα ἐν αὐτῷ συνέστηκεν", translitSample: "Hoti en autō ektisthē ta panta... kai ta panta en autō synestēken", keyWord: { orig: "συνέστηκεν (Synestēken)", strongs: "G4921", gloss: "hold together / cohere in cosmic order (Col 1:17)", note: "The theological anchor of physics, chemistry, and mathematics at Christ Infinity Academy!" } },
    { id: "1th", canon: "NT", name: "1 Thessalonians (Pros Thessalonikeis A)", origLang: "Koine Greek (Πρὸς Θεσσαλονικεῖς Αʹ)", chapters: 5, location: "Written by Paul from Corinth (c. 50–51 AD) to Thessalonica in Macedonia", theme: "Work of Faith, Labor of Love, Patience of Hope (1 Thess 1:3), Sanctification, and the Blessed Hope of Christ's Return (1 Thess 4:13–18)", crossRefKey: "Matthew 24:30–31; 1 Corinthians 15:51–52", openingKjv: "Rejoice evermore. Pray without ceasing. In every thing give thanks: for this is the will of God in Christ Jesus concerning you. Prove all things; hold fast that which is good.", origScriptSample: "Πάντοτε χαίρετε, ἀδιαλείπτως προσεύχεσθε, ἐν παντὶ εὐχαριστεῖτε... πάντα δὲ δοκιμάζετε, τὸ καλὸν κατέχετε", translitSample: "Pantote chairete, adialeiptōs proseuchesthe, en panti eucharisteite... panta de dokimazete, to kalon katechete", keyWord: { orig: "δοκιμάζετε (Dokimazete)", strongs: "G1381", gloss: "test / examine / prove all things (1 Thess 5:21)", note: "Calls Christian scholars to test all hypotheses and hold fast to what is good and true." } },
    { id: "2th", canon: "NT", name: "2 Thessalonians (Pros Thessalonikeis B)", origLang: "Koine Greek (Πρὸς Θεσσαλονικεῖς Βʹ)", chapters: 3, location: "Written by Paul from Corinth (c. 51 AD) to Thessalonica", theme: "Steadfastness Under Persecution, Sovereignty of Christ Over History, Standing Fast in Apostolic Truth & Diligent Work Ethic (2 Thess 3:10–13)", crossRefKey: "Isaiah 11:4; Daniel 7:25", openingKjv: "Therefore, brethren, stand fast, and hold the traditions which ye have been taught, whether by word, or our epistle... But ye, brethren, be not weary in well doing.", origScriptSample: "Ἄρα οὖν, ἀδελφοί, στήκετε, καὶ κρατεῖτε τὰς παραδόσεις... μὴ ἐγκακήσητε καλοποιοῦντες", translitSample: "Ara oun, adelphoi, stēkete... mē enkakēsēte kalopoiountes", keyWord: { orig: "καλοποιοῦντες (Kalopoiountes)", strongs: "G2569", gloss: "doing what is noble and good", note: "Combines eschatological hope with daily vocation and diligence." } },
    { id: "1ti", canon: "NT", name: "1 Timothy (Pros Timotheon A)", origLang: "Koine Greek (Πρὸς Τιμόθεον Αʹ)", chapters: 6, location: "Written by Paul from Macedonia to Timothy in Ephesus", theme: "Sound Doctrine, Christ Jesus the One Mediator Between God and Men (1 Tim 2:5), Youthful Exemplary Leadership ('Let no man despise thy youth,' 1 Tim 4:12) & Fighting the Good Fight of Faith", crossRefKey: "Deuteronomy 6:4; Job 9:33; Isaiah 53:12", openingKjv: "Let no man despise thy youth; but be thou an example of the believers, in word, in conversation, in charity, in spirit, in faith, in purity.", origScriptSample: "Μηδείς σου τῆς νεότητος καταφρονείτω, ἀλλὰ τύπος γίνου τῶν πιστῶν ἐν λόγῳ, ἐν ἀναστροφῇ, ἐν ἀγάπῃ, ἐν πίστει, ἐν ἁγνείᾳ", translitSample: "Mēdeis sou tēs neotētos kataphroneitō, alla typos ginou tōn pistōn", keyWord: { orig: "τύπος (Typos)", strongs: "G5179", gloss: "model / pattern / example", note: "1 Timothy 4:12 is a cornerstone charge for middle and high school scholars." } },
    { id: "2ti", canon: "NT", name: "2 Timothy (Pros Timotheon B)", origLang: "Koine Greek (Πρὸς Τιμόθεον Βʹ)", chapters: 4, location: "Written by Paul from the Mamertine Prison in Rome (c. 67 AD) to Timothy", theme: "Spirit of Power, Love, and a Sound Mind (2 Tim 1:7), Rightly Dividing the Word of Truth (2 Tim 2:15) & All Scripture Inspired by God (Theopneustos, 2 Tim 3:16–17)", crossRefKey: "Psalm 19:7–9; Psalm 119:105; 2 Peter 1:20–21", openingKjv: "All scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness: That the man of God may be perfect, throughly furnished unto all good works.", origScriptSample: "πᾶσα γραφὴ θεόπνευστος καὶ ὠφέλιμος πρὸς διδασκαλίαν, πρὸς ἐλεγμόν, πρὸς ἐπανόρθωσιν, πρὸς παιδείαν τὴν ἐν δικαιοσύνῃ", translitSample: "Pasa graphē theopneustos kai ōphelimos pros didaskalian... pros paideian tēn en dikaiosynē", keyWord: { orig: "θεόπνευστος (Theopneustos)", strongs: "G2315", gloss: "God-breathed (2 Tim 3:16)", note: "Pairs with paideia (παιδεία, classical education/training in righteousness) in 2 Tim 3:16!" } },
    { id: "tit", canon: "NT", name: "Titus (Pros Titon)", origLang: "Koine Greek (Πρὸς Τίτον)", chapters: 3, location: "Written by Paul to Titus on the Mediterranean Island of Crete", theme: "Sound Teaching, Epiphany of God's Saving Grace Training Us in Godliness (Titus 2:11–14) & Regeneration by the Holy Spirit (Titus 3:5)", crossRefKey: "Ezekiel 36:25–27; Deuteronomy 7:6", openingKjv: "For the grace of God that bringeth salvation hath appeared to all men, Teaching us that, denying ungodliness and worldly lusts, we should live soberly, righteously, and godly, in this present world.", origScriptSample: "Ἐπεφάνη γὰρ ἡ χάρις τοῦ Θεοῦ σωτήριος πᾶσιν ἀνθρώποις, παιδεύουσα ἡμᾶς", translitSample: "Epephanē gar hē charis tou Theou sōtērios pasin anthrōpois, paideuousa hēmas", keyWord: { orig: "παιδεύουσα (Paideuousa)", strongs: "G3811", gloss: "educating / training / disciplining", note: "Grace not only pardons; it actively educates (paideuousa) the scholar in wisdom and virtue." } },
    { id: "phm", canon: "NT", name: "Philemon (Pros Philemona)", origLang: "Koine Greek (Πρὸς Φιλήμονα)", chapters: 1, location: "Written by Paul from Rome to Philemon in Colossae", theme: "Christian Reconciliation, Forgiveness & Receiving Onesimus No Longer as a Bondservant, But as a Beloved Brother in the Lord", crossRefKey: "Colossians 4:9; Ephesians 4:32; Galatians 3:28", openingKjv: "If he hath wronged thee, or oweth thee ought, put that on mine account... Receive him as myself.", origScriptSample: "εἰ δέ τι ἠδίκησέν σε ἢ ὀφείλει, τοῦτο ἐμοὶ ἐλλόγα", translitSample: "Ei de ti ēdikēsen se ē opheilei, touto emoi elloga", keyWord: { orig: "ἐλλόγα (Elloga)", strongs: "G1677", gloss: "charge to my account / impute", note: "Living picture of how Christ imputes our debt to His own account on the cross." } },
    { id: "heb", canon: "NT", name: "Hebrews (Pros Hebraious)", origLang: "Exalted Literary Koine Greek (Πρὸς Ἑβραίους)", chapters: 13, location: "Addressed to Jewish-Christian Congregations (c. 64–68 AD)", theme: "Christ the Radiance of God's Glory Upholding All Things (Heb 1:3), Great High Priest After Melchizedek (Heb 7–10), Hall of Faith (Heb 11) & 'Jesus Christ the same yesterday, to day, and for ever' (Heb 13:8)", crossRefKey: "Psalm 110:1, 4; Jeremiah 31:31–34; Habakkuk 2:3–4; Wisdom 7:26", openingKjv: "Now faith is the substance of things hoped for, the evidence of things not seen... Through faith we understand that the worlds were framed by the word of God.", origScriptSample: "Ἔστιν δὲ πίστις ἐλπιζομένων ὑπόστασις, πραγμάτων ἔλεγχος οὐ βλεπομένων", translitSample: "Estin de pistis elpizomenōn hypostasis, pragmatōn elenchos ou blepomenōn", keyWord: { orig: "ὑπόστασις (Hypostasis)", strongs: "G5287", gloss: "foundational substance / title-deed reality (Heb 1:3; 11:1)", note: "Hebrews 1:1–4 is the most elevated periodic sentence in the Greek New Testament." } },
    { id: "jas", canon: "NT", name: "James (Iakobou Epistole)", origLang: "Koine Greek (Ἰακώβου Ἐπιστολή)", chapters: 5, location: "Written by James from Jerusalem (c. 45–49 AD) to the Twelve Tribes Scattered Abroad", theme: "Asking God for Wisdom (James 1:5), Being Doers of the Word and Not Hearers Only (James 1:22), Living Faith Proven by Works (James 2) & Wisdom from Above (James 3:17)", crossRefKey: "Proverbs 2:3–6; Sirach 1:1; Leviticus 19:18; Genesis 15:6; 22:1–18", openingKjv: "If any of you lack wisdom, let him ask of God, that giveth to all men liberally, and upbraideth not; and it shall be given him... Every good gift and every perfect gift is from above, and cometh down from the Father of lights.", origScriptSample: "Εἰ δέ τις ὑμῶν λείπεται σοφίας, αἰτείτω παρὰ τοῦ διδόντος Θεοῦ πᾶσιν ἁπλῶς", translitSample: "Ei de tis hymōn leipetai sophias, aiteitō para tou didontos Theou pasin haplōs", keyWord: { orig: "ποιηταὶ λόγου (Poiētai Logou)", strongs: "G4163 / G3056", gloss: "doers of the Word (James 1:22)", note: "The New Testament counterpart to the Book of Proverbs." } },
    { id: "1pe", canon: "NT", name: "1 Peter (Petrou A)", origLang: "Koine Greek (Πέτρου Αʹ)", chapters: 5, location: "Written by the Apostle Peter from Rome via Silvanus to Pontus, Galatia, Cappadocia, Asia & Bithynia", theme: "Living Hope Through the Resurrection (1 Pet 1:3), Royal Priesthood (1 Pet 2:9) & Always Ready to Give a Reasoned Defense (Apologia) for the Hope Within You (1 Pet 3:15)", crossRefKey: "Exodus 19:5–6; Isaiah 28:16; Isaiah 40:6–8; Isaiah 53:4–9", openingKjv: "But sanctify the Lord God in your hearts: and be ready always to give an answer [apologia] to every man that asketh you a reason [logos] of the hope that is in you with meekness and fear.", origScriptSample: "κύριον δὲ τὸν Χριστὸν ἁγιάσατε ἐν ταῖς καρδίαις ὑμῶν, ἕτοιμοι ἀεὶ πρὸς ἀπολογίαν παντὶ τῷ αἰτοῦντι ὑμᾶς λόγον περὶ τῆς ἐν ὑμῖν ἐλπίδος", translitSample: "Hetoimoi aei pros apologian panti tō aitounti hymas logon peri tēs en hymin elpidos", keyWord: { orig: "ἀπολογίαν (Apologian)", strongs: "G627", gloss: "reasoned defense / apologetic (1 Pet 3:15)", note: "The charter verse for Christian apologetics and rhetoric." } },
    { id: "2pe", canon: "NT", name: "2 Peter (Petrou B)", origLang: "Koine Greek (Πέτρου Βʹ)", chapters: 3, location: "Written by Peter Shortly Before His Martyrdom in Rome (c. 66–67 AD)", theme: "Adding to Faith Virtue and Knowledge (2 Pet 1:5–8), Eyewitnesses of Christ's Majesty on the Mount of Transfiguration & Inspiration of Scripture Carried by the Holy Spirit (2 Pet 1:21)", crossRefKey: "Matthew 17:1–5; Isaiah 65:17; Psalm 90:4", openingKjv: "For the prophecy came not in old time by the will of man: but holy men of God spake as they were moved by the Holy Ghost... But grow in grace, and in the knowledge of our Lord and Saviour Jesus Christ.", origScriptSample: "οὐ γὰρ θελήματι ἀνθρώπου ἠνέχθη ποτὲ προφητεία, ἀλλ᾽ ὑπὸ Πνεύματος Ἁγίου φερόμενοι ἐλάλησαν ἀπὸ Θεοῦ ἄνθρωποι", translitSample: "All' hypo Pneumatos Hagiou pheromenoi elalēsan apo Theou anthrōpoi", keyWord: { orig: "φερόμενοι (Pheromenoi)", strongs: "G5342", gloss: "borne along / carried by the Holy Spirit", note: "Uses the nautical verb for a sailing ship carried by the wind (Acts 27:15) to describe biblical inspiration." } },
    { id: "1jn", canon: "NT", name: "1 John (Ioannou A)", origLang: "Koine Greek (Ἰωάννου Αʹ)", chapters: 5, location: "Written by the Apostle John from Ephesus (c. 90 AD)", theme: "Eyewitness Testimony to the Word of Life (1 John 1:1–3), 'God Is Light' (1 John 1:5), 'God Is Love' (1 John 4:8, 16) & Assurance of Eternal Life (1 John 5:13)", crossRefKey: "John 1:1–14; John 13:34; Leviticus 16:30", openingKjv: "Beloved, let us love one another: for love is of God; and every one that loveth is born of God, and knoweth God. He that loveth not knoweth not God; for God is love.", origScriptSample: "Ἀγαπητοί, ἀγαπῶμεν ἀλλήλους, ὅτι ἡ ἀγάπη ἐκ τοῦ Θεοῦ ἐστιν... ὅτι ὁ Θεὸς ἀγάπη ἐστίν", translitSample: "Agapētoi, agapōmen allēlous... hoti ho Theos agapē estin", keyWord: { orig: "ὁ Θεὸς ἀγάπη ἐστίν (Ho Theos Agapē Estin)", strongs: "G2316 / G26", gloss: "God is Love (1 John 4:8, 16)", note: "Unites truth and love as inseparable attributes of the Triune God." } },
    { id: "2jn", canon: "NT", name: "2 John (Ioannou B)", origLang: "Koine Greek (Ἰωάννου Βʹ)", chapters: 1, location: "Written by John from Ephesus", theme: "Walking in Truth and Love ('Grace, mercy, and peace shall be with you in truth and love,' 2 John 1:3) & Guarding the Doctrine of Christ's Incarnation", crossRefKey: "John 14:15; 1 John 4:2–3", openingKjv: "Grace be with you, mercy, and peace, from God the Father, and from the Lord Jesus Christ, the Son of the Father, in truth and love.", origScriptSample: "ἔσται μεθ᾽ ἡμῶν χάρις, ἔλεος, εἰρήνη παρὰ Θεοῦ Πατρὸς... ἐν ἀληθείᾳ καὶ ἀγάπῃ", translitSample: "Estai meth' hēmōn charis, eleos, eirēnē... en alētheia kai agapē", keyWord: { orig: "ἐν ἀληθείᾳ καὶ ἀγάπῃ (En Alētheia kai Agapē)", strongs: "G225 / G26", gloss: "in truth and love", note: "Balances doctrinal fidelity with Christian hospitality." } },
    { id: "3jn", canon: "NT", name: "3 John (Ioannou G)", origLang: "Koine Greek (Ἰωάννου Γʹ)", chapters: 1, location: "Written by John from Ephesus to Beloved Gaius", theme: "'I have no greater joy than to hear that my children walk in truth' (3 John 1:4) & Imitating What Is Good", crossRefKey: "Proverbs 23:24; 1 Thessalonians 2:19–20", openingKjv: "I have no greater joy than to hear that my children walk in truth.", origScriptSample: "μειζοτέραν τούτων οὐκ ἔχω χαράν, ἵνα ἀκούω τὰ ἐμὰ τέκνα ἐν τῇ ἀληθείᾳ περιπατοῦντα", translitSample: "Meizoteran toutōn ouk echō charan, hina akouō ta ema tekna en tē alētheia peripatounta", keyWord: { orig: "ἐν τῇ ἀληθείᾳ περιπατοῦντα (En tē Alētheia Peripatounta)", strongs: "G225 / G4043", gloss: "walking in the truth", note: "The heartbeat of every Christian parent and teacher." } },
    { id: "jud", canon: "NT", name: "Jude (Iouda Epistole)", origLang: "Koine Greek (Ἰούδα Ἐπιστολή)", chapters: 1, location: "Jerusalem / Judea", theme: "Contending Earnestly for the Faith Once for All Delivered to the Saints (Jude 1:3) & the Majestic Doxology ('Unto Him that is able to keep you from falling,' Jude 1:24–25)", crossRefKey: "2 Peter 2; Zechariah 3:2", openingKjv: "Now unto him that is able to keep you from falling, and to present you faultless before the presence of his glory with exceeding joy, To the only wise God our Saviour, be glory and majesty, dominion and power, both now and ever. Amen.", origScriptSample: "Τῷ δὲ δυναμένῳ φυλάξαι ὑμᾶς ἀπταίστους καὶ στῆσαι κατενώπιον τῆς δόξης αὐτοῦ ἀμώμους ἐν ἀγαλλιάσει", translitSample: "Tō de dynamenō phylaxai hymas aptaistous kai stēsai katenōpion tēs doxēs autou", keyWord: { orig: "ἐπαγωνίζεσθαι (Epagōnizesthai)", strongs: "G1864", gloss: "to contend earnestly (Jude 1:3)", note: "Closes with one of the grandest doxologies in all of Scripture." } },
    { id: "rev", canon: "NT", name: "Revelation (Apokalypsis Ioannou)", origLang: "Koine Greek (Ἀποκάλυψις Ἰωάννου)", chapters: 22, location: "Island of Patmos in the Aegean Sea → Seven Churches of Asia Minor (Ephesus, Smyrna, Pergamum, Thyatira, Sardis, Philadelphia, Laodicea)", theme: "The Alpha and Omega, the Worthy Lamb Upon the Throne (Rev 4–5), King of Kings & Lord of Lords (Rev 19), New Heaven & New Earth, and the Tree of Life Restored (Rev 21–22)", crossRefKey: "Genesis 1–3; Ezekiel 47:1–12; Daniel 7:9–14; Isaiah 65:17", openingKjv: "I am Alpha and Omega, the beginning and the ending, saith the Lord, which is, and which was, and which is to come, the Almighty... Behold, I make all things new.", origScriptSample: "Ἐγώ εἰμι τὸ Ἄλφα καὶ τὸ Ὦ, λέγει Κύριος ὁ Θεός, ὁ ὢν καὶ ὁ ἦν καὶ ὁ ἐρχόμενος, ὁ Παντοκράτωר... Ἰδοὺ καινὰ ποιῶ πάντα", translitSample: "Egō eimi to Alpha kai to Ō... Idou kaina poiō panta", keyWord: { orig: "τὸ Ἄλφα καὶ τὸ Ὦ (To Alpha kai to Ō)", strongs: "G1 / G5598", gloss: "The Alpha and the Omega (First and Last)", note: "Brings the entire 80-book biblical canon to its glorious consummation from Genesis 1 to Revelation 22." } }
  ],

  interlinearChapters: [
    {
      id: "gen-1",
      canon: "OT",
      bookName: "Genesis (בְּרֵאשִׁית)",
      chapterTitle: "Genesis 1:1–5 — Creation ex Nihilo & the Architecture of Light",
      originalLanguageLabel: "Biblical Hebrew (Masoretic Text · Westminster Leningrad Codex)",
      historicalLocation: "Revealed to Moses at Mount Sinai / Plains of Moab (c. 1446–1406 BC); Describing the Cosmic Origin of Heaven and Earth",
      archaeologicalAndClassicalNote: "Unlike the Babylonian Enuma Elish (where the world is fashioned from the corpse of a warring sea monster), Genesis 1 presents a transcendent, omnipotent Creator speaking mathematical and moral order (Cosmos) into existence effortlessly by His Word.",
      verses: [
        {
          ref: "Genesis 1:1",
          kjv: "In the beginning God created the heaven and the earth.",
          esv: "In the beginning, God created the heavens and the earth.",
          originalScript: "בְּרֵאשִׁית בָּרָא אֱלֹהִים אֵת הַשָּׁמַיִם וְאֵת הָאָרֶץ׃",
          transliteration: "Bə·rê·šîṯ bā·rā ’ĕ·lō·hîm ’êṯ haš·šā·ma·yim wə·’êṯ hā·’ā·reṣ.",
          interlinearWords: [
            { orig: "בְּרֵאשִׁית", translit: "Bə·rê·šîṯ", strongs: "H7225", pos: "Prep-b | Noun-fs", gloss: "In the beginning / first principle", note: "Root rosh (head/summit/origin). Translated in the Greek Septuagint (LXX) as En archē (Ἐν ἀρχῇ), echoed word-for-word in John 1:1!" },
            { orig: "בָּרָא", translit: "bā·rā", strongs: "H1254", pos: "Verb Qal Perf 3ms", gloss: "created (ex nihilo)", note: "In the Qal stem of Scripture, bara is used exclusively with God as its subject—signifying sovereign creation out of nothing." },
            { orig: "אֱלֹהִים", translit: "’ĕ·lō·hîm", strongs: "H430", pos: "Noun-mp", gloss: "God (Supreme Creator)", note: "Plural of majesty paired with the singular verb bara—foreshadowing the Triune unity of the Godhead." },
            { orig: "אֵת הַשָּׁמַיִם", translit: "’êṯ haš·šā·ma·yim", strongs: "H8064", pos: "Obj-Marker | Art + Noun-md", gloss: "the heavens / cosmos", note: "Dual form referring to both the atmospheric sky and the starry celestial realm." },
            { orig: "וְאֵת הָאָרֶץ", translit: "wə·’êṯ hā·’ā·reṣ", strongs: "H776", pos: "Conj | Art + Noun-fs", gloss: "and the earth", note: "Together 'the heavens and the earth' form a Hebrew merism denoting the entire physical universe." }
          ],
          crossReferences: [
            { ref: "John 1:1–3", text: "In the beginning (Ἐν ἀρχῇ) was the Word (ὁ Λόγος)... All things were made by him.", connection: "Direct verbal & theological parallel identifying the eternal Logos as the agent of Genesis 1:1." },
            { ref: "Hebrews 11:3", text: "Through faith we understand that the worlds were framed by the word of God, so that things which are seen were not made of things which do appear.", connection: "Confirms Creation ex nihilo (out of nothing visible) by divine command." },
            { ref: "Colossians 1:16–17", text: "For by him were all things created, that are in heaven, and that are in earth... and by him all things consist (hold together).", connection: "Connects Genesis creation with the ongoing physical laws upholding the universe." },
            { ref: "Psalm 33:6, 9", text: "By the word of the LORD were the heavens made; and all the host of them by the breath of his mouth... For he spake, and it was done.", connection: "Poetic commentary on Genesis 1 aligning God's Word and Spirit." }
          ]
        },
        {
          ref: "Genesis 1:2–3",
          kjv: "And the earth was without form, and void; and darkness was upon the face of the deep. And the Spirit of God moved upon the face of the waters. And God said, Let there be light: and there was light.",
          esv: "The earth was without form and void, and darkness was over the face of the deep. And the Spirit of God was hovering over the face of the waters. And God said, 'Let there be light,' and there was light.",
          originalScript: "וְהָאָרֶץ הָיְתָה תֹהוּ וָבֹהוּ וְחֹשֶׁךְ עַל־פְּנֵי תְהוֹם וְרוּחַ אֱלֹהִים מְרַחֶפֶת עַל־פְּנֵי הַמָּיִם׃ וַיֹּאמֶר אֱלֹהִים יְהִי אוֹר וַיְהִי־אוֹר׃",
          transliteration: "Wə·hā·’ā·reṣ hā·yə·ṯāh ṯō·hū wā·ḇō·hū... Wə·rū·aḥ ’ĕ·lō·hîm mə·ra·ḥe·p̄eṯ... Way·yō·mer ’ĕ·lō·hîm yə·hî ’ō·wr way·hî-’ō·wr.",
          interlinearWords: [
            { orig: "תֹהוּ וָבֹהוּ", translit: "ṯō·hū wā·ḇō·hū", strongs: "H8414 / H922", pos: "Noun-ms | Conj + Noun-ms", gloss: "unformed and unfilled", note: "Days 1–3 form the realms (ṯōhū → order); Days 4–6 fill the realms (ḇōhū → fullness)." },
            { orig: "וְרוּחַ אֱלֹהִים", translit: "wə·rū·aḥ ’ĕ·lō·hîm", strongs: "H7307", pos: "Conj + Noun-fs | Noun-mp", gloss: "And the Spirit / Breath of God", note: "Ruach (Spirit/Breath/Wind) hovering (meraḥep̄eṯ, like an eagle over its nest in Deut 32:11) to bring life and structure." },
            { orig: "יְהִי אוֹר", translit: "yə·hî ’ō·wr", strongs: "H1961 / H216", pos: "Verb Jussive 3ms | Noun-cs", gloss: "Let there be light (Fiat lux)", note: "Latin Vulgate: 'Fiat lux, et facta est lux'—electromagnetic light and rational illumination spoken into being." }
          ],
          crossReferences: [
            { ref: "2 Corinthians 4:6", text: "For God, who commanded the light to shine out of darkness, hath shined in our hearts, to give the light of the knowledge of the glory of God in the face of Jesus Christ.", connection: "Paul directly cites Genesis 1:3 as the pattern of spiritual illumination." },
            { ref: "John 1:4–5", text: "In him was life; and the life was the light of men. And the light shineth in darkness; and the darkness comprehended it not.", connection: "Links physical light in Genesis 1:3 with the incarnate Light of the World." }
          ]
        }
      ]
    },
    {
      id: "psa-19",
      canon: "OT",
      bookName: "Psalms (תְּהִלִּים)",
      chapterTitle: "Psalm 19:1–4, 7–8 — The Two Books of God: The Starry Heavens & the Moral Law",
      originalLanguageLabel: "Biblical Hebrew (Masoretic Poetic Parallelism)",
      historicalLocation: "Composed by King David in Jerusalem (c. 1000 BC); Sung in the First & Second Temple Liturgy",
      archaeologicalAndClassicalNote: "Psalm 19 is the charter text of Christian natural science and classical education: verses 1–6 celebrate the Book of God's Works (general revelation in astronomy and physics), while verses 7–14 celebrate the Book of God's Word (special revelation in Scripture).",
      verses: [
        {
          ref: "Psalm 19:1–2",
          kjv: "The heavens declare the glory of God; and the firmament sheweth his handywork. Day unto day uttereth speech, and night unto night sheweth knowledge.",
          esv: "The heavens declare the glory of God, and the sky above proclaims his handiwork. Day to day pours out speech, and night to night reveals knowledge.",
          originalScript: "הַשָּׁמַיִם מְסַפְּרִים כְּבוֹד־אֵל וּמַעֲשֵׂה יָדָיו מַגִּיד הָרָקִיעַ׃ יוֹם לְיוֹם יַבִּיעַ אֹמֶר וְלַיְלָה לְּלַיְלָה יְחַוֶּה־דָּעַת׃",
          transliteration: "Haš·šā·ma·yim mə·sap·pə·rîm kə·ḇō·wḏ-’êl ū·ma·‘ă·śêh yā·ḏāw mag·gîḏ hā·rā·qî·a‘.",
          interlinearWords: [
            { orig: "מְסַפְּרִים", translit: "mə·sap·pə·rîm", strongs: "H5608", pos: "Verb Piel Participle mp", gloss: "are continually recounting / numbering", note: "Root saphar means both 'to recount a story' and 'to count/number'—the heavens declare God's glory through mathematical order!" },
            { orig: "כְּבוֹד־אֵל", translit: "kə·ḇō·wḏ-’êl", strongs: "H3519 / H410", pos: "Noun-msc | Noun-ms", gloss: "the glory / weighty majesty of God", note: "Kavod literally means weight, substance, and radiant splendor." },
            { orig: "דָּעַת", translit: "dā·‘aṯ", strongs: "H1847", pos: "Noun-fs", gloss: "knowledge / empirical perception", note: "Night-sky astronomy imparts objective knowledge of the Creator's wisdom." }
          ],
          crossReferences: [
            { ref: "Romans 1:19–20", text: "For the invisible things of him from the creation of the world are clearly seen, being understood by the things that are made, even his eternal power and Godhead.", connection: "Paul's exposition of Psalm 19:1–4 in his epistle to Rome." },
            { ref: "Wisdom of Solomon 13:5 (Apocrypha / LXX)", text: "For by the greatness and beauty of the creatures proportionably the maker of them is seen.", connection: "Second-Temple Hellenistic Jewish parallel emphasizing proportional reasoning (analogia) from nature to Creator." }
          ]
        }
      ]
    },
    {
      id: "isa-53",
      canon: "OT",
      bookName: "Isaiah (יְשַׁעְיָהוּ)",
      chapterTitle: "Isaiah 53:4–6 — The Fourth Servant Song & Substitutionary Atonement",
      originalLanguageLabel: "Biblical Hebrew (Confirmed by the Great Isaiah Scroll 1QIsaᵃ at Qumran, c. 125 BC)",
      historicalLocation: "Prophesied by Isaiah in Jerusalem (c. 700 BC); Preserved verbatim in the Dead Sea Scrolls a century before Christ's birth",
      archaeologicalAndClassicalNote: "The Great Isaiah Scroll (1QIsaᵃ) discovered in Cave 1 at Qumran in 1947 predates the medieval Masoretic manuscripts by over 1,000 years and confirms word-for-word the prophecy of the pierced Suffering Servant in Isaiah 53.",
      verses: [
        {
          ref: "Isaiah 53:5",
          kjv: "But he was wounded for our transgressions, he was bruised for our iniquities: the chastisement of our peace was upon him; and with his stripes we are healed.",
          esv: "But he was pierced for our transgressions; he was crushed for our iniquities; upon him was the chastisement that brought us peace, and with his wounds we are healed.",
          originalScript: "וְהוּא מְחֹלָל מִפְּשָׁעֵנוּ מְדֻכָּא מֵעֲוֹנֹתֵינוּ מוּסַר שְׁלוֹמֵנוּ עָלָיו וּבַחֲבֻרָתוֹ נִרְפָּא־לָנוּ׃",
          transliteration: "Wə·hū mə·ḥō·lāl mip·pə·šā·‘ê·nū, mə·ḏuk·kā mê·‘ă·wō·nō·ṯê·nū; mū·sar šə·lō·w·mê·nū ‘ā·lāw, ū·ḇa·ḥă·ḇu·rā·ṯōw nir·pā-lā·nū.",
          interlinearWords: [
            { orig: "מְחֹלָל", translit: "mə·ḥō·lāl", strongs: "H2490", pos: "Verb Pual Participle ms", gloss: "pierced through / wounded", note: "Passive participle indicating vicarious piercing on behalf of others." },
            { orig: "שְׁלוֹמֵנוּ", translit: "šə·lō·w·mê·nū", strongs: "H7965", pos: "Noun-msc + 1cp suffix", gloss: "our peace / wholeness (Shalom)", note: "Reconciliation and completeness restored between God and humanity." },
            { orig: "נִרְפָּא־לָנוּ", translit: "nir·pā-lā·nū", strongs: "H7495", pos: "Verb Niphal Perf 3ms", gloss: "we are healed", note: "Quoted directly by the Apostle Peter in 1 Peter 2:24 ('by whose stripes ye were healed')." }
          ],
          crossReferences: [
            { ref: "1 Peter 2:24–25", text: "Who his own self bare our sins in his own body on the tree... by whose stripes ye were healed.", connection: "Apostolic citation of Isaiah 53:5–6." },
            { ref: "Acts 8:32–35", text: "Then Philip opened his mouth, and began at the same scripture (Isaiah 53), and preached unto him Jesus.", connection: "Philip explains Isaiah 53 to the Ethiopian treasurer on the Gaza road." },
            { ref: "Matthew 8:17", text: "That it might be fulfilled which was spoken by Esaias the prophet, saying, Himself took our infirmities, and bare our sicknesses.", connection: "Quotes Isaiah 53:4 in the context of Christ's healing ministry." }
          ]
        }
      ]
    },
    {
      id: "wis-7",
      canon: "APOC",
      bookName: "Wisdom of Solomon (Σοφία Σαλωμῶνος · Apocrypha / LXX)",
      chapterTitle: "Wisdom of Solomon 7:25–26 & 11:20 — Divine Wisdom, Radiance & Mathematical Measure",
      originalLanguageLabel: "Septuagint Koine Greek (Codex Vaticanus & Codex Sinaiticus LXX)",
      historicalLocation: "Composed in Greek in Alexandria, Egypt during the Second Temple Period (c. 1st Century BC)",
      archaeologicalAndClassicalNote: "Included in the Septuagint (LXX) and the 1611 King James Bible Apocrypha section, Wisdom of Solomon bridges Old Testament Proverbs 8 with the New Testament prologue of Hebrews 1:3 (which uses the exact rare Greek word apaugasma, 'radiance/effulgence') and medieval Christian physics ('Thou hast ordered all things in measure, and number, and weight,' Wis 11:20).",
      verses: [
        {
          ref: "Wisdom of Solomon 7:26 & 11:20",
          kjv: "For she [Wisdom] is the brightness of the everlasting light, the unspotted mirror of the power of God, and the image of his goodness... But thou hast ordered all things in measure and number and weight.",
          esv: "For she is a reflection of eternal light, a spotless mirror of the working of God, and an image of his goodness... But you have arranged all things by measure and number and weight.",
          originalScript: "ἀπαύγασμα γάρ ἐστιν φωτὸς ἀϊδίου καὶ ἔσοπτρον ἀκηλίδωτον τῆς τοῦ θεοῦ ἐνεργείας καὶ εἰκὼν τῆς ἀγαθότητος αὐτοῦ... ἀλλὰ πάντα μέτρῳ καὶ ἀριθμῷ καὶ σταθμῷ διέταξας.",
          transliteration: "Apaugasma gar estin phōtos aidiou kai esoptron akēlidōton tēs tou Theou energeias kai eikōn tēs agathotētos autou... alla panta metrō kai arithmō kai stathmō dietaxas.",
          interlinearWords: [
            { orig: "ἀπαύγασμα", translit: "apaugasma", strongs: "G541", pos: "Noun-nsn", gloss: "radiance / effulgence / brightness", note: "Occurs only once in the New Testament—in Hebrews 1:3 ('Who being the brightness [apaugasma] of his glory')!" },
            { orig: "εἰκὼν", translit: "eikōn", strongs: "G1504", pos: "Noun-nsf", gloss: "image / exact likeness", note: "Parallel to Colossians 1:15 ('Who is the image [eikōn] of the invisible God')." },
            { orig: "μέτρῳ καὶ ἀριθμῷ καὶ σταθμῷ", translit: "metrō kai arithmō kai stathmō", strongs: "G3358 / G706", pos: "Dat-ns", gloss: "by measure (geometry), number (arithmetic), and weight (physics)", note: "Quoted by Augustine, Grosseteste, and Kepler as the biblical foundation for quantitative natural science!" }
          ],
          crossReferences: [
            { ref: "Hebrews 1:3", text: "Who being the brightness (ἀπαύγασμα) of his glory, and the express image of his person, and upholding all things by the word of his power.", connection: "Direct lexical parallel showing Christ as the fulfillment of Divine Wisdom." },
            { ref: "Colossians 1:15", text: "Who is the image (εἰκὼν) of the invisible God, the firstborn of every creature.", connection: "Identifies Christ as the living Eikōn of God." },
            { ref: "Isaiah 40:12", text: "Who hath measured the waters in the hollow of his hand, and meted out heaven with the span... and weighed the mountains in scales.", connection: "Hebrew prophetic background to ordering creation by measure, number, and weight." }
          ]
        }
      ]
    },
    {
      id: "sir-1",
      canon: "APOC",
      bookName: "Sirach / Ecclesiasticus (Σοφία Σειράχ · Apocrypha / LXX)",
      chapterTitle: "Sirach 1:1–4 & 44:1 — All Wisdom Cometh from the Lord",
      originalLanguageLabel: "Hebrew (Ben Sira Scroll Fragments at Masada & Cairo Geniza) & Septuagint Koine Greek",
      historicalLocation: "Written in Jerusalem by Joshua ben Sira (c. 180 BC); Translated into Greek by his grandson in Alexandria (132 BC)",
      archaeologicalAndClassicalNote: "Sirach (called Ecclesiasticus, 'The Church Book,' in Latin because early Christians used it extensively for moral catechism) preserves second-century BC Jewish wisdom instruction and historical portraits of Israel's heroes from Enoch to Simon the High Priest.",
      verses: [
        {
          ref: "Sirach 1:1",
          kjv: "All wisdom cometh from the Lord, and is with him for ever.",
          esv: "All wisdom is from the Lord, and with him it remains forever.",
          originalScript: "Πᾶσα σοφία παρὰ Κυρίου, καὶ μετ᾽ αὐτοῦ ἐστιν εἰς τὸν αἰῶνα.",
          transliteration: "Pasa sophia para Kyriou, kai met' autou estin eis ton aiōna.",
          interlinearWords: [
            { orig: "Πᾶσα σοφία", translit: "Pasa sophia", strongs: "G3956 / G4678", pos: "Adj-nsf | Noun-nsf", gloss: "All wisdom", note: "St. Augustine and Hugh of St. Victor paraphrased this principle as 'All truth is God's truth wherever it is found.'" },
            { orig: "παρὰ Κυρίου", translit: "para Kyriou", strongs: "G3844 / G2962", pos: "Prep | Noun-gsm", gloss: "from the side of the Lord", note: "Echoed in James 1:5 ('If any of you lack wisdom, let him ask of God')." }
          ],
          crossReferences: [
            { ref: "Proverbs 2:6", text: "For the LORD giveth wisdom: out of his mouth cometh knowledge and understanding.", connection: "Canonical Hebrew foundation for Sirach 1:1." },
            { ref: "James 1:5, 17", text: "If any of you lack wisdom, let him ask of God... Every good gift and every perfect gift is from above, and cometh down from the Father of lights.", connection: "New Testament wisdom epistle parallel." }
          ]
        }
      ]
    },
    {
      id: "jhn-1",
      canon: "NT",
      bookName: "Gospel of John (Κατὰ Ἰωάννην)",
      chapterTitle: "John 1:1–5, 14 — The Prologue of the Eternal Logos Made Flesh",
      originalLanguageLabel: "Koine Greek (Novum Testamentum Graece · Papyrus P66 & P75, c. 175–200 AD)",
      historicalLocation: "Events at the Jordan River, Cana & Jerusalem (29–33 AD); Written by the Apostle John in Ephesus (c. 85–95 AD)",
      archaeologicalAndClassicalNote: "Papyrus Bodmer II (P66) and P75 (housed in Geneva and the Vatican Library) preserve John 1 in early second-century uncial Greek. John takes the Greek philosophical term Logos (Reason/Word/Ratio) and the Hebrew Memra (Creative Word of YHWH) and proclaims that the eternal Logos became flesh in Jesus of Nazareth.",
      verses: [
        {
          ref: "John 1:1–3",
          kjv: "In the beginning was the Word, and the Word was with God, and the Word was God. The same was in the beginning with God. All things were made by him; and without him was not any thing made that was made.",
          esv: "In the beginning was the Word, and the Word was with God, and the Word was God. He was in the beginning with God. All things were made through him, and without him was not any thing made that was made.",
          originalScript: "Ἐν ἀρχῇ ἦν ὁ Λόγος, καὶ ὁ Λόγος ἦν πρὸς τὸν Θεόν, καὶ Θεὸς ἦν ὁ Λόγος. οὗτος ἦν ἐν ἀρχῇ πρὸς τὸν Θεόν. πάντα δι᾽ αὐτοῦ ἐγένετο, καὶ χωρὶς αὐτοῦ ἐγένετο οὐδὲ ἕν ὃ γέγονεν.",
          transliteration: "En archē ēn ho Logos, kai ho Logos ēn pros ton Theon, kai Theos ēn ho Logos. Houtos ēn en archē pros ton Theon. Panta di' autou egeneto...",
          interlinearWords: [
            { orig: "Ἐν ἀρχῇ", translit: "En archē", strongs: "G1722 / G746", pos: "Prep | Noun-dsf", gloss: "In the beginning / origin", note: "Identical to the Septuagint opening of Genesis 1:1 (En archē epoiēsen ho Theos). English derivatives: archaic, archaeology, archetype." },
            { orig: "ἦν", translit: "ēn", strongs: "G1510", pos: "Verb Imperf Ind 3s", gloss: "was (eternally existing)", note: "Continuous imperfect tense (ēn) contrasts with egeneto ('came into being' in v. 3): the Logos did not come into being; He eternally WAS." },
            { orig: "ὁ Λόγος", translit: "ho Logos", strongs: "G3056", pos: "Art-nms | Noun-nms", gloss: "the Word / Divine Reason / Ratio", note: "Root of English logic, biology, theology, and mathematical ratio. Christ is the eternal Mind and Word of God." },
            { orig: "πρὸς τὸν Θεόν", translit: "pros ton Theon", strongs: "G4314 / G2316", pos: "Prep | Art + Noun-ams", gloss: "with / face-to-face with God", note: "Indicates personal communion between the Son and the Father from all eternity." },
            { orig: "Θεὸς ἦν ὁ Λόγος", translit: "Theos ēn ho Logos", strongs: "G2316", pos: "Noun-nms | Verb | Noun-nms", gloss: "the Word was God", note: "Colwell's Rule in Koine Greek grammar: the pre-verbal anarthrous predicate nominative (Theos) emphasizes that the Logos possesses the full nature and deity of God." }
          ],
          crossReferences: [
            { ref: "Genesis 1:1", text: "In the beginning God created the heaven and the earth.", connection: "John 1:1 deliberately echoes Genesis 1:1 to reveal Christ as the Creator." },
            { ref: "1 John 1:1–2", text: "That which was from the beginning, which we have heard, which we have seen with our eyes... of the Word of life.", connection: "Eyewitness apostolic testimony to the incarnate Logos." },
            { ref: "Revelation 19:13", text: "And he was clothed with a vesture dipped in blood: and his name is called The Word of God (ὁ Λόγος τοῦ Θεοῦ).", connection: "Johannine title uniting John 1:1 and Revelation 19:13." }
          ]
        },
        {
          ref: "John 1:14",
          kjv: "And the Word was made flesh, and dwelt among us, (and we beheld his glory, the glory as of the only begotten of the Father,) full of grace and truth.",
          esv: "And the Word became flesh and dwelt among us, and we have seen his glory, glory as of the only Son from the Father, full of grace and truth.",
          originalScript: "Καὶ ὁ Λόγος σὰρξ ἐγένετο καὶ ἐσκήνωσεν ἐν ἡμῖν, καὶ ἐθεασάμεθα τὴν δόξαν αὐτοῦ, δόξαν ὡς μονογενοῦς παρὰ Πατρός, πλήρης χάριτος καὶ ἀληθείας.",
          transliteration: "Kai ho Logos sarx egeneto kai eskēnōsen en hēmin, kai etheasametha tēn doxan autou... plērēs charitos kai alētheias.",
          interlinearWords: [
            { orig: "σὰρξ ἐγένετο", translit: "sarx egeneto", strongs: "G4561 / G1096", pos: "Noun-nsf | Verb Aorist Mid 3s", gloss: "became flesh (Incarnation)", note: "Latin: 'Et Verbum caro factum est'—the central miracle of the Incarnation." },
            { orig: "ἐσκήνωσεν", translit: "eskēnōsen", strongs: "G4637", pos: "Verb Aorist Act 3s", gloss: "pitched His tent / tabernacled", note: "From skēnē (tent/tabernacle)—recalling Exodus 40:34 where the Shekinah glory filled the wilderness Tabernacle!" },
            { orig: "χάριτος καὶ ἀληθείας", translit: "charitos kai alētheias", strongs: "G5485 / G225", pos: "Noun-gsf | Conj | Noun-gsf", gloss: "of grace and truth", note: "Translates the Hebrew covenant pair ḥesed we-’ĕmeṯ ('steadfast love and faithfulness,' Exodus 34:6)." }
          ],
          crossReferences: [
            { ref: "Exodus 40:34", text: "Then a cloud covered the tent of the congregation, and the glory of the LORD filled the tabernacle.", connection: "Old Testament type fulfilled when the Logos 'tabernacled' (eskēnōsen) among us." },
            { ref: "Philippians 2:6–8", text: "Who, being in the form of God... took upon him the form of a servant, and was made in the likeness of men.", connection: "Pauline hymn of the Incarnation." }
          ]
        }
      ]
    },
    {
      id: "rom-1",
      canon: "NT",
      bookName: "Epistle to the Romans (Πρὸς Ῥωμαίους)",
      chapterTitle: "Romans 1:16–17, 20 — The Power of the Gospel & the Intelligibility of Creation",
      originalLanguageLabel: "Koine Greek (Written by Paul via Tertius in Corinth, c. 57 AD)",
      historicalLocation: "Written from Corinth (Achaia, Greece) to the Christian congregations in Imperial Rome",
      archaeologicalAndClassicalNote: "In Corinth, archaeologists uncovered the limestone pavement inscription of Erastus the city treasurer (mentioned by Paul in Romans 16:23!), confirming the exact historical setting of this letter.",
      verses: [
        {
          ref: "Romans 1:16–17, 20",
          kjv: "For I am not ashamed of the gospel of Christ: for it is the power of God unto salvation to every one that believeth... For therein is the righteousness of God revealed from faith to faith: as it is written, The just shall live by faith... For the invisible things of him from the creation of the world are clearly seen, being understood by the things that are made, even his eternal power and Godhead.",
          esv: "For I am not ashamed of the gospel, for it is the power of God for salvation to everyone who believes... For in it the righteousness of God is revealed from faith for faith, as it is written, 'The righteous shall live by faith.' ... For his invisible attributes, namely, his eternal power and divine nature, have been clearly perceived, ever since the creation of the world, in the things that have been made.",
          originalScript: "Οὐ γὰρ ἐπαισχύνομαι τὸ εὐαγγέλιον· δύναμις γὰρ Θεοῦ ἐστιν εἰς σωτηρίαν... ὁ δὲ δίκαιος ἐκ πίστεως ζήσεται... τὰ γὰρ ἀόρατα αὐτοῦ ἀπὸ κτίσεως κόσμου τοῖς ποιήμασιν νοούμενα καθορᾶται.",
          transliteration: "Ou gar epaischynomai to euangelion; dynamis gar Theou estin eis sōtērian... ho de dikaios ek pisteōs zēsetai... ta gar aorata autou apo ktiseōs kosmou tois poiēmasin nooumena kathoratai.",
          interlinearWords: [
            { orig: "τὸ εὐαγγέλιον", translit: "to euangelion", strongs: "G2098", pos: "Art | Noun-nsn", gloss: "the Gospel / Good News", note: "Compound of eu (good) + angelos (messenger). English derivative: evangelism, evangelical." },
            { orig: "δύναμις", translit: "dynamis", strongs: "G1411", pos: "Noun-nsf", gloss: "power / mighty capability", note: "Root of English dynamics, dynamo, and thermodynamics." },
            { orig: "δίκαιος ἐκ πίστεως ζήσεται", translit: "dikaios ek pisteōs zēsetai", strongs: "G1342 / G4102 / G2198", pos: "Adj | Prep + Noun | Verb Fut", gloss: "the righteous by faith shall live", note: "Direct quotation of Habakkuk 2:4 (Hebrew: we-ṣaddîq be-’ĕmūnāṯō yihyeh)." },
            { orig: "τοῖς ποιήμασιν", translit: "tois poiēmasin", strongs: "G4161", pos: "Art | Noun-dpn", gloss: "by the things that are made (workmanship/poem)", note: "Poiēma (source of English 'poem')—creation is God's grand poem through which rational minds (nooumena) perceive His eternal power!" }
          ],
          crossReferences: [
            { ref: "Habakkuk 2:4", text: "Behold, his soul which is lifted up is not upright in him: but the just shall live by his faith.", connection: "Old Testament prophetic anchor quoted in Romans 1:17, Galatians 3:11, and Hebrews 10:38." },
            { ref: "Psalm 19:1", text: "The heavens declare the glory of God; and the firmament sheweth his handywork.", connection: "Parallel witness to general revelation in nature." },
            { ref: "Ephesians 2:8–10", text: "For by grace are ye saved through faith... For we are his workmanship (ποίημα / poiēma), created in Christ Jesus unto good works.", connection: "Uses the same Greek word poiēma for new creation in Christ." }
          ]
        }
      ]
    }
  ]
};

