/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      spacing: {
        13: "3,25rem",
      },
      fontFamily: {
        inter: ["Inter"],
      },
      colors: {
        riko: "#1fb6ff",
      },
      animation: {
        "spin-slow": "spin 6s linear infinite",
        goyang: "goyang 2s linear infinite",
      },
      keyframes: {
        goyang: {
          "0%, 100%": { transform: "rotate(-8deg)" },
          "50%": { transform: "rotate(8deg)" },
        },
      },
    },
  },
  plugins: [],
}

