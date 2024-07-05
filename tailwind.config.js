/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "heading": ["Montserrat"],
        "text": ["Montserrat"]
      },
      width: {
        "1/2-screen": "50vw"
      }
    },
  },
  plugins: [],
};
