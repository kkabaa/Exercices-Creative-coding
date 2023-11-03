var width = 800;
var height = 800;
var context;
var lineX = 5;
var colY = 5;
var circles = [];

var artefacts = [];

function createCanvas(w, h) {
  var canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  context = canvas.getContext("2d");
  document.body.appendChild(canvas);
}

function draw() {
  context.clearRect(0, 0, width, height);
  for (let i = 0; i < artefacts.length; i++) {
    var artefact = artefacts[i];
    //circle.draw(context);
    artefact.draw(context);
  }
  requestAnimationFrame(draw);
}
function setup() {
  console.log("setup");
  createCanvas(width, height);

  document.addEventListener("click", mousePressed);

  // INITIALISATION DES CERCLES
  for (let j = 1; j < lineX; j++) {
    for (let i = 1; i < colY; i++) {
      var gridX = width / lineX;
      var gridY = height / colY;
      var r = gridX / 2;
      var Artefact = new artefact(i * gridX, j * gridY, r, "red");
      artefacts.push(Artefact);
    }
  }
  draw();
}
function mousePressed(informations) {
  console.log("mousePressed");
  console.log("x: ", informations.x, "y: ", informations.y);

  artefacts.forEach((element) => {
    if (element.isInMe(informations.x, informations.y)) {
      element.changeRotation();
      element.changeColor();
    }
  });
}

window.onload = function () {
  console.log("on est pret");
  setup();
};
