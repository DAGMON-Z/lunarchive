tailwind.config = {
    theme: {
        extend: {
            colors: {
                spaceBg: '#080a15',
                spaceCard: 'rgba(17, 24, 39, 0.75)',
                neonCyan: '#00f2fe',
                neonPurple: '#7f00ff',
                marsRed: '#ff4b2b',
                moonSilver: '#e0e6ed',
                starGold: '#ffd700'
            },
            fontFamily: {
                orbitron: ['Orbitron', 'sans-serif'],
                sans: ['Inter', 'sans-serif']
            },
            keyframes: {
                // Scan band that sweeps the hover photo viewer while a photo is loading
                scan: {
                    '0%': { transform: 'translateY(-100%)' },
                    '100%': { transform: 'translateY(100%)' }
                }
            },
            animation: {
                scan: 'scan 1.6s linear infinite'
            }
        }
    }
}
