
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies

var paper1;
var ground;
var dustbin1;
var dustbin2;
var dustbin3;


function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	paper1 = new Paper;
	ground = new Ground(600,650,1200,20);
	dustbin1 = new Dustbin(810,650,200,20);
	dustbin2 = new Dustbin(760,650,20,100);
    dustbin3 = new Dustbin(870,650,20,100);
  
}


function draw() {
	background(0);
    Engine.update(engine);
    paper1.display();
    ground.display();
	dustbin1.display();
	dustbin2.display();
	dustbin3.display();
  drawSprites();
  keyPressed();
 
}

function keyPressed (){
	if (keyCode === UP_ARROW){
		Matter.body.applyForce(paper.body,paper.body.position,{x:85,y:85});
	}
}

