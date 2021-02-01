
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree1, ground1, stone1, rope1, boyImage;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10, mango11;

function preload()
{
	boyImage= loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	tree1= new Tree(650, 400, 600, 750);

	ground1= new Ground(400, 690, 800, 20);

	stone1 = new Stone(100, 500, 40);

	mango1= new Mango(510, 300, 30);
	mango2= new Mango(430, 250, 30);
	mango3= new Mango(600, 280, 30);
	mango4= new Mango(560, 170, 30);
	mango5= new Mango(570, 90, 30);
	mango6= new Mango(500, 180, 30);
	mango7= new Mango(710, 160, 30);
	mango8= new Mango(670, 220, 30);
	mango9= new Mango(750, 300, 30);
	mango10= new Mango(740, 230, 30);
	mango11= new Mango(660, 110, 30);

	rope1= new Launcher(stone1.body,{x:140, y:500})

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(rgb (248,213,104));

  image(boyImage, 100, 420, 250, 350);

  textSize(35)
  fill("black");
  text("X:"+ mouseX+" Y:"+mouseY, 50, 80);
  tree1.display();
  ground1.display();
  stone1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  rope1.display();
  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(stone1.body,{x:mouseX, y:mouseY})
}

function mouseReleased(){
  rope1.fly();
}