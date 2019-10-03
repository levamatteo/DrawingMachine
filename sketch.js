function setup() {
  createCanvas(600, 600);
  background(220, 60, 70);

  strokeWeight(4);

}

function draw() {

  if (mouseIsPressed) {
    stroke(map(mouseX, 0, 600, 0, 210, true))
    line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function keyTyped() {
  console.log(`key ${key} is being typed`)
  console.log("key" + key + "is being typed")
  if (key === 's') {
    //save this image
    saveCanvas('fileName', 'png')

  }
  return false;

}
