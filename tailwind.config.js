/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    data: {
      checked: 'ui~="checked"',
    },
    extend: {
      colors: {
        'sky-600': '#0284c7',
        'sky-500': '#0ea5e9',
        'sky-700': '#0369a1',
      },
    },
  },
  plugins: [],
}