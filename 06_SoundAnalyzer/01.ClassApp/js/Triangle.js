class Triangle{
    constructor(x,y,size,ctx){
      this.x=x;
      this.y=y;
      this.size=size;
      this.ctx=ctx;
      this.color='white';
    }
     draw(){
        this.ctx.fillStyle=this.color;
      this.ctx.beginPath();
      this.ctx.moveTo(this.x,this.y);
      this.ctx.lineTo(this.x+this.size,this.y);
      this.ctx.lineTo(this.x+this.size/2,this.y-this.size);
      this.ctx.fill();
      this.ctx.closePath();
     }
  }