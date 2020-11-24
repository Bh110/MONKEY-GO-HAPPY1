
var monkey ,monkeyr;
var banana ,bananar, obstacle, obstacler,bg,og;
var ground,invisibleG;
var score;

function preload(){
  
  
  monkeyr =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananar = loadImage("banana.png");
  obstacler = loadImage("obstacle.png");
 
}
function setup(){
  createCanvas(400,400);
  
  monkey=createSprite(20,300 );
  monkey.scale=0.1;
  monkey.addAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
 
  ground=createSprite( 200,335,400,10);
ground.x=ground.width/2;
invisibleG=createSprite( 200,335,400,10);
invisibleG.visible=false;
  
  score=0;
  bg=new Group();
  og=new Group();
}
function draw(){
  background("lightblue");
  stroke( "Black");
  fill( "Black");
  textSize( 19);
  text("Survival Time:" +score,150,50);
  score=Math.ceil(frameCount/frameRate());
  if ( ground.x<0){
    ground.velocityX=-10;
  }
  if( keyDown("space")){
    monkey.velocityY=-12;
  }
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide( invisibleG);

  b();o();
  drawSprites();
}

function b(){
  if( World.frameCount%80===0){
     banana=createSprite(200,100);
  banana.addAnimation("banana.png",bananar);
  banana.scale=0.1;
    banana.y=Math.round( random( 120,180));
    banana.velocityX=-2;
    banana.lifetime=110;
    bg.add( banana);
  }
}
function o(){
  if( World.frameCount%300===0){
     obstacle=createSprite(200,315);
  obstacle.addAnimation("obstacle.png",obstacler);
  obstacle.scale=0.1;  
    obstacle.velocityX=-2;
    obstacle.lifetime=330;
    og.add(obstacle);
  }
}


