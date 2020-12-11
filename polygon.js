class Polygon  {
    constructor(x,y,w,h){
      var options = {
        isStatic: false,
        restitution :0,
        friction :1,
        density : 1.2
  
    }
          this.body = Bodies.rectangle(x, y, w, h, options);
          this.width = w;
          this.height = h;
        
          World.add(world, this.body);
      this.image = loadImage("polygon.png");
      //Matter.Body.setMass(this.body,this.body.mass*6);
      //this.body.frictionAir = 0.001;
    }
  
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
       imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      
      pop();
    }
   
  }