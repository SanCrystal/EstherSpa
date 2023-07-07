/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      primary: "#783B10",
      // primary: "#553D36",
      primaryDark:"#C59B76",
      primaryLight: "#A0783F",
      secondary: "#6E6153",
      secondaryLight: "#EEE0C8",
      ...colors
    },
    extend: {
      fontFamily:{
        "pacifico":["Pacifico","cursive"]
      }
    },
  },
  plugins: [],
}
// 816C61
