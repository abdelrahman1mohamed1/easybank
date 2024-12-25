/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html"],


  theme: {
    screens: {
      ss: "200px",
      sm: "340px",
      md: "540px",
      lg: "786px",
      xl: "1180px",
    },
    fontFamily: {
      "public": ["Public Sans", "serif"],
      "font-style": "normal",
      "font-weight": "100 900",
      "font-display": "swap",
    },
    extend: {
      backgroundImage: {
        "desktop": "url('/images/bg-intro-desktop.svg')",
        "mobile": "url('/images/bg-intro-mobile.svg')",
      },

      colors: {
        "DarkBlue": "#2d314d",
        "LimeGreen*": "#31d35c",
        "BrightCyan*": "#2bb7da",
         "GrayishBlue": "hsl(233, 8%, 62%)",
         "LightGrayishBlue":" hsl(220, 16%, 96%)",
         "VeryLightGray": "hsl(0, 0%, 98%)",
         "White": "hsl(0, 0%, 100%)",
      }
    },
  },
  plugins: [],
}

