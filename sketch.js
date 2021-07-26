
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
  
  paddle2=createSprite(1900,250 ,50,200)
  paddle2.addImage(player2Img)


  
ball=createSprite(1840,250 ,30,30)
  ball2=createSprite(160,250 ,30,30)
ball.addImage(ballImg)
ball.scale = 0.2
ball2.addImage(ballImg)
ball2.scale =0.2


ball.velocityX=-4
ball.bounceOff(edges)

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

  }

  for (var i = 50; i < 800; i=i+110) 
  {
    sprite1= createSprite(380,i, 20, 100);
    spritegroup.add(sprite1)
 sprite1.shapeColor="green"
 sprite1.addImage(icecubeImg)
 sprite1.scale = 0.2
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
  }
  
  for (var i = 50; i < 800; i=i+110) 
  {
     sprite3= createSprite(1580,i, 20, 100);
     spritegroup.add(sprite3)
 sprite3.shapeColor="purple"
sprite3.addImage(icecubeImg)

sprite3.scale = 0.2

  }

  for( var r1=50; r1<800; r1=r1+110){
    row1=createSprite(700,r1,20,100)
    spritegroup.add(row1)
    row1.addImage(woodboxImg)
    row1.scale=0.2
    }
   
    for( var r2=50; r2<800; r2=r2+110 ){
    row2=createSprite(730,r2,20,100)
    spritegroup.add(row2)
    row2.addImage(ironboxImg)
    row2.scale=0.2
    }
    for( var r1=50; r1<800; r1=r1+110){
      row1=createSprite(760,r1,20,100)
      row1.addImage(woodboxImg)
      row1.scale=0.2
      spritegroup.add(row1)
      
      }
     
      for( var r2=50; r2<800; r2=r2+110 ){
      row2=createSprite(790,r2,20,100)
      row2.addImage(ironboxImg)
      spritegroup.add(row2)
      row2.scale=0.2
      
      }
   
    for( var r3=50; r3<800; r3=r3+110 ){
    row3=createSprite(1200,r3,20,100)
    spritegroup.add(row2)
    row3.addImage(woodboxImg)
    spritegroup.add(row2)
    row3.scale=0.2
    
    }
    
    for( var r4=50; r4<800; r4=r4+110 ){
    row4=createSprite(1230,r4,20,100)
    spritegroup.add(row4)
    row4.addImage(ironboxImg)
      spritegroup.add(row2)
      row4.scale=0.2
      
    }
    for( var r3=50; r3<800; r3=r3+110 ){
      row3=createSprite(1260,r3,20,100)
      spritegroup.add(row3)
      row3.addImage(woodboxImg)
      spritegroup.add(row2)
      row3.scale=0.2
      
    
      }
      
      for( var r4=50; r4<800; r4=r4+110 ){
      row4=createSprite(1170,r4,20,100)
      spritegroup.add(row4)
      row4.addImage(ironboxImg)
      spritegroup.add(row2)
      row4.scale=0.2
      }
    


      
}
function draw() {
  background(bg);  
  drawSprites();

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
ball2.bounceOff(spritegroup,brickHit)
}


function brickHit(ball, brick) {
  brick.remove(); 
} 




