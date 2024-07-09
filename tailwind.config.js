/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      blur: {
        '3xl': '60px', // You can adjust the blur size here
      },
    },
  },
  plugins: [],
}