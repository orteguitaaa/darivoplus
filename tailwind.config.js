/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        pastelBackground: '#FDF6F0',
        derivativesButton: '#B8E4C9',
        limitsButton: '#BAC9EB',
        integralsButton: '#F5C7C1',
      },
      boxShadow: {
        pastel: '0 18px 40px rgba(15, 23, 42, 0.08)',
        'pastel-sm': '0 4px 10px rgba(15, 23, 42, 0.06)',
      },
      borderRadius: {
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
};

