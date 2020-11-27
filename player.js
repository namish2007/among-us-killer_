class Player{
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,50,50);
           World.add(world,this.body)
    }
display(){
var pos = this.body.position;
    if(keyDown(UP_ARROW)){
        pos.y = pos.y-10;
     
}
if(keyDown(DOWN_ARROW)){
    pos.y = pos.y+10;
 
}
if(keyDown(LEFT_ARROW)){
    pos.x = pos.x-10;
 
}
if(keyDown(RIGHT_ARROW)){
    pos.x = pos.x+10;
 
}


rect(pos.x,pos.y,this.width,this.height);

}




}