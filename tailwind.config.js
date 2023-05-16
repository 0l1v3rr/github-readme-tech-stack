/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
        "gh-green-disabled-border": "#20702F",
        "gh-green-disabled": "#1A5C27",
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
      boxShadow: {
        popup: "0 2px 10px rgba(0,0,0,.5)",
        card: "1px 3px 10px rgba(0,0,0,.25)",
      },
    },
  },
  plugins: [],
};
