/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"]
      },
      colors: {
        primary: "#333333",
        secondary: "#666666",
        ochre: "#B88E2F",
        flow: "#faf3e7"
      }
    },
  },
  plugins: [],
}

