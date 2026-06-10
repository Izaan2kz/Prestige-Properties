import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        'off-white': '#f2f2f2',
        'light-bg': '#ededee',
        'grey-100': '#e8e8e8',
        'grey-200': '#d4d4d4',
        'grey-300': '#c8c8c8',
        'grey-400': '#ababab',
        'grey-500': '#8e8e8e',
        'grey-700': '#5a5a5a',
        'grey-900': '#2a2a2a',
        gold: '#b8b7b5',
        'gold-light': '#d0cfce',
        'gold-dark': '#888787',
        'footer-bg': '#2c2c2e',
        'footer-border': '#3a3a3c',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-jost)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        'section': '1320px',
      },
      height: {
        'nav': '80px',
      },
      letterSpacing: {
        'widest2': '0.18em',
        'widest3': '0.22em',
        'widest4': '0.25em',
        'widest5': '0.3em',
        'widest6': '0.4em',
      },
    },
  },
  plugins: [],
}

export default config
