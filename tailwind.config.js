const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,jsx}', './src/components/**/*.{js,jsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Maven Pro, Montserrat', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        '3xl': '1.775rem',
      },
      keyFrames: {
        swap: {
          '0%': {
            opacity: '0',
          },
          '5%': {
            opacity: '0',
            transform: 'translateY(5px)',
          },
          '10%': {
            opacity: '1',
            transform: 'translateY(0px)',
          },
          '25%': {
            opacity: '1',
            transform: 'translateY(0px)',
          },
          '30%': {
            opacity: '0',
            transform: 'translateY(5px)',
          },
          '80%': {
            opacity: '0',
          },
          '100%': {
            opacity: '0',
          },
        },
      },
      animation: {
        swap: 'swap 6s linear infinite 0s',
      },
      transitionDelay: {
        2000: '2000ms',
        4000: '4000ms',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const animateUtilities = {
        '.animate-text': {
          lineHeight: 'inherit',
          display: 'block',
          overflow: 'hidden',
          color: '#ffc200',
        },
        '.animate-text:nth-child(2n+2)': {
          animationDelay: '2s',
        },
        '.animate-text:nth-child(3n+3)': {
          animationDelay: '4s',
        },
      };
      addUtilities(animateUtilities);
    }),
  ],
};
