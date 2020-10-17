class Particles{
    constructor(x,y){
        var settings={
            'restitution':1,
            'density':1.5
        }
        this.body=Bodies.circle(x,y,10,settings)
        this.rad=20
        World.add(world,this.body)
}
Display(){
    var pos=this.body.position
    var ang=this.body.angle
    push()
    fill(rgb(random(0,255),random(0,255),random(0,255)))
    translate(pos.x,pos.y)
    rotate(ang)
    ellipseMode(CENTER)
    ellipse(0,0,this.rad,this.rad)
    pop()
    //console.log(this.body)
}
}
