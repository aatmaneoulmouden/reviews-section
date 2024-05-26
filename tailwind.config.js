/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '4rem',
      }
    },
    colors: {
      'extra-white': '#ffffff',
      'white': '#f9f7f3',
      'black': '#051923',
      'primary': '#0fa3b1',
      'hover': '#0c828e',
    },
    fontFamily: {
      'poppins': ['Poppins' ,'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

