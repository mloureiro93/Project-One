class Score {
    constructor(game) {
    this.game = game;
    this.context = game.context;    
    this.score = 0;
    this.sojuScore = 20;
    this.beerScore = 10;
    this.soupScore = 10;
    }
    

    SojuPoints(){
    this.score = this.score + this.sojuScore
    }

    BeerPoints() {
    this.score = this.score + this.beerScore
    }

    SoupPoints() {
    this.score = this.score - this.soupScore
    }

    LevelUpdate() {
        
    if (this.game.score.score > 50 && this.game.score.score < 100 ) {
    console.log('Level 2')    
    this.game.sojuSpeed = 1000
    this.game.beerSpeed = 700
    this.game.soupSpeed = 3500
        }
    if (this.game.score.score > 100 && this.game.score.score < 200 ) {
    console.log('Level 3')    
    this.game.sojuSpeed = 700
    this.game.beerSpeed = 700
    this.game.soupSpeed = 4500
        }  
    if (this.game.score.score > 200) {
    console.log('Level 4')    
    this.game.sojuSpeed = 500
    this.game.beerSpeed = 300
    this.game.soupSpeed = 5500
    }
}
    
    }



