LESSON 4
========
https://wanago.io/2018/06/04/code-splitting-with-splitchunksplugin-in-webpack-4/

Code splitting allows to split the resulting bundles in multiple chunks. This can have some benefits:
-reducing the first load by loading a smaller chunk
-better use of caching. Only modified parts of the application will need to be downloaded again. Third-party code will always stay the same and always be cached.
-download different chunks in parallel

Code-splitting
--------------

Three ways of code splitting:
* We can use the `entry` configuration property to manually create different chunks. We can also use the `dependOn` parameter to establish relationships between the entry chunks.
* `SplitChunksPlugin` checks the common imports in the current chunks and extracts the common ones.
* Dynamic imports. This allows to split the code viainline funcion calls inside modules

By default, webpack already optimizes `async` chunks, but usually we may want to optimize all kind of chunks. This way we can configure the `SplitChunksPlugin`:
```js
module.exports = {
	...
    optimization: {
		splitChunks: {
			// All kind of chunks will be selected to optimization
			chunks: 'all',
		}
    }
}
```


Examples
--------

Execute script `build` to build all examples.

* **1-entry**: Uses two entries to split the code in two bundles. The html plugin is used two times to handle two html templates. Note that each of two bundles import the module "c", duplicating the js and the css.
* **2-optimization**: Use the SplitChunksPlugin's `chunks: 'all'` to only generate one "c" bundle. Note that if "c" is small, it may not be split (by default, but can be configured). The generated bundle is called `a~b`