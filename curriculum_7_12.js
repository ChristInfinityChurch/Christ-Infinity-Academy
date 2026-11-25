// Christ Infinity Academy — Complete Grades 7–12 Course Curriculum Engine (All 36 Weeks × 5 Days × 3 Daily Assignments, Deep Masterclasses, Worked Proofs & Parent Answer Keys)
(function () {
  const GRADES_7_12_36_WEEK_MAPS = {
    // ==================== GRADE 7 COURSES (THE SCHOOL OF FORMAL LOGIC) ====================
    "theo-102": [
      "Week 1: The Fourfold Gospel Witness — Matthew, Mark, Luke & John in Harmony",
      "Week 2: The Incarnation, Genealogies of Messiah & Birth Narratives (Luke 1–2; Matt 1–2)",
      "Week 3: John the Baptist, the Baptism of Jesus & the Temptation in the Wilderness",
      "Week 4: Calling the Twelve Disciples & the First Miraculous Signs in Galilee",
      "Week 5: The Sermon on the Mount I — The Beatitudes & Salt and Light (Matthew 5:1–16)",
      "Week 6: The Sermon on the Mount II — Christ and the Moral Law (Matthew 5:17–48)",
      "Week 7: The Lord's Prayer, Fasting & Treasure in Heaven (Matthew 6)",
      "Week 8: The Wise and Foolish Builders — Hearing and Doing the Words of Christ (Matthew 7)",
      "Week 9: Quarter 1 Proctored Examination & Synoptic Gospels Harmony Portfolio",
      "Week 10: Parables of the Kingdom I — The Sower, the Wheat and Tares & the Mustard Seed",
      "Week 11: Parables of Mercy — The Good Samaritan, the Lost Sheep & the Prodigal Son (Luke 10, 15)",
      "Week 12: Miracles of Authority Over Nature, Disease & Death (Mark 4–5; John 11)",
      "Week 13: Peter’s Confession at Caesarea Philippi & the Mount of Transfiguration",
      "Week 14: The Seven 'I AM' (Ego Eimi) Declarations in the Gospel of John",
      "Week 15: The Triumphal Entry, Cleansing the Temple & Olivet Discourse",
      "Week 16: The Upper Room Discourse, the New Commandment & High Priestly Prayer (John 13–17)",
      "Week 17: Gethsemane, the Roman & Sanhedrin Trials, and the Crucifixion at Golgotha",
      "Week 18: Quarter 2 Midterm Examination & Historical Evidence of the Resurrection",
      "Week 19: The Empty Tomb, Emmaus Road & the Great Commission (Luke 24; Matt 28:18–20)",
      "Week 20: Introduction to Hebrew Poetic Parallelism (Synonymous, Antithetic & Synthetic)",
      "Week 21: Book of Psalms I — Psalms of Creation & Torah (Psalms 1, 8, 19, 104, 119)",
      "Week 22: Book of Psalms II — Messianic & Royal Psalms (Psalms 2, 22, 23, 24, 110)",
      "Week 23: Book of Psalms III — Songs of Ascents & Hallel Doxology (Psalms 120–150)",
      "Week 24: Proverbs I — The Fear of the LORD as the Beginning of Knowledge (Proverbs 1–4)",
      "Week 25: Proverbs II — Personified Wisdom & the Architecture of the Cosmos (Proverbs 8–9)",
      "Week 26: Proverbs III — Ethics of Speech, Diligence, Friendship & Stewardship (Proverbs 10–24)",
      "Week 27: Quarter 3 Proctored Examination & Wisdom Literature Commonplace Book",
      "Week 28: Proverbs IV — Words of Agur, Lemuel & the Virtuous Household (Proverbs 30–31)",
      "Week 29: Job I — The Prologue in Heaven & the Problem of Righteous Suffering (Job 1–14)",
      "Week 30: Job II — 'I Know That My Redeemer Liveth' & the Hymn to Wisdom (Job 19, 28)",
      "Week 31: Job III — The Voice of the Creator Out of the Whirlwind (Job 38–42)",
      "Week 32: Ecclesiastes I — 'Vanity of Vanities' & Life Under the Sun (Ecclesiastes 1–6)",
      "Week 33: Ecclesiastes II — Eternity in Man's Heart & Remembering Your Creator in Youth (Ecc 3, 11–12)",
      "Week 34: Comparative Study: Biblical Chokhmah vs. Greco-Roman Stoicism",
      "Week 35: Grade 7 Oral Recitation & Gospel/Wisdom Synthesis Defense",
      "Week 36: Quarter 4 Final Comprehensive Grade 7 Theology Examination"
    ],
    "math-102": [
      "Week 1: Set Theory, Real Number Classification (ℕ, ℤ, ℚ, ℝ) & Number Line Axioms",
      "Week 2: Absolute Value, Additive Inverses & Integer Addition/Subtraction Proofs",
      "Week 3: Integer Multiplication, Division & Exponents with Negative Bases",
      "Week 4: Rational Numbers — Terminating/Repeating Decimals & Fraction-Decimal Conversions",
      "Week 5: Arithmetic Operations with Signed Rational Numbers (Fractions & Decimals)",
      "Week 6: Algebraic Variables, Translating Verbal Phrases & Evaluating Expressions",
      "Week 7: Distributive Property, Factoring GCF & Combining Like Algebraic Terms",
      "Week 8: One-Step & Two-Step Linear Equations with Rational Coefficients",
      "Week 9: Quarter 1 Proctored Pre-Algebra Examination (Integers, Rationals & Expressions)",
      "Week 10: Multi-Step Linear Equations with Variables on Both Sides & Clearing Fractions",
      "Week 11: Ratios, Unit Rates, Complex Fractions & Dimensional Unit Conversions",
      "Week 12: Proportions, Cross-Product Theorem (ad = bc) & Constant of Proportionality (k = y/x)",
      "Week 13: Scale Drawings, Similar Figures & Indirect Geometric Measurement",
      "Week 14: Percent Equations, Percent Increase/Decrease, Markup, Discount & Tax",
      "Week 15: Simple & Compound Interest Formulas (I = Prt) & Financial Stewardship",
      "Week 16: Linear Inequalities, Addition/Multiplication Properties & Number Line Graphs",
      "Week 17: Two-Step & Multi-Step Inequalities with Negative Multiplier Reversal",
      "Week 18: Quarter 2 Midterm Pre-Algebra Examination (Equations, Proportions & Inequalities)",
      "Week 19: The Cartesian Coordinate Plane, Ordered Pairs & Quadrant Symmetry",
      "Week 20: Linear Relations, Input-Output Function Tables & Graphing y = mx + b",
      "Week 21: Slope as Rate of Change (m = Δy/Δx) & Direct Variation",
      "Week 22: Laws of Exponents — Product, Quotient, Power-of-a-Power & Zero/Negative Exponents",
      "Week 23: Scientific Notation & Operations with Astronomical/Microscopic Magnitudes",
      "Week 24: Perfect Squares, Cube Roots, Irrational Numbers & Approximating Radicals",
      "Week 25: The Pythagorean Theorem (a² + b² = c²), Converse & Distance on the Coordinate Plane",
      "Week 26: Angle Relationships — Complementary, Supplementary, Vertical & Transversal Angles",
      "Week 27: Quarter 3 Proctored Examination (Linear Functions, Exponents & Pythagoras)",
      "Week 28: Polygons, Triangle Angle-Sum Theorem & Interior/Exterior Angles of n-Gons",
      "Week 29: Perimeter, Circumference & Area of Circles (A = πr²), Triangles, Trapezoids & Composite Figures",
      "Week 30: Three-Dimensional Polyhedra, Euler's Formula (V - E + F = 2) & Cross-Sections",
      "Week 31: Surface Area & Volume of Prisms, Cylinders, Pyramids, Cones & Spheres",
      "Week 32: Introduction to Monomials, Binomials & Adding/Subtracting Polynomials",
      "Week 33: Classical Probability — Sample Spaces, Theoretical vs. Experimental Probability",
      "Week 34: Compound Events, Permutations, Factorials & Tree Diagrams",
      "Week 35: Descriptive Statistics — Mean, Median, Mode, Interquartile Range & Box Plots",
      "Week 36: Quarter 4 Final Comprehensive Grade 7 Pre-Algebra Mastery Examination"
    ],
    "sci-102": [
      "Week 1: Philosophy of Biology — Characteristics of Living Organisms & Scientific Method",
      "Week 2: Optical Microscopy Lab — Magnification, Resolution & Wet-Mount Slide Preparation",
      "Week 3: Chemistry of Life — Water Polarity, Carbohydrates, Lipids, Proteins & Nucleic Acids",
      "Week 4: Cell Theory (Hooke, Leeuwenhoek, Virchow) & Prokaryotic vs. Eukaryotic Cells",
      "Week 5: Eukaryotic Organelle Architecture — Nucleus, Ribosomes, ER, Golgi & Mitochondria",
      "Week 6: Plant vs. Animal Cell Comparison Lab — Cell Wall, Chloroplasts & Central Vacuole",
      "Week 7: Cellular Transport — Diffusion, Osmosis, Selective Permeability & Active Transport",
      "Week 8: Cellular Energy — Photosynthesis (6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂) & Cellular Respiration",
      "Week 9: Quarter 1 Proctored Life Science Examination & Microscopy Lab Portfolio",
      "Week 10: The Cell Cycle, DNA Replication & Stages of Mitosis (PMAT) Slide Identification",
      "Week 11: Meiosis, Gametogenesis & Chromosomal Variation",
      "Week 12: Gregor Mendel’s Pea Plant Experiments — Dominant & Recessive Alleles",
      "Week 13: Monohybrid & Dihybrid Punnett Squares, Genotype vs. Phenotype Ratios",
      "Week 14: DNA Double Helix Architecture (Watson, Crick, Franklin) & Base-Pairing Rules (A-T, G-C)",
      "Week 15: RNA Transcription, Ribosomal Translation & the Genetic Code",
      "Week 16: Linnaean Taxonomy — Domain, Kingdom, Phylum, Class, Order, Family, Genus, Species",
      "Week 17: Dichotomous Keys, Binomial Nomenclature & Classical Biological Classification",
      "Week 18: Quarter 2 Midterm Examination (Genetics, DNA & Linnaean Taxonomy)",
      "Week 19: Microbiology — Bacteria, Archaea, Protists & Beneficial Microorganisms",
      "Week 20: Mycology — Fungi Structure, Hyphae, Spores & Ecological Decomposers",
      "Week 21: Botany I — Nonvascular Bryophytes vs. Seedless Vascular Ferns",
      "Week 22: Botany II — Gymnosperms & Angiosperms (Root, Stem, Xylem, Phloem & Leaf Anatomy)",
      "Week 23: Botany III — Flower Dissection Lab, Pollination, Germination & Pressed Herbarium",
      "Week 24: Invertebrate Zoology — Sponges, Cnidarians, Mollusks, Annelids & Arthropods",
      "Week 25: Vertebrate Zoology — Fish, Amphibians, Reptiles, Birds (Aves) & Mammals",
      "Week 26: Animal Behavior, Homeostasis, Endothermy vs. Ectothermy & Structural Adaptations",
      "Week 27: Quarter 3 Proctored Examination & Pressed Botanical Herbarium Defense",
      "Week 28: Human Anatomy I — Skeletal & Muscular Systems (Joints, Levers & Contraction)",
      "Week 29: Human Anatomy II — Cardiovascular & Respiratory Systems (Heart Chambers & Gas Exchange)",
      "Week 30: Human Anatomy III — Digestive, Excretory & Nutritional Biochemistry",
      "Week 31: Human Anatomy IV — Nervous, Endocrine & Special Sensory Systems (Eye & Ear Optics/Acoustics)",
      "Week 32: Immunology — Innate vs. Adaptive Immunity, Antibodies & Pathogen Defense",
      "Week 33: Ecology I — Ecosystems, Trophic Levels, Food Webs & 10% Energy Pyramids",
      "Week 34: Ecology II — Biogeochemical Cycles (Carbon, Nitrogen, Hydrologic) & Biomes",
      "Week 35: Environmental Stewardship & Field Observation Capstone Report",
      "Week 36: Quarter 4 Final Comprehensive Grade 7 Life Science Examination"
    ],
    "lit-102": [
      "Week 1: Introduction to Formal Logic — Laws of Identity, Non-Contradiction & Excluded Middle",
      "Week 2: Simple Apprehension, Terms, Comprehension (Intension) & Extension",
      "Week 3: Defining Terms by Genus and Specific Difference (Aristotelian Definition)",
      "Week 4: Judgment & the Four Categorical Propositions (A, E, I, O Statements)",
      "Week 5: Quality (Affirmative/Negative) & Quantity (Universal/Particular) of Propositions",
      "Week 6: The Classical Square of Opposition — Contradictory, Contrary, Subcontrary & Subaltern",
      "Week 7: Distribution of Subject and Predicate Terms in A, E, I, and O Statements",
      "Week 8: Immediate Inference — Obversion, Conversion & Contraposition",
      "Week 9: Quarter 1 Proctored Formal Logic & Grammar Examination",
      "Week 10: Deductive Inference & the Structure of the Categorical Syllogism (Major, Minor, Middle Terms)",
      "Week 11: Mood and Figure of Categorical Syllogisms (Barbara, Celarent, Darii, Ferio)",
      "Week 12: Testing Syllogistic Validity Using the Six Rules of the Categorical Syllogism",
      "Week 13: Informal Fallacies of Relevance — Ad Hominem, Appeal to Pity, Bandwagon & Genetic Fallacy",
      "Week 14: Informal Fallacies of Presumption — Begging the Question, Red Herring, Straw Man & False Dilemma",
      "Week 15: Fallacies of Ambiguity — Equivocation, Amphiboly, Composition & Division",
      "Week 16: Advanced English Grammar I — Compound-Complex Sentences & Subordinate Clauses",
      "Week 17: Advanced English Grammar II — Verbals (Participles, Gerunds & Infinitives) Diagramming",
      "Week 18: Quarter 2 Midterm Examination & Logical Fallacy Analysis Paper",
      "Week 19: Progymnasmata III: The Chreia (Anecdote) & Maxim (Proverb) Eight-Paragraph Essay",
      "Week 20: Medieval Literature I — Beowulf: Heroic Code, Alliterative Verse & Christian Synthesis",
      "Week 21: Medieval Literature II — Song of Roland & Chivalric Virtue",
      "Week 22: Medieval Literature III — Sir Gawain and the Green Knight (Pentangle of Virtues)",
      "Week 23: Medieval Literature IV — Geoffrey Chaucer’s Canterbury Tales (General Prologue)",
      "Week 24: Classical Poetics — Meter (Iambic Pentameter, Trochaic, Dactylic), Rhyme & Stanza Forms",
      "Week 25: Figures of Speech — Metaphor, Simile, Synecdoche, Metonymy, Chiasmus & Antithesis",
      "Week 26: Shakespeare Introduction — Julius Caesar or A Midsummer Night’s Dream (Acts I–III)",
      "Week 27: Quarter 3 Proctored Examination & Chreia Essay Portfolio",
      "Week 28: Shakespeare — Dramatic Climax, Soliloquy Rhetoric & Resolution (Acts IV–V)",
      "Week 29: C.S. Lewis & J.R.R. Tolkien — Mythopoeia, Sub-Creation & Moral Imagination",
      "Week 30: Progymnasmata IV: Refutation & Confirmation Argumentative Composition",
      "Week 31: Primary-Source Research Methods, Outlining & Avoiding Plagiarism",
      "Week 32: Drafting the 5-Paragraph Classical Persuasive Essay (Exordium to Peroratio)",
      "Week 33: Revision for Active Voice, Parallel Structure & Rhetorical Precision",
      "Week 34: Socratic Debate Practicum — Defending a Thesis Under Cross-Examination",
      "Week 35: Oral Declamation & Poetic Recitation Exhibition",
      "Week 36: Quarter 4 Final Comprehensive Grade 7 Logic, Grammar & Literature Exam"
    ],
    "hist-102": [
      "Week 1: Transition from Classical Antiquity to Late Antiquity — Constantine & Council of Nicaea",
      "Week 2: Augustine of Hippo — The City of God vs. The Earthly City Amid the Fall of Rome (410–476 AD)",
      "Week 3: St. Benedict of Nursia, the Benedictine Rule (Ora et Labora) & Monastic Scriptoria",
      "Week 4: The Byzantine Empire — Justinian I, Corpus Juris Civilis & Hagia Sophia (527–565 AD)",
      "Week 5: Celtic & Anglo-Saxon Britain — St. Patrick, Columba, Augustine of Canterbury & Venerable Bede",
      "Week 6: Rise of Islam, the Umayyad/Abbasid Caliphates & the Battle of Tours (732 AD)",
      "Week 7: Charlemagne, the Carolingian Renaissance & Alcuin of York’s Palace School (800 AD)",
      "Week 8: The Viking Age, Alfred the Great of Wessex & the Danelaw",
      "Week 9: Quarter 1 Proctored Examination & Early Medieval Primary Source DBQ",
      "Week 10: Feudalism & Manorialism — Oaths, Fiefs, Knights, Castles & Agrarian Technology",
      "Week 11: The Norman Conquest of England (1066) — Battle of Hastings & the Domesday Book",
      "Week 12: The East-West Schism (1054), Investiture Controversy & Papal Reform",
      "Week 13: The Crusades — Historical Causes, Primary Chronicles & Cultural/Trade Exchanges",
      "Week 14: Romanesque vs. Gothic Cathedral Architecture — Flying Buttresses, Stained Glass & Chartres",
      "Week 15: Rise of the Medieval Universities — Bologna, Paris, Oxford & the Seven Liberal Arts",
      "Week 16: Scholasticism — Anselm of Canterbury, Peter Lombard & Thomas Aquinas’s Summa Theologiae",
      "Week 17: King John, Archbishop Stephen Langton & the Signing of Magna Carta at Runnymede (1215)",
      "Week 18: Quarter 2 Midterm Examination & Magna Carta Constitutional Analysis",
      "Week 19: Edward I, Simon de Montfort & the Birth of the English Parliament",
      "Week 20: Medieval Guilds, the Hanseatic League, Marco Polo & the Silk Road",
      "Week 21: East Asian Civilizations — Tang/Song Dynasty China, Inventions & Feudal Japan",
      "Week 22: West & East African Kingdoms — Aksum (Ethiopia), Ghana, Mali & Songhai",
      "Week 23: The 14th-Century Crisis — The Hundred Years’ War (Agincourt, Joan of Arc) & Black Death",
      "Week 24: Fall of Constantinople (1453) & the Migration of Greek Scholars to Italy",
      "Week 25: The Italian Renaissance — Florence, the Medici, Petrarch & Ad Fontes Humanism",
      "Week 26: Renaissance Masters — Brunelleschi’s Dome, Leonardo da Vinci, Michelangelo & Raphael",
      "Week 27: Quarter 3 Proctored Examination & Renaissance Primary Source Portfolio",
      "Week 28: Johannes Gutenberg’s Movable-Type Printing Press (c. 1450) & the Information Revolution",
      "Week 29: Northern Christian Humanism — Desiderius Erasmus & the Greek New Testament (1516)",
      "Week 30: Martin Luther, the Ninety-Five Theses (1517), Diet of Worms & the German Bible",
      "Week 31: The Swiss, French & English Reformations — Calvin, Tyndale, Cranmer & the Book of Common Prayer",
      "Week 32: The Catholic Counter-Reformation & the Council of Trent",
      "Week 33: Age of Maritime Exploration — Prince Henry, Columbus, Magellan & Cartography",
      "Week 34: Early Scientific Revolution — Copernicus, Tycho Brahe & Johannes Kepler",
      "Week 35: Comparative Timeline & Primary-Source Historiography Exhibition",
      "Week 36: Quarter 4 Final Comprehensive Grade 7 World History Examination"
    ],
    "lat-101": [
      "Week 1: Review of 1st & 2nd Declension Nouns, Adjectives & Present Active Indicative (Conjs. I & II)",
      "Week 2: Present Passive Indicative (Conjs. I & II: -r, -ris, -tur, -mur, -mini, -ntur) & Ablative of Agent",
      "Week 3: Imperfect & Future Passive Indicative (-bar, -bor) & Ablative of Means/Instrument",
      "Week 4: Third Declension Masculine/Feminine Consonant Stems (Rex, Lex, Miles, Virtus, Veritas)",
      "Week 5: Third Declension Neuter Consonant Stems (Corpus, Tempus, Nomen, Flumen, Caput)",
      "Week 6: Third Declension i-Stem Nouns (Civis, Urbs, Ars, Mare, Animal) & Genitive Plural -ium",
      "Week 7: Third Declension Adjectives of One, Two & Three Terminations (Omnis, Fortis, Acer)",
      "Week 8: Third Conjugation Verbs (-o / -ere: Pono, Mitto, Duco, Scribo) Active & Passive",
      "Week 9: Quarter 1 Proctored Latin I Examination & Vulgate Translation Defense",
      "Week 10: Third Conjugation -io Verbs (Capio, Facio, Fugio) & Fourth Conjugation (-io / -ire: Audio, Venio)",
      "Week 11: Imperfect & Future Indicative of 3rd & 4th Conjugations (-am, -es, -et, -emus, -etis, -ent)",
      "Week 12: Perfect Active System Across All Four Conjugations (Perfect, Pluperfect, Future Perfect)",
      "Week 13: Fourth Principle Part (Perfect Passive Participle) & Perfect Passive System (Amatus sum/eram/ero)",
      "Week 14: Fourth Declension Nouns (-us, -us & -u: Spiritus, Manus, Exercitus, Senatus, Cornu)",
      "Week 15: Fifth Declension Nouns (-es, -ei: Res, Dies, Fides, Spes) & Expressions of Time",
      "Week 16: Personal, Reflexive & Possessive Pronouns (Ego, Tu, Sui, Meus, Tuus, Suus)",
      "Week 17: Demonstrative Pronouns & Adjectives (Hic/Haec/Hoc, Ille/Illa/Illud, Is/Ea/Id)",
      "Week 18: Quarter 2 Midterm Latin I Examination (All 5 Declensions & All 4 Conjugations)",
      "Week 19: Relative Pronoun (Qui, Quae, Quod) & Relative Clause Agreement (Antecedent = Gender/Number)",
      "Week 20: Interrogative Pronouns & Adjectives (Quis/Quid; Qui/Quae/Quod)",
      "Week 21: Irregular Verbs — Possum (To Be Able) & Prosum with Complementary Infinitive",
      "Week 22: Comparison of Regular Adjectives — Positive, Comparative (-ior, -ius) & Superlative (-issimus)",
      "Week 23: Irregular Adjective Comparison (Bonus, Melior, Optimus; Magnus, Maior, Maximus)",
      "Week 24: Formation & Comparison of Latin Adverbs (-e, -iter, -ius, -issime)",
      "Week 25: Translating the Latin Vulgate — Psalm 23 (Dominus regit me) & The Lord's Prayer (Pater Noster)",
      "Week 26: Translating the Nicene & Apostles’ Creeds in Ecclesiastical Latin",
      "Week 27: Quarter 3 Proctored Latin I Examination & Etymology Portfolio",
      "Week 28: Numerals — Cardinal (Unus to Mille) & Ordinal (Primus to Millesimus) & Genitive of the Whole",
      "Week 29: Present Active, Perfect Passive & Future Active Participles",
      "Week 30: Introduction to the Ablative Absolute Construction (Noun + Participle in Ablative)",
      "Week 31: Indirect Statement (Oratio Obliqua) — Accusative Subject + Infinitive",
      "Week 32: Translating Adapted Selections from Eutropius’ Breviarium (Roman History)",
      "Week 33: Translating Adapted Selections from the Gesta Romanorum & Medieval Latin Chronicles",
      "Week 34: 500 English Scientific, Legal & Medical Derivatives from Latin Roots",
      "Week 35: National Latin Exam (Introductory / Level I) Full Practice & Oral Recitation",
      "Week 36: Quarter 4 Final Comprehensive Grade 7 Latin I Mastery Examination"
    ],

    // ==================== GRADE 8 COURSES (PRE-RHETORIC & HONORS ALGEBRA I) ====================
    "theo-801": [
      "Week 1: Luke-Acts Unity — Historical Prologue to Theophilus & the Ascension of Christ (Acts 1)",
      "Week 2: Pentecost, the Outpouring of the Holy Spirit & Peter’s First Sermon (Acts 2)",
      "Week 3: The Early Jerusalem Church, Healing at the Beautiful Gate & Sanhedrin Boldness (Acts 3–5)",
      "Week 4: The Seven Deacons, Stephen’s Speech & Martyrdom (Acts 6–7)",
      "Week 5: Philip in Samaria, the Ethiopian Treasurer & the Conversion of Saul on the Damascus Road (Acts 8–9)",
      "Week 6: Peter’s Vision at Joppa, Cornelius the Centurion & the Gospel to the Gentiles (Acts 10–12)",
      "Week 7: Paul’s First Missionary Journey — Antioch, Cyprus, Pisidian Antioch, Iconium, Lystra & Derbe (Acts 13–14)",
      "Week 8: The Jerusalem Council (Acts 15) & the Epistle of James / Galatians",
      "Week 9: Quarter 1 Proctored Examination & Map Portfolio of Paul’s First Journey",
      "Week 10: Paul’s Second Missionary Journey — Philippi, Thessalonica & Berea (Acts 16–17:15)",
      "Week 11: Paul at the Areopagus in Athens (Acts 17:16–34) — Classical Apologetics & the Unknown God",
      "Week 12: Ministry in Corinth (Acts 18) & the Epistles of 1 and 2 Thessalonians",
      "Week 13: Paul’s Third Missionary Journey — Ephesus, the Hall of Tyrannus & 1 Corinthians (Acts 19)",
      "Week 14: 2 Corinthians & the Epistle to the Romans (Justification by Faith & Life in the Spirit)",
      "Week 15: Farewell to the Ephesian Elders at Miletus & Arrest in Jerusalem (Acts 20–23)",
      "Week 16: Paul’s Defenses Before Felix, Festus & King Agrippa in Caesarea (Acts 24–26)",
      "Week 17: The Voyage, Shipwreck at Malta & Arrival in Imperial Rome (Acts 27–28)",
      "Week 18: Quarter 2 Midterm Examination & Pauline Prison Epistles (Ephesians, Philippians, Colossians, Philemon)",
      "Week 19: The Pastoral Epistles (1 Timothy, Titus, 2 Timothy) & the Epistle to the Hebrews",
      "Week 20: The Catholic/General Epistles (1 & 2 Peter, 1–3 John, Jude) & the Apocalypse of John",
      "Week 21: The Apostolic Fathers — Clement of Rome, Ignatius of Antioch, Polycarp & the Didache",
      "Week 22: Second-Century Apologists — Justin Martyr, Irenaeus of Lyons (Against Heresies) & Tertullian",
      "Week 23: The Alexandrian School (Clement, Origen) & the Formation/Recognition of the New Testament Canon",
      "Week 24: Persecution & Martyrdom in the Roman Empire — Decius, Diocletian & the Edict of Milan (313 AD)",
      "Week 25: Athanasius (On the Incarnation), Arius & the First Ecumenical Council of Nicaea (325 AD)",
      "Week 26: The Cappadocian Fathers (Basil, Gregory of Nazianzus, Gregory of Nyssa) & Council of Constantinople (381 AD)",
      "Week 27: Quarter 3 Proctored Examination & Patristic Creeds Defense",
      "Week 28: Jerome’s Latin Vulgate, John Chrysostom’s Golden Homilies & Ambrose of Milan",
      "Week 29: Augustine of Hippo — Confessions & De Doctrina Christiana",
      "Week 30: The Council of Ephesus (431 AD) & the Definition of Chalcedon (451 AD — Two Natures in One Person)",
      "Week 31: Boethius (Consolation of Philosophy), Cassiodorus & the Preservation of Christian Learning",
      "Week 32: Anselm of Canterbury (Cur Deus Homo) & Bernard of Clairvaux",
      "Week 33: The Reformers — Luther, Calvin, Cranmer & the Five Solas in Historical Context",
      "Week 34: Modern Missions — Carey, Judson, Livingstone, Hudson Taylor & the Global Church",
      "Week 35: Christian Apologetics & Worldview Synthesis Capstone Paper",
      "Week 36: Quarter 4 Final Comprehensive Grade 8 Church History & New Testament Exam"
    ],
    "math-801": [
      "Week 1: Axioms of the Real Numbers (Field Properties, Closure, Identity, Inverse & Distributive Law)",
      "Week 2: Algebraic Expressions, Order of Operations, Absolute Value & Translating Mathematical Models",
      "Week 3: Solving Multi-Step Linear Equations in One Variable & Literal Equations (Solving for a Specified Variable)",
      "Week 4: Ratios, Proportions, Weighted Averages, Mixture Problems & Uniform Motion (d = rt)",
      "Week 5: Linear Inequalities, Set-Builder & Interval Notation, and Compound Inequalities (AND / OR)",
      "Week 6: Absolute Value Equations & Absolute Value Inequalities (|ax + b| = c, < c, > c)",
      "Week 7: Relations, Functions, Domain & Range, Function Notation f(x) & Vertical Line Test",
      "Week 8: Linear Functions, Standard Form (Ax + By = C), x/y-Intercepts & Constant Rate of Change",
      "Week 9: Quarter 1 Proctored Honors Algebra I Examination (Carnegie Credit Benchmark 1)",
      "Week 10: Slope-Intercept Form (y = mx + b), Point-Slope Form (y - y₁ = m(x - x₁)) & Parallel/Perpendicular Lines",
      "Week 11: Scatter Plots, Lines of Best Fit, Linear Regression & Correlation Coefficient (r)",
      "Week 12: Piecewise-Defined Functions, Step Functions & Absolute Value Function Transformations",
      "Week 13: Systems of Linear Equations I — Graphing & Algebraic Substitution Methods",
      "Week 14: Systems of Linear Equations II — Linear Combination (Elimination) & Dependent/Inconsistent Systems",
      "Week 15: Applications of Linear Systems — Break-Even Analysis, Wind/Current Motion & Chemical Mixtures",
      "Week 16: Linear Inequalities in Two Variables & Graphing Systems of Linear Inequalities",
      "Week 17: Laws of Exponents — Integer Exponents, Zero/Negative Powers & Scientific Notation Proofs",
      "Week 18: Quarter 2 Midterm Honors Algebra I Examination (Linear Systems & Exponents)",
      "Week 19: Rational Exponents, nth Roots & Exponential Growth/Decay Functions (y = a·bˣ)",
      "Week 20: Geometric Sequences, Recursive vs. Explicit Formulas & Compound Interest",
      "Week 21: Polynomials — Degree, Standard Form, Addition, Subtraction & Multiplying Monomials/Polynomials",
      "Week 22: Special Products of Binomials — (a + b)², (a - b)² & Difference of Two Squares (a + b)(a - b)",
      "Week 23: Factoring Polynomials I — Greatest Common Monomial Factor & Factoring by Grouping",
      "Week 24: Factoring Polynomials II — Trinomials of the Form x² + bx + c and ax² + bx + c (ac-Method)",
      "Week 25: Factoring Polynomials III — Difference of Squares, Perfect Square Trinomials & Zero-Product Property",
      "Week 26: Graphing Quadratic Functions y = ax² + bx + c — Axis of Symmetry, Vertex, Minimum/Maximum & Zeros",
      "Week 27: Quarter 3 Proctored Honors Algebra I Examination (Polynomials & Factoring Mastery)",
      "Week 28: Vertex Form of a Quadratic y = a(x - h)² + k & Transformations of the Parent Parabola",
      "Week 29: Solving Quadratic Equations by Factoring, Taking Square Roots & Completing the Square",
      "Week 30: Deriving & Applying the Quadratic Formula x = [-b ± √(b² - 4ac)] / (2a) & Discriminant Analysis",
      "Week 31: Linear-Quadratic Systems of Equations & Projectile Motion Physics Modelling (h(t) = -16t² + v₀t + h₀)",
      "Week 32: Simplifying Radical Expressions, Rationalizing Denominators & Operations with Radicals",
      "Week 33: Radical Equations, Extraneous Solutions & the Distance/Midpoint Formulas",
      "Week 34: Rational Expressions — Simplifying, Multiplying, Dividing & Adding with LCD",
      "Week 35: Solving Rational Equations & Work/Rate Applications",
      "Week 36: Quarter 4 Final Comprehensive High-School-Credit Honors Algebra I Examination"
    ],
    "sci-801": [
      "Week 1: Foundations of Physical Science — SI Units, Dimensional Analysis, Significant Figures & Error",
      "Week 2: Kinematics in One Dimension — Position, Displacement, Distance, Speed & Velocity Vectors",
      "Week 3: Uniform Acceleration (a = Δv/Δt), Free Fall (g = 9.81 m/s²) & Kinematic Graphs (x-t and v-t)",
      "Week 4: Newton’s First Law of Motion (Inertia), Net Force, Free-Body Diagrams & Equilibrium",
      "Week 5: Newton’s Second Law (F_net = ma), Weight vs. Mass (W = mg) & Friction Forces",
      "Week 6: Newton’s Third Law (Action-Reaction Pairs) & Conservation of Linear Momentum (p = mv)",
      "Week 7: Universal Law of Gravitation (F = Gm₁m₂/r²), Centripetal Force & Satellite Orbits",
      "Week 8: Fluid Mechanics — Density (ρ = m/V), Pressure (P = F/A), Archimedes’ Buoyancy & Bernoulli’s Principle",
      "Week 9: Quarter 1 Proctored Physical Science Examination & Mechanics Lab Portfolio",
      "Week 10: Mechanical Work (W = Fd), Power (P = W/t in Watts) & Horsepower",
      "Week 11: Simple Machines Lab — Levers, Pulleys, Inclined Planes, Ideal vs. Actual Mechanical Advantage & Efficiency",
      "Week 12: Kinetic Energy (KE = ½mv²), Gravitational Potential Energy (PE = mgh) & Conservation of Mechanical Energy",
      "Week 13: Thermal Energy, Temperature Scales (Celsius, Kelvin, Fahrenheit) & Specific Heat Capacity (Q = mcΔT)",
      "Week 14: Heat Transfer Mechanisms (Conduction, Convection, Radiation) & Laws of Thermodynamics",
      "Week 15: Mechanical Waves — Transverse vs. Longitudinal Waves, Wavelength, Frequency & Wave Speed (v = fλ)",
      "Week 16: Acoustics — Sound Waves, Speed of Sound, Decibel Scale, Doppler Effect & Musical Harmonics",
      "Week 17: Electromagnetic Spectrum, Speed of Light (c = 3.00 × 10⁸ m/s), Reflection & Refraction (Lenses/Mirrors)",
      "Week 18: Quarter 2 Midterm Physical Science Examination (Energy, Thermodynamics & Waves)",
      "Week 19: Electrostatics — Electric Charge, Coulomb’s Law, Conductors, Insulators & Charging by Induction",
      "Week 20: Electric Current (I = Q/t), Voltage (V), Resistance (R) & Ohm’s Law Lab (V = IR)",
      "Week 21: Series vs. Parallel Electric Circuits & Electrical Power (P = IV)",
      "Week 22: Magnetism, Magnetic Domains, Electromagnets, Motors & Faraday’s Electromagnetic Induction",
      "Week 23: Classification of Matter — Pure Substances (Elements, Compounds) vs. Homogeneous/Heterogeneous Mixtures",
      "Week 24: States of Matter, Kinetic Molecular Theory, Phase Changes & Gas Laws (Boyle’s & Charles’s Laws)",
      "Week 25: Atomic Theory — Dalton, Thomson, Rutherford, Bohr & Subatomic Particles (Protons, Neutrons, Electrons)",
      "Week 26: Atomic Number, Mass Number, Isotopes, Atomic Mass Units & Electron Energy Levels",
      "Week 27: Quarter 3 Proctored Physical Science Examination (Electricity & Atomic Structure)",
      "Week 28: Mendeleev & the Periodic Table — Periods, Groups/Families, Metals, Nonmetals & Metalloids",
      "Week 29: Valence Electrons, Lewis Dot Structures & the Octet Rule",
      "Week 30: Chemical Bonding — Ionic Bonds (Electron Transfer) vs. Covalent Bonds (Electron Sharing) & Nomenclature",
      "Week 31: Chemical Reactions, Law of Conservation of Mass (Lavoisier) & Balancing Chemical Equations",
      "Week 32: Five Types of Chemical Reactions — Synthesis, Decomposition, Single/Double Replacement & Combustion",
      "Week 33: Exothermic vs. Endothermic Reactions, Activation Energy, Catalysts & Reaction Rates",
      "Week 34: Solutions, Solubility Curves, Acids, Bases, Neutralization & the pH Scale",
      "Week 35: Nuclear Chemistry Introduction — Alpha, Beta, Gamma Decay, Half-Life & Fission vs. Fusion",
      "Week 36: Quarter 4 Final Comprehensive Grade 8 Physical Science Examination"
    ],
    "lit-801": [
      "Week 1: Review of Categorical Syllogisms & Transition to Propositional / Hypothetical Logic",
      "Week 2: Conditional Statements (If p, then q) — Antecedent, Consequent & Necessary vs. Sufficient Conditions",
      "Week 3: Valid Mixed Hypothetical Syllogisms — Modus Ponens & Modus Tollens",
      "Week 4: Formal Hypothetical Fallacies — Affirming the Consequent & Denying the Antecedent",
      "Week 5: Pure Hypothetical Syllogisms, Disjunctive Syllogisms (Either p or q) & Conjunctive Syllogisms",
      "Week 6: Constructive & Destructive Dilemmas — Escaping Between the Horns, Taking by the Horns & Counter-Dilemma",
      "Week 7: Enthymemes (Abbreviated Syllogisms in Everyday Prose) & Supplying the Unstated Premise",
      "Week 8: Sorites (Chain Syllogisms) & Analyzing Complex Philosophical/Constitutional Arguments",
      "Week 9: Quarter 1 Proctored Formal Logic II & Syntax Examination",
      "Week 10: Progymnasmata V: Commonplace Essay & Encomium / Invective (Praise and Blame of Historical Figures)",
      "Week 11: Progymnasmata VI: Comparison Essay (Plutarchan Parallel Lives Rhetoric)",
      "Week 12: William Shakespeare’s Macbeth or Hamlet I — Tragic Flaw (Hamartia), Ambition & Moral Order (Acts I–II)",
      "Week 13: Shakespeare II — Soliloquy Analysis, Imagery, Meter & Moral Consequence (Acts III–V)",
      "Week 14: Early Modern & Restoration Poetry — John Donne, George Herbert, John Milton’s Sonnets",
      "Week 15: John Bunyan’s The Pilgrim’s Progress — Allegory, Christian’s Burden & Vanity Fair",
      "Week 16: Rhetoric of the American Founding — Jefferson, Madison, Patrick Henry & Washington’s Farewell Address",
      "Week 17: 19th-Century British & American Masterworks — Dickens (A Tale of Two Cities) or Melville",
      "Week 18: Quarter 2 Midterm Examination & Literary Analysis Essay",
      "Week 19: Abolitionist & Constitutional Rhetoric — William Wilberforce, Frederick Douglass & Lincoln’s Second Inaugural",
      "Week 20: G.K. Chesterton & C.S. Lewis — Paradox, Apologetic Essay Structure & Clarity of Prose",
      "Week 21: J.R.R. Tolkien’s The Lord of the Rings — Eucatastrophe, Stewardship & Heroic Sacrifice",
      "Week 22: Classical Poetics — Writing Original Sonnets (Shakespearean & Petrarchan) in Iambic Pentameter",
      "Week 23: Classical Rhetoric Preview — Aristotle’s Three Modes of Persuasion (Ethos, Pathos, Logos)",
      "Week 24: The Five Canons of Classical Rhetoric — Inventio, Dispositio, Elocutio, Memoria, Pronuntiatio",
      "Week 25: The Six Parts of a Classical Oration — Exordium, Narratio, Partitio, Confirmatio, Refutatio, Peroratio",
      "Week 26: Advanced Grammatical Style — Parallelism, Periodic vs. Loose Sentences & Subordination",
      "Week 27: Quarter 3 Proctored Examination & Classical Oration Manuscript",
      "Week 28: Formal Debate Practicum — Lincoln-Douglas Value Debate Format & Cross-Examination",
      "Week 29: Research Paper I — Selecting a Primary-Source Thesis & Annotated Bibliography",
      "Week 30: Research Paper II — Integrating Quotations, MLA Citation & Counter-Argument Refutation",
      "Week 31: Research Paper III — Polishing Style, Eliminating Wordiness & Final Manuscript Submission",
      "Week 32: 20th-Century Witness Literature — Aleksandr Solzhenitsyn & Dietrich Bonhoeffer",
      "Week 33: Preparing the 8th Grade Capstone Declamation Speech",
      "Week 34: Oral Delivery Practicum — Voice Projection, Pacing, Gesture & Eye Contact",
      "Week 35: 8th Grade Classical Declamation & Upper School Matriculation Defense",
      "Week 36: Quarter 4 Final Comprehensive Grade 8 Logic II, Literature & Rhetoric Exam"
    ],
    "hist-801": [
      "Week 1: Europe on the Eve of Colonization — Reformation, Printing Press & Rise of Nation-States",
      "Week 2: Spanish, French, Dutch & English Exploration of the Americas",
      "Week 3: Jamestown (1607), the Virginia House of Burgesses (1619) & Representative Self-Government",
      "Week 4: Plymouth (1620), the Mayflower Compact, Massachusetts Bay & Covenant Political Theory",
      "Week 5: Development of the Thirteen Colonies — New England, Middle & Southern Colonial Economies",
      "Week 6: The First Great Awakening (Edwards, Whitefield), Colonial Literacy & Founding of Colleges",
      "Week 7: The French and Indian War (1754–1763), Treaty of Paris & End of Salutary Neglect",
      "Week 8: Constitutional Crisis with Parliament — Stamp Act, Townshend Acts, Boston Tea Party & Intolerable Acts",
      "Week 9: Quarter 1 Proctored Colonial History Examination & Primary Source DBQ",
      "Week 10: First & Second Continental Congresses, Lexington & Concord (1775) & Common Sense",
      "Week 11: The Declaration of Independence (July 4, 1776) — Natural Rights, Consent of the Governed & Grievances",
      "Week 12: The War for Independence — Washington, Trenton, Saratoga, Valley Forge & Yorktown (1781)",
      "Week 13: The Articles of Confederation, Northwest Ordinance of 1787 & Shays’ Rebellion",
      "Week 14: The Constitutional Convention of 1787 in Philadelphia — Great Compromise & Three Branches",
      "Week 15: Constitutional Principles — Federalism, Separation of Powers, Checks & Balances, Limited Government",
      "Week 16: The Federalist Papers (Nos. 10, 51, 78) vs. Anti-Federalist Objections",
      "Week 17: The Bill of Rights (Amendments 1–10) — Religious Liberty, Free Speech, Due Process & Reserved Powers",
      "Week 18: Quarter 2 Midterm U.S. Constitution & Statutory Civics Examination",
      "Week 19: The Federalist Era — George Washington’s Presidency, Hamilton’s Financial Plan & Farewell Address",
      "Week 20: John Adams, Thomas Jefferson, the Louisiana Purchase (1803) & Lewis and Clark Expedition",
      "Week 21: James Madison, the War of 1812, Monroe Doctrine & Marshall Court Landmark Decisions",
      "Week 22: Industrial Revolution, Transportation (Canals, Railroads, Telegraph) & Jacksonian Democracy",
      "Week 23: Westward Expansion, Texas Independence, Oregon Trail & the Mexican-American War",
      "Week 24: Antebellum Reform, the Abolitionist Movement & the Sectional Crisis (1820–1859)",
      "Week 25: Election of 1860, Secession & the Outbreak of the American Civil War",
      "Week 26: The Civil War (1861–1865) — Antietam, Emancipation Proclamation, Gettysburg Address & Appomattox",
      "Week 27: Quarter 3 Proctored Examination & Lincoln Primary-Source Rhetorical Analysis",
      "Week 28: Reconstruction (1865–1877) & the 13th, 14th, and 15th Constitutional Amendments",
      "Week 29: State History & State Constitution Statutory Module — State Branches, Local Government & Civic Duty",
      "Week 30: The Gilded Age, American Inventors (Edison, Bell, Wright Brothers) & Immigration",
      "Week 31: World War I, the Interwar Era & the Great Depression",
      "Week 32: World War II — Atlantic Charter, D-Day, Pacific Theater & the Postwar Order",
      "Week 33: The Cold War, the Civil Rights Movement (Dr. Martin Luther King Jr.) & Apollo 11 Moon Landing",
      "Week 34: Principles of Free-Market Economics, Sound Money & Personal Financial Stewardship",
      "Week 35: U.S. Citizenship & Constitutional Civics 100-Question Mastery Verification",
      "Week 36: Quarter 4 Final Comprehensive Grade 8 U.S. History & State Civics Examination"
    ],
    "lat-801": [
      "Week 1: Comprehensive Review of All 5 Noun Declensions & All 4 Verb Conjugations (Active & Passive)",
      "Week 2: Deponent Verbs (Hortor, Vereor, Loquor, Sequor, Patior, Orior — Passive Form, Active Meaning)",
      "Week 3: Semi-Deponent Verbs (Audeo, Gaudeo, Soleo, Fido) & Irregular Verbs (Fero, Eo, Volo, Nolo, Malo)",
      "Week 4: Participles Mastery — Present Active, Perfect Passive, Future Active & Future Passive (Gerundive)",
      "Week 5: Ablative Absolute in Unadapted Classical Prose — Temporal, Causal, Concessive & Conditional Translation",
      "Week 6: Infinitives of All Tenses (Present, Perfect, Future — Active & Passive) & Indirect Statement",
      "Week 7: Introduction to the Subjunctive Mood — Present Subjunctive Active & Passive ('We Fear A Liar')",
      "Week 8: Imperfect, Perfect & Pluperfect Subjunctive Active & Passive",
      "Week 9: Quarter 1 Proctored Latin II Examination (Deponents, Participles & Subjunctive Forms)",
      "Week 10: Independent Uses of the Subjunctive — Jussive, Hortatory, Optative, Deliberative & Potential",
      "Week 11: Purpose Clauses (Ut / Ne + Subjunctive) & Sequence of Tenses (Primary vs. Secondary)",
      "Week 12: Result Clauses (Tam/Ita/Tantus ... Ut / Ut Non + Subjunctive)",
      "Week 13: Cum Clauses — Cum Temporal, Cum Circumstantial, Cum Causal & Cum Concessive",
      "Week 14: Indirect Questions (Interrogative Word + Subjunctive) & Indirect Commands (Ut/Ne)",
      "Week 15: Fear Clauses (Timeo ne / Timeo ut) & Relative Clauses of Characteristic",
      "Week 16: Conditional Sentences in Latin — Simple Fact, Future More/Less Vivid & Contrary-to-Fact",
      "Week 17: Gerunds vs. Gerundives & the Passive Periphrastic (Gerundive + Sum + Dative of Agent: Carthago delenda est)",
      "Week 18: Quarter 2 Midterm Latin II Examination (Subjunctive Syntax & Complex Clauses)",
      "Week 19: Translating Julius Caesar’s Commentarii de Bello Gallico Book I.1 ('Gallia est omnis divisa in partes tres')",
      "Week 20: Caesar’s Helvetian Campaign & Roman Military Engineering Terminology",
      "Week 21: Translating Jerome’s Latin Vulgate — Gospel of John Chapter 1 & Sermon on the Mount",
      "Week 22: Translating Patristic Latin — Selections from Augustine’s Confessions Book I",
      "Week 23: Medieval Latin Hymns — Veni Creator Spiritus, Te Deum Laudamus & Dies Irae",
      "Week 24: Statutory Digital Literacy I — Binary Logic, Boolean Algebra & How Computers Process Information",
      "Week 25: Statutory Digital Literacy II — Algorithmic Thinking, Structured Data & Responsible Digital Stewardship",
      "Week 26: Statutory Digital Literacy III — Primary-Source Digital Archives, Cybersecurity & Academic Integrity",
      "Week 27: Quarter 3 Proctored Examination (Caesar, Vulgate & Digital Literacy Module)",
      "Week 28: Sacred Polyphony & Music History I — Gregorian Chant, Guido of Arezzo & Palestrina",
      "Week 29: Sacred Polyphony II — Johann Sebastian Bach’s Counterpoint, Fugues & Soli Deo Gloria",
      "Week 30: Sacred Polyphony III — Handel’s Messiah, Mozart & Beethoven’s Symphonic Architecture",
      "Week 31: Classical Latin Legal & Scientific Maxims Used in Modern Jurisprudence and Medicine",
      "Week 32: Sight-Reading Unadapted Latin Historical Prose",
      "Week 33: Latin Prose Composition — Translating Complex English Sentences into Idiomatic Latin",
      "Week 34: National Latin Exam (Level II / Intermediate) Full Practice & Analysis",
      "Week 35: Grade 8 Latin & Fine Arts Capstone Exhibition",
      "Week 36: Quarter 4 Final Comprehensive Grade 8 Latin II Examination"
    ],

    // ==================== GRADES 9–12 UPPER SCHOOL COLLEGIATE COURSES ====================
    "theo-901": [
      "Week 1: Prolegomena — What Is Systematic Theology? Faith Seeking Understanding (Fides Quaerens Intellectum)",
      "Week 2: General Revelation — Creation, Conscience & Natural Law (Psalm 19; Romans 1–2)",
      "Week 3: Special Revelation — The Inspiration, Inerrancy, Authority & Sufficiency of Scripture (2 Tim 3:16)",
      "Week 4: Canon & Transmission — How the 66 Canonical & Deuterocanonical Books Were Preserved",
      "Week 5: Hermeneutics — Grammatical-Historical Exegesis, Context, Genre & the Analogy of Faith",
      "Week 6: The Attributes of God I — Incommunicable Attributes (Aseity, Immutability, Eternity, Omnipresence)",
      "Week 7: The Attributes of God II — Communicable Attributes (Holiness, Love, Wisdom, Justice, Truth)",
      "Week 8: The Holy Trinity — Biblical Foundations, Nicene Orthodoxy (Homoousios) & Perichoresis",
      "Week 9: Quarter 1 Proctored Systematic Theology Examination",
      "Week 10: Creation ex Nihilo, Divine Providence, Concurrence & the Intelligibility of Scientific Law",
      "Week 11: Theodicy — The Problem of Evil, Free Agency & God’s Sovereign Purpose in History",
      "Week 12: Biblical Anthropology — Humanity Created in the Image of God (Imago Dei) as Male and Female",
      "Week 13: The Fall, Original Sin & the Need for Redemption",
      "Week 14: Covenant Theology — The Unity of the Abrahamic, Mosaic, Davidic & New Covenants",
      "Week 15: Christology I — The Person of Christ: Fully God and Fully Man (Chalcedonian Definition)",
      "Week 16: Christology II — The Threefold Office of Christ (Munus Triplex): Prophet, Priest & King",
      "Week 17: Soteriology I — The Atonement, Substitution, Propitiation, Redemption & Victorious Resurrection",
      "Week 18: Quarter 2 Midterm Systematic Theology Examination",
      "Week 19: Soteriology II — Calling, Regeneration, Justification by Faith, Adoption & Sanctification",
      "Week 20: Pneumatology — The Person and Work of the Holy Spirit & the Fruit of the Spirit",
      "Week 21: Ecclesiology — The Nature, Marks, Sacraments/Ordinances & Mission of the Church",
      "Week 22: Eschatology — The Blessed Hope, Bodily Resurrection & the New Heavens and New Earth",
      "Week 23: Classical Christian Ethics I — What Is the Good? Teleology & Human Flourishing (Beatitudo)",
      "Week 24: The Four Cardinal Virtues — Prudence, Justice, Fortitude & Temperance",
      "Week 25: The Three Theological Virtues — Faith, Hope & Charity (Agape, 1 Corinthians 13)",
      "Week 26: Natural Law & the Moral Law (The Decalogue in Exodus 20 & Sermon on the Mount)",
      "Week 27: Quarter 3 Proctored Theology & Classical Ethics Examination",
      "Week 28: Augustine’s Order of Loves (Ordo Amorum) — Rightly Ordered vs. Disordered Affections",
      "Week 29: Thomas Aquinas on Law — Eternal Law, Natural Law, Human Law & Divine Law",
      "Week 30: Ethics of Truthfulness, Speech, Technology & Intellectual Integrity",
      "Week 31: Ethics of Work, Vocation, Stewardship & Generosity",
      "Week 32: Sanctity of Human Life & Bioethics From an Imago Dei Framework",
      "Week 33: Peacemaking, Just War Tradition & Civic Responsibility",
      "Week 34: Comparative Worldviews — Christian Theism vs. Materialistic Naturalism & Postmodern Relativism",
      "Week 35: Freshman Systematic Theology & Ethics Disputation Defense",
      "Week 36: Quarter 4 Final Comprehensive Grade 9 Systematic Theology Examination"
    ],
    "math-201": [
      "Week 1: Euclid’s Elements Book I — Definitions (Point, Line, Plane), 5 Postulates & 5 Common Notions",
      "Week 2: Deductive Logic in Geometry — Conditional Statements, Converse, Inverse, Contrapositive & Biconditionals",
      "Week 3: Segment & Angle Addition Postulates, Bisectors, Vertical Angles & Two-Column Proof Architecture",
      "Week 4: Compass & Straightedge Constructions I — Equilateral Triangle (Prop I.1), Bisecting Angles & Segments",
      "Week 5: Parallel Lines Cut by a Transversal — Corresponding, Alternate Interior/Exterior & Consecutive Interior Angles",
      "Week 6: Proving Lines Parallel & Slopes of Parallel and Perpendicular Lines in Coordinate Geometry",
      "Week 7: Triangle Angle-Sum Theorem (Prop I.32), Exterior Angle Theorem & Isosceles Triangle Theorem (Pons Asinorum, I.5)",
      "Week 8: Triangle Congruence Postulates & Theorems — SSS, SAS, ASA, AAS & HL (Right Triangles)",
      "Week 9: Quarter 1 Proctored Euclidean Geometry Examination & Two-Column Proof Portfolio",
      "Week 10: CPCTC Proofs (Corresponding Parts of Congruent Triangles Are Congruent) & Overlapping Triangles",
      "Week 11: Concurrency in Triangles — Circumcenter, Incenter, Centroid (Medians 2:1 Ratio) & Orthocenter",
      "Week 12: Indirect Proof (Reductio ad Absurdum) & Triangle Inequality Theorems (Hinge Theorem)",
      "Week 13: Polygons — Interior & Exterior Angle Sum Proofs for Convex n-Gons",
      "Week 14: Properties & Proofs of Parallelograms, Rectangles, Rhombi, Squares, Trapezoids & Kites",
      "Week 15: Coordinate Geometry Proofs — Proving Quadrilateral Classifications Using Distance, Slope & Midpoint",
      "Week 16: Ratio, Proportion, Geometric Mean & the Golden Ratio (Extreme and Mean Ratio, Euclid Book VI)",
      "Week 17: Similar Polygons & Triangle Similarity Theorems (AA~, SAS~, SSS~) and Proportionality Theorems",
      "Week 18: Quarter 2 Midterm Euclidean Geometry Examination (Congruence, Quadrilaterals & Similarity)",
      "Week 19: Right Triangle Altitude Similarity & Euclid’s Windmill Proof of the Pythagorean Theorem (Proposition I.47)",
      "Week 20: Special Right Triangles (45°-45°-90° and 30°-60°-90°) Exact Radical Ratios",
      "Week 21: Right Triangle Trigonometry — Sine, Cosine, Tangent Ratios (SOHCAHTOA) & Inverse Trig Functions",
      "Week 22: Angles of Elevation/Depression, Law of Sines & Law of Cosines for Oblique Triangles",
      "Week 23: Geometric Transformations — Translations, Reflections, Rotations, Symmetry & Dilations",
      "Week 24: Circles I — Tangents, Chords, Arcs & Central Angles",
      "Week 25: Circles II — Inscribed Angles, Thales’ Theorem & Secant/Tangent Angle Theorems",
      "Week 26: Circles III — Intersecting Chords, Secant-Secant & Secant-Tangent Segment Power Theorems",
      "Week 27: Quarter 3 Proctored Euclidean Geometry Examination (Pythagoras, Trigonometry & Circles)",
      "Week 28: Equation of a Circle in the Coordinate Plane: (x - h)² + (y - k)² = r² & Completing the Square",
      "Week 29: Arc Length, Sector Area, Radian Measure & Archimedes’ Method of Exhaustion for π",
      "Week 30: Area of Regular Polygons (A = ½ap), Heron’s Formula & Geometric Probability",
      "Week 31: Solid Geometry (Euclid Books XI–XIII) — Polyhedra, Euler’s Theorem & the Five Platonic Solids",
      "Week 32: Surface Area & Volume Proofs for Prisms, Cylinders, Pyramids & Cones (Cavalieri’s Principle)",
      "Week 33: Surface Area (4πr²) & Volume (4/3 πr³) of a Sphere & Archimedes’ Cylinder-Sphere Ratio (3:2)",
      "Week 34: Non-Euclidean Geometry Overview — Spherical & Hyperbolic Geometry vs. Euclid’s Fifth Postulate",
      "Week 35: Capstone Compass-and-Straightedge Portfolio & Oral Proof Defense",
      "Week 36: Quarter 4 Final Comprehensive High-School-Credit Euclidean Geometry Examination"
    ],
    "sci-901": [
      "Week 1: Epistemology of Biological Science — Experimental Design, Controls, Chi-Square Analysis & Microscopy",
      "Week 2: Atomic & Molecular Basis of Life — Covalent/Hydrogen Bonding, Water Properties & pH Buffers",
      "Week 3: Organic Biochemistry — Monomers & Polymers of Carbohydrates, Lipids, Proteins & Nucleic Acids",
      "Week 4: Enzyme Kinetics — Activation Energy, Induced-Fit Model, Denaturation & Competitive Inhibition Lab",
      "Week 5: Ultrastructure of Prokaryotic & Eukaryotic Cells — Endomembrane System & Cytoskeleton",
      "Week 6: Fluid Mosaic Membrane Model, Water Potential (Ψ = Ψ_s + Ψ_p), Osmosis Lab & Active Transport Pumps",
      "Week 7: Bioenergetics & ATP — Glycolysis, Krebs (Citric Acid) Cycle & Oxidative Phosphorylation (ETC)",
      "Week 8: Anaerobic Fermentation vs. Aerobic Respiration Respirometer Wet-Lab",
      "Week 9: Quarter 1 Proctored Honors Biology Examination & Biochemistry Lab Report",
      "Week 10: Photosynthesis — Light-Dependent Reactions (Photosystems II & I) & the Calvin Cycle",
      "Week 11: Cell Signaling, Cyclins, Checkpoints & the Mitotic Cell Cycle",
      "Week 12: Meiosis I & II, Crossing Over, Independent Assortment & Nondisjunction",
      "Week 13: Mendelian Genetics — Laws of Segregation & Independent Assortment, Testcrosses & Probability Rules",
      "Week 14: Non-Mendelian Inheritance — Incomplete Dominance, Codominance, Multiple Alleles (ABO), Epistasis & Sex-Linkage",
      "Week 15: Human Pedigree Analysis, Genetic Disorders & Chi-Square Goodness-of-Fit Statistical Testing",
      "Week 16: Molecular Genetics I — Meselson-Stahl Semiconservative DNA Replication (Helicase, DNA Polymerase, Ligase)",
      "Week 17: Molecular Genetics II — Transcription (RNA Processing, Introns/Exons) & Ribosomal Translation (tRNA/Codons)",
      "Week 18: Quarter 2 Midterm Honors Biology Examination (Bioenergetics, Mendelian & Molecular Genetics)",
      "Week 19: Gene Regulation — Prokaryotic Operons (lac/trp) & Eukaryotic Epigenetics/Transcription Factors",
      "Week 20: Biotechnology — Restriction Enzymes, PCR, Gel Electrophoresis & CRISPR/Recombinant DNA",
      "Week 21: Virology & Bacteriology — Viral Lytic/Lysogenic Cycles, Bacterial Transformation & Antibiotic Stewardship",
      "Week 22: Taxonomy, Systematics, Cladograms & Comparative Morphological/Molecular Analysis",
      "Week 23: Kingdom Fungi & Kingdom Plantae — Alternation of Generations, Bryophytes to Angiosperms",
      "Week 24: Plant Physiology — Transpiration-Cohesion-Tension Theory, Phloem Translocation & Plant Hormones (Auxins)",
      "Week 25: Invertebrate Phyla — Comparative Anatomy of Porifera, Cnidaria, Platyhelminthes, Mollusca, Annelida, Arthropoda",
      "Week 26: Chordate & Vertebrate Comparative Anatomy — Dissection Practicum & Organ System Integration",
      "Week 27: Quarter 3 Proctored Honors Biology Examination & Dissection/Histology Portfolio",
      "Week 28: Mammalian Physiology I — Nervous System Action Potentials (Na⁺/K⁺ Pump) & Synaptic Transmission",
      "Week 29: Mammalian Physiology II — Endocrine Feedback Loops (Homeostasis, Insulin/Glucagon, Thyroid)",
      "Week 30: Mammalian Physiology III — Four-Chambered Heart Hemodynamics, Hemoglobin Dissociation & Nephron Filtration",
      "Week 31: Mammalian Physiology IV — Humoral (B-Cell) & Cell-Mediated (T-Cell) Immune Response",
      "Week 32: Population Ecology — Exponential vs. Logistic Growth (dN/dt) & Carrying Capacity (K)",
      "Week 33: Community Ecology — Symbiosis, Keystone Species, Ecological Succession & Trophic Cascades",
      "Week 34: Ecosystem Energetics, Primary Productivity & Global Biogeochemical Cycles",
      "Week 35: Formal Scientific Research Paper & Wet-Lab Notebook Certification",
      "Week 36: Quarter 4 Final Comprehensive High-School-Credit Honors Biology Examination"
    ]
  };

  // Add complete 36-week maps for all remaining Upper School courses (Grades 9–12)
  const UPPER_SCHOOL_COURSE_SYLLABI = {
    "lit-901": [
      "Weeks 1–9 (Quarter 1): Homer’s Iliad (Books I–XXIV) — Heroic Wrath, Honor, Mortality & the Shield of Achilles",
      "Weeks 10–18 (Quarter 2): Homer’s Odyssey — Nostos (Homecoming), Xenia (Hospitality), Penelope & Telemachus",
      "Weeks 19–27 (Quarter 3): Greek Tragedy — Aeschylus’ Oresteia & Sophocles’ Oedipus Rex and Antigone (Natural Law)",
      "Weeks 28–36 (Quarter 4): Virgil’s Aeneid (Books I–XII) — Pietas, Fatum, Founding of Rome & MLA Literary Thesis"
    ],
    "hist-901": [
      "Weeks 1–9 (Quarter 1): Ancient Near East (Sumer, Babylon, Egypt, Israel) & Herodotus’ Histories of the Greco-Persian Wars",
      "Weeks 10–18 (Quarter 2): Periclean Athens, Thucydides’ History of the Peloponnesian War & Alexander the Great",
      "Weeks 19–27 (Quarter 3): Livy & Polybius on the Roman Republic, Mixed Constitution, Punic Wars & Cicero",
      "Weeks 28–36 (Quarter 4): Augustus, the Pax Romana, Rise of Christianity, Constantine & Augustine’s City of God"
    ],
    "lat-901": [
      "Weeks 1–9 (Quarter 1): Advanced Latin Syntax Review & Unadapted Readings from Caesar’s De Bello Gallico Book I",
      "Weeks 10–18 (Quarter 2): Caesar Books IV–VI (Britannia & Germania) & Indirect Discourse Mastery",
      "Weeks 19–27 (Quarter 3): Jerome’s Latin Vulgate — Complete Gospel of John & Selected Epistles",
      "Weeks 28–36 (Quarter 4): Cicero’s First Oration Against Catiline & National Latin Exam Level II/III Honors"
    ],
    "math-202": [
      "Weeks 1–9 (Quarter 1): Linear/Absolute Value Systems, Matrices, Determinants, Cramer’s Rule & Quadratic Functions",
      "Weeks 10–18 (Quarter 2): Complex Numbers (a + bi), Fundamental Theorem of Algebra, Polynomial & Rational Functions",
      "Weeks 19–27 (Quarter 3): Radical Functions, Exponential & Logarithmic Equations (e, ln) & Conic Sections (Parabolas, Ellipses, Hyperbolas)",
      "Weeks 28–36 (Quarter 4): Arithmetic/Geometric Series, Binomial Theorem, Unit-Circle Trigonometry & Trigonometric Identities"
    ],
    "theo-204": [
      "Weeks 1–9 (Quarter 1): Classical Apologetics — Faith & Reason, Cosmological (Kalam/Contingency), Teleological (Fine-Tuning) & Moral Arguments",
      "Weeks 10–18 (Quarter 2): Historical Reliability of the Old & New Testaments, Manuscript Evidence & the Resurrection of Christ",
      "Weeks 19–27 (Quarter 3): Worldview Analysis — Christian Theism vs. Deism, Naturalism, Nihilism, Existentialism & Pantheism",
      "Weeks 28–36 (Quarter 4): Science & Christian Faith — Kepler, Boyle, Newton, Maxwell & Answering Modern Objections"
    ],
    "sci-202": [
      "Weeks 1–9 (Quarter 1): Atomic Structure, Quantum Mechanical Orbitals (s, p, d, f), Periodic Trends & Ionic/Covalent Bonding",
      "Weeks 10–18 (Quarter 2): VSEPR Molecular Geometry, Intermolecular Forces, the Mole, Avogadro’s Number & Quantitative Stoichiometry",
      "Weeks 19–27 (Quarter 3): Ideal Gas Law (PV = nRT), Solutions, Molarity, Colligative Properties, Thermochemistry (ΔH) & Reaction Kinetics",
      "Weeks 28–36 (Quarter 4): Chemical Equilibrium (Le Chatelier), Acid-Base Titrations (pH, Ka), Redox Electrochemistry & Organic Chemistry"
    ],
    "lit-201": [
      "Weeks 1–9 (Quarter 1): St. Augustine’s Confessions (Books I–XIII) & Boethius’ Consolation of Philosophy",
      "Weeks 10–18 (Quarter 2): Dante Alighieri’s Divine Comedy (Inferno, Purgatorio & Paradiso) — Moral Architecture & Terza Rima",
      "Weeks 19–27 (Quarter 3): Geoffrey Chaucer’s Canterbury Tales & William Shakespeare’s Hamlet and King Lear",
      "Weeks 28–36 (Quarter 4): John Milton’s Paradise Lost (Books I–XII) — Blank Verse Epic, Free Will & Redemption"
    ],
    "hist-203": [
      "Weeks 1–9 (Quarter 1): Renaissance Statecraft, the Protestant & English Reformations, and the Wars of Religion",
      "Weeks 10–18 (Quarter 2): Constitutionalism in England (1688), the Scientific Revolution, Enlightenment & French Revolution",
      "Weeks 19–27 (Quarter 3): Industrial Revolution, 19th-Century Nationalism, Imperialism & World War I",
      "Weeks 28–36 (Quarter 4): World War II, the Cold War, Fall of the Iron Curtain (1989) & Modern Global Historiography"
    ],
    "lat-201": [
      "Weeks 1–9 (Quarter 1): Cicero’s In Catilinam I & III — Periodic Sentence Structure, Rhetorical Figures & Roman Senate Procedure",
      "Weeks 10–18 (Quarter 2): Cicero’s Pro Archia Poeta (In Defense of Liberal Arts & Literature) & Sallust",
      "Weeks 19–27 (Quarter 3): Pliny the Younger’s Letters (Vesuvius & Early Christians) & Augustine’s De Civitate Dei",
      "Weeks 28–36 (Quarter 4): Introduction to Latin Elegiac & Lyric Meter (Ovid) & Advanced Prose Composition"
    ],
    "theo-301": [
      "Weeks 1–9 (Quarter 1): Foundations of Moral Philosophy — Plato’s Republic, Aristotle’s Nicomachean Ethics & Biblical Wisdom",
      "Weeks 10–18 (Quarter 2): St. Thomas Aquinas on Natural Law, Conscience, Virtue & the Common Good",
      "Weeks 19–27 (Quarter 3): C.S. Lewis’s The Abolition of Man (The Tao / Objective Value) & Mere Christianity",
      "Weeks 28–36 (Quarter 4): Applied Christian Bioethics, Jurisprudence, Technology Ethics & Cultural Stewardship"
    ],
    "math-300": [
      "Weeks 1–9 (Quarter 1): Functions & Graphs, Polynomial/Rational Functions, Complex Zeros & Partial Fraction Decomposition",
      "Weeks 10–18 (Quarter 2): Exponential/Logarithmic Models, Analytic Trigonometry, Unit Circle & Trigonometric Identities/Equations",
      "Weeks 19–27 (Quarter 3): Law of Sines/Cosines, Vectors in the Plane & 3D Space, Dot/Cross Products, Parametric & Polar Equations",
      "Weeks 28–36 (Quarter 4): Matrices, Conic Sections in Polar Form, Infinite Series, Mathematical Induction & Limits (Calculus Preview)"
    ],
    "sci-301": [
      "Weeks 1–9 (Quarter 1): 1D & 2D Kinematics, Vector Calculus, Projectile Motion & Newtonian Dynamics (Friction, Inclines, Tension)",
      "Weeks 10–18 (Quarter 2): Work-Energy Theorem, Conservation of Momentum, Rotational Dynamics (Torque, Moment of Inertia) & Gravitation",
      "Weeks 19–27 (Quarter 3): Simple Harmonic Motion, Fluid Dynamics, Thermodynamics & Mechanical/Acoustic Waves",
      "Weeks 28–36 (Quarter 4): Electrostatics (Coulomb/Gauss), DC Circuits (Kirchhoff’s Rules), Magnetism, Geometric Optics & Modern Quantum Physics"
    ],
    "lit-301": [
      "Weeks 1–9 (Quarter 1): Aristotle’s Rhetoric, Cicero’s De Oratore & Quintilian’s Institutio Oratoria",
      "Weeks 10–18 (Quarter 2): Early American Letters — Bradford, Winthrop, Bradstreet, Edwards & the Federalist Papers",
      "Weeks 19–27 (Quarter 3): 19th-Century American Literature — Hawthorne (The Scarlet Letter), Melville (Moby-Dick) & Lincoln’s Rhetoric",
      "Weeks 28–36 (Quarter 4): Modern American & Transatlantic Essays, AP English Language Synthesis/Rhetorical Analysis & Junior Oration"
    ],
    "hist-301": [
      "Weeks 1–9 (Quarter 1): Colonial Foundations, Covenant Constitutionalism, the American Revolution & the 1787 Constitutional Convention",
      "Weeks 10–18 (Quarter 2): Early Republic, Marshall Court, Jacksonian Era, Sectional Crisis, Civil War & Reconstruction Amendments",
      "Weeks 19–27 (Quarter 3): Industrialization, Progressive Era, World War I, the Great Depression & World War II",
      "Weeks 28–36 (Quarter 4): Cold War Foreign Policy, Civil Rights Movement, Landmark Supreme Court Cases & AP DBQ Mastery"
    ],
    "lat-301": [
      "Weeks 1–9 (Quarter 1): Dactylic Hexameter Scansion, Poetic Syntax & Virgil’s Aeneid Book I ('Arma virumque cano')",
      "Weeks 10–18 (Quarter 2): Virgil’s Aeneid Book II (The Fall of Troy & Laocoön) & Book IV (Dido and Aeneas)",
      "Weeks 19–27 (Quarter 3): Virgil’s Aeneid Book VI (The Underworld & Anchises’ Prophecy of Rome) & Christian Reception of Virgil",
      "Weeks 28–36 (Quarter 4): Classical Aesthetics — Golden Ratio Architecture, Renaissance Art History & AP Virgil Essay Defense"
    ],
    "theo-401": [
      "Weeks 1–9 (Quarter 1): Theology of Vocation (Calling) — Luther, Calvin, Kuyper & Stewardship of Talents in Every Profession",
      "Weeks 10–18 (Quarter 2): Marriage, Family, Household Economics & Building Multi-Generational Faithfulness",
      "Weeks 19–27 (Quarter 3): Christian Political Thought — Augustine, Aquinas, Locke, Burke & the American Constitutional Republic",
      "Weeks 28–36 (Quarter 4): Senior Apologetics Colloquium, University Intellectual Readiness & Life Mission Defense"
    ],
    "math-301": [
      "Weeks 1–9 (Quarter 1): Limits, Continuity, Intermediate Value Theorem, Definition of the Derivative & Differentiation Rules (Chain, Implicit)",
      "Weeks 10–18 (Quarter 2): Related Rates, Mean Value Theorem, Optimization, Curve Sketching, L'Hôpital's Rule & Antiderivatives",
      "Weeks 19–27 (Quarter 3): Riemann Sums, Fundamental Theorem of Calculus, Integration by Parts, Partial Fractions & Improper Integrals",
      "Weeks 28–36 (Quarter 4): Differential Equations (Slope Fields, Logistic), Parametric/Polar Calculus & Infinite Taylor/Maclaurin Series (BC)"
    ],
    "sci-401": [
      "Weeks 1–9 (Quarter 1): Histological Tissues (Epithelial, Connective, Muscle, Nervous), Integumentary & Skeletal Biomechanics",
      "Weeks 10–18 (Quarter 2): Neuromuscular Physiology (Sliding Filament Theory), Action Potentials, Brain Neuroanatomy & Endocrine Axis",
      "Weeks 19–27 (Quarter 3): Cardiovascular Hemodynamics, ECG Analysis, Pulmonary Gas Exchange Laws & Renal Acid-Base Balance",
      "Weeks 28–36 (Quarter 4): Digestive Enzymology, Cellular Metabolism, Reproductive Embryology & Clinical Case Study Practicum"
    ],
    "lit-401": [
      "Weeks 1–9 (Quarter 1): Anglo-Saxon, Medieval & Renaissance British Literature — Beowulf, Chaucer, Spenser & Shakespeare’s Tempest",
      "Weeks 10–18 (Quarter 2): 17th & 18th Century Masters — Donne, Herbert, Milton, Swift & Samuel Johnson",
      "Weeks 19–27 (Quarter 3): Romantic, Victorian & 20th-Century British Literature — Wordsworth, Austen, Dickens, Chesterton, Lewis & Eliot",
      "Weeks 28–36 (Quarter 4): The 25-Page Senior Capstone Thesis — Drafting, Faculty Advisor Review & Public Oral Defense"
    ],
    "hist-401": [
      "Weeks 1–9 (Quarter 1): U.S. Constitutional Government I — Philosophical Foundations, Federalism, Article I (Congress) & Article II (Presidency)",
      "Weeks 10–18 (Quarter 2): U.S. Constitutional Government II — Article III (Judiciary), Bill of Rights, Civil Liberties & State/Local Civics",
      "Weeks 19–27 (Quarter 3): Classical & Modern Economics — Scarcity, Supply & Demand, Price Signals, Division of Labor, Money & Banking",
      "Weeks 28–36 (Quarter 4): Personal Financial Literacy — Budgeting, Zero-Debt Stewardship, Compound Investing, Taxes, Insurance & Entrepreneurship"
    ],
    "lat-401": [
      "Weeks 1–9 (Quarter 1): Koine Greek Alphabet, Breathings, Accents, 1st/2nd Declension Nouns, Definite Article & Present Active Verbs",
      "Weeks 10–18 (Quarter 2): 3rd Declension Greek Nouns, Personal/Relative Pronouns, Future/Imperfect/Aorist Verbs & Participles",
      "Weeks 19–27 (Quarter 3): Translating the Greek New Testament — John 1:1–18, 1 John, the Beatitudes & Pauline Hymns (Phil 2; Col 1)",
      "Weeks 28–36 (Quarter 4): Classical Architectural Aesthetics (Doric, Ionic, Corinthian, Romanesque, Gothic) & Senior Language Portfolio"
    ]
  };

  // Expand each 4-quarter summary in UPPER_SCHOOL_COURSE_SYLLABI into 36 individual distinct weeks
  const UNIT_SUB_FOCUS = [
    "Foundational Definitions, Primary Text & Axiom Setup",
    "Historical / Theoretical Context & Structural Derivation",
    "Quantitative / Textual Analysis & Worked Demonstration",
    "Comparative Case Study & Primary-Source Exegesis",
    "Advanced Application, Proof Construction & Lab/Essay Workshop",
    "Critical Objections, Fallacy Detection & Counter-Arguments",
    "Interdisciplinary Synthesis & Real-World Modelling",
    "Cumulative Unit Review, Oral Recitation & Seminar Defense",
    "Proctored Quarter Examination & Portfolio Certification"
  ];

  Object.keys(UPPER_SCHOOL_COURSE_SYLLABI).forEach((cId) => {
    const qSummaries = UPPER_SCHOOL_COURSE_SYLLABI[cId];
    const full36 = [];
    for (let w = 1; w <= 36; w++) {
      const qIdx = Math.floor((w - 1) / 9);
      const stepIdx = (w - 1) % 9;
      const baseTheme = qSummaries[qIdx].replace(/^Weeks \d+–\d+ \(Quarter \d+\):\s*/i, "");
      if (stepIdx === 8) {
        full36.push(`Week ${w}: Quarter ${qIdx + 1} Proctored Cumulative Examination — ${baseTheme}`);
      } else {
        full36.push(`Week ${w}: ${baseTheme} (${UNIT_SUB_FOCUS[stepIdx]})`);
      }
    }
    GRADES_7_12_36_WEEK_MAPS[cId] = full36;
  });

  // Apply all 36-week maps to INITIAL_ACADEMY_DATA.courses immediately
  const rootData = typeof INITIAL_ACADEMY_DATA !== "undefined" ? INITIAL_ACADEMY_DATA : window.INITIAL_ACADEMY_DATA;
  if (rootData && Array.isArray(rootData.courses)) {
    rootData.courses.forEach((course) => {
      const customMap = GRADES_7_12_36_WEEK_MAPS[course.id];
      if (customMap && customMap.length === 36) {
        course.syllabus36Weeks = customMap.map((titleStr, idx) => {
          const w = idx + 1;
          const qtr = Math.ceil(w / 9);
          return {
            weekNum: w,
            quarter: qtr,
            title: titleStr,
            daysCompleted: w < 11 ? 5 : w === 11 ? 2 : 0,
            masteryScore: w < 11 ? 95 + (w % 5) : w === 11 ? 96 : null,
            status: w < 11 ? "Mastered (≥85%)" : w === 11 ? "Active Week (In Progress)" : "Unlocked for Study & Testing"
          };
        });
      }
    });
  }

  // ==================== DYNAMIC WEEK-BY-WEEK & GRADE-BY-GRADE LESSON CONTENT ENGINE ====================
  // Dynamically updates the 5 Daily Modules, Deep Teaching Masterclass, Fill-in-Blanks, Writing, Quiz & Parent Guide
  // whenever the user switches to ANY course (Grades 6–12) OR clicks ANY week (Week 1 to Week 36)!
  window.syncCourseWeekContent = function (course, weekNum) {
    if (!course || !course.lessons || course.lessons.length === 0) return;
    const customMap = GRADES_7_12_36_WEEK_MAPS[course.id];
    if (customMap && customMap.length === 36) {
      course.syllabus36Weeks = customMap.map((titleStr, idx) => {
        const w = idx + 1;
        const qtr = Math.ceil(w / 9);
        return {
          weekNum: w,
          quarter: qtr,
          title: titleStr,
          daysCompleted: w < 11 ? 5 : w === 11 ? 2 : 0,
          masteryScore: w < 11 ? 95 + (w % 5) : w === 11 ? 96 : null,
          status: w < 11 ? "Mastered (≥85%)" : w === 11 ? "Active Week (In Progress)" : "Unlocked for Study & Testing"
        };
      });
    }
    const wNum = Math.max(1, Math.min(36, parseInt(weekNum, 10) || 11));
    const qtr = Math.ceil(wNum / 9);
    const wObj =
      (course.syllabus36Weeks || []).find((w) => w.weekNum === wNum) ||
      { weekNum: wNum, quarter: qtr, title: `Week ${wNum}: ${course.title}` };

    const cleanTopic = wObj.title.replace(/^Week\s+\d+\s*(\([^)]*\))?:\s*/i, "").trim();
    const gradeNum = (course.gradeLevels && course.gradeLevels[0]) || 6;
    const code = course.code;
    const dept = course.department;

    // Extract 3 meaningful technical terms from the week's topic for Day 1–5 study
    const stopWords = new Set(["the", "and", "of", "in", "to", "for", "with", "vs", "vs.", "on", "at", "by", "from", "or", "a", "an", "book", "books", "week", "quarter", "part", "i", "ii", "iii", "iv"]);
    const rawWords = cleanTopic
      .replace(/[^a-zA-Z0-9\s-]/g, " ")
      .split(/\s+/)
      .filter((w) => w.length >= 4 && !stopWords.has(w.toLowerCase()));

    const term1 = rawWords[0] || "Axiom";
    const term2 = rawWords[1] || "Proportion";
    const term3 = rawWords[2] || "Synthesis";

    const dayConfigs = [
      {
        dayNum: 1,
        dayName: "MONDAY",
        shortTitle: `Day 1: ${cleanTopic} — First Principles & Primary Exposition`,
        blanks: [
          { before: `1. In ${code} (Grade ${gradeNum}) Week ${wNum}, our primary study focuses on "${cleanTopic}", beginning with the foundational concept of `, answer: term1, after: ".", hint: `Key term from today's Week ${wNum} topic (${term1})` },
          { before: `2. Every valid demonstration in ${course.title} connects ${term1} with `, answer: term2, after: " through rigorous primary evidence.", hint: `Second key term (${term2})` },
          { before: `3. Before solving advanced problems, a classical scholar establishes the governing `, answer: "Axiom", after: " and definition of each term.", hint: "Starts with A (foundational first principle)" }
        ],
        wordBank: [term1, term2, "Axiom", term3, "Logos"],
        writingPrompt: `Write a 25–65 word analytical summary explaining the central principle of "${cleanTopic}" (${code} · Week ${wNum}, Day 1) and how ${term1} and ${term2} relate to one another.`,
        writingExemplar: `Model Scholar Response: In Week ${wNum} of ${code} (${course.title}), we examine ${cleanTopic} by defining ${term1} and demonstrating its connection to ${term2}. Grounding our study in primary evidence and clear axioms ensures accurate mastery across all five days of this unit.`
      },
      {
        dayNum: 2,
        dayName: "TUESDAY",
        shortTitle: `Day 2: ${cleanTopic} — Worked Derivations & Socratic Analysis`,
        blanks: [
          { before: `1. On Day 2 of Week ${wNum} (${cleanTopic}), every intermediate `, answer: "Step", after: " in our derivation or textual analysis must be explicitly justified.", hint: "Starts with S (stage in a logical derivation)" },
          { before: `2. When analyzing ${term1} and ${term2}, we support our claim with direct `, answer: "Evidence", after: " from the primary text or quantitative formula.", hint: "Starts with E (verified proof or data)" },
          { before: `3. True Grade ${gradeNum} mastery requires understanding the underlying `, answer: "Cause", after: ` behind ${cleanTopic}.`, hint: "Starts with C (reason why a law holds)" }
        ],
        wordBank: ["Step", "Evidence", "Cause", term1, term2],
        writingPrompt: `Show your step-by-step analytical reasoning (25–65 words) for a core problem or Socratic question in "${cleanTopic}" (${code} · Week ${wNum}, Day 2).`,
        writingExemplar: `Model Scholar Response: Step 1: State the governing rule of ${cleanTopic}. Step 2: Apply the relationship between ${term1} and ${term2} to the given case with exact units and citations. Step 3: Verify that the conclusion follows by necessity from our premises.`
      },
      {
        dayNum: 3,
        dayName: "WEDNESDAY",
        shortTitle: `Day 3: ${cleanTopic} — Deep Practicum (Lab, Proof or Essay)`,
        blanks: [
          { before: `1. In our Wednesday Week ${wNum} Practicum on "${cleanTopic}", we formulate a clear `, answer: dept.includes("Science") ? "Hypothesis" : dept.includes("Math") ? "Theorem" : "Thesis", after: " to test or prove.", hint: dept.includes("Science") ? "Testable prediction" : dept.includes("Math") ? "Proven proposition" : "Central declarative claim" },
          { before: `2. We then examine ${term1} and `, answer: term2, after: " under controlled analytical standards.", hint: `Key unit concept (${term2})` },
          { before: `3. Finally, we state a formal `, answer: "Conclusion", after: " uniting our claim, evidence, and logical reasoning.", hint: "Starts with C (final demonstrated result)" }
        ],
        wordBank: [dept.includes("Science") ? "Hypothesis" : dept.includes("Math") ? "Theorem" : "Thesis", term2, "Conclusion", term1, "Verification"],
        writingPrompt: `Compose your Week ${wNum} Wednesday Practicum paragraph (25–75 words) for "${cleanTopic}" (${code}): state your Thesis/Hypothesis/Theorem, present the Evidence/Data, and explain your Reasoning.`,
        writingExemplar: `Model Scholar Response: Claim: In ${code} Week ${wNum}, ${cleanTopic} demonstrates a consistent law connecting ${term1} and ${term2}. Evidence: Direct analysis of our primary cases confirms this relationship without exception. Reasoning: Therefore, our practicum validates the foundational principle taught on Day 1.`
      },
      {
        dayNum: 4,
        dayName: "THURSDAY",
        shortTitle: `Day 4: ${cleanTopic} — Cumulative Spiral Review (Weeks 1–${wNum})`,
        blanks: [
          { before: `1. Every Thursday in ${code} interleaves current Week ${wNum} study (${cleanTopic}) with a `, answer: "Cumulative", after: ` spiral review of Weeks 1–${Math.max(1, wNum - 1)}.`, hint: "Starts with C (building across all prior weeks)" },
          { before: `2. Integrating earlier foundations with ${term1} produces a lasting `, answer: "Synthesis", after: " of knowledge in long-term memory.", hint: "Starts with S (uniting parts into a whole)" },
          { before: `3. Classical scholars practice oral recitation and `, answer: "Memoria", after: " so first principles are permanently retained.", hint: "Latin term for disciplined memory" }
        ],
        wordBank: ["Cumulative", "Synthesis", "Memoria", term1, term2],
        writingPrompt: `In 25–65 words, explain how an earlier concept from ${code} prepares you to understand "${cleanTopic}" in Week ${wNum}.`,
        writingExemplar: `Model Scholar Response: The foundational definitions we mastered earlier in ${code} serve as the direct prerequisite for Week ${wNum}'s study of ${cleanTopic}. By connecting prior axioms to ${term1} and ${term2}, we see the vertical unity of the entire 36-week curriculum.`
      },
      {
        dayNum: 5,
        dayName: "FRIDAY",
        shortTitle: `Day 5: ${cleanTopic} — Summative 85% Mastery Gatekeeper`,
        blanks: [
          { before: `1. To complete Week ${wNum} (${cleanTopic}) and unlock Week ${Math.min(36, wNum + 1)}, scholars must achieve at least 85% `, answer: "Mastery", after: " on today's summative assessment.", hint: "Starts with M (≥85% standard)" },
          { before: `2. Our Week ${wNum} capstone defense unites ${term1}, ${term2}, and `, answer: term3, after: " into a coherent whole.", hint: `Third key concept (${term3})` },
          { before: `3. Every completed week is logged to the scholar's official State & Private `, answer: "Portfolio", after: ` for Grade ${gradeNum} credit certification.`, hint: "Starts with P (permanent academic record)" }
        ],
        wordBank: ["Mastery", term3, "Portfolio", "Remediation", term1],
        writingPrompt: `Write your Week ${wNum} Friday Capstone Defense (25–75 words) synthesizing the most important truth or law you mastered in "${cleanTopic}" (${code}).`,
        writingExemplar: `Model Scholar Response: Across all five days of Week ${wNum} in ${code}, we mastered ${cleanTopic}, proving how ${term1}, ${term2}, and ${term3} operate in harmony. Having verified our work through primary evidence and step-by-step proofs, we are ready to advance past the 85% Mastery Gate.`
      }
    ];

    course.lessons.forEach((lesson, idx) => {
      const cfg = dayConfigs[idx] || dayConfigs[0];
      lesson.unit = `QUARTER ${qtr} · WEEK ${wNum} OF 36 · ${cfg.dayName} (DAY ${cfg.dayNum} · 3 ASSIGNMENTS)`;
      lesson.title = cfg.shortTitle;
      lesson.videoChapter = `WEEK ${wNum} DAY ${cfg.dayNum} SEMINAR · ${code} (GRADE ${gradeNum})`;
      lesson.readingHtml = `
        <div class="lesson-callout">
          <strong>${code} (Grade ${gradeNum}) · Week ${wNum} of 36 (${cfg.dayName}):</strong> Welcome to <em>${cleanTopic}</em>. Study the <strong>4-Part Topic-of-the-Day Masterclass</strong> and <strong>Interactive Visual Diagram</strong> below, then complete today's 3 required daily assignments: (1) Fill-in-the-Blank Cloze, (2) Classical Writing Response, and (3) ≥85% Mastery Quiz.
        </div>
        <h3>${cfg.shortTitle}</h3>
        <p>In <strong>${course.title}</strong> (${code}), Week ${wNum} explores <strong>${cleanTopic}</strong>. Key concepts examined today include <strong>${term1}</strong>, <strong>${term2}</strong>, and <strong>${term3}</strong>.</p>
      `;
      lesson.wordBank = cfg.wordBank;
      lesson.fillInBlanks = cfg.blanks;
      if (!lesson.dailyWriting) lesson.dailyWriting = {};
      lesson.dailyWriting.title = `Week ${wNum} Day ${cfg.dayNum} Writing Assignment: ${cleanTopic} (${code})`;
      lesson.dailyWriting.prompt = cfg.writingPrompt;
      lesson.dailyWriting.exemplar = cfg.writingExemplar;

      lesson.quiz = [
        {
          q: `[${code} · Week ${wNum}, Day ${cfg.dayNum}] In studying "${cleanTopic}", how do ${term1} and ${term2} function together?`,
          options: [
            `They establish the foundational principles and demonstrable relationships of ${cleanTopic} verified by primary evidence`,
            "They are unrelated terms with no logical connection",
            "They allow scholars to skip step-by-step proofs and citations",
            "None of the above"
          ],
          correct: 0,
          explanation: `In Week ${wNum} of ${code}, ${term1} and ${term2} anchor our analytical study of ${cleanTopic}.`
        },
        {
          q: `[${code} · Grade ${gradeNum} Mastery Standard] What 3 daily deliverables must be completed on Day ${cfg.dayNum} of Week ${wNum} (${cleanTopic})?`,
          options: [
            `1. Week ${wNum} Fill-in-the-Blank Cloze (${cfg.blanks.map((b) => b.answer).join(", ")}), 2. Daily Analytical Writing, and 3. Daily Mastery Quiz (≥85%)`,
            "Only reading the title without submitting work",
            "Guessing without reading the masterclass",
            "Skipping to next month"
          ],
          correct: 0,
          explanation: "Every day of all 36 weeks requires the 3-part Daily Mastery Triad at ≥85% accuracy."
        }
      ];

      // Update Deep Teaching Masterclass & Parent Guide to match Week wNum & Course
      if (lesson.deepTeaching) {
        lesson.deepTeaching.dayHeader = `${code} (GRADE ${gradeNum}) · WEEK ${wNum} OF 36 · DAY ${cfg.dayNum}`;
        lesson.deepTeaching.bigIdea = `Week ${wNum} Focus: "${cleanTopic}". Read the 4 teaching sections and interactive visual blueprint below—every concept and vocabulary term (${cfg.blanks.map((b) => b.answer).join(", ")}) for today's 3 assignments is taught step-by-step right here.`;
        if (lesson.deepTeaching.sections && lesson.deepTeaching.sections.length >= 2) {
          lesson.deepTeaching.sections[0].heading = `1. Week ${wNum} Core Exposition: ${cleanTopic}`;
          lesson.deepTeaching.sections[0].keyTakeaway = `Week ${wNum} Takeaway: Master the definition and role of ${term1}, ${term2}, and ${term3} in ${course.title}.`;
          lesson.deepTeaching.sections[1].keyTakeaway = `Today's Exact Cloze Terms (Week ${wNum}, Day ${cfg.dayNum}): ${cfg.blanks.map((b) => `"${b.answer}"`).join(", ")}.`;
        }
        lesson.deepTeaching.vocabularyTable = [
          ...cfg.blanks.map((b, bIdx) => ({
            term: b.answer,
            category: `Week ${wNum} Day ${cfg.dayNum} Cloze Key #${bIdx + 1}`,
            definition: `${b.before.replace(/^\d+\.\s*/, "")} [${b.answer}] ${b.after}`,
            studyTip: `Clue: ${b.hint} (Required for Assignment 1 Blank #${bIdx + 1}).`
          })),
          {
            term: cleanTopic.slice(0, 42),
            category: `${code} Week ${wNum} Theme`,
            definition: `Central topic of Quarter ${qtr}, Week ${wNum} in ${course.title} (Grade ${gradeNum}).`,
            studyTip: "Cite this week's theme in your Daily Assignment 2 (Classical Writing) paragraph."
          }
        ];
        if (lesson.deepTeaching.workedExamples && lesson.deepTeaching.workedExamples.length >= 2) {
          lesson.deepTeaching.workedExamples[0].badge = `WORKED EXAMPLE 1 · WEEK ${wNum} KEY CONCEPTS (${code})`;
          lesson.deepTeaching.workedExamples[0].problem = `Question: How do we complete today's Week ${wNum} Cloze on "${cleanTopic}"?`;
          lesson.deepTeaching.workedExamples[0].step2 = `Step 2 (Exact Key Match): ${cfg.blanks.map((b, i) => `Blank #${i + 1} = "${b.answer}"`).join(" · ")}.`;
          lesson.deepTeaching.workedExamples[1].badge = `WORKED EXAMPLE 2 · WEEK ${wNum} WRITING MODEL`;
          lesson.deepTeaching.workedExamples[1].problem = `Prompt: ${cfg.writingPrompt}`;
          lesson.deepTeaching.workedExamples[1].step3 = `Step 3 (Model Exemplar): "${cfg.writingExemplar}"`;
        }
      }

      if (lesson.parentGuide) {
        lesson.parentGuide.dayTitle = `${code} (Grade ${gradeNum}) — Week ${wNum}, Day ${cfg.dayNum}: ${cleanTopic}`;
        lesson.parentGuide.quickOverview = `Today your Grade ${gradeNum} scholar is studying Week ${wNum} ("${cleanTopic}") in ${course.title}. Use the 60-second explanation, kitchen-table script, and complete answer key below to guide and verify their 3 assignments.`;
        lesson.parentGuide.answerKeySummary = {
          blanksAnswers: cfg.blanks.map((b, i) => `Blank #${i + 1}: "${b.answer}" (${b.hint})`),
          writingModel: cfg.writingExemplar,
          quizAnswers: lesson.quiz.map((q, qi) => `Q${qi + 1}: "${q.options[q.correct]}" — Why: ${q.explanation}`)
        };
      }
    });
  };
})();
