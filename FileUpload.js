var state = require('@nichoth/state');
var observ = require('observ');
var oArray = require('observ-array');
var toArray = require('lodash.toarray');

module.exports = FileUpload;

function FileUpload(opts) {
  opts = opts || {};
  opts.onChange = opts.onChange || function(){};

  var s = state({
    label: observ(opts.label || ''),
    files: oArray([]),
    handles: {
      onChange: onChange
    }
  });

  function onChange(files) {
    s.files.set( toArray(files) );
    opts.onChange(files);
  }

  return s;
}

FileUpload.render = function(h, state) {
  return h('div.vdom-file-upload', [
    h('label.vdom-file-upload-label', [state.label]),
    h('input', {
      type: 'file',
      onchange: function(ev) {
        state.handles.onChange(this.files);
      }
    }, [])
  ]);
};
