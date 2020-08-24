class Sling{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            if(this.sling.bodyA.position.x < 220){
                strokeWeight(4);
                line(180,50,this.sling.bodyA.position.x-30,this.sling.bodyA.position.y-5);
            }
            else{
                strokeWeight(4);
                line(180,50,this.sling.bodyA.position.x+30,this.sling.bodyA.position.y-5);
            }
        }
    }
    
}