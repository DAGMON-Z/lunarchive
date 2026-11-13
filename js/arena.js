/* ----------------------------------------------------
   RELIC RESCUE ROVER — the 3D arena game
   Build a rover in the workshop, drive it across the Moon or Mars,
   find the broken relics and rebuild them part by part.
   Every part is chosen by what it DOES, so children learn how the
   real machines worked. A final quiz question awards the site badge.

   Uses Three.js (already loaded) and the globals from app.js:
   RELICS_DATA, getLocalizedRelic, currentLang, collectedBadges,
   saveBadges, renderRelicCards, playClickSound, playBadgeSound.
---------------------------------------------------- */
(function () {
    'use strict';

    const SAVE_KEY = 'nasa_relic_arena';
    const WORLD_SIZE = 420;      // terrain edge length in metres
    const WORLD_LIMIT = 185;     // how far the rover may drive from the centre

    /* ---------------- 1. TEXT (English + Arabic) ---------------- */
    const TEXT = {
        en: {
            title: 'Relic Rescue Rover',
            tagline: 'Build your rover, drive across the Moon and Mars, fly through deep space, and rebuild the machines explorers left behind.',
            chooseWorld: 'Choose a world',
            Moon: 'The Moon', Mars: 'Mars',
            MoonInfo: 'Gravity is 1/6 of Earth. Big floaty jumps!',
            MarsInfo: 'Gravity is about 1/3 of Earth. Dusty red hills!',
            progress: '{n} of {t} relics rebuilt',
            play: 'Drive here',
            exit: 'Exit', worlds: 'Worlds',
            reset: 'Start the game over', resetSure: 'Tap again to erase game progress',
            workshop: 'Rover Workshop',
            workshopIntro: 'First, build your rescue rover.',
            rebuilding: 'Rebuilding',
            partOf: 'Part {n} of {t}',
            wrong: 'Not quite. That is the {name}. Try another part!',
            correct: 'Correct!',
            next: 'Next part', finish: 'Finish',
            roverReady: 'Your rover is ready!',
            roverReadyText: 'Drive to the glowing beacons. Each one marks a broken relic you can rebuild.',
            keys: 'Drive: W A S D or arrow keys  ·  Jump: Space  ·  Rebuild: E',
            touch: 'Use the joystick to drive and the buttons to jump and rebuild.',
            go: "Let's roll!",
            rebuild: 'Rebuild this relic', view: 'Look at this relic',
            leave: 'Leave',
            switchHint: 'Every part is in place. Switch it on to hear what it found.',
            switchOn: 'Switch it on',
            found: 'What it discovered',
            toQuiz: 'Go to the badge question',
            rebuilt: 'Relic rebuilt!',
            funFact: 'Fun fact',
            quiz: 'Final check: answer to earn the badge',
            quizWrong: 'Not quite. Try again!',
            badge: 'Badge earned!',
            badgeHad: 'Well done! You already had this badge.',
            keep: 'Keep exploring',
            nearest: 'Nearest broken relic: {d} m',
            allDone: 'World complete! Every relic here is rebuilt.',
            jump: 'Jump',
            Deep: 'Deep Space',
            DeepInfo: 'No ground and no air. Your ship keeps drifting until you thrust the other way!',
            flyKeys: 'Fly: W thrust, S brake, A D turn  ·  Up / down: Space / Shift  ·  Rebuild: E',
            flyTouch: 'Use the joystick to fly. The ship lines itself up with the nearest probe.',
            flyIntro: 'Follow the radar to four silent probes drifting far from the Sun.',
            rise: 'Up',
            signal: 'A radio message from this far away takes about {h} hours to reach Earth.',
            above: 'above you', below: 'below you'
        },
        ar: {
            title: 'مركبة إنقاذ الآثار',
            tagline: 'ابنِ مركبتك، وتجوّل على القمر والمريخ، وحلّق في الفضاء السحيق، وأعد بناء الآلات التي تركها المستكشفون.',
            chooseWorld: 'اختر عالمًا',
            Moon: 'القمر', Mars: 'المريخ',
            MoonInfo: 'الجاذبية سُدس جاذبية الأرض. قفزات عالية وبطيئة!',
            MarsInfo: 'الجاذبية نحو ثلث جاذبية الأرض. تلال حمراء مغبرّة!',
            progress: 'أُعيد بناء {n} من {t} من الآثار',
            play: 'انطلق هنا',
            exit: 'خروج', worlds: 'العوالم',
            reset: 'ابدأ اللعبة من جديد', resetSure: 'اضغط مرة أخرى لمسح تقدّم اللعبة',
            workshop: 'ورشة المركبة',
            workshopIntro: 'أولًا، ابنِ مركبة الإنقاذ.',
            rebuilding: 'إعادة بناء',
            partOf: 'القطعة {n} من {t}',
            wrong: 'ليست هذه. هذه القطعة هي {name}. جرّب قطعة أخرى!',
            correct: 'إجابة صحيحة!',
            next: 'القطعة التالية', finish: 'إنهاء',
            roverReady: 'مركبتك جاهزة!',
            roverReadyText: 'توجّه إلى الأعمدة المضيئة. كل عمود يدل على أثر مكسور يمكنك إعادة بنائه.',
            keys: 'القيادة: W A S D أو الأسهم  ·  القفز: المسافة  ·  البناء: E',
            touch: 'استخدم عصا التحكم للقيادة والأزرار للقفز والبناء.',
            go: 'هيا بنا!',
            rebuild: 'أعد بناء هذا الأثر', view: 'شاهد هذا الأثر',
            leave: 'مغادرة',
            switchHint: 'كل القطع في مكانها. شغّله لتسمع ماذا اكتشف.',
            switchOn: 'شغّله',
            found: 'ماذا اكتشف',
            toQuiz: 'إلى سؤال الشارة',
            rebuilt: 'تمت إعادة بناء الأثر!',
            funFact: 'معلومة ممتعة',
            quiz: 'السؤال الأخير: أجب لتحصل على الشارة',
            quizWrong: 'ليست هذه. حاول مرة أخرى!',
            badge: 'حصلت على الشارة!',
            badgeHad: 'أحسنت! لديك هذه الشارة من قبل.',
            keep: 'واصل الاستكشاف',
            nearest: 'أقرب أثر مكسور: {d} م',
            allDone: 'اكتمل هذا العالم! أُعيد بناء كل الآثار هنا.',
            jump: 'قفز',
            Deep: 'الفضاء السحيق',
            DeepInfo: 'لا أرض ولا هواء. تظل سفينتك تنجرف حتى تدفعها في الاتجاه المعاكس!',
            flyKeys: 'الطيران: W للدفع، S للكبح، A و D للدوران  ·  أعلى / أسفل: المسافة / Shift  ·  البناء: E',
            flyTouch: 'استخدم عصا التحكم للطيران. تضبط السفينة ارتفاعها مع أقرب مسبار.',
            flyIntro: 'اتبع الرادار إلى أربعة مسابير صامتة تنجرف بعيداً عن الشمس.',
            rise: 'أعلى',
            signal: 'تحتاج الرسالة اللاسلكية من هذا البعد إلى نحو {h} ساعة لتصل إلى الأرض.',
            above: 'فوقك', below: 'تحتك'
        }
    };

    // Each part: [name, clue (the job that needs doing), fact shown after placing it]
    const PARTS = {
        wheels: { icon: 'fa-dharmachakra',
            en: ['Wheels', 'This machine has to roll over rocks and dust. Which part does that?', 'Space wheels are made of metal, not rubber tyres filled with air.'],
            ar: ['العجلات', 'يجب أن تسير هذه الآلة فوق الصخور والغبار. أي قطعة تفعل ذلك؟', 'عجلات الفضاء مصنوعة من المعدن، وليست إطارات مطاطية مملوءة بالهواء.'] },
        solar: { icon: 'fa-solar-panel',
            en: ['Solar panels', 'This machine needs electricity made from sunlight. Which part makes it?', 'Solar panels turn sunlight into electricity. Dust on them means less power!'],
            ar: ['الألواح الشمسية', 'تحتاج هذه الآلة إلى كهرباء من ضوء الشمس. أي قطعة تصنعها؟', 'الألواح الشمسية تحوّل ضوء الشمس إلى كهرباء. والغبار عليها يقلل الطاقة!'] },
        camera: { icon: 'fa-camera',
            en: ['Camera', 'Scientists on Earth want to see what this machine sees. Which part helps?', 'Space cameras sent home the first close-up pictures of other worlds.'],
            ar: ['الكاميرا', 'يريد العلماء على الأرض أن يروا ما تراه هذه الآلة. أي قطعة تساعد؟', 'كاميرات الفضاء أرسلت إلى الأرض أول صور قريبة للعوالم الأخرى.'] },
        dish: { icon: 'fa-satellite-dish',
            en: ['Dish antenna', 'This machine must talk to Earth, very far away. Which part sends the message?', 'A dish antenna aims radio signals at Earth like the beam of a torch.'],
            ar: ['الهوائي الطبقي', 'يجب أن تتحدث هذه الآلة مع الأرض البعيدة جدًا. أي قطعة ترسل الرسالة؟', 'الهوائي الطبقي يوجّه إشارات الراديو نحو الأرض مثل ضوء المصباح اليدوي.'] },
        legs: { icon: 'fa-arrows-down-to-line',
            en: ['Landing legs', 'This machine must land softly and stand without tipping over. Which part does that?', 'Landing legs squash a little at touchdown to soak up the bump.'],
            ar: ['أرجل الهبوط', 'يجب أن تهبط هذه الآلة بلطف وتقف دون أن تنقلب. أي قطعة تفعل ذلك؟', 'أرجل الهبوط تنضغط قليلًا عند الملامسة لتمتص الصدمة.'] },
        engine: { icon: 'fa-fire',
            en: ['Rocket engine', 'This machine must slow down so it does not crash. Which part pushes against the fall?', 'A rocket engine pushes hot gas one way so the spacecraft moves the other way.'],
            ar: ['المحرك الصاروخي', 'يجب أن تُبطئ هذه الآلة حتى لا تتحطم. أي قطعة تدفع عكس السقوط؟', 'المحرك الصاروخي يدفع الغاز الساخن في اتجاه فتتحرك المركبة في الاتجاه المعاكس.'] },
        ladder: { icon: 'fa-stairs',
            en: ['Ladder', 'Astronauts need to climb down to the ground. Which part do they use?', 'Neil Armstrong climbed down a ladder like this to take the first step on the Moon.'],
            ar: ['السلّم', 'يحتاج رواد الفضاء إلى النزول إلى السطح. أي قطعة يستخدمون؟', 'نزل نيل أرمسترونغ على سلّم مثل هذا ليخطو أول خطوة على القمر.'] },
        seats: { icon: 'fa-chair',
            en: ['Seats', 'Two astronauts need to ride along. Which part holds them?', 'The Moon buggy seats were like light garden chairs with seat belts.'],
            ar: ['المقاعد', 'يحتاج رائدا فضاء إلى الركوب. أي قطعة تحملهما؟', 'مقاعد عربة القمر كانت تشبه كراسي الحديقة الخفيفة ولها أحزمة أمان.'] },
        seismo: { icon: 'fa-wave-square',
            en: ['Seismometer', 'Scientists want to feel the ground shake. Which part listens for quakes?', 'A seismometer feels moonquakes and marsquakes, tiny shakes from deep underground.'],
            ar: ['مقياس الزلازل', 'يريد العلماء أن يشعروا باهتزاز الأرض. أي قطعة تستمع للزلازل؟', 'مقياس الزلازل يشعر بزلازل القمر والمريخ، وهي اهتزازات صغيرة من أعماق الأرض.'] },
        rtg: { icon: 'fa-battery-full',
            en: ['Nuclear battery', 'This machine needs power even in the long, cold, dark night. Which part gives it?', 'A nuclear battery makes electricity from the heat of a special warm metal, day and night.'],
            ar: ['البطارية النووية', 'تحتاج هذه الآلة إلى طاقة حتى في الليل الطويل البارد المظلم. أي قطعة تعطيها؟', 'البطارية النووية تصنع الكهرباء من حرارة معدن خاص دافئ، ليلًا ونهارًا.'] },
        mirrors: { icon: 'fa-table-cells',
            en: ['Mirrors', 'Scientists shine a laser from Earth and need it to bounce straight back. Which part does that?', 'Scientists still bounce lasers off these mirrors to measure how far away the Moon is!'],
            ar: ['المرايا', 'يطلق العلماء ليزرًا من الأرض ويريدون أن يرتد إليهم مباشرة. أي قطعة تفعل ذلك؟', 'ما زال العلماء يعكسون الليزر على هذه المرايا ليقيسوا بُعد القمر!'] },
        arm: { icon: 'fa-hand',
            en: ['Robot arm', 'This machine needs to reach out and place its tools. Which part does that?', 'A robot arm works like yours, with a shoulder, an elbow and a wrist.'],
            ar: ['الذراع الآلية', 'تحتاج هذه الآلة إلى أن تمد يدها وتضع أدواتها. أي قطعة تفعل ذلك؟', 'الذراع الآلية تعمل مثل ذراعك، ولها كتف ومرفق ورسغ.'] },
        scoop: { icon: 'fa-trowel',
            en: ['Digging scoop', 'This machine needs to dig into the soil. Which part does that?', 'Scoops dug small trenches to find out what the soil is made of.'],
            ar: ['مغرفة الحفر', 'تحتاج هذه الآلة إلى الحفر في التربة. أي قطعة تفعل ذلك؟', 'حفرت المغارف خنادق صغيرة لمعرفة مما تتكون التربة.'] },
        rotors: { icon: 'fa-fan',
            en: ['Rotor blades', 'This machine has to fly in very thin air. Which part lifts it?', 'Mars air is so thin that the blades spin about 2,400 times a minute to lift off.'],
            ar: ['شفرات المروحة', 'يجب أن تطير هذه الآلة في هواء رقيق جدًا. أي قطعة ترفعها؟', 'هواء المريخ رقيق جدًا، لذلك تدور الشفرات نحو ٢٤٠٠ مرة في الدقيقة لترتفع.'] },
        heatshield: { icon: 'fa-shield-halved',
            en: ['Heat shield', 'This machine dives into the air faster than a bullet and gets burning hot. Which part protects it?', 'A heat shield takes the fiery heat of arrival so the rover inside stays cool.'],
            ar: ['الدرع الحراري', 'تندفع هذه الآلة في الهواء أسرع من الرصاصة وتسخن بشدة. أي قطعة تحميها؟', 'الدرع الحراري يتحمل حرارة الدخول الشديدة لتبقى المركبة في الداخل باردة.'] },
        cables: { icon: 'fa-link',
            en: ['Sky crane cables', 'This machine has to lower a heavy rover gently to the ground. Which part does that?', 'The sky crane hovered on rockets, lowered Perseverance on cables, then flew away.'],
            ar: ['حبال الرافعة السماوية', 'يجب أن تُنزل هذه الآلة مركبة ثقيلة بلطف إلى السطح. أي قطعة تفعل ذلك؟', 'حلّقت الرافعة السماوية بالصواريخ وأنزلت «بيرسيفيرانس» بالحبال ثم طارت بعيدًا.'] },
        brain: { icon: 'fa-microchip',
            en: ['Computer ring', 'This rocket needs a brain to steer it. Which part is that?', 'This ring held the computers that steered the giant Saturn V rocket.'],
            ar: ['حلقة الحاسوب', 'يحتاج هذا الصاروخ إلى عقل يوجّهه. أي قطعة هي؟', 'هذه الحلقة كانت تحمل الحواسيب التي وجّهت صاروخ «ساتورن ٥» العملاق.'] }
    };
    Object.assign(PARTS, {
        bigdish: { icon: 'fa-satellite-dish',
            en: ['Giant dish antenna', 'This machine is billions of kilometres from Earth and must still be heard. Which part sends its faint voice home?', 'The dish is wider than a car, yet the radio behind it uses only about as much power as a small light bulb.'],
            ar: ['الهوائي الطبقي العملاق', 'هذه الآلة تبعد مليارات الكيلومترات عن الأرض ويجب أن يُسمع صوتها. أي قطعة ترسل صوتها الخافت إلى الأرض؟', 'الطبق أعرض من سيارة، لكن الراديو خلفه يستخدم طاقة لا تزيد على طاقة مصباح صغير تقريباً.'] },
        rtgboom: { icon: 'fa-radiation',
            en: ['Nuclear power arm', 'Out here the Sun is only the brightest dot in the sky, far too weak for solar panels. Which part makes the electricity?', 'The nuclear power units make electricity from heat. They sit out on an arm, away from the instruments.'],
            ar: ['ذراع الطاقة النووية', 'الشمس هنا مجرد أسطع نقطة في السماء، وهي أضعف من أن تشغّل الألواح الشمسية. أي قطعة تصنع الكهرباء؟', 'وحدات الطاقة النووية تصنع الكهرباء من الحرارة. وهي موضوعة على ذراع بعيدة عن الأجهزة.'] },
        record: { icon: 'fa-record-vinyl',
            en: ['Message from Earth', 'One day, far in the future, someone might find this machine. Which part tells them who sent it?', 'The Voyagers carry a Golden Record of sounds and pictures. The Pioneers carry a plaque with a drawing of two people.'],
            ar: ['رسالة من الأرض', 'قد يعثر أحد على هذه الآلة يوماً ما في المستقبل البعيد. أي قطعة تخبره من أرسلها؟', 'تحمل مركبتا فوياجر أسطوانة ذهبية فيها أصوات وصور. وتحمل مركبتا بايونير لوحة عليها رسم لشخصين.'] },
        magboom: { icon: 'fa-magnet',
            en: ['Magnetometer boom', 'Scientists want to measure invisible magnetic fields in space. Which part holds that sensor far away from the machine itself?', 'The sensor sits at the end of a long boom so that the spacecraft\'s own magnetism does not confuse it.'],
            ar: ['ذراع مقياس المغناطيسية', 'يريد العلماء قياس المجالات المغناطيسية غير المرئية في الفضاء. أي قطعة تحمل هذا الجهاز بعيداً عن الآلة نفسها؟', 'يوضع الجهاز في نهاية ذراع طويلة حتى لا تربكه مغناطيسية المركبة نفسها.'] }
    });
    const CONFUSABLE = { arm: ['scoop'], scoop: ['arm'], solar: ['rtg', 'rtgboom'], rtg: ['solar', 'rtgboom'],
                         rtgboom: ['rtg', 'solar'], bigdish: ['dish'], dish: ['bigdish'] };

    // Which 3D model each relic uses
    const MODEL_FOR = {
        'apollo11-stage': 'descent', 'apollo12-stage': 'descent', 'apollo14-stage': 'descent',
        'apollo15-stage': 'descent', 'apollo16-stage': 'descent', 'apollo17-stage': 'descent',
        'lunar-rover': 'lrv', 'alsep-package': 'alsep', 'retroreflector-arrays': 'retro',
        'surveyor-3': 'surveyor3', 'surveyor-1': 'surveyor', 'lunar-orbiter-crash-sites': 'orbiter',
        'saturn-s4b-stages': 's4b', 'ranger-probes': 'ranger',
        'opportunity-oppy': 'mer', 'spirit-rover': 'mer', 'sojourner-rover': 'sojourner',
        'perseverance-shield': 'skycrane', 'ingenuity-helicopter': 'ingenuity',
        'insight-lander': 'insight', 'phoenix-lander': 'phoenix',
        'viking1-lander': 'viking', 'viking2-lander': 'viking', 'mars-polar-lander': 'mpl',
        'voyager-1': 'voyager', 'voyager-2': 'voyager', 'pioneer-10': 'pioneer', 'pioneer-11': 'pioneer'
    };

    const lang = () => (typeof currentLang !== 'undefined' && TEXT[currentLang]) ? currentLang : 'en';
    const tr = (key, vars) => {
        let s = TEXT[lang()][key] || TEXT.en[key] || key;
        if (vars) Object.keys(vars).forEach(k => { s = s.replace('{' + k + '}', num(vars[k])); });
        return s;
    };
    const num = v => (lang() === 'ar' && typeof toArabicNumerals === 'function' && typeof v === 'number') ? toArabicNumerals(v) : v;
    const partText = key => PARTS[key][lang()] || PARTS[key].en;
    const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
    const click = () => { if (typeof playClickSound === 'function') playClickSound(); };
    const fanfare = () => { if (typeof playBadgeSound === 'function') playBadgeSound(); };

    /* ---------------- 2. SAVED PROGRESS ---------------- */
    let save = { rover: false, done: [], stars: {} };
    try {
        const raw = JSON.parse(localStorage.getItem(SAVE_KEY));
        if (raw && Array.isArray(raw.done)) save = { rover: !!raw.rover, done: raw.done, stars: raw.stars || {} };
    } catch (e) { /* no saved game */ }
    const persist = () => { try { localStorage.setItem(SAVE_KEY, JSON.stringify(save)); } catch (e) { /* storage unavailable */ } };
    const totalStars = () => Object.values(save.stars).reduce((a, b) => a + b, 0);

    /* ---------------- 3. LOW-POLY MODEL KIT ---------------- */
    let C = null;        // shared materials, created on first open
    let GHOST = null;    // see-through material for parts not placed yet

    function makeMaterials() {
        const mat = (color, o) => new THREE.MeshStandardMaterial(Object.assign({ color, flatShading: true, roughness: 0.85, metalness: 0.05 }, o));
        C = {
            gold: mat(0xd4a017, { metalness: 0.45, roughness: 0.5 }),
            white: mat(0xe8ebef),
            whiteDS: mat(0xe8ebef, { side: THREE.DoubleSide }),
            grey: mat(0x8b93a1),
            dark: mat(0x2b303b),
            darkDS: mat(0x3a3f4b, { side: THREE.DoubleSide, metalness: 0.4 }),
            black: mat(0x14161c),
            blue: mat(0x1d3fa8, { metalness: 0.35, roughness: 0.4 }),
            silver: mat(0xcfd6df, { metalness: 0.6, roughness: 0.35 }),
            tan: mat(0xa9713f),
            seat: mat(0xc9b08a),
            cyan: mat(0x00f2fe, { emissive: 0x007c85 }),
            glass: mat(0x8fe9ff, { emissive: 0x115566, metalness: 0.7, roughness: 0.2 })
        };
        GHOST = new THREE.MeshBasicMaterial({ color: 0x00f2fe, transparent: true, opacity: 0.2, depthWrite: false });
    }

    const box = (w, h, d) => new THREE.BoxGeometry(w, h, d);
    const cyl = (rt, rb, h, seg, open) => new THREE.CylinderGeometry(rt, rb, h, seg || 10, 1, !!open);
    function m(geo, material, x, y, z, rx, ry, rz) {
        const o = new THREE.Mesh(geo, material);
        o.position.set(x || 0, y || 0, z || 0);
        o.rotation.set(rx || 0, ry || 0, rz || 0);
        return o;
    }
    function grp() {
        const g = new THREE.Group();
        for (let i = 0; i < arguments.length; i++) g.add(arguments[i]);
        return g;
    }
    // A thin rod between two points
    function rod(a, b, r, material) {
        const A = new THREE.Vector3(a[0], a[1], a[2]), B = new THREE.Vector3(b[0], b[1], b[2]);
        const dir = B.clone().sub(A);
        const o = new THREE.Mesh(cyl(r, r, dir.length(), 6), material);
        o.position.copy(A).add(B).multiplyScalar(0.5);
        o.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize());
        return o;
    }

    const P = {
        wheels(w, l, r, n) {
            const g = grp(); g.userData.wheels = [];
            const rows = n / 2;
            for (let i = 0; i < rows; i++) {
                const z = rows === 1 ? 0 : -l / 2 + l * i / (rows - 1);
                [-1, 1].forEach(s => {
                    const wheel = grp(m(cyl(r, r, r * 0.7, 10), C.dark, 0, 0, 0, 0, 0, Math.PI / 2),
                                      m(box(r * 0.8, r * 1.7, r * 0.2), C.silver));
                    wheel.position.set(s * w / 2, r, z);
                    g.add(wheel); g.userData.wheels.push(wheel);
                });
            }
            return g;
        },
        solarDeck(w, l, y, z) {
            return grp(m(box(w, 0.06, l), C.blue, 0, y, z || 0), m(box(w + 0.1, 0.03, l + 0.1), C.silver, 0, y - 0.04, z || 0));
        },
        solarRound(r, dist, y) {
            const g = grp();
            [-1, 1].forEach(s => {
                g.add(m(cyl(r, r, 0.06, 10), C.blue, s * dist, y, 0));
                g.add(m(box(dist, 0.05, 0.1), C.silver, s * dist / 2, y - 0.05, 0));
            });
            return g;
        },
        solarWings(w, l, dist, y) {
            const g = grp();
            [-1, 1].forEach(s => {
                g.add(m(box(w, 0.05, l), C.blue, s * dist, y, 0));
                g.add(m(box(dist, 0.05, 0.08), C.silver, s * dist / 2, y - 0.04, 0));
            });
            return g;
        },
        cameraMast(h, x, y, z) {
            const g = grp(m(cyl(0.05, 0.05, h, 6), C.silver, 0, h / 2, 0),
                          m(box(0.45, 0.22, 0.22), C.white, 0, h + 0.1, 0),
                          m(cyl(0.07, 0.07, 0.06, 8), C.black, -0.12, h + 0.1, 0.12, Math.PI / 2),
                          m(cyl(0.07, 0.07, 0.06, 8), C.black, 0.12, h + 0.1, 0.12, Math.PI / 2));
            g.position.set(x, y, z);
            return g;
        },
        cameraBox(x, y, z) {
            const g = grp(m(box(0.34, 0.3, 0.3), C.white), m(cyl(0.1, 0.1, 0.12, 8), C.black, 0, 0, 0.2, Math.PI / 2));
            g.position.set(x, y, z);
            return g;
        },
        dish(r, h, x, y, z) {
            const g = grp(m(cyl(0.04, 0.04, h, 6), C.silver, 0, h / 2, 0),
                          m(new THREE.ConeGeometry(r, r * 0.45, 12, 1, true), C.whiteDS, 0, h + r * 0.15, 0, Math.PI - 0.5),
                          m(new THREE.SphereGeometry(r * 0.12, 6, 5), C.dark, 0, h + r * 0.45, r * 0.25));
            g.position.set(x, y, z);
            return g;
        },
        legs(n, r0, r1, yTop, pad) {
            const g = grp();
            for (let i = 0; i < n; i++) {
                const a = i / n * Math.PI * 2 + Math.PI / n;
                const cx = Math.cos(a), cz = Math.sin(a);
                g.add(rod([cx * r0, yTop, cz * r0], [cx * r1, 0.08, cz * r1], 0.06, C.silver));
                g.add(rod([cx * r0, yTop * 0.55, cz * r0], [cx * r1, 0.08, cz * r1], 0.04, C.silver));
                g.add(m(cyl(pad || 0.3, pad || 0.3, 0.08, 8), C.gold, cx * r1, 0.04, cz * r1));
            }
            return g;
        },
        engine(rTop, rBottom, h, x, y, z) {
            return grp(m(cyl(rTop, rBottom, h, 12, true), C.darkDS, x, y, z));
        },
        ladder(yTop, z) {
            const g = grp();
            [-0.2, 0.2].forEach(x => g.add(rod([x, yTop, z], [x, 0.15, z + 1.0], 0.035, C.silver)));
            for (let i = 1; i <= 5; i++) {
                const t = i / 6;
                g.add(m(box(0.44, 0.04, 0.06), C.silver, 0, yTop + (0.15 - yTop) * t, z + t));
            }
            return g;
        },
        seats(y, z) {
            const g = grp();
            [-0.38, 0.38].forEach(x => {
                g.add(m(box(0.5, 0.1, 0.5), C.seat, x, y, z));
                g.add(m(box(0.5, 0.55, 0.08), C.seat, x, y + 0.3, z - 0.25));
            });
            return g;
        },
        seismo(x, z) {
            return grp(m(new THREE.SphereGeometry(0.5, 10, 6, 0, Math.PI * 2, 0, Math.PI / 2), C.silver, x, 0, z),
                       m(cyl(0.58, 0.58, 0.06, 10), C.gold, x, 0.03, z));
        },
        rtg(x, y, z) {
            const g = grp(m(cyl(0.2, 0.2, 0.9, 8), C.dark));
            for (let i = 0; i < 4; i++) g.add(m(box(0.75, 0.8, 0.04), C.grey, 0, 0, 0, 0, i * Math.PI / 4, 0));
            g.position.set(x, y, z);
            return g;
        },
        mirrors(y) {
            const g = grp(m(box(1.1, 0.08, 1.1), C.white), m(box(0.95, 0.05, 0.95), C.glass, 0, 0.05, 0));
            g.position.set(0, y, 0); g.rotation.x = -0.45;
            return g;
        },
        arm(x, y, z) {
            const g = grp(rod([0, 0, 0], [0, 0.6, 0.55], 0.05, C.silver),
                          rod([0, 0.6, 0.55], [0, 0.05, 1.3], 0.045, C.silver),
                          m(box(0.18, 0.14, 0.22), C.dark, 0, 0.02, 1.36));
            g.position.set(x, y, z);
            return g;
        },
        rotors(y, len) {
            const a = m(box(len, 0.03, 0.14), C.dark, 0, y + 0.3, 0);
            const b = m(box(len, 0.03, 0.14), C.dark, 0, y + 0.44, 0, 0, Math.PI / 2, 0);
            const g = grp(m(cyl(0.03, 0.03, 0.5, 6), C.silver, 0, y + 0.25, 0), a, b);
            g.userData.spin = [a, b];
            return g;
        }
    };

    /* Each builder returns { base: [meshes], parts: [[key, object], ...], radius, scale } */
    const MODELS = {
        player() {
            return { radius: 2.2,
                base: [m(box(1.3, 0.4, 1.9), C.white, 0, 0.75, 0), m(box(1.33, 0.1, 1.93), C.cyan, 0, 0.62, 0),
                       m(box(0.25, 0.12, 0.05), C.glass, -0.4, 0.8, 0.96), m(box(0.25, 0.12, 0.05), C.glass, 0.4, 0.8, 0.96)],
                parts: [['wheels', P.wheels(1.75, 1.7, 0.38, 6)], ['solar', P.solarDeck(1.5, 1.5, 0.99, -0.1)],
                        ['camera', P.cameraMast(1.0, 0, 1.0, 0.7)], ['dish', P.dish(0.35, 0.7, -0.4, 1.0, -0.6)]] };
        },
        descent() {
            return { radius: 3,
                base: [m(cyl(1.5, 1.5, 1, 8), C.gold, 0, 1.6, 0), m(cyl(1.2, 1.2, 0.1, 8), C.silver, 0, 2.15, 0)],
                parts: [['legs', P.legs(4, 1.4, 2.7, 1.5)], ['engine', P.engine(0.25, 0.65, 0.8, 0, 0.72, 0)], ['ladder', P.ladder(1.9, 1.45)]] };
        },
        lrv() {
            return { radius: 2.6,
                base: [m(box(1.5, 0.15, 2.8), C.grey, 0, 0.6, 0), m(box(0.5, 0.3, 0.3), C.dark, 0, 0.85, 0.5)],
                parts: [['wheels', P.wheels(1.9, 2.2, 0.4, 4)], ['seats', P.seats(0.72, -0.4)], ['dish', P.dish(0.5, 1.3, 0, 0.67, 1.15)]] };
        },
        alsep() {
            return { radius: 2.8,
                base: [m(box(0.9, 0.7, 0.9), C.gold, 0, 0.45, 0), m(box(1.0, 0.06, 1.0), C.white, 0, 0.83, 0)],
                parts: [['rtg', P.rtg(-1.8, 0.5, 0.3)], ['seismo', P.seismo(1.9, 0.7)], ['dish', P.dish(0.3, 0.7, 0, 0.85, 0)]] };
        },
        retro() {
            return { radius: 2, scale: 1.5,
                base: [m(box(1.2, 0.08, 1.2), C.grey, 0, 0.05, 0)],
                parts: [['legs', P.legs(4, 0.35, 0.6, 0.45, 0.1)], ['mirrors', P.mirrors(0.55)]] };
        },
        surveyor(withScoop) {
            const parts = [['legs', P.legs(3, 0.8, 2.1, 1.2)], ['solar', grp(m(box(1.3, 0.05, 0.9), C.blue, 0, 3.05, 0, 0.5, 0, 0))],
                           ['camera', P.cameraBox(0.2, 1.75, 0.8)]];
            if (withScoop) parts.push(['scoop', P.arm(-0.5, 1.2, 0.4)]);
            return { radius: 3,
                base: [m(cyl(0.9, 0.9, 0.4, 3), C.silver, 0, 1.3, 0), m(box(0.45, 0.5, 0.45), C.white, 0.45, 1.6, 0),
                       m(box(0.45, 0.5, 0.45), C.white, -0.4, 1.6, 0.25), m(cyl(0.05, 0.05, 1.5, 6), C.silver, 0, 2.25, 0)],
                parts };
        },
        surveyor3() { return MODELS.surveyor(true); },
        orbiter() {
            const solar = grp();
            for (let i = 0; i < 4; i++) {
                const a = i * Math.PI / 2;
                solar.add(m(box(1.0, 0.05, 0.8), C.blue, Math.cos(a) * 1.25, 0.45, Math.sin(a) * 1.25, 0, -a, 0));
            }
            return { radius: 2.6, tilt: 0.3,
                base: [m(cyl(0.5, 0.75, 1.1, 10), C.silver, 0, 0.95, 0), m(cyl(0.3, 0.5, 0.4, 8), C.gold, 0, 1.7, 0)],
                parts: [['solar', solar], ['dish', P.dish(0.4, 0.5, 0, 1.85, 0)], ['camera', P.cameraBox(0, 0.9, 0.75)]] };
        },
        s4b() {
            return { radius: 4.2,
                base: [m(cyl(1.5, 1.5, 5, 14), C.white, 0, 1.6, 0, 0, 0, Math.PI / 2),
                       m(cyl(1.52, 1.52, 0.6, 14), C.black, -1.4, 1.6, 0, 0, 0, Math.PI / 2)],
                parts: [['engine', grp(m(cyl(0.3, 0.95, 1.2, 12, true), C.darkDS, -3.1, 1.6, 0, 0, 0, -Math.PI / 2))],
                        ['brain', grp(m(cyl(1.56, 1.56, 0.5, 14), C.black, 2.75, 1.6, 0, 0, 0, Math.PI / 2),
                                      m(cyl(1.58, 1.58, 0.08, 14), C.gold, 2.75, 1.6, 0, 0, 0, Math.PI / 2))]] };
        },
        ranger() {
            return { radius: 2.6, tilt: 0.35,
                base: [m(cyl(0.75, 0.75, 0.35, 6), C.silver, 0, 0.8, 0), m(cyl(0.18, 0.45, 1.6, 6), C.white, 0, 1.78, 0)],
                parts: [['solar', P.solarWings(1.3, 0.7, 1.4, 0.82)], ['dish', P.dish(0.4, 0.5, 0, 0.95, -0.55)], ['camera', P.cameraBox(0, 2.7, 0)]] };
        },
        mer() {
            return { radius: 2.4,
                base: [m(box(1.1, 0.35, 1.4), C.gold, 0, 0.75, 0)],
                parts: [['wheels', P.wheels(1.5, 1.5, 0.28, 6)], ['solar', P.solarDeck(2.2, 1.7, 0.97)],
                        ['camera', P.cameraMast(1.2, 0, 1.0, 0.55)], ['arm', P.arm(0.3, 0.7, 0.7)]] };
        },
        sojourner() {
            return { radius: 1.7, scale: 0.6,
                base: [m(box(1.1, 0.35, 1.5), C.gold, 0, 0.75, 0)],
                parts: [['wheels', P.wheels(1.5, 1.5, 0.28, 6)], ['solar', P.solarDeck(1.2, 1.6, 0.97)], ['camera', P.cameraBox(0, 0.78, 0.9)]] };
        },
        skycrane() {
            const eng = grp();
            [-1.2, 1.2].forEach(x => [-0.9, 0.9].forEach(z => eng.add(m(cyl(0.12, 0.3, 0.5, 8, true), C.darkDS, x, 0.28, z))));
            return { radius: 4,
                base: [m(box(2.4, 0.5, 1.8), C.silver, 0, 0.75, 0),
                       m(new THREE.SphereGeometry(0.4, 8, 6), C.gold, -0.6, 1.1, 0), m(new THREE.SphereGeometry(0.4, 8, 6), C.gold, 0.6, 1.1, 0)],
                parts: [['heatshield', grp(m(cyl(0.5, 1.8, 0.6, 14), C.tan, 4.2, 0.3, 1.4, 0, 0, 0.12))],
                        ['engine', eng],
                        ['cables', grp(rod([1.2, 0.6, 0], [3.0, 0.05, 0.3], 0.03, C.white), rod([1.2, 0.6, 0.3], [2.6, 0.05, -1.2], 0.03, C.white),
                                       rod([1.2, 0.6, -0.3], [2.2, 0.05, -2.0], 0.03, C.white))]] };
        },
        ingenuity() {
            return { radius: 2.4, scale: 1.8,
                base: [m(box(0.35, 0.35, 0.35), C.gold, 0, 0.55, 0)],
                parts: [['legs', P.legs(4, 0.15, 0.6, 0.45, 0.06)], ['rotors', P.rotors(0.72, 2.2)],
                        ['solar', grp(m(box(0.5, 0.04, 0.3), C.blue, 0, 1.25, 0))]] };
        },
        insight() {
            return { radius: 3.4,
                base: [m(cyl(1, 1, 0.3, 8), C.gold, 0, 0.9, 0), P.legs(3, 0.8, 1.2, 0.8, 0.2)],
                parts: [['solar', P.solarRound(1.05, 2.1, 0.95)],
                        ['seismo', grp(P.seismo(0, 2.4), rod([0, 0.9, 1], [0, 0.35, 2.2], 0.02, C.white))],
                        ['arm', P.arm(0.4, 1.05, 0.5)]] };
        },
        phoenix() {
            return { radius: 3.4,
                base: [m(cyl(1, 1, 0.3, 8), C.silver, 0, 0.9, 0), m(cyl(0.03, 0.03, 1, 5), C.silver, -0.5, 1.55, -0.4)],
                parts: [['legs', P.legs(3, 0.8, 1.3, 0.8, 0.2)], ['solar', P.solarRound(1.05, 2.1, 0.95)], ['scoop', P.arm(0.4, 1.05, 0.5)]] };
        },
        viking() {
            return { radius: 3.2,
                base: [m(cyl(1.2, 1.2, 0.5, 6), C.white, 0, 1.05, 0), m(cyl(0.12, 0.12, 0.5, 8), C.silver, -0.5, 1.55, 0.6),
                       m(cyl(0.12, 0.12, 0.5, 8), C.silver, 0.5, 1.55, 0.6)],
                parts: [['legs', P.legs(3, 1, 1.7, 0.85)], ['rtg', P.rtg(-0.75, 1.75, -0.5)],
                        ['dish', P.dish(0.55, 1.0, 0.2, 1.3, -0.3)], ['scoop', P.arm(0, 1.1, 1.0)]] };
        },
        // The player's scout ship for Deep Space (ready built, nothing to assemble)
        ship() {
            return { radius: 2.2,
                base: [m(cyl(0.1, 0.75, 2.6, 8), C.white, 0, 0.9, 0.3, Math.PI / 2), m(cyl(0.75, 0.55, 1.0, 8), C.grey, 0, 0.9, -1.5, Math.PI / 2),
                       m(box(3.0, 0.08, 1.0), C.cyan, 0, 0.9, -1.1), m(box(0.08, 0.9, 0.8), C.cyan, 0, 1.4, -1.4),
                       m(new THREE.SphereGeometry(0.42, 8, 6), C.glass, 0, 1.15, 0.5), m(cyl(0.45, 0.3, 0.4, 8, true), C.darkDS, 0, 0.9, -2.15, Math.PI / 2)],
                parts: [] };
        },
        probe(pioneer) {
            const dishR = pioneer ? 1.5 : 1.9;
            const rtg = grp();
            if (pioneer) {
                [-1, 1].forEach(sx => {
                    rtg.add(rod([0, 0.9, 0], [sx * 2.6, 0.9, -1.5], 0.035, C.silver));
                    rtg.add(m(cyl(0.2, 0.2, 0.7, 8), C.dark, sx * 2.6, 0.9, -1.5, 0, 0, Math.PI / 2));
                });
            } else {
                rtg.add(rod([0, 0.9, 0], [-3.2, 0.6, 0], 0.04, C.silver));
                for (let i = 0; i < 3; i++) rtg.add(m(cyl(0.22, 0.22, 0.6, 8), C.dark, -1.9 - i * 0.65, 0.72 - i * 0.06, 0, 0, 0, Math.PI / 2));
            }
            const record = pioneer
                ? grp(m(box(0.5, 0.3, 0.03), C.gold, 0, 0.9, 0.92))
                : grp(m(cyl(0.36, 0.36, 0.04, 16), C.gold, 0, 0.9, 0.94, Math.PI / 2), m(cyl(0.08, 0.08, 0.05, 8), C.dark, 0, 0.9, 0.95, Math.PI / 2));
            const magLen = pioneer ? 3.4 : 5.5;
            const mag = grp(rod([0, 0.9, 0], [magLen, 1.3, 0.6], 0.03, C.silver), rod([0, 1.1, 0], [magLen, 1.3, 0.6], 0.02, C.silver),
                            m(box(0.25, 0.25, 0.25), C.gold, magLen, 1.3, 0.6));
            const dish = grp(m(new THREE.ConeGeometry(dishR, dishR * 0.4, 16, 1, true), C.whiteDS, 0, 1.25 + dishR * 0.2, 0, Math.PI),
                             rod([0, 1.2, 0], [0, 1.25 + dishR * 0.75, 0], 0.03, C.silver),
                             m(new THREE.SphereGeometry(0.14, 6, 5), C.dark, 0, 1.3 + dishR * 0.75, 0));
            return { radius: pioneer ? 3.2 : 4.2,
                base: [m(cyl(0.9, 0.9, 0.5, pioneer ? 6 : 10), pioneer ? C.silver : C.gold, 0, 0.9, 0), m(cyl(0.5, 0.5, 0.2, 8), C.dark, 0, 0.58, 0)],
                parts: [['bigdish', dish], ['rtgboom', rtg], ['magboom', mag], ['record', record]] };
        },
        voyager() { return MODELS.probe(false); },
        pioneer() { return MODELS.probe(true); },
        mpl() {
            return { radius: 3.2,
                base: [m(cyl(0.9, 0.9, 0.3, 8), C.gold, 0, 0.9, 0)],
                parts: [['legs', P.legs(3, 0.7, 1.3, 0.8, 0.2)], ['solar', P.solarWings(1.4, 1.6, 1.7, 0.95)], ['scoop', P.arm(0.3, 1.05, 0.5)]] };
        }
    };

    function buildModel(kind) {
        const def = MODELS[kind]();
        const outer = new THREE.Group();
        const inner = new THREE.Group();
        outer.add(inner);
        def.base.forEach(b => inner.add(b));
        const parts = def.parts.map(([key, obj]) => {
            inner.add(obj);
            obj.userData.homeY = obj.position.y;
            obj.traverse(o => { if (o.isMesh) o.userData.realMat = o.material; });
            return { key, obj, placed: false };
        });
        if (def.scale) inner.scale.setScalar(def.scale);
        if (def.tilt) inner.rotation.z = def.tilt;
        return { group: outer, parts, radius: def.radius };
    }
    function setGhost(part, on) {
        part.obj.traverse(o => { if (o.isMesh) o.material = on ? GHOST : o.userData.realMat; });
    }
    // 'wreck' = half-buried and leaning, missing parts hidden. 'build' = upright with ghost parts. 'done' = complete.
    function poseModel(model, mode, groundY) {
        const g = model.group;
        g.rotation.set(mode === 'wreck' ? -0.1 : 0, g.rotation.y, mode === 'wreck' ? 0.18 : 0);
        g.position.y = groundY - (mode === 'wreck' ? model.radius * 0.1 : 0);
        model.parts.forEach(p => {
            const real = mode === 'done' || p.placed;
            p.obj.visible = mode !== 'wreck' || real;
            setGhost(p, !real);
            if (!p.anim) { p.obj.position.y = p.obj.userData.homeY; p.obj.scale.setScalar(1); }
        });
    }

    /* ---------------- 4. WORLD ---------------- */
    function rng(seed) {
        return function () {
            seed |= 0; seed = seed + 0x6D2B79F5 | 0;
            let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
            t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
            return ((t ^ t >>> 14) >>> 0) / 4294967296;
        };
    }
    const smooth = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

    const WORLDS = {
        Moon: { sky: 0x02030a, fog: [0x02030a, 130, 320], ground: [0x8f939b, 0x6f737c], gravity: 3.24, sun: 1.15, ambient: 0.35, craters: 34, rocks: 110, seed: 11 },
        Mars: { sky: 0xd9a274, fog: [0xd9a274, 55, 250], ground: [0xb85a30, 0x8f4324], gravity: 7.42, sun: 0.95, ambient: 0.6, craters: 8, rocks: 190, seed: 29 }
    };

    let G = null;   // everything about the running game

    // Deep Space: no ground. Planets are scenery (not to scale); four probes drift far from the Sun.
    const SPACE_LIMIT = 900;
    const SPACE_SITES = {
        'pioneer-10': { at: [-70, 6, 230], hours: 20 },
        'pioneer-11': { at: [95, -10, 400], hours: 17 },
        'voyager-2': { at: [60, 8, 640], hours: 20 },
        'voyager-1': { at: [-50, 14, 800], hours: 24 }
    };
    function createSpace() {
        const rand = rng(77);
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x01020a);
        scene.add(new THREE.AmbientLight(0x8899cc, 0.4));
        const sunLight = new THREE.PointLight(0xfff2d0, 0.75, 0, 0);
        sunLight.position.set(0, 30, -320);
        scene.add(sunLight);

        const spin = [];
        const planets = [];   // solid: the ship is pushed away from them
        function planet(x, y, z, r, bands, ring) {
            const geo = new THREE.SphereGeometry(r, 20, 14);
            const pos = geo.attributes.position, col = new Float32Array(pos.count * 3), c = new THREE.Color();
            for (let i = 0; i < pos.count; i++) {
                const lat = (pos.getY(i) / r + 1) / 2;
                c.setHex(bands[Math.min(bands.length - 1, Math.floor(lat * bands.length))]);
                col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
            }
            geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
            const mesh = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: 1 }));
            mesh.position.set(x, y, z);
            scene.add(mesh); spin.push(mesh); planets.push({ x, y, z, r });
            if (ring) {
                const rg = new THREE.Mesh(new THREE.RingGeometry(r * 1.35, r * 2.2, 48),
                    new THREE.MeshBasicMaterial({ color: 0xd8c79a, side: THREE.DoubleSide, transparent: true, opacity: 0.75 }));
                rg.position.set(x, y, z); rg.rotation.x = -Math.PI / 2 + 0.35;
                scene.add(rg);
            }
        }
        const sun = new THREE.Mesh(new THREE.SphereGeometry(42, 20, 14), new THREE.MeshBasicMaterial({ color: 0xffd76a }));
        sun.position.set(0, 30, -320);
        scene.add(sun); planets.push({ x: 0, y: 30, z: -320, r: 42 });
        planet(-170, -10, 170, 46, [0xc9a27a, 0xe6d3b3, 0xb07a52, 0xe9dcc3, 0xc48f63, 0xe6d3b3, 0xb5825a]);   // Jupiter
        planet(210, 5, 360, 36, [0xd9c38f, 0xeadfb4, 0xcfb57c, 0xeadfb4, 0xd9c38f], true);                    // Saturn
        planet(-190, 20, 540, 24, [0x9fe3e6, 0xb8eef0, 0x9fe3e6]);                                             // Uranus
        planet(170, -15, 700, 23, [0x2f55d4, 0x4a74ea, 0x2f55d4, 0x3f66de]);                                   // Neptune

        // Stars all around, and drifting dust that makes speed visible
        const starPos = new Float32Array(1500 * 3);
        for (let i = 0; i < 1500; i++) {
            const a = rand() * Math.PI * 2, e = (rand() - 0.5) * Math.PI;
            starPos[i * 3] = Math.cos(a) * Math.cos(e) * 2400; starPos[i * 3 + 1] = Math.sin(e) * 2400; starPos[i * 3 + 2] = Math.sin(a) * Math.cos(e) * 2400;
        }
        const starGeo = new THREE.BufferGeometry();
        starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
        const stars = new THREE.Points(starGeo, new THREE.PointsMaterial({ color: 0xffffff, size: 1.7, sizeAttenuation: false }));
        scene.add(stars);
        const DUST = 260, dustBase = new Float32Array(DUST * 3), dustPos = new Float32Array(DUST * 3);
        for (let i = 0; i < DUST * 3; i++) dustBase[i] = rand() * 160;
        const dustGeo = new THREE.BufferGeometry();
        dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3));
        const dust = new THREE.Points(dustGeo, new THREE.PointsMaterial({ color: 0x9fdcff, size: 0.35, transparent: true, opacity: 0.7 }));
        dust.frustumCulled = false;
        scene.add(dust);

        const relics = RELICS_DATA.filter(r => r.target === 'Deep' && MODEL_FOR[r.id] && SPACE_SITES[r.id]);
        const sites = relics.map((relic, i) => {
            const def = SPACE_SITES[relic.id];
            const s = { relic, x: def.at[0], y: def.at[1], z: def.at[2], hours: def.hours };
            s.model = buildModel(MODEL_FOR[relic.id]);
            s.model.group.position.set(s.x, s.y, s.z);
            s.model.group.rotation.y = i * 1.3;
            s.done = save.done.includes(relic.id);
            if (s.done) s.model.parts.forEach(p => { p.placed = true; });
            poseModel(s.model, s.done ? 'done' : 'wreck', s.y);
            scene.add(s.model.group);
            s.beaconMat = new THREE.MeshBasicMaterial({ color: s.done ? 0x34d399 : 0x00f2fe, transparent: true, opacity: 0.25,
                blending: THREE.AdditiveBlending, depthWrite: false, wireframe: true });
            s.beacon = new THREE.Mesh(new THREE.IcosahedronGeometry(s.model.radius * 2.2, 1), s.beaconMat);
            s.beacon.position.set(s.x, s.y + 0.9, s.z);
            scene.add(s.beacon);
            return s;
        });

        const ship = buildModel('ship');
        scene.add(ship.group);
        return { name: 'Deep', space: true, W: WORLDS.Moon, scene, sites, rocks: [], planets, spin, dust, dustBase, heightAt: () => -1e6,
                 rover: ship, stars, earth: null, rings: [], pos: new THREE.Vector3(0, 0, 0), vel: new THREE.Vector3(),
                 heading: 0, speed: 0, jumpY: 0, jumpV: 0, onGround: true, radarRange: 420 };
    }

    function createWorld(worldName) {
        const W = WORLDS[worldName];
        const rand = rng(W.seed);
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(W.sky);
        scene.fog = new THREE.Fog(W.fog[0], W.fog[1], W.fog[2]);

        scene.add(new THREE.HemisphereLight(0xffffff, worldName === 'Mars' ? 0x7a3b1e : 0x30323a, W.ambient));
        const sun = new THREE.DirectionalLight(0xffffff, W.sun);
        sun.position.set(-60, 90, 40);
        scene.add(sun);

        // Relic sites, spread on a spiral so they are never too close together
        const relics = RELICS_DATA.filter(r => r.target === worldName && MODEL_FOR[r.id]);
        const sites = relics.map((relic, i) => {
            const a = i * 2.39996 + (worldName === 'Mars' ? 1.1 : 0.4);
            const d = 32 + 125 * Math.sqrt((i + 0.35) / relics.length);
            return { relic, x: Math.cos(a) * d, z: Math.sin(a) * d };
        });

        // Craters (kept away from the start point and the relic sites)
        const craters = [];
        let guard = 0;
        while (craters.length < W.craters && guard++ < 600) {
            const c = { x: (rand() - 0.5) * 380, z: (rand() - 0.5) * 380, r: 6 + rand() * 16 };
            c.depth = c.r * 0.22;
            if (Math.hypot(c.x, c.z) < c.r + 14) continue;
            if (sites.some(s => Math.hypot(s.x - c.x, s.z - c.z) < c.r * 1.4 + 9)) continue;
            craters.push(c);
        }

        function heightAt(x, z) {
            let h = Math.sin(x * 0.03) * Math.cos(z * 0.035) * 2.2 + Math.sin(x * 0.08 + 1.3) * Math.sin(z * 0.07) * 0.7;
            if (worldName === 'Mars') h += Math.sin(x * 0.013 + 0.5) * Math.cos(z * 0.011) * 5 + Math.sin((x + z) * 0.05) * 0.9;
            // keep the ground flat around each relic and around the start
            let flat = smooth(5, 16, Math.hypot(x, z));
            for (let i = 0; i < sites.length; i++) flat = Math.min(flat, smooth(5, 15, Math.hypot(x - sites[i].x, z - sites[i].z)));
            h *= flat;
            for (let i = 0; i < craters.length; i++) {
                const c = craters[i];
                const d = Math.hypot(x - c.x, z - c.z) / c.r;
                if (d < 1.6) {
                    if (d < 1) h -= c.depth * (1 - d * d);
                    h += c.depth * 0.4 * Math.exp(-Math.pow((d - 1) / 0.2, 2));
                }
            }
            return h;
        }

        // Terrain mesh
        const seg = 130;
        const geo = new THREE.PlaneGeometry(WORLD_SIZE, WORLD_SIZE, seg, seg);
        geo.rotateX(-Math.PI / 2);
        const pos = geo.attributes.position;
        const colors = new Float32Array(pos.count * 3);
        const cA = new THREE.Color(W.ground[0]), cB = new THREE.Color(W.ground[1]), cT = new THREE.Color();
        for (let i = 0; i < pos.count; i++) {
            const y = heightAt(pos.getX(i), pos.getZ(i));
            pos.setY(i, y);
            cT.copy(cB).lerp(cA, Math.min(1, Math.max(0, 0.55 + y * 0.09 + (rand() - 0.5) * 0.35)));
            colors[i * 3] = cT.r; colors[i * 3 + 1] = cT.g; colors[i * 3 + 2] = cT.b;
        }
        geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        geo.computeVertexNormals();
        scene.add(new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: 1 })));

        // Rocks
        const rockMat = new THREE.MeshStandardMaterial({ color: W.ground[1], flatShading: true, roughness: 1 });
        const rockGeo = new THREE.DodecahedronGeometry(1, 0);
        const rocks = [];   // solid rocks the rover bumps into
        for (let i = 0; i < W.rocks; i++) {
            const x = (rand() - 0.5) * 390, z = (rand() - 0.5) * 390, s = 0.25 + rand() * rand() * 1.6;
            if (Math.hypot(x, z) < 8 || sites.some(st => Math.hypot(st.x - x, st.z - z) < 7)) continue;
            const rock = new THREE.Mesh(rockGeo, rockMat);
            rock.position.set(x, heightAt(x, z) + s * 0.25, z);
            const sy = s * (0.5 + rand() * 0.5), sz = s * (0.7 + rand() * 0.6);
            rock.scale.set(s, sy, sz);
            // pebbles are driven over; anything bigger is solid
            if (s >= 0.45) rocks.push({ x, z, r: (s + sz) * 0.45, top: s * 0.25 + sy * 0.8 });
            rock.rotation.set(rand() * 3, rand() * 3, rand() * 3);
            scene.add(rock);
        }

        // Sky: stars, and the Earth hanging over the Moon
        const starPos = new Float32Array(900 * 3);
        for (let i = 0; i < 900; i++) {
            const a = rand() * Math.PI * 2, e = rand() * 1.45 + 0.05;
            starPos[i * 3] = Math.cos(a) * Math.cos(e) * 380;
            starPos[i * 3 + 1] = Math.sin(e) * 380;
            starPos[i * 3 + 2] = Math.sin(a) * Math.cos(e) * 380;
        }
        const starGeo = new THREE.BufferGeometry();
        starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
        const stars = new THREE.Points(starGeo, new THREE.PointsMaterial({ color: 0xffffff, size: 1.6, sizeAttenuation: false, fog: false,
            transparent: true, opacity: worldName === 'Moon' ? 0.9 : 0.0 }));
        scene.add(stars);
        let earth = null;
        if (worldName === 'Moon') {
            const eg = new THREE.IcosahedronGeometry(16, 1);
            const ec = new Float32Array(eg.attributes.position.count * 3);
            const pal = [new THREE.Color(0x2563eb), new THREE.Color(0x1d4ed8), new THREE.Color(0x22c55e), new THREE.Color(0xf8fafc)];
            for (let i = 0; i < ec.length; i += 9) {
                const col = pal[Math.floor(rand() * rand() * 4)];
                for (let k = 0; k < 9; k += 3) { ec[i + k] = col.r; ec[i + k + 1] = col.g; ec[i + k + 2] = col.b; }
            }
            eg.setAttribute('color', new THREE.BufferAttribute(ec, 3));
            earth = new THREE.Mesh(eg, new THREE.MeshBasicMaterial({ vertexColors: true, fog: false }));
            earth.position.set(-150, 120, -260);
            scene.add(earth);
        }

        // Relic models and beacons
        sites.forEach((s, i) => {
            s.y = heightAt(s.x, s.z);
            s.model = buildModel(MODEL_FOR[s.relic.id]);
            s.model.group.position.set(s.x, s.y, s.z);
            s.model.group.rotation.y = i * 1.7;
            s.done = save.done.includes(s.relic.id);
            if (s.done) s.model.parts.forEach(p => { p.placed = true; });
            poseModel(s.model, s.done ? 'done' : 'wreck', s.y);
            scene.add(s.model.group);
            s.beaconMat = new THREE.MeshBasicMaterial({ color: s.done ? 0x34d399 : 0x00f2fe, transparent: true, opacity: 0.28,
                blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, fog: false });
            s.beacon = new THREE.Mesh(cyl(0.5, 0.5, 90, 8, true), s.beaconMat);
            s.beacon.position.set(s.x, s.y + 45, s.z);
            scene.add(s.beacon);
        });

        // The player's rover
        const rover = buildModel('player');
        if (save.rover) rover.parts.forEach(p => { p.placed = true; });
        poseModel(rover, save.rover ? 'done' : 'build', 0);
        scene.add(rover.group);

        return { name: worldName, W, scene, sites, rocks, heightAt, rover, stars, earth,
                 rings: [], pos: new THREE.Vector3(0, heightAt(0, 0), 0), heading: 0.6, speed: 0, jumpY: 0, jumpV: 0, onGround: true };
    }

    /* ---------------- 5. UI SHELL ---------------- */
    let ui = null;        // DOM references
    let renderer = null, camera = null, rafId = 0, lastTime = 0;
    const input = { x: 0, y: 0, keys: {}, stick: null };
    const isTouch = () => ('ontouchstart' in window) || (window.matchMedia && window.matchMedia('(pointer: coarse)').matches);

    function createUI() {
        const root = document.createElement('div');
        root.id = 'arena';
        root.className = 'arena';
        root.hidden = true;
        root.innerHTML =
            '<canvas class="arena-canvas"></canvas>' +
            '<div class="arena-top">' +
                '<span class="arena-chip" id="arena-world"></span>' +
                '<span class="arena-chip" id="arena-count"></span>' +
                '<span class="arena-chip arena-chip-gold" id="arena-stars"></span>' +
                '<span class="arena-spacer"></span>' +
                '<button type="button" class="arena-btn" id="arena-worlds"></button>' +
                '<button type="button" class="arena-btn arena-btn-red" id="arena-exit"></button>' +
            '</div>' +
            '<div class="arena-nearest" id="arena-nearest" hidden></div>' +
            '<canvas class="arena-radar" id="arena-radar" width="150" height="150"></canvas>' +
            '<button type="button" class="arena-action" id="arena-action" hidden></button>' +
            '<div class="arena-stick" id="arena-stick" hidden><div class="arena-knob"></div></div>' +
            '<button type="button" class="arena-jump" id="arena-jump" hidden></button>' +
            '<div class="arena-panel" id="arena-panel" hidden></div>' +
            '<div class="arena-menu" id="arena-menu"></div>' +
            '<div class="arena-toast" id="arena-toast" hidden></div>';
        document.body.appendChild(root);
        const $ = id => root.querySelector('#' + id);
        ui = { root, canvas: root.querySelector('.arena-canvas'), world: $('arena-world'), count: $('arena-count'), stars: $('arena-stars'),
               worlds: $('arena-worlds'), exit: $('arena-exit'), nearest: $('arena-nearest'), radar: $('arena-radar'), action: $('arena-action'),
               stick: $('arena-stick'), knob: root.querySelector('.arena-knob'), jump: $('arena-jump'), panel: $('arena-panel'),
               menu: $('arena-menu'), toast: $('arena-toast'), top: root.querySelector('.arena-top') };

        ui.exit.addEventListener('click', () => { click(); closeArena(); });
        ui.worlds.addEventListener('click', () => { click(); showMenu(); });
        ui.action.addEventListener('click', () => doAction());
        ui.jump.addEventListener('pointerdown', e => { e.preventDefault(); input.rise = true; jump(); });
        ['pointerup', 'pointercancel', 'pointerleave'].forEach(ev => ui.jump.addEventListener(ev, () => { input.rise = false; }));

        // Touch joystick
        const stickMove = e => {
            const r = ui.stick.getBoundingClientRect();
            let dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
            let dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
            const len = Math.hypot(dx, dy);
            if (len > 1) { dx /= len; dy /= len; }
            input.stick = { x: dx, y: -dy };
            ui.knob.style.transform = 'translate(' + (dx * 32) + 'px,' + (dy * 32) + 'px)';
        };
        const stickEnd = () => { input.stick = null; ui.knob.style.transform = ''; };
        ui.stick.addEventListener('pointerdown', e => { e.preventDefault(); ui.stick.setPointerCapture(e.pointerId); stickMove(e); });
        ui.stick.addEventListener('pointermove', e => { if (input.stick) stickMove(e); });
        ui.stick.addEventListener('pointerup', stickEnd);
        ui.stick.addEventListener('pointercancel', stickEnd);

        renderer = new THREE.WebGLRenderer({ canvas: ui.canvas, antialias: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
        camera = new THREE.PerspectiveCamera(60, 1, 0.1, 900);
        makeMaterials();
        resize();
    }

    function resize() {
        if (!renderer) return;
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    }

    function onKey(e, down) {
        if (!ui || ui.root.hidden) return;
        const k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
        if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(k)) e.preventDefault();
        input.keys[k] = down;
        if (!down) return;
        if (k === 'Escape') { if (ui.menu.hidden) showMenu(); else closeArena(); }
        if (k === ' ') jump();
        if (k === 'e' || k === 'Enter') { if (!ui.action.hidden) doAction(); }
    }
    window.addEventListener('keydown', e => onKey(e, true));
    window.addEventListener('keyup', e => onKey(e, false));
    window.addEventListener('resize', resize);
    window.addEventListener('blur', () => { input.keys = {}; });

    let toastTimer = 0;
    function toast(msg) {
        ui.toast.textContent = msg;
        ui.toast.hidden = false;
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => { ui.toast.hidden = true; }, 3800);
    }

    function updateHud() {
        if (!G) return;
        const done = G.sites.filter(s => s.done).length;
        ui.world.innerHTML = '<i class="fa-solid ' + WORLD_ICON[G.name] + '"></i> ' + esc(tr(G.name));
        ui.jump.textContent = tr(G.space ? 'rise' : 'jump');
        ui.count.innerHTML = '<i class="fa-solid fa-screwdriver-wrench"></i> ' + esc(num(done) + ' / ' + num(G.sites.length));
        ui.stars.innerHTML = '<i class="fa-solid fa-star"></i> ' + esc(num(totalStars()));
        ui.worlds.textContent = tr('worlds');
        ui.exit.textContent = tr('exit');
    }

    /* ---------------- 6. MENU ---------------- */
    const WORLD_ICON = { Moon: 'fa-moon', Mars: 'fa-globe', Deep: 'fa-satellite' };
    let resetArmed = false;
    function showMenu() {
        if (G && G.build && G.build.site && !G.build.site.done) cancelBuild();
        if (G) G.build = null;
        setMode('menu');
        const card = name => {
            const all = RELICS_DATA.filter(r => r.target === name && MODEL_FOR[r.id]);
            const done = all.filter(r => save.done.includes(r.id)).length;
            return '<button type="button" class="arena-world arena-world-' + name.toLowerCase() + '" data-world="' + name + '">' +
                '<i class="fa-solid ' + WORLD_ICON[name] + ' arena-world-icon"></i>' +
                '<span class="arena-world-name">' + esc(tr(name)) + '</span>' +
                '<span class="arena-world-info">' + esc(tr(name + 'Info')) + '</span>' +
                '<span class="arena-world-bar"><span style="width:' + (done / all.length * 100) + '%"></span></span>' +
                '<span class="arena-world-progress">' + esc(tr('progress', { n: done, t: all.length })) + '</span>' +
                '<span class="arena-world-go">' + esc(tr('play')) + ' <i class="fa-solid fa-play"></i></span>' +
            '</button>';
        };
        ui.menu.innerHTML =
            '<div class="arena-menu-box">' +
                '<h2 class="arena-title"><i class="fa-solid fa-robot"></i> ' + esc(tr('title')) + '</h2>' +
                '<p class="arena-tagline">' + esc(tr('tagline')) + '</p>' +
                '<p class="arena-choose">' + esc(tr('chooseWorld')) + '</p>' +
                '<div class="arena-worlds">' + card('Moon') + card('Mars') + card('Deep') + '</div>' +
                '<div class="arena-menu-foot">' +
                    '<span class="arena-chip arena-chip-gold"><i class="fa-solid fa-star"></i> ' + esc(num(totalStars())) + '</span>' +
                    '<button type="button" class="arena-link" id="arena-reset">' + esc(tr('reset')) + '</button>' +
                    '<button type="button" class="arena-btn arena-btn-red" id="arena-menu-exit">' + esc(tr('exit')) + '</button>' +
                '</div>' +
            '</div>';
        resetArmed = false;
        ui.menu.querySelectorAll('[data-world]').forEach(b => b.addEventListener('click', () => { click(); startWorld(b.dataset.world); }));
        ui.menu.querySelector('#arena-menu-exit').addEventListener('click', () => { click(); closeArena(); });
        const resetBtn = ui.menu.querySelector('#arena-reset');
        resetBtn.addEventListener('click', () => {
            click();
            if (!resetArmed) { resetArmed = true; resetBtn.textContent = tr('resetSure'); resetBtn.classList.add('is-armed'); return; }
            save = { rover: false, done: [], stars: {} };
            persist();
            G = null;
            showMenu();
        });
    }

    // mode: 'menu' | 'drive' | 'build' | 'info'
    function setMode(mode) {
        if (G) G.mode = mode;
        ui.menu.hidden = mode !== 'menu';
        ui.top.hidden = mode === 'menu';
        ui.radar.hidden = mode !== 'drive';
        ui.panel.hidden = mode !== 'build' && mode !== 'info';
        const touch = isTouch();
        ui.stick.hidden = !(mode === 'drive' && touch);
        ui.jump.hidden = !(mode === 'drive' && touch);
        if (mode !== 'drive') { ui.action.hidden = true; ui.nearest.hidden = true; }
        input.keys = {}; input.stick = null;
    }

    function startWorld(name) {
        if (!G || G.name !== name) G = name === 'Deep' ? createSpace() : createWorld(name);
        camera.far = G.space ? 6000 : 900;
        camera.updateProjectionMatrix();
        if (G.space) {
            updateHud();
            setMode('drive');
            toast(tr('flyIntro') + ' ' + tr(isTouch() ? 'flyTouch' : 'flyKeys'));
            return;
        }
        updateHud();
        if (!save.rover) startBuild(null);
        else setMode('drive');
    }

    /* ---------------- 7. THE BUILDER ---------------- */
    function shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
        return a;
    }

    // site === null means the player's own rover in the workshop
    function startBuild(site) {
        const model = site ? site.model : G.rover;
        model.parts.forEach(p => { p.placed = false; p.anim = null; });
        poseModel(model, 'build', site ? site.y : G.pos.y);
        G.build = { site, model, index: 0, wrong: 0, angle: G.heading + 2.4 };
        setMode('build');
        askPart();
    }

    function cancelBuild() {
        const b = G.build;
        if (!b || !b.site) return;
        b.model.parts.forEach(p => { p.placed = false; p.anim = null; });
        poseModel(b.model, 'wreck', b.site.y);
        G.build = null;
    }

    function panelHead() {
        const b = G.build;
        const title = b.site ? tr('rebuilding') + ': ' + getLocalizedRelic(b.site.relic).name : tr('workshop');
        return '<div class="arena-panel-head"><span><i class="fa-solid fa-screwdriver-wrench"></i> ' + esc(title) + '</span>' +
               '<span class="arena-step">' + esc(tr('partOf', { n: Math.min(b.index + 1, b.model.parts.length), t: b.model.parts.length })) + '</span></div>';
    }

    function askPart() {
        const b = G.build;
        const part = b.model.parts[b.index];
        const key = part.key;
        // Two wrong choices: one other part of this machine if there is one, the rest from the whole kit
        const banned = [key].concat(CONFUSABLE[key] || []);
        const own = shuffle(b.model.parts.filter(p => !p.placed && !banned.includes(p.key)).map(p => p.key));
        const pool = shuffle(Object.keys(PARTS).filter(k => !banned.includes(k) && k !== own[0]));
        const choices = shuffle([key].concat(own.slice(0, 1), pool).slice(0, 3));
        const intro = (!b.site && b.index === 0) ? '<p class="arena-intro">' + esc(tr('workshopIntro')) + '</p>' : '';

        ui.panel.innerHTML = panelHead() + intro +
            '<p class="arena-clue">' + esc(partText(key)[1]) + '</p>' +
            '<div class="arena-choices">' + choices.map(k =>
                '<button type="button" class="arena-choice" data-part="' + k + '"><i class="fa-solid ' + PARTS[k].icon + '"></i><span>' + esc(partText(k)[0]) + '</span></button>').join('') +
            '</div>' +
            '<p class="arena-feedback" id="arena-feedback"></p>' +
            (b.site ? '<button type="button" class="arena-link arena-leave" id="arena-leave">' + esc(tr('leave')) + '</button>' : '');

        ui.panel.querySelectorAll('.arena-choice').forEach(btn => btn.addEventListener('click', () => {
            if (btn.dataset.part === key) return placePart(part);
            click();
            b.wrong++;
            btn.disabled = true;
            btn.classList.add('is-wrong');
            ui.panel.querySelector('#arena-feedback').textContent = TEXT[lang()].wrong.replace('{name}', partText(btn.dataset.part)[0]);
        }));
        const leave = ui.panel.querySelector('#arena-leave');
        if (leave) leave.addEventListener('click', () => { click(); cancelBuild(); setMode('drive'); });
    }

    function placePart(part) {
        const b = G.build;
        part.placed = true;
        part.anim = 0;
        setGhost(part, false);
        fanfare();
        b.index++;
        const last = b.index >= b.model.parts.length;
        ui.panel.innerHTML = panelHead() +
            '<p class="arena-correct"><i class="fa-solid fa-circle-check"></i> ' + esc(tr('correct')) + ' ' + esc(partText(part.key)[0]) + '</p>' +
            '<p class="arena-fact"><i class="fa-solid ' + PARTS[part.key].icon + '"></i> ' + esc(partText(part.key)[2]) + '</p>' +
            '<button type="button" class="arena-btn arena-btn-main" id="arena-next">' + esc(tr(last ? 'finish' : 'next')) + ' <i class="fa-solid fa-arrow-right rtl:rotate-180"></i></button>';
        ui.panel.querySelector('#arena-next').addEventListener('click', () => {
            click();
            if (!last) return askPart();
            if (b.site) showSwitchOn(b.site); else roverReady();
        });
    }

    function roverReady() {
        save.rover = true; persist();
        G.build = null;
        setMode('info');
        ui.panel.innerHTML =
            '<h3 class="arena-panel-title"><i class="fa-solid fa-flag-checkered"></i> ' + esc(tr('roverReady')) + '</h3>' +
            '<p class="arena-fact">' + esc(tr('roverReadyText')) + '</p>' +
            '<p class="arena-keys">' + esc(tr(isTouch() ? 'touch' : 'keys')) + '</p>' +
            '<button type="button" class="arena-btn arena-btn-main" id="arena-go">' + esc(tr('go')) + '</button>';
        ui.panel.querySelector('#arena-go').addEventListener('click', () => { click(); setMode('drive'); });
    }

    // Discovery step: the rebuilt relic is switched on, speaks, and says what it found
    function showSwitchOn(site) {
        const relic = getLocalizedRelic(site.relic);
        setMode('info');
        ui.panel.innerHTML =
            '<h3 class="arena-panel-title"><i class="fa-solid fa-satellite"></i> ' + esc(relic.name) + '</h3>' +
            '<p class="arena-desc">' + esc(tr('switchHint')) + '</p>' +
            '<button type="button" class="arena-btn arena-btn-main" id="arena-switch"><i class="fa-solid fa-power-off"></i> ' + esc(tr('switchOn')) + '</button>';
        ui.panel.querySelector('#arena-switch').addEventListener('click', () => {
            fanfare();
            powerOn(site);
            const voice = typeof getRelicVoice === 'function' ? getRelicVoice(site.relic.id) : '';
            ui.panel.innerHTML =
                '<h3 class="arena-panel-title"><i class="fa-solid fa-satellite"></i> ' + esc(relic.name) + '</h3>' +
                (voice ? '<p class="arena-voice">“' + esc(voice) + '”</p>' : '') +
                '<p class="arena-found-title"><i class="fa-solid fa-flask"></i> ' + esc(tr('found')) + '</p>' +
                '<p class="arena-fact">' + esc(relic.science) + '</p>' +
                (site.hours ? '<p class="arena-keys"><i class="fa-solid fa-tower-broadcast"></i> ' + esc(tr('signal', { h: site.hours })) + '</p>' : '') +
                '<button type="button" class="arena-btn arena-btn-main" id="arena-toquiz">' + esc(tr('toQuiz')) + ' <i class="fa-solid fa-arrow-right rtl:rotate-180"></i></button>';
            ui.panel.scrollTop = 0;
            ui.panel.querySelector('#arena-toquiz').addEventListener('click', () => { click(); showRelicCard(site, true); });
        });
    }

    // Rings of light spread out from a relic when it is switched on
    function powerOn(site) {
        for (let i = 0; i < 3; i++) {
            const ring = new THREE.Mesh(new THREE.RingGeometry(0.85, 1, 40),
                new THREE.MeshBasicMaterial({ color: 0x34d399, transparent: true, opacity: 0, side: THREE.DoubleSide, depthWrite: false, fog: false }));
            ring.rotation.x = -Math.PI / 2;
            ring.position.set(site.x, site.y + 0.15, site.z);
            ring.userData.t = -i * 0.45;
            ring.userData.max = site.model.radius * 3.2;
            G.scene.add(ring);
            G.rings.push(ring);
        }
    }

    // The relic's fact card. With quiz = true it ends in the badge question.
    function showRelicCard(site, quiz) {
        const relic = getLocalizedRelic(site.relic);
        G.infoSite = site;
        if (!G.build) G.build = { site, model: site.model, index: site.model.parts.length, wrong: 0, angle: G.heading + 2.4, viewOnly: true };
        setMode('info');
        let html =
            '<h3 class="arena-panel-title"><i class="fa-solid fa-satellite"></i> ' + esc(relic.name) + '</h3>' +
            '<p class="arena-meta"><span><i class="fa-solid fa-calendar"></i> ' + esc(relic.year) + '</span>' +
            '<span><i class="fa-solid fa-location-dot"></i> ' + esc(relic.location) + '</span></p>' +
            '<p class="arena-desc">' + esc(relic.shortDesc) + '</p>' +
            '<p class="arena-fact"><strong>' + esc(tr('funFact')) + ':</strong> ' + esc(relic.fact) + '</p>';
        if (quiz) {
            html += '<p class="arena-quiz-title"><i class="fa-solid fa-shield-halved"></i> ' + esc(tr('quiz')) + '</p>' +
                '<p class="arena-clue">' + esc(relic.quiz.question) + '</p>' +
                '<div class="arena-choices arena-choices-quiz">' + relic.quiz.options.map((o, i) =>
                    '<button type="button" class="arena-choice" data-opt="' + i + '"><span>' + esc(o) + '</span></button>').join('') + '</div>' +
                '<p class="arena-feedback" id="arena-feedback"></p>';
        } else {
            html += '<button type="button" class="arena-btn arena-btn-main" id="arena-keep">' + esc(tr('keep')) + '</button>';
        }
        ui.panel.innerHTML = html;
        ui.panel.scrollTop = 0;

        const keep = ui.panel.querySelector('#arena-keep');
        if (keep) keep.addEventListener('click', () => { click(); G.build = null; setMode('drive'); });

        ui.panel.querySelectorAll('[data-opt]').forEach(btn => btn.addEventListener('click', () => {
            if (+btn.dataset.opt !== relic.quiz.correct) {
                click();
                G.build.wrong++;
                btn.disabled = true;
                btn.classList.add('is-wrong');
                ui.panel.querySelector('#arena-feedback').textContent = tr('quizWrong');
                return;
            }
            finishRelic(site);
        }));
    }

    function finishRelic(site) {
        const relic = getLocalizedRelic(site.relic);
        const stars = Math.max(1, 3 - G.build.wrong);
        site.done = true;
        site.beaconMat.color.setHex(0x34d399);
        poseModel(site.model, 'done', site.y);
        if (!save.done.includes(site.relic.id)) save.done.push(site.relic.id);
        save.stars[site.relic.id] = Math.max(save.stars[site.relic.id] || 0, stars);
        persist();

        // The same badge the site's own quiz gives
        let newBadge = false;
        if (typeof collectedBadges !== 'undefined' && !collectedBadges.includes(site.relic.id)) {
            collectedBadges.push(site.relic.id);
            newBadge = true;
            if (typeof saveBadges === 'function') saveBadges();
            if (typeof renderRelicCards === 'function') renderRelicCards();
        }
        fanfare();
        updateHud();
        const allDone = G.sites.every(s => s.done);
        ui.panel.innerHTML =
            '<h3 class="arena-panel-title arena-gold"><i class="fa-solid fa-trophy"></i> ' + esc(tr('rebuilt')) + '</h3>' +
            '<p class="arena-stars-row">' + [1, 2, 3].map(i => '<i class="fa-solid fa-star' + (i <= stars ? '' : ' is-off') + '"></i>').join('') + '</p>' +
            '<p class="arena-desc"><strong>' + esc(relic.name) + '</strong></p>' +
            '<p class="arena-fact"><i class="fa-solid fa-medal"></i> ' + esc(tr(newBadge ? 'badge' : 'badgeHad')) + '</p>' +
            (allDone ? '<p class="arena-correct">' + esc(tr('allDone')) + '</p>' : '') +
            '<button type="button" class="arena-btn arena-btn-main" id="arena-keep">' + esc(tr('keep')) + '</button>';
        ui.panel.querySelector('#arena-keep').addEventListener('click', () => { click(); G.build = null; setMode('drive'); });
    }

    /* ---------------- 8. DRIVING ---------------- */
    function jump() {
        if (!G || G.mode !== 'drive' || G.space || !G.onGround) return;
        G.jumpV = 5.5;
        G.onGround = false;
        click();
    }

    function doAction() {
        if (!G || G.mode !== 'drive' || !G.near) return;
        click();
        G.speed = 0;
        if (G.vel) G.vel.set(0, 0, 0);
        if (G.near.done) showRelicCard(G.near, false); else startBuild(G.near);
    }

    function updateDrive(dt) {
        const k = input.keys;
        let ix = (k.d || k.ArrowRight ? 1 : 0) - (k.a || k.ArrowLeft ? 1 : 0);
        let iy = (k.w || k.ArrowUp ? 1 : 0) - (k.s || k.ArrowDown ? 1 : 0);
        if (input.stick) { ix = input.stick.x; iy = input.stick.y; }

        const target = iy >= 0 ? iy * 10 : iy * 4.5;
        G.speed += (target - G.speed) * Math.min(1, dt * 2.5);
        G.heading -= ix * 1.9 * dt * (G.speed < -0.3 ? -1 : 1);

        const fx = Math.sin(G.heading), fz = Math.cos(G.heading);
        G.pos.x += fx * G.speed * dt;
        G.pos.z += fz * G.speed * dt;

        // Stay on the map and outside the relics
        const d0 = Math.hypot(G.pos.x, G.pos.z);
        if (d0 > WORLD_LIMIT) { G.pos.x *= WORLD_LIMIT / d0; G.pos.z *= WORLD_LIMIT / d0; }
        let near = null, nearD = Infinity, nearestOpen = Infinity;
        G.sites.forEach(s => {
            const dx = G.pos.x - s.x, dz = G.pos.z - s.z, d = Math.hypot(dx, dz), min = s.model.radius + 1.3;
            if (d < min && d > 0.001) { G.pos.x = s.x + dx / d * min; G.pos.z = s.z + dz / d * min; }
            if (d < s.model.radius + 6 && d < nearD) { near = s; nearD = d; }
            if (!s.done && d < nearestOpen) nearestOpen = d;
        });

        // Rocks are solid: the rover is pushed back out and loses its speed (a jump can clear them)
        for (let i = 0; i < G.rocks.length; i++) {
            const k = G.rocks[i];
            const dx = G.pos.x - k.x, dz = G.pos.z - k.z, min = k.r + 1.0;
            if (Math.abs(dx) > min || Math.abs(dz) > min || G.jumpY > k.top) continue;
            const d = Math.hypot(dx, dz);
            if (d >= min || d < 0.001) continue;
            G.pos.x = k.x + dx / d * min;
            G.pos.z = k.z + dz / d * min;
            // heading straight at the rock stops the rover; a glancing touch only slows it
            const into = -(fx * dx + fz * dz) / d * Math.sign(G.speed || 1);
            if (into > 0) {
                if (Math.abs(G.speed) > 3 && !G.bumped) { click(); G.bumped = true; }
                G.speed *= 1 - Math.min(1, into * 1.2);
            }
        }
        if (Math.abs(G.speed) < 1) G.bumped = false;

        // Jumping under this world's gravity
        if (!G.onGround) {
            G.jumpV -= G.W.gravity * dt;
            G.jumpY += G.jumpV * dt;
            if (G.jumpY <= 0) { G.jumpY = 0; G.jumpV = 0; G.onGround = true; }
        }

        const ground = G.heightAt(G.pos.x, G.pos.z);
        G.pos.y = ground;
        const r = G.rover.group;
        r.position.set(G.pos.x, ground + G.jumpY, G.pos.z);
        const pitch = Math.atan2(G.heightAt(G.pos.x - fx, G.pos.z - fz) - G.heightAt(G.pos.x + fx, G.pos.z + fz), 2);
        const roll = Math.atan2(G.heightAt(G.pos.x - fz, G.pos.z + fx) - G.heightAt(G.pos.x + fz, G.pos.z - fx), 2);
        r.rotation.order = 'YXZ';
        r.rotation.set(G.onGround ? pitch : 0, G.heading, G.onGround ? -roll : 0);
        const wheels = G.rover.parts[0].obj.userData.wheels;
        wheels.forEach(w => { w.rotation.x += G.speed * dt / 0.38; });

        // Prompt and nearest-relic read-out
        if (near !== G.near) {
            G.near = near;
            ui.action.hidden = !near;
            if (near) ui.action.innerHTML = '<i class="fa-solid ' + (near.done ? 'fa-eye' : 'fa-screwdriver-wrench') + '"></i> ' +
                esc(tr(near.done ? 'view' : 'rebuild')) + (isTouch() ? '' : ' <kbd>E</kbd>');
        }
        if (nearestOpen < Infinity && !near) {
            ui.nearest.hidden = false;
            ui.nearest.textContent = tr('nearest', { d: Math.round(nearestOpen) });
        } else ui.nearest.hidden = true;

        // Chase camera
        const cx = G.pos.x - fx * 9.5, cz = G.pos.z - fz * 9.5;
        const cy = Math.max(ground + 4.6 + G.jumpY * 0.6, G.heightAt(cx, cz) + 1.5);
        camera.position.lerp(new THREE.Vector3(cx, cy, cz), Math.min(1, dt * 4));
        camera.lookAt(G.pos.x + fx * 3, ground + 1.5 + G.jumpY * 0.8, G.pos.z + fz * 3);
    }

    // Flying in Deep Space: thrust adds speed and the ship keeps drifting
    function updateFlight(dt) {
        const k = input.keys;
        let ix = (k.d || k.ArrowRight ? 1 : 0) - (k.a || k.ArrowLeft ? 1 : 0);
        let iy = (k.w || k.ArrowUp ? 1 : 0) - (k.s || k.ArrowDown ? 1 : 0);
        if (input.stick) { ix = input.stick.x; iy = input.stick.y; }
        let iz = (k[' '] || input.rise ? 1 : 0) - (k.Shift ? 1 : 0);

        G.heading -= ix * 1.7 * dt;
        const fx = Math.sin(G.heading), fz = Math.cos(G.heading);
        G.vel.x += fx * iy * 16 * dt;
        G.vel.z += fz * iy * 16 * dt;

        // Find the nearest probe (for the prompt) and the nearest unfinished one (for the read-out)
        let near = null, nearD = Infinity, open = null, openD = Infinity;
        G.sites.forEach(s => {
            const d = Math.hypot(G.pos.x - s.x, G.pos.y - s.y, G.pos.z - s.z);
            if (d < s.model.radius + 9 && d < nearD) { near = s; nearD = d; }
            if (!s.done && d < openD) { open = s; openD = d; }
        });
        // Height: the keys move the ship; otherwise it eases level with the nearest unfinished probe
        if (iz) G.vel.y += iz * 14 * dt;
        else if (open) G.vel.y += ((open.y - G.pos.y) * 0.6 - G.vel.y) * Math.min(1, dt * 2);
        else G.vel.y -= G.vel.y * Math.min(1, dt * 2);

        // A little drag keeps it playable, and there is a top speed
        const drag = Math.max(0, 1 - dt * 0.22);
        G.vel.x *= drag; G.vel.z *= drag;
        const sp = Math.hypot(G.vel.x, G.vel.z);
        if (sp > 42) { G.vel.x *= 42 / sp; G.vel.z *= 42 / sp; }
        G.pos.addScaledVector(G.vel, dt);

        // Stay inside the play area, outside planets and probes
        const d0 = G.pos.length();
        if (d0 > SPACE_LIMIT) { G.pos.multiplyScalar(SPACE_LIMIT / d0); G.vel.multiplyScalar(0.5); }
        const solid = G.planets.map(p => ({ x: p.x, y: p.y, z: p.z, r: p.r + 4 }))
            .concat(G.sites.map(s => ({ x: s.x, y: s.y + 0.9, z: s.z, r: s.model.radius + 1.6 })));
        solid.forEach(o => {
            const dx = G.pos.x - o.x, dy = G.pos.y - o.y, dz = G.pos.z - o.z, d = Math.hypot(dx, dy, dz);
            if (d < o.r && d > 0.001) {
                G.pos.set(o.x + dx / d * o.r, o.y + dy / d * o.r, o.z + dz / d * o.r);
                const into = (G.vel.x * dx + G.vel.y * dy + G.vel.z * dz) / d;
                if (into < 0) { G.vel.x -= dx / d * into; G.vel.y -= dy / d * into; G.vel.z -= dz / d * into; }
            }
        });

        const r = G.rover.group;
        r.position.set(G.pos.x, G.pos.y - 0.9, G.pos.z);
        r.rotation.order = 'YXZ';
        r.rotation.set(-G.vel.y * 0.02, G.heading, ix * 0.45);
        G.spin.forEach(pl => { pl.rotation.y += dt * 0.02; });

        // Dust wraps around the ship so there is always some drifting past
        const dp = G.dust.geometry.attributes.position.array, base = G.dustBase;
        for (let i = 0; i < base.length; i += 3) {
            dp[i] = G.pos.x + ((((base[i] - G.pos.x) % 160) + 160) % 160) - 80;
            dp[i + 1] = G.pos.y + ((((base[i + 1] - G.pos.y) % 160) + 160) % 160) - 80;
            dp[i + 2] = G.pos.z + ((((base[i + 2] - G.pos.z) % 160) + 160) % 160) - 80;
        }
        G.dust.geometry.attributes.position.needsUpdate = true;

        if (near !== G.near) {
            G.near = near;
            ui.action.hidden = !near;
            if (near) ui.action.innerHTML = '<i class="fa-solid ' + (near.done ? 'fa-eye' : 'fa-screwdriver-wrench') + '"></i> ' +
                esc(tr(near.done ? 'view' : 'rebuild')) + (isTouch() ? '' : ' <kbd>E</kbd>');
        }
        if (open && !near) {
            const dy = open.y - G.pos.y;
            ui.nearest.hidden = false;
            ui.nearest.textContent = tr('nearest', { d: Math.round(openD) }) +
                (Math.abs(dy) > 6 ? '  ·  ' + num(Math.round(Math.abs(dy))) + ' ' + tr(dy > 0 ? 'above' : 'below') : '');
        } else ui.nearest.hidden = true;

        const want = new THREE.Vector3(G.pos.x - fx * 13, G.pos.y + 4.5, G.pos.z - fz * 13);
        camera.position.lerp(want, Math.min(1, dt * 4));
        camera.lookAt(G.pos.x + fx * 6, G.pos.y + 0.6, G.pos.z + fz * 6);
    }

    function updateBuildCamera(dt) {
        const b = G.build;
        const model = b.model;
        const c = model.group.position;
        b.angle += dt * 0.25;
        const dist = model.radius * 2.1 + 3.5;
        const want = new THREE.Vector3(c.x + Math.sin(b.angle) * dist, c.y + model.radius * 0.7 + 2, c.z + Math.cos(b.angle) * dist);
        want.y = Math.max(want.y, G.heightAt(want.x, want.z) + 1.2);
        camera.position.lerp(want, Math.min(1, dt * 3));
        camera.lookAt(c.x, c.y - model.radius * 0.25, c.z);
    }

    function animateParts(dt, time) {
        const models = [G.rover].concat(G.sites.map(s => s.model));
        models.forEach(model => model.parts.forEach(p => {
            if (p.anim !== null && p.anim !== undefined) {
                p.anim = Math.min(1, p.anim + dt / 0.7);
                const e = 1 - Math.pow(1 - p.anim, 3);
                p.obj.position.y = p.obj.userData.homeY + (1 - e) * 5;
                p.obj.scale.setScalar(0.4 + 0.6 * e);
                if (p.anim >= 1) p.anim = null;
            }
            if (p.placed && p.obj.userData.spin) p.obj.userData.spin.forEach(bl => { bl.rotation.y += dt * 14; });
        }));
        G.sites.forEach((s, i) => {
            s.beacon.visible = !(G.build && G.build.site === s);   // do not shine through the relic being rebuilt
            s.beaconMat.opacity = s.done ? 0.16 : 0.22 + 0.12 * Math.sin(time * 3 + i);
        });
        if (G.earth) G.earth.rotation.y += dt * 0.03;
        for (let i = G.rings.length - 1; i >= 0; i--) {
            const ring = G.rings[i];
            ring.userData.t += dt / 1.6;
            const t = ring.userData.t;
            if (t >= 1) { G.scene.remove(ring); G.rings.splice(i, 1); continue; }
            if (t < 0) continue;
            ring.scale.setScalar(1 + t * ring.userData.max);
            ring.material.opacity = 0.9 * (1 - t);
        }
    }

    function drawRadar() {
        const ctx = ui.radar.getContext('2d');
        const S = ui.radar.width, c = S / 2, R = c - 6, scale = R / (G.radarRange || 150);
        ctx.clearRect(0, 0, S, S);
        ctx.fillStyle = 'rgba(8,10,21,0.72)';
        ctx.beginPath(); ctx.arc(c, c, R, 0, Math.PI * 2); ctx.fill();
        ctx.strokeStyle = 'rgba(0,242,254,0.55)'; ctx.lineWidth = 2; ctx.stroke();
        ctx.strokeStyle = 'rgba(0,242,254,0.18)'; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.arc(c, c, R * 0.5, 0, Math.PI * 2); ctx.stroke();
        const fx = Math.sin(G.heading), fz = Math.cos(G.heading);
        G.sites.forEach(s => {
            const dx = s.x - G.pos.x, dz = s.z - G.pos.z;
            let rx = (dx * -fz + dz * fx) * scale, ry = (dx * fx + dz * fz) * scale;
            const len = Math.hypot(rx, ry);
            if (len > R - 5) { rx *= (R - 5) / len; ry *= (R - 5) / len; }
            ctx.fillStyle = s.done ? '#34d399' : '#00f2fe';
            ctx.beginPath(); ctx.arc(c + rx, c - ry, s.done ? 3 : 4.5, 0, Math.PI * 2); ctx.fill();
        });
        ctx.fillStyle = '#ffd700';
        ctx.beginPath(); ctx.moveTo(c, c - 8); ctx.lineTo(c + 5.5, c + 6); ctx.lineTo(c - 5.5, c + 6); ctx.closePath(); ctx.fill();
    }

    function frame(now) {
        rafId = requestAnimationFrame(frame);
        const dt = Math.min(0.05, (now - lastTime) / 1000 || 0);
        lastTime = now;
        if (!G) { renderer.clear(); return; }
        if (G.mode === 'drive') { if (G.space) updateFlight(dt); else updateDrive(dt); drawRadar(); }
        else if (G.build) updateBuildCamera(dt);
        animateParts(dt, now / 1000);
        G.stars.position.copy(camera.position);
        renderer.render(G.scene, camera);
    }

    /* ---------------- 9. OPEN / CLOSE ---------------- */
    function openArena() {
        if (typeof THREE === 'undefined') return;
        click();
        if (!ui) createUI();
        ui.root.hidden = false;
        ui.root.dir = lang() === 'ar' ? 'rtl' : 'ltr';
        document.body.classList.add('arena-open');
        resize();
        G = null;   // rebuild the world so its text and progress are current
        showMenu();
        cancelAnimationFrame(rafId);
        lastTime = performance.now();
        rafId = requestAnimationFrame(frame);
    }

    function closeArena() {
        if (!ui) return;
        cancelAnimationFrame(rafId);
        ui.root.hidden = true;
        document.body.classList.remove('arena-open');
        input.keys = {}; input.stick = null;
    }

    window.openArena = openArena;
    window.closeArena = closeArena;
})();
