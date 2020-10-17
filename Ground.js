class Ground{
    constructor(x,y,w,h){
        var settings={
            'isStatic':true
        }
        this.object=Bodies.rectangle(x,y,w,h,settings)
        this.w=w
        this.h=h

        World.add(world,this.object)

    }
    Appear(){
        var loc=this.object.position
        push()
        fill("brown")
        rectMode(CENTER)
        rect(loc.x,loc.y,this.w,this.h)
        pop()
    }
}