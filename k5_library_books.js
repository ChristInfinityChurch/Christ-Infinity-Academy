// Christ Infinity Academy — K–5 Digital Library Expansion (14 Complete Multi-Chapter Illustrated eBooks)
// Adds 6 Early Reader Books (Grades K–2) and 8 Upper Elementary Chapter Books (Grades 3–5) with Read-Aloud & Family Discussion Prompts.

(function () {
  const dataRef =
    typeof INITIAL_ACADEMY_DATA !== "undefined"
      ? INITIAL_ACADEMY_DATA
      : window.INITIAL_ACADEMY_DATA;
  if (!dataRef) return;
  if (!Array.isArray(dataRef.libraryBooks)) dataRef.libraryBooks = [];

  const K5_LIBRARY_BOOKS = [
    // ==================== GRADES K–2 EARLY READERS (6 BOOKS) ====================
    {
      id: "book-k5-griffin",
      title: "Barnaby the Brave Little Griffin",
      author: "Ms. Clara Grace · Christ Infinity Press",
      shelf: "K–5 Early Readers & Storybooks",
      readingLevel: "K",
      courseCode: "ELA-100 · Character & Phonics",
      pages: 24,
      description: "Meet Barnaby, the youngest golden griffin at Crestwood Academy, as he learns that true courage means taking one small, faithful step at a time.",
      chapters: [
        {
          title: "Chapter 1: Big Wings, Small Steps",
          content: `<p>High above a sunny valley sat a stone tower with gold banners fluttering in the breeze. Inside lived Barnaby—the smallest golden griffin in the whole school. Barnaby had soft amber feathers, bright eagle eyes, and paws that were still a little too big for his legs.</p>
          <p>Every morning, the older griffins swooped across the meadow. Barnaby watched from the soft green grass and whispered, "What if my wings aren't ready yet?"</p>
          <p>His mother smiled warmly and nudged his shoulder. "Every big flyer starts with one small hop, Barnaby. Courage does not mean never feeling nervous—it means trying even when your knees wiggle!"</p>
          <div class="lesson-callout"><strong>Word Watch:</strong> <em>Courage</em> (being brave even when something feels new) · <em>Flutter</em> (moving gently in the wind).<br/><strong>Talk About It:</strong> What is something new you were nervous to try at first, and how did you practice it?</div>`
        },
        {
          title: "Chapter 2: The Lost Sparrow on Oak Hill",
          content: `<p>After lunch, Barnaby heard a tiny chirp near the rocky stream. A baby sparrow had tumbled out of a low oak branch and could not hop back over the wet pebbles.</p>
          <p>Barnaby looked at the wide stream. He flapped once. He flapped twice. With a joyful whoosh, he glided just three feet across the sparkling water, tucked the little sparrow gently on his warm golden back, and hopped safely back to the dry mossy bank!</p>
          <p>"You did it!" chirped the mother sparrow from the oak tree. Barnaby beamed. Helping a friend had made him forget all about being scared.</p>
          <div class="lesson-callout"><strong>Big Lesson:</strong> Focusing on how we can help someone else makes our own fears shrink right down!</div>`
        },
        {
          title: "Chapter 3: The Golden Crest Promise",
          content: `<p>That evening, the Academy Bell rang across the valley. Barnaby stood tall beside his classmates as the sunset painted the clouds navy and gold. He still had plenty to learn, and his paws were still growing—but now he knew a wonderful secret.</p>
          <p>With patience, kindness, and steady daily practice, even the littlest griffin can soar high and serve others well!</p>
          <div class="lesson-callout"><strong>Memory Verse:</strong> Joshua 1:9 — "Be strong and of a good courage; be not afraid."</div>`
        }
      ]
    },
    {
      id: "book-k5-noah",
      title: "Noah's Floating Zoo: Counting & Animal Friends",
      author: "Ms. Clara Grace · Christ Infinity Press",
      shelf: "K–5 Early Readers & Storybooks",
      readingLevel: "K",
      courseCode: "THEO-100 & MATH-100",
      pages: 28,
      description: "Count by twos with giraffes, turtles, owls, and elephants while discovering how Noah obeyed God and saw the first shining rainbow promise.",
      chapters: [
        {
          title: "Chapter 1: Hammer, Saw, and Trust",
          content: `<p>Tap, tap, tap! Saw, saw, saw! Noah and his three sons worked together under a bright blue sky, building a giant wooden boat called an ark. Neighbors laughed because there wasn't even a cloud in sight—yet Noah trusted God's word and kept building board by board.</p>
          <p>Soon, footsteps pattered down the hill. Two fuzzy lambs trotted up the ramp (2!). Then two tall giraffes ducked their long necks inside (4!). Next came two spotted cheetahs (6!), two gray elephants (8!), and two cheerful penguins waddling side by side (10!).</p>
          <div class="lesson-callout"><strong>Count by 2s Together:</strong> 2, 4, 6, 8, 10, 12, 14, 16, 18, 20!</div>`
        },
        {
          title: "Chapter 2: Raindrops on the Roof",
          content: `<p>Drip, drop, splash! For forty days and forty nights, rain danced on the sturdy wooden roof. Inside the cozy ark, everyone was dry and safe. Noah fed hay to the horses, crunchy carrots to the bunnies, and crisp apples to the bears.</p>
          <p>Even during the biggest storm, God remembered Noah and every creature inside the ark.</p>`
        },
        {
          title: "Chapter 3: The Rainbow Across the Sky",
          content: `<p>One bright morning, Noah sent out a little white dove. When she flew back carrying a fresh green olive leaf in her beak, Noah's family cheered—dry land was ready!</p>
          <p>As the animals bounded out onto the fresh green grass, God painted a glowing seven-color rainbow across the clouds as His faithful promise of love and care.</p>
          <div class="lesson-callout"><strong>Colors of the Rainbow:</strong> Red, Orange, Yellow, Green, Blue, Indigo, Violet!</div>`
        }
      ]
    },
    {
      id: "book-k5-seed",
      title: "The Seed That Wanted to Touch the Sky",
      author: "Dr. Miriam Chen · Young Naturalist Press",
      shelf: "Historical & Science Narrative",
      readingLevel: "1",
      courseCode: "SCI-100 · Plant Life Cycles",
      pages: 30,
      description: "Follow Pip, a tiny sunflower seed buried in dark garden soil, as she discovers roots, stems, sunlight, pollination, and how God designs plants to grow.",
      chapters: [
        {
          title: "Chapter 1: Sleeping Underground",
          content: `<p>Pip was a striped sunflower seed no bigger than a child's fingernail. One cool spring morning, gentle hands tucked Pip one inch deep into warm, dark garden soil and watered her with a blue watering can.</p>
          <p>"It's so dark down here!" Pip wondered. "How will I ever see the sky?" Yet inside Pip's hard little shell slept a tiny baby plant and a packed lunch of plant food waiting for two secret keys: <strong>warmth</strong> and <strong>water</strong>.</p>`
        },
        {
          title: "Chapter 2: Down Go the Roots, Up Goes the Stem",
          content: `<p>First, Pip sent a fuzzy white <strong>root</strong> downward into the soil—just like an anchor holding a boat steady and a straw sipping up water and minerals! Only after her roots grew strong did a bright green <strong>sprout</strong> push upward through the crust to feel the warm morning sun.</p>
          <p>Two crisp green <strong>leaves</strong> unfolded like tiny solar panels, using sunlight, water, and air to make sweet plant food through an amazing process called <strong>photosynthesis</strong>.</p>
          <div class="lesson-callout"><strong>Young Scientist Check:</strong> What 4 things do plants need to grow? Sunlight, Water, Air, and Soil/Nutrients!</div>`
        },
        {
          title: "Chapter 3: A Crown of Gold for the Bees",
          content: `<p>By late summer, tiny Pip stood six feet tall—taller than a grown-up! Her bright yellow petals opened like a golden crown facing the morning sun. Fuzzy honeybees buzzed happily from flower to flower, helping Pip grow hundreds of brand-new seeds to share next spring.</p>`
        }
      ]
    },
    {
      id: "book-k5-compass",
      title: "Milo and the Mystery of the Missing Compass",
      author: "Prof. Eleanor Sterling · Griffin Readers",
      shelf: "Mystery & Detective",
      readingLevel: "1",
      courseCode: "HIST-100 & ELA-100 · Maps & Directions",
      pages: 32,
      description: "Grab your detective notebook! Join Milo and his dog Scout as they follow North, South, East, and West clues across the neighborhood to find Grandpa's brass compass.",
      chapters: [
        {
          title: "Chapter 1: Clue Number One on the Porch",
          content: `<p>Grandpa loved showing Milo how his shiny brass compass always pointed <strong>North</strong>. On Saturday morning, the velvet compass box on the porch table was empty—except for a folded yellow note!</p>
          <p>Milo read it aloud to Scout: <em>"Walk 10 steps EAST toward the sunrise. Look under the red birdhouse."</em> Milo grinned. "Grandpa set up a map mystery for us, Scout! The sun rises in the East—let's go!"</p>`
        },
        {
          title: "Chapter 2: North, South, East, and West",
          content: `<p>Under the red birdhouse sat Clue #2: <em>"Turn SOUTH toward the berry bushes. Count 6 stones along the garden path."</em> Milo remembered Grandpa's compass rhyme: <strong>Never Eat Soggy Waffles</strong> (North, East, South, West)!</p>
          <p>At the sixth flat stepping stone, Scout wagged his tail and sniffed a small wooden box tied with gold ribbon.</p>`
        },
        {
          title: "Chapter 3: The Explorer's Treasure",
          content: `<p>Inside the wooden box lay Grandpa's gleaming compass—plus a brand-new mini compass with Milo's own name engraved on the back! Grandpa stepped out from behind the apple tree laughing. "Every great explorer knows how to read directions, Milo. Ready to map the creek trail?"</p>
          <div class="lesson-callout"><strong>Map Tip:</strong> Remember <strong>N-E-S-W</strong> clockwise: <em>Never Eat Soggy Waffles!</em></div>`
        }
      ]
    },
    {
      id: "book-k5-aesop",
      title: "Aesop's Cozy Fables for Young Readers",
      author: "Adapted by Christ Infinity Academy Faculty",
      shelf: "Classical Great Book",
      readingLevel: "2",
      courseCode: "ELA-100 · Reading & Morals",
      pages: 36,
      description: "Beloved timeless fables retold in warm, clear Grade 2 language—including The Tortoise and the Hare, The Lion and the Mouse, and The Ant and the Grasshopper.",
      chapters: [
        {
          title: "Chapter 1: The Tortoise and the Hare",
          content: `<p>Hare loved bragging about how fast he could zoom across the clover field. "Nobody can beat me!" he boasted. Quiet Tortoise smiled and replied, "I will race you to the old willow tree."</p>
          <p>Hare bolted ahead like lightning—then decided he had plenty of time for a long nap under a shady bush. Meanwhile, Tortoise kept plodding step by steady step without stopping. When Hare finally woke up and sprinted to the finish line, Tortoise was already cheering beside the willow tree!</p>
          <div class="lesson-callout"><strong>Moral of the Fable:</strong> Slow, steady, faithful effort beats boastful shortcuts every single time.</div>`
        },
        {
          title: "Chapter 2: The Lion and the Little Mouse",
          content: `<p>A tiny gray mouse accidentally scurried across the nose of a sleeping lion. The mighty lion lifted his paw—but when the mouse politely begged for mercy and promised to help him someday, the lion chuckled kindly and let the little creature go.</p>
          <p>Days later, the lion became tangled in a heavy rope net. Hearing his roar, the tiny mouse hurried over and chewed cleanly through the ropes with his sharp little teeth until the great lion stepped free!</p>
          <div class="lesson-callout"><strong>Moral of the Fable:</strong> No act of kindness—no matter how small—is ever wasted.</div>`
        },
        {
          title: "Chapter 3: The Ant and the Grasshopper",
          content: `<p>All summer long, a line of diligent ants carried grains of wheat into their underground pantry while Grasshopper lounged on a leaf strumming songs and teasing them for working so hard. When crisp winter snow covered the meadow, Grasshopper shivered with an empty cupboard—and learned why planning ahead during sunny days brings peace when storms arrive.</p>
          <div class="lesson-callout"><strong>Bible Connection:</strong> Proverbs 6:6 — "Go to the ant... consider her ways, and be wise!"</div>`
        }
      ]
    },
    {
      id: "book-k5-bridge",
      title: "The Kindness Bridge: Stories of Sharing & Courage",
      author: "Ms. Clara Grace · Christ Infinity Press",
      shelf: "K–5 Early Readers & Storybooks",
      readingLevel: "2",
      courseCode: "THEO-100 & LIFE-101 · Character",
      pages: 34,
      description: "Three heartwarming everyday stories about siblings and neighbors who turn rainy afternoons and tricky disagreements into lasting friendships.",
      chapters: [
        {
          title: "Chapter 1: Two Scoops on a Hot Day",
          content: `<p>Caleb had saved three crisp dollar bills from helping sweep the driveway. At the park's ice cream cart, he noticed his new neighbor Leo sitting quietly on the bench because he had forgotten his coin pouch at home.</p>
          <p>Caleb checked the sign: one big waffle cone cost $3, or two small cups cost $1.50 each. Without hesitating, Caleb bought two small cups—one chocolate, one vanilla—and handed the vanilla cup to Leo with a grin. Somehow, sharing made the ice cream taste twice as sweet!</p>`
        },
        {
          title: "Chapter 2: The Broken Model Airplane",
          content: `<p>When Hannah accidentally bumped her older brother's desk and snapped the wing off his balsa-wood airplane, her tummy twisted into knots. She wanted to hide under her blanket—but she remembered that telling the truth right away builds trust.</p>
          <p>She walked straight to her brother, told him honestly what happened, and offered to help glue and sand the wing back together. Instead of staying upset, her brother thanked her for being brave and honest.</p>`
        },
        {
          title: "Chapter 3: Building Bridges Every Day",
          content: `<p>Every day gives us little chances to build a bridge of kindness: holding a door, welcoming a shy kid into a game, speaking truthfully, and cheering when a friend succeeds. Small habits of love change an entire neighborhood!</p>`
        }
      ]
    },

    // ==================== GRADES 3–5 UPPER ELEMENTARY CHAPTER BOOKS (8 BOOKS) ====================
    {
      id: "book-k5-lighthouse",
      title: "The Secret of the Lighthouse Cipher",
      author: "Dr. Alistair Sterling · Griffin Mystery Press",
      shelf: "Puzzle, Logic & Cipher",
      readingLevel: "3",
      courseCode: "ELA-501 & CS-051 · Logic & Codes",
      pages: 64,
      description: "When twins Jonah and Tessa discover a coded captain's logbook inside an old coastal lighthouse, they use Caesar shift ciphers, pattern logic, and multiplication clues to unlock a century-old time capsule.",
      chapters: [
        {
          title: "Chapter 1: The Brass Key in the Spiral Staircase",
          content: `<p>The wind off Cedar Point Lighthouse smelled like salt spray and pine needles. Ten-year-old twins Jonah and Tessa were helping their uncle inventory old maritime charts when Tessa spotted a loose wooden step on the 42nd stair.</p>
          <p>Tucked underneath lay a leather journal stamped <em>1924</em> and a strange line of letters: <strong>K H O S &nbsp; W K H &nbsp; I O H H W</strong>. "It's gibberish!" Jonah said—until Tessa noticed that shifting every letter backward by 3 steps in the alphabet turned <strong>K</strong> into <strong>H</strong>, <strong>H</strong> into <strong>E</strong>, <strong>O</strong> into <strong>L</strong>, and <strong>S</strong> into <strong>P</strong>!</p>
          <div class="lesson-callout"><strong>Try the Cipher Yourself!</strong> Shift each letter back 3 places: What does <strong>K H O S</strong> spell? (<em>HELP!</em>) That's called a <strong>Caesar Cipher</strong>—used in history and computer science!</div>`
        },
        {
          title: "Chapter 2: The Lamp Room Fraction Clue",
          content: `<p>The decoded diary revealed that Lighthouse Keeper Captain Morris had hidden a historical time capsule behind one of the 12 glass prism panels at the top of the tower. His clue read: <em>"Count 1/4 of the 12 panels clockwise from North, then add 2 more."</em></p>
          <p>Jonah pulled out his notebook. "One-fourth of 12 is 12 ÷ 4 = 3. Plus 2 more makes <strong>Panel #5</strong>!" Behind Panel #5 sat a waterproof copper cylinder sealed with wax.</p>`
        },
        {
          title: "Chapter 3: A Message Across One Hundred Years",
          content: `<p>With their uncle's permission, the twins carefully opened the cylinder. Inside weren't pirate jewels—something even better: hand-drawn constellation maps, silver 1924 half-dollars, and a letter from Captain Morris thanking future young explorers for keeping curiosity, honesty, and math alive!</p>`
        }
      ]
    },
    {
      id: "book-k5-david",
      title: "Young David: Shepherd Boy to Courageous King",
      author: "Rev. Dr. Marcus Vance · Living Scripture Series",
      shelf: "Adventure & Expedition",
      readingLevel: "3",
      courseCode: "THEO-501 · Old Testament Heroes",
      pages: 72,
      description: "Walk the sunlit hills of Bethlehem with young David—learning how faithfulness in quiet chores, singing Psalms under the stars, and trusting God prepared him to face Goliath.",
      chapters: [
        {
          title: "Chapter 1: Faithfulness in the Quiet Hills",
          content: `<p>Long before anyone called David a king, he was the youngest of eight brothers watching sheep on the rocky hills outside Bethlehem. Nobody clapped when he guided thirsty lambs to clear streams or practiced songs on his wooden harp under the stars.</p>
          <p>Yet God was watching closely. When a fierce lion and a bear threatened the flock, David trusted the Lord and protected his sheep courageously. Faithful habits in small hidden moments prepare us for big moments later!</p>`
        },
        {
          title: "Chapter 2: Five Smooth Stones in the Valley of Elah",
          content: `<p>When David delivered bread and cheese to his older brothers at the army camp, the entire battlefield stood frozen in fear before a towering Philistine champion named Goliath. King Saul offered David heavy bronze armor, but it was far too big.</p>
          <p>Instead, David walked down to the brook, chose five smooth stones, and stepped forward with his shepherd's sling—saying boldly, "The battle is the LORD's!" One steady stone flew true, proving that courage rests not in our size, but in God's strength.</p>`
        },
        {
          title: "Chapter 3: The Shepherd's Song (Psalm 23)",
          content: `<p>Even after becoming Israel's king, David never forgot what it meant to be cared for by the Good Shepherd. His beloved song—<em>"The LORD is my shepherd; I shall not want"</em>—still brings comfort and courage to kids and families around the entire world three thousand years later.</p>`
        }
      ]
    },
    {
      id: "book-k5-treehouse",
      title: "The Treehouse Inventors' Science Lab",
      author: "Dr. Miriam Chen · Young Naturalist Press",
      shelf: "Historical & Science Narrative",
      readingLevel: "4",
      courseCode: "SCI-501 · Experiments & Engineering",
      pages: 78,
      description: "Join Maya, Eli, and Sam inside their backyard treehouse lab as they build pulley elevators, test battery circuits, launch baking-soda rockets, and master the Scientific Method.",
      chapters: [
        {
          title: "Chapter 1: The Pulley Snack Elevator",
          content: `<p>Climbing a twelve-foot ladder while carrying a tray of peanut-butter sandwiches is a recipe for upside-down snacks! So fourth-graders Maya and Eli decided to engineer a backyard <strong>pulley elevator</strong>.</p>
          <p>Their first rope rubbed hard against a rough tree branch—too much <strong>friction</strong>! Adding a smooth spinning pulley wheel reduced friction immediately, letting them hoist a five-pound picnic basket effortlessly with one hand.</p>
          <div class="lesson-callout"><strong>Science Principle:</strong> Simple machines (pulleys, levers, inclined planes) change the direction or amount of force needed to do work!</div>`
        },
        {
          title: "Chapter 2: The Mystery of the Unlit Bulb",
          content: `<p>Next, the team wired a tiny flashlight bulb to a D-cell battery for evening club meetings. Nothing glowed! Using the Scientific Method, they checked one variable at a time: battery fresh? Yes. Bulb intact? Yes. Then Sam spotted a gap where the copper wire didn't touch the metal base—an <strong>open circuit</strong>! The moment they closed the loop, warm golden light filled the treehouse.</p>`
        },
        {
          title: "Chapter 3: Fair Tests & Honest Notebooks",
          content: `<p>When they tested which paper airplane wing shape flew farthest from the treehouse deck, they kept the paper weight, launch height, and throw strength identical—changing ONLY the wing fold. Recording every flight in meters taught them that real engineering is patience, measurement, and teamwork.</p>`
        }
      ]
    },
    {
      id: "book-k5-continents",
      title: "Voyage Across the Seven Continents",
      author: "Prof. Eleanor Sterling · World Explorer Press",
      shelf: "Adventure & Expedition",
      readingLevel: "4",
      courseCode: "HIST-501 · World Geography",
      pages: 84,
      description: "Pack your passport for a vivid geographic expedition across North America, South America, Europe, Africa, Asia, Australia, and Antarctica—discovering rivers, mountains, ecosystems, and cultures.",
      chapters: [
        {
          title: "Chapter 1: From the Amazon Rainforest to the Nile",
          content: `<p>Earth is home to <strong>seven continents</strong> and <strong>five great oceans</strong>. Starting in South America, the mighty Amazon River winds through the world's largest tropical rainforest—home to toucans, jaguars, and millions of plant species.</p>
          <p>Crossing the Atlantic Ocean to Africa, you meet the Nile River—stretching over 4,100 miles northward through Egypt—and the sweeping savannas of Kenya and Tanzania.</p>`
        },
        {
          title: "Chapter 2: Himalayas, Alps & the Australian Outback",
          content: `<p>In Asia—the largest continent by both land and population—Mount Everest pierces the sky at 29,031 feet above sea level in the Himalayas. Westward across Europe, historic rivers like the Danube and Thames link centuries of architecture, science, and classical music. Down in the Southern Hemisphere, Australia's Great Barrier Reef glows with coral reefs visible from space!</p>`
        },
        {
          title: "Chapter 3: Penguins & Research Stations of Antarctica",
          content: `<p>At the very bottom of the globe lies icy Antarctica—the coldest, windiest, and driest continent on Earth. No country owns it; instead, scientists from around the world cooperate there to study glaciers, weather patterns, and emperor penguins.</p>`
        }
      ]
    },
    {
      id: "book-k5-lemonade",
      title: "The Lemonade Stand Millionaires: A Kids Money & Math Adventure",
      author: "Prof. Marcus Vance · Griffin Practical Finance",
      shelf: "Core Course Textbook",
      readingLevel: "5",
      courseCode: "MATH-501 & LIFE-101 · Math & Entrepreneurship",
      pages: 88,
      description: "How three 5th-grade friends turn $20 of startup savings into a thriving summer neighborhood business while learning real-world decimals, profit vs. revenue, budgeting, saving, and generous giving.",
      chapters: [
        {
          title: "Chapter 1: Revenue Is NOT Profit!",
          content: `<p>On Saturday morning, fifth-graders Jordan, Chloe, and Ben sold 40 cups of ice-cold fresh lemonade at $1.50 per cup. "We made $60!" Ben cheered, counting the bills.</p>
          <p>"Hold on!" Jordan smiled, opening their ledger notebook. "That $60 is our <strong>Revenue</strong> (total sales). First we have to subtract our <strong>Expenses</strong>: $12 for lemons, $4 for sugar, $3 for ice, and $5 for paper cups = $24 total costs. So <code>$60 − $24 = $36</code>—our real <strong>Profit</strong> is $36!"</p>
          <div class="lesson-callout"><strong>Golden Business Equation:</strong> <code>Profit = Revenue (Sales) − Expenses (Costs)</code>. Never spend your revenue before paying your costs!</div>`
        },
        {
          title: "Chapter 2: The Three-Jar System (Give, Save, Reinvest)",
          content: `<p>Instead of blowing all $36 on candy, the team set up three labeled glass jars:<br/>• <strong>10% Give Jar ($3.60):</strong> Helping a local food pantry.<br/>• <strong>40% Save Jar ($14.40):</strong> Long-term savings and future college or trade tools.<br/>• <strong>50% Reinvest Jar ($18.00):</strong> Buying supplies for next Saturday PLUS fresh mint and strawberries for a premium $2.00 drink!</p>`
        },
        {
          title: "Chapter 3: Service, Integrity & Repeat Customers",
          content: `<p>By Week 4, neighbors walked two extra blocks just to visit their stand. Why? Not just because the lemonade was cold—because the stand was spotless, their change math was 100% honest, and they greeted every customer with a genuine smile and a "Thank you!"</p>`
        }
      ]
    },
    {
      id: "book-k5-whispering",
      title: "The Whispering Woods: Quest for the Golden Feather",
      author: "Prof. Eleanor Sterling · Griffin Chronicles",
      shelf: "Adventure & Expedition",
      readingLevel: "5",
      courseCode: "ELA-501 · Plot, Theme & Allegory",
      pages: 96,
      description: "An unforgettable Grade 5 allegorical adventure following twelve-year-old Rowan across misty bridges, riddling stone gates, and mountain ridges in search of truth, loyalty, and the legendary Golden Feather.",
      chapters: [
        {
          title: "Chapter 1: The Lantern at the Edge of the Pines",
          content: `<p>A silver mist curled between the tall evergreens on the edge of Cresthaven Valley. Rowan gripped the brass lantern his grandfather had entrusted to him. "Never trade truth for an easy shortcut," his grandfather had said. "Follow the narrow ridge path even when the fog thickens."</p>
          <p>Ahead, the forest split into two trails: a wide, paved road lined with glittering carnival lanterns and laughter, and a quiet mossy footpath winding upward toward the sunlit peaks.</p>`
        },
        {
          title: "Chapter 2: The Riddle of the Stone Arch",
          content: `<p>At the crossing of the Whispering River stood an ancient stone arch carved with three lines: <em>"I weigh nothing at all, yet no treasure chest can buy me. Broken once, I take patience to mend. What am I?"</em></p>
          <p>Rowan paused, thinking carefully about his grandfather's advice. "<strong>Trust!</strong>" he spoke clearly. With a gentle chime, the wooden drawbridge lowered smoothly across the rushing creek.</p>`
        },
        {
          title: "Chapter 3: The Summit Sunrise",
          content: `<p>When Rowan finally reached the sunlit crest above the clouds, a golden griffin feather gleamed beside an ancient oak—and beneath it lay a view of the entire valley bathed in warm morning light. The true treasure wasn't just the feather in his hand; it was the steadfast wisdom he had built along every single mile of the climb.</p>`
        }
      ]
    },
    {
      id: "book-k5-america",
      title: "Heroes of Early America: Courage, Maps & Liberty",
      author: "Prof. Eleanor Sterling · American Heritage Series",
      shelf: "Historical & Science Narrative",
      readingLevel: "5",
      courseCode: "HIST-501 · U.S. History & Civics",
      pages: 92,
      description: "Engaging living-history biographies of George Washington, Phillis Wheatley, Benjamin Franklin, Abigail Adams, and Harriet Tubman—written specifically for Grade 4–5 readers.",
      chapters: [
        {
          title: "Chapter 1: Crossing the Icy Delaware & Holding Together",
          content: `<p>On a freezing December night in 1776, sleet stung the faces of exhausted American soldiers huddled along the Delaware River. Almost everyone expected the new nation's fight for liberty to collapse by spring. Yet General George Washington stood right beside his troops in the storm, showing steady resolve that turned the tide of history.</p>`
        },
        {
          title: "Chapter 2: Three Branches & Checks and Balances",
          content: `<p>After winning independence, America's founders faced an even tougher puzzle: how do you build a government strong enough to keep peace, yet limited enough that no single ruler can become a tyrant? In 1787, the U.S. Constitution split power across <strong>three separate branches</strong>—Congress (makes laws), the President (carries out laws), and the Courts (interprets laws)—so each branch checks the others!</p>`
        },
        {
          title: "Chapter 3: Harriet Tubman & the North Star",
          content: `<p>Using courage, sharp wit, and the steady North Star high in the night sky, Harriet Tubman risked her own freedom nineteen times to guide families out of slavery along the Underground Railroad—never losing a single passenger. True heroes use their freedom to lift others up.</p>`
        }
      ]
    },
    {
      id: "book-k5-stargazer",
      title: "The Young Star-Gazer's Guide to Planets & Galaxies",
      author: "Dr. Miriam Chen · Observatory Press",
      shelf: "Historical & Science Narrative",
      readingLevel: "5",
      courseCode: "SCI-501 · Space & Astronomy",
      pages: 86,
      description: "Blast off from Earth past Mars's dusty canyons, Saturn's icy rings, and blazing nebulae—learning orbits, gravity, lunar phases, and how to spot constellations from your own backyard!",
      chapters: [
        {
          title: "Chapter 1: Four Rocky Neighbors Close to the Sun",
          content: `<p>Our Solar System has <strong>eight planets</strong> orbiting our star, the Sun. The four inner planets—<strong>Mercury, Venus, Earth, and Mars</strong>—are made of solid rock and metal. Earth sits right in the perfect "Goldilocks Zone": not too scorching hot like Venus, not too freezing cold like Mars, with liquid oceans and a breathable atmosphere designed for life!</p>`
        },
        {
          title: "Chapter 2: The Giant Outer Worlds",
          content: `<p>Beyond the Asteroid Belt spin four colossal worlds: <strong>Jupiter</strong> (so huge over 1,300 Earths could fit inside it!), <strong>Saturn</strong> (crowned with thousands of gleaming ice-and-rock rings), tilted <strong>Uranus</strong>, and deep-blue windy <strong>Neptune</strong>.</p>
          <div class="lesson-callout"><strong>Planet Order Memory Trick:</strong> <em>My Very Educated Mother Just Served Us Noodles</em> (Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune)!</div>`
        },
        {
          title: "Chapter 3: Backyard Constellations & Lunar Phases",
          content: `<p>Step outside on a clear evening and look north to spot the <strong>Big Dipper</strong>—its two front bowl stars point straight to <strong>Polaris, the North Star</strong>! Watch the Moon each night for 29 days and you'll see it cycle smoothly from New Moon → Crescent → First Quarter → Full Moon and back again—not because the Moon changes shape, but because we see different amounts of its sunlit side as it orbits Earth.</p>`
        }
      ]
    }
  ];

  // Prepend K–5 books cleanly or append without duplicates
  K5_LIBRARY_BOOKS.forEach((bk) => {
    if (!dataRef.libraryBooks.some((existing) => existing.id === bk.id)) {
      dataRef.libraryBooks.push(bk);
    }
  });
})();
