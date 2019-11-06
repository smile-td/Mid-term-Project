

//for scene 1
let snow = [];
let car1;
let me1;
let people1;
let train1;
let scene = 1;
let meX;
//for scene 2
let tx;
let ty;
let overTrain = false;
let binx;
let biny;
let overBin = false;
let locked = false;
let chair1x;
let chair1y;
let overChair1 = false;

function setup() {
  createCanvas(600, 400);
  rectMode(CENTER);

  //Snow Setting(Scene1)
  for (let i = 0; i < 100; i++) {
    snow[i] = new Snow();
  }
  //Running Elements(Scene1)
  car1 = new Car(100, 250, color(100, 35, 59));
  car2 = new Car(160, 270, color(134, 45, 89));
  car3 = new Car(250, 310, color(90, 25, 49));
  car4 = new Car(50, 330, color(114, 45, 79));
  car7 = new Car(100, 100, color(255, 0, 0));
  car8 = new Car(200, 200, color(0, 255, 0));
  car9 = new Car(300, 300, color(0, 0, 255));

  train1 = new Train(100, 380, color(156, 156, 99));

  me1 = new Me(width / 2, height - 5);

  //Settings for Scene2
  tx = 200;
  ty = 380;
  binx = 290;
  biny = 260;
  chair1x = 380;
  chair1y = 253;
}

class Train {
  constructor(x, y, c) {
    this.trainX = x;
    this.trainY = y;
    this.trainC = c;
  }

  move() {
    this.trainX++;
    if (this.trainX > width) {
      this.trainX = 0;
    }
  }

  show() {
    fill(this.trainC);
    rect(this.trainX, this.trainY, 200, 20);
  }
}

class Me {

  constructor(x, y) {
    this.meX = x;
    this.meY = y;
  }

  show() {
    fill(255, 219, 77);
    ellipse(this.meX, this.meY, 25, 25);
    ellipse(this.meX - 14, this.meY - 10, 6, 6);
    ellipse(this.meX - 20, this.meY - 6, 7, 7);
    ellipse(this.meX - 24, this.meY, 7, 7);
    ellipse(this.meX - 22, this.meY + 7, 7, 7);
    ellipse(this.meX + 14, this.meY - 10, 6, 6);
    ellipse(this.meX + 20, this.meY - 6, 7, 7);
    ellipse(this.meX + 24, this.meY, 7, 7);
    ellipse(this.meX + 22, this.meY + 7, 8, 8);
    fill(255, 240, 240, 220);
    ellipse(this.meX, this.meY + 3, 23, 23);
    fill(255, 219, 57);
    rect(this.meX, this.meY - 6, 18, 6);
    fill(96, 64, 32, 220);
    ellipse(this.meX - 5, this.meY + 2, 3, 3);
    ellipse(this.meX + 5, this.meY + 2, 3, 3);
    stroke(1.5);
    line(this.meX - 2, this.meY + 7, this.meX + 2, this.meY + 7);
  }
}

class Car {
  constructor(x, y, c) {
    this.carX = x;
    this.carY = y;
    this.carC = c;
  }

  move() {
    this.carX += 2;
    if (this.carX > width) {
      this.carX = 0;
    }
  }

  show() {
    fill(96, 32, 64);
    ellipse(this.carX - 11, this.carY + 7, 12, 12);
    ellipse(this.carX + 11, this.carY + 7, 12, 12);
    fill(this.carC);
    rect(this.carX, this.carY, 50, 12);
    rect(this.carX, this.carY - 10, 30, 13);

    fill(255, 255, 255, random(100, 180));
    rect(this.carX - 7, this.carY - 10, 7, 7);
    rect(this.carX + 7, this.carY - 10, 7, 7);
  }

  checkCollision() {
    if ((this.carX > me1.meX - 25) && (this.carX < me1.meX + 25) && (this.carY > me1.meY - 15) && (this.carY < me1.meY + 15)) {
      me1.meY = height - 10;
    }
  }

}


function draw() {
  background(220);

  if (scene == 1) {
    Scene1();
  } else if (scene == 2) {
    Scene2();
  } else if (scene == 3) {
    Scene3();
  } else if (scene == 4) {
    scene = 1;
  }

  me1.show();

  //Control Me
  if (keyIsPressed == true) {
    if (keyCode == UP_ARROW) {
      me1.meY--;
    }
  }
  if (keyIsPressed == true) {
    if (keyCode == DOWN_ARROW) {
      me1.meY++;
    }
  }
  if (keyIsPressed == true) {
    if (keyCode == LEFT_ARROW) {
      me1.meX--;
    }
  }
  if (keyIsPressed == true) {
    if (keyCode == RIGHT_ARROW) {
      me1.meX++;
    }
  }

}

