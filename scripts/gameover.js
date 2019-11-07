class Gameover{
    constructor(game){
        this.game = game;
        this.context = game.context;
        this.imageGameover = new Image();
        this.imageGameover.src = "images/printer.png"
    }

    drawGameover(){
       soundHangover.play();     
       document.getElementById("game").style.visibility = "hidden";  
       document.getElementById("printer").style.visibility = "visible";
       document.getElementById("printer").style.width = "300px";
       document.getElementById("printer").style.height = "300px";
       document.getElementById("game-section-container").style.visibility = "hidden";
       document.getElementById("game-section-container").style.width = "0px";
       document.getElementById("game-section-container").style.height = "0px";
       document.getElementById("gameover-message").style.visibility = "visible";
       document.getElementById("gameover-message").style.width = "700px";
       document.getElementById("gameover-message").style.height = "300px";
       document.getElementById("play-again").style.visibility = "visible";
       document.getElementById("play-again").style.width = "200px";
       document.getElementById("play-again").style.height = "100px";
      
       
       }


        
    

    

}

