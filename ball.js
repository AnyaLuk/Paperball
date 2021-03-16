class Ball {
    constructor(x, y, width, height) {
      var options = {
        isStatic: false,
        'restitution':0.3,
        'friction':0.5,
        'density':1.2,
      }
      this.body = Bodies.circle(200, 100,20, options);
      this.image = loadImage("paper.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      fill("lightGray")
      stroke("lightGray")
      ellipse(0, 0, this.width, this.height);
      pop();

      imageMode(CENTER)
      image(this.image,pos.x, pos.y,75,70)
    }
  };