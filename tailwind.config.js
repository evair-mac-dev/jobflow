/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-blue': 'var(--dark-blue)',
        sand: 'var(--sand)',
        'sand-soft': 'var(--sand-soft)',
        'sand-soft-alt': 'var(--sand-soft-alt)',
        'dark-blue-soft': 'var(--dark-blue-soft-alt)',
        'blue-skyblue-soft': 'var(--blue-skyblue-soft)',
      },
      backgroundImage: {
        'flow-text': 'var(--main-degrade)',
        'ocean-linear': 'var(--ocean-linear)',
        'ocean-linear-soft': 'var(--ocean-linear-soft)',
        'ocean-radial-soft': 'var(--ocean-radial-soft)',
      },
    },
  },
  plugins: [],
};
