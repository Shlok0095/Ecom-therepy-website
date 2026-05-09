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
        void: '#07080c',
        ink: '#0c0e14',
        pearl: '#e8eaed',
        mist: '#94a3b8',
        accent: {
          DEFAULT: '#94a3b8',
          muted: '#cbd5e1',
          dim: 'rgba(148, 163, 184, 0.45)',
        },
        black: {
          DEFAULT: '#07080c',
          surface: '#0c0f16',
          card: '#121722',
          border: '#252c3a',
        },
        white: {
          pure: '#e8eaed',
          muted: '#94a3b8',
          DEFAULT: '#e8eaed',
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'fluid-hero': 'clamp(3.35rem, 9vw, 7.25rem)',
        'fluid-h2': 'clamp(2.15rem, 4.8vw, 4rem)',
        'fluid-h3': 'clamp(1.55rem, 3.2vw, 2.75rem)',
        'fluid-display': 'clamp(4rem, 12vw, 9rem)',
      },
      boxShadow: {
        glow: '0 0 72px -24px rgba(148, 163, 184, 0.22)',
        lift: '0 24px 80px -40px rgba(0, 0, 0, 0.88)',
      },
      backgroundImage: {
        'mesh-hero':
          'radial-gradient(ellipse 100% 80% at 88% 8%, rgba(255, 255, 255, 0.06), transparent 55%), radial-gradient(ellipse 65% 55% at 0% 100%, rgba(100, 116, 139, 0.09), transparent 52%)',
        'grain-noise':
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.055'/%3E%3C/svg%3E\")",
      },
      animation: {
        'blink-cursor': 'blink 1s step-end infinite',
        'float-up': 'floatUp 7s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
        breathe: 'breathe 14s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        floatUp: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        breathe: {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.03)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
