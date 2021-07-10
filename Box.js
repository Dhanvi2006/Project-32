class Box {
    constructor(x,y) {
      var options = {
          isStatic: false,

      }
      this.body = Bodies.rectangle(x,y,20,40,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("lightblue");
      rect(pos.x, pos.y,20, 40);
    }
  }