/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        themeLightBlue: '#CCE4FF',
        themeAccentBlue: '#93C5Fd',
        themeDarkBlue: '#002351'
      },
      fontFamily: {
        sans: ['Work sans', 'sans-serif'],
        dmsans: ['DM Sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        zilla: ['Zilla Slab', 'serif'],
      }
    },
  },
  plugins: [],
}

