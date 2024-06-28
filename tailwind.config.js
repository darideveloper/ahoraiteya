/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      "white": '#ffffff',
      "white-50": '#ffffff80',
      "purple": '#3a3170',
      "orange": '#f27438',
      "orange-light": '#f7b9a2',
      "blue": '#0099b4',
      "grey": '#e6e6e6',
      "grey-light": '#f5f5f5',
      "transparent": "transparent",
      "black": "#000",
    },
    screens: {
      'xs': "320px",
      'sm': "640px",
      'md': "768px",
      'lg': "1024px",
      'xl': "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
