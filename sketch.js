var player1score=0;
var player2score=0
function preload(){
  icecubeImg=loadImage("ice cube.png")
  ironboxImg=loadImage("iron box.png")
  woodboxImg=loadImage("wood box.png")
  ballImg=loadImage("ball.png")
  player1Img=loadImage("p1.png")
  player2Img=loadImage("p2.png")
  trophyImg=loadImage("trophy.png")
  bg=loadImage("bg3.jpg")
}
function setup() {
  createCanvas(2000,800);
edges=createEdgeSprites()

  paddle=createSprite(100,250 ,50,200)
  paddle.addImage(player1Img)
  paddle.setCollider("rectangle",0,0,100,250);
  paddle.debug = false

  
  paddle2=createSprite(1900,250 ,50,200)
  paddle2.addImage(player2Img)
  paddle2.setCollider("rectangle",0,0,100,250);
  paddle2.debug = false

  
ball=createSprite(1840,250 ,30,30)
  ball2=createSprite(160,250 ,30,30)
ball.addImage(ballImg)
ball.scale = 0.2
ball2.addImage(ballImg)
ball2.scale =0.2


ball.velocityX=-8
ball.velocityY=-8

ball2.velocityX=8
ball2.velocityY=-8

spritegroup=new Group()
  trophy= createSprite(1000,400,100,100)
trophy.addImage(trophyImg)
for (var i = 50; i < 800; i=i+110) 
  {
     sprite= createSprite(350,i, 20, 100);
     spritegroup.add(sprite)
sprite.shapeColor="pink"
sprite.scale=0.2

sprite.addImage(icecubeImg)
sprite.setCollider("rectangle",0,0,200,200);
      sprite.debug = true

  }

  for (var i = 50; i < 800; i=i+110) 
  {
    sprite1= createSprite(380,i, 20, 100);
    spritegroup.add(sprite1)
 sprite1.shapeColor="green"
 sprite1.addImage(icecubeImg)
 sprite1.scale = 0.2
 sprite1.setCollider("rectangle",0,0,200,200);
      sprite1.debug = true
  }

  line1 = createSprite(410,400,5,800)
  line1.shapeColor="orange"

  line1.visibility=false
  line2 = createSprite(1530,400,5,800)
  line2.shapeColor="purple"
  line2.visibile=false
  line3 = createSprite(810,400,5,800)
  line3.shapeColor="#00ff00"
  line3.visibility=false
  line4 = createSprite(1150,400,5,800)
  line4.shapeColor="#000099"
  line4.visibility=false
  for (var i = 50; i < 800; i=i+110) 
  {
    sprite2= createSprite(1550,i, 20, 100);
    spritegroup.add(sprite2)
 sprite2.shapeColor="red"
 sprite2.addImage(icecubeImg)
 sprite2.scale=0.2
 
 sprite2.setCollider("rectangle",0,0,200,200);
 sprite2.debug = true

  }
  
  for (var i = 50; i < 800; i=i+110) 
  {
     sprite3= createSprite(1580,i, 20, 100);
     spritegroup.add(sprite3)
 sprite3.shapeColor="purple"
sprite3.addImage(icecubeImg)
sprite3.scale = 0.2
sprite3.setCollider("rectangle",0,0,200,200);
 sprite3.debug = true

  }

  for( var r1=50; r1<800; r1=r1+110){
    row1=createSprite(700,r1,20,100)
    spritegroup.add(row1)
    row1.addImage(woodboxImg)
    row1.scale=0.2
    row1.setCollider("rectangle",0,0,200,200);
    row1.debug = true
    }
   
    for( var r2=50; r2<800; r2=r2+110 ){
    row2=createSprite(730,r2,20,100)
    spritegroup.add(row2)
    row2.addImage(ironboxImg)
    row2.scale=0.2
    row2.setCollider("rectangle",0,0,200,200);
      row2.debug = true
    }
    for( var r1=50; r1<800; r1=r1+110){
      row1=createSprite(760,r1,20,100)
      row1.addImage(woodboxImg)
      row1.scale=0.2
      spritegroup.add(row1)
      row1.setCollider("rectangle",0,0,200,200);
    row1.debug = true
      }
     
      for( var r2=50; r2<800; r2=r2+110 ){
      row2=createSprite(790,r2,20,100)
      row2.addImage(ironboxImg)
      spritegroup.add(row2)
      row2.scale=0.2
      row2.setCollider("rectangle",0,0,200,200);
      row2.debug = true
      }
   
    for( var r3=50; r3<800; r3=r3+110 ){
    row3=createSprite(1200,r3,20,100)
    spritegroup.add(row2)
    row3.addImage(woodboxImg)
    spritegroup.add(row2)
    row3.scale=0.2
    row3.setCollider("rectangle",0,0,200,200);
    row3.debug = true
    
    }
    
    for( var r4=50; r4<800; r4=r4+110 ){
    row4=createSprite(1230,r4,20,100)
    spritegroup.add(row4)
    row4.addImage(ironboxImg)
      spritegroup.add(row2)
      row4.scale=0.2
      row4.setCollider("rectangle",0,0,200,200);
      row4.debug = true
    }
    for( var r3=50; r3<800; r3=r3+110 ){
      row3=createSprite(1260,r3,20,100)
      spritegroup.add(row3)
      row3.addImage(woodboxImg)
      spritegroup.add(row2)
      row3.scale=0.2
      row3.setCollider("rectangle",0,0,200,200);
      row3.debug = true
    
      }
      
      for( var r4=50; r4<800; r4=r4+110 ){
      row4=createSprite(1170,r4,20,100)
      spritegroup.add(row4)
      row4.addImage(ironboxImg)
      spritegroup.add(row2)
      row4.scale=0.2
      row4.setCollider("rectangle",0,0,200,200);
      row4.debug = true
      }
    
      line1.visible = false;
      line2.visible = false;
      line3.visible = false;
      line4.visible = false;

      
}
function draw() {
  background(bg);  
  textSize (30)
  textFont("Broadway");
   fill("yellow");
   stroke("red");
   strokeWeight(5);
  text ( "score: " + player1score, 100,50)
  text ( "score: " + player2score, 1800,50)
  drawSprites();
ball.bounceOff(edges)
ball2.bounceOff(edges)
if (keyDown("up")){
  paddle2.y-=5
}
if (keyDown("down")){
  paddle2.y+=5
}
  

if(keyDown("w")){
  paddle.y-=5
}

if(keyDown("s")){
  paddle.y+=5
}

ball.bounceOff(spritegroup, brickHit)
ball2.bounceOff(spritegroup,brickHit2)

if (player1score==140){
  line1.destroy();
}
if (player1score==420){
  line3.destroy()
}
if (player2score==140){
  line2.destroy()
}
if (player2score==420){
  line4.destroy()
}

ball2.bounceOff(line1)
ball.bounceOff(line2)
ball2.bounceOff(line3)
ball.bounceOff(line4)


ball2.bounceOff(paddle)
ball.bounceOff(paddle2)
if (ball.isTouching(trophy)){
  ball.setVelocity(0,0)
  ball2.setVelocity(0,0)

  textSize(50)
  text (" game Over , player2 wins" , 400,400)
}

if (ball2.isTouching(trophy)){
  ball.setVelocity(0,0)
  ball2.setVelocity(0,0)
  textSize(50)
  text (" game Over , player1 wins" , 400,400)
}
}


function brickHit(ball, brick) {
  player2score +=10
  brick.remove(); 
} 
function brickHit2(ball, brick) {
  player1score +=10
  brick.remove(); 
} 

 



