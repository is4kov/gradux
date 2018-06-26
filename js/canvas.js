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
      node.style = `background: linear-gradient(${gradient['from-color']}, ${gradient['to-color']});`;
    }
  };

  return {
    create: create,
    draw: draw
  };
}());