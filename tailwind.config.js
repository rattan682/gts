/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": '#414398',
        "inputs": '#EDE9E9',
        "secondary": '#0B142F',
        "texts": '#C2C2C2'
      },
    },
  },
  plugins: [],
};
