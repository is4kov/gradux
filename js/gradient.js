function Gradient(args){
  this.functionType = args.type || 'linear-gradient';
  this.line = args.direction || 'to left';
  this.colorStops = args['color-stop'];

  this.position = 'at center';
  this.shape = 'circle';

  this.toString = function(){
    if (this.functionType === 'linear-gradient'){
      return `background: ${this.functionType}(${this.line}, ${this.colorStops.join(',')});`;
    }

    if (this.functionType === 'radial-gradient') {
      return `background: ${this.functionType}(${this.shape} ${this.position}, ${this.colorStops.join(',')});`;
    }
  }
}
