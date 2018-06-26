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

  var getOptions = function(){
    var res = {};
    panel.querySelectorAll('input.is-color').forEach(function(input){
      res[input.getAttribute('data-elem')] = input.value;
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