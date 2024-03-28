/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        'Stick': ['Stick No Bills', 'sans-serif'],
        'DodleShadow': ['Rubik Doodle Shadow', 'cursive'],
        'RubikGlitch': ['Rubik Glitch', 'cursive'],
        'Orbitron': ['Orbitron', 'sans-serif'],
        'Major': ['Major Mono Display', 'monospace'],
        'Russo': ['Russo One', 'sans-serif'],
    },
  },
  plugins: [],
}
}

