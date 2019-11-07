class Background {
    constructor(game) {
    this.game = game;
    this.height = game.height;
    this.width = game.width;
    this.context = game.context;  
    this.bossImg = new Image();
    this.bossImg.src = "images/boss.png";
    this.bossX = 140;
    this.bossY = 1;
    
    }
 drawBackground() {
    game.context.drawImage(this.bossImg, this.bossX, this.bossY, 40, 70);
   

 }


}
