class Game {
    constructor(){}

     start(){
      if(gameState == "title"){
        form = new Form();
        form.display();
      }

     }

     play(){
       if(gameState == "story"){
         form.hide();
         
       }
     }
}