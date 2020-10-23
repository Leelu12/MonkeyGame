
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var survivaltime = 0;
var PLAY=1;
var END=0;
var gameState=PLAY;
function preload(){
monkey_running=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
bananaImage = loadImage("banana.png");
obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400);
   monkey= createSprite(80,315,20,20);
 monkey.addAnimation("moving",monkey_running);
 monkey.scale=0.1;
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  console.log(ground.x)
   FoodGroup = new Group();
  obstacleGroup = new Group();
  
   score=0;
  survivaltime=0;
}


function draw() {
background("green");
  if(ground.x>0){
    ground.x=ground.width/2;
  }
    if(keyDown("space") && monkey.y>=150){
    monkey.velocityY=-12;
  }
  monkey.velocityY=monkey.velocityY+0.6;
    
  monkey.collide(ground);
 textSize(15);
  fill("orange");
  text("Score:"+score,330,50);
  
  banana();
  
  obstacles();
  
  textSize(20);
  fill("black");
  survivaltime=Math.round(frameCount/frameRate());
  text("Survival Time:"+survivaltime,90,50);
    
 drawSprites();
 }

function banana(){
  if(frameCount % 80===0){
   var banana = createSprite(400,125,10,40);
    banana.addImage(bananaImage);
    banana.velocityX = -5;
    banana.scale = 0.1;
    banana.y=Math.round(random(50,200));
    banana.lifeTime = 100
   FoodGroup.add(banana);
  }
}
function obstacles(){
  
  if(frameCount % 300===0){
    obstacle=createSprite(400,325,10,40);
    obstacle.velocityX=-5;
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.1;
    obstacle.lifeTime = 100
    obstacleGroup.add(obstacle);
  }
}