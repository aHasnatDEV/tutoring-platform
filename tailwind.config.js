/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#2672E7",
        "primary-hover": "#1859BE",
        "custom-green": "#14A050" 
      },
    },
  },
  plugins: [],
}
