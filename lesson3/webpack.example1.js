const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require('path')

module.exports = {
	mode: "development",
	entry: "./src/example1/index.js",
	output: {
		path: path.resolve(__dirname, 'dist/example1'),
		filename: "main.js"
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	plugins: [
        new HtmlWebpackPlugin({template: './src/example1/index.html'})
    ]
}