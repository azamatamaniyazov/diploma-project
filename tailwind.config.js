/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 0px 10px -1px #CCCCCC",
        sitebar: "10px 0px 15px -7px #C4C4C4",
      },
      flexGrow: {
        2: "2",
      },
      keyframes: {
        fadeIn: {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
      },
      animation: {
        fade: "fadeIn .5s ease-in-out",
      },
    },
  },
  plugins: [],
};
