const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var  block3, block4, block5, block6, block7;
var block8, block9, block10 //block11;
var ground, base1, base2;
var slingshot, rock;
var bgImg;

function preload()
{
    getTime();
}

function setup(){
    var canvas = createCanvas(1200,450);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);

    //first set:
    base1 = new Ground(610,350,320,10);
    //bottom row-
    block3 = new BlueBlock(490,315);
    block4 = new BlueBlock(530,315); 
    block5 = new BlueBlock(570,315); 
    block6 = new BlueBlock(610,315); 
    block7 = new BlueBlock(650,315);  
    block8 = new BlueBlock(690,315); 
    block9 = new BlueBlock(730,315);
    //2nd last row-
    block10 = new PinkBlock(530,255); 
    block11 = new PinkBlock(570,255);
    block12 = new PinkBlock(610,255);
    block13 = new PinkBlock(650,255);
    block14 = new PinkBlock(690,255);
    //second row-
    block15 = new YellowBlock(570,195);
    block16 = new YellowBlock(610,195);
    block17 = new YellowBlock(650,195);
    //top block-
    block18 = new Block(610,135);

    //2nd set:
    base2 = new Ground(1000,250,230,10);
    //bottom row-
    block19 = new BlueBlock(920,215);
    block20 = new BlueBlock(960,215);
    block21 = new BlueBlock(1000,215);
    block22 = new BlueBlock(1040,215);
    block23 = new BlueBlock(1080,215);
    block24 = new PinkBlock(960,155);
    block25 = new PinkBlock(1000,155);
    block26 = new PinkBlock(1040,155);
    block27 = new YellowBlock(1000,95);

    rock = new Rock(200,250);

    slingshot = new SlingShot(rock.body,{x:200, y:250});
}



    function draw()
    {
            if(bgImg)
            {
                background(bgImg);
            }
            Engine.update(engine);
            
            base1.display();
            base2.display();
            ground.display();
            block3.display();
            block4.display();
            block5.display();
            block6.display();
            block7.display();
            block8.display();
            block9.display();
            block10.display();
            block11.display();
            block12.display();
            block13.display();
            block14.display();
            block15.display();
            block16.display();
            block17.display();
            block18.display();
            block19.display();
            block20.display();
            block21.display();
            block22.display();
            block23.display();
            block24.display();
            block25.display();
            block26.display();
            block27.display();
            rock.display();
            slingshot.display();
    }
    
    function mouseDragged(){
        Matter.Body.setPosition(rock.body, {x: mouseX , y: mouseY});
    }
    
    
    function mouseReleased(){
        slingshot.fly();
    }

function keyPressed()
{
    if(keyCode===32)
    {
        slingshot.attach(rock.body);
    }
}

async function getTime()
{
    var response = await fetch("http://worldclockapi.com/api/json/est/now");

    var responseJSON = await response.json();

    var time = responseJSON.currentDateTime;

    var hour = time.slice(11,13);
    if(hour <= 06 && hour >= 18 )
    {
        bg = "sprites/bg.png"
    }
    else
    {
        bg = "sprites/bg2.jpg"
    }

    bgImg = loadImage(bg);
}