const webpack = require("webpack");
const path = require('path');


module.exports = {
	entry: [
		"./src/js/index.js"
	],
	output: {
		path: path.resolve(__dirname, "public"),
		filename: "./js/bundle.js",
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader:
					"babel-loader",
					options: {
						presets: ["react", "es2015", "stage-0"]
					}
				}
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
			}
		]
	},
	watch: true,

	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		}),
		new webpack.optimize.UglifyJsPlugin({
			beautify: false,
			mangle: {
				//screw_ie8: true,
				keep_fnames: true
			}
		})
	]
}