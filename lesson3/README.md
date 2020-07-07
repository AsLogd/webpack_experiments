LESSON 3
========
https://wanago.io/2018/07/23/webpack-4-course-part-three-working-with-plugins/

Plugins are scripts that run in the build process that can do anything. While loaders only process the files that are requested, plugins may do anything, like copying html files (which are not requested by any other module).

Plugins
-------




Examples
--------

Execute script `build` to build all examples.

* **1-html**: Loads the html file as a template using the plugin, adding the script tag of the generated bundle
* **2-css**: A plugin works with a loader to detect the requested style files, extract them, and include them in the index html file