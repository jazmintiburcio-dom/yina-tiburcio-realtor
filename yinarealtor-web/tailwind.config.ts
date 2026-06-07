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
        sol: '#F5D13A',
        'sol-dark': '#C9A820',
        'sol-pale': '#FFFBE8',
        'sol-mid': '#F9DC5E',
        ceiba: '#4A5E2A',
        'ceiba-dark': '#3A4E1A',
        'ceiba-mid': '#6A8040',
        'ceiba-light': '#A8BF78',
        'ceiba-frost': '#F2F6EC',
        canela: '#C4844A',
        'canela-light': '#E8B888',
        arena: '#E8DCC4',
        lino: '#F5EDD8',
        crema: '#FBF6EC',
        'off-white': '#FAFAF7',
        tierra: '#2A1F0E',
        cacao: '#5A4A2A',
        gris: '#8A7A6A',
        'gris-light': '#D4CEC4',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
