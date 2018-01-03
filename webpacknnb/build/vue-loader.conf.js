'use strict';
const utils = require('./utils');
const config = require('../config');
const isProduction = process.env.NODE_ENV;
let sourceMapEnabled = null;

if (isProduction === 'dev') {
  sourceMapEnabled = config.dev.cssSourceMap;
} else if (isProduction === 'stg') {
  sourceMapEnabled = config.stg.cssSourceMap;
} else if (isProduction === 'production') {
  sourceMapEnabled = config.build.productionSourceMap;
}

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: sourceMapEnabled,
    extract: isProduction,
  }),
  cssSourceMap: sourceMapEnabled,
  cacheBusting: config.dev.cacheBusting,
  transformToRequire: {
    video: 'src',
    source: 'src',
    img: 'src',
    image: 'xlink:href',
  },
  autoprefixer: {
    browsers: ['last 7 versions'],
    cascade: true, // 不美化输出 css
  },
};
