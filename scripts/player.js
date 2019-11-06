class Player {
    constructor(game){  
    this.game = game;    
    this.context = game.context;
    this.width = 60;
    this.height = 80;
    this.playerX = 135;
    this.playerY = 370;
    this.vX = 10
    this.playerImg = new Image();
    this.playerImg.src = "images/player.png";
        
}
  draw() {
    game.context.drawImage(this.playerImg, this.playerX, this.playerY,  this.width,  this.height);
    
}
 

}


// if (this.x - this.radius < 0) this.x = this.radius;
// if (this.x + this.radius > this.width)
//   this.x = this.width - this.radius;

// if (game.controls.event.keyCode = 37) { --> how to access the keycode value?
//     if (this.playerX - this.vX > 0) {
//         this.playerX -= this.vX;
//     }
//     if (game.controls.event.keyCode = 39){
//     if (this.playerX + this.vX < this.width) {
//         this.playerX += this.vX;
//     }    

//     }
//     }


