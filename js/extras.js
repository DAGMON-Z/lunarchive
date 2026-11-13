/* ----------------------------------------------------
   LUNARCHIVE EXTRAS
   Loaded after app.js and before the page starts. Adds:
   A. the Deep Space wing (Voyager 1 & 2, Pioneer 10 & 11)
   B. "In its own words": a first-person voice for every relic
   C. real landing coordinates for the NASA map
   D. the timeline
   E. text for the timeline, teacher and sources sections
---------------------------------------------------- */

/* ---------------- A. DEEP SPACE WING ---------------- */
RELICS_DATA.push(
    {
        id: 'voyager-1',
        name: 'Voyager 1',
        target: 'Deep',
        location: 'Interstellar space',
        year: '1977 - today',
        status: 'Still Sending Signals',
        icon: 'fa-satellite',
        color: 'neonPurple',
        shortDesc: 'The farthest thing humans have ever built. It left the planets behind and now flies between the stars.',
        story: 'Voyager 1 left Earth in 1977. It flew past Jupiter and Saturn and sent home pictures of storms, rings and moons nobody had seen up close. Then it kept going. In 2012 it crossed into interstellar space, the space between the stars. It is now so far away that its radio message, travelling at the speed of light, needs almost a whole day to reach Earth.',
        science: 'Discovered active volcanoes on Jupiter\'s moon Io and studied Saturn\'s giant moon Titan. It was the first spacecraft to measure the space between the stars directly.',
        fact: 'It carries a Golden Record with music, pictures and greetings in 55 languages, in case anyone ever finds it!',
        abandoned: 'Voyager 1 was never meant to come back. It flew so fast past the giant planets that it escaped the pull of the Sun for good. Its nuclear battery makes a little less power every year, so engineers switch off its instruments one by one to keep it talking to Earth as long as they can.',
        lat: 0, lng: 0,
        quiz: {
            question: 'What does Voyager 1 carry in case someone finds it one day?',
            options: ['A box of Moon rocks', 'A Golden Record with sounds from Earth', 'A map of Mars', 'A spare camera'],
            correct: 1
        }
    },
    {
        id: 'voyager-2',
        name: 'Voyager 2',
        target: 'Deep',
        location: 'Interstellar space',
        year: '1977 - today',
        status: 'Still Sending Signals',
        icon: 'fa-satellite',
        color: 'neonPurple',
        shortDesc: 'The only spacecraft that has ever visited all four giant planets: Jupiter, Saturn, Uranus and Neptune.',
        story: 'Voyager 2 launched in August 1977, about two weeks before its twin Voyager 1. The planets were lined up in a way that happens only about once every 175 years, so it could swing from one giant planet to the next. It reached Uranus in 1986 and Neptune in 1989. No other spacecraft has been to either one since. In 2018 it followed its twin into interstellar space.',
        science: 'Found new moons and rings at Uranus and Neptune, and saw geysers erupting on Neptune\'s icy moon Triton.',
        fact: 'Voyager 2 launched BEFORE Voyager 1. Voyager 1 got its number because it took a faster path and reached Jupiter first!',
        abandoned: 'Like its twin, Voyager 2 is on a one-way trip out of the solar system. It is too far away and moving too fast to ever return. It still sends faint signals home, and engineers save its shrinking power by turning instruments off one at a time.',
        lat: 0, lng: 0,
        quiz: {
            question: 'Which two planets has only Voyager 2 visited?',
            options: ['Mercury and Venus', 'Mars and Jupiter', 'Uranus and Neptune', 'Saturn and Pluto'],
            correct: 2
        }
    },
    {
        id: 'pioneer-10',
        name: 'Pioneer 10',
        target: 'Deep',
        location: 'Beyond the planets, heading toward the star Aldebaran',
        year: '1972 - 2003',
        status: 'Silent Traveller',
        icon: 'fa-satellite-dish',
        color: 'neonPurple',
        shortDesc: 'The first spacecraft to cross the asteroid belt and the first to fly past Jupiter.',
        story: 'Before Pioneer 10, nobody knew if a spacecraft could get through the asteroid belt in one piece. Pioneer 10 launched in 1972 and crossed it safely. In December 1973 it flew past Jupiter and took the first close-up pictures of the giant planet. Then it headed out of the solar system. Its signal grew weaker and weaker, and the last one reached Earth in January 2003.',
        science: 'Proved that spacecraft can cross the asteroid belt safely and measured Jupiter\'s powerful radiation, which helped engineers protect every later mission.',
        fact: 'It carries a gold-coloured plaque with a drawing of two people and a map showing where Earth is!',
        abandoned: 'Pioneer 10 was sent on a path that leaves the solar system forever. After more than 30 years its nuclear power source became too weak to run the radio, so Earth could no longer hear it. It is still drifting outward in silence.',
        lat: 0, lng: 0,
        quiz: {
            question: 'What was Pioneer 10 the first spacecraft to do?',
            options: ['Land on the Moon', 'Cross the asteroid belt and fly past Jupiter', 'Orbit Mars', 'Carry astronauts'],
            correct: 1
        }
    },
    {
        id: 'pioneer-11',
        name: 'Pioneer 11',
        target: 'Deep',
        location: 'Beyond the planets, heading toward the constellation Aquila',
        year: '1973 - 1995',
        status: 'Silent Traveller',
        icon: 'fa-satellite-dish',
        color: 'neonPurple',
        shortDesc: 'The first spacecraft to fly past Saturn and see its rings up close.',
        story: 'Pioneer 11 followed its twin to Jupiter in 1974. It used Jupiter\'s gravity like a slingshot to swing all the way across the solar system to Saturn. In 1979 it became the first spacecraft to visit the ringed planet, flying just outside the rings. It scouted the path so the Voyagers could follow safely. Earth last heard from it in 1995.',
        science: 'Discovered a thin new ring around Saturn, now called the F ring, and showed that a spacecraft could pass near the rings safely.',
        fact: 'It tested the route past Saturn\'s rings first, so the two Voyager spacecraft would know the way was safe!',
        abandoned: 'Pioneer 11 is on a path out of the solar system and cannot turn around. By 1995 its power source was too weak to run its instruments and its antenna could no longer point at Earth, so contact was lost.',
        lat: 0, lng: 0,
        quiz: {
            question: 'Pioneer 11 was the first spacecraft to fly past which planet?',
            options: ['Saturn', 'Venus', 'Neptune', 'Mercury'],
            correct: 0
        }
    }
);

