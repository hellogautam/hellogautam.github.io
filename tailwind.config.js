/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          'primary-light': '#3B82F6',
          'primary-dark': '#60A5FA',
        }
      }
    },
    plugins: [
      require('@tailwindcss/typography'),
    ],
  }