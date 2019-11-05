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
    this.restaurantImg = new Image();
    this.restaurantImg.src = "images/bbq restaurant.jpg"
    this.restaurantX = game.width;
    this.restaurantY = game.height;

    }
 drawBackground() {
    game.context.drawImage(this.bossImg, this.bossX, this.bossY, 40, 70);
    game.context.drawImage(this.restaurantImg, 0, 0, this.restaurantX, this.restaurantY);

 }


}