Object.assign(RELICS_TRANSLATIONS_AR, {
    'voyager-1': {
        name: 'فوياجر 1',
        location: 'الفضاء بين النجوم',
        status: 'ما زالت ترسل الإشارات',
        year: '١٩٧٧ - اليوم',
        shortDesc: 'أبعد شيء صنعه الإنسان على الإطلاق. تركت الكواكب خلفها وهي الآن تطير بين النجوم.',
        story: 'غادرت فوياجر 1 الأرض عام 1977. مرّت بجانب المشتري وزحل وأرسلت صوراً لعواصف وحلقات وأقمار لم يرها أحد عن قرب من قبل. ثم واصلت رحلتها. وفي عام 2012 دخلت الفضاء بين النجوم. وهي الآن بعيدة جداً حتى إن رسالتها اللاسلكية، التي تسير بسرعة الضوء، تحتاج إلى ما يقارب يوماً كاملاً لتصل إلى الأرض.',
        science: 'اكتشفت براكين نشطة على قمر المشتري «آيو» ودرست قمر زحل العملاق «تيتان». وكانت أول مركبة تقيس الفضاء بين النجوم مباشرة.',
        fact: 'تحمل أسطوانة ذهبية فيها موسيقى وصور وتحيات بـ55 لغة، لعل أحداً يجدها يوماً ما!',
        abandoned: 'لم يكن مقرراً أن تعود فوياجر 1 أبداً. فقد طارت بسرعة كبيرة بجانب الكواكب العملاقة حتى أفلتت من جاذبية الشمس إلى الأبد. وبطاريتها النووية تنتج طاقة أقل قليلاً كل عام، لذلك يطفئ المهندسون أجهزتها واحداً تلو الآخر لتبقى على اتصال بالأرض أطول وقت ممكن.',
        quiz: {
            question: 'ماذا تحمل فوياجر 1 لعل أحداً يجدها يوماً ما؟',
            options: ['صندوقاً من صخور القمر', 'أسطوانة ذهبية فيها أصوات من الأرض', 'خريطة للمريخ', 'كاميرا احتياطية']
        }
    },
    'voyager-2': {
        name: 'فوياجر 2',
        location: 'الفضاء بين النجوم',
        status: 'ما زالت ترسل الإشارات',
        year: '١٩٧٧ - اليوم',
        shortDesc: 'المركبة الوحيدة التي زارت الكواكب العملاقة الأربعة: المشتري وزحل وأورانوس ونبتون.',
        story: 'انطلقت فوياجر 2 في أغسطس 1977، قبل توأمها فوياجر 1 بنحو أسبوعين. كانت الكواكب مصطفّة بطريقة لا تحدث إلا مرة كل 175 عاماً تقريباً، فاستطاعت أن تنتقل من كوكب عملاق إلى آخر. وصلت إلى أورانوس عام 1986 وإلى نبتون عام 1989. ولم تزر أي مركبة أخرى هذين الكوكبين منذ ذلك الحين. وفي عام 2018 لحقت بتوأمها إلى الفضاء بين النجوم.',
        science: 'عثرت على أقمار وحلقات جديدة حول أورانوس ونبتون، ورأت ينابيع تثور على «ترايتون» قمر نبتون الجليدي.',
        fact: 'انطلقت فوياجر 2 قبل فوياجر 1. وحصلت فوياجر 1 على رقمها لأنها سلكت طريقاً أسرع ووصلت إلى المشتري أولاً!',
        abandoned: 'مثل توأمها، فوياجر 2 في رحلة باتجاه واحد إلى خارج المجموعة الشمسية. وهي أبعد وأسرع من أن تعود. ما زالت ترسل إشارات خافتة إلى الأرض، ويحافظ المهندسون على طاقتها المتناقصة بإطفاء أجهزتها واحداً تلو الآخر.',
        quiz: {
            question: 'ما الكوكبان اللذان لم تزرهما سوى فوياجر 2؟',
            options: ['عطارد والزهرة', 'المريخ والمشتري', 'أورانوس ونبتون', 'زحل وبلوتو']
        }
    },
    'pioneer-10': {
        name: 'بايونير 10',
        location: 'خلف الكواكب، باتجاه نجم الدبران',
        status: 'مسافر صامت',
        year: '١٩٧٢ - ٢٠٠٣',
        shortDesc: 'أول مركبة تعبر حزام الكويكبات وأول مركبة تمرّ بجانب المشتري.',
        story: 'قبل بايونير 10 لم يكن أحد يعرف هل تستطيع مركبة أن تعبر حزام الكويكبات سليمة. انطلقت بايونير 10 عام 1972 وعبرته بأمان. وفي ديسمبر 1973 مرّت بجانب المشتري والتقطت أول صور قريبة للكوكب العملاق. ثم اتجهت إلى خارج المجموعة الشمسية. وأخذت إشارتها تضعف شيئاً فشيئاً، ووصلت آخر إشارة منها إلى الأرض في يناير 2003.',
        science: 'أثبتت أن المركبات تستطيع عبور حزام الكويكبات بأمان، وقاست إشعاع المشتري القوي، مما ساعد المهندسين على حماية كل المهمات التي جاءت بعدها.',
        fact: 'تحمل لوحة ذهبية اللون عليها رسم لشخصين وخريطة تبيّن مكان الأرض!',
        abandoned: 'أُرسلت بايونير 10 في مسار يغادر المجموعة الشمسية إلى الأبد. وبعد أكثر من 30 عاماً صار مصدر طاقتها النووي أضعف من أن يشغّل الراديو، فلم تعد الأرض تسمعها. وما زالت تنجرف بعيداً في صمت.',
        quiz: {
            question: 'ما الذي كانت بايونير 10 أول مركبة تفعله؟',
            options: ['الهبوط على القمر', 'عبور حزام الكويكبات والمرور بجانب المشتري', 'الدوران حول المريخ', 'حمل رواد فضاء']
        }
    },
    'pioneer-11': {
        name: 'بايونير 11',
        location: 'خلف الكواكب، باتجاه كوكبة العقاب',
        status: 'مسافر صامت',
        year: '١٩٧٣ - ١٩٩٥',
        shortDesc: 'أول مركبة تمرّ بجانب زحل وترى حلقاته عن قرب.',
        story: 'لحقت بايونير 11 بتوأمها إلى المشتري عام 1974. واستخدمت جاذبية المشتري مثل المقلاع لتندفع عبر المجموعة الشمسية كلها نحو زحل. وفي عام 1979 صارت أول مركبة تزور الكوكب ذا الحلقات، وطارت خارج الحلقات مباشرة. لقد استكشفت الطريق لتتبعها مركبتا فوياجر بأمان. وسمعتها الأرض آخر مرة عام 1995.',
        science: 'اكتشفت حلقة رفيعة جديدة حول زحل تُسمّى اليوم الحلقة F، وبيّنت أن المركبة تستطيع المرور قرب الحلقات بأمان.',
        fact: 'جرّبت الطريق بجانب حلقات زحل أولاً، لتعرف مركبتا فوياجر أن الطريق آمن!',
        abandoned: 'بايونير 11 في مسار إلى خارج المجموعة الشمسية ولا تستطيع العودة. وبحلول عام 1995 صار مصدر طاقتها أضعف من أن يشغّل أجهزتها، ولم يعد هوائيها قادراً على التوجّه نحو الأرض، فانقطع الاتصال.',
        quiz: {
            question: 'ما الكوكب الذي كانت بايونير 11 أول مركبة تمرّ بجانبه؟',
            options: ['زحل', 'الزهرة', 'نبتون', 'عطارد']
        }
    }
});

