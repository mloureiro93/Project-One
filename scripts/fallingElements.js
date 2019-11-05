class FallingElements {
    constructor(game) {
    this.game = game;    
    this.height = game.height;
    this.width = game.width;
    this.context = game.context; 
    this.elementX = Math.floor((Math.random() * this.width-50) + 50);
    this.elementY = 20;
       }
   
    updateBottle() {
        this.elementY += this.vy;
    }

    detectCollision(player, fallingElements) {
   
    if (player.playerX < fallingElements.elementX + fallingElements.width  && 
        player.playerX + player.width  > fallingElements.elementX &&
       player.playerY < fallingElements.elementY + fallingElements.height &&
       player.playerY + player.height > fallingElements.elementY) {
        
        return true;
       
           
          }
        }
   
}


class Soju extends FallingElements {
constructor(game) {
super(game) 
 this.name = 'soju'
 this.width = 20;
 this.height = 60;
 this.sojuImg = new Image();
 this.sojuImg.src = "images/testsojubottle.png";
 this.vy = 10;  
 } 
  drawSoju() {
    game.context.drawImage(this.sojuImg, this.elementX, this.elementY,  this.width, this.height);  
   }
}

class Beer extends FallingElements {
    constructor(game) {
    super(game) 
this.name = 'beer'    
this.width = 20;
this.height = 60;
this.beerImg = new Image();
this.beerImg.src = "images/testbeerbottle.png";    
this.vy = 8;  
 }
 drawBeer() {
        game.context.drawImage(this.beerImg, this.elementX, this.elementY, this.width, this.height);  
       }
}

class Soup extends FallingElements {
    constructor(game) {
    super(game) 
this.name = 'soup'
this.width = 50;
this.height = 50;
this.soupImg = new Image();
this.soupImg.src = "images/hangover soup.jpg";    
this.vy = 9;  
 }
 drawSoup() {
        game.context.drawImage(this.soupImg, this.elementX, this.elementY, this.width, this.height);  
       }


}


class Collision {
    constructor (game) {
    this.player = game.player;
    this.playerX = game.player.playerX;
    this.playerZ = game.player.playerZ;
    this.fallingObj = game.sojuImg;
    this.width = game.sojuImg.width;
    this.height = game.sojuImg.height;
        

    }

 
}
