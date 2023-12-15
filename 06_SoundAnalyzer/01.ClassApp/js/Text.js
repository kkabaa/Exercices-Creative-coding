class Text {
  constructor(x, y, ctx) {
    this.x = x;
    this.y = y;
    this.ctx = ctx;
    this.fontSize = 25;
    this.letters = "SeeYouAllSeeYouAllSeeYouAllSeeYouAll";
    this.letter = this.letters[Math.floor(Math.random() * this.letters.length)];
  }

  draw() {
    this.ctx.font = `${this.fontSize}px Arial`;
    this.ctx.fillStyle = "white";
    this.ctx.fillText(`${this.letter}`, this.x, this.y);
  }
}
