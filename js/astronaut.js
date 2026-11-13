/* ----------------------------------------------------
   THE FLOATING ASTRONAUT
   A spacewalker drifts slowly around the page background, tumbling a
   little, and waves every so often. It also waves when the pointer
   comes close. Drawn as an SVG, so there is no image to download.
---------------------------------------------------- */
(function () {
    'use strict';

    const SVG =
    '<svg viewBox="0 0 220 280" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
      '<defs>' +
        '<linearGradient id="as-suit" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="0.55" stop-color="#dfe3ea"/><stop offset="1" stop-color="#9aa3b2"/></linearGradient>' +
        '<linearGradient id="as-pack" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#eef0f4"/><stop offset="1" stop-color="#8b93a1"/></linearGradient>' +
        '<radialGradient id="as-visor" cx="0.35" cy="0.3" r="0.9"><stop offset="0" stop-color="#5b4a2a"/><stop offset="0.35" stop-color="#1c1710"/><stop offset="1" stop-color="#05060a"/></radialGradient>' +
        '<linearGradient id="as-glove" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f5f6f8"/><stop offset="1" stop-color="#a7afbc"/></linearGradient>' +
      '</defs>' +
      // life-support backpack
      '<rect x="62" y="22" width="96" height="112" rx="16" fill="url(#as-pack)" stroke="#6b7280" stroke-width="1.5"/>' +
      '<rect x="78" y="14" width="64" height="16" rx="6" fill="#d7dbe2" stroke="#6b7280" stroke-width="1.2"/>' +
      // legs, knees bent as if floating
      '<path d="M84 168 Q70 205 78 238 Q80 252 96 250 Q108 248 104 232 Q100 204 112 176 Z" fill="url(#as-suit)" stroke="#6b7280" stroke-width="1.5"/>' +
      '<path d="M112 172 Q124 206 136 232 Q142 250 158 244 Q170 238 162 222 Q146 196 140 166 Z" fill="url(#as-suit)" stroke="#6b7280" stroke-width="1.5"/>' +
      '<path d="M76 236 Q72 256 92 258 Q108 258 106 240 Z" fill="#c9ced8" stroke="#6b7280" stroke-width="1.4"/>' +
      '<path d="M136 234 Q146 258 164 250 Q176 242 164 224 Z" fill="#c9ced8" stroke="#6b7280" stroke-width="1.4"/>' +
      // the arm that stays still (viewer left), reaching outward
      '<g>' +
        '<path d="M76 92 Q46 104 34 138 Q30 152 42 156 Q54 158 58 146 Q66 124 88 112 Z" fill="url(#as-suit)" stroke="#6b7280" stroke-width="1.5"/>' +
        '<ellipse cx="38" cy="160" rx="13" ry="15" fill="url(#as-glove)" stroke="#6b7280" stroke-width="1.4"/>' +
        '<path d="M26 150 Q14 152 16 164 Q22 170 30 164" fill="none" stroke="#9aa3b2" stroke-width="3" stroke-linecap="round"/>' +
      '</g>' +
      // torso
      '<path d="M74 84 Q110 70 146 84 Q158 128 148 176 Q110 190 72 176 Q62 128 74 84 Z" fill="url(#as-suit)" stroke="#6b7280" stroke-width="1.5"/>' +
      // chest control box, with switches and a hose
      '<rect x="88" y="112" width="44" height="34" rx="5" fill="#eef0f4" stroke="#6b7280" stroke-width="1.4"/>' +
      '<rect x="94" y="118" width="14" height="8" rx="2" fill="#1f2937"/><circle cx="118" cy="122" r="4" fill="#ef4444"/><circle cx="127" cy="122" r="2.6" fill="#22c55e"/>' +
      '<rect x="94" y="132" width="32" height="5" rx="2" fill="#9aa3b2"/>' +
      '<path d="M132 140 Q146 152 138 168" fill="none" stroke="#9aa3b2" stroke-width="4" stroke-linecap="round"/>' +
      '<rect x="92" y="156" width="36" height="14" rx="3" fill="#cfd4dc" stroke="#6b7280" stroke-width="1.2"/>' +
      // shoulder patches
      '<circle cx="86" cy="96" r="7" fill="#1d4ed8" stroke="#e5e7eb" stroke-width="1.2"/>' +
      // the waving arm (viewer right): it turns around the shoulder
      '<g class="astro-arm">' +
        '<path d="M144 92 Q170 86 190 62 Q198 50 190 44 Q180 40 174 50 Q162 70 136 76 Z" fill="url(#as-suit)" stroke="#6b7280" stroke-width="1.5"/>' +
        '<rect x="146" y="80" width="14" height="9" fill="#ffffff" stroke="#9aa3b2" stroke-width="0.6" transform="rotate(-24 153 84)"/>' +
        '<rect x="146" y="80" width="6" height="5" fill="#1d4ed8" transform="rotate(-24 153 84)"/>' +
        '<path d="M152.5 85.5 l12 -5.3 M151.6 87.6 l12 -5.3" stroke="#dc2626" stroke-width="1.1"/>' +
        '<g class="astro-hand">' +
          '<ellipse cx="190" cy="40" rx="13" ry="15" fill="url(#as-glove)" stroke="#6b7280" stroke-width="1.4"/>' +
          '<path d="M182 30 L180 18 M188 27 L188 14 M194 28 L197 16 M200 32 L206 22" stroke="#e5e7eb" stroke-width="5.5" stroke-linecap="round"/>' +
          '<path d="M182 30 L180 18 M188 27 L188 14 M194 28 L197 16 M200 32 L206 22" stroke="#6b7280" stroke-width="0.8" stroke-linecap="round" fill="none"/>' +
        '</g>' +
      '</g>' +
      // helmet, gold visor and its reflection
      '<circle cx="110" cy="62" r="40" fill="url(#as-suit)" stroke="#6b7280" stroke-width="1.6"/>' +
      '<path d="M76 58 Q78 32 110 30 Q142 32 144 58 Q146 84 110 90 Q74 84 76 58 Z" fill="url(#as-visor)" stroke="#3f3a2e" stroke-width="2"/>' +
      '<path d="M86 48 Q94 36 112 36" fill="none" stroke="rgba(255,255,255,0.55)" stroke-width="4" stroke-linecap="round"/>' +
      '<circle cx="128" cy="70" r="5" fill="rgba(110,170,255,0.55)"/><circle cx="128" cy="70" r="2" fill="rgba(255,255,255,0.7)"/>' +
      '<rect x="66" y="52" width="10" height="20" rx="4" fill="#cfd4dc" stroke="#6b7280" stroke-width="1.2"/><rect x="144" y="52" width="10" height="20" rx="4" fill="#cfd4dc" stroke="#6b7280" stroke-width="1.2"/>' +
    '</svg>';

    function init() {
        const el = document.createElement('div');
        el.id = 'astronaut';
        el.className = 'astronaut';
        el.setAttribute('aria-hidden', 'true');
        el.innerHTML = SVG;
        const canvas = document.getElementById('bg-canvas');
        if (canvas && canvas.parentNode) canvas.parentNode.insertBefore(el, canvas.nextSibling); else document.body.appendChild(el);

        const still = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const size = () => Math.max(90, Math.min(190, window.innerWidth * 0.13));
        let w = size(), h = w * 280 / 220;
        const A = { x: window.innerWidth * 0.78, y: window.innerHeight * 0.3, vx: -10, vy: 6, rot: -12, vr: 3, tx: 0, ty: 0, retarget: 0,
                    waveLeft: 0, nextWave: 3, pointer: null, greeted: false };
        const pickTarget = () => {
            A.tx = w * 0.5 + Math.random() * Math.max(1, window.innerWidth - w);
            A.ty = h * 0.5 + Math.random() * Math.max(1, window.innerHeight - h);
            A.retarget = 7 + Math.random() * 7;
        };
        const wave = seconds => { A.waveLeft = seconds; el.classList.add('is-waving'); };
        pickTarget();

        window.addEventListener('resize', () => { w = size(); h = w * 280 / 220; });
        window.addEventListener('pointermove', e => { A.pointer = { x: e.clientX, y: e.clientY }; }, { passive: true });

        const place = () => {
            el.style.width = w + 'px';
            el.style.transform = 'translate(' + (A.x - w / 2).toFixed(1) + 'px,' + (A.y - h / 2).toFixed(1) + 'px) rotate(' + A.rot.toFixed(2) + 'deg)';
        };
        place();
        if (still) { wave(0); el.classList.remove('is-waving'); return; }   // no drifting for people who ask for less motion

        let last = performance.now();
        function frame(now) {
            requestAnimationFrame(frame);
            const dt = Math.min(0.05, (now - last) / 1000); last = now;
            if (document.hidden || document.body.classList.contains('arena-open')) return;   // nothing to see behind a game

            // Drift: a gentle pull toward a spot that changes every few seconds
            A.retarget -= dt;
            if (A.retarget <= 0) pickTarget();
            A.vx += (A.tx - A.x) * 0.014 * dt; A.vy += (A.ty - A.y) * 0.014 * dt;
            A.vx *= 1 - dt * 0.12; A.vy *= 1 - dt * 0.12;
            const sp = Math.hypot(A.vx, A.vy), max = 22;
            if (sp > max) { A.vx *= max / sp; A.vy *= max / sp; }
            A.x += A.vx * dt; A.y += A.vy * dt;
            // stay on screen
            if (A.x < w * 0.4) { A.x = w * 0.4; A.vx = Math.abs(A.vx); } else if (A.x > window.innerWidth - w * 0.4) { A.x = window.innerWidth - w * 0.4; A.vx = -Math.abs(A.vx); }
            if (A.y < h * 0.4) { A.y = h * 0.4; A.vy = Math.abs(A.vy); } else if (A.y > window.innerHeight - h * 0.4) { A.y = window.innerHeight - h * 0.4; A.vy = -Math.abs(A.vy); }
            // a slow tumble that never goes fully upside down
            A.vr += (Math.random() - 0.5) * 6 * dt - A.rot * 0.02 * dt;
            A.vr = Math.max(-5, Math.min(5, A.vr));
            A.rot += A.vr * dt;
            if (Math.abs(A.rot) > 38) { A.rot = Math.sign(A.rot) * 38; A.vr *= -0.5; }

            // Waving: every so often, and whenever the pointer comes close
            if (A.waveLeft > 0) { A.waveLeft -= dt; if (A.waveLeft <= 0) el.classList.remove('is-waving'); }
            else {
                A.nextWave -= dt;
                if (A.nextWave <= 0) { wave(2.6); A.nextWave = 7 + Math.random() * 6; }
            }
            if (A.pointer) {
                const near = Math.hypot(A.pointer.x - A.x, A.pointer.y - A.y) < w * 1.1;
                if (near && !A.greeted) { wave(2.6); A.greeted = true; A.nextWave = 8; }
                if (!near) A.greeted = false;
            }
            place();
        }
        requestAnimationFrame(frame);
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
