/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins"],
      nanami: ["nanami"],
      "Gothic-A1": ["Gothic A1", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
