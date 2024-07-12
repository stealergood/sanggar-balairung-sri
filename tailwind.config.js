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
        "motif3": "url('/src/assets/images/bg3.png')"
      },
      fontFamily: {
        "mon-medium": "Montserrat-Medium",
        "mon-bold": "Montserrat-Bold",
        "mon-semiBold": "Montserrat-SemiBold",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
});

