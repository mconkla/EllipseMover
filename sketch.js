
const{ 
	Engine,
	World,
	Bodies,
	Mouse,
	MouseConstraint,
	Constraint
} = Matter;


let bird;
let world,engine;


function setup() {
	const canvas = createCanvas(600,400);

	engine = Engine.create();
	world = engine.world;
	bird = new Bird(100,300,12);
}



function draw() {


	background(0);
	Matter.Engine.update(engine);
	bird.show();

	if(keyIsDown(65)){
		bird.body.position.x -= 0.3;
	}
	if(keyIsDown(68)){
		bird.body.position.x += 0.3;
	}
	if(keyIsDown(87)){
		bird.body.position.y -= 0.5;
	}

	if(bird.body.position.y > height){

		bird.body.position.y = height;

	}
	if(bird.body.position.x > width){

		bird.body.position.x = width;

	}
	if(bird.body.position.x < 0){

		bird.body.position.x = 0;

	}

}




function mouseReleased(){


}
