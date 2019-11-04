class Controls {
    constructor(game) {
        this.game = game;
        this.player = game.player
        this.vX = game.player.vX
    
    }
moveRight() {
    this.game.player.playerX = this.game.player.playerX + this.vX;
}

moveLeft() {
    this.game.player.playerX = this.game.player.playerX - this.vX;
}

keys() {

window.addEventListener("keydown", event => { //does the name of the event matter?
    event.preventDefault();

    switch (event.keyCode) {
      case 37:
        this.moveLeft();
    if (game.player.playerX < 0) {
        game.player.playerX = 0
    }
       
      break;
      case 39:
        this.moveRight();
        if (game.player.playerX > game.width - game.player.width) {
            game.player.playerX = game.width - game.player.width
        }  
                       
        break;
    }
  });
}
}

