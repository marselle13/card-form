/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "light-grayish": "hsl(270, 3%, 87%)",
        "dark-grayish ": "hsl(279, 6%, 55%)",
        "dark-violet": "hsl(278, 68%, 11%)",
        "gradient-1": "hsl(249, 99%, 64%)",
        "gradient-2": "hsl(278, 94%, 30%)",
      },
      backgroundImage: {
        "main-mob": "url('../images/bg-main-mobile.png')",
      },
      screens: {
        "3xl": "1440px",
      },
    },
  },
  plugins: [],
};
