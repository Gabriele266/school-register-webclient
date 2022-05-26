/*
 * Copyright (c) 2022. Revo Digital
 * ---
 * Author: gabriele
 * File: babel.config.js
 * Project: mle-client-n
 * Committed last: 2022/5/5 @ 1252
 * ---
 * Description:
 */

module.exports = {
  presets: [
    [ '@babel/preset-env', { targets: { node: 'current' } } ],
    '@babel/preset-typescript',
  ],
};