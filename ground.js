class Ground{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        //this.image=loadImage("images/ground.png")
        this.x=x
        this.y=y
        this.width=width
        this.height=height
        World.add(world,this.body)
       
    }
    display(){
        var pos=this.body.position
        rectMode(CENTER)
        stroke ("chocolate")
        fill ("chocolate")
        rect(pos.x,pos.y,this.width,this.height)
    }
}