Object.assign(PREVIEW_QUERIES, {
    'voyager-1': ['Voyager 1 spacecraft', 'Voyager golden record'],
    'voyager-2': ['Voyager 2 spacecraft', 'Voyager 2 Neptune'],
    'pioneer-10': ['Pioneer 10 spacecraft', 'Pioneer 10 Jupiter'],
    'pioneer-11': ['Pioneer 11 spacecraft', 'Pioneer 11 Saturn']
});

// Label and colours for each destination, used by the cards, the modal and the timeline
const TARGET_INFO = {
    Moon: { en: 'Moon', ar: 'القمر', chip: 'bg-moonSilver/20 text-moonSilver border-moonSilver/40', dot: '#e0e6ed' },
    Mars: { en: 'Mars', ar: 'المريخ', chip: 'bg-marsRed/20 text-marsRed border-marsRed/40', dot: '#ff4b2b' },
    Deep: { en: 'Deep Space', ar: 'الفضاء السحيق', chip: 'bg-purple-500/20 text-purple-300 border-purple-400/40', dot: '#b06bff' }
};
function targetLabel(target) {
    const info = TARGET_INFO[target] || TARGET_INFO.Moon;
    return currentLang === 'ar' ? info.ar : info.en;
}
function targetChip(target) {
    return (TARGET_INFO[target] || TARGET_INFO.Moon).chip;
}

