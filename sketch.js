var bomb,bombImg;
var coin,coinImg;
var energydrink,energydrinkImg;
var path,pathImg;
var runner,runnerImg;
var power,powerImg
function preload(){
  //pre-load images
  bombImg = loadImage("bomb.png");
  coinImg = loadImage("coin.png");
  energydrinkImg = loadImage("energydrink.png");
  pathImg = loadImage("path.png");
  runnerImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  path = createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale = 1.2;
  //create sprites here
 runner = createSprite(200,100,50,3);
 runner.addAnimation("boy",runnerImg);
 runner.scale=0.05;
 leftboundries = createSprite(0,0,100,800);
 rightboundries = createSprite(410,0,100,800);
 leftboundries.visible = false;
 rightboundries.visible = false;


//moving backgroup

}
function draw() {
  background(0);
  runner.x = mouseX;
 if(path.y > 400 ){
   path.y = height/2
 }
 runner.bounceOff(leftboundries);
 runner.bounceOff(rightboundries);
 drawSprites();
}

