class Box{
  constructor(x,y,width,height){
    var option = {
      restitution :0.0,
      friction :0.4,
      //isStatic : true
    }
    this.visibility = 225;
    this.body = Bodies.rectangle(x,y,width,height,option);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
    console.log(this.body.speed);
    if(this.body.speed <5){
      var angle = this.body.angle;
      var pos = this.body.position;
      push()
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      stroke("black");
      fill("blue");
      rect(0,0,this.width, this.height);
      pop()

    }else{
      World.remove(world, this.body);
      push();
      this.visibility = this.visibility -5;
      pop()
    }
  }
  score(){
    if(this.visibility<0 && this.visibility >-105){
      score++;
    }
  }
}



/*
class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height,color);
    //this.image = loadImage("wood1.png");
    this.color=color;
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    push();
    //noStroke();
    stroke("black");
    fill("blue");
    rect(pos.x, pos.y, this.width, this.height);
  pop();
  }
};
*/