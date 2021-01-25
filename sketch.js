const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

function preload(){
 
}

function setup() {
    createCanvas(1500,600);
    engine=Engine.create();
    world=engine.world;
     
    ground= new Ground(750,480,1500,15);
   
    ball = new ball(160,320,40,40);
    throwObject = new Throw(ball.body,{x:480, y:51});
   
    box1a= new Box(695,460,50,50);
    box1b= new Box(695,410,50,50);
    box1c= new Box(695,360,50,50);
    box1d= new Box(695,310,50,50);
    box1e= new Box(695,260,50,50);
    box1f= new Box(695,210,50,50);
    box1g= new Box(695,160,50,50);
    box1h= new Box(695,110,50,50);

    box2a= new Box(775,460,50,50);
    box2b= new Box(775,410,50,50);
    box2c= new Box(775,360,50,50);
    box2d= new Box(775,310,50,50);
    box2e= new Box(775,260,50,50);
    box2f= new Box(775,210,50,50);
    box2g= new Box(775,160,50,50);
    box2h= new Box(775,110,50,50);

    box3a= new Box(860,460,50,50);
    box3b= new Box(860,410,50,50);
    box3c= new Box(860,360,50,50);
    box3d= new Box(860,310,50,50);
    box3e= new Box(860,260,50,50);
    box3f= new Box(860,210,50,50);
   
    
    
}

function draw() {
    background(207, 247, 244);  
    Engine.update(engine);
   
    // mouseDragged();
    // mouseReleased();
    push();
    textSize(15);
    fill('white');
    stroke('orange');
    strokeWeight(1);
    text("Drag the hexagon and Release it",150,90);
    pop();

    fill("black");
    text(mouseX+","+mouseY,mouseX,mouseY);
    ground.display();

    box1a.display();
    box1b.display();
    box1c.display();
    box1d.display();
    box1e.display();
    box1f.display();
    box1g.display();
    box1h.display();

    box2a.display();
    box2b.display();
    box2c.display();
    box2d.display();
    box2e.display();
    box2f.display();
    box2g.display();
    box2h.display();

    box3a.display();
    box3b.display();
    box3c.display();
    box3d.display();
    box3e.display();
    box3f.display();

    ball.display();
    throwObject.display();
 
    
    
}  
function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
  }
// function mouseReleased(){
//     throwObject.fly();
//   }
//   function keyPressed(){
//     if(keyCode === 32){
//         throwObject.attach(this.ball);
//     }
//   }