function Scene1() {
  noStroke();
  
  //Background
  background(0, 0, 0);

  //Stars
  fill(255, 225, 50, random(20, 100));
  for (let i = 0; i < 20; i++) {
    rect(15 + 40 * i, 50, 7, 2);
    rect(15 + 40 * i, 50, 1, 8);
    rect(25 + 40 * i, 70, 7, 2);
    rect(25 + 40 * i, 70, 1, 8); }
  //Moon
  fill(255, 225, 50, random(160, 200));
  arc(200, 30, 20, 20, 0, PI + QUARTER_PI, PIE);
  //Buildings
  //Building Back
  fill(80, 0, 0);
  rect(50, 180, 60, 150);
  rect(150, 180, 200, 100);
  rect(230, 180, 60, 160);
  rect(400, 180, 70, 130);
  rect(500, 180, 50, 190);
  rect(570, 180, 60, 140);
  //Building Middle
  fill(110, 0, 0);
  rect(100, 180, 80, 200);
  rect(200, 180, 70, 165);
  rect(300, 180, 50, 130);
  rect(350, 180, 60, 200);
  rect(450, 180, 80, 150);
  //Building Front
  fill(140, 0, 0);
  rect(60, 180, 40, 130);
  rect(120, 180, 50, 150);
  rect(220, 180, 45, 180);
  rect(320, 180, 55, 160);
  rect(450, 180, 40, 130);
  rect(510, 180, 45, 190);
  //Window
  fill(255, 255, 255, random(60, 140));
  //1st
  for (let i = 0; i < 9; i++) {
    rect(50, 130 + 10 * i, 5, 5); }
  //2st
  for (let i = 0; i < 6; i++) {
    rect(110, 120 + 16 * i, 9, 9); }
  //3rd
  for (let i = 0; i < 10; i++) {
    rect(208, 100 + 15 * i, 7, 7);
    rect(222, 100 + 15 * i, 7, 7);  }
  //4th
  for (let i = 0; i < 6; i++) {
    rect(330, 120 + 16 * i, 9, 9); }
  //5th
  for (let i = 0; i < 2; i++) {
    rect(445, 130 + 16 * i, 8, 8);  }
  //6th
  for (let i = 0; i < 2; i++) {
    rect(502, 110 + 19 * i, 10, 10);
    rect(518, 110 + 19 * i, 10, 10);  }

  //Road  
  fill(60, 60, 60);
  rect(300, 300, 600, 150);
  fill(40, 40, 40);
  rect(300, 220, 600, 10);
  rect(300, 370, 600, 10);
  //Zebra Crossing
  fill(255, 255, 255, 130);
  rect(350, 235, 80, 9);
  rect(350, 260, 80, 9);
  rect(350, 285, 80, 9);
  rect(350, 310, 80, 9);
  rect(350, 335, 80, 9);
  rect(350, 360, 80, 9);
  rect(350, 250, 80, 2.5);
  rect(350, 275, 80, 2.5);
  rect(350, 300, 80, 2.5);
  rect(350, 325, 80, 2.5);
  rect(350, 350, 80, 2.5);
  //Subway Station
  fill(32, 96, 64);
  rect(500, 200, 150, 50);
  rect(420, 218, 30, 15);
  rect(435, 180, 5, 30);
  rect(445, 180, 5, 25);
  rect(565, 180, 5, 30);
  rect(555, 180, 5, 25);
  ellipse(435, 166, random(6, 10));
  ellipse(445, 168, random(4, 6));
  ellipse(565, 166, random(6, 10));
  ellipse(555, 168, random(4, 6));
  fill(12, 76, 44);
  rect(500, 200, 140, 40);
  //Subaway Signs
  fill(0, 102, 204, 200);
  ellipse(455, 200, 20, 20);
  fill(255, 128, 0, 200);
  ellipse(485, 200, 20, 20);
  ellipse(515, 200, 20, 20);
  fill(255, 219, 77, 200);
  ellipse(545, 200, 20, 20);
  fill(255, 255, 255, 230);
  textStyle(BOLD);
  textSize(12);
  text('E', 451, 204);
  text('F', 481, 204);
  text('M', 511, 204);
  fill(0, 0, 0, 230);
  text('R', 541, 204);

  //Car Settings
  car1.move();
  car1.show();
  car1.checkCollision();

  car2.move();
  car2.show();
  car2.checkCollision();

  car3.move();
  car3.show();
  car3.checkCollision();

  car4.move();
  car4.show();
  car4.checkCollision();

  //Transition to the Second Scene; If "me" gets on the subway station rectangle, change to the second scene.
  // if(me1.meX>width){ rect(500,150,180,50);
  if (me1.meX > 430 & me1.meX < 575 & me1.meY > 175 & me1.meY < 225) {
    me1.meX = 0;
    me1.meY = 10;
    scene++;
    //Scene2();
  }

  //Snow Settings
  for (let i = 0; i < 100; i++) {
    snow[i].show();
    snow[i].move();
  }
}


