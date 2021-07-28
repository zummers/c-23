
// why isnt it working?🤔

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;

var PlayerBase
var player

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and C(omputer Base Object
   pBase = new PlayerBase(300,random(450,height-300),180,150);
   p= new Player(285,pBase.body.position.y-153,50,180);

   cBase=new ComputerBase(600,random(450,height-300),180,150);
   cPlayer=new ComputerPlayer(585,cBase.body.position.y-153,50,180);
   

 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   display(PlayerBase);
   display(ComputerBase)

   //display Player and computerplayer
   display(Player);
   display(ComputerPlayer);

}
