var player;
var opp1,opp2;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);

	//Create the Bodies Here.

player = new Pcclass(600,350);

opp1 = new Npcclass();
opp2 = new Npcclass();

}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



