let e = 1;
let randomHeight2 = 0;
let randomHeight = 0;
let LatestRandom2 = 0;
let LatestRandom = 0;
let CumulativeRandom = 0;
let CumulativeRandom2 = 0;
function setup() {
  createCanvas(1000, 1000);

  for (let i = 0; i < 10; i++) {
    randomHeight2 = random(30, 90);
    randomHeight = random(25, 75);
    if (e % 2 == 0) {
      fill(255);
    } else {
      fill(0);
    }
    rect(0, CumulativeRandom, width / 2, randomHeight);
    rect(width / 2, CumulativeRandom2, width, randomHeight2);
    LatestRandom = randomHeight;
    LatestRandom2 = randomHeight2;
    CumulativeRandom += LatestRandom;
    CumulativeRandom2 += LatestRandom2;
    if (CumulativeRandom >= 400) {
      CumulativeRandom = 400;
    }
    if (CumulativeRandom2 >= 400) e++;
  }
}

function draw() {}
