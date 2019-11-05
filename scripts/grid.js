class Grid {
  constructor(game) {
    this.game = game;
    this.canvas = $canvas;
    this.context = $canvas.getContext("2d");
  }
  PaintCanvas() {
    this.context.save();
    this.context.fillStyle = "white";
    this.context.globalAlpha = 0.5;
    this.context.fillRect(0, 0, 400, 500);
    this.context.restore();
  }
}
