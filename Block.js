class Block {
    constructor(x,y) {
      var options = {
          isStatic: false

      }
      this.body = Bodies.rectangle(x,y,40,60,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      rect(pos.x, pos.y, 40, 60);
    }
  }