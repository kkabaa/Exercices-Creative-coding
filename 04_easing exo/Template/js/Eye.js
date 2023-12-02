class Eye{
    constructor(x,y,r,context){
        this.x=x;
        this.y=y;
        this.r=r;
        this.context=context;
        this.x1=x;
        this.y1=y;
        this.r1=r/4;
        this.color1='white'
        this.color2='black'
        this.bigEye= new Circle (this.x,this.y,this.r,this.context,this.color1)
        this.pupil= new Circle (this.x1,this.y1,this.r1,this.context,this.color2)
        
    }
display(){
    this.bigEye.draw();
    this.pupil.draw();
    
};
update(e){
let d = this.r-this.r1;
let D = this.dist(this.x,this.y,e.x,e.y);
this.x1=this.x+(e.x-this.x)*d/D;
this.y1=this.y+(e.y-this.y)*d/D;


console.log("new pupil x"+this.x1);
this.pupil.changePosition(this.x1, this.y1)
};
dist(x1, y1, x2, y2) {
    // calcule la distance entre deux points
    // pythagore power
    let d = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    return d;
  }
  map(x,min1,max1,min2,max2){
    return min2+(max2-min2)*((x-min1)/(max1-min1))
  }

}