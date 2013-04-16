(function(global) {

  global.AnimatedGIF = AnimatedGIF;

  function AnimatedGIF(gif) {
    this.gif = gif;
    this.canvas = createCanvasFor(gif.src);
    this.display = gif.style.display;

    this.gif.addEventListener('click', this.pause.bind(this), false);
    this.canvas.addEventListener('click', this.play.bind(this), false);

    this.play();
    this.gif.parentNode.insertBefore(this.canvas, this.gif);
  }

  AnimatedGIF.prototype.play = function() {
    this.canvas.style.display = 'none';
    this.gif.style.display = this.display;
  };

  AnimatedGIF.prototype.pause = function() {
    this.gif.style.display = 'none';
    this.canvas.style.display = this.display;
  };

  function createCanvasFor(image) {
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');

    var slate = new Image();
    slate.onload = function() {
      canvas.width = this.width;
      canvas.height = this.height;
      ctx.drawImage(this, 0, 0);
    };
    slate.src = image;

    return canvas;
  }

}(this));