function Scene2() {
  noStroke();
  background(223, 191, 159);
  fill(180, 140, 100);
  rect(300, 20, 600, 10);

  //FLOOR1
  fill(210, 166, 121);
  rect(300, 60, 600, 70);
  //STAIRS LEFT
  fill(255, 255, 255, 100);
  rect(50, 30, 20, 5);
  rect(56, 38, 23, 5);
  rect(62, 46, 26, 5);
  rect(68, 54, 29, 5);
  rect(74, 62, 32, 5);
  rect(80, 70, 35, 5);
  rect(86, 78, 38, 5);
  rect(92, 86, 41, 5);
  rect(98, 94, 44, 3);
  //STAIRS RIGHT
  fill(255, 255, 255, 100);
  rect(550, 30, 20, 5);
  rect(546, 38, 23, 5);
  rect(540, 46, 26, 5);
  rect(534, 54, 29, 5);
  rect(528, 62, 32, 5);
  rect(522, 70, 35, 5);
  rect(516, 78, 38, 5);
  rect(510, 86, 41, 5);
  rect(504, 94, 44, 3);
  //Trash
  fill(194, 194, 214, random(100, 230));
  rect(140, 92, 8, 8, 1, 3, 4, 5);
  rect(180, 92, 10, 10, 2, 1, 4, 5);
  rect(195, 92, 5, 5, 1, 2, 1, 1);
  rect(250, 92, 6, 6, 1, 1, 1, 1);
  rect(350, 94, 4, 4, 1, 1, 1, 1);


  //FLOOR2
  fill(210, 166, 121);
  rect(300, 150, 600, 70);
  //STAIRS LEFT
  fill(255, 255, 255, 100);
  rect(504, 116, 44, 3);
  rect(510, 124, 41, 5);
  rect(516, 132, 38, 5);
  rect(522, 140, 35, 5);
  rect(528, 148, 32, 5);
  rect(534, 156, 29, 5);
  rect(540, 164, 26, 5);
  rect(546, 172, 23, 5);
  rect(552, 180, 20, 5);
  //STAIRS RIGHT
  fill(255, 255, 255, 100);
  rect(98, 116, 44, 3);
  rect(92, 124, 41, 5);
  rect(86, 132, 38, 5);
  rect(80, 140, 35, 5);
  rect(74, 148, 32, 5);
  rect(68, 156, 29, 5);
  rect(62, 164, 26, 5);
  rect(56, 172, 23, 5);
  rect(50, 180, 20, 5);
  //CHAIR
  fill(138, 138, 92);
  rect(200, 163, 54, 8);
  rect(178, 175, 5, 18);
  rect(222, 175, 5, 18);
  fill(153, 153, 102);
  rect(200, 172, 68, 12);
  //PAPERBAG
  fill(230, 202, 179);
  rect(150, 177, 12, 15);
  rect(154, 167, 2, 5);
  rect(146, 167, 2, 5);
  rect(150, 165, 8, 2);
  //Trash
  fill(194, 194, 214, random(100, 230));
  rect(250, 182, 5, 5, 1, 2);
  rect(265, 182, 8, 8, 1, 2, 1, 3);
  rect(380, 183, 6, 6, 1, 2, 3);

  
  //FLOOR3
  fill(210, 166, 121);
  rect(300, 240, 600, 70);
  //STAIRS LEFT
  fill(255, 255, 255, 100);
  rect(50, 210, 20, 5);
  rect(56, 218, 23, 5);
  rect(62, 226, 26, 5);
  rect(68, 234, 29, 5);
  rect(74, 242, 32, 5);
  rect(80, 250, 35, 5);
  rect(86, 258, 38, 5);
  rect(92, 266, 41, 5);
  rect(98, 274, 44, 3);
  //STAIRS RIGHT
  fill(255, 255, 255, 100);
  rect(550, 210, 20, 5);
  rect(544, 218, 23, 5);
  rect(538, 226, 26, 5);
  rect(532, 234, 29, 5);
  rect(526, 242, 32, 5);
  rect(520, 250, 35, 5);
  rect(514, 258, 38, 5);
  rect(508, 266, 41, 5);
  rect(502, 274, 44, 3);
  //If the cursor is over the Chair1
  if (
    mouseX > chair1x - 104 &&
    mouseX < chair1x + 104 &&
    mouseY > chair1y - 8 &&
    mouseY < chair1y + 8  ) {
    overChair1 = true;
    if (!locked) {
      fill(255, 255, 255, 200);
      text('This one is already occupied.', 300, 240);    }
  } else {
    overChair1 = false;  }
  //CHAIR
  fill(138, 138, 92);
  rect(chair1x, chair1y, 104, 8);
  fill(153, 153, 102);
  rect(chair1x, 262, 128, 12);

  //If the cursor is over the Bin
  if (
    mouseX > binx - 25 &&
    mouseX < binx + 25 &&
    mouseY > biny - 30 &&
    mouseY < biny + 30 ) {
    overBin = true;
    if (!locked) {
      fill(255, 255, 255, 200);
      text('You wont want to sleep near me.', 210, 230);    }
  } else {
    overBin = false;  }

  //TrashBin
  fill(115, 77, 38, 230);
  rect(binx, biny, 25, 30);
  ellipse(binx, biny - 10, 25, 25);
  fill(255, 255, 255, 100);
  rect(290, 260, 3, 25);
  rect(296, 260, 3, 25);
  rect(284, 260, 3, 25);
  //WaterBottle
  fill(0, 96, 128);
  rect(270, 267, 8, 15);
  rect(270, 258, 4, 4);
  //Trash
  fill(194, 194, 214, random(100, 230));
  rect(250, 273, 5, 5, 1, 2);
  rect(180, 273, 8, 8, 3, 3, 2);
  rect(280, 273, 5, 6, 2, 3);
  rect(320, 273, 6, 6, 3, 2);
  rect(370, 273, 5, 5, 1, 2);

  
  //FLOOR4
  fill(210, 166, 121);
  rect(300, 330, 600, 70);
  //CHAIR
  fill(138, 138, 92);
  rect(300, 350, 104, 8);
  rect(278, 362, 5, 18);
  rect(322, 362, 5, 18);
  rect(248, 362, 5, 18);
  rect(352, 362, 5, 18);
  fill(153, 153, 102);
  rect(300, 360, 128, 12);
  //STAIRS LEFT  
  fill(255, 255, 255, 100);
  rect(98, 296, 44, 3);
  rect(92, 304, 41, 5);
  rect(86, 312, 38, 5);
  rect(80, 320, 35, 5);
  rect(74, 328, 32, 5);
  rect(68, 336, 29, 5);
  rect(62, 344, 26, 5);
  rect(56, 352, 23, 5);
  rect(50, 360, 20, 5);
  //STAIRS RIGHT 
  fill(255, 255, 255, 100);
  rect(502, 296, 44, 3);
  rect(508, 304, 41, 5);
  rect(516, 312, 38, 5);
  rect(522, 320, 35, 5);
  rect(528, 328, 32, 5);
  rect(534, 336, 29, 5);
  rect(540, 344, 26, 5);
  rect(546, 352, 23, 5);
  rect(552, 360, 20, 5);
  //Rail
  fill(100, 90, 50, 180);
  rect(300, 400, 600, 60);
  fill(180, 140, 100, 150);
  rect(300, 400, 600, 50);
  fill(130, 110, 80, 150);
  for (let x = 0; x < width; x = x + 18) {
    rect(x, 388, 10, 23);
  }
  //Mice
  fill(110, 110, 110);
  ellipse(200, 360, 15, 8);
  ellipse(194, 355, 6, 6);
  rect(197, 364, 2, 5);
  rect(203, 364, 2, 5);
  rect(206, 354, 2, 9);

  //If the cursor is over the Train
  if (
    mouseX > tx - 200 &&
    mouseX < tx + 200 &&
    mouseY > ty - 20 &&
    mouseY < ty + 20 ) {
    overTrain = true;
    if (!locked) {
      fill(255);
      text('Get on the train.', 155, 365);
    }
  } else {
    overTrain = false;  }

  //Train
  //train1.move();
  //train1.show();
  fill(60, 91, 60, random(180, 255));
  rect(tx, ty, 200, 20);
  //Station
  fill(96, 64, 42);
  rect(300, 320, 120, 30);
  fill(115, 77, 28);
  rect(300, 320, 110, 20);
  stroke(255);
  strokeWeight(0.8);
  fill(255, 255, 255, 100);
  text("14th STREET", 265, 325);
  
  //Transition
  //rect(200, 380, 200, 20)
  if (me1.meX > 100 & me1.meX < 300 & me1.meY > 370 & me1.meY < 390) {
    me1.meX = 0;
    me1.meY = 200;
    scene++;
  }
}

