var fr,mr
var r1,r2,r4,r5;
var inosuke,inosukeIMG;
var life = 100;
var bg;

var form,game;

var gameState = "title";

var inosuke,inosukeIMGfront,inosukeIMGback,inosukeIMGright,inosukeIMGleft
var inosukeIMGfrontsword,inosukeIMGbacksword,inosukeIMGleftsword,inosukeIMGrightsword;
var inosukechrIMG,rengokuchrIMG,inosukechr,rengokuchr;
var Rengoku,RengokuIMGback,RengokuIMGfront,RengokuIMGright,RengokuIMGleft;
var RengokuIMGfrontsword,RengokuIMGbacksword,RengokuIMGleftsword,RengokuIMGrightsword;
var playBG,s1,s2,s3,story1,story2,story3;

var direction = "right";

var player = "inosuke";

function preload(){
  inosukeIMGback = loadImage("images/inosuke back.png");
  inosukeIMGfront = loadImage("images/inosuke front.png");
  inosukeIMGright = loadImage("images/inosuke right.png");
  inosukeIMGleft = loadImage("images/inosuke left.png");


  RengokuIMGback = loadImage("images/Rengoku back.png");
  RengokuIMGfront = loadImage("images/Rengoku front.png");
  RengokuIMGright = loadImage("images/Rengoku right.png");
  RengokuIMGleft = loadImage("images/Rengoku left.png");


  RengokuIMGfrontsword = loadImage("images/Rengoku front sword.png");
  RengokuIMGbacksword = loadImage("images/Rengoku back sword.png");
  RengokuIMGleftsword = loadImage("images/Rengoku left sword.png");
  RengokuIMGrightsword = loadImage("images/Rengoku right sword.png");


  inosukeIMGbacksword = loadImage("images/inosuke back sword.png");
  inosukeIMGfrontsword = loadImage("images/inosuke front sword.png");
  inosukeIMGrightsword = loadImage("images/inosuke right sword.png");
  inosukeIMGleftsword = loadImage("images/inosuke left sword.png");

  bg = loadImage("download.jpg");
  playBG = loadImage("images/backgroundIMG.jpg");
  inosukechrIMG = loadImage("images/inosukeChr.png");
  rengokuchrIMG = loadImage("images/RengokuChr.png");
  story1 = loadImage("images/story1.jpg");
  story2 = loadImage("images/story2.jpg");
  story3 = loadImage("images/story3.png");

}

function setup() {
  canvas = createCanvas(displayWidth, displayHeight);


  inosuke = createSprite(200,200,200,200);
  inosuke.addImage(inosukeIMGback);
  inosuke.scale = 0.06 ;
  inosuke.visible = false;

  test = createSprite(-10,-10,10,100000000);
  test.visible = false;

  Rengoku = createSprite(200,200,200,200);
  Rengoku.addImage(RengokuIMGback);
  Rengoku.scale = 0.06 ;
  Rengoku.visible = false;

 inosukechr = createSprite(displayWidth/2 + 400 , displayHeight/3 + 60,200,200);
 inosukechr.addImage(inosukechrIMG);
 inosukechr.scale = 0.06 ;
 inosukechr.visible = false;

 Rengokuchr = createSprite(displayWidth/2  , displayHeight/3 + 60,200,200);
 Rengokuchr.addImage( rengokuchrIMG);
 Rengokuchr.scale = 0.06 ;
 Rengokuchr.visible = false;

 game = new Game();
 game.start();
 game.play();


}




console.log(life);

