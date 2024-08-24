/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: "Georgia, serif",
        title: "Courier Prime, ui-sans-serif",
        dancing: "'Sacramento', cursive",
      },
      textColor: {
        subtitle: "#0d1321",
        body: "#333333",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".first-letter-dancing::first-letter": {
          fontFamily: "'Sacramento', cursive",
          fontStyle: "italic",
        },
      });
    },
  ],
};
