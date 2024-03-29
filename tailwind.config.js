module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      colors: {
        // Nuevos colores de la paleta con nombres descriptivos
        darkBlue: '#134371', // Color oscuro azul de la paleta
        brightBlue: '#0159E8', // Color azul brillante de la paleta
        lightCyan: '#00C8F8', // Color cian de la paleta
        vibrantYellow: '#FFCA1F', // Color amarillo de la paleta
        // Colores existentes se mantienen sin cambios
        primary: '#ffffff',
        secondary: '#ffffff',
        tertiary: '#ffffff',
        border: '#ffffff',
        background: '#134471',
        accent: '#ffffff',
      },
      animation: {
        vote: 'vote 1s ease-in-out',
      },
      transitionProperty: {
        'smooth-fade': 'opacity',
      },
      transitionDuration: {
        500: '500ms',
      },
      transitionTimingFunction: {
        'in-out': 'ease-in-out',
      },
      opacity: {
        75: '0.75',
      },
      keyframes: {
        vote: {
          '0%, 100%': {
            transform: 'rotate(0deg)',
          },
          '25%': {
            transform: 'rotate(-30deg)',
          },
          '75%': {
            transform: 'rotate(30deg)',
          },
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
