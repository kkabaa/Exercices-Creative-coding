// largeur totale de l'écran
var width = window.innerWidth;
// hauteur totale de l'écran
var height = window.innerHeight;
// contexte 2D
var context;
// image fixed
var image = null;
// largeur et hauteur par default de l'image ou de la video
var largeur = window.innerWidth;
var hauteur = window.innerHeight;
//var largeur = 1000;
//var hauteur = 1000;
// tableau pour stocker la grille de cercles
var grille = [];
var grille1=[];
var grille2 = [];
var grille3 = [];
// variable pour stocker les pixels de l'image video
var video = null;
// une variable pour définir si on utilise la webcam ou l'image fixe
var webcam = true;

// fonction pour créer un canvas
function createCanvas(w, h) {
  var canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  context = canvas.getContext("2d");
  document.body.appendChild(canvas);
}

function setup() {
  console.log("setup");
  createCanvas(width, height);
  // on active la gestion de la souris
  document.addEventListener("mousedown", mousePressed);

  // pour l'exemple avec la webcam , on initialise la caméra
  if (webcam) {
    initialiserCamera();
  } else {
    // pour l'exemple avec l'image fixe
    image = new Image();
    // on attend que l'image soit chargée avant de l'afficher
    image.onload = () => {
      //on peut récupèrer la largeur et la hauteur de l'image
      largeur = image.width;
      hauteur = image.height;
    };
    // on définit la source de l'image
    image.src = "image/andy.jpg";
  }
  //on créé une grille de cercles
  // pour une grille de 1000x1000
  for (let j = 0; j < hauteur; j += 30) {
    for (let i = 0; i < largeur; i += 30) {
      let circle = new Circle(map(i, 0, width, 0, width/2), map(j, 0, height, 0, height/2), 10, context);
      let circle1 = new Circle(map(i, 0, width, width/2, width), map(j, 0, height, 0, height/2), 10, context);
      let circle2 = new Circle(map(i, 0, width, 0, width/2), map(j, 0, height, height/2, height), 10, context);
      let circle3 = new Circle(map(i, 0, width, width/2, width), map(j, 0, height, height/2, height), 10, context);
      
      // on affecte un angle incrémenteal à chaque cercle
      circle.angle = i * 0.2;
      circle1.angle = i * 0.2;
      circle2.angle = i * -0.2;
      circle3.angle = i * -0.2;
      // on stock le cercle dans le tableau
      grille.push(circle);
      grille1.push(circle1);
      grille2.push(circle2);
      grille3.push(circle3);
    }
  }
  draw();
}

function draw() {
  // on analyse les pixels de l'image
  detectPixels();
  //on efface tout l'écran en noir
  context.fillStyle = "black";
  context.fillRect(0, 0, width, height);
  // on dessine les cercles
  grille.forEach((circle, i) => {
    circle.draw();
    // le mouvment de chaque cercle est géré dans la fonction draw de la class Circle
  });
  grille1.forEach((circle, i) => {
    circle.draw();
    // le mouvment de chaque cercle est géré dans la fonction draw de la class Circle
  });
  grille2.forEach((circle, i) => {
    circle.draw();
    // le mouvment de chaque cercle est géré dans la fonction draw de la class Circle
  });
  grille3.forEach((circle, i) => {
    circle.draw();
    // le mouvment de chaque cercle est géré dans la fonction draw de la class Circle
  });

  requestAnimationFrame(draw);
}

function detectPixels() {
  // on prépare une variable pour stocker les pixels
  let pixels = null;
  // on dessine l'image dans le contexte
  // attention si on veut l'image static, il faut remplacer video par image
  if (webcam) {
    context.drawImage(video, 0, 0);
  } else {
    context.drawImage(image, 0, 0);
  }
  // on récupère les pixels de l'image
  pixels = context.getImageData(0, 0, largeur, hauteur);

  // on parcours tous les cercles
  grille.forEach((circle, i) => {
    //récupérer la couleur du pixel par l'index
    let index = (circle.origin.y * largeur + circle.origin.x) * 4;
    // on récupère les valeurs de rouge, vert et bleu
    let r = pixels.data[index];
    let g = pixels.data[index + 1];
    let b = pixels.data[index + 2];
    // on calcule l'intensité de la couleur
    //let intensity = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    let intensity = 0.3*r + 0.6*g + 0.02*b;
    // circle.changeColor(r, g, b);
    // on change le rayon du cercle en fonction de l'intensité (pourcentage de 0 à 1)
    circle.changeRadius(intensity / 255);
    grille1[i].changeRadius(intensity / 255);
    grille2[i].changeRadius(intensity / 255);
    grille3[i].changeRadius(intensity / 255);
    //circle.changeColor(r,g,b);
  });


}

function initialiserCamera() {
  video = document.createElement("video");
  navigator.getMedia =
    navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia;

  navigator.getMedia(
    {
      video: { width: largeur, height: hauteur },
      audio: false,
    },
    (stream) => {
      video.srcObject = stream;
      video.play();
    },
    (error) => {
      console.log(error);
    }
  );
}

function mousePressed(e) {
  let color = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
  grille.forEach((circle, i) => {
    circle.changeColor(color);
    // le mouvment de chaque cercle est géré dans la fonction draw de la class Circle
  });
   color = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
  grille1.forEach((circle, i) => {
    circle.changeColor(color);
    // le mouvment de chaque cercle est géré dans la fonction draw de la class Circle
  });
  color = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
  grille2.forEach((circle, i) => {
    circle.changeColor(color);
    // le mouvment de chaque cercle est géré dans la fonction draw de la class Circle
  });
  color = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
  grille3.forEach((circle, i) => {
    circle.changeColor(color);
    // le mouvment de chaque cercle est géré dans la fonction draw de la class Circle
  });
  
}

window.onload = function () {
  console.log("on est pret");
  setup();
};

function map(x,min1,max1,min2,max2){
  return min2+(max2-min2)*((x-min1)/(max1-min1))
}