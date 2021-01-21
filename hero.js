class Hero{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0.01,
            friction:1
        }
        this.body=Bodies.circle(x,y,r,options)
        this.image=loadImage("images/hero.png")
        this.x=x
        this.y=y
        this.r=r
        
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
       
        imageMode(CENTER)
        fill ("lawngreen")
        image(this.image,pos.x,pos.y,this.r,this.r)
    }
}