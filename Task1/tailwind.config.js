/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#ea1d2d",
        secondary: "#001a30",
        gray: "#a8a9ac"
      },
      fontFamily: {
        'futura': ['"Futura PT"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

