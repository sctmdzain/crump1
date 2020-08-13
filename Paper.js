class Paper{
    constructor(){
        var opt={
            isStatic:false,
            restitution:0.6, 
            friction:0.5,
            density:1.2,

            
        }
        this.body=Bodies.circle(900,500,20,opt);
        World.add(world,this.body)

    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        angleMode(RADIANS);
        rotate(this.body.angle);
        ellipseMode(RADIUS);
        fill("skyblue")
        ellipse(0,0,17,17);
        pop();
    }
}