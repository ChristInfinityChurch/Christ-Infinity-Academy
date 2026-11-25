// Christ Infinity Academy — Future-Ready Electives, Non-College Career Licensing, Asset Management & Skilled Trades Suite (Standard & Honors Tracks)
(function () {
  const NEW_CAREER_AND_ELECTIVE_COURSES = [
    {
      id: "real-301",
      code: "REAL-301",
      title: "Real Estate Licensing Prep, Contracts & Property Investing",
      department: "Career, Finance & Trades",
      gradeLevels: [10, 11, 12],
      division: "high",
      credits: 1.0,
      track: "Standard / Career Licensing",
      trackTiers: ["Standard / Career-Prep", "Honors"],
      instructor: "Prof. Marcus Vance & Licensed Broker Panel",
      progress: 0,
      termGrade: 96,
      quizAvg: 95,
      description: "Non-college career pathway preparing scholars to pass State Real Estate Salesperson Licensing exams: property rights, deeds, agency law, purchase contracts, mortgages, appraisals, escrow closing, and rental cash-flow analysis (Cap Rate & Cash-on-Cash Return).",
      lessons: [],
      custom36Weeks: [
        "Week 1: Introduction to Real Estate Careers — Salesperson, Broker, Appraiser, Property Manager & Investor",
        "Week 2: Real vs. Personal Property, Fixtures (MARIA Test) & Bundle of Legal Rights",
        "Week 3: Freehold & Leasehold Estates — Fee Simple Absolute, Life Estates & Joint Tenancy",
        "Week 4: Encumbrances — Easements, Liens, Deed Restrictions (CC&Rs) & Encroachments",
        "Week 5: Legal Land Descriptions — Metes & Bounds, Lot-Block-Subdivision & Rectangular Survey",
        "Week 6: Public Land Use Controls — Zoning Ordinances, Building Codes, Eminent Domain & Property Tax",
        "Week 7: Title Transfer, General/Special Warranty Deeds, Quitclaim Deeds & Title Insurance",
        "Week 8: Recording Acts, Chain of Title, Abstract of Title & Clearing Clouded Titles",
        "Week 9: Quarter 1 Proctored National Real Estate Principles Exam (Property & Title Mastery)",
        "Week 10: Agency Law & Fiduciary Duties (OLD CAR: Obedience, Loyalty, Disclosure, Confidentiality, Accounting, Reasonable Care)",
        "Week 11: Listing Agreements — Exclusive Right-to-Sell, Exclusive Agency, Open Listing & Buyer Representation",
        "Week 12: Fair Housing Act (1968), ADA Compliance, Antitrust Laws & Ethical Advertising",
        "Week 13: Contract Law Essentials — Offer, Acceptance, Consideration, Competent Parties & Statute of Frauds",
        "Week 14: Purchase & Sale Agreements, Earnest Money Deposits, Contingencies & Addenda",
        "Week 15: Disclosures — Material Defects, Lead-Based Paint, Environmental Hazards & Seller Statements",
        "Week 16: Real Estate Appraisal I — Market Value, Supply & Demand, Highest & Best Use",
        "Week 17: Real Estate Appraisal II — Sales Comparison Approach, Cost Approach & Income Capitalization (IRV)",
        "Week 18: Quarter 2 Midterm Real Estate Licensing Exam (Agency, Contracts & Valuation)",
        "Week 19: Real Estate Financing I — Promissory Notes, Mortgages vs. Deeds of Trust & Lien Theory",
        "Week 20: Loan Types — Conventional, FHA, VA, USDA, Adjustable-Rate (ARM) & Seller Financing",
        "Week 21: Underwriting Math — Loan-to-Value (LTV), Debt-to-Income (DTI), Discount Points & Amortization",
        "Week 22: Federal Lending Laws — TILA (Truth in Lending), RESPA, TRID Closing Disclosure & ECOA",
        "Week 23: Closing & Escrow Settlement — Prorations (Taxes/Interest), Transfer Taxes & HUD/CD Math",
        "Week 24: Real Estate Math Bootcamp — Area/Acreage, Commission Splits, Net-to-Seller & Profit Percentages",
        "Week 25: Property Management — Leases, Security Deposits, Landlord-Tenant Law & Maintenance Reserves",
        "Week 26: Investing Fundamentals I — Analyzing Cash Flow, Operating Expenses, NOI & Cap Rate (NOI / Price)",
        "Week 27: Quarter 3 Proctored Real Estate Finance & Closing Math Examination",
        "Week 28: Investing Fundamentals II — Cash-on-Cash Return, Leverage, 1% Rule & House-Hacking Blueprint",
        "Week 29: Fix-and-Flip Budgeting, After Repair Value (ARV), Contractor Bids & Contingency Reserves",
        "Week 30: Commercial vs. Residential Real Estate — Triple-Net (NNN) Leases & Multi-Family Syndication",
        "Week 31: Real Estate Tax Advantages — Depreciation, 1031 Like-Kind Exchanges & Capital Gains",
        "Week 32: Building a Real Estate Business — Lead Generation, CRM Systems, Negotiation & Open Houses",
        "Week 33: State-Specific Licensing Law Review, Continuing Education & Sponsorship with a Managing Broker",
        "Week 34: Full-Length National Licensing Practice Exam A (100 Timed Questions + Remediation)",
        "Week 35: Full-Length State & Math Licensing Practice Exam B + Deal Underwriting Portfolio",
        "Week 36: Quarter 4 Final Comprehensive Real Estate Licensing Readiness Certification"
      ]
    },
    {
      id: "fin-305",
      code: "FIN-305",
      title: "Stock Market Investing, Index Funds & Cryptocurrency / Blockchain Literacy",
      department: "Career, Finance & Trades",
      gradeLevels: [9, 10, 11, 12],
      division: "high",
      credits: 1.0,
      track: "Standard / Wealth & Finance",
      trackTiers: ["Standard / Practical", "Honors Quantitative"],
      instructor: "Dr. Alistair Sterling & Capital Markets Faculty",
      progress: 0,
      termGrade: 97,
      quizAvg: 96,
      description: "Practical capital-markets and digital-asset education: compound interest, brokerage accounts, Roth IRAs, index ETFs, reading company 10-K financial statements, stock valuation, risk management, Bitcoin & blockchain mechanics, wallet security (hardware cold storage), and avoiding fraud/scams.",
      lessons: [],
      custom36Weeks: [
        "Week 1: Philosophy of Stewardship, Inflation vs. Purchasing Power & Why Investing Beats Cash Sitting Idle",
        "Week 2: The Power of Compounding (Rule of 72) — Starting at Age 18 vs. Age 35 Mathematical Proof",
        "Week 3: Financial Foundation First — Zero High-Interest Debt, Emergency Fund & Monthly Cash-Flow Budget",
        "Week 4: How the Stock Market Works — IPOs, NYSE, NASDAQ, Market Makers, Bid/Ask Spread & Order Types",
        "Week 5: Asset Classes Compared — Equities (Stocks), Bonds, Real Estate, Commodities & Cash Equivalents",
        "Week 6: Index Funds & ETFs (S&P 500, Total Market) — Expense Ratios, Diversification & Dollar-Cost Averaging",
        "Week 7: Tax-Advantaged Accounts — Roth IRA, Traditional IRA, 401(k) Employer Match & HSA Triple Tax Advantage",
        "Week 8: Reading a Company Balance Sheet — Assets, Liabilities, Shareholder Equity & Debt-to-Equity Ratio",
        "Week 9: Quarter 1 Proctored Examination & Personal 10-Year Compounding Plan",
        "Week 10: Reading an Income Statement — Revenue, Gross Margin, Operating Income, Net Profit & EPS",
        "Week 11: Reading a Cash Flow Statement — Free Cash Flow (FCF) vs. Accounting Earnings",
        "Week 12: Stock Valuation Metrics — P/E Ratio, PEG Ratio, Price-to-Sales, Return on Equity (ROE) & Economic Moats",
        "Week 13: Dividend Investing & DRIP — Dividend Yield, Payout Ratios & Dividend Aristocrats",
        "Week 14: Value Investing vs. Growth Investing (Benjamin Graham, Warren Buffett & Intrinsic Value Margin of Safety)",
        "Week 15: Macroeconomics for Investors — Federal Reserve Interest Rates, CPI Inflation, GDP & Credit Cycles",
        "Week 16: Behavioral Finance — Overcoming FOMO, Panic Selling, Herd Mentality & Confirmation Bias",
        "Week 17: Portfolio Construction, Asset Allocation, Rebalancing & Position-Sizing Risk Rules",
        "Week 18: Quarter 2 Midterm Stock Market & Financial Statement Analysis Examination",
        "Week 19: Introduction to Cryptography & Digital Money — Hash Functions (SHA-256) & Public-Key Signatures",
        "Week 20: How Bitcoin & Blockchain Work — Distributed Ledgers, Mining (Proof-of-Work), Halving & 21M Cap",
        "Week 21: Ethereum, Smart Contracts, Proof-of-Stake, Layer-2 Scaling & Decentralized Applications",
        "Week 22: Stablecoins, Tokenomics & Evaluating Digital Asset Utility vs. Speculative Hype",
        "Week 23: Digital Asset Custody & Cybersecurity — Hot Wallets vs. Hardware Cold Storage & Seed Phrase Protection",
        "Week 24: Scam & Fraud Defense Lab — Spotting Rug Pulls, Phishing Links, Ponzi Yields & Pump-and-Dump Schemes",
        "Week 25: Volatility Management — Why Never to Use High Leverage or Invest Rent/Emergency Money in Crypto",
        "Week 26: Capital Gains Taxes — Short-Term vs. Long-Term Rates, Cost Basis Tracking & Crypto Tax Reporting",
        "Week 27: Quarter 3 Proctored Examination (Blockchain Mechanics, Risk Management & Security)",
        "Week 28: Options & Derivatives Overview (Calls, Puts, Covered Calls) — Understanding Risk Before Ever Trading",
        "Week 29: Technical Charts vs. Fundamentals — Support/Resistance, Moving Averages & Why Fundamentals Win Long-Term",
        "Week 30: Credit Scores, Mortgages, Auto Loans & Avoiding Predatory Consumer Debt Traps",
        "Week 31: Insurance & Asset Protection — Term Life, Health, Auto, Umbrella & Liability Planning",
        "Week 32: Paper-Trading Portfolio Simulation I — Building & Tracking a $100,000 Virtual Diversified Portfolio",
        "Week 33: Paper-Trading Portfolio Simulation II — Earnings Report Review & Rebalancing Journal",
        "Week 34: Career Paths in Finance — Financial Advisor (Series 65/CFP), CPA, Equity Analyst & Private Wealth",
        "Week 35: Capstone Investment Thesis Presentation (Full Company + Asset Allocation Memo)",
        "Week 36: Quarter 4 Final Comprehensive Capital Markets & Asset Management Examination"
      ]
    },
    {
      id: "trd-301",
      code: "TRD-301",
      title: "Skilled Trades, Blueprint Reading, Electrical/HVAC & Apprenticeship Prep",
      department: "Career, Finance & Trades",
      gradeLevels: [9, 10, 11, 12],
      division: "high",
      credits: 1.0,
      track: "Non-College Trade Certification",
      trackTiers: ["Standard Trade-Prep", "Master Contractor Track"],
      instructor: "Master Trades & Engineering Faculty",
      progress: 0,
      termGrade: 98,
      quizAvg: 97,
      description: "Debt-free high-income skilled trades pathway: OSHA-10 workplace safety prep, technical blueprint reading, construction math, residential electrical wiring & NEC basics, HVAC refrigeration cycle (EPA 608 prep), plumbing systems, welding/fabrication intro, and scaling a trade service business.",
      lessons: [],
      custom36Weeks: [
        "Week 1: The High-Income Skilled Trades Advantage — Zero-Debt Apprenticeships & Six-Figure Trade Ownership",
        "Week 2: OSHA-10 Workplace Safety Foundations — PPE, Fall Protection, Lockout/Tagout (LOTO) & Hazard Recognition",
        "Week 3: Precision Trade Math I — Tape Measure Fractions (1/16\"), Decimal Conversions, Squaring (3-4-5) & Pitch",
        "Week 4: Precision Trade Math II — Board Feet, Concrete Cubic Yards, Material Takeoff & Waste Factors",
        "Week 5: Hand Tools, Power Tools, Torque Specs & Preventative Equipment Maintenance",
        "Week 6: Architectural & Mechanical Blueprint Reading I — Scale, Symbols, Floor Plans & Elevations",
        "Week 7: Blueprint Reading II — Electrical Schematics, Plumbing Risers & Structural Framing Callouts",
        "Week 8: Residential Carpentry & Framing Fundamentals — Foundations, Joists, Studs, Headers & Roof Trusses",
        "Week 9: Quarter 1 Proctored Trade Safety, Math & Blueprint Reading Examination",
        "Week 10: Electrical Fundamentals I — Voltage, Current, Resistance, Ohm’s Law (V=IR) & Watt’s Law (P=IV)",
        "Week 11: Electrical Fundamentals II — AC vs. DC, Breaker Panels, Grounding, GFCI/AFCI & Wire Gauge (AWG)",
        "Week 12: National Electrical Code (NEC) Navigation, Circuit Load Calculations & Conduit Bending Math",
        "Week 13: Multimeter Diagnostics, Continuity Testing & Safe Residential Circuit Troubleshooting",
        "Week 14: HVAC Foundations I — Thermodynamics, Heat Transfer, Sensible vs. Latent Heat & BTU Calculations",
        "Week 15: HVAC Foundations II — The Four-Stage Vapor-Compression Refrigeration Cycle (Compressor, Condenser, Metering, Evaporator)",
        "Week 16: EPA Section 608 Certification Prep — Refrigerant Handling, Recovery, Pressures & Environmental Law",
        "Week 17: Ductwork Sizing, Airflow (CFM), Static Pressure & Smart Thermostat Control Wiring (24V)",
        "Week 18: Quarter 2 Midterm Electrical & HVAC Technical Examination",
        "Week 19: Plumbing Systems I — Potable Water Supply (Copper, PEX, CPVC), Pressure Regulators & Backflow Prevention",
        "Week 20: Plumbing Systems II — Drain-Waste-Vent (DWV) Slope Math, P-Traps, Venting & Water Heaters",
        "Week 21: Welding & Metal Fabrication Intro — MIG, TIG, Stick (SMAW), Metallurgy & Weld Joint Symbols",
        "Week 22: Automotive & Diesel Diagnostics Intro — OBD-II Systems, Braking, Charging & Hydraulic Principles",
        "Week 23: Solar Photovoltaic (PV), Battery Storage & EV Charger Installation Fundamentals",
        "Week 24: Low-Voltage Systems — Fiber Optics, Structured Network Cabling (Cat6A) & Smart Home Automation",
        "Week 25: Commercial Drone Operations (FAA Part 107) — Roof Inspections, Surveying & Mapping",
        "Week 26: Building Inspection Codes, Permitting & Passing Municipal Inspections on the First Visit",
        "Week 27: Quarter 3 Proctored Plumbing, Fabrication & Modern Systems Examination",
        "Week 28: How Apprenticeships Work — IBEW, UA, ABC & Direct Contractor Sponsorship (Earn While You Learn)",
        "Week 29: Journeyman to Master Contractor Licensing Roadmap & Exam Strategy",
        "Week 30: Job Estimating & Bidding — Calculating Labor Burden, Materials, Overhead & Net Profit Margin",
        "Week 31: Client Proposals, Service Contracts, Change Orders & Avoiding Scope Creep",
        "Week 32: Launching a Trade Business — LLC, General Liability Insurance, Bonding, Fleet & Tool Financing",
        "Week 33: Local SEO, Reviews, Referral Systems & Customer Service Excellence",
        "Week 34: Trade Resume, Apprenticeship Interview Prep & Mechanical Aptitude Test Practice",
        "Week 35: Capstone Project — Full Blueprint Takeoff, Estimate Bid & Safety Plan",
        "Week 36: Quarter 4 Final Comprehensive Skilled Trades & Contractor Readiness Examination"
      ]
    },
    {
      id: "cs-101",
      code: "CS-101",
      title: "Computer Science, Python Programming & Full-Stack Web Development",
      department: "Technology & Engineering",
      gradeLevels: [7, 8, 9, 10, 11, 12],
      division: "high",
      credits: 1.0,
      track: "Standard / Honors STEM",
      trackTiers: ["Standard / Practical", "Honors / AP CS Prep"],
      instructor: "Dr. Miriam Chen & Software Engineering Faculty",
      progress: 0,
      termGrade: 98,
      quizAvg: 97,
      description: "Hands-on software engineering from scratch: binary logic, Python programming (variables, loops, functions, data structures, OOP), SQL databases, HTML/CSS/JavaScript web apps, Git version control, and real-world portfolio projects.",
      lessons: [],
      custom36Weeks: [
        "Week 1: How Computers Think — Binary, Hexadecimal, Logic Gates (AND/OR/NOT/XOR) & CPU Architecture",
        "Week 2: Algorithmic Thinking, Flowcharts, Pseudocode & Setting Up a Professional Developer Environment",
        "Week 3: Python I — Variables, Data Types (int, float, str, bool), Input/Output & Arithmetic Expressions",
        "Week 4: Python II — Boolean Logic, Comparison Operators & Conditional Branching (if / elif / else)",
        "Week 5: Python III — Iteration with while Loops, for Loops, range() & Loop Control",
        "Week 6: Python IV — Functions, Parameters, Return Values, Scope & Modular Program Design",
        "Week 7: Python V — Lists, Tuples, Indexing, Slicing & List Comprehensions",
        "Week 8: Python VI — Dictionaries, Sets, String Manipulation & File Reading/Writing (CSV/JSON)",
        "Week 9: Quarter 1 Proctored Python Programming Exam & CLI Application Project",
        "Week 10: Debugging, Exception Handling (try/except), Unit Testing & Writing Clean Documented Code",
        "Week 11: Object-Oriented Programming (OOP) — Classes, Objects, Methods, Encapsulation & Inheritance",
        "Week 12: Data Structures & Algorithms I — Stacks, Queues, Linear vs. Binary Search & Big-O Notation",
        "Week 13: Data Structures & Algorithms II — Sorting Algorithms (Insertion, Merge Sort) & Recursion",
        "Week 14: Working with REST APIs, JSON Data & Python Automation Scripts",
        "Week 15: Relational Databases & SQL — Tables, Primary/Foreign Keys, SELECT, JOIN & CRUD Queries",
        "Week 16: Git & GitHub Version Control — Commits, Branches, Pull Requests & Collaborative Workflow",
        "Week 17: Python Data Analysis & Visualization — Analyzing Real-World Datasets",
        "Week 18: Quarter 2 Midterm Software Engineering & Algorithms Examination",
        "Week 19: Web Architecture — HTTP/HTTPS, DNS, Client-Server Model & Semantic HTML5",
        "Week 20: Modern CSS3 — Flexbox, CSS Grid, Responsive Mobile Design & Typography",
        "Week 21: JavaScript I — Variables, Functions, Arrays, Objects & DOM Manipulation",
        "Week 22: JavaScript II — Event Listeners, Form Validation, LocalStorage & Interactive UI State",
        "Week 23: Asynchronous JavaScript — Promises, async/await & Fetching Live Backend Data",
        "Week 24: Building a Full-Stack Web App — Frontend + Backend API + Cloud Database",
        "Week 25: User Authentication, Password Hashing, Sessions & Role-Based Access Control",
        "Week 26: Cloud Hosting & Deployment — Deploying Live Websites, Domains & HTTPS Certificates",
        "Week 27: Quarter 3 Proctored Full-Stack Web Development Examination",
        "Week 28: Software Security Basics — Preventing SQL Injection, XSS & Protecting API Keys",
        "Week 29: UI/UX Design Principles — Accessibility, Clean Layouts & User Testing",
        "Week 30: Technical Certifications Roadmap — AWS Cloud Practitioner, CompTIA & Portfolio Building",
        "Week 31: Freelance & Junior Developer Readiness — Scoping Projects, Code Reviews & GitHub Showcase",
        "Week 32: Capstone App Build I — Architecture Blueprint & Database Schema",
        "Week 33: Capstone App Build II — Core Logic, Interactive Features & Testing",
        "Week 34: Capstone App Build III — Visual Polish, Bug Fixes & Cloud Deployment",
        "Week 35: Live Software Demo & Code Defense Presentation",
        "Week 36: Quarter 4 Final Comprehensive Computer Science & Programming Examination"
      ]
    },
    {
      id: "cs-201",
      code: "CS-201",
      title: "AI Literacy, Applied Machine Learning & Cybersecurity (Security+ Prep)",
      department: "Technology & Engineering",
      gradeLevels: [8, 9, 10, 11, 12],
      division: "high",
      credits: 1.0,
      track: "Future-Ready Certification Prep",
      trackTiers: ["Standard / Career-Prep", "Honors Technical"],
      instructor: "Dr. Miriam Chen & Cybersecurity Faculty",
      progress: 0,
      termGrade: 97,
      quizAvg: 96,
      description: "Prepares students for the AI and cybersecurity era: how LLMs and neural networks actually work, structured prompt engineering, building AI workflows ethically, networking fundamentals (TCP/IP), encryption, ethical hacking defense, and CompTIA Security+ certification readiness.",
      lessons: [],
      custom36Weeks: [
        "Week 1: What Is Artificial Intelligence? Rule-Based Systems vs. Machine Learning vs. Deep Learning",
        "Week 2: How Neural Networks Learn — Weights, Biases, Training Data, Loss Functions & Gradient Descent",
        "Week 3: How Large Language Models (LLMs) Work — Tokens, Embeddings, Transformers & Attention",
        "Week 4: Structured Prompt Engineering — System Roles, Context, Few-Shot Examples & Verification",
        "Week 5: AI Hallucinations, Fact-Checking Primary Sources & Avoiding Intellectual Laziness",
        "Week 6: Christian Ethics of AI — Human Dignity (Imago Dei), Truthfulness, Privacy & Academic Integrity",
        "Week 7: AI Productivity Workflows — Research Synthesis, Code Assistance, Data Extraction & Automation",
        "Week 8: Building Safe AI Agents & Tool-Using Applications",
        "Week 9: Quarter 1 Proctored AI Literacy & Ethics Examination",
        "Week 10: Computer Networking Foundations — OSI Model, TCP/IP, IP Addresses, Subnets & Routing",
        "Week 11: Ports, Protocols & Services — HTTP/HTTPS, SSH, DNS, DHCP, SMTP & Firewalls",
        "Week 12: Core Cybersecurity Triad — Confidentiality, Integrity & Availability (CIA Triad)",
        "Week 13: Threat Landscape — Malware, Ransomware, Phishing, Social Engineering & Zero-Day Exploits",
        "Week 14: Cryptography in Action — Symmetric (AES), Asymmetric (RSA/ECC), Hashing & Digital Certificates",
        "Week 15: Identity & Access Management — Multi-Factor Authentication (MFA), Passkeys & Least Privilege",
        "Week 16: Securing Personal Devices, Home Networks, Wi-Fi (WPA3) & Cloud Accounts",
        "Week 17: Operating System Hardening — Windows/Linux Permissions, Patching & Endpoint Defense",
        "Week 18: Quarter 2 Midterm Networking & Cybersecurity Examination",
        "Week 19: Web Application Security — OWASP Top 10, SQL Injection, XSS & CSRF Prevention",
        "Week 20: Network Defense — Firewalls, IDS/IPS, VPNs, Network Segmentation & Zero Trust Architecture",
        "Week 21: Cloud Security Fundamentals — Shared Responsibility Model, IAM Policies & Storage Security",
        "Week 22: Security Operations (SOC) — Reading System Logs, SIEM Alerts & Detecting Anomalies",
        "Week 23: Incident Response Lifecycle — Preparation, Detection, Containment, Eradication & Recovery",
        "Week 24: Digital Forensics Basics — Chain of Custody, Disk/Memory Artifacts & Timeline Analysis",
        "Week 25: Governance, Risk & Compliance — Risk Assessments, Business Continuity & Backups (3-2-1 Rule)",
        "Week 26: AI in Cybersecurity — Defending Against Deepfakes, Voice Cloning & Automated Phishing",
        "Week 27: Quarter 3 Proctored Security Operations & Defense Examination",
        "Week 28: Linux Command Line Essentials for Cybersecurity & Cloud Engineers",
        "Week 29: Vulnerability Scanning, Patch Verification & Responsible Disclosure Ethics",
        "Week 30: CompTIA Security+ Domain Review I — Threats, Attacks & Architecture",
        "Week 31: CompTIA Security+ Domain Review II — Implementation, Operations & Governance",
        "Week 32: Hands-On Capstone Lab — Auditing a Sample Network & Writing an Executive Security Report",
        "Week 33: Career Paths Without a 4-Year Degree — SOC Analyst, Cloud Support, Penetration Tester & AI Engineer",
        "Week 34: Practice Certification Exam A (CompTIA Security+ Style Timed Assessment)",
        "Week 35: Practice Certification Exam B & Capstone Defense",
        "Week 36: Quarter 4 Final Comprehensive AI & Cybersecurity Certification Examination"
      ]
    },
    {
      id: "bus-201",
      code: "BUS-201",
      title: "Entrepreneurship, Business Operations, Sales & Fast-Track Licensing",
      department: "Career, Finance & Trades",
      gradeLevels: [9, 10, 11, 12],
      division: "high",
      credits: 1.0,
      track: "Standard / Founder Track",
      trackTiers: ["Standard / Founder", "Honors Executive"],
      instructor: "Business & Entrepreneurship Faculty",
      progress: 0,
      termGrade: 98,
      quizAvg: 97,
      description: "Launch and run a real profitable business before graduation: identifying market problems, unit economics, LLC formation, bookkeeping & taxes, ethical sales & negotiation, digital marketing, e-commerce, and high-income non-college licenses (Insurance, Notary Loan Signing, Logistics & Medical Coding).",
      lessons: [],
      custom36Weeks: [
        "Week 1: What Makes an Entrepreneur? Serving Real Human Needs Profitably & Ethically",
        "Week 2: Market Research & Problem Validation — Talking to Customers Before Spending a Dollar",
        "Week 3: Value Propositions, Competitive Moats & Differentiating Your Offer",
        "Week 4: Unit Economics — Pricing, Gross Margin, Contribution Margin & Break-Even Math",
        "Week 5: Business Structures — Sole Proprietorship, LLC, S-Corp, EIN & State Registration",
        "Week 6: Business Banking, Chart of Accounts, Double-Entry Bookkeeping & Cash-Flow Statements",
        "Week 7: Business Taxes 101 — Self-Employment Tax, Quarterly Estimates, Deductible Expenses & CPA Roles",
        "Week 8: Writing a One-Page Lean Business Plan That Investors & Banks Actually Read",
        "Week 9: Quarter 1 Proctored Business Foundations & Unit Economics Examination",
        "Week 10: Consultative Sales I — Listening, Diagnosing Pain Points & Presenting Clear Solutions",
        "Week 11: Consultative Sales II — Handling Objections Ethically, Follow-Up Cadence & Closing",
        "Week 12: Negotiation Mastery — BATNA, Win-Win Deal Structuring & Written Contracts",
        "Week 13: Brand Positioning, Copywriting & Storytelling That Converts Attention into Trust",
        "Week 14: Digital Marketing I — Local SEO, Google Business Profiles, Websites & Conversion Funnels",
        "Week 15: Digital Marketing II — Email Lists, Content Marketing, Paid Ads Math (CAC vs. LTV)",
        "Week 16: E-Commerce & Supply Chain — Sourcing, Inventory Turnover, Fulfillment & Margins",
        "Week 17: Service Business Playbook — Launching a High-Margin Local Service Company Under $500",
        "Week 18: Quarter 2 Midterm Sales, Marketing & Operations Examination",
        "Week 19: Fast-Track Non-College Licenses I — Insurance Producer (Life/Health/P&C) & Residual Commissions",
        "Week 20: Fast-Track Non-College Licenses II — Notary Public, Loan Signing Agent & Bookkeeping Certification",
        "Week 21: Fast-Track Non-College Licenses III — Medical Billing/Coding (CPC), EMT & Dental/Phlebotomy Tech",
        "Week 22: Fast-Track Non-College Licenses IV — Commercial Logistics, Freight Brokerage & FAA Part 107 Drone",
        "Week 23: Hiring, Delegation, Standard Operating Procedures (SOPs) & Quality Control",
        "Week 24: Customer Retention, Lifetime Value (LTV), Guarantees & Turning Buyers into Advocates",
        "Week 25: Business Law Essentials — Independent Contractors vs. W-2 Employees, IP, Trademarks & Liability",
        "Week 26: AI Tools for Small Business Owners — Automating Scheduling, Invoicing & Support",
        "Week 27: Quarter 3 Proctored Licensing Pathways & Operations Examination",
        "Week 28: Financial Projections — Building a 12-Month Profit & Loss (P&L) & Cash-Flow Forecast",
        "Week 29: Bootstrapping vs. Small Business Loans (SBA) vs. Equity Investors",
        "Week 30: Public Speaking & Pitching Your Business in 3 Minutes (Elevator & Investor Pitch)",
        "Week 31: Micro-Venture Launch Lab I — Launching a Real Student Micro-Business or Freelance Offer",
        "Week 32: Micro-Venture Launch Lab II — First Customer Acquisition & Real P&L Tracking",
        "Week 33: Stewardship, Generosity & Biblical Integrity in Commerce (Proverbs 11:1; 22:29)",
        "Week 34: Polishing Your Founder Portfolio & Business Plan Dossier",
        "Week 35: Shark-Tank Style Capstone Business Pitch & Q&A Defense",
        "Week 36: Quarter 4 Final Comprehensive Entrepreneurship & Business Operations Examination"
      ]
    },
    {
      id: "lang-101",
      code: "SPAN-101",
      title: "Modern World Languages: Spanish I & II (Conversational & Career Fluency)",
      department: "Classical Languages & Arts",
      gradeLevels: [7, 8, 9, 10, 11, 12],
      division: "high",
      credits: 1.0,
      track: "Standard / Honors Foreign Language",
      trackTiers: ["Standard / Conversational", "Honors"],
      instructor: "Prof. Sofia Mendoza, M.A.",
      progress: 0,
      termGrade: 97,
      quizAvg: 96,
      description: "Satisfies High School Foreign Language graduation and university admissions requirements through everyday conversational Spanish, verb conjugation mastery, cultural literacy, and practical business/medical/ministry vocabulary.",
      lessons: [],
      custom36Weeks: [
        "Week 1: Spanish Alphabet, Vowel Purity, Accent Marks & Everyday Greetings",
        "Week 2: Subject Pronouns, Ser vs. Estar & Introductions",
        "Week 3: Definite/Indefinite Articles, Noun Gender/Number & Classroom/Home Vocabulary",
        "Week 4: Present Tense Regular -AR Verbs (Hablar, Estudiar, Trabajar) & Question Words",
        "Week 5: Present Tense Regular -ER and -IR Verbs (Comer, Vivir, Escribir) & Numbers 0–1,000",
        "Week 6: Telling Time, Days, Months, Seasons & Scheduling Appointments",
        "Week 7: Family, Descriptive Adjectives & Possessive Adjectives (Mi, Tu, Su, Nuestro)",
        "Week 8: Stem-Changing Verbs (e→ie, o→ue, e→i) & Irregular Yo Verbs (Tener, Hacer, Ir)",
        "Week 9: Quarter 1 Proctored Spanish Oral & Grammar Examination",
        "Week 10: Near Future (Ir + a + Infinitive) & Expressing Obligations (Tener que)",
        "Week 11: Food, Restaurants, Ordering Meals & Conversational Etiquette",
        "Week 12: Direct & Indirect Object Pronouns (Me, Te, Lo, La, Le) & Gustar-Style Verbs",
        "Week 13: Daily Routines & Reflexive Verbs (Levantarse, Ducharse, Acostarse)",
        "Week 14: Shopping, Currency, Bargaining & Clothing/Color Descriptions",
        "Week 15: Travel, Directions, Airports, Hotels & Navigating Cities in Spanish",
        "Week 16: Health, Body Parts & Practical Medical/Emergency Spanish Vocabulary",
        "Week 17: Introduction to the Preterite Past Tense (Regular -AR, -ER, -IR Verbs)",
        "Week 18: Quarter 2 Midterm Conversational Spanish Examination",
        "Week 19: Irregular Preterite Verbs (Fui, Tuve, Hice, Dije, Pude, Vine)",
        "Week 20: The Imperfect Past Tense (-aba, -ía) & Describing Childhood/Background",
        "Week 21: Preterite vs. Imperfect — Narrating Completed Actions vs. Ongoing Scenes",
        "Week 22: Comparatives, Superlatives & Expressing Opinions Clearly",
        "Week 23: Formal & Informal Commands (Imperative Mood) for Workplace & Directions",
        "Week 24: Por vs. Para Mastery & Common Idiomatic Expressions",
        "Week 25: Present Perfect Tense (Haber + Past Participle) & Sharing Life Experiences",
        "Week 26: Future & Conditional Tenses (-é, -ía) for Career Plans & Polite Requests",
        "Week 27: Quarter 3 Proctored Spanish Past & Future Mastery Examination",
        "Week 28: Introduction to the Present Subjunctive (WEIRDO: Wishes, Emotions, Recommendations)",
        "Week 29: Practical Workplace & Business Spanish — Customer Service, Sales & Real Estate Terms",
        "Week 30: Reading Scripture & Classical Proverbs in Spanish (Reina-Valera: Psalm 23 & John 1)",
        "Week 31: History & Geography of Spain and Latin America",
        "Week 32: Listening Comprehension & Dialogue Roleplay Practicum",
        "Week 33: Writing a 2-Page Cultural & Personal Essay in Spanish",
        "Week 34: Conversational Oral Interview Simulation (10-Minute Unscripted Dialogue)",
        "Week 35: Comprehensive Grammar & Vocabulary Synthesis Review",
        "Week 36: Quarter 4 Final Comprehensive Spanish I/II Credit Examination"
      ]
    }
  ];

  // Register these new Future-Ready & Non-College Career courses into INITIAL_ACADEMY_DATA.courses
  const rootData = typeof INITIAL_ACADEMY_DATA !== "undefined" ? INITIAL_ACADEMY_DATA : window.INITIAL_ACADEMY_DATA;
  if (rootData && Array.isArray(rootData.courses)) {
    NEW_CAREER_AND_ELECTIVE_COURSES.forEach((nc) => {
      if (rootData.courses.some((existing) => existing.id === nc.id)) return;

      // Build 36-week syllabus objects
      nc.syllabus36Weeks = nc.custom36Weeks.map((titleStr, idx) => {
        const w = idx + 1;
        const qtr = Math.ceil(w / 9);
        return {
          weekNum: w,
          quarter: qtr,
          title: titleStr,
          daysCompleted: w === 1 ? 2 : 0,
          masteryScore: w === 1 ? 96 : null,
          status: w === 1 ? "Active Week (Ready)" : "Unlocked for Study & Testing"
        };
      });

      // Build 4 Timed Quarter Exams
      nc.quarterExams = [1, 2, 3, 4].map((q) => ({
        quarter: q,
        weekNum: q * 9,
        title: `${nc.code} Quarter ${q} Proctored Licensing / Mastery Exam (Week ${q * 9})`,
        durationMinutes: 45,
        completed: false,
        score: null,
        questions: [
          {
            q: `[Quarter ${q} Applied Mastery] In ${nc.code} (${nc.title}), what principle ensures real-world competence and ethical excellence?`,
            options: [
              "Mastering both technical accuracy (formulas, law, or code) and disciplined real-world execution",
              "Guessing without checking regulations, math, or security",
              "Skipping practical verification and risk management",
              "Relying on hype instead of verified fundamentals"
            ],
            correct: 0,
            explanation: `Quarter ${q} of ${nc.code} verifies practical, job-ready and licensing-ready mastery.`
          },
          {
            q: `[Quarter ${q} Scenario Check] Which approach aligns with Christ Infinity Academy's Career & Stewardship standard in ${nc.code}?`,
            options: [
              "Verifying numbers, contracts, or code step-by-step and applying ≥85% mastery before moving forward",
              "Ignoring risk management and documentation",
              "Avoiding written calculations and checklists",
              "None of the above"
            ],
            correct: 0,
            explanation: "Real-world licensing and asset management demand documented precision and stewardship."
          }
        ]
      }));

      // Build 5 starter daily lessons (dynamically synced by curriculum_7_12.js for any week 1..36!)
      nc.lessons = [1, 2, 3, 4, 5].map((d) => ({
        id: `${nc.id}-d${d}`,
        unit: `WEEK 1 · DAY ${d} OF 5`,
        title: `Day ${d}: ${nc.custom36Weeks[0].replace(/^Week 1:\s*/i, "")}`,
        duration: "45 mins",
        completed: false,
        masteryScore: null,
        dailyTasks: { blankDone: false, writingDone: false, quizDone: false },
        videoChapter: `CAREER SEMINAR · ${nc.code}`,
        readingHtml: `<p>${nc.description}</p>`,
        wordBank: ["Stewardship", "Licensing", "Analysis", "Mastery", "Precision"],
        fillInBlanks: [
          { before: "1. Real-world mastery in " + nc.code + " begins with clear ", answer: "Analysis", after: ".", hint: "Starts with A" },
          { before: "2. Every certification or career skill rests on ethical ", answer: "Stewardship", after: ".", hint: "Starts with S" },
          { before: "3. Advancing each day requires at least 85% ", answer: "Mastery", after: ".", hint: "Starts with M" }
        ],
        dailyWriting: {
          title: `Day ${d} Practical Application (${nc.code})`,
          prompt: `Explain in 25–65 words how today's objective in ${nc.title} applies to a real-world career or financial decision.`,
          minWords: 20,
          savedResponse: "",
          exemplar: `Model Response: Applying today's principle in ${nc.code} allows a young adult to make informed, mathematically sound, and ethical decisions in real-world commerce.`
        },
        practiceSet: [
          { prompt: `Applied Exercise #1 (${nc.code}): Apply today's concept to a real-world case study.`, answerKey: "Verified step-by-step with exact figures and legal/technical terms." }
        ],
        resources: [
          { title: `${nc.code} Practical Career & Licensing Workbook`, type: "Career Packet", size: "1.4 MB", content: `${nc.title}\n\n${nc.description}` }
        ],
        quiz: [
          {
            q: `What is the primary goal of ${nc.code}: ${nc.title}?`,
            options: [
              nc.description.slice(0, 125) + "...",
              "Memorizing unrelated trivia",
              "Avoiding practical real-world skills",
              "None of the above"
            ],
            correct: 0,
            explanation: `${nc.code} equips students with practical, high-income real-world skills.`
          }
        ],
        deepTeaching: {
          dayHeader: `${nc.code} · DAY ${d}`,
          anchorVerse: "Proverbs 22:29 — “Seest thou a man diligent in his business? he shall stand before kings.”",
          methodology: "Applied Real-World Case Studies, Quantitative Precision & Licensing Exam Readiness",
          bigIdea: nc.description,
          sections: [
            { stepBadge: "SECTION 1 OF 3 · CORE OBJECTIVE", heading: `1. Core Concept: ${nc.title}`, body: nc.description, keyTakeaway: `Master today's practical skill step-by-step in ${nc.code}.` },
            { stepBadge: "SECTION 2 OF 3 · HOW IT WORKS IN THE REAL WORLD", heading: "2. Step-by-Step Practical Execution", body: `In ${nc.code}, every lesson connects classroom clarity directly to real-world execution—whether analyzing a real estate deal, reviewing a company's cash flow, wiring a safe circuit, or writing clean code.`, keyTakeaway: "Always check your math, safety rules, and contracts before taking action." },
            { stepBadge: "SECTION 3 OF 3 · EXIT TICKET PREPARATION", heading: "3. Proving Mastery on Today's Exit Ticket", body: "Complete your quick concept check, short practical reflection, and mastery quiz (≥85%) to earn credit for today's module.", keyTakeaway: "Each completed day builds directly toward your full 36-week career certification." }
          ],
          vocabularyTable: [],
          workedExamples: [
            { badge: `PRACTICAL CASE 1 (${nc.code})`, title: "Real-World Walkthrough", problem: `How do professionals apply today's ${nc.code} objective?`, step1: "Step 1: Define the exact legal, financial, or technical parameters.", step2: "Step 2: Run the verification checklist or formula accurately.", step3: "Step 3: Document your decision and double-check risk.", pitfall: "Avoid rushing without checking numbers, terms, or safety rules." },
            { badge: `PRACTICAL CASE 2 (${nc.code})`, title: "Writing Your Practical Summary", problem: "How do you explain your decision clearly to a client, mentor, or employer?", step1: "Step 1: State your conclusion clearly in sentence 1.", step2: "Step 2: Support it with specific numbers or facts.", step3: "Step 3: Summarize the next concrete action.", pitfall: "Avoid vague statements without concrete figures or facts." }
          ]
        },
        parentGuide: {
          dayTitle: `${nc.code} (${nc.title}) — Day ${d}`,
          quickOverview: `Your scholar is building practical career & life skills in ${nc.title}.`,
          explainIn60Seconds: nc.description,
          coachingScript: `“Walk me through today's ${nc.code} goal—how would an adult use this skill on the job or in personal finances?”`,
          socraticQuestions: [
            { q: `1. “What is today's main objective in ${nc.code}?”`, listenFor: "Clear summary of the day's real-world skill." },
            { q: `2. “What is one costly mistake this lesson helps you avoid?”`, listenFor: "Identifies a concrete financial, legal, technical, or safety mistake." }
          ],
          troubleshootingTips: [
            { symptom: "If a technical term feels unfamiliar:", fix: "Review the Key Vocabulary table in Step 2 (Guided Lesson) together." }
          ],
          answerKeySummary: { blanksAnswers: ["Analysis", "Stewardship", "Mastery"], writingModel: "Clear real-world explanation.", quizAnswers: ["Q1: Option A"] }
        }
      }));

      rootData.courses.push(nc);
    });
  }

  // ==================== CLEAN 4-STEP INDEPENDENT STUDENT GUIDED LESSON FLOW ====================
  // Renders a focused, distraction-free, one-screen-at-a-time daily journey:
  // STEP 1: Today's Objective & Visual Warm-Up  ->  STEP 2: Guided Lesson & Graphics  ->  STEP 3: Interactive Practice  ->  STEP 4: Exit Ticket & Mastery Check
  window.renderStudentGuidedStepView = function (course, lesson, weekObj, dayIdx, activeStep, studentTrackLevel) {
    const step = Math.max(1, Math.min(4, parseInt(activeStep, 10) || 1));
    const track = studentTrackLevel || "standard";
    const cGrade = (course.gradeLevels && course.gradeLevels[0]) ?? 6;
    const isEarlyReader = cGrade >= 0 && cGrade <= 2;
    const isK5 = cGrade >= 0 && cGrade <= 5;
    const trackBadge = isEarlyReader
      ? "🌟 Griffin Junior Explorers (Grades K–2 · Easy Reader)"
      : isK5
        ? `🌟 Griffin Explorers (Grade ${cGrade} · Kid-Friendly Mode)`
        : track === "honors"
          ? "Honors Track (4.5 Weighted · Deep Proofs & Primary Sources)"
          : track === "ap"
            ? "AP / Dual-Credit Track (5.0 Weighted · Collegiate Pace)"
            : "Standard / College-Prep Track (4.0 Scale · Clear Scaffolding)";

    const cleanWeekTopic = (weekObj?.title || lesson.title).replace(/^Week\s+\d+\s*(\([^)]*\))?:\s*/i, "").trim();
    const dt = lesson.deepTeaching || {};
    const blanks = lesson.fillInBlanks || [];
    const writing = lesson.dailyWriting || {};
    const quiz = lesson.quiz || [];
    const tasks = lesson.dailyTasks || { blankDone: false, writingDone: false, quizDone: false };
    const completedCount = (tasks.blankDone ? 1 : 0) + (tasks.writingDone ? 1 : 0) + (tasks.quizDone ? 1 : 0);

    const stepPills = [
      { num: 1, icon: "🎯", label: "1. Today’s Goal", sub: "What You'll Learn" },
      { num: 2, icon: "📘", label: "2. Guided Lesson", sub: "Clear Teaching" },
      { num: 3, icon: lesson.isMathProblemSet ? "🔢" : "✍️", label: lesson.isMathProblemSet ? "3. Math Problems" : "3. Practice", sub: lesson.isMathProblemSet ? `Solve ${blanks.length} Problems` : "Try It Yourself" },
      { num: 4, icon: lesson.isWeeklyUnitTest ? "📝" : "🎟️", label: lesson.isWeeklyUnitTest ? "4. Weekly Check" : "4. Exit Quiz", sub: `${quiz.length} Qs · ≥85%` }
    ];

    let stepBodyHtml = "";

    if (step === 1) {
      // STEP 1: STUDENT-FRIENDLY OBJECTIVES + VISUAL WARM-UP
      const visualGraphic =
        typeof window.renderCourseInteractiveDiagramHTML === "function"
          ? window.renderCourseInteractiveDiagramHTML(course, lesson, weekObj?.weekNum || 1)
          : "";
      const objectivesList = Array.isArray(lesson.studentObjectives) && lesson.studentObjectives.length > 0
        ? lesson.studentObjectives
        : [`Understand ${cleanWeekTopic} clearly`, "Walk through a step-by-step example", `Pass today's ${quiz.length}-question check at ≥85%`];
      stepBodyHtml = `
        <div style="background: linear-gradient(135deg, #0A192F 0%, #162E52 100%); color:#FFFFFF; padding:1.5rem 1.75rem; border-radius:var(--radius-md); border:2px solid var(--gold-500); margin-bottom:1.15rem;">
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem; margin-bottom:0.65rem;">
            <span class="badge badge-gold">STEP 1 OF 4 · ${course.code} · WEEK ${weekObj?.weekNum || 1} OF 36 · DAY ${dayIdx} OF 5</span>
            <span class="badge badge-emerald">${trackBadge}</span>
          </div>
          <h2 style="font-family:var(--font-serif); font-size:1.75rem; color:#FFFFFF; margin:0.2rem 0 0.55rem;">
            ${isK5 ? "🌟 Today’s Adventure:" : "🎯 Today’s Lesson:"} ${cleanWeekTopic}
          </h2>
          ${
            isK5
              ? `<div style="margin-bottom:0.75rem;"><button type="button" class="btn btn-secondary btn-sm" onclick="document.getElementById('readLessonAloudBtn')?.click()">🔊 Listen to Today's Lesson Aloud</button></div>`
              : ""
          }
          <p style="font-size:${isEarlyReader ? "1.06rem" : "0.98rem"}; line-height:1.7; color:#E2E8F0; max-width:860px; margin-bottom:0.85rem;">
            <strong>${isK5 ? "What You'll Discover Today:" : "Big Idea:"}</strong> ${dt.bigIdea || `Let's learn ${cleanWeekTopic} step by step in plain, clear language!`}
          </p>
          <div style="background:rgba(255,255,255,0.09); padding:0.9rem 1.1rem; border-radius:8px; border-left:3px solid var(--gold-400); margin-bottom:1rem;">
            <div style="font-family:var(--font-mono); font-size:0.72rem; color:var(--gold-400); margin-bottom:0.4rem;">BY THE END OF TODAY, YOU WILL BE ABLE TO:</div>
            <ul style="margin:0; padding-left:1.2rem; display:flex; flex-direction:column; gap:0.3rem; font-size:0.9rem; color:#FFFFFF;">
              ${objectivesList.map((o) => `<li>${o}</li>`).join("")}
            </ul>
          </div>
          <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap:0.65rem;">
            <div style="background:rgba(255,255,255,0.08); padding:0.7rem 0.9rem; border-radius:6px; border-left:3px solid var(--gold-400);">
              <div style="font-family:var(--font-mono); font-size:0.7rem; color:var(--gold-400);">WHERE YOU ARE</div>
              <div style="font-size:0.86rem; margin-top:0.2rem; color:#FFFFFF;">Quarter ${weekObj?.quarter || 1} · Week ${weekObj?.weekNum || 1}, Day ${dayIdx} of 5</div>
            </div>
            <div style="background:rgba(255,255,255,0.08); padding:0.7rem 0.9rem; border-radius:6px; border-left:3px solid #4FD1C5;">
              <div style="font-family:var(--font-mono); font-size:0.7rem; color:#4FD1C5;">TODAY'S ASSESSMENT</div>
              <div style="font-size:0.86rem; margin-top:0.2rem; color:#FFFFFF;">${lesson.isWeeklyUnitTest ? `📝 ${quiz.length}-Question Weekly Check` : `🎟️ ${quiz.length}-Question Daily Quiz`} (≥85%)</div>
            </div>
            <div style="background:rgba(255,255,255,0.08); padding:0.7rem 0.9rem; border-radius:6px; border-left:3px solid #68D391;">
              <div style="font-family:var(--font-mono); font-size:0.7rem; color:#68D391;">ESTIMATED TIME</div>
              <div style="font-size:0.86rem; margin-top:0.2rem; color:#FFFFFF;">${lesson.duration || "40 mins"} · Clear 4-Step Path</div>
            </div>
          </div>
        </div>

        <!-- Dedicated Visual Blueprint for Today's Topic -->
        ${visualGraphic}

        <div style="display:flex; justify-content:flex-end; margin-top:1rem;">
          <button type="button" class="btn btn-primary btn-lg" data-set-guided-step="2">
            Start Step 2: Read the Guided Lesson →
          </button>
        </div>
      `;
    } else if (step === 2) {
      // STEP 2: BITE-SIZED GUIDED TEACHING & WORKED EXAMPLES
      const sections = dt.sections || [];
      const examples = dt.workedExamples || [];
      stepBodyHtml = `
        <div class="card-panel" style="border-top:4px solid var(--navy-800);">
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem; margin-bottom:0.85rem;">
            <div>
              <span class="mono-label" style="color:var(--gold-600);">STEP 2 OF 4 · GUIDED LESSON (HOW TO GET TO TODAY'S OBJECTIVE)</span>
              <h3 style="font-family:var(--font-serif); font-size:1.45rem; color:var(--navy-900); margin:0.15rem 0 0;">
                📘 Learn It Step-by-Step: ${cleanWeekTopic}
              </h3>
            </div>
            <button type="button" class="btn btn-secondary btn-sm" id="guidedReadAloudTriggerBtn" onclick="document.getElementById('readLessonAloudBtn')?.click()">
              🔊 Listen to Lesson Aloud
            </button>
          </div>

          <div class="lesson-callout" style="margin-bottom:1rem; background:#FFFDF7; border-left-color:var(--gold-500);">
            <strong>Wisdom &amp; Anchor:</strong> <em>${dt.anchorVerse || "Proverbs 2:6 — For the LORD giveth wisdom."}</em>
          </div>

          ${window.renderLessonVideoHelperCard ? window.renderLessonVideoHelperCard(course, lesson, weekObj?.weekNum || 1) : ""}

          <div class="assignments-stack" style="gap:0.85rem; margin-bottom:1.15rem;">
            ${sections
              .map(
                (sec) => `
              <div class="quiz-q-card" style="background:var(--bg-ivory); border-left:4px solid var(--navy-800);">
                <span class="mono-label">${sec.stepBadge}</span>
                <h4 style="font-family:var(--font-serif); font-size:1.2rem; color:var(--navy-900); margin:0.2rem 0 0.35rem;">${sec.heading}</h4>
                <p style="font-size:0.93rem; line-height:1.68; color:var(--text-primary);">${sec.body}</p>
                <div style="margin-top:0.55rem; padding:0.45rem 0.7rem; background:#FFFFFF; border-radius:6px; font-size:0.84rem; color:var(--emerald-700); font-weight:600;">
                  ✓ ${sec.keyTakeaway}
                </div>
              </div>
            `
              )
              .join("")}
          </div>

          ${
            examples.length > 0
              ? `
            <span class="mono-label" style="color:var(--emerald-700); display:block; margin-bottom:0.5rem;">WORKED EXAMPLES (WATCH HOW IT'S SOLVED STEP-BY-STEP)</span>
            <div class="pathway-quarters-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); margin-bottom:1rem;">
              ${examples
                .map(
                  (ex) => `
                <div class="quarter-card" style="background:#F4FAF7; border-top:3px solid var(--emerald-600);">
                  <span class="mono-label" style="color:var(--emerald-700);">${ex.badge}</span>
                  <h4 style="margin-top:0.25rem;">${ex.title}</h4>
                  <p style="font-size:0.86rem; font-weight:700; color:var(--navy-900); margin-bottom:0.4rem;">${ex.problem}</p>
                  <div style="font-size:0.85rem; line-height:1.58; display:flex; flex-direction:column; gap:0.3rem;">
                    <div>• ${ex.step1}</div>
                    <div>• ${ex.step2}</div>
                    <div>• ${ex.step3}</div>
                  </div>
                </div>
              `
                )
                .join("")}
            </div>
          `
              : ""
          }

          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.6rem; margin-top:1.1rem; padding-top:0.85rem; border-top:1px solid var(--border-subtle);">
            <button type="button" class="btn btn-outline" data-set-guided-step="1">← Back to Step 1 (Objective)</button>
            <button type="button" class="btn btn-primary btn-lg" data-set-guided-step="3">
              Ready to Try It? Go to Step 3: Practice →
            </button>
          </div>
        </div>
      `;
    } else if (step === 3) {
      // STEP 3: FOCUSED GUIDED PRACTICE (FILL-IN-THE-BLANK + SHORT APPLICATION)
      stepBodyHtml = `
        <div class="card-panel" style="border-top:4px solid var(--gold-500);">
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem; margin-bottom:0.9rem;">
            <div>
              <span class="mono-label" style="color:var(--gold-600);">STEP 3 OF 4 · GUIDED PRACTICE (TRY IT YOURSELF)</span>
              <h3 style="font-family:var(--font-serif); font-size:1.45rem; color:var(--navy-900); margin:0.15rem 0 0;">
                ✍️ Practice Today’s Objective: ${cleanWeekTopic}
              </h3>
              <p style="font-size:0.86rem; color:var(--text-secondary); margin-top:0.2rem;">
                Complete the quick Concept Check &amp; Application below. ${track === "standard" ? "Hints and Word Bank chips are unlocked to guide you step-by-step!" : "Honors Standard: Cite primary principles and full justification."}
              </p>
            </div>
            <span class="badge ${tasks.blankDone && tasks.writingDone ? "badge-emerald" : "badge-gold"}">
              Practice Progress: ${(tasks.blankDone ? 1 : 0) + (tasks.writingDone ? 1 : 0)}/2 Complete
            </span>
          </div>

          <!-- Practice Part A: Real Numerical Math Problems OR Concept Check Cloze -->
          <div class="quiz-q-card" style="background:var(--bg-ivory); margin-bottom:1rem;">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.4rem; margin-bottom:0.65rem;">
              <strong style="color:var(--navy-900);">${lesson.isMathProblemSet ? "Part A · Interactive Math Problem Set (Solve & Check)" : "Part A · Concept Check (Click a Word Bank Chip or Type)"}</strong>
              <span class="badge ${tasks.blankDone ? "badge-emerald" : "badge-navy"}" id="clozeStatusBadge">${tasks.blankDone ? "✓ Done" : "In Progress"}</span>
            </div>
            ${
              !lesson.isMathProblemSet && (lesson.wordBank || []).length > 0
                ? `<div style="display:flex; flex-wrap:wrap; gap:0.4rem; margin-bottom:0.75rem;">
                    ${(lesson.wordBank || [])
                      .map((w) => `<button type="button" class="chip" data-fill-word="${w}">${w}</button>`)
                      .join("")}
                  </div>`
                : ""
            }
            <div class="assignments-stack" style="gap:0.65rem; margin-bottom:0.85rem;">
              ${blanks
                .map(
                  (b, i) => `
                <div style="font-size:0.93rem; line-height:1.75; background:#FFFFFF; padding:0.75rem 0.9rem; border-radius:8px; border:1px solid var(--border-subtle);">
                  <div>
                    <strong style="color:var(--navy-900);">${b.before}</strong>
                    <input type="text" class="input-control cloze-blank-input" data-expected="${b.answer}" value="${tasks.blankDone ? b.answer : ""}" placeholder="${lesson.isMathProblemSet ? "Type answer..." : b.hint}" style="display:inline-block; width:${lesson.isMathProblemSet ? "135px" : "165px"}; padding:0.28rem 0.55rem; margin:0 0.3rem; font-weight:700;" />
                    ${b.after}
                    <span id="clozeFeedback_${i}" style="margin-left:0.4rem; font-size:0.82rem; font-weight:700;"></span>
                  </div>
                  ${
                    lesson.isMathProblemSet && b.hint
                      ? `<details style="margin-top:0.35rem; font-size:0.8rem; color:var(--text-secondary);"><summary style="cursor:pointer; color:var(--navy-700); font-weight:600;">💡 Need a step hint?</summary><div style="margin-top:0.2rem;">${b.hint}</div></details>`
                      : ""
                  }
                </div>
              `
                )
                .join("")}
            </div>
            <div id="clozeSummaryBanner" class="lesson-callout hidden" style="margin-bottom:0.65rem;"></div>
            <div style="display:flex; justify-content:space-between; align-items:center; gap:0.5rem; flex-wrap:wrap;">
              <button type="button" class="btn btn-primary btn-sm" data-grade-cloze="true">✓ Check My ${lesson.isMathProblemSet ? "Math Answers" : "Answers"}</button>
              <span style="font-size:0.78rem; color:var(--text-secondary);">🔒 Full step-by-step Answer Keys are kept exclusively in the <strong>Parent Portal</strong>.</span>
            </div>
          </div>

          <!-- Practice Part B: Short Practical Response -->
          <div class="quiz-q-card" style="background:var(--bg-ivory);">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.4rem; margin-bottom:0.5rem;">
              <strong style="color:var(--navy-900);">Part B · Show Your Understanding (${writing.title || "Short Written Explanation"})</strong>
              <span class="badge ${tasks.writingDone ? "badge-emerald" : "badge-navy"}">${tasks.writingDone ? "✓ Submitted" : "Required"}</span>
            </div>
            <p style="font-size:0.88rem; color:var(--text-primary); margin-bottom:0.6rem;">${writing.prompt || "Explain today's key concept in your own words."}</p>
            <textarea id="dailyWritingInput" class="notes-textarea" rows="${isEarlyReader ? "2" : "3"}" placeholder="${isEarlyReader ? "With a parent's help, type 1 short word or sentence (or share out loud and type 'Done')..." : "Write 2–4 clear sentences showing how today's concept works..."}">${writing.savedResponse || ""}</textarea>
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem; margin-top:0.55rem;">
              <span id="dailyWritingWordCount" class="mono-label">${(writing.savedResponse || "").trim() ? (writing.savedResponse || "").trim().split(/\s+/).length : 0} words (${isEarlyReader ? "K–2 Friendly: 1+ word or oral check with parent" : "Target: 20–65 words"})</span>
              <div style="display:flex; gap:0.45rem; align-items:center;">
                <span style="font-size:0.76rem; color:var(--text-secondary);">🔒 Parent Rubric in Parent Portal</span>
                <button type="button" class="btn btn-emerald btn-sm" data-submit-daily-writing="true">✓ Submit Practice Response</button>
              </div>
            </div>
          </div>

          ${window.renderIxlExtraPracticeCard ? window.renderIxlExtraPracticeCard(course, window.getAcademyActiveStudent ? window.getAcademyActiveStudent() : null) : ""}

          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.6rem; margin-top:1.1rem; padding-top:0.85rem; border-top:1px solid var(--border-subtle);">
            <button type="button" class="btn btn-outline" data-set-guided-step="2">← Back to Step 2 (Lesson)</button>
            <button type="button" class="btn btn-primary btn-lg" data-set-guided-step="4">
              Finish Today → Step 4: Exit Ticket (Mastery Check) →
            </button>
          </div>
        </div>
      `;
    } else {
      // STEP 4: DAILY EXIT QUIZ (12 Qs) OR DAY 5 WEEKLY UNIT TEST (20 Qs) + REMEDIATION FLOW
      const isUnitTest = !!lesson.isWeeklyUnitTest;
      stepBodyHtml = `
        <div class="card-panel" style="border-top:4px solid ${isUnitTest ? "var(--gold-500)" : "var(--emerald-600)"};">
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem; margin-bottom:0.9rem;">
            <div>
              <span class="mono-label" style="color:${isUnitTest ? "var(--gold-600)" : "var(--emerald-700)"};">
                STEP 4 OF 4 · ${isUnitTest ? `WEEK ${weekObj?.weekNum || 1} COMPREHENSIVE UNIT TEST (${quiz.length} QUESTIONS)` : `DAILY MASTERY QUIZ (${quiz.length} QUESTIONS)`}
              </span>
              <h3 style="font-family:var(--font-serif); font-size:1.5rem; color:var(--navy-900); margin:0.15rem 0 0;">
                ${isUnitTest ? "📝 Weekly Unit Test" : "🎟️ Daily Quiz"}: ${cleanWeekTopic}
              </h3>
              <p style="font-size:0.86rem; color:var(--text-secondary); margin-top:0.2rem;">
                Score <strong>≥ 85%</strong> to pass ${isUnitTest ? `Week ${weekObj?.weekNum || 1} and unlock Week ${Math.min(36, (weekObj?.weekNum || 1) + 1)}` : `Day ${dayIdx}`}. If you score under 85%, you’ll review Step 2 and retry missed questions—and your parent gets a helpful coaching note in the Parent Portal.
              </p>
            </div>
            <span class="badge ${tasks.quizDone ? "badge-emerald" : "badge-gold"}" id="guidedExitStatusBadge">
              ${tasks.quizDone ? `✓ PASSED (${lesson.masteryScore || 100}%) — COMPLETE!` : `${quiz.length} Questions · ≥85% Needed`}
            </span>
          </div>

          <div class="assignments-stack" style="gap:0.8rem; margin-bottom:1rem;">
            ${quiz
              .map(
                (qItem, qIdx) => `
              <div class="quiz-q-card" id="guidedQuizCard_${qIdx}" data-guided-q="${qIdx}" style="background:var(--bg-ivory); border:1px solid var(--border-subtle);">
                <div style="display:flex; justify-content:space-between; align-items:center; gap:0.5rem; margin-bottom:0.5rem;">
                  <div class="quiz-q-prompt" style="font-weight:700; color:var(--navy-900);">Question ${qIdx + 1} of ${quiz.length}: ${qItem.q}</div>
                  <span id="guidedExitStatus_${qIdx}" style="font-size:0.76rem; font-weight:700; white-space:nowrap;"></span>
                </div>
                <div class="quiz-options">
                  ${qItem.options
                    .map(
                      (opt, oIdx) => `
                    <label class="quiz-option-label">
                      <input type="radio" name="guided_exit_q_${qIdx}" value="${oIdx}" />
                      <span>${opt}</span>
                    </label>
                  `
                    )
                    .join("")}
                </div>
                <div class="quiz-explanation hidden" id="guidedExitExp_${qIdx}" style="margin-top:0.5rem;">
                  <strong>Explanation:</strong> ${qItem.explanation}
                </div>
              </div>
            `
              )
              .join("")}
          </div>

          <div id="guidedExitResultBanner" class="lesson-callout ${tasks.quizDone ? "" : "hidden"}" style="margin-bottom:1rem; background:#F4FAF7; border-left-color:var(--emerald-600);">
            ${
              tasks.quizDone
                ? `<strong>🎉 Awesome work!</strong> You passed ${isUnitTest ? "this Weekly Unit Test" : "today's Quiz"} at <strong>${lesson.masteryScore || 100}%</strong>! Ready for the next step.`
                : ""
            }
          </div>

          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.65rem; padding-top:0.85rem; border-top:1px solid var(--border-subtle);">
            <div style="display:flex; gap:0.45rem; flex-wrap:wrap;">
              <button type="button" class="btn btn-outline" data-set-guided-step="2">📘 Review Step 2 Lesson</button>
              <button type="button" class="btn btn-secondary" data-reset-lesson-day="${course.id}|${lesson.id}">🔄 Redo Day ${dayIdx}</button>
            </div>
            <div style="display:flex; gap:0.5rem; flex-wrap:wrap;">
              <button type="button" class="btn btn-emerald btn-lg" data-submit-guided-exit-ticket="true">
                ${isUnitTest ? `📝 Submit ${quiz.length}-Question Weekly Check` : `🎟️ Submit ${quiz.length}-Question Quiz`}
              </button>
              <button
                type="button"
                id="guidedNextAdvanceBtn"
                class="btn btn-primary btn-lg ${tasks.quizDone ? "" : "hidden"}"
                ${
                  dayIdx < (course.lessons || []).length
                    ? `data-select-lesson="${course.lessons[dayIdx].id}"`
                    : `data-select-36week="${Math.min(36, (weekObj?.weekNum || 1) + 1)}"`
                }
              >
                ${
                  dayIdx < (course.lessons || []).length
                    ? `Next Day (Day ${dayIdx + 1}) →`
                    : `Advance to Week ${Math.min(36, (weekObj?.weekNum || 1) + 1)} →`
                }
              </button>
            </div>
          </div>
        </div>
      `;
    }

    const hasAnyProgress = !!(lesson.completed || tasks.blankDone || tasks.writingDone || tasks.quizDone);
    const redoBarHtml = hasAnyProgress
      ? `
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.55rem; padding:0.65rem 0.95rem; margin-bottom:0.85rem; border-radius:var(--radius-sm); background:#FFFBEB; border:1.5px solid var(--gold-500);">
          <div style="font-size:0.85rem; color:var(--navy-900);">
            <strong>${lesson.completed ? `✓ Day ${dayIdx} Checked Off` : `Day ${dayIdx} In Progress`}</strong> — Want extra practice or not 100% confident yet? Reset and redo anytime!
          </div>
          <div style="display:flex; gap:0.45rem; flex-wrap:wrap;">
            <button type="button" class="btn btn-secondary btn-sm" data-reset-lesson-day="${course.id}|${lesson.id}">🔄 Reset &amp; Redo Day ${dayIdx}</button>
            <button type="button" class="btn btn-outline btn-sm" data-reset-course-week="${course.id}|${weekObj?.weekNum || 1}">↺ Reset Whole Week ${weekObj?.weekNum || 1}</button>
          </div>
        </div>
      `
      : "";

    return `
      <div style="margin-bottom:1.25rem;">
        ${redoBarHtml}
        <!-- Clean 4-Step Sequential Progress Stepper -->
        <div style="display:grid; grid-template-columns: repeat(4, 1fr); gap:0.55rem; margin-bottom:1rem;">
          ${stepPills
            .map(
              (p) => `
            <button type="button" data-set-guided-step="${p.num}" style="text-align:left; padding:0.75rem 0.9rem; border-radius:var(--radius-sm); cursor:pointer; border:${
              p.num === step ? "2px solid var(--gold-500)" : "1px solid var(--border-subtle)"
            }; background:${
              p.num === step ? "var(--navy-900)" : p.num < step ? "#F4FAF7" : "#FFFFFF"
            }; color:${p.num === step ? "#FFFFFF" : "var(--navy-900)"}; transition:all 0.15s;">
              <div style="font-size:0.76rem; font-family:var(--font-mono); font-weight:700; color:${
                p.num === step ? "var(--gold-400)" : p.num < step ? "var(--emerald-700)" : "var(--text-secondary)"
              };">
                ${p.num < step ? "✓ COMPLETED" : `STEP ${p.num} OF 4`}
              </div>
              <div style="font-weight:700; font-size:0.92rem; margin-top:0.15rem;">${p.icon} ${p.label.replace(/^\d+\.\s*/, "")}</div>
              <div style="font-size:0.75rem; opacity:0.8;">${p.sub}</div>
            </button>
          `
            )
            .join("")}
        </div>

        ${stepBodyHtml}
      </div>
    `;
  };
})();
