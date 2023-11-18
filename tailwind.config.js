/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'ecotech': "url('./src/assets/ecotech.jpeg')",
        'ecotech': "url('./src/assets/forgeline.jpeg')",
        'ecotech': "url('./src/assets/skillup.jpg')",
        'ecotech': "url('./src/assets/logisync.jpg')",
        'voguevibe': "url('./src/assets/voguevibe.jpeg')",
      }
    },
  },
  plugins: [],
}