/* ---------------- B. IN ITS OWN WORDS ---------------- */
const RELIC_VOICES = {
    en: {
        'apollo11-stage': 'I am the Eagle\'s landing stage. In July 1969 I carried Neil Armstrong and Buzz Aldrin down to the Sea of Tranquility, and then I became their launch pad. I am still standing where they left me, with a plaque on my leg that says they came in peace.',
        'apollo12-stage': 'I am Intrepid\'s landing stage. Pete Conrad and Alan Bean set me down in the Ocean of Storms, a short walk from an old robot called Surveyor 3. I showed that people could land exactly where they aimed.',
        'apollo14-stage': 'I am Antares\' landing stage. I brought Alan Shepard and Edgar Mitchell to the hills of Fra Mauro in 1971. Alan hit two golf balls near me, and I have been watching over them ever since.',
        'apollo15-stage': 'I am Falcon\'s landing stage. I was the first to carry a car to the Moon, folded up against my side. David Scott and James Irwin drove it to the foot of the mountains while I waited at Hadley.',
        'apollo16-stage': 'I am Orion\'s landing stage. John Young and Charles Duke landed me in the Descartes Highlands in 1972 to collect very old Moon rocks. I was their home base for three days.',
        'apollo17-stage': 'I am Challenger\'s landing stage. Gene Cernan and the geologist Harrison Schmitt lifted off from my deck in December 1972. Nobody has walked on the Moon since, so I am still waiting for visitors.',
        'lunar-rover': 'I am the Moon buggy. I rode to the Moon folded up, then opened out so astronauts could drive far from their lander. Three of us are still parked up here with our seats empty.',
        'alsep-package': 'I am a science station that Apollo astronauts set up by hand. For years I listened for moonquakes and measured the solar wind, and sent the numbers home by radio. I was switched off in 1977, but scientists still study what I heard.',
        'retroreflector-arrays': 'I am a tray of special mirrors. I need no power at all: scientists on Earth fire a laser at me and I send the light straight back. That is how they know the Moon drifts about 3.8 centimetres farther away every year.',
        'surveyor-3': 'I am Surveyor 3. I landed in 1967 and dug into the Moon with my little scoop to find out if the ground could hold a spacecraft. Two and a half years later, Apollo 12 astronauts walked over to me and took my camera home.',
        'surveyor-1': 'I am Surveyor 1. In 1966 I made America\'s first gentle landing on the Moon and sent home more than 10,000 pictures. I showed that the ground was firm enough to stand on.',
        'lunar-orbiter-crash-sites': 'We are the five Lunar Orbiters. We circled the Moon and photographed almost all of it, so NASA could choose safe places for Apollo to land. When our work was done, most of us were steered into the surface so we would not get in the way of later missions.',
        'saturn-s4b-stages': 'I am a third stage of the giant Saturn V rocket. I pushed astronauts toward the Moon, and then I was aimed at it on purpose. My crash shook the ground, and the science stations listened to learn what is inside the Moon.',
        'ranger-probes': 'I am a Ranger probe. I flew straight at the Moon with my cameras running and sent pictures home until the moment I hit. My cameras sent pictures for less than half an hour, but they gave America its first close-up photos of the Moon.',
        'opportunity-oppy': 'I am Opportunity, but my friends call me Oppy. I was built to work for 90 days and I kept driving for more than 14 years, farther than a marathon. I found signs that water once flowed on Mars, and then a giant dust storm put me to sleep.',
        'spirit-rover': 'I am Spirit. One of my wheels broke, so I drove backwards and dragged it, and the trail it dug uncovered bright silica left by ancient hot water. I got stuck in soft sand in 2009 and I have rested there ever since.',
        'sojourner-rover': 'I am Sojourner, the first rover on Mars. I am about the size of a microwave oven and I never went far from my lander. I was planned to last 7 days and I worked for 83.',
        'perseverance-shield': 'We are the gear that got Perseverance safely to the ground. The heat shield took the fire, the parachute slowed the fall, and the sky crane lowered the rover on cables. Our job lasted seven minutes, and then it was over forever.',
        'ingenuity-helicopter': 'I am Ingenuity, the first aircraft to fly on another planet. I was meant to fly 5 times and I flew 72. On my last landing my rotor blades were damaged, so now I rest in the sand.',
        'insight-lander': 'I am InSight. I placed a very sensitive quake sensor on the ground and felt more than 1,300 marsquakes. They showed scientists the inside of Mars, right down to its core, until dust covered my solar panels.',
        'phoenix-lander': 'I am Phoenix. I landed near the north pole of Mars, dug with my arm and found water ice just under the soil. Then winter came, the Sun sank too low, and I froze.',
        'viking1-lander': 'I am Viking 1. In 1976 I became the first American spacecraft to land safely on Mars and send back pictures. I tested the soil for signs of life and worked for more than six years.',
        'viking2-lander': 'I am Viking 2, the twin of Viking 1. I landed on the other side of Mars and saw thin frost form on the ground around me in winter. I worked until my batteries failed in 1980.',
        'mars-polar-lander': 'I am Mars Polar Lander. I was sent to look for ice near the south pole, but I went silent during my landing in 1999 and nobody heard from me again. Engineers studied what went wrong, and later landers were made safer because of me.',
        'voyager-1': 'I am Voyager 1. I left Earth in 1977, flew past Jupiter and Saturn, and in 2012 I became the first spacecraft to enter the space between the stars. I carry a golden record with sounds and greetings from Earth.',
        'voyager-2': 'I am Voyager 2. I am the only spacecraft that has ever visited Uranus and Neptune. I am still flying away from the Sun and still sending faint messages home.',
        'pioneer-10': 'I am Pioneer 10. I was the first to cross the asteroid belt and the first to fly past Jupiter. My last faint signal reached Earth in 2003, but I am still drifting outward with a plaque that shows where I came from.',
        'pioneer-11': 'I am Pioneer 11. In 1979 I became the first spacecraft to fly past Saturn. My radio fell silent in 1995, and now I sail on quietly toward the stars.'
    },
    ar: {
        'apollo11-stage': 'أنا منصة هبوط «إيجل». في يوليو 1969 حملتُ نيل أرمسترونج وبوز ألدرين إلى بحر الهدوء، ثم صرتُ منصة إقلاعهما. ما زلت واقفة حيث تركاني، وعلى رِجلي لوحة تقول إنهم جاؤوا بسلام.',
        'apollo12-stage': 'أنا منصة هبوط «إنتربيد». أنزلني بيت كونراد وآلان بين في محيط العواصف، على بُعد خطوات من روبوت قديم اسمه سيرفيور 3. لقد أثبتُّ أن البشر يستطيعون الهبوط في المكان الذي يقصدونه بالضبط.',
        'apollo14-stage': 'أنا منصة هبوط «أنتاريس». أحضرتُ آلان شيبارد وإدغار ميتشل إلى تلال فرا مورو عام 1971. ضرب آلان كرتَي جولف بالقرب مني، وما زلت أحرسهما منذ ذلك اليوم.',
        'apollo15-stage': 'أنا منصة هبوط «فالكون». كنت أول من حمل سيارة إلى القمر، وكانت مطوية على جانبي. قادها ديفيد سكوت وجيمس إروين إلى سفح الجبال بينما انتظرتُ في هادلي.',
        'apollo16-stage': 'أنا منصة هبوط «أوريون». أنزلني جون يونغ وتشارلز ديوك في مرتفعات ديكارت عام 1972 ليجمعا صخوراً قمرية قديمة جداً. كنت قاعدتهما لثلاثة أيام.',
        'apollo17-stage': 'أنا منصة هبوط «تشالنجر». أقلع من فوقي يوجين سيرنان والجيولوجي هاريسون شميت في ديسمبر 1972. لم يمشِ أحد على القمر منذ ذلك الحين، ولذلك ما زلت أنتظر الزوار.',
        'lunar-rover': 'أنا عربة القمر. سافرتُ إلى القمر مطوية، ثم انفتحتُ ليقودني رواد الفضاء بعيداً عن مركبتهم. ما زالت ثلاث عربات منا متوقفة هنا ومقاعدنا فارغة.',
        'alsep-package': 'أنا محطة علمية نصبها رواد أبوللو بأيديهم. ظللت سنوات أستمع إلى زلازل القمر وأقيس الرياح الشمسية وأرسل الأرقام إلى الأرض بالراديو. أُطفئتُ عام 1977، لكن العلماء ما زالوا يدرسون ما سمعته.',
        'retroreflector-arrays': 'أنا صينية من المرايا الخاصة. لا أحتاج إلى أي طاقة: يطلق العلماء على الأرض ليزراً نحوي فأعيد الضوء إليهم مباشرة. وهكذا عرفوا أن القمر يبتعد نحو 3.8 سنتيمتر كل عام.',
        'surveyor-3': 'أنا سيرفيور 3. هبطتُ عام 1967 وحفرتُ في القمر بمغرفتي الصغيرة لأعرف هل تتحمل الأرض مركبة فضائية. وبعد عامين ونصف مشى إليّ رواد أبوللو 12 وأخذوا كاميرتي إلى الأرض.',
        'surveyor-1': 'أنا سيرفيور 1. في عام 1966 قمتُ بأول هبوط أمريكي ناعم على القمر وأرسلتُ أكثر من 10 آلاف صورة. لقد بيّنتُ أن الأرض صلبة بما يكفي للوقوف عليها.',
        'lunar-orbiter-crash-sites': 'نحن مركبات «لونار أوربيتر» الخمس. درنا حول القمر وصوّرناه كله تقريباً، لتختار ناسا أماكن آمنة لهبوط أبوللو. وعندما انتهى عملنا وُجّه معظمنا نحو السطح حتى لا نعترض طريق المهمات التالية.',
        'saturn-s4b-stages': 'أنا المرحلة الثالثة من صاروخ «ساتورن 5» العملاق. دفعتُ رواد الفضاء نحو القمر، ثم وُجّهتُ إليه عن قصد. اصطدامي هزّ الأرض، واستمعت المحطات العلمية لتعرف ما في داخل القمر.',
        'ranger-probes': 'أنا مسبار «رينجر». طرتُ نحو القمر مباشرة وكاميراتي تعمل، وأرسلتُ الصور حتى لحظة اصطدامي. أرسلت كاميراتي الصور أقل من نصف ساعة فقط، لكنها أعطت أمريكا أول صور قريبة للقمر.',
        'opportunity-oppy': 'أنا «أوبورتيونيتي»، ويسمّيني أصدقائي «أوبي». صُنعتُ لأعمل 90 يوماً، لكنني ظللت أسير أكثر من 14 عاماً، مسافة أطول من سباق الماراثون. وجدتُ دلائل على أن الماء جرى يوماً على المريخ، ثم أنامتني عاصفة غبار هائلة.',
        'spirit-rover': 'أنا «سبيريت». انكسرت إحدى عجلاتي، فسرتُ إلى الخلف وأنا أجرّها، وكشف الأثر الذي حفرته عن سيليكا لامعة تركتها مياه ساخنة قديمة. علقتُ في رمل ناعم عام 2009 وأنا أستريح هناك منذ ذلك الحين.',
        'sojourner-rover': 'أنا «سوجورنر»، أول مركبة جوّالة على المريخ. حجمي يقارب حجم فرن الميكروويف ولم أبتعد كثيراً عن مركبة الهبوط. كان مقرراً أن أعمل 7 أيام، لكنني عملت 83 يوماً.',
        'perseverance-shield': 'نحن المعدات التي أوصلت «بيرسيفيرانس» إلى السطح بأمان. تحمّل الدرع الحراري النار، وأبطأت المظلة السقوط، وأنزلت الرافعة السماوية المركبة بالحبال. استمرت مهمتنا سبع دقائق، ثم انتهت إلى الأبد.',
        'ingenuity-helicopter': 'أنا «إنجينيويتي»، أول طائرة تطير على كوكب آخر. كان مقرراً أن أطير 5 مرات، لكنني طرت 72 مرة. في هبوطي الأخير تضررت شفرات مروحتي، ولذلك أستريح الآن على الرمل.',
        'insight-lander': 'أنا «إنسايت». وضعتُ على الأرض جهازاً حساساً جداً للزلازل وشعرتُ بأكثر من 1300 زلزال مريخي. أظهرت هذه الزلازل للعلماء باطن المريخ حتى لبّه، إلى أن غطّى الغبار ألواحي الشمسية.',
        'phoenix-lander': 'أنا «فينيكس». هبطتُ قرب القطب الشمالي للمريخ، وحفرتُ بذراعي فوجدتُ جليداً مائياً تحت التربة مباشرة. ثم جاء الشتاء وانخفضت الشمس كثيراً فتجمّدت.',
        'viking1-lander': 'أنا «فايكنغ 1». في عام 1976 صرتُ أول مركبة أمريكية تهبط بأمان على المريخ وترسل صوراً. اختبرتُ التربة بحثاً عن علامات الحياة وعملتُ أكثر من ست سنوات.',
        'viking2-lander': 'أنا «فايكنغ 2»، توأم فايكنغ 1. هبطتُ على الجانب الآخر من المريخ ورأيتُ صقيعاً رقيقاً يتكوّن على الأرض حولي في الشتاء. عملتُ حتى تعطلت بطارياتي عام 1980.',
        'mars-polar-lander': 'أنا «مارس بولار لاندر». أُرسلتُ لأبحث عن الجليد قرب القطب الجنوبي، لكنني صمتُّ أثناء هبوطي عام 1999 ولم يسمع مني أحد بعدها. درس المهندسون ما حدث، وصارت مركبات الهبوط التالية أكثر أماناً بسببي.',
        'voyager-1': 'أنا «فوياجر 1». غادرتُ الأرض عام 1977، ومررتُ بجانب المشتري وزحل، وفي عام 2012 صرتُ أول مركبة تدخل الفضاء بين النجوم. أحمل أسطوانة ذهبية فيها أصوات وتحيات من الأرض.',
        'voyager-2': 'أنا «فوياجر 2». أنا المركبة الوحيدة التي زارت أورانوس ونبتون. ما زلت أطير مبتعدة عن الشمس وما زلت أرسل رسائل خافتة إلى الأرض.',
        'pioneer-10': 'أنا «بايونير 10». كنت أول من عبر حزام الكويكبات وأول من مرّ بجانب المشتري. وصلت آخر إشاراتي الخافتة إلى الأرض عام 2003، لكنني ما زلت أنجرف بعيداً ومعي لوحة تبيّن من أين جئت.',
        'pioneer-11': 'أنا «بايونير 11». في عام 1979 صرتُ أول مركبة تمرّ بجانب زحل. صمت الراديو عندي عام 1995، وأنا الآن أبحر بهدوء نحو النجوم.'
    }
};
function getRelicVoice(relicId) {
    return (RELIC_VOICES[currentLang] && RELIC_VOICES[currentLang][relicId]) || RELIC_VOICES.en[relicId] || '';
}

