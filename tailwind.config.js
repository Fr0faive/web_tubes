/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors : {
        'cusbiru' : '#715be3',
        'cobiru' : '#6960FA',
        'cobirumu' : '#A6A1F2', 
      },
      backgroundImage: {
        'gradient-radial' : 'radial-gradient(var(--tw-gradient-stops))',
      },
      spacing : {
        '164px' : '164px',
        '50px' : '50px',
        '53px' : '53px',
        '520px' : '520px',
        '76px' : '76px',
        '70px' : '70px',
        '115px' : '115px',
        '251px' : '251px',
        '288px' : '288px',
        '513px' : '513px',
        '545px' : '545px',
        '57px' : '57px',
        '76px' : '76px',
        '105px' : '105px',
        '115px' : '115px',
      },
      borderRadius : {
        '4xl' : '30px',
        '5xl' : '300px',
      },
      fontSize : {
        '4.5xl' : ['24px','26.38px'],
        '4.7xl' : ['40px','43.96px']
      },
      fontFamily : {
        'Sintony' : ['Sintony', 'sans-serif'],
      },
      animation : {
        'floating' : 'floating 3s ease-in-out infinite'
      },
      keyframes : {
        floating : {
          '0%' : {transform: 'translate(0,  0px)'},
          '50%' : {transform: 'translate(0, 15px)'},
          '100%' : {transform: 'translate(0, -0px)'},
        }
      }
    },
  },
  plugins: [require("daisyui")],
}
