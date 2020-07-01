class TrashCan{
    constructor(x,y,width,height){
        var options = {
         isStatic:true,
         friction:0.5,
         density:1
        }
        this.body = Matter.Bodies.rectangle(x,y,width,height,options)
        this.width = width;
        this.height = height;

        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y)
        rectMode(CENTER)
        fill(255);
        rect(0,0,this.width,this.height)
        pop();
    }
}