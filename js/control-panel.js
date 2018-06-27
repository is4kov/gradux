var App = App || {};
App.ControlPanel = (function(){
  var panel,
    callbacks = [];

  var create = function(el){
    if (typeof el !== 'string' || !el.length)
      return;

    panel = document.querySelector(el);
    panel.addEventListener('change', handleChange)
  };

  var handleChange = function(){
    runCallbacks();
  };

  var runCallbacks = function(){
    if (callbacks.length){
      callbacks.forEach(function(fn){
        fn(getOptions());
      });
    }
  };

  function hexToRGB(hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
  }

  var getOptions = function(){
    var res = {
      'color-stop': []
    };
    panel.querySelectorAll('input[data-key]').forEach(function(input){
      var key = input.getAttribute('data-key');
      switch (key) {
        case 'color-stop' :
          res[key].push(hexToRGB(input.value, panel.querySelector(`input[data-for=${input.id}]`).value));
          break;
        case 'direction' :
          if (input.id === 'direction-custom' &&
            panel.querySelector(`input[data-for=${input.id}]`).checked &&
            !!parseInt(input.value)){
            res[key] = `${input.value}deg`;
          } else if (input.checked) {
            res[key] = input.value;
          }
          break;
        default :
          res[key] = input.value;
      }
    });

    return new Gradient(res);
  };

  return {
    create: create,
    addOnChangeListener: function(fn){
      callbacks.push(fn);
      runCallbacks();
    }
  };
}());