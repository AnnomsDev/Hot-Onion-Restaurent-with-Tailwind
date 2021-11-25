module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      color: {
        primary: '#f91944',
      },
      height: {
        banner: '37vw'
      },
      backgroundImage: {
        "banner-img": "url('/src/img/bannerbackground.png')"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
