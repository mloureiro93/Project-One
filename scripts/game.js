class Game {
  constructor($canvas,  $canvasScore) {
    this.canvas = $canvas;
    this.canvasScore =  $canvasScore;
    this.contextScore =  $canvasScore.getContext("2d");
    this.context = $canvas.getContext("2d");
    this.height = $canvas.height;
    this.width = $canvas.width;
    this.gameover = new Gameover(this);
    this.player = new Player(200, 450);
    this.background = new Background(200, 50);
    this.controls = new Controls(this);
    this.fallingElements = new FallingElements(this);
    this.sojuTimer = 0;
    this.beerTimer = 0;
    this.soupTimer = 0;
    this.score = new Score(this);
    this.scoreboard = new Scoreboard(this);
    this.grid = new Grid(this);
    this.newElements = [];
    this.sojuSpeed = 1500;
    this.beerSpeed = 1000;
    this.soupSpeed = 3000;
    this.controls.keys();
    
  }
  resetGame(){
    soundHangover.pause();
    this.sojuSpeed = 1500;
    this.beerSpeed = 1000;
    this.soupSpeed = 3000;
    this.sojuTimer = 0;
    this.beerTimer = 0;
    this.soupTimer = 0;
    this.score.score = 0;
    this.scoreboard.lifebarX = 0;
    this.fallingElements.elementY=20
    this.startGame() 
   
    
    }
  drawEverything(timestamp) {
    this.context.clearRect(0, 0, 400, 600);
    this.contextScore.clearRect(0, 0, 250, 100)
    this.grid.PaintCanvas();
    this.background.drawBackground();
    this.player.draw();
    this.scoreboard.PaintScoreboard()
    this.scoreboard.WriteScore();
    this.scoreboard.LifeBar(); 
   
    
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
    if(this.scoreboard.lifebarX >= 10) {
     this.gameover.drawGameover();
     } else {
        this.update(timestamp);
    }

    window.requestAnimationFrame(timestamp => this.drawEverything(timestamp));
  }    

  update(timestamp) {
     console.log(this.scoreboard.lifebarX) 
    this.score.LevelUpdate();
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    //pushing Sojus in the array
    if (this.sojuTimer < timestamp - this.sojuSpeed) {
      if (randomNumber === 1) {
        this.newElements.push(new Soju(this));
      }
      this.sojuTimer = timestamp;
    }
    //pushing Beers in the array
    if (this.beerTimer < timestamp - this.beerSpeed) {
      if (randomNumber === 2) {
        this.newElements.push(new Beer(this));
      }
      this.beerTimer = timestamp;
    }
    //pushing Soups in the array
    if (this.soupTimer < timestamp - this.soupSpeed) {
      if (randomNumber === 3) {
        this.newElements.push(new Soup(this));
      }
      this.soupTimer = timestamp;
    }

    for (let i = 0; i < this.newElements.length; i++) {
      this.newElements[i].updateBottle();
      if (
        this.newElements[i].name === "soju" &&
        this.fallingElements.detectCollision(this.player, this.newElements[i])
      ) {
        soundBottle.play();
        this.newElements.splice(i, 1);
        this.score.SojuPoints();
        this.scoreboard.lifebarX += 20
        console.log(this.score.score);
        break;
      }
      if (
        this.newElements[i].name === "beer" &&
        this.fallingElements.detectCollision(this.player, this.newElements[i])
      ) {
        soundBottle.play();
        this.newElements.splice(i, 1);
        this.score.BeerPoints();
        this.scoreboard.lifebarX += 10
        console.log(this.score.score);
        break;
      }
      if (
        this.newElements[i].name === "soup" &&
        this.fallingElements.detectCollision(this.player, this.newElements[i])
      ) {
        soundSoup.play();
        this.newElements.splice(i, 1);
        this.score.SoupPoints();
        this.scoreboard.lifebarX -= 10
        console.log(this.score.score);
      }
    }
    
  }
    

  startGame() {
    this.drawEverything();
    
  }
}
