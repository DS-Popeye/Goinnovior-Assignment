/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        clifford: "#da373d", // Custom color
      },
      fontFamily: {
        manrope: ['"Manrope"', 'sans-serif'], // Custom font family
      },
      backgroundImage: {
        'header-bg': "linear-gradient(0deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%)", // Custom background gradient
        "discuss": "url('./assets/images/bg.jpg')", // Background image URL
      },
    },
    screens: {
      'sm': '375px',   // Default for small (mobile)
      'md': '834px',   // Default for medium
      'lg': '1440px',  // Default for large
    },
  },
  daisyui: {
    themes: ["light", "dark", "cupcake"], // DaisyUI themes
  },
  plugins: [],
}