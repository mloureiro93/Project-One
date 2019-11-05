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
        
    if (this.game.score.score > 50) {
    console.log('Level 2')    
    this.game.speed = 700
        }
    if (this.game.score.score > 100) {
    console.log('Level 3')    
    this.game.speed = 500
        }  
    if (this.game.score.score > 100) {
    console.log('Level 4')    
    this.game.speed = 300
    }
}
    ResetScore() {
       this.score = 0 
    }   
    }



