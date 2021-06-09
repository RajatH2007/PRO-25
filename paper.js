class paper{
	constructor(x,y,r){
	
		var options={
		   isStatic = true,	
           restitution:0.3,
		   friction:0,
		   density:1.2
		}
        
		this.r = r;
		this.image = loadImage("paper.png");
		this.body=Bodies.circle(x, y, 20, options);
        
		World.add(world, this.body);

	}

	display(){
		var pos=this.body.position;		
		push();

		translate(pos.x, pos.y);
		ellipseMode(CENTER);
        ellipse(0,0,this.r);
		pop();
	}

}