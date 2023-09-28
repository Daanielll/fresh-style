/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Merriweather: ["Merriweather", "serif"],
        Helvetica: ["Helvetica", "sans"],
      },
      backgroundImage: {
        "home-image": "url('/src/assets/bait_auto_x2.jpg')",
        "man-square": "url('/src/assets/man-square.png')",
        "woman-square": "url('/src/assets/woman-square.png')",
      },
      backgroundColor: {
        "black-40": "rgba(0, 0, 0, 0.4)",
      },
      boxShadow: {
        custom:
          "0 4px 15px -3px rgb(0 0 0 / 0.1), 0 1px 6px -4px rgb(0 0 0 / 0.1)",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
