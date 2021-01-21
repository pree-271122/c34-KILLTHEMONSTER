class Box{
    constructor(x,y,w,h){
        var options={
            isStatic:false,
            restitution:0.9,
            friction:1,
            density:0.04
        }
        this.body=Bodies.rectangle(x,y,w,h,options)
        this.image=loadImage("images/box3.png")
        this.x=x
        this.y=y
        this.width=w
        this.height=h
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        push ()
        translate (pos.x,pos.y)
        rotate (this.body.angle)
        imageMode(CENTER)
        fill ("lawngreen")
        image(this.image,0,0,this.width,this.height)
        pop ()
    }
}