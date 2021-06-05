class Slingshot {
constructor(mybodyA,pointB){
var options = {
bodyA:mybodyA,
pointB:pointB,
stiffness:0.04,
length:10,
}
this.pointB = pointB
this.Slingshot = Constraint.create(options)
World.add(world,this.Slingshot);
}

fly(){
this.Slingshot.bodyA = null;


}

display(){
if(this.Slingshot.bodyA){
var pointA = this.Slingshot.bodyA.position
var pointB = this.pointB
strokeWeight(3)
line(pointA.x,pointA.y,pointB.x,pointB.y)
}


}






}