/* ---------------- C. REAL COORDINATES FOR THE MAP ----------------
   [latitude, east longitude]. Relics found at several sites are pinned at one of them
   (multi: true) and say so in their label. */
const RELIC_COORDS = {
    'apollo11-stage': { at: [0.67, 23.47] },
    'apollo12-stage': { at: [-3.01, -23.42] },
    'apollo14-stage': { at: [-3.65, -17.47] },
    'apollo15-stage': { at: [26.13, 3.63] },
    'apollo16-stage': { at: [-8.97, 15.50] },
    'apollo17-stage': { at: [20.19, 30.77] },
    'lunar-rover': { at: [20.19, 30.77], multi: true },            // shown at the Apollo 17 site
    'alsep-package': { at: [-8.97, 15.50], multi: true },          // shown at the Apollo 16 site
    'retroreflector-arrays': { at: [26.13, 3.63], multi: true },   // shown at the Apollo 15 site
    'surveyor-3': { at: [-3.02, -23.42] },
    'surveyor-1': { at: [-2.47, -43.34] },
    'lunar-orbiter-crash-sites': { at: [-2.79, -83.0], multi: true },  // Lunar Orbiter 5
    'saturn-s4b-stages': { at: [-2.75, -27.86], multi: true },         // Apollo 13's stage
    'ranger-probes': { at: [-10.63, -20.60], multi: true },            // Ranger 7
    'opportunity-oppy': { at: [-2.28, -5.23] },
    'spirit-rover': { at: [-14.60, 175.53] },
    'sojourner-rover': { at: [19.13, -33.22] },
    'perseverance-shield': { at: [18.44, 77.45] },
    'ingenuity-helicopter': { at: [18.45, 77.40] },
    'insight-lander': { at: [4.50, 135.62] },
    'phoenix-lander': { at: [68.22, -125.75] },
    'viking1-lander': { at: [22.27, -47.95] },
    'viking2-lander': { at: [47.97, 134.29] },
    'mars-polar-lander': { at: [-76.0, 165.0] }
};
// The part of each world the map shows. The Moon map is zoomed to the side that faces Earth.
const MAP_VIEW = {
    Moon: { image: 'assets/moon-map.jpg', lon: 100, lat: 50 },
    Mars: { image: 'assets/mars-map.jpg', lon: 180, lat: 90 }
};

