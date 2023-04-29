/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gh-bg-dark": "#010409",
        "gh-bg": "#0d1117",
        "gh-bg-secondary": "#161b22",

        "gh-border": "#363B42",
        "gh-border-active": "#8B949E",
        "gh-border-red": "#6B2A2B",

        "gh-text": "#e6edf3",
        "gh-text-secondary": "#7d8590",

        "gh-blue": "#2f81f7",
        "gh-blue-active": "#58a6ff",
        "gh-green": "#238636",
        "gh-green-active": "#2EA043",
        "gh-red": "#DA3633",
        "gh-red-active": "#F85149",
        "gh-gray": "#21262D",
        "gh-gray-active": "#30363D",

        "gh-orange": "#f78166",
        "gh-mustard": "#d29922",
        "gh-yellow": "#e3b341",
        "gh-lime": "#3fb950",
        "gh-lime-active": "#56ff6e",
      },
      fontFamily: {
        segoe: ["Segoe UI", "Tahoma", "Geneva", "Verdana", "sans-serif"],
        dejavu: ["DejaVu Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
