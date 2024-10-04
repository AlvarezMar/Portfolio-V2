import flowbite from 'flowbite-react/tailwind'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content()
  ],
  theme: {
    extend: {
      colors: {
        background: '#F8F7F3',
        primary: '#323232',
        secondary: '#6B7280',
        accent: '#FFB552',
        container: '#EEEEEE',
        tag: '#E8DEFD',
        tagText: '#8A5CF5',

        background_dark: '#1C1C1E',
        primary_dark: '#E1E1E6',
        container_dark: '#2A2A2A',
        tag_dark: '#2D2342',
        hr_dark: "#3A3A3A"
      }
    },
  },
  plugins: [
    flowbite.plugin()
  ],
}

