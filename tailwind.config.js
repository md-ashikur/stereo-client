/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gotham: ['var(--font-gotham)', 'sans-serif'],
      },
      fontWeight: {
        light: '300',
        normal: '400',
        bold: '800',
        black: '900',
      },
      colors: {
        primary: {
          DEFAULT: "#5800B0",
          100: "#f9d5d5",
        },
        secondary: {
          DEFAULT: "#FFF6EA",
          100: "#f9d5d5",
          500: "#bf7e6e",
         
        },
        third: {
          DEFAULT: "#1F2937",
         
        },

        // neutral: {
        //   DEFAULT: "#1F2937", 
        // },
        white: {
          DEFAULT: "#FFFFFF", 
        },

     
      },
    },
  },
  plugins: [],
};
