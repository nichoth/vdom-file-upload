# vdom file upload

File upload state machine for virtual dom renderer.


## install

    $ npm install vdom-file-upload


## example

```js
var vdom = require('virtual-dom');
var h = vdom.h;
var FileUpload = require('vdom-file-upload');

var state = FileUpload({

});

var loop = require('main-loop')(
  state(),
  // pass in a hyperscript function
  FileUpload.render.bind(null, vdom.h), vdom
);
state(loop.update);
document.getElementById('content').appendChild(loop.target);
```
