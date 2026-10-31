/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        stallion: {
          dark: '#050B14',
          navy: '#0A1628',
          card: '#0D1D35',
          border: '#1E3A66',
          royal: '#0047AB',
          'royal-deep': '#002D72',
          'royal-vibrant': '#1D63FF',
          'royal-light': '#60A5FA',
          blue: '#0047AB',
          gold: '#3B82F6',
          'gold-light': '#93C5FD',
          'gold-dark': '#1D4ED8',
          champagne: '#FFFFFF',
          silver: '#E2E8F0',
          muted: '#8FA3BF',
          emerald: '#2563EB',
        }
      },
      fontFamily: {
        serif: ['"Cinzel"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
        'gold-shimmer': 'linear-gradient(135deg, #D4AF37 0%, #FFF2B2 50%, #B38F24 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}

