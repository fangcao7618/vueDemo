'use strict'
require('./check-versions')()

const env=process.env.NODE_ENV
const ora = require('ora')
const rm = require('rimraf')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('../config')
const envPan=function(env){
  let webpackconfs=null,
      msg='building for dev...',
      assetsRoot=null,
      assetsSubDirectory=null;
  if(env==='dev'){
    webpackconfs=require('./webpack.dev.conf')
    msg='building for dev...';
    assetsRoot=config.dev.assetsRoot;
    assetsSubDirectory=config.dev.assetsSubDirectory;
  }else if(env==='stg'){
    webpackconfs=require('./webpack.stg.conf')
    msg='building for stg...';
    assetsRoot=config.stg.assetsRoot;
    assetsSubDirectory=config.stg.assetsSubDirectory;
  }else if(env==='production'){
    webpackconfs=require('./webpack.prod.conf')
    msg='building for production...';
    assetsRoot=config.build.assetsRoot;
    assetsSubDirectory=config.build.assetsSubDirectory;
  }
  return {
    webpackconfs:webpackconfs,
    msg:msg,
    assetsRoot:assetsRoot,
    assetsSubDirectory:assetsSubDirectory
  }
};
const environment=envPan(env);
const webpackConfig = environment.webpackconfs;

const spinner = ora(environment.msg)
spinner.start()

rm(path.join(environment.assetsRoot, environment.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})
