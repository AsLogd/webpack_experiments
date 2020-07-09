const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const path = require('path')

const p_in = "./src/example2/"
const p_out = "dist/example2/"


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
    ],
    optimization: {
		splitChunks: {
			// All kind of chunks will be selected to optimization
			chunks: 'all',
			/* DEFAULT VALUES
			chunks: 'async',
			minSize: 30000,
			minRemainingSize: 0,
			maxSize: 0,
			minChunks: 1,
			maxAsyncRequests: 6,
			maxInitialRequests: 4,
			automaticNameDelimiter: '~',
			cacheGroups: {
				defaultVendors: {
					test: /[\\/]node_modules[\\/]/,
					priority: -10
				},
				default: {
					minChunks: 2,
					priority: -20,
					reuseExistingChunk: true
				}
			}
			*/
		}
    }
}