/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#0a0a0a',
        surface: '#141414',
        'surface-light': '#1a1a1a',
        cream: '#f0ece2',
        'cream-dark': '#c8c2b4',
        muted: '#8a8578',
        gold: '#c9a96e',
        'gold-light': '#d4b87a',
        'gold-dark': '#a88b55',
        line: '#1e1e1e',
      },
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'fade-in': 'fade-in 0.6s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(201, 169, 110, 0.1)' },
          '50%': { boxShadow: '0 0 30px rgba(201, 169, 110, 0.25)' },
        },
        'fade-in': {
          from: { opacity: 0, transform: 'translateY(20px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
