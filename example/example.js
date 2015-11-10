var vdom = require('virtual-dom');
var FileUpload = require('../FileUpload.js');

var state = FileUpload({

});

var loop = require('main-loop')(
  state(),
  // pass in a hyperscript function
  FileUpload.render.bind(null, vdom.h), vdom
);
state(loop.update);
document.getElementById('content').appendChild(loop.target);
