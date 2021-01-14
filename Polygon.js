class Polygon
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2
            }
            
        this.polygon = loadImage("polygon.png");
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(50,200,20, options)
		World.add(world, this.body);

	}
	display()
	{
            var polypos=this.body.position;
            
			push();
			translate(polypos.x, polypos.y);
			imageMode(CENTER);
            image(polygon_img,polypos.x,polypos.y,40,40);
            pop();
			
	}

}