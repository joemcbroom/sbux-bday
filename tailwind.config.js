/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        "sbux-green": "#00754A",
        "sbux-green-dark": "#1e3932",
        "sbux-green-light": "#d4e9e2",
        "sbux-gold": "#c89543",
        "sbux-coral": "#D3705A",
      },
      height: {
        screen: "100svh",
      },
      fontFamily: {
        "great-vibes": ["Great Vibes", "cursive"],
        "mali": ["Mali", "sans-serif"],
        "righteous": ["Righteous", "cursive"],
      },
    },
  },
  plugins: [],
}