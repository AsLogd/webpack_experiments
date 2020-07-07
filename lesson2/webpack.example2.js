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
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.jpg$/,
				use: [{
					loader: "url-loader",
					options:{
						limit: 5000
					}
				}],
			}
		]
	}
}