class Game {
  constructor($canvas) {
    this.canvas = $canvas;
    this.context = $canvas.getContext("2d");
    this.height = $canvas.height;
    this.width = $canvas.width;
    this.player = new Player(200, 450);
    this.background = new Background(200, 50);
    this.controls = new Controls(this);
    this.fallingElements = new FallingElements(this);
    this.bottleTimer = 0;
    this.score = new Score(this);
    this.newSoju = [];
    this.newBeer = [];
    this.newSoup = [];
    this.speed = 3000;
    this.controls.keys();
  }
  drawEverything(timestamp) {
    this.context.clearRect(0, 0, 400, 600);
    this.player.draw();
    this.background.drawBackground();

    window.requestAnimationFrame(timestamp => this.drawEverything(timestamp));

    for (let i = 0; i < this.newSoju.length; i++) {
      this.newSoju[i].drawSoju();
    }
    for (let i = 0; i < this.newBeer.length; i++) {
      this.newBeer[i].drawBeer();
    }
    for (let i = 0; i < this.newSoup.length; i++) {
      this.newSoup[i].drawSoup();
    }
    this.update(timestamp);
  }
  update(timestamp) {
    if (this.bottleTimer < timestamp - this.speed) {
      this.newSoju.push(new Soju(this));
      this.newBeer.push(new Beer(this));
      this.newSoup.push(new Soup(this));
      this.bottleTimer = timestamp;
    }
    for (let i = 0; i < this.newSoju.length; i++) {
      this.newSoju[i].updateBottle();
      if (this.fallingElements.detectCollision(this.player, this.newSoju[i])) {
        this.newSoju.splice(i, 1);
        this.score.SojuPoints();
        console.log(this.score.score);
      }
    }
    for (let i = 0; i < this.newBeer.length; i++) {
      this.newBeer[i].updateBottle();
      if (this.fallingElements.detectCollision(this.player, this.newBeer[i])) {
        this.newBeer.splice(i, 1);
        this.score.BeerPoints();
        console.log(this.score.score);
      }
    }
    for (let i = 0; i < this.newSoup.length; i++) {
      this.newSoup[i].updateBottle();
      if (this.fallingElements.detectCollision(this.player, this.newSoup[i])) {
        this.newSoup.splice(i, 1);
        this.score.SoupPoints();
        console.log(this.score.score);
      }
    }
  }
  startGame() {
    this.drawEverything();
  }
}
