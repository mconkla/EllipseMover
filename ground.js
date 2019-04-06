class Ground extends Box{
	constructor(x,y,w,h){
		super(x,y,w,h);
		Matter.Body.setStatic(this.body, true);


	}

	
	

}