function draw() {
  if(gameState == "title" || gameState == 1){
  background(bg);  
  }

  if(gameState == "story"){
    background(story1);  
    }
  if(gameState == "story2"){
    background(story2);  
    }
  if(gameState == "story3"){
    background(story3);  
   }

  

  if(gameState == 1){
    inosukechr.visible = true;
    Rengokuchr.visible = true;
  }


  if(gameState ==  3){
    background("cyan"); 
    image(playBG, -700,-500,displayWidth*7, displayHeight*10);
    inosukechr.visible = false;
    Rengokuchr.visible = false;
    }

    if(gameState == "story" ){
      inosukechr.visible = false;
      Rengokuchr.visible = false;
      }


  if(gameState == 3 && player == "inosuke"){

   inosuke.visible = true;
   test.visible = true;
   camera.position.x = inosuke.x;
   camera.position.y = inosuke.y;

   // UP ARROW COMMAND


  if(keyIsDown(UP_ARROW)){
    inosuke.velocityY = -5;
    inosuke.addImage(inosukeIMGback);
    direction = "up";
  }
  if(keyWentUp(UP_ARROW)){
    inosuke.velocityY = 0;
  }
  if(keyWentDown("space") && direction == "up"){
    inosuke.addImage(inosukeIMGbacksword);
  }
  if(keyWentUp("space") && direction == "up"){
    inosuke.addImage(inosukeIMGback);
  }
  

   // DOWN ARROW COMMAND


  if(keyIsDown(DOWN_ARROW)){
    inosuke.velocityY = 5;
    inosuke.addImage(inosukeIMGfront);
    direction = "down";
  }
  if(keyWentUp(DOWN_ARROW)){
    inosuke.velocityY = 0;
  }
  if(keyWentDown("space") && direction == "down"){
    inosuke.addImage(inosukeIMGfrontsword);
  }
   if(keyWentUp("space") && direction == "down"){
    inosuke.addImage(inosukeIMGfront);
  }
  

   // RIGHT ARROW COMMAND


  if(keyIsDown(RIGHT_ARROW)){
    inosuke.velocityX = 5;
    inosuke.addImage(inosukeIMGright);
    direction = "right";
  }
  if(keyWentUp(RIGHT_ARROW)){
    inosuke.velocityX = 0;
  }
  if(keyWentDown("space") && direction == "right"){
    inosuke.addImage(inosukeIMGrightsword);
  }
   if(keyWentUp("space") && direction == "right"){
    inosuke.addImage(inosukeIMGright);
  }
  


   // LEFT ARROW COMMAND


  
 if(inosuke.x < 20 ){
    inosuke.x = inosuke.x+50
    inosuke.y = inosuke.y

    }
   
    if(keyIsDown(LEFT_ARROW)){
      inosuke.velocityX = -5;
      inosuke.addImage(inosukeIMGleft);
      direction = "left"
  }
    if(keyWentUp(LEFT_ARROW)){
      inosuke.velocityX = 0;
    }
  
    if(keyWentDown("space") && direction == "left"){
      inosuke.addImage(inosukeIMGleftsword);
    }
    
    if(keyWentUp("space") && direction == "left"){
      inosuke.addImage(inosukeIMGleft);
    }
  

}

  if(gameState == 3 && player == "Rengoku" ){
    Rengoku.visible = true;

    camera.position.x = Rengoku.x;
    camera.position.y = Rengoku.y;

    if(keyIsDown(UP_ARROW)){
     Rengoku.velocityY = -5;
     Rengoku.addImage(RengokuIMGback);
      direction = "up";
    }
    if(keyWentUp(UP_ARROW)){
      Rengoku.velocityY = 0;
    }
    if(keyWentDown("space") && direction == "up"){
      Rengoku.addImage(RengokuIMGbacksword);
    }
    if(keyWentUp("space") && direction == "up"){
      Rengoku.addImage(RengokuIMGback);
    }
    
  
     // DOWN ARROW COMMAND
  
  
    if(keyIsDown(DOWN_ARROW)){
      Rengoku.velocityY = 5;
      Rengoku.addImage(RengokuIMGfront);
      direction = "down";
    }
    if(keyWentUp(DOWN_ARROW)){
      Rengoku.velocityY = 0;
    }
    if(keyWentDown("space") && direction == "down"){
      Rengoku.addImage(RengokuIMGfrontsword);
    }
     if(keyWentUp("space") && direction == "down"){
      Rengoku.addImage(RengokuIMGfront);
    }
    
  
     // RIGHT ARROW COMMAND
  
  
    if(keyIsDown(RIGHT_ARROW)){
      Rengoku.velocityX = 5;
      Rengoku.addImage(RengokuIMGright);
      direction = "right";
    }
    if(keyWentUp(RIGHT_ARROW)){
      Rengoku.velocityX = 0;
    }
    if(keyWentDown("space") && direction == "right"){
      Rengoku.addImage(RengokuIMGrightsword);
    }
     if(keyWentUp("space") && direction == "right"){
      Rengoku.addImage(RengokuIMGright);
    }
    
  
  
     // LEFT ARROW COMMAND
  
  
    if(keyIsDown(LEFT_ARROW)){
      Rengoku.velocityX = -5;
      Rengoku.addImage(RengokuIMGleft);
      direction = "left";
  
    }
  
    if(keyWentUp(LEFT_ARROW)){
      Rengoku.velocityX = 0;
    }
  
    if(keyWentDown("space") && direction == "left"){
      Rengoku.addImage(RengokuIMGleftsword);
    }
    
    if(keyWentUp("space") && direction == "left"){
      Rengoku.addImage(RengokuIMGleft);
    }
    
  
  }


  drawSprites();




}


