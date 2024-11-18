let midArray = [];
let bottomArray = [];
let midIndex = 0;
let bottomIndex = 0;
let midWFArray = [];
let bottomWFArray = [];
let theColors = [
  "#faaab3",
  "#6fb3fc",
  "#000408",
  "##cd7cf2",
  "##23dbad",
  "##ffffff",
];

let randomColor = 0;

function preload() {
  // Load images in preload
  midArray[0] = loadImage("mids/black1.png");
  midArray[1] = loadImage("mids/Charcoal1.png");
  midArray[2] = loadImage("mids/creme1.png");
  midArray[3] = loadImage("mids/green1.png");
  midArray[4] = loadImage("mids/pink1.png");
  midArray[5] = loadImage("mids/blue1.png");

  bottomArray[0] = loadImage("bottoms/black2.png");
  bottomArray[1] = loadImage("bottoms/charcoal2.png");
  bottomArray[2] = loadImage("bottoms/creme2.png");
  bottomArray[3] = loadImage("bottoms/green2.png");
  bottomArray[4] = loadImage("bottoms/pink2.png");
  bottomArray[5] = loadImage("bottoms/blue2.png");
}

function setup() {
  let canvas = createCanvas(700, 400);
  canvas.parent("sketch-holder");
  imageMode(CENTER);

  // Resize the clothes images
  for (let i = 0; i < midArray.length; i++) {
    midArray[i].resize(300, 300);
  }
  for (let i = 0; i < bottomArray.length; i++) {
    bottomArray[i].resize(300, 300);
  }

  // Buttons for interaction
  let button = createButton("Save outfit mix");
  button.parent("button-holder");
  button.mousePressed();

  let button2 = createButton("Create final Outfit");
  button2.parent("button-holder");
  button2.mousePressed();

  let button3 = createButton("Color the outfit");
  button3.parent("button-holder");
  button3.mousePressed(changeColor);

  midIndex = int(random(midArray.length));
  bottomIndex = int(random(bottomArray.length));
}

function draw() {
  background(0);
  drawCatwalkRunway();

  image(midArray[midIndex], 350, 200);
  changeMid();
  changeBottom();
  image(bottomArray[bottomIndex], 350, 190);
}

function drawCatwalkRunway() {
  // Background color: dark grey for the stage
  background(40, 40, 40);

  line(100, 250, 600, 250);
  line(600, 250, 600, 350);
  //rect(150, 50, 400, 300); // Runway

  fill(166, 3, 22); // curtains
  rect(50, 50, 100, 300); // Left
  rect(550, 50, 100, 300); //right

  noStroke();
  drawSpotlights();
}

function drawSpotlights() {
  fill(255, 255, 255, 150); // White light
  ellipse(175, 120, 80, 80); // Left spotlight
  ellipse(525, 120, 80, 80); // Right spotlight
  ellipse(175, 250, 80, 80); // Left spotlight 2
  ellipse(525, 250, 80, 80); // Right spotlight 2
}

function changeMid() {
  if (keyIsPressed == true && keyCode == RIGHT_ARROW)
    midIndex = int(random(midArray.length));
}

function changeBottom() {
  if (keyIsPressed == true && keyCode == LEFT_ARROW)
    bottomIndex = int(random(bottomArray.length));
}

function changeColor() {
  noStroke();
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, 30);
    randomColor = int(random(theColors.length));
    fill(theColors[randomColor]);
    stroke(theColors[randomColor]);
  }
}
