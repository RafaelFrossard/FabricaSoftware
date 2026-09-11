/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        brand: {
          orange: "#E87D0E",
          "orange-dark": "#DC7000",
          dark: "#1B1B1B",
          ink: "#222222",
          muted: "#525252",
        },
      },
    },
  },
  plugins: [],
};
