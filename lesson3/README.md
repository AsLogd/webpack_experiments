LESSON 3
========
https://wanago.io/2018/07/23/webpack-4-course-part-three-working-with-plugins/

Plugins are scripts that run in the build process that can do anything. While loaders only process the files that are requested, plugins may do anything, like copying html files (which are not requested by any other module).

Plugins
-------

To use a plugin, we only have to create it with the desired configuration and pass it to the `plugins` property of the webpack config. One important thing to note is that plugins always have to be initialized with `new`, given that you may want to initialize more than one of the same type with different parameters.

In this case I'm adding a plugin to automatically populate the html with the generated bundles. I can initialize the plugin with a template containing existing html code:
```js
const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require('path')

module.exports = {
    ...
	plugins: [
        new HtmlWebpackPlugin({template: './src/example1/index.html'})
    ]
}
```


Examples
--------

Execute script `build` to build all examples.

* **1-html**: Loads the html file as a template using the plugin, adding the script tag of the generated bundle
* **2-css**: A css plugin works with a loader to detect the requested style files, extract them, and the html plugin includes them in the index html file