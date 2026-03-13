/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#1565C0",
        primaryLight: "#1E88E5",
        light: "#90CAF9",
        darkBlue: "#0D1B2A",
        darkBg: "#111827",
        darkCard: "#1F2937",
        darkBorder: "#374151",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};