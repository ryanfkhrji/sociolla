/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    fontFamily: {
      Playfair: ["Playfair Display", "serif"],
    },
    extend: {},
  },
  plugins: [],
};

