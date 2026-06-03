/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.html"],
  theme: {
    extend: {
      colors: {
        "brand-primary": "#4e4034",
        "brand-secondary": "#cbb9a4",
        "brand-bg": "#faf8f2",
        "brand-title": "#fb8028",
      },
    },
  },
  plugins: [],
};
