var App = App || {};
App.Canvas = (function(){
  var canvas,
    result;

  var create = function(el){
    if (typeof el !== 'string' || !el.length)
      return;

    canvas = document.querySelector(el);
    result = document.getElementById('result');
  };

  var draw = function(gradient){
    if (gradient){
      gradientCss = gradient.toString()
      canvas.style = gradientCss;
      result.textContent = gradientCss;
    }
  };

  return {
    create: create,
    draw: draw
  };
}());