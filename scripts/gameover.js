class Gameover {
  constructor(game) {
    this.game = game;
    this.context = game.context;
    this.imageGameover = new Image();
    this.imageGameover.src = "images/printer.png";
    this.interval = this.game.timer.interval;
  }

  drawGameover() {
    soundHangover.play();
    document.getElementById("game-section-container").style.display = "none";
    document.getElementById("gameover-message").style.display = "flex";
    document.getElementById("score").style.display = "flex";
   
  }
}
