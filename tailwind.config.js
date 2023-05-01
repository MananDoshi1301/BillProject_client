/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "black": {
          1000: "#000000",
        },
        "blue": {
          1000: "#14213d",
        },
        "yellow": {
          1000: "#fca311",
        },
        "grey": {
          1000: "#e5e5e5",
        },
        "white": "#ffffff",
      },
    },
    // extend: {},
  },
  plugins: [],
}

