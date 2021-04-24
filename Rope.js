class Hangingrope{
    constructor(body1, body2,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.Hangingrope = Constraint.create(options);
        World.add(world, this.Hangingrope);
    }

    display(){
        var pointA = this.Slingshot.bodyA.position;
        var pointB = this.Slingshot.bodyB.position;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    
}
