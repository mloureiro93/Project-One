class Scoreboard {
  constructor(game) {
    this.game = game;
    this.canvas = game.$canvasScore;
    this.context = game.contextScore;
    this.score = game.score.score;
    this.toxicImage = new Image();
    this.toxicImage.src = "images/toxic_bottle.png";
    this.lifebarX = 0;
   //this.highScore = ?
  }
  WriteScore() {
    this.context.font = "15px Arial Black";
    this.context.fillText(`Current Score: ${this.game.score.score}`, 20, 60);
  }

  PaintScoreboard() {
    this.context.fillStyle = "white";
    this.context.fillRect(1, 10, 200, 35);
    this.context.fillStyle = "white";
    this.context.fillRect(1, 80, 130, 30);
    this.context.strokeStyle = "black";
    this.context.strokeRect(0, 78, 132, 32);


  }

  LifeBar() {
    this.context.beginPath();
    this.context.fillStyle = "red" 
    this.context.fillRect(1, 12, this.lifebarX, 34);
    this.context.lineWidth = "3";
    this.context.strokeStyle = "black";
    this.context.rect(0, 10, 200, 35);
    this.context.stroke(); 
    this.context.closePath();
   
  
   }
     
  }

  
    
 