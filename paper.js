class Paper {
    constructor(x,y,radius) {
      var options = {
          restitution:0,
          friction:1,
          density:1
      }
      this.radius = radius;

      this.body = Bodies.circle(x,y,70,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle=this.body.angle;
      push()
      translate(pos.x,pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      fill("pink");
      ellipse(0,0, this.radius,this.radius);
      pop()
    }
  };