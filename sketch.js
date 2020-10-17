const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var Plinkos=[]
var Particle=[]
function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(480,800);
  //createSprite(400, 200, 50, 50);
for(var i=50;i<=width;i=i+50){
  Plinkos.push(new Plinko(i,150))
}
for(var i=25;i<=width;i=i+50){
  Plinkos.push(new Plinko(i,250))
}
for(var i=50;i<=width;i=i+50){
  Plinkos.push(new Plinko(i,350))
}
for(var i=25;i<=width;i=i+50){
  Plinkos.push(new Plinko(i,450))
}
/*
for(var i=5;i<=width;i=i+50){
  Particle.push(new Particles(i,50))
}
for(var i=5;i<=width;i=i+50){
  Particle.push(new Particles(i,20))
}
for(var i=10;i<=width;i=i+50){
  Particle.push(new Particles(i,10))
}
for(var i=5;i<=width;i=i+50){
  Particle.push(new Particles(i,50))
}
for(var i=10;i<=width;i=i+50){
  Particle.push(new Particles(i,0))
}*/

  floor=new Ground(240,780,480,50)
  barrier1=new Barrier(200,700,10,170)
  barrier2=new Barrier(260,700,10,170)
  barrier3=new Barrier(320,700,10,170)
  barrier4=new Barrier(140,700,10,170)
  barrier5=new Barrier(380,700,10,170)
  wall=new Ground(490,800,50,10000)
  wall2=new Ground(0,800,50,10000)
  ball1=new Particles(200,200)
  //peg1=new Plinko (200,200)
}

function draw() {
  background(0);  
  //drawSprites();
  Engine.update(engine);

  floor.Appear()
  barrier1.Appear()
  barrier2.Appear()
  barrier3.Appear()
  barrier4.Appear()
  barrier5.Appear()
  ball1.Display()
  //peg1.Display()
  Plinkos[0].Display()
if(frameCount%60==0){
  Particle.push(new Particles(random(0,480),random(0,50),20,20))
}
for(var i=0;i<Plinkos.length;i++){
  Plinkos[i].Display()
  //console.log(Plinkos)
}
for(var i=0;i<Particle.length;i++){
  Particle[i].Display()
  //console.log(Plinkos)
}
}