// Returns { id: {x, y} } in percent of the map box, with close pins nudged apart
function mapPinPositions(world) {
    const view = MAP_VIEW[world];
    const pins = RELICS_DATA.filter(r => r.target === world && RELIC_COORDS[r.id]).map(r => {
        const at = RELIC_COORDS[r.id].at;
        return { id: r.id, x: (at[1] + view.lon) / (2 * view.lon) * 100, y: (view.lat - at[0]) / (2 * view.lat) * 100 };
    });
    const MIN = 3.4;   // smallest gap between two pins, in percent of the map width
    for (let pass = 0; pass < 40; pass++) {
        for (let i = 0; i < pins.length; i++) {
            for (let j = i + 1; j < pins.length; j++) {
                const a = pins[i], b = pins[j];
                let dx = b.x - a.x, dy = (b.y - a.y) / 2;   // the box is twice as wide as it is tall
                let d = Math.hypot(dx, dy);
                if (d >= MIN) continue;
                if (d < 0.01) { dx = Math.cos(i * 2.4 + j); dy = Math.sin(i * 2.4 + j); d = 1; }
                const push = (MIN - d) / 2;
                a.x -= dx / d * push; a.y -= dy / d * push * 2;
                b.x += dx / d * push; b.y += dy / d * push * 2;
            }
        }
    }
    const out = {};
    pins.forEach(p => { out[p.id] = { x: Math.min(97, Math.max(3, p.x)), y: Math.min(94, Math.max(6, p.y)) }; });
    return out;
}
function formatCoords(relicId) {
    const c = RELIC_COORDS[relicId];
    if (!c) return '';
    const num = v => {
        const s = Math.abs(v).toFixed(1);
        return currentLang === 'ar' ? toArabicNumerals(s) : s;
    };
    const ar = currentLang === 'ar';
    const lat = num(c.at[0]) + '°' + (c.at[0] >= 0 ? (ar ? ' ش' : 'N') : (ar ? ' ج' : 'S'));
    const lon = num(c.at[1]) + '°' + (c.at[1] >= 0 ? (ar ? ' ق' : 'E') : (ar ? ' غ' : 'W'));
    return lat + (ar ? '، ' : ', ') + lon + (c.multi ? ' ' + TRANSLATIONS[currentLang].coordsMulti : '');
}

