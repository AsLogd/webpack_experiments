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
	}
}