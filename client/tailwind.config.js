/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "md-custom": "990px", // Custom breakpoint for 990px
      },

      backgroundImage: {
        "custom-gradient":
          "linear-gradient(270deg, rgba(0, 0, 0, 0.05) 0%, #151825 103.32%)",
        "custom-border":
          "linear-gradient(141.07deg,rgba(213, 27, 16, 1),rgba(0, 51, 108, 1) 100%), linear-gradient(0deg, rgba(255, 0, 0, 0.2), rgba(255, 0, 0, 0.2))",
      },
      fontFamily: {
        mono: ["JetBrains Mono", "monospace"],
      },

      backgroundColor: {
        "custom-black": "#010713",
        "card-black": "#151825",
      },
    },
  },
  plugins: [],
};
