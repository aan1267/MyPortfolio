export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        agustina: ['Great Vibes', 'sans-serif'], 
      },
      screens: {
        'xs': '320px',
      },
      keyframes: {
        neon: {
          '0%': {
            boxShadow: '0 0 5px #ff00ff, 0 0 10px #ff00ff, 0 0 15px #ff00ff',
            borderColor: '#ff00ff',
          },
          '50%': {
            boxShadow: '0 0 20px #00ffff, 0 0 30px #00ffff, 0 0 40px #00ffff',
            borderColor: '#00ffff',
          },
          '100%': {
            boxShadow: '0 0 5px #ff00ff, 0 0 10px #ff00ff, 0 0 15px #ff00ff',
            borderColor: '#ff00ff',
          },
        },
      },
      animation: {
        neon: 'neon 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],

}

