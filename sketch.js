
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
monkey = createSprite(75,350,10,10);
monkey.addAnimation("monkeyRunning",monkey_running);
monkey.scale = 0.1;  
  
ground = createSprite(200,385,800,10);
ground.velocityX = -10;
  
}


function draw() {
  background("lightgreen");
  
  monkey.collide(ground);
  monkey.velocityY = 6;
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  if (keyDown("space")){
    monkey.velocityY = -10;
  }
  score = Math.round(frameCount/100);
  text("survival time: "+score,140,20);
  
  spawnBanana();
  spawnObstacle();
  drawSprites();
}


function spawnBanana() {
  if (frameCount % 100 === 0){
  banana = createSprite(400,50,10,10);
  banana.addImage("bananaIMG",bananaImage);
  banana.scale = 0.1;
  banana.y = Math.round(random(50,150));
  banana.velocityX = -4;
  banana.lifetime = 200;
  }
}


function spawnObstacle(){
  if (frameCount % 70 === 0){
   obstacle = createSprite(400,350,10,40);
   obstacle.addImage(obstacleImage);
   obstacle.scale = 0.2;
   obstacle.velocityX = -(6 + score/100);
   obstacle.lifetime = 300;
  }
}