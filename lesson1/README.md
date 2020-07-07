LESSON 1
========
https://wanago.io/2018/07/16/webpack-4-course-part-one-entry-output-and-es6-modules/

Webpack has a default configuration. It will read `src/index.js` as the entry point and output the result in `dist/main.js` minified and optimized for production. (See [Webpack Configuration](https://webpack.js.org/configuration/)).

To create a custom configuration file, you can name it `webpack.config.js` or specify it via the `--config`  parameter (e.g: `webpack --config webpack.prod.js`).

Config
------

Webpack has a default configuration which we can override with the config file. This way we could change the name of the entry point:
```js
module.exports = {
	entry: "./src/custom.js"
}
```

Modifying the output:
```js
module.exports = {
	entry: "./src/custom.js",
	output: {
		path: path.resolve(__dirname, 'custom_dist'),
		filename: "custom.js"
	}
}
```

When using multiple entry points, we have some parameters available like `name`:
```js
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
```
