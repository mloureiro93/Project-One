class Soju {
    constructor(game) {
    this.game = game;    
    this.height = game.height;
    this.width = game.width;
    this.context = game.context;    
    this.bottleX = Math.floor((Math.random() * this.width-10) + 10);
    this.bottleY = 20;
    this.vy = 3;  
    this.bottleImg = new Image();
    this.bottleImg.src = "images/testsojubottle.png";
    }
   drawBottle() {
    game.context.drawImage(this.bottleImg, this.bottleX, this.bottleY, 20, 60);  
   }
   updateBottle() {
    this.bottleY += this.vy;
}
}

class Beer {
    constructor(game) {
        this.game = game;    
        this.height = game.height;
        this.width = game.width;
        this.context = game.context;    
        this.bottleX = Math.floor((Math.random() * this.width-10) + 10);
        this.bottleY = 20;
        this.vy = 5;  
        this.bottleImg = new Image();
        this.bottleImg.src = "images/testbeerbottle.png";

    }
    drawBottle() {
        game.context.drawImage(this.bottleImg, this.bottleX, this.bottleY, 20, 60);  
       }
       updateBottle() {
        this.bottleY += this.vy;
    }

}

class Soup {
    constructor() {}
}


// class Collision {
//     constructor (game) {
//     this.player = game.player;
//     this.playerX = game.player.playerX;
//     this.playerZ = game.player.playerZ;
//     this.fallingObj = 
        

//     }

//  detectCollision(player, fallingObj) {
//     //console.log(obj.vx, obj.vy , obj.height, car.width)
//   if (player.playerX < fallingObj.vx + fallingObj.width  && player.playerX + player.width  > fallingobj.vx &&
//     player.playerY < obj.vy + obj.height && car.row + car.height > obj.vy) {
//       return true;
//     }
//   }
//   if (object1.x < object2.x + object2.width  && object1.x + object1.width  > object2.x &&
//      object1.y < object2.y + object2.height && object1.y + object1.height > object2.y) {
// // The objects are touching
