class Player {
    constructor(game){  
    this.game = game;    
    this.height = game.height;
    this.width = game.width;
    this.context = game.context;
    this.playerX = 170;
    this.playerY = 450;
    this.vX = 15
    this.playerImg = new Image();
    this.playerImg.src = "images/playertest.jpg";
    
}
  draw() {
    game.context.drawImage(this.playerImg, this.playerX, this.playerY, 60, 80);
    
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


