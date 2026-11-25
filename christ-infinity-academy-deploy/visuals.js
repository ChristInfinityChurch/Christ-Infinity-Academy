// Christ Infinity Academy — Bespoke Visuals, Book Covers, Biblical Cartography Maps & Interactive Science/Math Diagrams
(function () {
  function escapeXml(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function wrapSvgLines(text, maxCharsPerLine, maxLines) {
    const words = String(text || "").split(/\s+/);
    const lines = [];
    let current = "";
    words.forEach((w) => {
      if ((current + " " + w).trim().length <= maxCharsPerLine) {
        current = (current + " " + w).trim();
      } else {
        if (current) lines.push(current);
        current = w;
      }
    });
    if (current) lines.push(current);
    return lines.slice(0, maxLines || 3);
  }

  // ==================== 1. CUSTOM ILLUSTRATED HARDCOVER BOOK JACKETS (ALL 32 LIBRARY BOOKS) ====================
  window.renderBookCoverSVG = function (book, isLarge) {
    const shelf = book.shelf || "Core Course Textbook";
    const isAdventure = shelf.includes("Adventure");
    const isMystery = shelf.includes("Mystery");
    const isPuzzle = shelf.includes("Puzzle");

    const bgGradStart = isAdventure
      ? "#0D3B2E"
      : isMystery
      ? "#1B1638"
      : isPuzzle
      ? "#2D1836"
      : "#0A192F";
    const bgGradEnd = isAdventure
      ? "#07221A"
      : isMystery
      ? "#0E0B20"
      : isPuzzle
      ? "#170B1C"
      : "#162A4A";
    const accentGold = isAdventure
      ? "#E2B857"
      : isMystery
      ? "#F0B429"
      : isPuzzle
      ? "#D69E2E"
      : "#C99A2E";
    const badgeLabel = isAdventure
      ? "EXPEDITION EDITION"
      : isMystery
      ? "DETECTIVE CASEBOOK"
      : isPuzzle
      ? "CIPHER & LOGIC CODEX"
      : "CLASSICAL ACADEMY PRESS";

    const titleLines = wrapSvgLines(book.title, 22, 3);
    const height = isLarge ? 250 : 195;

    // Center emblem SVG paths by genre
    let centerEmblem = "";
    if (isAdventure) {
      // Compass Rose & Astrolabe
      centerEmblem = `
        <circle cx="150" cy="92" r="28" fill="none" stroke="${accentGold}" stroke-width="1.5" stroke-dasharray="3,2"/>
        <circle cx="150" cy="92" r="21" fill="rgba(226,184,87,0.12)" stroke="${accentGold}" stroke-width="1.2"/>
        <polygon points="150,60 155,86 150,92 145,86" fill="${accentGold}"/>
        <polygon points="150,124 155,98 150,92 145,98" fill="rgba(226,184,87,0.55)"/>
        <polygon points="118,92 144,87 150,92 144,97" fill="rgba(226,184,87,0.55)"/>
        <polygon points="182,92 156,87 150,92 156,97" fill="${accentGold}"/>
        <circle cx="150" cy="92" r="4" fill="#FFFFFF"/>
      `;
    } else if (isMystery) {
      // Magnifying Glass, Keyhole & Lantern Glow
      centerEmblem = `
        <circle cx="146" cy="88" r="24" fill="rgba(240,180,41,0.14)" stroke="${accentGold}" stroke-width="2.2"/>
        <circle cx="146" cy="88" r="18" fill="none" stroke="rgba(255,255,255,0.35)" stroke-width="1"/>
        <line x1="163" y1="105" x2="179" y2="121" stroke="${accentGold}" stroke-width="4.5" stroke-linecap="round"/>
        <circle cx="146" cy="84" r="5" fill="${accentGold}"/>
        <polygon points="143,88 149,88 151,99 141,99" fill="${accentGold}"/>
      `;
    } else if (isPuzzle) {
      // Sacred Geometry Polyhedron & Cipher Ring
      centerEmblem = `
        <circle cx="150" cy="92" r="27" fill="none" stroke="${accentGold}" stroke-width="1.4"/>
        <polygon points="150,65 174,79 174,106 150,119 126,106 126,79" fill="rgba(214,158,46,0.14)" stroke="${accentGold}" stroke-width="1.6"/>
        <polygon points="150,65 174,106 126,106" fill="none" stroke="rgba(255,255,255,0.55)" stroke-width="1.1"/>
        <polygon points="150,119 174,79 126,79" fill="none" stroke="${accentGold}" stroke-width="1.1"/>
        <circle cx="150" cy="92" r="4.5" fill="${accentGold}"/>
      `;
    } else {
      // Classical Academy Shield, Cross & Infinity Loop
      centerEmblem = `
        <path d="M126,68 L174,68 L174,93 C174,109 150,120 150,120 C150,120 126,109 126,93 Z" fill="rgba(201,154,46,0.16)" stroke="${accentGold}" stroke-width="1.8"/>
        <line x1="150" y1="74" x2="150" y2="112" stroke="${accentGold}" stroke-width="2"/>
        <line x1="135" y1="86" x2="165" y2="86" stroke="${accentGold}" stroke-width="2"/>
        <circle cx="143" cy="96" r="5.5" fill="none" stroke="#FFFFFF" stroke-width="1.4"/>
        <circle cx="157" cy="96" r="5.5" fill="none" stroke="#FFFFFF" stroke-width="1.4"/>
      `;
    }

    return `
      <svg viewBox="0 0 300 205" width="100%" height="${height}" style="display:block; border-radius:8px; box-shadow: 0 6px 16px rgba(10,25,47,0.18); margin-bottom:0.75rem;" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bg_${escapeXml(book.id)}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="${bgGradStart}"/>
            <stop offset="100%" stop-color="${bgGradEnd}"/>
          </linearGradient>
        </defs>
        <!-- Book Spine & Cover Background -->
        <rect x="0" y="0" width="300" height="205" rx="8" fill="url(#bg_${escapeXml(book.id)})"/>
        <rect x="0" y="0" width="16" height="205" rx="4" fill="rgba(0,0,0,0.32)"/>
        <line x1="16" y1="0" x2="16" y2="205" stroke="${accentGold}" stroke-width="1.2" stroke-opacity="0.65"/>

        <!-- Gold Leaf Ornate Frame -->
        <rect x="24" y="10" width="266" height="185" rx="5" fill="none" stroke="${accentGold}" stroke-width="1.4" stroke-opacity="0.75"/>
        <rect x="28" y="14" width="258" height="177" rx="3" fill="none" stroke="${accentGold}" stroke-width="0.6" stroke-opacity="0.45"/>

        <!-- Top Header Pill & Grade Badge -->
        <text x="36" y="30" fill="${accentGold}" font-family="JetBrains Mono, monospace" font-size="8.5" font-weight="700" letter-spacing="1.2">${escapeXml(badgeLabel)}</text>
        <rect x="224" y="19" width="54" height="16" rx="8" fill="${accentGold}"/>
        <text x="251" y="30" fill="#0A192F" font-family="JetBrains Mono, monospace" font-size="8.5" font-weight="700" text-anchor="middle">GRADE ${escapeXml(book.readingLevel)}</text>

        <!-- Central Heraldic Illustration -->
        ${centerEmblem}

        <!-- Book Title -->
        ${titleLines
          .map(
            (line, idx) =>
              `<text x="155" y="${140 + idx * 15}" fill="#FFFFFF" font-family="Cormorant Garamond, Georgia, serif" font-size="13.5" font-weight="700" text-anchor="middle">${escapeXml(line)}</text>`
          )
          .join("")}

        <!-- Footer Author & Pages -->
        <text x="155" y="184" fill="rgba(255,255,255,0.75)" font-family="Plus Jakarta Sans, sans-serif" font-size="8.5" text-anchor="middle">${escapeXml(book.author)} · ${book.pages} Pages</text>
      </svg>
    `;
  };

  // ==================== 2. INTERACTIVE BIBLICAL & ANCIENT WORLD CARTOGRAPHY MAP (SCRIPTURE HUB) ====================
  window.renderBibleGeographyMapHTML = function (bookObj, chapterNum) {
    if (!bookObj) return "";
    const loc = (bookObj.location || "").toLowerCase();

    // Determine primary pin coordinates on our 800x320 Ancient Mediterranean & Near East Map
    let activePin = { x: 495, y: 195, label: "Jerusalem & Judea (Promised Land)" };
    let routePath = "M 670,215 Q 590,145 495,195";
    let routeLabel = "Fertile Crescent & Covenant Route";

    if (loc.includes("mesopotamia") || loc.includes("ur") || loc.includes("babylon") || loc.includes("susa") || loc.includes("persia") || loc.includes("nineveh")) {
      activePin = { x: 655, y: 185, label: "Mesopotamia / Babylon / Nineveh / Susa" };
      routePath = "M 675,215 Q 585,135 495,195";
      routeLabel = "Abrahamic & Exilic Mesopotamian Route (Ur → Haran → Jerusalem ↔ Babylon)";
    } else if (loc.includes("egypt") || loc.includes("sinai") || loc.includes("nile") || loc.includes("alexandria")) {
      activePin = { x: 435, y: 235, label: loc.includes("alexandria") ? "Alexandria, Egypt (Septuagint LXX Center)" : "Nile Delta, Red Sea & Mount Sinai" };
      routePath = "M 415,215 L 455,250 L 495,195";
      routeLabel = "Exodus & Sinai Wilderness Route (Goshen → Red Sea → Mt. Sinai → Moab)";
    } else if (loc.includes("rome") || loc.includes("corinth") || loc.includes("athens") || loc.includes("macedonia") || loc.includes("philippi") || loc.includes("ephesus") || loc.includes("patmos") || loc.includes("galatia") || loc.includes("colossae") || loc.includes("crete")) {
      activePin = {
        x: loc.includes("rome") ? 215 : loc.includes("corinth") || loc.includes("athens") ? 315 : 375,
        y: loc.includes("rome") ? 105 : 135,
        label: loc.includes("rome") ? "Imperial Rome & Mediterranean Mission" : "Asia Minor (Ephesus/Colossae), Patmos & Greece (Athens/Corinth)"
      };
      routePath = "M 495,195 Q 425,145 375,135 T 315,135 T 215,105";
      routeLabel = "Apostolic Mediterranean Sea & Roman Road Network (Jerusalem → Antioch → Ephesus → Corinth → Rome)";
    }

    return `
      <div class="quiz-q-card" style="background:#0A192F; color:#FFFFFF; border:2px solid var(--gold-500); padding:1.15rem; margin-bottom:1.25rem; border-radius:var(--radius-md);">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem; margin-bottom:0.75rem;">
          <div>
            <span class="mono-label" style="color:var(--gold-400);">🗺️ INTERACTIVE BIBLICAL &amp; ARCHAEOLOGICAL ATLAS · WHERE IT TOOK PLACE</span>
            <h3 style="font-family:var(--font-serif); font-size:1.28rem; color:#FFFFFF; margin:0.15rem 0 0;">
              Geographical Setting of ${escapeXml(bookObj.name)} (Chapter ${chapterNum}): <span style="color:var(--gold-400);">${escapeXml(bookObj.location)}</span>
            </h3>
          </div>
          <span class="badge badge-gold">${escapeXml(routeLabel)}</span>
        </div>

        <!-- SVG Cartography Map of the Ancient Mediterranean & Near East -->
        <div style="background:#0F2544; border:1px solid rgba(201,154,46,0.45); border-radius:8px; overflow:hidden; margin-bottom:0.85rem;">
          <svg viewBox="0 0 800 270" width="100%" height="245" style="display:block;" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="pinGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stop-color="#F0B429" stop-opacity="0.9"/>
                <stop offset="100%" stop-color="#F0B429" stop-opacity="0"/>
              </radialGradient>
            </defs>

            <!-- Compass Grid Lines -->
            <line x1="0" y1="70" x2="800" y2="70" stroke="rgba(255,255,255,0.07)" stroke-dasharray="4,4"/>
            <line x1="0" y1="140" x2="800" y2="140" stroke="rgba(255,255,255,0.07)" stroke-dasharray="4,4"/>
            <line x1="0" y1="210" x2="800" y2="210" stroke="rgba(255,255,255,0.07)" stroke-dasharray="4,4"/>
            <line x1="200" y1="0" x2="200" y2="270" stroke="rgba(255,255,255,0.07)" stroke-dasharray="4,4"/>
            <line x1="400" y1="0" x2="400" y2="270" stroke="rgba(255,255,255,0.07)" stroke-dasharray="4,4"/>
            <line x1="600" y1="0" x2="600" y2="270" stroke="rgba(255,255,255,0.07)" stroke-dasharray="4,4"/>

            <!-- Stylized Landmasses (Italy, Greece, Asia Minor, Levant/Canaan, Egypt/Sinai, Mesopotamia) -->
            <!-- Italy -->
            <path d="M180,65 L235,85 L250,135 L230,145 L205,110 Z" fill="#1E3A5F" stroke="#C99A2E" stroke-width="1"/>
            <!-- Greece & Macedonia -->
            <path d="M285,85 L335,90 L330,155 L295,150 Z" fill="#1E3A5F" stroke="#C99A2E" stroke-width="1"/>
            <!-- Asia Minor (Anatolia) -->
            <path d="M355,95 L495,95 L505,145 L360,145 Z" fill="#1E3A5F" stroke="#C99A2E" stroke-width="1"/>
            <!-- Canaan / Levant / Syria & Mesopotamia -->
            <path d="M485,140 L740,120 L760,245 L475,235 Z" fill="#23456E" stroke="#C99A2E" stroke-width="1.2"/>
            <!-- Egypt & Sinai Peninsula -->
            <path d="M340,205 L475,205 L465,265 L330,265 Z" fill="#1E3A5F" stroke="#C99A2E" stroke-width="1"/>

            <!-- Tigris, Euphrates, Jordan & Nile Rivers -->
            <path d="M565,125 Q635,165 695,225" fill="none" stroke="#4FD1C5" stroke-width="1.8" stroke-opacity="0.7"/>
            <path d="M545,135 Q610,180 685,230" fill="none" stroke="#4FD1C5" stroke-width="1.8" stroke-opacity="0.7"/>
            <path d="M410,205 L408,265" fill="none" stroke="#4FD1C5" stroke-width="2.2" stroke-opacity="0.8"/>

            <!-- Historical Route Trajectory -->
            <path d="${routePath}" fill="none" stroke="#F0B429" stroke-width="2.6" stroke-dasharray="6,4"/>

            <!-- Reference Cities & Landmarks -->
            <circle cx="215" cy="105" r="4" fill="#94A3B8"/><text x="215" y="95" fill="#CBD5E1" font-size="9.5" text-anchor="middle">Rome</text>
            <circle cx="315" cy="135" r="4" fill="#94A3B8"/><text x="315" y="125" fill="#CBD5E1" font-size="9.5" text-anchor="middle">Athens &amp; Corinth</text>
            <circle cx="385" cy="125" r="4" fill="#94A3B8"/><text x="385" y="115" fill="#CBD5E1" font-size="9.5" text-anchor="middle">Ephesus / Patmos</text>
            <circle cx="495" cy="160" r="4" fill="#94A3B8"/><text x="530" y="162" fill="#CBD5E1" font-size="9.5">Antioch / Damascus</text>
            <circle cx="495" cy="195" r="5" fill="#E2B857"/><text x="538" y="198" fill="#FFFFFF" font-weight="700" font-size="10.5">Jerusalem &amp; Judea</text>
            <circle cx="410" cy="220" r="4" fill="#94A3B8"/><text x="372" y="234" fill="#CBD5E1" font-size="9.5">Alexandria / Egypt</text>
            <circle cx="455" cy="245" r="4" fill="#94A3B8"/><text x="455" y="260" fill="#CBD5E1" font-size="9.5" text-anchor="middle">Mt. Sinai</text>
            <circle cx="620" cy="155" r="4" fill="#94A3B8"/><text x="620" y="145" fill="#CBD5E1" font-size="9.5" text-anchor="middle">Nineveh</text>
            <circle cx="655" cy="195" r="4" fill="#94A3B8"/><text x="655" y="185" fill="#CBD5E1" font-size="9.5" text-anchor="middle">Babylon</text>
            <circle cx="705" cy="215" r="4" fill="#94A3B8"/><text x="705" y="230" fill="#CBD5E1" font-size="9.5" text-anchor="middle">Ur / Susa (Persia)</text>

            <!-- Active Book Glowing Beacon -->
            <circle cx="${activePin.x}" cy="${activePin.y}" r="24" fill="url(#pinGlow)"/>
            <circle cx="${activePin.x}" cy="${activePin.y}" r="7.5" fill="#F0B429" stroke="#FFFFFF" stroke-width="2"/>
            <rect x="${Math.max(15, Math.min(540, activePin.x - 115))}" y="${Math.max(12, activePin.y - 38)}" width="230" height="22" rx="11" fill="#F0B429"/>
            <text x="${Math.max(130, Math.min(655, activePin.x))}" y="${Math.max(27, activePin.y - 23)}" fill="#0A192F" font-family="JetBrains Mono, monospace" font-size="9.5" font-weight="700" text-anchor="middle">📍 ACTIVE: ${escapeXml(activePin.label.slice(0, 32))}</text>

            <!-- Map Legend -->
            <text x="20" y="25" fill="#F0B429" font-family="JetBrains Mono, monospace" font-size="10" font-weight="700">MEDITERRANEAN SEA &amp; ANCIENT NEAR EAST ATLAS (80-BOOK GEOGRAPHY)</text>
          </svg>
        </div>

        <!-- Archaeological & Manuscript Verification Strip -->
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(175px, 1fr)); gap:0.55rem; font-size:0.78rem;">
          <div style="background:rgba(255,255,255,0.07); padding:0.55rem 0.7rem; border-radius:6px; border-left:3px solid var(--gold-400);">
            <strong style="color:var(--gold-400);">📜 Qumran Caves (Dead Sea)</strong>
            <div style="color:#E2E8F0; margin-top:0.15rem;">Great Isaiah Scroll (1QIsaᵃ) &amp; Tobit fragments (c. 125 BC).</div>
          </div>
          <div style="background:rgba(255,255,255,0.07); padding:0.55rem 0.7rem; border-radius:6px; border-left:3px solid var(--gold-400);">
            <strong style="color:var(--gold-400);">🏺 Ketef Hinnom (Jerusalem)</strong>
            <div style="color:#E2E8F0; margin-top:0.15rem;">7th-century BC silver scrolls preserving Numbers 6:24–26.</div>
          </div>
          <div style="background:rgba(255,255,255,0.07); padding:0.55rem 0.7rem; border-radius:6px; border-left:3px solid var(--gold-400);">
            <strong style="color:var(--gold-400);">🏛️ Tel Dan &amp; Moab Steles</strong>
            <div style="color:#E2E8F0; margin-top:0.15rem;">9th-century BC basalt inscriptions confirming the "House of David".</div>
          </div>
          <div style="background:rgba(255,255,255,0.07); padding:0.55rem 0.7rem; border-radius:6px; border-left:3px solid var(--gold-400);">
            <strong style="color:var(--gold-400);">⚓ Corinth &amp; Ephesus Stones</strong>
            <div style="color:#E2E8F0; margin-top:0.15rem;">Erastus pavement (Rom 16:23) &amp; Papyrus P66/P75 (John 1).</div>
          </div>
        </div>
      </div>
    `;
  };

  // ==================== 3. INTERACTIVE SCIENCE, GEOMETRY & CLASSICAL DIAGRAMS (LESSON STUDIO) ====================
  window.renderCourseInteractiveDiagramHTML = function (course, lesson, weekNum) {
    if (!course) return "";
    const dept = (course.department || "").toLowerCase();
    const code = course.code || "";

    let diagramSvg = "";
    let diagramTitle = "";
    let diagramCaption = "";

    if (dept.includes("math")) {
      diagramTitle = `${code} Interactive Euclidean Proof, Golden Ratio (φ = 1.618) & Coordinate Blueprint`;
      diagramCaption = `Visualizing proportional geometry, right-triangle demonstration (a² + b² = c²), and analytical curve behavior for Week ${weekNum}.`;
      diagramSvg = `
        <svg viewBox="0 0 760 220" width="100%" height="210" style="display:block; background:#0A192F; border-radius:8px;" xmlns="http://www.w3.org/2000/svg">
          <!-- Grid -->
          <line x1="0" y1="55" x2="760" y2="55" stroke="rgba(255,255,255,0.08)"/>
          <line x1="0" y1="110" x2="760" y2="110" stroke="rgba(255,255,255,0.08)"/>
          <line x1="0" y1="165" x2="760" y2="165" stroke="rgba(255,255,255,0.08)"/>
          <line x1="250" y1="0" x2="250" y2="220" stroke="rgba(255,255,255,0.12)"/>
          <line x1="510" y1="0" x2="510" y2="220" stroke="rgba(255,255,255,0.12)"/>

          <!-- Panel 1: Euclidean Right Triangle & Squares -->
          <text x="125" y="24" fill="#F0B429" font-family="JetBrains Mono, monospace" font-size="10" font-weight="700" text-anchor="middle">1. EUCLIDEAN PROOF (I.47)</text>
          <polygon points="75,155 175,155 75,80" fill="rgba(79,209,197,0.18)" stroke="#4FD1C5" stroke-width="2.2"/>
          <rect x="75" y="143" width="12" height="12" fill="none" stroke="#F0B429" stroke-width="1.5"/>
          <text x="125" y="175" fill="#FFFFFF" font-family="JetBrains Mono, monospace" font-size="10.5" text-anchor="middle">b = 4 units (b² = 16)</text>
          <text x="48" y="122" fill="#FFFFFF" font-family="JetBrains Mono, monospace" font-size="10.5" text-anchor="middle">a = 3</text>
          <text x="145" y="110" fill="#F0B429" font-family="JetBrains Mono, monospace" font-size="11" font-weight="700">c = √(a²+b²) = 5</text>

          <!-- Panel 2: Golden Rectangle & Spiral -->
          <text x="380" y="24" fill="#F0B429" font-family="JetBrains Mono, monospace" font-size="10" font-weight="700" text-anchor="middle">2. GOLDEN PROPORTION (a : b = φ)</text>
          <rect x="290" y="50" width="180" height="111" fill="rgba(240,180,41,0.12)" stroke="#F0B429" stroke-width="2"/>
          <line x1="401" y1="50" x2="401" y2="161" stroke="#F0B429" stroke-width="1.4" stroke-dasharray="4,3"/>
          <line x1="401" y1="119" x2="470" y2="119" stroke="#F0B429" stroke-width="1.4" stroke-dasharray="4,3"/>
          <path d="M290,161 A111,111 0 0,1 401,50 A69,69 0 0,1 470,119 A42,42 0 0,1 428,161" fill="none" stroke="#4FD1C5" stroke-width="2.4"/>
          <text x="380" y="185" fill="#E2E8F0" font-family="JetBrains Mono, monospace" font-size="10" text-anchor="middle">φ = (1 + √5) / 2 ≈ 1.6180339</text>

          <!-- Panel 3: Coordinate Function & Tangent Slope -->
          <text x="635" y="24" fill="#F0B429" font-family="JetBrains Mono, monospace" font-size="10" font-weight="700" text-anchor="middle">3. ANALYTICAL FUNCTION CURVE</text>
          <line x1="545" y1="165" x2="725" y2="165" stroke="#94A3B8" stroke-width="1.5"/>
          <line x1="565" y1="45" x2="565" y2="185" stroke="#94A3B8" stroke-width="1.5"/>
          <path d="M555,155 Q615,150 645,105 T715,50" fill="none" stroke="#4FD1C5" stroke-width="2.5"/>
          <line x1="605" y1="142" x2="695" y2="62" stroke="#F0B429" stroke-width="1.8" stroke-dasharray="4,3"/>
          <circle cx="650" cy="102" r="5" fill="#F0B429" stroke="#FFFFFF" stroke-width="1.5"/>
          <text x="645" y="185" fill="#E2E8F0" font-family="JetBrains Mono, monospace" font-size="10" text-anchor="middle">f(x) &amp; Instantaneous Rate Δy/Δx</text>
        </svg>
      `;
    } else if (dept.includes("science")) {
      diagramTitle = `${code} Interactive Laboratory Blueprint: Cellular Bio-Architecture, Optics & Orbital Physics`;
      diagramCaption = `Empirical visual diagram illustrating ordered biological structures, wave-optics refraction (Snell's Law), and Keplerian planetary ellipses.`;
      diagramSvg = `
        <svg viewBox="0 0 760 220" width="100%" height="210" style="display:block; background:#09221C; border-radius:8px;" xmlns="http://www.w3.org/2000/svg">
          <line x1="250" y1="0" x2="250" y2="220" stroke="rgba(255,255,255,0.12)"/>
          <line x1="510" y1="0" x2="510" y2="220" stroke="rgba(255,255,255,0.12)"/>

          <!-- Panel 1: Eukaryotic Cell & DNA Helix -->
          <text x="125" y="24" fill="#F0B429" font-family="JetBrains Mono, monospace" font-size="10" font-weight="700" text-anchor="middle">1. CELLULAR &amp; GENETIC ORDER</text>
          <ellipse cx="125" cy="110" rx="82" ry="52" fill="rgba(79,209,197,0.15)" stroke="#4FD1C5" stroke-width="2.2"/>
          <circle cx="110" cy="110" r="24" fill="rgba(240,180,41,0.25)" stroke="#F0B429" stroke-width="2"/>
          <circle cx="110" cy="110" r="9" fill="#F0B429"/>
          <ellipse cx="165" cy="95" rx="16" ry="9" fill="rgba(255,255,255,0.18)" stroke="#FFFFFF" stroke-width="1.3"/>
          <ellipse cx="160" cy="128" rx="16" ry="9" fill="rgba(255,255,255,0.18)" stroke="#FFFFFF" stroke-width="1.3"/>
          <text x="125" y="185" fill="#E2E8F0" font-family="JetBrains Mono, monospace" font-size="9.5" text-anchor="middle">Nucleus (DNA Code) &amp; ATP Mitochondria</text>

          <!-- Panel 2: Optical Refraction & Prism Spectrum -->
          <text x="380" y="24" fill="#F0B429" font-family="JetBrains Mono, monospace" font-size="10" font-weight="700" text-anchor="middle">2. SNELL'S LAW &amp; OPTICS (n₁sinθ₁ = n₂sinθ₂)</text>
          <polygon points="380,52 430,152 330,152" fill="rgba(255,255,255,0.12)" stroke="#FFFFFF" stroke-width="2"/>
          <line x1="280" y1="125" x2="355" y2="102" stroke="#FFFFFF" stroke-width="3"/>
          <line x1="355" y1="102" x2="405" y2="106" stroke="#F0B429" stroke-width="2.5"/>
          <line x1="405" y1="106" x2="480" y2="88" stroke="#F56565" stroke-width="2.2"/>
          <line x1="405" y1="106" x2="480" y2="108" stroke="#ECC94B" stroke-width="2.2"/>
          <line x1="405" y1="106" x2="480" y2="128" stroke="#4FD1C5" stroke-width="2.2"/>
          <text x="380" y="185" fill="#E2E8F0" font-family="JetBrains Mono, monospace" font-size="9.5" text-anchor="middle">Dispersion of White Light (λ Spectrum)</text>

          <!-- Panel 3: Keplerian Elliptical Orbit & Gravity -->
          <text x="635" y="24" fill="#F0B429" font-family="JetBrains Mono, monospace" font-size="10" font-weight="700" text-anchor="middle">3. KEPLER'S LAWS &amp; ORBITAL PHYSICS</text>
          <ellipse cx="635" cy="110" rx="85" ry="48" fill="none" stroke="#4FD1C5" stroke-width="1.8" stroke-dasharray="5,3"/>
          <circle cx="595" cy="110" r="14" fill="#F0B429"/>
          <circle cx="712" cy="90" r="7" fill="#4FD1C5" stroke="#FFFFFF" stroke-width="1.5"/>
          <line x1="595" y1="110" x2="712" y2="90" stroke="rgba(255,255,255,0.5)" stroke-width="1.4"/>
          <text x="635" y="185" fill="#E2E8F0" font-family="JetBrains Mono, monospace" font-size="9.5" text-anchor="middle">F = G(m₁m₂)/r² · T² ∝ a³</text>
        </svg>
      `;
    } else {
      diagramTitle = `${code} Illuminated Classical Trivium, Primary-Source Architecture & Covenant Synthesis`;
      diagramCaption = `Visualizing the integration of Grammar (Facts & Sources), Dialectic (Logic & Analysis), and Rhetoric (Eloquent Expression) in Week ${weekNum}.`;
      diagramSvg = `
        <svg viewBox="0 0 760 210" width="100%" height="200" style="display:block; background:#1A142E; border-radius:8px;" xmlns="http://www.w3.org/2000/svg">
          <!-- Classical Pediment & Three Pillars -->
          <polygon points="120,52 380,16 640,52" fill="rgba(240,180,41,0.18)" stroke="#F0B429" stroke-width="2"/>
          <text x="380" y="42" fill="#F0B429" font-family="JetBrains Mono, monospace" font-size="10.5" font-weight="700" text-anchor="middle">LOGOS · VERITAS · SAPIENTIA (CHRIST THE FOUNDATION OF ALL TRUTH)</text>

          <!-- Pillar 1 -->
          <rect x="145" y="62" width="135" height="105" rx="6" fill="rgba(255,255,255,0.07)" stroke="#C99A2E" stroke-width="1.5"/>
          <text x="212" y="88" fill="#F0B429" font-family="JetBrains Mono, monospace" font-size="10" font-weight="700" text-anchor="middle">I. GRAMMAR &amp; TEXT</text>
          <text x="212" y="110" fill="#FFFFFF" font-size="10.5" text-anchor="middle">Primary Sources, Dates,</text>
          <text x="212" y="126" fill="#FFFFFF" font-size="10.5" text-anchor="middle">Hebrew/Greek/Latin Roots</text>
          <text x="212" y="142" fill="#CBD5E1" font-size="9.5" text-anchor="middle">&amp; Historical Context</text>

          <!-- Pillar 2 -->
          <rect x="312" y="62" width="135" height="105" rx="6" fill="rgba(255,255,255,0.07)" stroke="#4FD1C5" stroke-width="1.5"/>
          <text x="380" y="88" fill="#4FD1C5" font-family="JetBrains Mono, monospace" font-size="10" font-weight="700" text-anchor="middle">II. DIALECTIC &amp; LOGIC</text>
          <text x="380" y="110" fill="#FFFFFF" font-size="10.5" text-anchor="middle">Deductive Syllogisms,</text>
          <text x="380" y="126" fill="#FFFFFF" font-size="10.5" text-anchor="middle">Cause &amp; Effect Proofs</text>
          <text x="380" y="142" fill="#CBD5E1" font-size="9.5" text-anchor="middle">&amp; Socratic Inquiry</text>

          <!-- Pillar 3 -->
          <rect x="480" y="62" width="135" height="105" rx="6" fill="rgba(255,255,255,0.07)" stroke="#C99A2E" stroke-width="1.5"/>
          <text x="547" y="88" fill="#F0B429" font-family="JetBrains Mono, monospace" font-size="10" font-weight="700" text-anchor="middle">III. RHETORIC &amp; PRAXIS</text>
          <text x="547" y="110" fill="#FFFFFF" font-size="10.5" text-anchor="middle">Persuasive Thesis,</text>
          <text x="547" y="126" fill="#FFFFFF" font-size="10.5" text-anchor="middle">Ethical Application</text>
          <text x="547" y="142" fill="#CBD5E1" font-size="9.5" text-anchor="middle">&amp; Oral Defence</text>

          <!-- Foundation Base -->
          <rect x="120" y="175" width="520" height="22" rx="4" fill="#F0B429"/>
          <text x="380" y="190" fill="#0A192F" font-family="JetBrains Mono, monospace" font-size="10" font-weight="700" text-anchor="middle">COLOSSIANS 1:17 &amp; PSALM 19:1 — ALL TRUTH HOLDS TOGETHER IN CHRIST</text>
        </svg>
      `;
    }

    return `
      <div style="margin: 1rem 0; padding: 1rem; background: var(--bg-ivory); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm);">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.4rem; margin-bottom:0.55rem;">
          <span class="mono-label" style="color:var(--navy-800);">📐 INTERACTIVE VISUAL DIAGRAM &amp; CONCEPT BLUEPRINT (${escapeXml(code)} · WEEK ${weekNum})</span>
          <span class="badge badge-gold">Visual Learning Aid</span>
        </div>
        <h4 style="font-family:var(--font-serif); font-size:1.15rem; color:var(--navy-900); margin-bottom:0.45rem;">${escapeXml(diagramTitle)}</h4>
        ${diagramSvg}
        <p style="font-size:0.82rem; color:var(--text-secondary); margin-top:0.45rem;">${escapeXml(diagramCaption)}</p>
      </div>
    `;
  };
})();
