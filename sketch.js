var A =23
console.log(A);
//--23
//Number

var B = ("Aishwarya")
console.log(B)
//--Aishwarya
//String : anything between :"" is a string , for eg : "23", "hello5" "2+3"

var C = true
console.log(C)
//-true
//Boolean :false/true

var d;
console.log(d);
//-undefined
//Undefined

var d = null;
console.log(d)
//-null
//Null

//5 daa type : numbers, strings, booleans, null, undefined
//data structures : arrays, variable

var e = [1,34,4]
console.log(e)
//[1,34,4]
console.log(e.length)//3
console.log(e[2])//4

var f = ["aishwarya", "arrays",21, true ]
console.log(f.length)//4
console.log(f[2])//21

var g = [ [21,22], ["aishwarya", "arrays",21, true],[null,false]]
console.log(g.length)//3
console.log(g[1])//["aishwarya", "arrays",21, true]
console.log(g[1][1])//arrays

var f = ["aishwarya", "arrays",21, true ]
f.push("Coding");
console.log(f)
f.pop();
console.log(f)

//p =[x1,y1]..
//t=[]
//t=[p1,p2,p3..]

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;


function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
      //  slingshot.attach(bird.body);
    }
}