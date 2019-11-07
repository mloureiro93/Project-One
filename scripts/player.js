class Player {
    constructor(game){  
    this.game = game;    
    this.context = game.context;
    this.width = 45;
    this.height = 65;
    this.playerX = 130;
    this.playerY = 340;
    this.vX = 10
    this.playerImg = new Image();
    this.playerImg.src = "images/player.png";
        
}
  draw() {
    game.context.drawImage(this.playerImg, this.playerX, this.playerY,  this.width,  this.height);
    
}
 

}


