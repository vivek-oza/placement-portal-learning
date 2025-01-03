/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        themeLightBlue: '#daf6ff',
        themeDarkBlue: '#002351'
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        zilla: ['Zilla Slab', 'serif'],
      }
    },
  },
  plugins: [],
}

