class Plinko{
    constructor(x,y){
        var settings={
            'isStatic':true
        }
        this.body=Bodies.circle(x,y,10,settings)
        this.rad=20
        World.add(world,this.body)
    }
    Display(){
        var pos=this.body.position
        var ang=this.body.angle
        push()
        fill("white")
        translate(pos.x,pos.y)
        rotate(ang)
        ellipseMode(CENTER)
        ellipse(0,0,this.rad,this.rad)
        pop()
        //console.log(this.body)
    }
}