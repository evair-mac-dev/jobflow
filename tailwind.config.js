/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'flow-text': 'var(--main-degrade)',
      },
    },
  },
  plugins: [],
};
