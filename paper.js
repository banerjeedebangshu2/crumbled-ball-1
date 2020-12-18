class paper {
    constructor(x,y,radius)
    {
        var options= {
            'restitution':0.3,
            'friction':0.5,
            'density':1.2,
        }
        this.x=x;
        this.y=y;
        this.radius=radius/2;
        this.body=Bodies.circle(x,y,radius/2,options);
        this.image=loadImage("sprites/paper.png");
        World.add(world,this.body);
        }
    display()
    {
            var paperpos=this.body.position;
            push()   
            translate(paperpos.x, paperpos.y) ;
            rotate(this.body.angle);
            ellipseMode(RADIUS); 
            //imageMode(CENTER);   
            strokeWeight(3);
            fill("red");
           // image(this.image,0,0,this.radius,this.radius);
            ellipse(0,0,this.radius,this.radius);
           
            pop()
        }
    }
 