let path=require('path');
let xxx=require('html-webpack-plugin');
let proxy = require('http-proxy-middleware');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
// 简单
module.exports={
    entry:'./src/index.js',
    output:{
        path:path.resolve('./Ks'),
        filename:'Ks.js'
    },
    module:{
        rules:[
            {test:/\.jsx?$/,use:'babel-loader',exclude:/node_modules/},
            {test:/\.css?$/,use:['style-loader','css-loader']},
            {
                test:/\.(jpg|png|gif|bmp|ttf|woff|woff2|eot|svg|jpeg)$/,
                use:'url-loader'
            },
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']}
        ]
    },
    plugins:[
        new xxx({
            template:'./index.html'
        }),
        new webpack.DefinePlugin({
            'KS':
                process.env.KS=="K" ? JSON.stringify('K') : JSON.stringify('S8')
        })
    ],
    devtool:'cheap-module-source-map',   // 报错好找
    devServer: {
        host: 'localhost',
        port: '8080',
        proxy: [
            {
                context: '/a',
                target: 'http://localhost:6719',
                secure: false
            }
        ]
    }
}