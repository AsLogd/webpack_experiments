const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const path = require('path')

const p_in = "./src/example3/"
const p_out = "dist/example3/"


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
			// This groups may generate more splitting
			// Each module can pertain to multiple cache groups
			// Depending on the priority, the module will end in one chunks or the other
			cacheGroups: {
				defaultVendors: {
					test: /[\\/]node_modules[\\/]/,
					priority: -10,
					//idHint:"vendors"
				},
				default: {
					minChunks: 2,
					priority: -20,
					// If a chunk is already splitted, use it
					reuseExistingChunk: true,
					//idHint: "common"
				}
			}
			/* DEFAULT VALUES
			chunks: 'async',
			// Select chunks bigger than 30kb (less wouldnt split)
			minSize: 30000,
			// Set this to avoid 0 size chunks
			minRemainingSize: 0,
			// Try to split chunks bigger than this
			maxSize: 0,
			// Number of chunks that must share a module to be split
			minChunks: 1,
			// Max parallel requests when on-demand loading
			maxAsyncRequests: 6,
			// Max parallel requests on entry point
			maxInitialRequests: 4,
			// Name delimiter for generatec chunks
			automaticNameDelimiter: '~',
			// This groups may generate more splitting
			// Each module can pertain to multiple cache groups
			// Depending on the priority, the module will end in one chunks or the other
			cacheGroups: {
				defaultVendors: {
					test: /[\\/]node_modules[\\/]/,
					priority: -10
				},
				default: {
					minChunks: 2,
					priority: -20,
					// If a chunk is already splitted, use it
					reuseExistingChunk: true
				}
			}
			*/
		}
    }
}