class Support{
    constructor(x,y,width,height){
        var options = {
            isStatic :true,
            friction :2.0
        }
        this.body=Matter.Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("blue");
        rect(pos.x,pos.y,this.width,this.height);
    }
}