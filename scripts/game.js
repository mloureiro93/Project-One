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
    this.newElements = [];
    this.speed = 1000;
    this.controls.keys();
    
  }
  drawEverything(timestamp) {
    this.context.clearRect(0, 0, 400, 600);
    this.player.draw();
    this.background.drawBackground();

    window.requestAnimationFrame(timestamp => this.drawEverything(timestamp));

    for (let i = 0; i < this.newElements.length; i++) {
      if (this.newElements[i].name === "soju") {
        this.newElements[i].drawSoju();
      }
      if (this.newElements[i].name === "beer") {
        this.newElements[i].drawBeer();
      }
      if (this.newElements[i].name === "soup") {
        this.newElements[i].drawSoup();
      }
    }
    this.update(timestamp);
  }
  update(timestamp) {
    this.score.LevelUpdate();
    if (this.bottleTimer < timestamp - this.speed) {
      let randomNumber = Math.floor(Math.random() * 3 + 1);
      if (randomNumber === 1) {
        this.newElements.push(new Soup(this));
      } else if (randomNumber === 2) {
        this.newElements.push(new Soju(this));
      } else if (randomNumber === 3) {
        this.newElements.push(new Beer(this));
      }
      this.bottleTimer = timestamp;
    }
    for (let i = 0; i < this.newElements.length; i++) {
      this.newElements[i].updateBottle();
      if (
        this.newElements[i].name === "soju" &&
        this.fallingElements.detectCollision(this.player, this.newElements[i])
      ) {
        this.newElements.splice(i, 1);
        this.score.SojuPoints();
        console.log(this.score.score);
        break;
      }
      if (
        this.newElements[i].name === "beer" &&
        this.fallingElements.detectCollision(this.player, this.newElements[i])
      ) {
        this.newElements.splice(i, 1);
        this.score.BeerPoints();
        console.log(this.score.score);
        break;
        
      }
      if (
        this.newElements[i].name === "soup" &&
        this.fallingElements.detectCollision(this.player, this.newElements[i]))
         {
        this.newElements.splice(i, 1);
        this.score.SoupPoints();
        console.log(this.score.score);
      }
     
    }
  }
  startGame() {
    this.drawEverything();
    this.score.ResetScore();
  }
}
