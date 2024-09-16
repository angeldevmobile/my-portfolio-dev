/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0f0f0f',
        purple: '#7e22ce',
        white: '#ffffff',
      },
      animation: {
        'fade-out-in-letter': 'fadeOutInLetterByLetter 4s infinite',
      },
      keyframes: {
        fadeOutInLetterByLetter: {
          '0%': { opacity: '1' },
          '50%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
