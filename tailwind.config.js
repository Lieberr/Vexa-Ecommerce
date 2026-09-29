/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode: "class",

  theme: {
    extend: {
      colors: {
        background: "#FAFAF9",
        foreground: "#111111",
        card: "#FFFFFF",

        primary: "#111111",
        "primary-foreground": "#FFFFFF",

        secondary: "#F3F2EF",
        "secondary-foreground": "#111111",

        muted: "#F3F2EF",
        "muted-foreground": "#6B6560",

        accent: "#C9A87C",
        "accent-foreground": "#FFFFFF",

        border: "#E5E3DE",
        ring: "#C9A87C",
        surface: "#F7F6F3",
      },

      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Fraunces", "Georgia", "serif"],
      },
    },
  },

  plugins: [],
};