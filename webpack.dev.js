const webpack = require("webpack");
const path = require('path');

module.exports = {
	entry: [
		'react-hot-loader/patch', //for es2015' class 
		"./src/js/index.js",
	],

	output: {
		path: path.resolve(__dirname, 'public'),
		filename: "./js/bundle.js",
	},
	devtool: 'eval',
	devServer: {
		port: 3001,
		hot: true,
		contentBase: path.resolve(__dirname, 'public'),
		publicPath: '/',
		historyApiFallback: {
			index: 'index.html'
		}
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,				
				use: [
					{
						loader:
						"babel-loader",
						options: {
							presets: [["es2015", { "modules": false, "loose": true }],"stage-0", "react"],
							plugins: ['react-hot-loader/babel']
						}
					}
				],
				include: path.join(__dirname, 'src'),
			},
			{
				test: /\.(scss||sass)$/,
				use: [
					"style-loader",
					{
						loader: "css-loader", options: {
							url: false,
							// modules: true,
							// localIdentName: '[name]'
						}
					},

					{
						loader: "postcss-loader", options: {
							plugins: function () {
								return [
									require('precss'),
									require('autoprefixer')
								];
							}
						}
					},
					"sass-loader",
				]	
			},
		],
		
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
}