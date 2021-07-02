const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var stand,stand2;
var polygon, score;
var slingshot;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16;
var box17, box18, box19, box20, box21, box22, box23, box24, box25, box26;
var polygonImage;
//var sbox1, sbox2, sbox3, sbox4, sbox5, sbox6, sbox7, sbox8, sbox9;

score = 0;


function preload()
{
	polygonImage=loadImage("polygon.png");
}

function setup(){

    var canvas=createCanvas(1300,600);
    engine = Engine.create();
      world = engine.world;
	  Engine.run(engine);
   // createSprite(400, 200, 50, 50);
  
    ground = new Ground(650,500,1300,20);
    stand = new Stand(390, 300,300,10);
   stand2 = new Stand(700,200,300,10);


    //level one
  box1 = new Box(300,275,30,40);
  box2 = new Box(330,275,30,40);
  box3 = new Box(360,275,30,40);
  box4 = new Box(390,275,30,40);
  box5 = new Box(420,275,30,40);
  box6 = new Box(450,275,30,40);
  box7 = new Box(480,275,30,40);
  //level two
  box8 = new Box(330,235,30,40);
  box9 = new Box(360,235,30,40);
  box10 = new Box(390,235,30,40);
  box11 = new Box(420,235,30,40);
  box12 = new Box(450,235,30,40);
  //level three
  box13 = new Box(360,195,30,40);
  box14 = new Box(390,195,30,40);
  box15 = new Box(420,195,30,40);
  //top
  box16 = new Box(390,155,30,40);

  //set 2 for second stand
  //level one
  box17 = new Box(640,175,30,40);
  box18 = new Box(670,175,30,40);
  box19 = new Box(700,175,30,40);
  box20 = new Box(730,175,30,40);
  box21 = new Box(760,175,30,40);
  //level two
  box22 = new Box(670,135,30,40);
  box23 = new Box(700,135,30,40);
  box24 = new Box(730,135,30,40);
  //top
  box25 = new Box(700,95,30,40);

    /*box1= new Box(800,450,30,30);
    box2= new Box(770,450,30,30);
    box3= new Box(740,450,30,30);
    box4= new Box(710,450,30,30);
    box5= new Box(830,450,30,30);
    box6= new Box(860,450,30,30);
    box7= new Box(890,450,30,30);
    
    box8= new Box(800,420,30,30);
    box9= new Box(770,420,30,30);
    box10= new Box(740,420,30,30);
    box11= new Box(830,420,30,30);
    box12= new Box(860,420,30,30);
  
    box13= new Box(800,390,30,30);
    box14= new Box(770,390,30,30);
    box15= new Box(830,390,30,30);
  
    box16= new Box(800,360,30,30);
  
    sbox1= new Box(1000,300,30,30);
    sbox2= new Box(970,300,30,30);
    sbox3= new Box(940,300,30,30);
    sbox4= new Box(1030,300,30,30);
    sbox5= new Box(1060,300,30,30);
  
    sbox6= new Box(1000,270,30,30);
    sbox7= new Box(970,270,30,30);
    sbox8= new Box(1030,270,30,30);
  
    sbox9= new Box(1000,240,30,30);
    */
    polygon= Bodies.circle(50,200,10);
  World.add(world,polygon);

  slingshot= new SlingShot(this.polygon,{x:100,y:200});
 

/*  var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1300,
		  height: 600,
		  wireframes: false
		}
	  });*/

    
}

function draw() {
  background(255,255,255);  
  text("score : "+score,750,40);

  
	ground.display();

	stand.display();
	stand2.display();

	fill("skyblue");
	box1.display();
	box2.display();
	box3.display();
	box4.display();
	box5.display();
	box6.display();
	box7.display();
	fill("pink");
	box8.display();
	box9.display();
	box10.display();
	box11.display();
	box12.display();
	fill("turquoise");
	box13.display();
	box14.display();
	box15.display();
	fill("grey");
	box16.display();
	fill("skyblue");
	box17.display();
	box18.display();
	box19.display();
	box20.display();
	box21.display();
	fill("turquoise");
	box22.display();
	box23.display();
	box24.display();
	fill("pink")
	box25.display();
	fill("gold");

	imageMode(CENTER)
	image(polygonImage,polygon.position.x,polygon.position.y,40,40);

	slingshot.display();
	



}


function mouseDragged()
{
	Matter.Body.setPosition(this.polygon,{x:mouseX, y:mouseY});
}

function mouseReleased(){
    slingshot.fly();
}






