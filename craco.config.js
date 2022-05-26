/*
 * Copyright (c) 2021. Datafood srl
 * Developed by Revo Digital - revodigital.it
 * ---
 * Author: leonardoviada
 * File: craco.config.js
 * Project: mle-client
 * Committed last: 2021/10/14 @ 1517
 * ---
 */

// craco.config.js
module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
};
