/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "gh-bg": "#0D1117",
        "gh-bg-secondary": "#161B22",
        "gh-button": "#21262D",
        "gh-button-active": "#30363D",
        "gh-text": "#BED1D9",
        "gh-text-secondary": "#8B949E",
        "gh-button-border": "#363B42",
        "gh-button-border-active": "#8B949E",
        "gh-yellow": "#E3B341",
        "gh-blue": "#58A6FF",
        "gh-blue-dark": "#1F6FEB",
        "gh-red": "#f56140",
        "gh-red-active": "#F78166",
        "gh-green": "#238636",
        "gh-green-active": "#2EA043",
        "gh-green-dark": "#1d5927",
        "gh-border": "#30363D",
        "gh-border-dark": "#21262D",
        white: "#fff",
        black: "#000",
      },
      boxShadow: {
        "3xl": "0 0 14px 0 rgba(0, 0, 0, 0.6)",
      },
      fontFamily: {
        dejavu: ["DejaVu Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
