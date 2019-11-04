class Soju {
    constructor(game) {
    this.game = game;    
    this.height = game.height;
    this.width = game.width;
    this.context = game.context;    
    this.bottleX = 100;
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
    constructor() {}
}

class Soup {
    constructor() {}
}
