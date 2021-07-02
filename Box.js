class Box extends BaseClass {
    constructor(x,y,width,height){
      super(x,y,width,height);
      this.Visiblity = 255;
      
     
    }

      display(){
     
    /*  if(this.body.speed < 3){
       super.display();
      }
      else{
        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity);
        //rect(0,0,width,height)
        image(this.image, this.body.position.x, this.body.position.y, 50, 50);
        pop();*/

        if(this.body.speed <3){
          var angle = this.body.angle;
          var pos= this.body.position;
          push();
          translate(pos.x, pos.y);
          rotate(angle);
          rectMode(CENTER);
          rect(0,0,this.width, this.height);
          pop();
        }else{
          World.remove(world, this.body);
          push();
          this.visibility = this.visibility -5;
          pop();

 
      }
      
    }
    
  };
  