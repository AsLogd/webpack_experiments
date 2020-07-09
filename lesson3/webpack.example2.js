const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const path = require('path')

module.exports = {
	mode: "development",
	entry: "./src/example2/index.js",
	output: {
		path: path.resolve(__dirname, 'dist/example2'),
		filename: "main.js"
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader'
				]
			}
		]
	},
	plugins: [
        new HtmlWebpackPlugin({template: './src/example2/index.html'}),
        new MiniCssExtractPlugin()
    ]
}