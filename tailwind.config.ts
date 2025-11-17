import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
