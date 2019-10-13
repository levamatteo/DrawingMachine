// let noiseOffset = 0.0
let strokeWidth = 4
let img;
let array = [];

function preload() {
  img = loadImage('images/s.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(img);
  // image(img, 0, 0, 600, 600);
  noFill();

}

function draw() {




  // noiseOffset += 0.01
  // strokeWidth = noise(noiseOffset) * 100

  if (mouseIsPressed) {
    //stroke(map(mouseX, 0, 600, 0, 210, true))
    // line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
    strokeWeight(25)
    stroke(0, 75, 145, 15);
    line(mouseX, mouseY, pmouseX, pmouseY);
    strokeWeight(15)
    stroke(109, 161, 209, 15);
    line(mouseX, mouseY, pmouseX, pmouseY);
    strokeWeight(strokeWidth);
    stroke(255);
    line(mouseX, mouseY, pmouseX, pmouseY);

    array.push([mouseX, mouseY]);
  }
}

function keyTyped() {

  if (key === 's') {
    //save this image
    saveCanvas('fileName', 'png')

  } else if (key === 'd') {
    //display image
    strokeWeight(3);
    stroke(255, 0, 0, 50)
    beginShape();
    for (let i = 0; i < array.length - 1; i++) {

      // line(array[0][0], array[0][1], array[1][0], array[1][1]);
      // line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
      curvedVertex(array[i][0], array[i][1])
      endShape();
    }
    strokeWeight(1);
    stroke(255);
    beginShape();

    for (let i = 0; i < array.length - 1; i++) {

      // line(array[0][0], array[0][1], array[1][0], array[1][1]);
      // line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
      curvedVertex(array[i][0], array[i][1])
      endShape();
    }

  }
  return false;

}
