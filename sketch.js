var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg=loadImage("apple.png");
  orangeLeaf=loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function createApples() {
  apple=createSprite(random(50,350),40,10,10);
  //Add image to apple sprite
  apple.addImage(appleImg);
  //scale the sprite if required
  apple.scale=0.1;
  //give the velocity so that the apple move downwards
  apple.velocityY=+2;
  //give lifetime to the apple sprite
  apple.lifeTime=300;

}
function createLeaf() {
  leaf=createSprite(random(50,350),40,10,10);
  //Add image to leaf sprite
  leaf.addImage(orangeLeaf);
  //scale the sprite if required
  leaf.scale=0.1;
  //give the velocity so that the leaf move downwards
  leaf.velocityY=+2;
  //give lifetime to the leaf sprite
  leaf.lifeTime=300;

}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
  var select_Sprites = Math.round(random (1,2));

if(frameCount % 80==0){
  if(select_Sprites==1){
    //call createApples function
    createApples();
  }
  else{
    //call createLeaves function
    createLeaf();
  }
}

}