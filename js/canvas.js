var App = App || {};
App.Canvas = (function(){
  var node;

  var create = function(el){
    if (typeof el !== 'string' || !el.length)
      return;

    node = document.querySelector(el);
  };

  var draw = function(gradient){
    if (gradient){
      node.style = gradient.toString();
    }
  };

  return {
    create: create,
    draw: draw
  };
}());