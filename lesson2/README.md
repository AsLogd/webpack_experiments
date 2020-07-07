LESSON 2
========
https://wanago.io/2018/07/16/webpack-4-course-part-two-webpack-4-course-part-two-loaders/

Webpack understands javascript for default, but you can import other file types by using loaders. Aside from loading the files, loaders may modify files to transform them. (e.g. minify, transpile)

Module
------

The module parameter in the webpack config, determines how the different types of modules of the project will be treated.

Specifically, we can set the parameter `rules` to specify a set of rules. Rules may use the requested module path or the path of the requester. If the condition of the rule matches, the loader or parser applies to that file.

Importing `.css` files. In this case we use two loaders: `css-loader` interprets the css file, `style-loader` reads the `css-loader` output and produces a js file that embeds the style in the DOM:
```js
module.exports = {
	module: {
		rules: [
			{
				// For any file that we are importing that ends in '.css'
				test: /\.css$/,
				// Use this loader to load the file
				use: ['style-loader', 'css-loader']
			}
		]
	}
}
```

Instead of the `style-loader` we could have used `to-string-loader` to load the css as a string:
```js

// webpack.config.js
...
	use: ['to-string-loader', 'css-loader']
...

//index.js
const style = require("./style.css") // <- this contains a string

```

Usually, these loaders can be configured to change the way they process the files. For example, by default, `css-loader` finds the `url(...)` instructions in the css and replaces them with `require(...)`, so webpack is able to load those files. We could add the option `url: false` in the `css-loader`, which would disable this behaviour and leave the `url(...)` instructions untouched.


Examples
--------

Execute script `build` to build all examples.

* **1-Loading**: Loads a css file using `css-loader` to parse the file and `style-loader` to inject it to the DOM.
* **2-Configuring**: Sets the `limit` parameter on the `url-loader` to change the way images are loaded based on their size. By url or embedding a base64.