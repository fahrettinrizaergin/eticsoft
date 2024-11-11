/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#de9c27",
        secondary: "#f3c811",
      },
    },
  },
  plugins: [],
};
