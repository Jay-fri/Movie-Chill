/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        host:['Host Grotesk', 'sans-serif'],
        custom: ['']
      },
      animation: {
        scroll: "scroll 20s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translatey(0)" },
          "100%": { transform: "translatey(-100%)" },
        },
      },
    },
  },
  plugins: [],
}