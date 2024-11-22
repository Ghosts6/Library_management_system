module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "../js/*.html",
    "../django/app/Template/**/*.html",
    "../django/app/Static/js/**/*.js",   
  ], 
  darkMode: 'class',                 
  theme: {
    extend: {

      keyframes: {
        shine: {
          '0%': {
            backgroundPosition: 'left bottom',
          },
          '100%': {
            backgroundPosition: 'right bottom',
          },
        },
      },

      animation: {
        shine: 'shine 10s linear infinite',
        text: 'shine 5s linear infinite'
      },

      backgroundSize: {
        '300%': '300%',
      },

      colors: {
        gradient0: '#dde007',
        gradient20: '#00BCD4',
        gradient40: '#5dc1e9',
        gradient60: '#10a37f',
        gradient80: '#98FB98',
        gradient100: '#ffa500',
        translucentGray: 'rgba(245, 245, 245, 0.432)',
        whitesmoke: '#F5F5F5',
      },

      boxShadow: {
        'neon': '0 0 55px rgb(56, 233, 233), 0 0 75px rgb(56, 233, 233), 0 0 95px rgb(56, 233, 233), 0 0 160px rgb(56, 233, 233)',
        'neon-hover': '0 0 55px cyan, 0 0 75px cyan, 0 0 95px cyan, 0 0 160px cyan',
        'button-shadow-js': '0 0 15px #00a19d, 0 0 25px #00a19d,0 0 35px #00a19d, 0 0 60px #00a19d',
        'django-main-container': '0 0 20px rgb(16, 148, 148), 0 0 35px rgb(16, 148, 148), 0 0 50px rgb(16, 148, 148), 0 0 120px rgb(16, 148, 148)',
        'django-main-container-hover': '0 0 20px cyan, 0 0 35px cyan, 0 0 50px cyan, 0 0 120px cyan',
        'django-main-button': '0 0 15px cyan, 0 0 25px cyan, 0 0 40px cyan, 0 0 100px cyan',
      },

      textShadow: {
        'glow-orange': '0 0 15px #ffa500, 0 0 35px #ffa500, 0 0 45px #ffa500, 0 0 85px #ffa500',
        'django-404': '0 0 150px #00ff00',
        'django-main-h1': '0 0 10px cyan, 0 0 15px cyan , 0 0 0px cyan, 0 0 50px cyan',
      },

      borderWidth: {
        '1px': '1px',
      },

      backgroundImage: {
        gradient: `linear-gradient(
          to right,
          #dde007 0%,
          #00BCD4 20%,
          #5dc1e9 40%,
          #10a37f 60%,
          #98FB98 80%,
          #ffa500 100%
        )`,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-textshadow'),
  ],
}