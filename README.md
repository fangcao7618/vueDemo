# vue 脚手架 (https://github.com/vuejs/vue-cli)

  ## 1、先安装  `sudo npm install -g vue-cli`
  ## 2、`vue init <template-name> <project-name>`
  
  ## 可以放4中模式

  ````template-name：````
* webpack -- A full-featured Webpack + vue-loader setup with hot reload, linting, testing & css extraction.
* webpack-simple --  A simple Webpack + vue-loader setup for quick prototyping.
* browserify --  A full-featured Browserify + vueify setup with hot-reload, linting & unit testing.
* browserify-simple -- A simple Browserify + vueify setup for quick prototyping.
* pwa -- PWA template for vue-cli based on the webpack template
* simple -- The simplest possible Vue setup in a single HTML file

* Custom Templates `vue init username/repo my-project`
* Local Templates `vue init ~/fs/path/to-custom-template my-project`
* Installing a specific template version 
    * `vue init '<template-name>#<branch-name>' <project-name>`
    ### Example: `vue init 'webpack-simple#1.0' mynewproject`
