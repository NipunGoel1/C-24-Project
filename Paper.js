class Paper{
    constructor(x,y,radius){
        var options = {
         isStatic:false,
         restitution:0.3,
         friction:0.5,
         density:3.2,
         gravity:10
        }
        this.body = Matter.Bodies.circle(x,y,radius,options)
        this.radius = radius;
        

        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y)
        rectMode(CENTER)
        circle(0,0,this.radius)
        pop();
    }
}