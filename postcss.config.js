// export default {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// };

module.exports = {
  plugins: [
    require("postcss-import"), // Handles @import rules in your CSS
    require("tailwindcss"), // Integrates Tailwind CSS
    require("autoprefixer"), // Adds vendor prefixes for cross-browser compatibility
  ],
};
