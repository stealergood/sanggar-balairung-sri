/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      blenda: "Blenda"
    },
    extend: {
      colors: {
        primary: "#491D21"
      },
      backgroundImage: {
        "motif": "url('/src/assets/images/bg.png')",
        "motif2": "url('/src/assets/images/bg2.png')",
        "motif3": "url('/src/assets/images/bg3.png')",
        "motif4": "url('/src/assets/images/bg4.png')",
        "motif-android1": "url('/src/assets/images/bgandroid1.png')",
        "motif-android2": "url('/src/assets/images/bgandroid2.png')",
        "motif-android3": "url('/src/assets/images/bgandroid3.png')",
        "motif-android4": "url('/src/assets/images/bgandroid4.png')",
      },
      fontFamily: {
        "mon-regular": "Montserrat-Regular",
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