function Scene3() {
   noStroke();
  background(46, 46, 31);
  //decoration
  fill(230, 230, 0,100);
  for (let x = 30; x<width; x=x+30){
  rect(x,100,3,10);
  rect(x,100,10,2);
  rect(x,300,3,10);
  rect(x,300,10,2);}
  //Rail
  fill(180,140,100,150);
  rect(300,200,600,150);
  fill(130,110,80,random(200,255));
   for (let x = 0; x<width; x=x+18){
    rect(x,200,10,150);}
  fill(100,90,50);
  rect(300,200,600,100);
   //Links
  fill(153, 173, 133);
  rect(170,180,50,10);
  rect(170,220,50,10);
  rect(370,180,50,10);
  rect(370,220,50,10);
  //Final Link
  fill(153,173,133);
  rect(570,180,50,10);
  rect(570,220,50,10);
  fill(153,173,133,30);
  rect(570,200,50,40);
  
  //Car1
  fill(32, 96, 64);
  rect(80,200,180,80);
  fill(45, 134, 89);
  rect(80,200,180,60);
  //CHAIR
  fill(255,255,255,random(30,100));
  rect(80,180,100,15);
  rect(80,220,100,15);
  //People1
  fill(255, 230, 230,230);
  ellipse(50,180,20,20);
  fill(0);
  ellipse(47,178,3,3);
  ellipse(53,178,3,3);
  //People2
  fill(51, 26, 0,230);
  ellipse(100,220,20,20);
  fill(255);
  ellipse(97,222,3,3);
  ellipse(103,222,3,3);
  
  //Car2
  fill(32, 96, 64);
  rect(280,200,180,80);
  fill(45, 134, 89);
  rect(280,200,180,60);
   //CHAIR
  fill(255,255,255,random(30,100));
  rect(280,180,100,15);
  rect(280,220,100,15);
  //People3
  fill(255, 219, 77,230);
  ellipse(300,180,20,20);
  fill(0);
  ellipse(297,178,3,3);
  ellipse(303,178,3,3);
  
  
  //Car3
  fill(32, 96, 64);
  rect(480,200,180,80);
  fill(45, 134, 89);
  rect(480,200,180,60);
  //CHAIR
  fill(255,255,255,random(30,100));
  rect(480,180,100,15);
  rect(480,220,100,15);
  //People4
  fill(255, 219, 77,230);
  ellipse(500,220,20,20);
  fill(0);
  ellipse(497,222,3,3);
  ellipse(503,222,3,3);
  //People5
  fill(255, 230, 230,230);
  ellipse(460,220,20,20);
  fill(0);
  ellipse(457,222,3,3);
  ellipse(463,222,3,3);
  
  if (me1.meX > 545 & me1.meX < 595 & me1.meY > 180 & me1.meY < 220) {
    fill(0);
    rect(300,200,600,400);
    fill(255,255,255,200);
    text("You died, because you fell into the gap between the cars.", 100, 200);
    text("Seven people died while walking between NYC subway cars in 2018.",100,230);
    text("Find a better place to stay warm in winter.",100,260);
    //me1.meX = 0;
    //scene++;
  }

  
  function mousePressed() {
    if (mouseX < 550,mouseX>450,mouseY<350,mouseY>250) {
      Scene1();
    }
  }
}


class Snow {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.c = color(255, 255, 255, random(10, 130));
    this.speed = 0.5;
  }

  show() {
    noStroke();
    fill(this.c);
    ellipse(this.x, this.y, 10, 10);
    ellipse(this.x + 30, this.y + 30, 15, 15);
  }

  move() {
    this.x = this.x + this.speed;
    this.y = this.y + this.speed;

    if (this.x > width) {
      this.speed = -0.5;
    } else if (this.x < 0) {
      this.speed = 0.5;
    }

    if (this.y > height) {
      this.speed = -1;
    } else if (this.y < 0) {
      this.speed = 1;
    }
  }
}