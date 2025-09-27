import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        amBlue: "#53B6DA",
        amOrange: "#F58120",
        amPink: "#EF3E8A",
        amPurple: "#5B3AAE",
        amSky: "#7ED8F5",
        amWhite: "#FFFFFF" // alias para blanco
      },
      boxShadow: {
        soft: "0 8px 24px rgba(0,0,0,0.08)"
      }
    }
  },
  plugins: []
};

export default config;
