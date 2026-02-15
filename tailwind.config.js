/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0efff',
          200: '#bae3ff',
          300: '#7ed4ff',
          400: '#38c4ff',
          500: '#0ba5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#082f49',
          950: '#0c1e2e',
          dark: '#0f1f3c',
        },
        accent: {
          teal: '#4a9fb5',
          cyan: '#5eb3cc',
          navy: '#1a2a5e',
          cream: '#f5e6d3',
        },
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #1a2a5e 0%, #2a3a6e 50%, #4a9fb5 100%)',
        'gradient-teal': 'linear-gradient(135deg, #4a9fb5 0%, #5eb3cc 100%)',
      },
    },
  },
  plugins: [],
};
