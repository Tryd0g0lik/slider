module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./src/*.{html,js,jsx,ts,tsx}",
    "./src/styles/*.{css,scss}",
    "./src/stylesscss/*.{css,scss}"
  ],
 
  theme: {
    extend: {},

  },
  plugins: [
    require('@tailwindcss/typography'),

    require("daisyui"),
  ],
  // daisyui: {
  //   "styled": true,
  //   "themes": true,
  //   "base": true,
  //   "utils": true,
  //   "logs": true,
  //   "rtl": false,
  // },

}
/* require('daisyui') */
