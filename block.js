class Block {
    constructor(x,y,width,height){
        var options={
            restitution:0.4,
            friction:0.1
        }

        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        angleMode(RADIANS);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(1);
        stroke('black');
        rect(0,0,this.width,this.height);
        pop();
    }
}