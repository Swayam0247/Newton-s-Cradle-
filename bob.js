class Bob {
    constructor(x, y) {
      var options = {
         
          restitution:1,
          friction:0,
          density:0.8
      }
      this.body = Bodies.circle(x,y,40,options);
      this.width = width;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      ellipseMode(RADIUS);
      ellipse(0,0,40,40);
      fill("pink");
      pop();
    }
  }