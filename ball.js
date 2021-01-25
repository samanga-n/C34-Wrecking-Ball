class ball {
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.05,
            density:1
        }
        this.r=r;
        this.x=x;
        this.y=y;
        this.body=Bodies.circle(x,y,r,options);
        
        
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        
        push();
        translate(pos.x,pos.y);
      
        ellipseMode(RADIUS);      
        fill('green');
        ellipse(0,0,this.r,this.r); // if in ellipseMode(CENTER), either change this.r given here
        pop();                      // to this.r*2 OR   in 12th line change it to r/2
    }
}