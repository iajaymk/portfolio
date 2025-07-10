/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // App Router paths
  ],
  theme: {
    extend: {
      colors: {
        light: "#fff",
        city: "#3c0350",
        forest: "#37af5d",
        ocean: "#0779ff",
        sunset: "#ede6d3"
      },
    },
  },
  darkMode: false, // optional: disable default dark mode
  plugins: [],
};
