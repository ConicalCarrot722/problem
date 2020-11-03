class Sling{
constructer(bodyA,bodyB){
    var options={

bodyA:bodyA,bodyB:bodyB,length:30,stiffness:0.75
    }
    this.chain=Matter.Constraint.create(options)
    World.add(world,this.chain)

}
display(){
strokeWeight(4)
var pointA=this.chain.bodyA.position;
var pointB=this.chain.bodyB.position
line(pointA.x,pointA.y,pointB.x,pointB.y)
}
}