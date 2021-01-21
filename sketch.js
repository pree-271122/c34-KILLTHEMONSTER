const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;
var engine,world;
function preload() {
bg=loadImage("images/bg.png")
mon=loadImage("images/Monster-02.png")
}

function setup() {
  createCanvas(1200, 650);
  engine = Engine.create();
  world = engine.world;
  ground=new Ground(600,640,1200,20)
  box1 = new Box(1100, 100, 100, 100);
  box2 = new Box(1100, 100, 100, 100);
  box3 = new Box(1100, 100, 100, 100);
  box4 = new Box(1100, 100, 100, 100);
  box5 = new Box(1100, 100, 100, 100);
  //box6 = new Box(1100, 100, 100, 100);
  box7 = new Box(800, 100, 70, 70);
  box8 = new Box(800, 100, 70, 70);
  box9 = new Box(800, 100, 70, 70);
  box10 = new Box(800, 100, 70, 70);
  box11 = new Box(800, 100, 70, 70);
  box12 = new Box(800, 100, 70, 70);
  box13 = new Box(500, 100, 70, 70);
  box14 = new Box(500, 100, 70, 70);
  box15 = new Box(500, 100, 70, 70);
  box16 = new Box(500, 100, 70, 70);
  box17 = new Box(500, 100, 70, 70);
  box18 = new Box(500, 100, 70, 70);
  box19 = new Box(500, 100, 70, 70);
  box20 = new Box(500, 100, 70, 70);
  hero=new Hero(200,325,150)
  fly=new Fly(hero.body,{x:200,y:100})
  m1=new Monster1(650,560,150,150)
  m2=new Monster1(950,560,150,150)
  m3=new Monster2(1100,100,180,180)
}

function draw() {
  background("skyblue");
  Engine.update(engine);
  image (bg,400,400,2000,800)
  m1.display()
  m2.display()
  m3.display()
   
  ground.display();
  fly.display();
  hero.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display()
  box5.display()
  //box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  box15.display()
  box16.display()
  box17.display()
  box18.display()
  box19.display()
  box20.display()
}

function mouseDragged() {
  Matter.Body.setPosition(hero.body, { x: mouseX, y: mouseY });
}
function mouseReleased(){
  fly.fly();
}

function keyPressed(){
  if(keyCode === 32){
      fly.attach(hero.body);
  }
}
