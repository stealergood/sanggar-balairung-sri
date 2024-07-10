/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
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
      backgroundImage: {
        "motif": "url('/src/assets/images/bg.png')",
        "motif2": "url('/src/assets/images/bg2.png')",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
});

