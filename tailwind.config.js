/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Merriweather: ["Merriweather", "serif"],
        Lobster: ["Lobster", "cursive"],
        Abril: ["Abril Fatface", "cursive"],
        Helvetica: ["Helvetica", "sans"],
      },
      backgroundImage: {
        "home-image": "url('/src/assets/bait_auto_x2.jpg')",
        "man-square": "url('/src/assets/man-square.png')",
        "man-long": "url('/src/assets/man-long.png')",
        "home-sm": "url('/src/assets/home-sm.png')",
        "home-lg": "url('/src/assets/home-lg.png')",

        "woman-square": "url('/src/assets/woman-square.png')",
        "woman-long": "url('/src/assets/woman-long.png')",
      },
      backgroundColor: {
        "black-40": "rgba(0, 0, 0, 0.4)",
      },
      animation: {
        wiggle: "bounce 0.5s ease 1",
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
