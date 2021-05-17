const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var ellipse1;



function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    ellipse1 = new Rubber(500,100,90)
    stone1 = new Stone(300,200,70,50);
    iron1 = new Iron(700,200,100,100)
    


  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    ellipse1.display();
    stone1.display();
    iron1.display();
    

    
 
}