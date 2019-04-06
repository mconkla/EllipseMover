
class Bird{


	constructor(x, y, r){
		this.body = Matter.Bodies.circle(x,y,r);
		Matter.World.add(world,this.body);
		this.r = r;
		Matter.Body.setMass(this.body, 5);
		//Matter.Body.setDensity(this.body, 300);
	}

	show(){

		var pos = this.body.position;
		var angle = this.body.angle;

		push();
		translate(pos.x,pos.y);
		rotate(angle);
		fill(255);
		rectMode(CENTER);
		circle(0,0,this.r);
		pop();
		
	}


	



}