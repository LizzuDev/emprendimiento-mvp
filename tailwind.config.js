/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta Oficial Orienta PUCE
        puce: {
          principal: '#003b81',
          background: '#ffffff',
          secundario: '#06b2b3',
          titulos: '#333333',
          subtitulos: '#333333',
          textos: '#666666',
          botones: '#1aa9df',
          btnSinResaltar: '#1aa9df',
          btnResaltado: '#ffffff',
          // Modo Oscuro armónico
          darkBg: '#06101E',
          darkCard: '#0C1B33',
          darkBorder: '#162C52',
          darkText: '#E6EEF8',
          darkMuted: '#94A7C2',
        },
        // Light & inviting beachy coastal aqua & teal palette (legacy/support)
        bluey: {
          50: '#F0FAFA',
          100: '#E0F7F5',
          200: '#B2EBF2',
          300: '#80DEEA',
          400: '#4DD0E1',
          500: '#00ACC1',
          600: '#00897B',
          700: '#00695C',
          800: '#1F4E5B',
          900: '#0F3440',
          950: '#061B24',
        },
        cream: {
          50: '#FFFDF9',
          100: '#FDF6E2',
          200: '#F7E7C4',
          300: '#EAD5A0',
          400: '#D6BA7A',
        },
        seashell: {
          50: '#FFF5F7',
          100: '#FFF0F3',
          200: '#FFE4E8',
          300: '#F8B4C4',
          400: '#E88C9E',
          500: '#D45B73',
        },
        otter: {
          light: '#E2C4A8',
          main: '#653B22',
          dark: '#4A2511',
          shadow: '#261105',
        },
        // Unified Dark Mode Palette
        midnight: {
          950: '#06101E',
          900: '#0C1B33',
          800: '#162C52',
          700: '#1F3C6D',
          text: '#E8F1F8',
          muted: '#A9C2D8',
        },
        dorado: '#d4af37',
        doradoLight: '#f5e8c7',
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
        institutional: ['Rubik', 'sans-serif'],
        headline: ['Rubik', 'sans-serif'],
        display: ['Rubik', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
        sans: ['Open Sans', 'sans-serif'],
      },
      keyframes: {
        bookPageLeft: {
          '0%': { transform: 'perspective(1500px) rotateY(90deg)', opacity: '0' },
          '100%': { transform: 'perspective(1500px) rotateY(0deg)', opacity: '1' },
        },
        bookPageRight: {
          '0%': { transform: 'perspective(1500px) rotateY(-90deg)', opacity: '0' },
          '100%': { transform: 'perspective(1500px) rotateY(0deg)', opacity: '1' },
        },
      },
      animation: {
        'book-page-left': 'bookPageLeft 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
        'book-page-right': 'bookPageRight 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
      }
    },
  },
  plugins: [],
}
