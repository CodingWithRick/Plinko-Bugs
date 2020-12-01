const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var particle;
var plinkos = [];
var divisions = [];
var divHeight = 200;
var ground, yl, score = 0, gameState = "play", count;
function setup() {
  createCanvas(1300, 600);
  engine = Engine.create();
  world = engine.world;
  for (let k = 0; k <= width; k = k + 80) {
    divisions.push(new Division(k, height - divHeight / 2, 10, divHeight));
  }
  for (let j = 25; j <= width; j += 50) {
    plinkos.push(new Plinko(j, 50));

  }
  for (let j = 20; j <= width; j += 50) {
    plinkos.push(new Plinko(j, 150));

  }
  for (let j = 30; j <= width; j += 50) {
    plinkos.push(new Plinko(j, 250));

  }
  for (let j = 15; j <= width; j += 50) {
    plinkos.push(new Plinko(j, 350));

  }
  ground = new Ground(650, 600, 1300, 10);
  yl = createSprite(650, 400, 1300, 5);
  yl.shapeColor = "yellow";
}

function mousePressed() {
  if (gameState === "play") {
    count++;
    particle = new Particle(mouseX, 0);
  }
}

function draw() {
  background(0, 0, 0);
  Engine.update(engine);
  if (gameState === "play") {

    for (let i = 0; i < divisions.length; i++) {
      divisions[i].display();

    }
    for (let i = 0; i < plinkos.length; i++) {
      plinkos[i].display();

    }
    ground.display();
    drawSprites();
    fill("#fff");
    textSize(16);
    text("Score: " + score, 50, 20);
    if (particle !== null) {
      particle.display();
    }
  } else {

  }
}


