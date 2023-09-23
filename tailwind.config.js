/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/**/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue_unam: "#10223a",
        yellow_unam: "#eea149"
      }
    },
  },
  plugins: [],
};
