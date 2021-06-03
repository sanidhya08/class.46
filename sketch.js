var maze;
var Ghost1Img,Ghost2Img,Ghost3Img,PacmanImg; 
var Ghost1,Ghost2,Ghost3,Pacman ;
var coinGroup,coin,coinImg;
var box1;
function preload(){
  Ghost1Img=loadImage("Images/ghost1.png");
 Ghost2Img=loadImage("Images/ghost2.png")
Ghost3Img=loadImage("Images/ghost3.png")
  PacmanImg=loadImage("Images/pac2.png ")
  coinImg=loadImage("Images/coin1.png");
}



function setup() {
  createCanvas(500,600);
   coinGroup=createGroup();
 maze=createGroup();

  maze.add(createSprite(40,90,8,150));
  maze.add(createSprite(247,20,420,10));
  maze.add(createSprite(453,90,8,150));
  maze.add(createSprite(246,60,8,75));
  maze.add(createSprite(86,170,100,10));
  maze.add(createSprite(131,215,10,80));
  maze.add(createSprite(86,260,100,10));
  maze.add(createSprite(407,170,100,10));
  maze.add(createSprite(357,210,10,90));
  maze.add(createSprite(402,260,100,10));
  maze.add(createSprite(86,303,100,10));
  maze.add(createSprite(134,343,10,90));
  maze.add(createSprite(86.5,388,105,10));
  maze.add(createSprite(38,468,8,170));
  maze.add(createSprite(241.5,555,415,10));
  maze.add(createSprite(450,479,8,163));
  maze.add(createSprite(401.5,397,105,10));
  maze.add(createSprite(350,357,10,90));
  maze.add(createSprite(400,314,110,10));
  maze.add(createSprite(164,201,8,130));
  maze.add(createSprite(190,200,50,10));
  maze.add(createSprite(323,201,8,130));
  maze.add(createSprite(297,201,50,10));
  maze.add(createSprite(244,183,8,45));
  maze.add(createSprite(320,355,10,95));
  maze.add(createSprite(164,348,10,95));
  
  maze.add(createSprite(128,426,45,8));
  
  maze.add(createSprite(147,445.5,8,45));
  
  maze.add(createSprite(57,472,45,8));
  
  maze.add(createSprite(75.8 ,483,8,25));
  
  maze.add(createSprite(57,495,45,8));
  
  maze.add(createSprite(190,491,8,50));
  
  maze.add(createSprite(160,520,110,10));
  
  maze.add(createSprite(198,425,35,8));
  
  maze.add(createSprite(301,425,35,8));
 
  maze.add(createSprite(387,425,45,8));
  
  maze.add(createSprite(366.5,444,8,45));
  
  maze.add(createSprite(425,480,45,8));
 
  maze.add(createSprite(406 ,489,8,25));
 
  maze.add(createSprite(426,498,45,8));
 
  maze.add(createSprite(330,491,8,50));
  
  maze.add(createSprite(345,520,110,10));
  
maze.add(createSprite(254,502,8,45));
  
 
  maze.add(createSprite(100,60,60,25));

  maze.add(createSprite(190,60,60,25));
 
  maze.add(createSprite(350,110,100,20));
  
  maze.add(createSprite(320,60,60,25));

  maze.add(createSprite(140,110,100,20));
  
  maze.add(createSprite(245,250,100,20));
 
  maze.add(createSprite(245,370,100,20));

  maze.setColorEach(rgb(72,146,255));
  
  Ghost1=createSprite(188,315,20,20)
  Ghost1.addImage(Ghost1Img);
  Ghost1.scale = 0.1;
  Ghost2=createSprite(220,315,20,20)
  Ghost2.addImage(Ghost2Img);
  Ghost2.scale = 0.1;
  Ghost3=createSprite(252,315,20,20)
  Ghost3.addImage(Ghost3Img);
  Ghost3.scale = 0.1;
  Pacman=createSprite(410,58,20,20)
  Pacman.addImage(PacmanImg);
  Pacman.scale = 0.06;

  box1 = createSprite(80,215,75,75);
  box1.shapeColor = "black";

  for(var i = 55; i<455; i += 25){
 for(var j = 40; j<565; j += 25){
  coin = createSprite(i,j,5,5);
  coin.addImage(coinImg);
  coin.scale = 0.3;
  if(coin.overlap(box1)
   || coin.overlap(maze)
  || coin.overlap(Pacman) 
  || coin.overlap(Ghost1) 
  || coin.overlap(Ghost2) 
  || coin.overlap(Ghost3)){
    coin.visible = false;
  }
  else{
    coinGroup.add(coin);
  }
  }
  }
}

function draw() {
  background("black");  
  drawSprites();
   text(mouseX + " " + mouseY,233,347);
 pacMovement();
}

 function pacMovement(){

  if(keyDown("up")){
    Pacman.y -= 5;
    Pacman.rotation = -90;
  }

 }



