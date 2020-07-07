const path = require('path')

module.exports = {
	entry: {
		one: "./src/index.js",
		two: "./src/index2.js",
	},
	output: {
		path: path.resolve(__dirname, 'custom_dist'),
		filename: "[name].bundle.js"
	}

}