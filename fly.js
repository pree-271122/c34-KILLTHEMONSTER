class Fly{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.004,
            length:10
        }
        this.pointB=pointB
        this.body=Constraint.create(options)
        World.add(world,this.body)
    }
    attach(body){
        this.body.bodyA = body;
    }
    
    fly(){
        this.body.bodyA = null;
    }
    display(){
        if(this.body.bodyA){
        var pa=this.body.bodyA.position
        var pb=this.pointB
        strokeWeight (5)
        stroke ("chocolate")
        //line(pa.x,pa.y,pb.x,pb.y)
    }
}
}