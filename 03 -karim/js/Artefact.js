// la définition de la classe Circle c'est comme définir une function mais sans les parenthèses
// la fonction par défaul est le constructor
// on peut passer des paramètres au constructor
// dans une class on n'écrit pas "function" pour TOUTES les fonctions
// une variable globale de class s'écrit avec "this."
class artefact{
  constructor(x,y,r,color){
  this.x=x;
  this.y=y;
  this.r=r;
  this.rotation = Math.PI/2;
  this.color=color;
  }
  
  changeColor(){
    this.color = `rgb(${Math.random() * 255},${Math.random() * 255},${
      Math.random() * 255
    })`;
  }

   isInMe(mouseX, mouseY) {
    let d = this.dist(mouseX, mouseY, this.x, this.y);
    // Utilisez this.r pour le rayon, pas this.rayon
    if (d < this.r) {
      return true;
    } else {
      return false;
    }
  }

  draw(context) {
    // Pour préparer la rotation
    context.save();
    // On translate le contexte au centre du cercle
    context.translate(this.x, this.y);
    // On fait la rotation
    context.rotate(this.rotation);
    // On dessine le quart de cercle
    context.fillStyle = this.color;
    context.beginPath();
    

    
// dessine le premier quart de cercle
 context.beginPath();
 context.arc(0, 0, this.r, 0, Math.PI / 2);
 context.lineTo(0, 0);
 context.closePath();
 context.fill();

 // dessine le deuxième quart de cercle
 context.beginPath();
 context.arc(0, 0, this.r, Math.PI, Math.PI * 1.5);
 context.lineTo(0, 0);
 context.closePath();
 context.fill();
 // Restaure les transformations précédentes
 context.restore();
  }

  dist(x1, y1, x2, y2) {
    // calcule la distance entre deux points
    // pythagore power
    let d = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    return d;
  }

  changeRotation(){
    this.rotation+=Math.PI/4;
  }


}