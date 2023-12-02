var a1;
var a2;
var centerX;
var centerY;
var width = window.innerWidth;
var height = window.innerHeight;
var context;
let leftEye;
let rightEye;
let Head;

//var monCercle;

function createCanvas(w, h) {
  var canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  context = canvas.getContext("2d");
  document.body.appendChild(canvas);
}

function draw() {
  // console.log("draw");
  context.clearRect(0, 0, width, height);
  Head.draw();
  leftEye.display();
  rightEye.display();
 
  //monCercle.draw();
  requestAnimationFrame(draw);

}

function setup() {
  console.log("setup");
  createCanvas(width, height);
  //monCercle = new Circle(400, 400, 100, context);
  document.addEventListener("click", mousePressed);
  leftEye = new Eye (width/2-300,height/2,200,context)
  rightEye = new Eye (width/2+300,height/2,200,context)
  Head= new Circle (width/2, height/2, 1000, context, 'red')
  draw();


  
}

function mousePressed(e) {
  console.log("mousePressed", e);
  // monCercle.changeColor();
  //monCercle.definirDestination(e.x, e.y);
  //monCercle.definirRayonAleatoire();
  leftEye.update(e);
  rightEye.update(e);
}

window.onload = function () {
  console.log("on est pret");
  setup();
};
