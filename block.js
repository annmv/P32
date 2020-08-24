class Block {
    
    constructor(x,y,w,h){

        var options = {
        restitution:1, 
        friction:1,
        density:1
    }
    
this.body = Bodies.rectangle(x,y,w,h,options);
this.width = w;
this.height = h;
World.add(world,this.body);
this.visiblity = 255;
    }
  
    display(){
    if(this.body.speed < 3){
         super.display();
    }
    else{
    World.remove(world,this.body);
    this.visibility = this.visibility -5;
    block1.score(); 
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    push();
    tint(255,this.visibility);
    translate (this.body.position.x,this.body.position.y);
    rotate (this.body.angle);
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    pop();   
    }
}
function score(){
    if(this.visibility<0 && this.visibility>-105){
      score++;
    }
  }