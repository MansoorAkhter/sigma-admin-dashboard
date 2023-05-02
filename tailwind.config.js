/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#696CFF",
        secondary: "#fff",
        light: "#fff",
        darkmodeBG: "#2B2C40",
        darkmodeHeading: "#C4C4D4",
        darkmodeText: "#9495A7",
        lightPurple: "#E7E7FF",
        darkGray: "#4D5F71",
        iconGray: "#84919D",
        medGray: "#85929E",
        semiGray: "#97A2AC",
        lightGray: "#A8B1BA",
        orange: "#FFAB00",
        lightOrange: "#FFF2D6",
        green: "#71DD37",
        lightGreen: "#E8FADF"

      },
    },
  },
  plugins: [],
}

