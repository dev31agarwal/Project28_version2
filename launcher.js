class Launcher{
    constructor(x, y){

        var options= {
            bodyA:x,
            pointB:y,
            stiffness: 0.04,
            length: 10

        }
        this.body= Matter.Constraint.create(options);
        World.add(world, this.body);
    }

    fly(){
        this.body.bodyA=null;
    }
    display(){
        if(this.body.bodyA!=null){
            var pointA=this.body.bodyA.position;
            var pointB=this.body.pointB;
            strokeWeight(5);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }

    //    if(this.body.bodyA===null){
      //      Matter.Body.applyForce(stone1.body, stone1.body.position, {x:100, y:-100});
        //}
    }
}