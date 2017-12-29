// https://github.com/shelljs/shelljs
require('shelljs/global');
var path = require('path');
var ora = require('ora');
var webpack = require('webpack');
var webpackConf = require('./webpack.prod.conf');

console.log(
	'  Tip:\n' +
	'  Built files are meant to be served over an HTTP server.\n' +
	'  Opening index.html over file:// won\'t work.\n'
);

var spinner = ora('building for production...');
spinner.start();

var assetsPath = path.join('/', 'static');
rm('-rf', assetsPath);
mkdir('-p', assetsPath);
cp('-R', 'static/', assetsPath);

webpack(webpackConf, function (err, stats) {
	spinner.stop()
	if (err) throw err
	process.stdout.write(stats.toString({
			colors: true,
			modules: false,
			children: false,
			chunks: false,
			chunkModules: false
		}) + '\n')
});