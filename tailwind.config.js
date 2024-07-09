/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: "Montserrat",
      blenda: "Blenda"
    },
    extend: {
      colors: {
        primary: "#491D21"
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

