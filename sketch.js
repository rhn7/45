var balloon,balloonImg
var bg,bgImg
var topGround
var bottomGround

function preload(){
  bgImg = loadImage("assets/bg.png")
  balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
}

function setup(){
  bg = createSprite(165,400,1,1)
  bg.addImage(bgImg)
  bg.scale = 1.3

  topGround = createSprite(100,5,700,10)
  topGround.visible = false;
  
  bottomGround = createSprite(100,395,700,10)
  bottomGround.visible = false

  balloon = createSprite(100,200,10,10)
  balloon.addAnimation("balloon",balloonImg)
  balloon.scale = 0.2

}

function draw(){
  background("black")

  balloon.velocityY = balloon.velocityY+1

  if(keyIsDown(UP_ARROW)){
    balloon.velocityY = balloon.velocityY-2
   }


  drawSprites()
}