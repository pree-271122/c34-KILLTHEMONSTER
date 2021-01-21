class Monster2{
    constructor(x,y,w,h){
        var options={
            isStatic:true,
            restitution:0.9,
            friction:1,
            density:0.04
        }
        this.body=Bodies.rectangle(x,y,w,h,options)
        this.image=loadImage("images/Monster-01.png")
        this.x=x
        this.y=y
        this.width=w
        this.height=h
        World.add(world,this.body)
    }
    display(){
        if(this.body.speed < 2){
            var pos=this.body.position
            push ()
            translate (pos.x,pos.y)
            rotate (this.body.angle)
            imageMode(CENTER)
            fill ("lawngreen")
            image(this.image,0,0,this.width,this.height)
            pop ()
           }
           else{
             World.remove(world, this.body);
             push();
             this.Visiblity = this.Visiblity - 5;
             tint(255,this.Visiblity);
             image(this.image, this.body.position.x, this.body.position.y,this.width,this.height);
             pop();
           }
           
         }
    }
