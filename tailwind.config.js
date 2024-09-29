/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F8F7F3',
        primary: '#323232',
        secondary: '#6B7280',
        accent: '#FFB552',
        container: '#EEEEEE'
      }
    },
  },
  plugins: [],
}

