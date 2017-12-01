var path = require('path');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry: {
        'Index': './app/index.js'
    },
    output: {
        path: path.join(__dirname, 'devBuild'),
        publicPath: '/',
        filename: "[name]/[name].[hash:5].js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [path.resolve(__dirname, 'node_modules')],
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['vue', 'es2015'],
                        plugins: ['syntax-dynamic-import']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract(['css-loader', {
                    loader: 'postcss-loader',
                    options: {
                        plugins: (loader) => [
                            require('postcss-import')({root: loader.resourcePath}),
                            require('autoprefixer')(), //CSS浏览器兼容
                            require('cssnano')()  //压缩css
                        ]
                    }
                }, 'sass-loader'])
            },
            {
                test: /\.css$/, use: ExtractTextPlugin.extract(['css-loader', {
                loader: 'postcss-loader',
                options: {
                    plugins: (loader) => [
                        require('postcss-import')({root: loader.resourcePath}),
                        require('autoprefixer')(), //CSS浏览器兼容
                        require('cssnano')()  //压缩css
                    ]
                }
            }])
            },
            {test: /\.(png|jpg|gif)$/, use: ["url-loader?limit=8192&name=./img/[name].[ext]"]},
            {test: /\.svg/, use: ['svg-url-loader']}
        ]
    },
    resolve: {
        modules: ['node_modules', path.join(__dirname, '../node_modules')],
        extensions: ['.js', '.json', '.scss', 'css']
    },
    devtool: 'source-map',
    plugins: [
        new ExtractTextPlugin('[name]/[name].[hash:5].css'),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'app/index.html',
            chunks: ['Index']
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
                // 'NODE_ENV': JSON.stringify('production')
            }
        }),
        // new webpack.LoaderOptionsPlugin({
        //     debug: false,
        //     options: {
        //         postcss: [
        //             autoprefixer()
        //         ],
        //     },
        // }),
        new OpenBrowserPlugin({url: 'http://localhost:1234'})
    ]
};