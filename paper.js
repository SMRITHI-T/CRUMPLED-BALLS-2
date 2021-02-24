class Paper {
    constructor(x,y,radius) {
      var options = {
          restitution:0,
          friction:1,
          density:1
      }
      this.radius = radius;

      this.body = Bodies.circle(x,y,this.radius/2,options);
      World.add(world, this.body);
      this.paperImg=loadImage("paper.png");
    }
    display(){
      var pos =this.body.position;
      var angle=this.body.angle;
      push()
      translate(pos.x,pos.y);
      rotate(angle);
      imageMode(CENTER);
      fill("pink");
      image(this.paperImg,0,0, this.radius,this.radius);
      pop()
    }
  };