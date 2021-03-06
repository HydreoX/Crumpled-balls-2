class Paper{
    constructor(x,y,radius){
        var options = {
            'restitution':0.5,
            'friction':0.3,
            'density':1.0
        }
    this.body = Bodies.circle(x,y,radius,options);
    this.radius = radius
    this.image = loadImage("paper.png")
    World.add(world,this.body)
    }

    display(){

    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    ellipseMode(CENTER);
    fill("yellow");
    image(this.image,0,0,this.radius,this.radius)
    
    pop();
}
}