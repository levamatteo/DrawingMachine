let noiseOffset = 0.0
let strokeWidth = 4

function setup() {
  createCanvas(600, 600);
  background(220, 60, 70);



}

function draw() {
  strokeWeight(strokeWidth);

  noiseOffset += 0.01
  strokeWidth = noise(noiseOffset) * 100  
  if (mouseIsPressed) {
    stroke(map(mouseX, 0, 600, 0, 210, true))
    line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function keyTyped() {
  // console.log(`key ${key} is being typed`)
  // console.log("key" + key + "is being typed")
  if (key === 's') {
    //save this image
    saveCanvas('fileName', 'png')

  } else if (key === 'd') {
    //display image

    for (let i = 0; i < array.length - 1; i++) {
      // line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1], )
      curvedVertex(array[i][0], array[i][1])
    }

  }
  return false;

}
