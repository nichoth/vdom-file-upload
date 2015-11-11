# vdom file upload

File upload UI component for virtual dom rendering engine.

[demo](https://8e481e51d65c8cbb88f6fc630831d2e083d3e05c.htmlb.in)


## install

    $ npm install vdom-file-upload


## example

```js
var vdom = require('virtual-dom');
var FileUpload = require('vdom-file-upload');

// return `observ-struct` instance
var state = FileUpload({
  label: 'example',
  onChange: function(files) {
    console.log('change', files);
  }
});

var loop = require('main-loop')(
  state(),
  // pass in a hyperscript function
  FileUpload.render.bind(null, vdom.h),
  vdom
);
state(loop.update);
document.getElementById('content').appendChild(loop.target);
```
