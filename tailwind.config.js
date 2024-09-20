/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/**/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        iagen_magenta: "#A6374B",
        iagen_magentahover: "#7D2A39",
        iagen_darkgray: "#4C5259",
        iagen_blue: "#132B40",
        iagen_bluehover: "#0a1722",
        iagen_cyan: "#1C98A6",
        iagen_cyanhover: "#24a8b7",
        iagen_lightgray: "#F2F2F2",
        iagen_lightgrayhover: "#D7D7D7",
        blue_unam: "#10223a",
        yellow_unam: "#eea149",
        orange_unam: "#db7a4b"
      }
    },
  },
  plugins: [],
};
