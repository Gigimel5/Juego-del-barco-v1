
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let motor;
let mundo;
var pelota;
var roca;
var suelo;


function setup() {
  createCanvas(400,400);

  motor = Engine.create();
  mundo = motor.world;
  
  var opciones_suelo ={
    isStatic:true //quieto
  }
  suelo = Bodies.rectangle(200,385,400,20,opciones_suelo);
  World.add(mundo,suelo);

  var opciones_pelota ={
    restitution: 2

  }
  pelota = Bodies.circle(100,10,20,opciones_pelota);
  World.add(mundo,pelota);
  
  var opciones_roca={
    restitution: 0.01


  }
  roca = Bodies.circle(260,10,20,opciones_roca);
  World.add(mundo,roca);

  rectMode(CENTER);
  ellipseMode(RADIUS);

  console.log(pelota)//Caracteristicas en consola
}


function draw() 
{
  background(51);
  Engine.update(motor);
  
  
  rect(suelo.position.x,suelo.position.y,400,20);
  ellipse(pelota.position.x,pelota.position.y,20);
  ellipse(roca.position.x,roca.position.y,20);
}

