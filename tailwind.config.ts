import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
    './lib/**/*.{ts,tsx,js,jsx}',
    './src/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: '#0C0C0C',
          surface: '#111111',
          card: '#161616',
          border: '#1F1F1F',
        },
        white: {
          pure: '#F5F5F0',
          muted: '#A0A09A',
          DEFAULT: '#F5F5F0',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      fontSize: {
        'fluid-hero': 'clamp(3rem, 7vw, 6rem)',
        'fluid-h2': 'clamp(2rem, 4vw, 3.5rem)',
        'fluid-h3': 'clamp(1.5rem, 3vw, 2.5rem)',
      },
      animation: {
        'blink-cursor': 'blink 1s step-end infinite',
        'float-up': 'floatUp 6s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        floatUp: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
