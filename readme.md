# vdom file upload

File upload widget for virtual-dom


## install

    $ npm install vdom-file-upload


## example
    
```js
var vdom = require('virtual-dom');
var h = vdom.h;
var FileUpload = require('vdom-file-upload');

var state = FileUpload({

});

var loop = require('main-loop')( state(), FileUpload.render, vdom );
state(loop.update);
document.getElementById('content').appendChild(loop.target);
```
