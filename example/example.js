var vdom = require('virtual-dom');
var FileUpload = require('../FileUpload.js');

var state = FileUpload({

});

var loop = require('main-loop')( state(), FileUpload.render, vdom );
state(loop.update);
document.getElementById('content').appendChild(loop.target);
