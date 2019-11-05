class Background {
    constructor(game) {
    this.game = game;
    this.height = game.height;
    this.width = game.width;
    this.context = game.context;  
    this.bossImg = new Image();
    this.bossImg.src = "images/bossTest.jpg";
    this.bossX = 180;
    this.bossY = 10;
    
    }
 drawBackground() {
    game.context.drawImage(this.bossImg, this.bossX, this.bossY, 40, 70);
   

 }


}
