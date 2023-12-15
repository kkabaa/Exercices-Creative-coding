class App {
  constructor() {
    this.setup();
  }

  setup() {
    this.height = window.innerHeight;
    this.width = window.innerWidth;
    this.canvas = document.createElement("canvas");
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.ctx = this.canvas.getContext("2d");
    document.body.appendChild(this.canvas);

    //this.circle = new Circle(100, 100, 50, this.ctx);
    //this.triangle = new Triangle(100, 100, 50, this.ctx);

    this.allCircles = [];
    this.allTriangles = [];
    this.allTexts=[];
    for (let i = 0; i < 1024; i++) {
      this.allTexts.push(
        new Text(i * 2, window.innerHeight / 2, this.ctx)
      )
      this.allCircles.push(
        new Circle(i * 2, window.innerHeight / 2, 5, this.ctx)
      )
      this.allTriangles.push(
        /**
         * A CHOIX : utiliser un cercle ou un texte
         */
        //new Text(i * 2, window.innerHeight / 2, this.ctx)
         new Triangle(i * 8, window.innerHeight / 2, 10, this.ctx)
      );
    }

    this.audioTool = new AudioTool();

    document.addEventListener("click", (e) => {
      this.audioTool.play(e);
    });

    this.draw();
  }

  draw() {
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, this.width, this.height);
     this.allCircles.forEach((circle) => {
      circle.draw();
    });
    this.allTexts.forEach((texts) => {
      texts.draw();
    });
    this.allTriangles.forEach((triangle) => {
      triangle.draw();
    });
    /**
     *  A CHOIX : analyser un des 3 types de data
     */
    this.audioTool.updateWaveForm();
    //this.audioTool.updateFrequency();
    //this.audioTool.updatedFloatFrequency();

    /**
     *  A CHOIX : récupérer un des 3 types de tableau
     */
    const data = this.audioTool.dataWave;
    // const data = this.audioTool.dataFrequency;
    //const data = this.audioTool.dataFloatFrequency;

    if (this.audioTool.audioContext) {
      for (let i = 0; i < data.length; i++) {
        /**
         * A CHOIX : modifier la position ou autre parametre
         */
        this.allTexts[i].y = data[i] + window.innerHeight / 2 -400;
        this.allCircles[i].y = data[i] + window.innerHeight / 2 -100  ;
        this.allTriangles[i].y = data[i] + window.innerHeight / 2 +200 ;
        //this.allTriangles[i].x = data[i] + window.innerHeight / 2;
        // console.log(Math.abs(data[i] / 10));
        // this.allCircles[i].fontSize = -data[i] / 5;
      }
    }

    requestAnimationFrame(this.draw.bind(this));
  }
}

window.onload = function () {
  const app = new App();
  //   console.log(app);
};
