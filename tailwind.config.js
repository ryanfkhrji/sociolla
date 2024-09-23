/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "node_modules/preline/dist/*.js"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      fontFamily: {
        Playfair: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [require("preline/plugin")],
};

