import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#100f0d",
          900: "#181613",
          800: "#241f1a",
          700: "#3a332b",
          500: "#6b6257",
        },
        cream: {
          50: "#faf7f2",
          100: "#f3eee5",
          200: "#e7dfd0",
          400: "#c9bda6",
        },
        brass: {
          300: "#e3c98f",
          400: "#d4af5f",
          500: "#c39a3e",
          600: "#a97f2c",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: { wrap: "72rem" },
    },
  },
  plugins: [],
};
export default config;
