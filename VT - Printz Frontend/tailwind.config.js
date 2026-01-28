/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        'xs': '560px',
        'xxs': '490px',
        'xxxs': '430px',
        'ssm': '640px',
        'mmd': '850px',
        'llg': '1100px',
      },
      backgroundImage: {
        'vinto-gradient': 'linear-gradient(135deg, #02192F, #031F3A)',
        'HeroImgSmall1': 'url(./Assets/HQ_back1.png)',
        'HeroImgSmall2': 'url(./Assets/HQ_back2.png)',
        'HeroImgSmall3': 'url(./Assets/HQ_back3.png)',
        'HeroImgSmall4': 'url(./Assets/HQ_back4.png)',
      },
      boxShadow: {
        'shadow5px': '0 0 5px',
        'shadow10px': '0 0 10px',
        'shadow20px': '0 0 20px'
      },
      keyframes: {
        scaleBounce: {
          // '0%': { transform: 'scale(0.8)', opacity: '0.8' },
          '60%': { transform: 'scale(1.05)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        spin360: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        scaleBounce: 'scaleBounce 1.5s ease-in-out infinite',
        spin360: 'spin360 30s linear infinite',
      },
    },
  },
  plugins: [],
}
