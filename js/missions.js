/* ----------------------------------------------------
   BE THE RELIC — the mission simulator
   The child becomes one machine and lives its real mission in order:
   launch, the journey, arrival, the things it really did, and the way it
   really ended. The ending is never changed: every relic is lost or left
   behind exactly as it happened.

   Data: js/missions-data.js. Drawn on a 2D canvas, so it runs on any device.
   Uses from app.js: RELICS_DATA, getLocalizedRelic, currentLang, openModal,
   playClickSound, playBadgeSound.
---------------------------------------------------- */
(function () {
    'use strict';

    const SAVE_KEY = 'nasa_relic_missions';
    const TXT = {
        en: {
            title: 'Be the Relic', pickTitle: 'Choose a machine and live its mission',
            pickDesc: 'Each mission follows the real one, from launch day to the day it was left behind.',
            flown: 'Mission flown', flownCount: '{n} of {t} missions flown',
            reset: 'Reset missions', resetSure: 'Tap again to erase flown missions', resetEmpty: 'No missions flown yet', exit: 'Exit', missions: 'Missions', next: 'Next', finish: 'Finish',
            Moon: 'The Moon', Mars: 'Mars', Deep: 'Deep Space', today: 'Today',
            sLaunch: 'Launch day', sCruise: 'The journey', sEnd: 'The end of the mission', sAlive: 'Still working today',
            aPowered: 'The landing', aAirbag: 'The landing', aSkycrane: 'The landing', aImpact: 'Impact', aOrbit: 'Arriving at the Moon',
            aFlyby: 'First flyby', aRide: 'Arriving', aCutoff: 'The landing',
            launchText: 'You are {name}. You are sitting on top of a {rocket} rocket at {site}.',
            ignite: 'Ignite the engines', staging: 'Drop the empty stage', stagingHint: 'Press when the marker is in the green zone.',
            inSpace: 'The empty stage falls away. You are in space.',
            cruiseText: 'The journey takes about {n} {unit}. A small engine burn keeps you on course.',
            days: 'days', months: 'months', course: 'Correct your course', onCourse: 'You are on course.',
            perfect: 'Perfect timing!', close: 'A little off. The flight computer fixes it.',
            thrust: 'Hold to fire the engine', thrustHint: 'Hold the button (or Space) to slow down. Touch down gently before the fuel runs out.',
            alt: 'Height', speed: 'Speed', fuel: 'Fuel', tooFast: 'Too fast! The real landing worked, so try again.',
            touchdown: 'Touchdown!', enginesOff: 'ENGINES OFF', chute: 'Open the parachute', lower: 'Lower the rover on its cables',
            bounces: 'Bounces', snap: 'Take pictures', snapHint: 'Tap as fast as you can before you hit!', photos: 'Pictures',
            aim: 'Aim at the Moon', burn: 'Fire the engine to enter orbit', swing: 'Swing past the planet', unfold: 'Unfold',
            vWalk: 'Step out', vDrive: 'Drive', vDig: 'Dig', vPhoto: 'Take the picture', vListen: 'Listen', vMeasure: 'Measure',
            vFly: 'Fire the engine', vSignal: 'Send the signal', vDeploy: 'Set it up', vLiftoff: 'Lift off',
            complete: 'Mission complete', youWere: 'You lived the whole mission of {name}.',
            again: 'Choose another mission', story: 'Read its full story', flyThis: 'Be this relic',
            eLeft: 'Left behind', eDust: 'Covered in dust', eCold: 'Frozen in the dark', eSilent: 'Radio silence', ePower: 'Out of power',
            eOff: 'Switched off', eCrash: 'Impact', eBroken: 'Grounded', eAlive: 'Still working'
        },
        ar: {
            title: 'كن أنت الأثر', pickTitle: 'اختر آلة وعش مهمتها',
            pickDesc: 'كل مهمة تتبع المهمة الحقيقية، من يوم الإقلاع إلى اليوم الذي تُركت فيه.',
            flown: 'أُنجزت المهمة', flownCount: 'أُنجزت {n} من {t} مهمة',
            reset: 'إعادة ضبط المهمات', resetSure: 'اضغط مرة أخرى لمسح المهمات المنجزة', resetEmpty: 'لم تُنجز أي مهمة بعد', exit: 'خروج', missions: 'المهمات', next: 'التالي', finish: 'إنهاء',
            Moon: 'القمر', Mars: 'المريخ', Deep: 'الفضاء السحيق', today: 'اليوم',
            sLaunch: 'يوم الإقلاع', sCruise: 'الرحلة', sEnd: 'نهاية المهمة', sAlive: 'ما زال يعمل حتى اليوم',
            aPowered: 'الهبوط', aAirbag: 'الهبوط', aSkycrane: 'الهبوط', aImpact: 'الاصطدام', aOrbit: 'الوصول إلى القمر',
            aFlyby: 'أول مرور', aRide: 'الوصول', aCutoff: 'الهبوط',
            launchText: 'أنت الآن {name}. تجلس فوق صاروخ {rocket} في {site}.',
            ignite: 'أشعل المحركات', staging: 'افصل المرحلة الفارغة', stagingHint: 'اضغط عندما تكون العلامة في المنطقة الخضراء.',
            inSpace: 'تسقط المرحلة الفارغة. أنت الآن في الفضاء.',
            cruiseText: 'تستغرق الرحلة نحو {n} {unit}. تشغيل قصير للمحرك يبقيك على المسار.',
            days: 'أيام', months: 'شهراً', course: 'صحّح مسارك', onCourse: 'أنت على المسار الصحيح.',
            perfect: 'توقيت ممتاز!', close: 'انحراف بسيط. حاسوب الرحلة يصحّحه.',
            thrust: 'اضغط مطولاً لتشغيل المحرك', thrustHint: 'اضغط الزر مطولاً (أو مفتاح المسافة) لتُبطئ. اهبط بلطف قبل أن ينتهي الوقود.',
            alt: 'الارتفاع', speed: 'السرعة', fuel: 'الوقود', tooFast: 'سرعة زائدة! الهبوط الحقيقي نجح، فحاول مرة أخرى.',
            touchdown: 'تم الهبوط!', enginesOff: 'المحركات متوقفة', chute: 'افتح المظلة', lower: 'أنزل المركبة بالحبال',
            bounces: 'الارتدادات', snap: 'التقط الصور', snapHint: 'اضغط بأسرع ما يمكن قبل الاصطدام!', photos: 'الصور',
            aim: 'صوّب نحو القمر', burn: 'أشعل المحرك لتدخل المدار', swing: 'اندفع بجانب الكوكب', unfold: 'افتح',
            vWalk: 'اخرج', vDrive: 'قُد', vDig: 'احفر', vPhoto: 'التقط الصورة', vListen: 'استمع', vMeasure: 'قِس',
            vFly: 'أشعل المحرك', vSignal: 'أرسل الإشارة', vDeploy: 'انصبه', vLiftoff: 'أقلع',
            complete: 'اكتملت المهمة', youWere: 'لقد عشت مهمة {name} كاملة.',
            again: 'اختر مهمة أخرى', story: 'اقرأ قصته كاملة', flyThis: 'كن أنت هذا الأثر',
            eLeft: 'تُرك في مكانه', eDust: 'غطّاه الغبار', eCold: 'تجمّد في الظلام', eSilent: 'صمت الراديو', ePower: 'نفدت الطاقة',
            eOff: 'أُطفئ', eCrash: 'الاصطدام', eBroken: 'توقف عن الطيران', eAlive: 'ما زال يعمل'
        }
    };
    const lang = () => (typeof currentLang !== 'undefined' && TXT[currentLang]) ? currentLang : 'en';
    const tr = (k, vars) => {
        let s = TXT[lang()][k] || TXT.en[k] || k;
        if (vars) Object.keys(vars).forEach(v => { s = s.replace('{' + v + '}', vars[v]); });
        return s;
    };
    const pick = pair => pair[lang() === 'ar' ? 1 : 0];
    const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
    const click = () => { if (typeof playClickSound === 'function') playClickSound(); };
    const fanfare = () => { if (typeof playBadgeSound === 'function') playBadgeSound(); };
    const cap = s => s.charAt(0).toUpperCase() + s.slice(1);

    function fmtDate(d) {
        if (!d) return tr('today');
        const p = d.split('-').map(Number), loc = lang() === 'ar' ? 'ar-EG' : 'en-GB';
        const opt = p.length === 1 ? { year: 'numeric' } : p.length === 2 ? { year: 'numeric', month: 'long' } : { year: 'numeric', month: 'long', day: 'numeric' };
        try { return new Intl.DateTimeFormat(loc, Object.assign({ timeZone: 'UTC' }, opt)).format(new Date(Date.UTC(p[0], (p[1] || 1) - 1, p[2] || 1))); }
        catch (e) { return d; }
    }

    let flown = [];
    try { const raw = JSON.parse(localStorage.getItem(SAVE_KEY)); if (Array.isArray(raw)) flown = raw; } catch (e) { /* none yet */ }

    /* ---------------- UI shell ---------------- */
    let ui = null, ctx = null, rafId = 0, last = 0, W = 0, H = 0;
    let M = null;            // the running mission
    let widget = null;       // the current interactive control
    const held = { thrust: false };

    function createUI() {
        const root = document.createElement('div');
        root.id = 'mission'; root.className = 'mission'; root.hidden = true;
        root.innerHTML =
            '<canvas class="mission-canvas"></canvas>' +
            '<div class="mission-top"><span class="mission-chip" id="ms-name"></span><span class="mission-dots" id="ms-dots"></span>' +
                '<span class="mission-spacer"></span><button type="button" class="mission-btn" id="ms-list"></button>' +
                '<button type="button" class="mission-btn mission-btn-red" id="ms-exit"></button></div>' +
            '<div class="mission-panel" id="ms-panel"></div>' +
            '<div class="mission-picker" id="ms-picker"></div>';
        document.body.appendChild(root);
        const $ = id => root.querySelector('#' + id);
        ui = { root, canvas: root.querySelector('canvas'), name: $('ms-name'), dots: $('ms-dots'), list: $('ms-list'), exit: $('ms-exit'),
               panel: $('ms-panel'), picker: $('ms-picker'), top: root.querySelector('.mission-top') };
        ctx = ui.canvas.getContext('2d');
        ui.exit.addEventListener('click', () => { click(); closeMissions(); });
        ui.list.addEventListener('click', () => { click(); showPicker(); });
        window.addEventListener('resize', resize);
        window.addEventListener('keydown', e => key(e, true));
        window.addEventListener('keyup', e => key(e, false));
    }
    function resize() {
        if (!ui) return;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        W = window.innerWidth; H = window.innerHeight;
        ui.canvas.width = W * dpr; ui.canvas.height = H * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    function key(e, down) {
        if (!ui || ui.root.hidden) return;
        if (e.code === 'Space' || e.code === 'Enter' || e.code === 'NumpadEnter') {
            if (e.target && /^(INPUT|TEXTAREA)$/.test(e.target.tagName)) return;
            e.preventDefault();
            if (widget && widget.hold) { held.thrust = down; return; }
            if (down && !e.repeat) {
                const b = ui.panel.querySelector('[data-primary]');
                if (b && !b.disabled) b.click();
            }
        } else if (e.code === 'Escape' && down) { if (M) showPicker(); else closeMissions(); }
    }

    /* ---------------- Mission picker ---------------- */
    function showPicker() {
        M = null; widget = null;
        ui.top.hidden = true; ui.panel.hidden = true; ui.picker.hidden = false;
        const group = target => {
            const list = RELICS_DATA.filter(r => r.target === target && MISSIONS[r.id]);
            return '<h3 class="mission-group">' + esc(tr(target)) + '</h3><div class="mission-grid">' + list.map(r => {
                const L = getLocalizedRelic(r), done = flown.includes(r.id);
                return '<button type="button" class="mission-card mission-card-' + target.toLowerCase() + '" data-mission="' + r.id + '">' +
                    '<i class="fa-solid ' + r.icon + '"></i><span class="mission-card-name">' + esc(L.name) + '</span>' +
                    '<span class="mission-card-date">' + esc(fmtDate(MISSIONS[r.id].L[0])) + '</span>' +
                    (done ? '<span class="mission-card-done"><i class="fa-solid fa-circle-check"></i> ' + esc(tr('flown')) + '</span>' : '') + '</button>';
            }).join('') + '</div>';
        };
        ui.picker.innerHTML = '<div class="mission-picker-box">' +
            '<div class="mission-picker-head"><h2><i class="fa-solid fa-user-astronaut"></i> ' + esc(tr('title')) + '</h2>' +
            '<button type="button" class="mission-btn mission-btn-red" id="ms-close">' + esc(tr('exit')) + '</button></div>' +
            '<p class="mission-picker-title">' + esc(tr('pickTitle')) + '</p><p class="mission-picker-desc">' + esc(tr('pickDesc')) + '</p>' +
            '<p class="mission-picker-desc"><i class="fa-solid fa-medal"></i> ' + esc(tr('flownCount', { n: flown.filter(id => MISSIONS[id]).length, t: Object.keys(MISSIONS).length })) + '</p>' +
            group('Moon') + group('Mars') + group('Deep') +
            '<div class="mission-picker-foot"><button type="button" class="mission-reset" id="ms-reset"><i class="fa-solid fa-rotate-left"></i> ' + esc(tr('reset')) + '</button></div></div>';
        ui.picker.scrollTop = 0;
        ui.picker.querySelector('#ms-close').addEventListener('click', () => { click(); closeMissions(); });
        // Reset: the first tap arms the button, the second one erases the flown missions
        const resetBtn = ui.picker.querySelector('#ms-reset');
        let armed = false, armTimer = 0;
        const label = (key, icon) => { resetBtn.innerHTML = '<i class="fa-solid ' + icon + '"></i> ' + esc(tr(key)); };
        resetBtn.addEventListener('click', () => {
            click();
            clearTimeout(armTimer);
            if (!flown.length) { label('resetEmpty', 'fa-circle-info'); armTimer = setTimeout(() => label('reset', 'fa-rotate-left'), 1800); return; }
            if (!armed) {
                armed = true; resetBtn.classList.add('is-armed'); label('resetSure', 'fa-triangle-exclamation');
                armTimer = setTimeout(() => { armed = false; resetBtn.classList.remove('is-armed'); label('reset', 'fa-rotate-left'); }, 4000);
                return;
            }
            flown = [];
            try { localStorage.removeItem(SAVE_KEY); } catch (e) { /* no storage */ }
            showPicker();
        });
        ui.picker.querySelectorAll('[data-mission]').forEach(b => b.addEventListener('click', () => { click(); startMission(b.dataset.mission); }));
    }

    /* ---------------- Running a mission ---------------- */
    function startMission(id) {
        const raw = RELICS_DATA.find(r => r.id === id), def = MISSIONS[id];
        if (!raw || !def) return;
        const order = def.order || ('LCA' + def.E.map((e, i) => i).join('') + 'X');
        M = { id, raw, def, relic: getLocalizedRelic(raw), steps: order.split(''), i: -1, t: 0,
              scene: 'pad', rise: 0, prog: 0, alt: 100, flame: false, chute: false, bag: false, fx: null, fxT: 0, end: null, endT: 0,
              flash: 0, crater: false, planet: 0, landed: false, tilt: 0, unfolded: 1 };
        ui.picker.hidden = true; ui.top.hidden = false; ui.panel.hidden = false;
        ui.name.innerHTML = '<i class="fa-solid ' + raw.icon + '"></i> ' + esc(M.relic.name);
        ui.list.textContent = tr('missions'); ui.exit.textContent = tr('exit');
        nextStep();
    }
    function dots() {
        ui.dots.innerHTML = M.steps.map((s, k) => '<i class="' + (k < M.i ? 'is-done' : k === M.i ? 'is-now' : '') + '"></i>').join('');
    }
    function panel(date, title, body, controls) {
        ui.panel.innerHTML =
            '<div class="mission-head"><span class="mission-date"><i class="fa-solid fa-calendar-day"></i> ' + esc(date) + '</span>' +
            '<span class="mission-title">' + esc(title) + '</span></div>' +
            (body ? '<p class="mission-text">' + esc(body) + '</p>' : '') + '<div class="mission-controls" id="ms-controls">' + (controls || '') + '</div>';
        return ui.panel.querySelector('#ms-controls');
    }
    function nextBtn(label) {
        const box = ui.panel.querySelector('#ms-controls');
        box.innerHTML = '<button type="button" class="mission-btn mission-btn-main" data-primary>' + esc(label || tr('next')) + ' <i class="fa-solid fa-arrow-right rtl:rotate-180"></i></button>';
        box.querySelector('button').addEventListener('click', () => { click(); nextStep(); });
        widget = null;
    }
    function say(text, good) {
        let p = ui.panel.querySelector('.mission-text');
        if (!p) { p = document.createElement('p'); p.className = 'mission-text'; ui.panel.insertBefore(p, ui.panel.querySelector('#ms-controls')); }
        p.textContent = text;
        p.classList.toggle('is-good', !!good);
    }

    function nextStep() {
        M.i++; M.t = 0; M.fx = null; widget = null; held.thrust = false;
        if (M.i >= M.steps.length) return summary();
        dots();
        const s = M.steps[M.i], d = M.def;
        if (s === 'L') stepLaunch();
        else if (s === 'C') stepCruise();
        else if (s === 'A') stepArrive();
        else if (s === 'X') stepEnd();
        else stepEvent(d.E[+s]);
    }

    function stepLaunch() {
        const d = M.def;
        M.scene = 'pad'; M.rise = 0;
        const box = panel(fmtDate(d.L[0]), tr('sLaunch'),
            tr('launchText', { name: M.relic.name, rocket: pick(MISSION_ROCKETS[d.L[1]]), site: pick(MISSION_SITES[d.L[2]]) }),
            '<button type="button" class="mission-btn mission-btn-main" data-primary><i class="fa-solid fa-fire"></i> ' + esc(tr('ignite')) + '</button>');
        box.querySelector('button').addEventListener('click', () => {
            fanfare();
            box.innerHTML = '';
            M.fx = 'liftoff'; M.fxT = 0;
            setTimeout(() => { if (M && M.steps[M.i] === 'L') timing(tr('staging'), () => { M.fx = 'staged'; M.fxT = 0; say(tr('inSpace'), true); nextBtn(); }); }, 2600);
        });
    }
    function stepCruise() {
        const d = M.def;
        M.scene = 'space'; M.prog = 0;
        panel(fmtDate(d.L[0]), tr('sCruise'), tr('cruiseText', { n: d.trip[0], unit: tr(d.trip[1]) }));
        timing(tr('course'), () => { M.fx = 'cruise'; M.fxT = 0; say(tr('onCourse'), true); nextBtn(); });
    }
    function stepArrive() {
        const d = M.def, text = pick(d.A[1]), date = fmtDate(d.A[0]), title = tr('a' + cap(d.land));
        const done = () => { say(text, true); nextBtn(); };
        M.landed = false;
        if (d.land === 'powered' || d.land === 'cutoff') {
            M.scene = 'descent'; M.alt = 100; M.chute = false; M.bag = false;
            panel(date, title, tr('thrustHint'));
            descent(d.land === 'cutoff', () => {
                if (d.land === 'cutoff') { M.flash = 1; M.crater = true; M.scene = 'surface'; M.end = 'crash'; M.endT = 0; return done(); }
                M.scene = 'surface'; M.landed = true;
                if (d.bounce) { M.fx = 'bounce'; M.fxT = 0; M.bounceN = d.bounce; setTimeout(() => { if (M) done(); }, 2200); } else done();
            });
        } else if (d.land === 'airbag') {
            M.scene = 'descent'; M.alt = 100; M.chute = false; M.bag = false; M.fx = 'fall'; M.fxT = 0;
            panel(date, title, '');
            timing(tr('chute'), () => {
                M.chute = false; M.bag = true; M.fx = 'bags'; M.fxT = 0; M.bounceN = d.bounce; M.bounceC = 0;
                const box = ui.panel.querySelector('#ms-controls');
                box.innerHTML = '<p class="mission-count">' + esc(tr('bounces')) + ': <b id="ms-count">0</b> / ' + d.bounce + '</p>';
                const tick = setInterval(() => {
                    if (!M || M.steps[M.i] !== 'A') return clearInterval(tick);
                    M.bounceC++;
                    const c = ui.panel.querySelector('#ms-count'); if (c) c.textContent = M.bounceC;
                    if (M.bounceC >= d.bounce) { clearInterval(tick); M.scene = 'surface'; M.bag = false; M.chute = false; M.landed = true; M.fx = null; done(); }
                }, Math.max(90, 2600 / d.bounce));
            });
        } else if (d.land === 'skycrane') {
            M.scene = 'descent'; M.alt = 100; M.fx = 'heat'; M.fxT = 0; M.chute = false;
            panel(date, title, '');
            timing(tr('chute'), () => {
                M.chute = true; M.fx = 'chuted'; M.fxT = 0;
                timing(tr('lower'), () => { M.fx = 'crane'; M.fxT = 0; M.chute = false; setTimeout(() => { if (M) { M.scene = 'surface'; M.landed = true; done(); } }, 1800); });
            });
        } else if (d.land === 'impact') {
            M.scene = 'descent'; M.alt = 100; M.fx = 'dive'; M.fxT = 0;
            panel(date, title, M.def.kind === 'probe' ? tr('snapHint') : '');
            const hit = () => { M.flash = 1; M.crater = true; M.scene = 'surface'; M.end = 'crash'; M.endT = 0; done(); };
            if (M.def.kind === 'probe') taps(tr('snap'), tr('photos'), 5, hit); else timing(tr('aim'), hit);
        } else if (d.land === 'orbit') {
            M.scene = 'space'; M.prog = 1; M.fx = 'orbit'; M.fxT = 0;
            panel(date, title, '');
            timing(tr('burn'), () => { M.fx = 'orbiting'; done(); });
        } else if (d.land === 'flyby') {
            M.scene = 'deep'; M.planet = 0; M.fx = 'approach'; M.fxT = 0;
            panel(date, title, '');
            timing(tr('swing'), () => { M.fx = 'sling'; M.fxT = 0; done(); });
        } else {   // ride: carried here by another craft, then set up
            M.scene = 'surface'; M.landed = true; M.unfolded = 0.25;
            const box = panel(date, title, '',
                '<button type="button" class="mission-btn mission-btn-main" data-primary><i class="fa-solid fa-up-right-and-down-left-from-center"></i> ' + esc(tr('unfold')) + '</button>');
            box.querySelector('button').addEventListener('click', () => { click(); M.fx = 'unfold'; M.fxT = 0; box.innerHTML = ''; setTimeout(() => { if (M) done(); }, 900); });
        }
    }
    const VERBS = { walk: ['vWalk', 'fa-shoe-prints'], drive: ['vDrive', 'fa-car-side'], dig: ['vDig', 'fa-trowel'], photo: ['vPhoto', 'fa-camera'],
        listen: ['vListen', 'fa-wave-square'], measure: ['vMeasure', 'fa-ruler'], fly: ['vFly', 'fa-fire'], signal: ['vSignal', 'fa-tower-broadcast'],
        deploy: ['vDeploy', 'fa-screwdriver-wrench'], liftoff: ['vLiftoff', 'fa-rocket'] };
    function stepEvent(ev) {
        const deep = M.raw.target === 'Deep' || M.def.land === 'orbit' || (M.def.land === 'impact' && !M.landed);
        M.scene = deep ? (M.raw.target === 'Deep' ? 'deep' : 'space') : 'surface';
        if (M.raw.target === 'Deep') M.planet = Math.min(4, M.steps.slice(0, M.i).filter(x => /\d|A/.test(x)).length);
        const v = VERBS[ev[1]];
        const box = panel(fmtDate(ev[0]), tr(v[0]), '',
            '<button type="button" class="mission-btn mission-btn-main" data-primary><i class="fa-solid ' + v[1] + '"></i> ' + esc(tr(v[0])) + '</button>');
        box.querySelector('button').addEventListener('click', () => {
            click();
            M.fx = ev[1]; M.fxT = 0; box.innerHTML = '';
            setTimeout(() => { if (M) { if (ev[1] === 'photo') M.flash = 0.6; say(pick(ev[2]), true); nextBtn(); } }, 1300);
        });
    }
    function stepEnd() {
        const d = M.def, alive = d.X[1] === 'alive';
        if (M.raw.target === 'Deep') { M.scene = 'deep'; M.planet = 4; }
        else if (d.land === 'orbit') { M.scene = 'surface'; M.flash = 1; M.crater = true; }
        else M.scene = 'surface';
        M.end = d.X[1]; M.endT = 0;
        panel(fmtDate(d.X[0]), tr(alive ? 'sAlive' : 'sEnd') + ' · ' + tr('e' + cap(d.X[1])), M.relic.abandoned);
        nextBtn(tr('finish'));
    }
    function summary() {
        if (!flown.includes(M.id)) { flown.push(M.id); try { localStorage.setItem(SAVE_KEY, JSON.stringify(flown)); } catch (e) { /* no storage */ } }
        fanfare();
        const d = M.def, rows = [[d.L[0], tr('sLaunch')], [d.A[0], tr('a' + cap(d.land))]]
            .concat(d.E.map(e => [e[0], tr(VERBS[e[1]][0])])).concat([[d.X[0], tr('e' + cap(d.X[1]))]])
            .sort((a, b) => (a[0] || '9999').localeCompare(b[0] || '9999'));
        const id = M.id;
        ui.panel.innerHTML = '<div class="mission-done"><i class="fa-solid fa-medal"></i><h3>' + esc(tr('complete')) + '</h3>' +
            '<p>' + esc(tr('youWere', { name: M.relic.name })) + '</p></div>' +
            '<ul class="mission-recap">' + rows.map(r => '<li><span>' + esc(fmtDate(r[0])) + '</span><b>' + esc(r[1]) + '</b></li>').join('') + '</ul>' +
            '<div class="mission-controls"><button type="button" class="mission-btn mission-btn-main" data-primary id="ms-again">' + esc(tr('again')) + '</button>' +
            '<button type="button" class="mission-btn" id="ms-story">' + esc(tr('story')) + '</button></div>';
        ui.panel.scrollTop = 0;
        ui.dots.innerHTML = M.steps.map(() => '<i class="is-done"></i>').join('');
        ui.panel.querySelector('#ms-again').addEventListener('click', () => { click(); showPicker(); });
        ui.panel.querySelector('#ms-story').addEventListener('click', () => { closeMissions(); if (typeof openModal === 'function') openModal(id); });
    }

    /* ---------------- Controls ---------------- */
    // A marker sweeps across a bar; press while it is in the green zone
    function timing(label, onDone) {
        const box = ui.panel.querySelector('#ms-controls');
        box.innerHTML = '<div class="mission-bar"><span class="mission-zone"></span><span class="mission-marker" id="ms-marker"></span></div>' +
            '<button type="button" class="mission-btn mission-btn-main" data-primary>' + esc(label) + '</button>' +
            '<p class="mission-hint">' + esc(tr('stagingHint')) + '</p>';
        const w = { pos: 0, dir: 1, done: false, update(dt) {
            if (w.done) return;
            w.pos += w.dir * dt * 0.75;
            if (w.pos > 1) { w.pos = 1; w.dir = -1; } else if (w.pos < 0) { w.pos = 0; w.dir = 1; }
            const mk = ui.panel.querySelector('#ms-marker'); if (mk) mk.style.left = (w.pos * 100) + '%';
        } };
        widget = w;
        box.querySelector('button').addEventListener('click', () => {
            if (w.done) return;
            w.done = true;
            const hit = Math.abs(w.pos - 0.5) <= 0.13;
            if (hit) fanfare(); else click();
            box.innerHTML = '<p class="mission-hint ' + (hit ? 'is-good' : '') + '">' + esc(tr(hit ? 'perfect' : 'close')) + '</p>';
            setTimeout(() => { if (M) onDone(hit); }, 650);
        });
    }
    // Hold to fire the engine and land softly. With cutoff = true the engines die at 40 m, as on Mars Polar Lander.
    function descent(cutoff, onDone) {
        const box = ui.panel.querySelector('#ms-controls');
        box.innerHTML = '<div class="mission-gauges"><span>' + esc(tr('alt')) + ' <b id="ms-alt">100</b> m</span><span>' + esc(tr('speed')) + ' <b id="ms-spd">0</b> m/s</span>' +
            '<span class="mission-fuel"><i id="ms-fuel"></i></span></div>' +
            '<button type="button" class="mission-btn mission-btn-main mission-hold" id="ms-thrust"><i class="fa-solid fa-fire"></i> ' + esc(tr('thrust')) + '</button>';
        const btn = box.querySelector('#ms-thrust');
        const on = e => { e.preventDefault(); held.thrust = true; }, off = () => { held.thrust = false; };
        btn.addEventListener('pointerdown', on); btn.addEventListener('pointerup', off); btn.addEventListener('pointerleave', off); btn.addEventListener('pointercancel', off);
        const w = { hold: true, v: 10, fuel: 1, dead: false, done: false, update(dt) {
            if (w.done) return;
            if (cutoff && M.alt <= 40 && !w.dead) { w.dead = true; btn.disabled = true; btn.innerHTML = '<i class="fa-solid fa-power-off"></i> ' + esc(tr('enginesOff')); btn.classList.add('is-dead'); }
            const burn = held.thrust && w.fuel > 0 && !w.dead;
            M.flame = burn;
            w.v += (burn ? -8 : 4) * dt;
            if (w.v < 1.5) w.v = 1.5;
            if (burn) w.fuel = Math.max(0, w.fuel - dt / 9);
            M.alt -= w.v * dt;
            const set = (id, val) => { const el = ui.panel.querySelector(id); if (el) el.textContent = val; };
            set('#ms-alt', Math.max(0, Math.round(M.alt))); set('#ms-spd', w.v.toFixed(1));
            const spd = ui.panel.querySelector('#ms-spd'); if (spd) spd.classList.toggle('is-bad', w.v > 8);
            const f = ui.panel.querySelector('#ms-fuel'); if (f) f.style.width = (w.fuel * 100) + '%';
            if (M.alt <= 0) {
                M.alt = 0; M.flame = false; held.thrust = false;
                if (cutoff || w.v <= 8) { w.done = true; if (!cutoff) { fanfare(); say(tr('touchdown'), true); } widget = null; box.innerHTML = ''; setTimeout(() => { if (M) onDone(); }, cutoff ? 100 : 700); }
                else { M.flash = 0.5; say(tr('tooFast'), false); M.alt = 100; w.v = 10; w.fuel = 1; }
            }
        } };
        widget = w;
    }
    // Tap as many times as you can in a few seconds
    function taps(label, unit, seconds, onDone) {
        const box = ui.panel.querySelector('#ms-controls');
        box.innerHTML = '<p class="mission-count">' + esc(unit) + ': <b id="ms-count">0</b></p>' +
            '<button type="button" class="mission-btn mission-btn-main" data-primary><i class="fa-solid fa-camera"></i> ' + esc(label) + '</button>';
        const w = { n: 0, left: seconds, done: false, update(dt) {
            if (w.done) return;
            w.left -= dt; M.alt = Math.max(0, 100 * w.left / seconds);
            if (w.left <= 0) { w.done = true; widget = null; box.innerHTML = '<p class="mission-count">' + esc(unit) + ': <b>' + w.n + '</b></p>'; setTimeout(() => { if (M) onDone(); }, 400); }
        } };
        widget = w;
        box.querySelector('button').addEventListener('click', () => { if (w.done) return; w.n++; M.flash = 0.25; const c = ui.panel.querySelector('#ms-count'); if (c) c.textContent = w.n; });
    }

    /* ---------------- Drawing ---------------- */
    const SKY = { Moon: ['#02030a', '#0a0c18'], Mars: ['#b98a66', '#e6bf95'], Deep: ['#01020a', '#06081a'] };
    const GROUND = { Moon: ['#8d9098', '#5d6068'], Mars: ['#b4552c', '#7c3418'], Deep: ['#8d9098', '#5d6068'] };
    let starField = null;
    function stars(alpha) {
        if (!starField) { starField = []; for (let i = 0; i < 260; i++) starField.push([Math.random(), Math.random(), Math.random() * 1.4 + 0.3]); }
        ctx.fillStyle = 'rgba(255,255,255,' + alpha + ')';
        starField.forEach(s => { ctx.beginPath(); ctx.arc(s[0] * W, s[1] * H, s[2], 0, 6.283); ctx.fill(); });
    }
    function ball(x, y, r, c1, c2, bands) {
        const g = ctx.createRadialGradient(x - r * 0.35, y - r * 0.35, r * 0.1, x, y, r);
        g.addColorStop(0, c1); g.addColorStop(1, c2);
        ctx.save(); ctx.beginPath(); ctx.arc(x, y, r, 0, 6.283); ctx.clip();
        ctx.fillStyle = g; ctx.fillRect(x - r, y - r, r * 2, r * 2);
        if (bands) bands.forEach((b, i) => { ctx.fillStyle = b; ctx.globalAlpha = 0.35; ctx.fillRect(x - r, y - r + (i + 0.5) * (2 * r / (bands.length + 1)), r * 2, r * 0.16); });
        ctx.restore(); ctx.globalAlpha = 1;
    }
    const PLANETS = [['#f3dcb8', '#8a5a34', ['#b5713f', '#e9dcc3', '#a8683f', '#e6d3b3']], ['#f1e2b0', '#9a8048', ['#cfb57c', '#eadfb4', '#cfb57c']],
                     ['#b8eef0', '#3f8f96', null], ['#6f95ff', '#1b2f8a', ['#4a74ea']], ['#0b0e22', '#01020a', null]];
    function flame(x, y, s, t) {
        const len = s * (1.4 + 0.5 * Math.sin(t * 40));
        const g = ctx.createLinearGradient(x, y, x, y + len);
        g.addColorStop(0, 'rgba(255,255,255,0.95)'); g.addColorStop(0.3, 'rgba(255,200,80,0.9)'); g.addColorStop(1, 'rgba(255,80,20,0)');
        ctx.fillStyle = g; ctx.beginPath(); ctx.moveTo(x - s * 0.45, y); ctx.lineTo(x + s * 0.45, y); ctx.lineTo(x, y + len); ctx.closePath(); ctx.fill();
    }
    const rect = (x, y, w, h, c) => { ctx.fillStyle = c; ctx.fillRect(x, y, w, h); };
    const line = (x1, y1, x2, y2, c, w) => { ctx.strokeStyle = c; ctx.lineWidth = w || 2; ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke(); };
    const disc = (x, y, r, c) => { ctx.fillStyle = c; ctx.beginPath(); ctx.arc(x, y, r, 0, 6.283); ctx.fill(); };
    const dish = (x, y, r, c) => { ctx.fillStyle = c; ctx.beginPath(); ctx.ellipse(x, y, r, r * 0.38, 0, 0, Math.PI); ctx.fill(); line(x, y, x, y - r * 0.5, '#cbd5e1', 2); };

    // Each craft is drawn around (0,0) = its base, in units of u
    function craft(kind, u, t, opt) {
        const o = opt || {};
        if (kind === 'lander') {
            [-1, 1].forEach(s => { line(s * u * 0.7, -u * 0.9, s * u * 1.5, 0, '#cbd5e1', 3); disc(s * u * 1.5, 0, u * 0.16, '#d9a520'); });
            rect(-u, -u * 1.5, u * 2, u * 0.75, '#d9a520'); rect(-u * 0.7, -u * 1.62, u * 1.4, u * 0.14, '#cbd5e1');
            ctx.fillStyle = '#3a3f4b'; ctx.beginPath(); ctx.moveTo(-u * 0.2, -u * 0.75); ctx.lineTo(u * 0.2, -u * 0.75); ctx.lineTo(u * 0.42, -u * 0.25); ctx.lineTo(-u * 0.42, -u * 0.25); ctx.closePath(); ctx.fill();
            if (!o.noTop) { ctx.fillStyle = '#e8ebef'; ctx.beginPath(); ctx.moveTo(-u * 0.6, -u * 1.62); ctx.lineTo(-u * 0.4, -u * 2.4); ctx.lineTo(u * 0.4, -u * 2.4); ctx.lineTo(u * 0.6, -u * 1.62); ctx.closePath(); ctx.fill(); rect(-u * 0.18, -u * 2.15, u * 0.36, u * 0.3, '#1d3fa8'); }
        } else if (kind === 'rover') {
            [-1, 0, 1].forEach(s => { disc(s * u * 0.9, -u * 0.3, u * 0.3, '#2b303b'); disc(s * u * 0.9, -u * 0.3, u * 0.12, '#cbd5e1'); });
            rect(-u * 1.1, -u * 1.0, u * 2.2, u * 0.45, '#e8ebef'); rect(-u * 1.25, -u * 1.12, u * 2.5, u * 0.12, '#16308a');
            line(u * 0.6, -u * 1.1, u * 0.6, -u * 2.0, '#cbd5e1', 3); rect(u * 0.38, -u * 2.2, u * 0.44, u * 0.24, '#e8ebef');
            dish(-u * 0.6, -u * 1.6, u * 0.4, '#e8ebef');
        } else if (kind === 'probe') {
            rect(-u * 0.6, -u * 0.9, u * 1.2, u * 0.5, '#d9a520');
            ctx.fillStyle = '#e8ebef'; ctx.beginPath(); ctx.ellipse(0, -u * 1.05, u * 1.3, u * 0.42, 0, Math.PI, 0); ctx.fill();
            line(0, -u * 1.05, 0, -u * 1.75, '#cbd5e1', 2); disc(0, -u * 1.78, u * 0.1, '#2b303b');
            line(-u * 0.6, -u * 0.65, -u * 2.4, -u * 0.4, '#cbd5e1', 2); rect(-u * 2.6, -u * 0.55, u * 0.7, u * 0.28, '#2b303b');
            line(u * 0.6, -u * 0.65, u * 2.8, -u * 1.0, '#cbd5e1', 2); rect(u * 2.7, -u * 1.12, u * 0.22, u * 0.22, '#d9a520');
        } else if (kind === 'stage') {
            ctx.save(); ctx.rotate(o.upright ? 0 : -0.5);
            rect(-u * 0.55, -u * 2.8, u * 1.1, u * 2.4, '#e8ebef'); rect(-u * 0.55, -u * 1.5, u * 1.1, u * 0.28, '#14161c'); rect(-u * 0.57, -u * 2.9, u * 1.14, u * 0.18, '#14161c');
            ctx.fillStyle = '#3a3f4b'; ctx.beginPath(); ctx.moveTo(-u * 0.2, -u * 0.4); ctx.lineTo(u * 0.2, -u * 0.4); ctx.lineTo(u * 0.45, 0); ctx.lineTo(-u * 0.45, 0); ctx.closePath(); ctx.fill();
            ctx.restore();
        } else if (kind === 'heli') {
            [-1, 1].forEach(s => line(s * u * 0.2, -u * 0.5, s * u * 0.7, 0, '#cbd5e1', 2));
            rect(-u * 0.3, -u * 0.95, u * 0.6, u * 0.5, '#d9a520'); line(0, -u * 0.95, 0, -u * 1.7, '#cbd5e1', 2);
            const sw = Math.abs(Math.cos(t * (o.spin ? 30 : 0))) * u * 1.6 + u * 0.2;
            rect(-sw, -u * 1.45, sw * 2, u * 0.07, '#2b303b'); rect(-sw * 0.8, -u * 1.62, sw * 1.6, u * 0.07, '#2b303b'); rect(-u * 0.35, -u * 1.85, u * 0.7, u * 0.1, '#16308a');
        } else if (kind === 'mirror') {
            line(-u * 0.5, 0, -u * 0.3, -u * 0.6, '#cbd5e1', 3); line(u * 0.5, 0, u * 0.3, -u * 0.6, '#cbd5e1', 3);
            ctx.save(); ctx.translate(0, -u * 0.8); ctx.rotate(-0.25); rect(-u * 0.8, -u * 0.3, u * 1.6, u * 0.6, '#e8ebef'); rect(-u * 0.68, -u * 0.2, u * 1.36, u * 0.4, '#8fe9ff');
            ctx.strokeStyle = 'rgba(8,10,21,0.35)'; ctx.lineWidth = 1; for (let i = 1; i < 6; i++) { ctx.beginPath(); ctx.moveTo(-u * 0.68 + i * u * 0.227, -u * 0.2); ctx.lineTo(-u * 0.68 + i * u * 0.227, u * 0.2); ctx.stroke(); } ctx.restore();
        } else if (kind === 'station') {
            rect(-u * 0.5, -u * 0.8, u, u * 0.8, '#d9a520'); rect(-u * 0.6, -u * 0.9, u * 1.2, u * 0.1, '#e8ebef'); line(0, -u * 0.9, 0, -u * 1.7, '#cbd5e1', 2); dish(0, -u * 1.7, u * 0.3, '#e8ebef');
            line(u * 0.5, -u * 0.2, u * 1.6, -u * 0.05, '#f1f5f9', 1.5); ctx.fillStyle = '#cbd5e1'; ctx.beginPath(); ctx.arc(u * 1.8, 0, u * 0.35, Math.PI, 0); ctx.fill();
            line(-u * 0.5, -u * 0.2, -u * 1.5, -u * 0.05, '#f1f5f9', 1.5); rect(-u * 1.75, -u * 0.6, u * 0.3, u * 0.6, '#2b303b');
        } else if (kind === 'crane') {
            rect(-u * 1.1, -u * 0.6, u * 2.2, u * 0.45, '#cbd5e1'); disc(-u * 0.5, -u * 0.72, u * 0.26, '#d9a520'); disc(u * 0.5, -u * 0.72, u * 0.26, '#d9a520');
            [-1, 1].forEach(s => { ctx.fillStyle = '#3a3f4b'; ctx.beginPath(); ctx.moveTo(s * u * 0.95, -u * 0.15); ctx.lineTo(s * u * 1.2, u * 0.15); ctx.lineTo(s * u * 0.7, u * 0.15); ctx.closePath(); ctx.fill(); });
        }
    }
    function rocket(u, key) {
        const tall = { saturn: 7, titan: 5.2, atlas5: 5.6, delta: 4.4, centaur: 4.4, agena: 4 }[key] || 5, w = key === 'saturn' ? 0.6 : 0.42;
        rect(-u * w, -u * tall, u * w * 2, u * tall, '#e8ebef'); rect(-u * w, -u * tall * 0.55, u * w * 2, u * 0.25, '#14161c'); rect(-u * w, -u * tall * 0.3, u * w * 2, u * 0.25, '#14161c');
        ctx.fillStyle = '#e8ebef'; ctx.beginPath(); ctx.moveTo(-u * w, -u * tall); ctx.lineTo(0, -u * (tall + 1.3)); ctx.lineTo(u * w, -u * tall); ctx.closePath(); ctx.fill();
        if (key === 'titan' || key === 'atlas5' || key === 'delta') [-1, 1].forEach(s => rect(s * u * (w + 0.22) - u * 0.2, -u * tall * 0.55, u * 0.4, u * tall * 0.55, '#cfd6df'));
        ctx.fillStyle = '#3a3f4b'; ctx.beginPath(); ctx.moveTo(-u * w * 1.5, 0); ctx.lineTo(-u * w, -u * 0.7); ctx.lineTo(u * w, -u * 0.7); ctx.lineTo(u * w * 1.5, 0); ctx.closePath(); ctx.fill();
        return tall;
    }
    function ground(target, y) {
        const c = GROUND[target] || GROUND.Moon, g = ctx.createLinearGradient(0, y, 0, H);
        g.addColorStop(0, c[0]); g.addColorStop(1, c[1]);
        ctx.fillStyle = g; ctx.beginPath(); ctx.moveTo(0, y);
        for (let x = 0; x <= W + 40; x += 40) ctx.lineTo(x, y + Math.sin(x * 0.011) * 7 + Math.sin(x * 0.037) * 3);
        ctx.lineTo(W + 40, H); ctx.lineTo(0, H); ctx.closePath(); ctx.fill();
        ctx.fillStyle = 'rgba(0,0,0,0.16)';
        for (let i = 0; i < 9; i++) { const x = (i * 197 + 60) % W, yy = y + 26 + (i * 53) % Math.max(40, H - y - 40); ctx.beginPath(); ctx.ellipse(x, yy, 26 + (i % 3) * 14, 6 + (i % 3) * 2, 0, 0, 6.283); ctx.fill(); }
    }

    function draw(t, dt) {
        const target = M.raw.target, sky = SKY[target] || SKY.Moon, d = M.def;
        const u = Math.max(18, Math.min(W, H) * 0.046), cx = W / 2, gy = H * 0.52;   // the panel covers the lower part of the screen
        ctx.clearRect(0, 0, W, H);

        if (M.scene === 'pad') {
            const up = Math.min(1, M.rise / (H * 1.2));
            const g = ctx.createLinearGradient(0, 0, 0, H);
            g.addColorStop(0, up > 0.5 ? '#02030a' : '#1e5fbf'); g.addColorStop(1, up > 0.5 ? '#12204a' : '#9fd0ff');
            ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
            if (up > 0.35) stars(Math.min(1, (up - 0.35) * 2.5));
            const off = M.rise * 0.55;
            ctx.save(); ctx.translate(0, off);
            rect(0, gy, W, H, '#3f6b3a'); rect(0, gy, W, 10, '#567f4d');
            rect(cx + u * 1.6, gy - u * 7, u * 0.5, u * 7, '#7c2d12'); for (let i = 1; i < 7; i++) line(cx + u * 1.6, gy - i * u, cx + u * 2.1, gy - i * u + u * 0.5, '#9a3412', 2);
            ctx.restore();
            ctx.save(); ctx.translate(cx, gy + off - M.rise);
            if (M.fx === 'staged') { ctx.save(); ctx.translate(0, u * 3 + M.fxT * 260); ctx.rotate(M.fxT * 1.5); rect(-u * 0.5, -u * 2, u, u * 2.4, '#cfd6df'); ctx.restore(); ctx.translate(0, -u * 2.6); craft(d.kind === 'crane' ? 'probe' : d.kind, u * 0.55, t, { upright: true }); }
            else { const tall = rocket(u, d.L[1]); if (M.fx === 'liftoff') flame(0, 0, u * 1.1, t); void tall; }
            ctx.restore();
            if (M.fx === 'liftoff') { M.rise += dt * (120 + M.fxT * 260); ctx.fillStyle = 'rgba(230,230,230,0.5)'; for (let i = 0; i < 9; i++) disc(cx + Math.sin(i * 2.1 + t) * u * (2 + M.fxT * 3), gy + off + u * 0.2 - (i % 3) * u * 0.5, u * (0.8 + (i % 4) * 0.4), 'rgba(235,235,235,0.35)'); }
        } else if (M.scene === 'space') {
            ctx.fillStyle = '#02030a'; ctx.fillRect(0, 0, W, H); stars(0.9);
            const ex = W * 0.14, ey = H * 0.36, tx = W * 0.84, ty = H * 0.2;
            ball(ex, ey, u * 2.2, '#6fb1ff', '#123a8a'); ctx.fillStyle = 'rgba(60,160,80,0.75)'; ctx.beginPath(); ctx.ellipse(ex - u * 0.4, ey - u * 0.2, u * 0.9, u * 0.5, 0.5, 0, 6.283); ctx.fill();
            if (target === 'Moon') ball(tx, ty, u * 1.6, '#e6e8ec', '#6d7078'); else if (target === 'Mars') ball(tx, ty, u * 1.6, '#e9895a', '#7c3418'); else ball(tx, ty, u * 2.6, PLANETS[0][0], PLANETS[0][1], PLANETS[0][2]);
            if (M.fx === 'cruise') M.prog = Math.min(1, M.prog + dt * 0.45);
            ctx.setLineDash([6, 8]); ctx.strokeStyle = 'rgba(0,242,254,0.55)'; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(ex, ey); ctx.quadraticCurveTo(cx, H * 0.02, tx, ty); ctx.stroke(); ctx.setLineDash([]);
            let px, py;
            if (M.fx === 'orbiting') { const a = t * 1.2; px = tx + Math.cos(a) * u * 2.6; py = ty + Math.sin(a) * u * 1.1; ctx.strokeStyle = 'rgba(0,242,254,0.4)'; ctx.beginPath(); ctx.ellipse(tx, ty, u * 2.6, u * 1.1, 0, 0, 6.283); ctx.stroke(); }
            else { const p = M.prog * 0.9 + 0.05, q = 1 - p; px = q * q * ex + 2 * q * p * cx + p * p * tx; py = q * q * ey + 2 * q * p * H * 0.02 + p * p * ty; }
            ctx.save(); ctx.translate(px, py + u * 0.4); craft(d.kind === 'crane' ? 'probe' : d.kind, u * 0.42, t, { upright: true }); ctx.restore();
            if (M.fx && /^(fly|photo|signal|deploy)$/.test(M.fx) && M.fxT < 1.2) disc(px, py, u * (0.5 + M.fxT * 2), 'rgba(0,242,254,' + (0.35 * (1 - M.fxT / 1.2)) + ')');
        } else if (M.scene === 'deep') {
            ctx.fillStyle = '#01020a'; ctx.fillRect(0, 0, W, H); stars(1);
            const P = PLANETS[Math.min(M.planet, 4)];
            let pxr = W * 0.74, shipX = W * 0.36;
            if (M.fx === 'sling') shipX = W * 0.36 + Math.min(1, M.fxT / 1.5) * W * 0.5;
            if (M.planet < 4) {
                const r = u * 5.2; ball(pxr, H * 0.26, r, P[0], P[1], P[2]);
                if (M.planet === 1) { ctx.strokeStyle = 'rgba(232,220,170,0.8)'; ctx.lineWidth = u * 0.5; ctx.beginPath(); ctx.ellipse(pxr, H * 0.26, r * 1.9, r * 0.42, -0.25, 0, 6.283); ctx.stroke(); }
            } else { disc(W * 0.12, H * 0.16, 3, '#fff6c8'); disc(W * 0.12, H * 0.16, 9, 'rgba(255,246,200,0.18)'); }
            ctx.save(); ctx.translate(shipX, H * 0.34 + Math.sin(t * 0.8) * 5); craft('probe', u * 0.8, t); ctx.restore();
            if (M.fx === 'signal' || M.end === 'alive') for (let i = 0; i < 3; i++) { const rr = ((t * 60 + i * 50) % 150); ctx.strokeStyle = 'rgba(0,242,254,' + (0.5 * (1 - rr / 150)) + ')'; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(shipX, H * 0.34 - u, rr, Math.PI * 1.1, Math.PI * 1.6); ctx.stroke(); }
            if (M.fx === 'fly' && M.fxT < 1.2) { ctx.save(); ctx.translate(shipX - u * 0.9, H * 0.34 - u * 0.5); ctx.rotate(Math.PI / 2); flame(0, 0, u * 0.6, t); ctx.restore(); }
        } else {
            // descent and surface share the sky and the ground
            const g = ctx.createLinearGradient(0, 0, 0, gy); g.addColorStop(0, sky[0]); g.addColorStop(1, sky[1]);
            ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
            if (target !== 'Mars') { stars(0.85); ball(W * 0.84, H * 0.13, u * 1.3, '#6fb1ff', '#123a8a'); } else disc(W * 0.82, H * 0.13, u * 0.5, 'rgba(255,255,255,0.85)');
            ground(target, gy);
            let y = gy + u * 0.2, x = cx, rot = 0;
            if (M.scene === 'descent') y = gy + u * 0.2 - (M.alt / 100) * (gy - u * 5);
            if (M.fx === 'heat' ) { disc(x, y, u * 2.2, 'rgba(255,140,40,0.35)'); disc(x, y + u * 0.6, u * 1.5, 'rgba(255,220,120,0.5)'); M.alt = Math.max(55, M.alt - dt * 9); }
            if (M.fx === 'fall') M.alt = Math.max(60, M.alt - dt * 10);
            if (M.fx === 'chuted') M.alt = Math.max(28, M.alt - dt * 9);
            if (M.fx === 'crane') M.alt = Math.max(16, M.alt - dt * 8);
            if (M.fx === 'dive') { rot = 0.5; }
            if (M.fx === 'bags') { const ph = (t * 3) % 1; y = gy - u * 0.6 - Math.abs(Math.sin(ph * Math.PI)) * u * 5 * Math.max(0.15, 1 - M.bounceC / M.bounceN); x = cx - W * 0.2 + (M.bounceC / M.bounceN) * W * 0.3; }
            if (M.fx === 'bounce') { const k = Math.min(1, M.fxT / 2); y -= Math.abs(Math.sin(k * Math.PI * M.bounceN)) * u * 3 * (1 - k); }
            if (M.fx === 'drive') x = cx + Math.sin(Math.min(1, M.fxT / 1.3) * Math.PI) * W * 0.12;
            if (M.fx === 'fly' && d.kind === 'heli') y -= Math.sin(Math.min(1, M.fxT / 1.3) * Math.PI) * u * 4;
            if (M.end === 'broken') rot = 0.35;
            if (M.crater) { ctx.fillStyle = 'rgba(0,0,0,0.45)'; ctx.beginPath(); ctx.ellipse(cx, gy + u * 0.5, u * 3.4, u * 0.7, 0, 0, 6.283); ctx.fill(); ctx.strokeStyle = 'rgba(255,255,255,0.18)'; ctx.lineWidth = 3; ctx.stroke(); }
            if (M.chute) { ctx.fillStyle = '#f97316'; ctx.beginPath(); ctx.arc(x, y - u * 6, u * 2.4, Math.PI, 0); ctx.fill(); [-1, 0, 1].forEach(s => line(x + s * u * 2.2, y - u * 6, x, y - u * 2, 'rgba(255,255,255,0.7)', 1)); }
            const crashed = M.end === 'crash' && M.scene === 'surface';
            if (M.fx === 'liftoff') { ctx.save(); ctx.translate(cx, y - M.fxT * M.fxT * u * 6); ctx.fillStyle = '#e8ebef'; ctx.beginPath(); ctx.moveTo(-u * 0.6, -u * 1.62); ctx.lineTo(-u * 0.4, -u * 2.4); ctx.lineTo(u * 0.4, -u * 2.4); ctx.lineTo(u * 0.6, -u * 1.62); ctx.closePath(); ctx.fill(); flame(0, -u * 1.6, u * 0.5, t); ctx.restore(); M.noTop = true; }
            ctx.save(); ctx.translate(x, y); ctx.rotate(rot);
            if (M.bag) { disc(0, -u * 0.6, u * 1.5, '#e7dcc4'); [0, 1, 2, 3, 4, 5].forEach(i => disc(Math.cos(i * 1.05 + t * 4) * u * 0.9, -u * 0.6 + Math.sin(i * 1.05 + t * 4) * u * 0.9, u * 0.7, '#f5ecd8')); }
            else if (crashed) { ctx.globalAlpha = 0.9; [[-1.4, 0.2, 0.5], [0.9, 0.35, 0.4], [0.1, 0.1, 0.6], [1.8, 0.3, 0.3]].forEach(p => { rect(p[0] * u, p[1] * u - u * 0.2, p[2] * u, p[2] * u * 0.5, '#9aa3b2'); }); ctx.globalAlpha = 1; }
            else {
                const sc = M.fx === 'unfold' ? 0.25 + Math.min(1, M.fxT / 0.8) * 0.75 : (M.steps[M.i] === 'A' && d.land === 'ride' ? M.unfolded : 1);
                if (M.fx === 'unfold' && M.fxT > 0.8) M.unfolded = 1;
                ctx.scale(sc, sc);
                if (M.fx === 'crane') { [-1, 1].forEach(s => line(s * u * 0.6, 0, s * u * 0.5, u * 3, '#f1f5f9', 1.5)); ctx.save(); ctx.translate(0, u * 3.6); craft('rover', u * 0.7, t); ctx.restore(); [-1, 1].forEach(s => flame(s * u * 0.95, u * 0.15, u * 0.35, t)); }
                craft(d.kind, u, t, { noTop: M.noTop && d.kind === 'lander', spin: M.fx === 'fly' });
            }
            ctx.restore();
            if (M.flame) flame(x, y - u * 0.25, u * 0.6, t);
            // small effects for the things the machine does
            const f = M.fx, k = Math.min(1, M.fxT / 1.3);
            if (f === 'walk') { const ax = cx + u * 2 + k * u * 3, ay = gy + u * 0.2 - Math.abs(Math.sin(k * 9)) * u * 0.5; disc(ax, ay - u * 1.5, u * 0.3, '#f8fafc'); rect(ax - u * 0.28, ay - u * 1.2, u * 0.56, u * 0.8, '#f8fafc'); rect(ax - u * 0.28, ay - u * 0.4, u * 0.2, u * 0.4, '#f8fafc'); rect(ax + u * 0.08, ay - u * 0.4, u * 0.2, u * 0.4, '#f8fafc'); }
            if (f === 'dig') { line(cx + u * 0.9, gy - u * 0.9, cx + u * 2.2, gy + u * 0.3 - Math.sin(k * 12) * u * 0.3, '#cbd5e1', 3); for (let i = 0; i < 5; i++) disc(cx + u * 2.3 + i * 5, gy - k * u * (0.5 + i * 0.25), 2.5, 'rgba(255,255,255,0.6)'); }
            if (f === 'listen') for (let i = 0; i < 3; i++) { const rr = ((M.fxT * 110 + i * 45) % 135); ctx.strokeStyle = 'rgba(52,211,153,' + (0.7 * (1 - rr / 135)) + ')'; ctx.lineWidth = 3; ctx.beginPath(); ctx.ellipse(cx, gy + u * 1.2, rr * 2.2, rr * 0.45, 0, 0, 6.283); ctx.stroke(); }
            if (f === 'measure') { ctx.strokeStyle = 'rgba(52,211,153,' + (0.5 + 0.5 * Math.sin(t * 30)) + ')'; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(cx, gy - u * 1.6); ctx.lineTo(W * 0.84, H * 0.13); ctx.stroke(); }
            if (f === 'signal' || M.end === 'alive') for (let i = 0; i < 3; i++) { const rr = ((t * 70 + i * 50) % 150); ctx.strokeStyle = 'rgba(0,242,254,' + (0.6 * (1 - rr / 150)) + ')'; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(cx, gy - u * 2, rr, Math.PI * 1.2, Math.PI * 1.8); ctx.stroke(); }
            if (f === 'deploy') { rect(cx + u * 2.4, gy - k * u * 1.1 + u * 0.2, u * 0.7, k * u * 1.1, '#d9a520'); line(cx + u * 2.75, gy - k * u * 1.1 + u * 0.2, cx + u * 2.75, gy - k * u * 1.9 + u * 0.2, '#cbd5e1', 2); }
            // how it ended
            const e = M.end, a = Math.min(1, M.endT / 3);
            if (e === 'dust') { ctx.fillStyle = 'rgba(190,120,70,' + (0.72 * a) + ')'; ctx.fillRect(0, 0, W, H); }
            if (e === 'cold') { ctx.fillStyle = 'rgba(10,30,70,' + (0.6 * a) + ')'; ctx.fillRect(0, 0, W, H); ctx.fillStyle = 'rgba(255,255,255,' + (0.55 * a) + ')'; for (let i = 0; i < 26; i++) disc(cx - u * 2 + (i * 37) % (u * 4), gy - u * 1.6 + (i * 53) % (u * 1.8), 2, 'rgba(255,255,255,' + (0.7 * a) + ')'); }
            if (e === 'silent' || e === 'power' || e === 'off' || e === 'left' || e === 'broken') { ctx.fillStyle = 'rgba(2,3,10,' + (0.42 * a) + ')'; ctx.fillRect(0, 0, W, H); }
        }
        if (M.scene === 'deep' && M.end && M.end !== 'alive') { ctx.fillStyle = 'rgba(1,2,10,' + (0.5 * Math.min(1, M.endT / 3)) + ')'; ctx.fillRect(0, 0, W, H); }
        if (M.flash > 0) { ctx.fillStyle = 'rgba(255,255,255,' + M.flash + ')'; ctx.fillRect(0, 0, W, H); M.flash = Math.max(0, M.flash - dt * 1.6); }
    }

    function frame(now) {
        rafId = requestAnimationFrame(frame);
        const dt = Math.min(0.05, (now - last) / 1000 || 0); last = now;
        if (!M) return;
        M.t += dt; M.fxT += dt; if (M.end) M.endT += dt;
        if (widget && widget.update) widget.update(dt);
        draw(now / 1000, dt);
    }

    /* ---------------- Open / close ---------------- */
    function openMissions(id) {
        click();
        if (typeof closeArena === 'function') closeArena();
        if (!ui) createUI();
        ui.root.hidden = false;
        ui.root.dir = lang() === 'ar' ? 'rtl' : 'ltr';
        document.body.classList.add('arena-open');
        resize();
        cancelAnimationFrame(rafId); last = performance.now(); rafId = requestAnimationFrame(frame);
        if (id && MISSIONS[id]) startMission(id); else showPicker();
    }
    function closeMissions() {
        if (!ui) return;
        cancelAnimationFrame(rafId);
        M = null; widget = null; held.thrust = false;
        ui.root.hidden = true;
        document.body.classList.remove('arena-open');
    }
    window.openMissions = openMissions;
    window.closeMissions = closeMissions;
    window.missionButtonLabel = () => tr('flyThis');
})();
