/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#0a0a1f',
        'secondary-bg': '#13132b',
        'accent-purple': '#6B4FD4',
        'accent-pink': '#E84393',
        'accent-cyan': '#00D9FF',
        'text-primary': '#ffffff',
        'text-secondary': '#b8b8d8',
        'text-muted': '#7a7a9e',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        spacegrotesk: ['Space Grotesk', 'sans-serif'],
      }
    },
  },
  plugins: [],
}