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
    },

    // ==================== 8 MORE K–5 BOOKS (22 K–5 BOOKS TOTAL!) ====================
    {
      id: "book-k5-daniel",
      title: "Daniel and the Sleepy Lions",
      author: "Ms. Clara Grace · Living Scripture Press",
      shelf: "K–5 Early Readers & Storybooks",
      readingLevel: "K",
      courseCode: "THEO-100 · Courage & Prayer",
      pages: 26,
      description: "Even when tricky leaders passed an unfair rule, Daniel kept praying to God three times a day—and discovered that God's angel could keep even roaring lions as gentle as kittens!",
      chapters: [
        {
          title: "Chapter 1: Three Prayers by the Window",
          content: `<p>Daniel loved God with his whole heart. Every morning, noon, and night, Daniel knelt beside his open window and thanked God for His goodness. King Darius trusted Daniel because he was honest, hardworking, and kind.</p>`
        },
        {
          title: "Chapter 2: The Unfair Law",
          content: `<p>Jealous men tricked the king into signing a rule that nobody could pray to God for thirty days. Daniel knew obeying God came first—so he calmly knelt by his window and prayed anyway, trusting God with whatever happened next.</p>`
        },
        {
          title: "Chapter 3: Safe Until Sunrise",
          content: `<p>All night inside the lions' den, God sent His angel to shut the lions' mouths. When King Darius ran to the stone opening at dawn, Daniel called out cheerfully, "My God sent His angel—not even a scratch is on me!" True faith gives us calm courage every day.</p>`
        }
      ]
    },
    {
      id: "book-k5-ant",
      title: "The Brave Little Ant Who Built a Bridge",
      author: "Dr. Miriam Chen · Young Naturalist Press",
      shelf: "K–5 Early Readers & Storybooks",
      readingLevel: "1",
      courseCode: "SCI-100 · Insects & Teamwork",
      pages: 28,
      description: "Explore the bustling underground tunnels of an ant colony as tiny Kip discovers how ants lift 20 times their weight and link together to cross a puddle.",
      chapters: [
        {
          title: "Chapter 1: Tiny Feet, Mighty Muscles",
          content: `<p>Kip was smaller than a grain of rice, yet she could carry a bread crumb twenty times heavier than herself! Inside the warm sandy hill, every ant had an important job: nursery helpers, tunnel builders, and food scouts.</p>`
        },
        {
          title: "Chapter 2: The Raindrop River",
          content: `<p>After a quick spring shower, a wide puddle blocked the trail back to the anthill. Alone, no single ant could leap across. So Kip and twelve friends hooked their tiny legs together, forming a living bridge so the whole food-carrying team walked safely across!</p>`
        },
        {
          title: "Chapter 3: Stronger Together",
          content: `<p>When families and classmates encourage one another and share the work, big obstacles turn into teamwork victories. God designed even the tiniest creatures with remarkable wisdom!</p>`
        }
      ]
    },
    {
      id: "book-k5-bakery",
      title: "Penny the Penguin's Fraction Bakery",
      author: "Dr. Alistair Sterling · Early Math Stories",
      shelf: "K–5 Early Readers & Storybooks",
      readingLevel: "2",
      courseCode: "MATH-100 · Halves, Thirds & Quarters",
      pages: 34,
      description: "Step inside Penny's cozy snowy bakery where cutting blueberry pies into halves (1/2), thirds (1/3), and fourths (1/4) makes fractions delicious and easy to picture!",
      chapters: [
        {
          title: "Chapter 1: Equal Slices Only!",
          content: `<p>Penny tied on her striped apron as two hungry seals waddled through the door. "One blueberry pie cut in <strong>half</strong>, please!" Penny sliced right down the middle so both pieces were the <strong>exact same size</strong>—two halves (2/2) make one whole pie!</p>`
        },
        {
          title: "Chapter 2: Four Friends Mean Quarters",
          content: `<p>Next came four puffins sharing one warm cinnamon flatbread. Penny made one straight cut up-and-down and one straight cut side-to-side, making <strong>4 equal fourths (quarters)</strong>. Each puffin received <strong>1/4</strong> of the flatbread!</p>`
        },
        {
          title: "Chapter 3: Which Slice Is Bigger—1/2 or 1/4?",
          content: `<p>Little Pip looked puzzled: "4 is bigger than 2, so is 1/4 bigger than 1/2?" Penny held up both slices side by side. "When you share one pie with MORE friends, each slice gets SMALLER—so <strong>1/2 is bigger than 1/4</strong>!" Pip grinned and took a happy bite.</p>`
        }
      ]
    },
    {
      id: "book-k5-esther",
      title: "Courageous Queen Esther: Standing Up for Others",
      author: "Rev. Dr. Marcus Vance · Living Scripture Series",
      shelf: "Adventure & Expedition",
      readingLevel: "3",
      courseCode: "THEO-501 · Old Testament Courage",
      pages: 68,
      description: "Discover how young Esther used wisdom, fasting, prayer, and quiet bravery to save her entire people—learning what 'for such a time as this' means today.",
      chapters: [
        {
          title: "Chapter 1: From Quiet Orphan to Palace Queen",
          content: `<p>Raised faithfully by her cousin Mordecai in the Persian capital of Susa, Esther never sought fame or gold. Yet through God's quiet providence, she was chosen as queen—right before a dangerous plot threatened her entire people.</p>`
        },
        {
          title: "Chapter 2: 'For Such a Time as This'",
          content: `<p>Mordecai sent Esther an unforgettable message: <em>"Who knoweth whether thou art come to the kingdom for such a time as this?"</em> Instead of rushing blindly, Esther asked her people to pray and fast for three days while she planned wisely.</p>`
        },
        {
          title: "Chapter 3: Wisdom Wins Over Pride",
          content: `<p>Stepping bravely before the king with grace and truthfulness, Esther exposed Haman's wicked scheme and rescued her nation. God still places young people in their families and schools to stand up kindly and bravely for what is right!</p>`
        }
      ]
    },
    {
      id: "book-k5-maple",
      title: "The Math Detectives of Maple Street",
      author: "Dr. Alistair Sterling · Griffin Mystery Press",
      shelf: "Mystery & Detective",
      readingLevel: "3",
      courseCode: "MATH-501 · Multiplication & Division Mystery",
      pages: 70,
      description: "When the neighborhood harvest festival prize jar goes missing, three clever kids use multiplication arrays, division remainders, and elapsed-time clues to crack the case!",
      chapters: [
        {
          title: "Chapter 1: Clues in the Cookie Trays",
          content: `<p>Detective Mia noticed 4 rows of 6 chocolate-chip cookies on the festival table (<code>4 × 6 = 24</code>), but three cookies were missing—leaving muddy paw prints leading toward the oak gazebo!</p>`
        },
        {
          title: "Chapter 2: The 2:15 PM Timeline",
          content: `<p>Mr. Brooks saw the prize jar safe at 1:45 PM. When Mia arrived 40 minutes later at <strong>2:25 PM</strong>, only a shiny red ribbon remained. Checking elapsed time narrowed down the exact 10-minute window!</p>`
        },
        {
          title: "Chapter 3: Dividing the Evidence",
          content: `<p>Following the trail to the community garden shed, the detectives found Barnaby the golden retriever proudly guarding the unopened jar—which he had carried out of the rain! Math, logic, and careful observation solved the whole mystery cleanly.</p>`
        }
      ]
    },
    {
      id: "book-k5-ocean",
      title: "Wonders of the Ocean Deep: Coral Reefs to Trench Explorers",
      author: "Dr. Miriam Chen · Observatory & Ocean Press",
      shelf: "Historical & Science Narrative",
      readingLevel: "4",
      courseCode: "SCI-501 · Marine Ecosystems",
      pages: 82,
      description: "Dive from sunlit coral gardens down into the glowing Midnight Zone—discovering sea turtles, bioluminescent fish, ocean currents, and deep-sea submersibles!",
      chapters: [
        {
          title: "Chapter 1: The Sunlit Zone & Coral Cities",
          content: `<p>In the top 650 feet of the ocean, bright sunlight powers tiny marine plants called phytoplankton—producing over half of the oxygen we breathe! Colorful coral reefs act like underwater cities sheltering clownfish, sea turtles, and octopuses.</p>`
        },
        {
          title: "Chapter 2: The Twilight & Midnight Zones",
          content: `<p>Deeper than 3,000 feet, sunlight fades completely and water pressure grows immense. Yet God equipped deep-sea creatures like lanternfish and anglerfish with <strong>bioluminescence</strong>—their own natural living glow-lights!</p>`
        },
        {
          title: "Chapter 3: Protecting God's Seas",
          content: `<p>Using sonar mapping and robotic submersibles, oceanographers continue discovering brand-new species every year. Keeping plastic out of streams and beaches helps steward these remarkable ocean ecosystems.</p>`
        }
      ]
    },
    {
      id: "book-k5-robot",
      title: "Maya's First Robot: A Kids Coding Adventure",
      author: "Prof. Elena Rostova · Griffin STEM Press",
      shelf: "Puzzle, Logic & Cipher",
      readingLevel: "4",
      courseCode: "CS-051 · Algorithms, Loops & Debugging",
      pages: 76,
      description: "Follow fourth-grader Maya as she programs a mini rover named Bolt to navigate a living-room obstacle course using algorithms, loops, variables, and fearless debugging!",
      chapters: [
        {
          title: "Chapter 1: Computers Take Everything Literally!",
          content: `<p>Maya typed <code>MOVE_FORWARD(10)</code> and watched Bolt zoom straight into a sofa pillow! Laughing, she realized a golden rule of coding: robots don't guess what you meant—they do EXACTLY what your algorithm tells them.</p>`
        },
        {
          title: "Chapter 2: Loops Save Your Fingers",
          content: `<p>To make Bolt drive in a perfect square, Maya realized she didn't need 8 separate commands—she wrapped <code>FORWARD(4); TURN_RIGHT(90)</code> inside a <strong>REPEAT 4 TIMES</strong> loop! Four clean lines did all the work.</p>`
        },
        {
          title: "Chapter 3: Sensors & Smart If/Else Decisions",
          content: `<p>Adding a front bump sensor unlocked <code>IF obstacle_detected THEN turn_left ELSE move_forward</code>. Suddenly Bolt navigated the entire maze autonomously—teaching Maya that every great app starts with simple logic blocks.</p>`
        }
      ]
    },
    {
      id: "book-k5-asl",
      title: "Hands That Speak: Adventures in American Sign Language",
      author: "Ms. Hannah Mercer, NIC · Griffin Languages",
      shelf: "Adventure & Expedition",
      readingLevel: "5",
      courseCode: "ASL-101 · ASL & Friendship",
      pages: 80,
      description: "When Deaf transfer student Mateo joins the community robotics club, fifth-grader Eli learns fingerspelling, facial grammar, and Deaf history—discovering a lifelong friendship.",
      chapters: [
        {
          title: "Chapter 1: Saying Hello Without a Single Word",
          content: `<p>On Monday afternoon, Eli practiced three ASL signs in front of his mirror: <strong>HELLO</strong>, <strong>MY NAME E-L-I</strong>, and <strong>NICE-MEET-YOU</strong>. When he greeted Mateo at the robotics table, Mateo's face lit up with a huge smile!</p>`
        },
        {
          title: "Chapter 2: Eyebrows Tell the Story",
          content: `<p>Mateo patiently showed Eli that ASL isn't just hands—your face carries grammar! Raising eyebrows turned <em>YOU LIKE CODING?</em> into a clear Yes/No question, while furrowing eyebrows gently asked <em>WHAT TEAM NAME?</em></p>`
        },
        {
          title: "Chapter 3: Laurent Clerc & a Rich Heritage",
          content: `<p>Together the friends researched Laurent Clerc and Thomas Gallaudet, who opened America's first permanent Deaf school in 1817. By the end of the season, the entire robotics club was signing cheers together!</p>`
        }
      ]
    },

    // ==================== 8 NEW MIDDLE, HIGH SCHOOL & CAREER LIBRARY BOOKS (60+ TOTAL!) ====================
    {
      id: "book-hs-realestate",
      title: "The Young Real Estate Investor's Field Guide",
      author: "Prof. Marcus Vance · Career & Licensing Press",
      shelf: "Core Course Textbook",
      readingLevel: "10",
      courseCode: "REAL-301 · Real Estate & Cash Flow",
      pages: 148,
      description: "Plain-English handbook covering deeds, agency fiduciary duties (OLD CAR), purchase contracts, mortgage math, Cap Rate, and honest property management.",
      chapters: [
        {
          title: "Chapter 1: How Real Estate Licensing & Ownership Work",
          content: `<p>Real estate is one of the few high-income careers you can launch right after high school without four years of college debt. Understanding <strong>Fee Simple ownership</strong>, deeds, title insurance, and zoning laws builds the bedrock for both licensed salespersons and investors.</p>`
        },
        {
          title: "Chapter 2: Underwriting a Deal (NOI & Cap Rate)",
          content: `<p>Smart investors never buy on emotion—they run the numbers. Subtract operating expenses (taxes, insurance, repairs, vacancy) from annual rent to get <strong>Net Operating Income (NOI)</strong>, then divide <code>NOI ÷ Purchase Price = Cap Rate</code> to compare properties objectively.</p>`
        },
        {
          title: "Chapter 3: Fiduciary Integrity (OLD CAR)",
          content: `<p>Licensed agents owe clients six legal and ethical duties summarized by <strong>OLD CAR</strong>: <em>Obedience, Loyalty, Disclosure, Confidentiality, Accounting, and Reasonable Care</em>. Treating every buyer and seller with transparent honesty builds a career that thrives for decades.</p>`
        }
      ]
    },
    {
      id: "book-hs-investing",
      title: "Smart Teen's Guide to Stocks, Index Funds & Crypto Safety",
      author: "Dr. Alistair Sterling · Capital Markets Press",
      shelf: "Core Course Textbook",
      readingLevel: "10",
      courseCode: "FIN-305 · Investing & Digital Assets",
      pages: 142,
      description: "Master compound interest, Roth IRAs, diversified S&P 500 index ETFs, reading balance sheets, how Bitcoin & blockchains actually work, and cold-storage scam defense.",
      chapters: [
        {
          title: "Chapter 1: The Eighth Wonder — Compound Growth",
          content: `<p>Starting early beats trying to pick lucky hot stocks. Investing $200/month consistently into a low-cost diversified index fund starting at age 18 can grow past $1 million by retirement through steady compounding—patience and discipline beat hype every time.</p>`
        },
        {
          title: "Chapter 2: Reading What You Own (Stocks vs. ETFs)",
          content: `<p>A single <strong>stock</strong> is fractional ownership in one business; an <strong>index ETF</strong> spreads your investment across hundreds of companies in a single trade, dramatically lowering single-company risk.</p>`
        },
        {
          title: "Chapter 3: Blockchain Mechanics & Zero-Scam Security",
          content: `<p>A blockchain is a cryptographically linked public ledger. Understand private keys vs. public addresses, never share a seed phrase with ANYONE, use hardware cold storage for long-term holdings, and immediately ignore anyone promising 'guaranteed overnight returns'.</p>`
        }
      ]
    },
    {
      id: "book-hs-trades",
      title: "Master Trades Blueprint: Electrical, HVAC & Skilled Careers",
      author: "Master Instructor Guild · Christ Infinity Press",
      shelf: "Core Course Textbook",
      readingLevel: "11",
      courseCode: "TRD-301 · Skilled Trades & Licensing",
      pages: 136,
      description: "Debt-free, high-demand career roadmap covering OSHA-10 safety, Ohm's Law (V = IR), blueprint symbols, HVAC refrigeration cycles, apprenticeships, and launching your own trade company.",
      chapters: [
        {
          title: "Chapter 1: Safety First & Apprenticeship Pathways",
          content: `<p>Master electricians, HVAC technicians, plumbers, and welders earn six-figure incomes while getting paid during apprenticeships instead of taking on student loans. Every career starts with OSHA-10 safety habits, lockout/tagout discipline, and pride in craftsmanship.</p>`
        },
        {
          title: "Chapter 2: Electrical Math — Ohm's Law in Action",
          content: `<p>Three variables govern every circuit: <strong>Voltage (V)</strong>, <strong>Current in Amps (I)</strong>, and <strong>Resistance in Ohms (R)</strong>, linked by <code>V = I × R</code> and power <code>P = V × I</code>. Accurate load math keeps homes safe and up to National Electrical Code (NEC).</p>`
        },
        {
          title: "Chapter 3: Estimating Jobs & Growing an Honest Shop",
          content: `<p>Learn to read architectural blueprints cleanly, calculate materials + labor + overhead accurately, communicate arrival times clearly, and leave every jobsite cleaner than you found it.</p>`
        }
      ]
    },
    {
      id: "book-ms-pilgrim",
      title: "The Pilgrim's Progress: Modern Youth Adventure Edition",
      author: "John Bunyan (Adapted for Grades 6–9)",
      shelf: "Classical Great Book",
      readingLevel: "6",
      courseCode: "LIT-601 & THEO-601 · Christian Allegory",
      pages: 118,
      description: "Accessible, vivid retelling of the world's most beloved Christian allegory—following Christian from the Slough of Despond to the Hill of Difficulty and the Celestial City.",
      chapters: [
        {
          title: "Chapter 1: The Burden & the Wicket Gate",
          content: `<p>Carrying a heavy burden on his back that no human shortcut could lift, Christian met Evangelist, who pointed across the wide field toward a shining light and a narrow gate. Every great journey of faith begins with turning toward the truth.</p>`
        },
        {
          title: "Chapter 2: The Cross & the Armor of Light",
          content: `<p>When Christian climbed the gentle rise to the Cross, the heavy straps snapped and his burden tumbled away forever. At House Beautiful he received steadfast armor—shield, helmet, and sword—for the valleys ahead.</p>`
        },
        {
          title: "Chapter 3: Faithful Companions on the Road",
          content: `<p>Walking alongside Hopeful through Doubting Castle taught Christian that perseverance is never meant to be walked alone—remembering God's Key of Promise opens every locked cell of discouragement.</p>`
        }
      ]
    },
    {
      id: "book-ms-scientists",
      title: "Great Christian Scientists Who Changed the World",
      author: "Dr. Miriam Chen · History of Science Press",
      shelf: "Historical & Science Narrative",
      readingLevel: "7",
      courseCode: "SCI-102 & HIST-102 · Faith & Science",
      pages: 110,
      description: "True biographies of Johannes Kepler, Isaac Newton, Michael Faraday, and George Washington Carver—showing how deep Christian faith inspired groundbreaking scientific discovery.",
      chapters: [
        {
          title: "Chapter 1: Johannes Kepler & the Music of the Orbits",
          content: `<p>Kepler discovered that planets move in exact ellipses around the Sun—calling his mathematical astronomy 'thinking God's thoughts after Him.' Precision data and joyful wonder worked hand in hand.</p>`
        },
        {
          title: "Chapter 2: Michael Faraday — Bookbinder to Genius of Electricity",
          content: `<p>Born to a poor blacksmith family with almost no formal schooling, young Faraday read science books while binding them, attended public lectures with careful notes, and discovered electromagnetic induction—powering the entire modern electrical world!</p>`
        },
        {
          title: "Chapter 3: George Washington Carver — Stewardship of the Soil",
          content: `<p>Starting each morning walking quietly in the woods in prayer, Carver invented crop-rotation methods and hundreds of agricultural innovations that rescued struggling Southern farming families from poverty.</p>`
        }
      ]
    },
    {
      id: "book-ms-entrepreneurs",
      title: "Entrepreneurs Under 20: Launching Your First Honest Business",
      author: "Prof. Marcus Vance · Griffin Business Press",
      shelf: "Core Course Textbook",
      readingLevel: "8",
      courseCode: "BUS-201 · Youth Entrepreneurship",
      pages: 104,
      description: "Step-by-step playbook for teens launching lawn care, tutoring, web design, photography, or craft businesses—covering pricing, marketing, bookkeeping, and taxes.",
      chapters: [
        {
          title: "Chapter 1: Solve a Real Problem Neighbors Will Pay For",
          content: `<p>Great businesses don't start with flashy logos—they start by asking, 'What chore or problem do busy families or local shops need solved reliably right now?'</p>`
        },
        {
          title: "Chapter 2: Pricing, Profit Margins & Simple Spreadsheets",
          content: `<p>Track every dollar in and every dollar out on a clean ledger. Know your break-even point, set aside savings and taxes first, and reinvest part of your profit into better tools.</p>`
        },
        {
          title: "Chapter 3: Customer Service That Turns 1 Client Into 10",
          content: `<p>Show up 5 minutes early, confirm appointments clearly, do the job thoroughly, and follow up politely. Word-of-mouth referrals from thrilled customers are the best marketing on Earth.</p>`
        }
      ]
    },
    {
      id: "book-hs-debate",
      title: "The Art of Persuasion: Classical Logic & Debate for Teens",
      author: "Prof. Eleanor Sterling · Rhetoric Press",
      shelf: "Classical Great Book",
      readingLevel: "9",
      courseCode: "LIT-901 · Logic, Fallacies & Public Speaking",
      pages: 124,
      description: "Master spotting logical fallacies (straw man, ad hominem, false dilemma), structuring clear persuasive speeches (Ethos, Pathos, Logos), and debating gracefully without losing your cool.",
      chapters: [
        {
          title: "Chapter 1: Ethos, Logos & Pathos",
          content: `<p>Aristotle observed three pillars of strong communication: <strong>Ethos</strong> (trustworthy character), <strong>Logos</strong> (clear evidence and sound reasoning), and <strong>Pathos</strong> (helping listeners feel why the truth matters).</p>`
        },
        {
          title: "Chapter 2: Spotting 5 Everyday Logical Fallacies",
          content: `<p>Learn to spot an <em>Ad Hominem</em> (attacking the person instead of the argument), <em>Straw Man</em> (twisting what someone actually said), and <em>Bandwagon</em> ('everyone does it so it must be right') in commercials and news headlines.</p>`
        },
        {
          title: "Chapter 3: Speaking Truth With Grace",
          content: `<p>Winning an argument while losing respect is never a real victory. Listen carefully, summarize the other side fairly, and make your case calmly with verified facts.</p>`
        }
      ]
    },
    {
      id: "book-ms-music",
      title: "The Music & Worship Heritage Handbook",
      author: "Prof. Sofia Laurent · Fine Arts Press",
      shelf: "Historical & Science Narrative",
      readingLevel: "6",
      courseCode: "MUS-101 · Composers, Theory & Hymns",
      pages: 94,
      description: "Journey through the stories behind Bach's masterpieces, 'Amazing Grace,' modern worship chord progressions (I–V–vi–IV), and how math and harmony unite in sound.",
      chapters: [
        {
          title: "Chapter 1: Johann Sebastian Bach — 'Soli Deo Gloria'",
          content: `<p>At the bottom of nearly every musical score he ever composed, Johann Sebastian Bach wrote three initials: <strong>S.D.G.</strong>—<em>Soli Deo Gloria</em> ('To God Alone Be the Glory'). Music was both mathematics in motion and joyful worship.</p>`
        },
        {
          title: "Chapter 2: The 4 Chords Behind Hundreds of Songs",
          content: `<p>In the key of C Major, just four chords—<strong>C (I), G (V), Am (vi), and F (IV)</strong>—unlock hundreds of worship songs and classics on piano or guitar!</p>`
        },
        {
          title: "Chapter 3: The Story Behind 'Amazing Grace'",
          content: `<p>Written by former sea captain John Newton after his life was radically transformed by Christ, 'Amazing Grace' became one of the most recognized songs of hope and redemption in human history.</p>`
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
