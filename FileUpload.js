var h = require('virtual-dom/h');
var state = require('@nichoth/state');
var observ = require('observ');

module.exports = FileUpload;

function FileUpload(opts) {
  opts = opts || {};
  var s = state({
    handles: {
      onChange: onChange
    }
  });

  function onChange() {
    console.log(arguments);
    console.log(this);
    console.log(this.files);
  }

  return s;
}

FileUpload.render = function(state) {
  return h('div.vdom-file-upload', [
    h('input', {
      type: 'file',
      onchange: state.handles.onChange
    }, [])
  ]);
};
