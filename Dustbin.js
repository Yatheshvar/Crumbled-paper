class Dustbin {
  constructor(x, y, width, height) {
    var options = {
        isStatic:true
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    strokeWeight(4);
    stroke("white");
    fill("red");
    var pos = this.body.position;
    rectMode(CENTER);
    rect(pos.y, pos.x, this.width, this.height);
    pop();
  }
};
