const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const path = require('path')

const p_in = "./src/example1/"
const p_out = "dist/example1/"


module.exports = {
	mode: "development",
	entry: {
		a: p_in+"entry-a.js",
		b: p_in+"entry-b.js",
	},
	output: {
		filename: "[name].[chunkhash].bundle.js",
		path: path.resolve(__dirname, p_out),
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
		new HtmlWebpackPlugin({
			chunks: ["a"],
			template: p_in+'index-a.html',
			filename: "a.html"
		}),
		new HtmlWebpackPlugin({
			chunks: ["b"],
			template: p_in+'index-b.html',
			filename: "b.html"
		}),
		new MiniCssExtractPlugin()
    ]
}