class Game {
    constructor($canvas) {
    this.canvas = $canvas;
    this.context = $canvas.getContext("2d");
    this.height = $canvas.height;
    this.width = $canvas.width;
    this.player = new Player(200,450);
    this.background = new Background(200, 50);
    this.controls = new Controls(this);
    this.soju = new Soju(this);
    this.bottleTimer = 0;
    //this.score = new Score(this);
    this.newSoju = [];
    this.beer = new Beer(this);
    this.newBeer = [];
    //this.newSoup = [];
    this.speed= 3000
    this.controls.keys(); 
    }
    drawEverything(timestamp) {
    //console.log(timestamp)
      this.context.clearRect(0, 0, 400, 600);
      this.player.draw();
      this.background.drawBackground();
      this.soju.updateBottle();
      this.soju.drawBottle();
      this.beer.updateBottle();
      this.beer.drawBottle();

    window.requestAnimationFrame(timestamp => this.drawEverything(timestamp));
    
  for (let i = 0; i < this.newSoju.length; i++) {
      this.newSoju[i].drawBottle();
     }
     for (let i = 0; i < this.newBeer.length; i++) {
        this.newBeer[i].drawBottle();
       }
      this.update(timestamp);
    }
    update(timestamp) {
    if (this.bottleTimer < timestamp - this.speed) {
      this.newSoju.push(new Soju (this));
      this.newBeer.push(new Beer(this));
      this.bottleTimer  = timestamp;
    }
    for (let i = 0; i < this.newSoju.length; i++) {
     this.newSoju[i].updateBottle();
     this.newBeer[i].updateBottle();
    }
  }
   startGame(){
    this.drawEverything()
    
   }
}

