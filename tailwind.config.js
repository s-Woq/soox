/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}",
    "./node_modules/astro/**/*.js" // Include Astro components
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F2B46', // Using your existing color
        secondary: '#1E40AF',
      },
      fontFamily: {
        sans: ['Rubik', 'sans-serif'], // From your project
        lexend: ['Lexend', 'sans-serif'], // From your project
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // For rich content formatting
    // Other plugins you might want:
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/aspect-ratio'),
  ],
}