/* ---------------- D. TIMELINE ---------------- */
function renderTimeline() {
    const track = document.getElementById('timeline-track');
    if (!track) return;
    const items = RELICS_DATA.map(r => ({ raw: r, start: parseInt(r.year, 10) || 0 }))
        .sort((a, b) => a.start - b.start);
    track.innerHTML = items.map(item => {
        const relic = getLocalizedRelic(item.raw);
        const info = TARGET_INFO[item.raw.target] || TARGET_INFO.Moon;
        const done = collectedBadges.includes(item.raw.id);
        return '<button type="button" class="tl-item" onclick="openModal(\'' + item.raw.id + '\')" style="--tl:' + info.dot + '">' +
            '<span class="tl-year">' + relic.year + '</span>' +
            '<span class="tl-dot"><i class="fa-solid ' + item.raw.icon + '"></i></span>' +
            '<span class="tl-name">' + relic.name + '</span>' +
            '<span class="tl-where">' + targetLabel(item.raw.target) + (done ? ' <i class="fa-solid fa-award text-starGold"></i>' : '') + '</span>' +
        '</button>';
    }).join('');
}

/* ---------------- E. TEXT FOR THE NEW SECTIONS ---------------- */
Object.assign(TRANSLATIONS.en, {
    filterDeep: 'Deep Space 🛰️',
    voiceTitle: 'In Its Own Words',
    coordsMulti: '(one of several sites)',
    mapCredit: 'Maps: NASA Solar System Treks. Pins use real landing coordinates.',
    timelineNav: 'Timeline',
    timelineTitle: 'Sixty Years of Explorers',
    timelineDesc: 'From the first Ranger probe in 1964 to the Ingenuity helicopter in 2024. Scroll sideways and tap a machine to hear its story.',
    teachTitle: 'For Teachers and Parents',
    teachDesc: 'LUNARCHIVE tells the stories of machines that finished their work in space and were left behind.',
    teachAgeTitle: 'Who it is for',
    teachAgeText: 'Children aged 8 to 14, and curious grown-ups. No account is needed and nothing is collected: badges and the certificate name stay in this browser.',
    teachLearnTitle: 'What children learn',
    teachLearnText: 'What each machine is, why it was sent, how its parts work, what it discovered and why it could not come home.',
    teachUseTitle: 'A 20-minute lesson',
    teachUseText: 'Pick one relic. Read or listen to its story. Rebuild it in the Arena. Answer the quiz. Finish by printing the certificate.',
    teachAccessTitle: 'Accessibility',
    teachAccessText: 'English and Arabic with right-to-left layout, stories read aloud, keyboard controls, touch controls and short sentences in plain words.',
    sourcesTitle: 'Sources and Credits',
    sourcesDesc: 'Where the facts, photos and maps come from.',
    srcFactsTitle: 'Mission facts',
    srcFactsText: 'Written by the team from NASA Science mission pages and the NASA Space Science Data Coordinated Archive.',
    srcPhotosTitle: 'Photos',
    srcPhotosText: 'Loaded live from the NASA Image and Video Library. Each photo shows its own credit.',
    srcMapsTitle: 'Maps',
    srcMapsText: 'NASA Solar System Treks: LRO Wide Angle Camera mosaic of the Moon and Viking colour mosaic of Mars.',
    srcModelsTitle: '3D models',
    srcModelsText: 'The Arena models are simple shapes built by the team for this project. They are simplified and not to scale.',
    footerProject: 'NASA Space Apps Challenge 2026 Project',
    footerChallenge: 'Challenge: "Abandoned but not Forgotten: Storytelling about NASA\'s Discarded Equipment on the Moon and Mars"',
    footerCrafted: 'Made for future astronauts'
});
Object.assign(TRANSLATIONS.ar, {
    filterDeep: 'الفضاء السحيق 🛰️',
    voiceTitle: 'بلسانه هو',
    coordsMulti: '(أحد عدة مواقع)',
    mapCredit: 'الخرائط: «رحلات النظام الشمسي» من ناسا. والنقاط موضوعة حسب إحداثيات الهبوط الحقيقية.',
    timelineNav: 'الخط الزمني',
    timelineTitle: 'ستون عاماً من المستكشفين',
    timelineDesc: 'من أول مسبار «رينجر» عام 1964 إلى المروحية «إنجينيويتي» عام 2024. مرّر جانباً واضغط على آلة لتسمع قصتها.',
    teachTitle: 'للمعلمين وأولياء الأمور',
    teachDesc: '«لوناركايف» يحكي قصص الآلات التي أنهت عملها في الفضاء وبقيت هناك.',
    teachAgeTitle: 'لمن هذا الموقع',
    teachAgeText: 'للأطفال من 8 إلى 14 عاماً، وللكبار الفضوليين. لا حاجة إلى حساب ولا تُجمع أي بيانات: الشارات والاسم على الشهادة تبقى في هذا المتصفح.',
    teachLearnTitle: 'ماذا يتعلم الأطفال',
    teachLearnText: 'ما هي كل آلة، ولماذا أُرسلت، وكيف تعمل قطعها، وماذا اكتشفت، ولماذا لم تستطع العودة.',
    teachUseTitle: 'درس في 20 دقيقة',
    teachUseText: 'اختر أثراً واحداً. اقرأ قصته أو استمع إليها. أعد بناءه في الساحة. أجب عن السؤال. واختم بطباعة الشهادة.',
    teachAccessTitle: 'سهولة الاستخدام',
    teachAccessText: 'العربية والإنجليزية مع اتجاه من اليمين إلى اليسار، وقصص تُقرأ بصوت مسموع، وتحكم بلوحة المفاتيح وباللمس، وجمل قصيرة بكلمات بسيطة.',
    sourcesTitle: 'المصادر والشكر',
    sourcesDesc: 'من أين جاءت المعلومات والصور والخرائط.',
    srcFactsTitle: 'معلومات المهمات',
    srcFactsText: 'كتبها الفريق من صفحات المهمات في موقع ناسا للعلوم ومن أرشيف ناسا المنسّق لبيانات علوم الفضاء.',
    srcPhotosTitle: 'الصور',
    srcPhotosText: 'تُحمَّل مباشرة من مكتبة ناسا للصور والفيديو. وتظهر مع كل صورة جهة مصدرها.',
    srcMapsTitle: 'الخرائط',
    srcMapsText: '«رحلات النظام الشمسي» من ناسا: خريطة القمر من الكاميرا الواسعة للمركبة LRO وخريطة المريخ الملوّنة من مهمة فايكنغ.',
    srcModelsTitle: 'النماذج ثلاثية الأبعاد',
    srcModelsText: 'نماذج الساحة أشكال بسيطة صنعها الفريق لهذا المشروع. وهي مبسّطة وليست بالمقياس الحقيقي.',
    footerProject: 'مشروع تحدي ناسا لتطبيقات الفضاء 2026',
    footerChallenge: 'التحدي: «مهجورة لكنها غير منسية: حكايات عن معدات ناسا المتروكة على القمر والمريخ»',
    footerCrafted: 'صُنع من أجل رواد فضاء المستقبل'
});
