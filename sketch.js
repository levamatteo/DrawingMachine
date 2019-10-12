// let noiseOffset = 0.0
let strokeWidth = 4
let img;
let array = [];
function preload() {
  img = loadImage('images/stra.jpeg');
                  }
function setup() {
  createCanvas(windowWidth, windowHeight);
background(img);
// image(img, 0, 0, 600, 600);
noFill();

}

function draw() {


  strokeWeight(strokeWidth);

  // noiseOffset += 0.01
  // strokeWidth = noise(noiseOffset) * 100

  if (mouseIsPressed) {
    //stroke(map(mouseX, 0, 600, 0, 210, true))
    // line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
stroke(245, 245, 245, 100);
// line(mouseX, mouseY, pmouseX, pmouseY);
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
