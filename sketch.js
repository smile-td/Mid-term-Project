let car1;
let me1;
let people1;
let train1;
let scene = 1;
let meX;

function setup() {
  createCanvas(600, 400);
  rectMode(CENTER);

  //Running Elements
  car1 = new Car(100, 180, color(134, 45, 89));
  car2 = new Car(150, 240, color(134, 45, 89));
  car3 = new Car(250, 280, color(134, 45, 89));
  car4 = new Car(50, 320, color(134, 45, 89));

  car7 = new Car(100, 100, color(255, 0, 0));
  car8 = new Car(200, 200, color(0, 255, 0));
  car9 = new Car(300, 300, color(0, 0, 255));

  train1 = new Train(100, 380, color(156, 156, 99));

  me1 = new Me(width / 2, height - 5);
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
    fill(96,32,64);
    ellipse(this.carX-11,this.carY+7,12,12);
    ellipse(this.carX+11,this.carY+7,12,12);
    fill(this.carC);
    rect(this.carX, this.carY, 50, 12);
    rect(this.carX,this.carY-10,30,13);

    fill(255,255,255,180);
    rect(this.carX-7,this.carY-10,7,7);
    rect(this.carX+7,this.carY-10,7,7);
  }

  checkCollision() {
    if ((this.carX > me1.meX - 25) && (this.carX < me1.meX + 25) && (this.carY > me1.meY - 15) && (this.carY < me1.meY + 15)) {
      me1.meY = height - 10;
    }
  }

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
  ellipse(this.meX-14,this.meY-10,6,6);
  ellipse(this.meX-20,this.meY-6,7,7);
  ellipse(this.meX-24,this.meY,7,7);
  ellipse(this.meX-22,this.meY+7,7,7);
  ellipse(this.meX+14,this.meY-10,6,6);
  ellipse(this.meX+20,this.meY-6,7,7);
  ellipse(this.meX+24,this.meY,7,7);
  ellipse(this.meX+22,this.meY+7,8,8);
    fill(255,240,240,220);
  ellipse(this.meX,this.meY+3,23,23);
  fill(255, 219, 57);
   rect(this.meX,this.meY-6,18,6);
    fill(96,64,32,220);
  ellipse(this.meX-5,this.meY+2,3,3);
  ellipse(this.meX+5,this.meY+2,3,3);
  stroke(1.5);
  line(this.meX-2,this.meY+7,this.meX+2,this.meY+7);
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
  background(255, 204, 153, 100);
  
  //Buildings
  fill(128, 0, 0);
  rect(150, 110, 200, 100);
  rect(400, 110, 70, 130);
  fill(179, 0, 0);
  rect(50, 110, 60, 150);
  rect(100, 110, 80, 200);
  rect(350, 110, 60, 200);
  rect(450, 110, 80, 150);
  fill(255,255,255,150);
  //Window1
  rect(100,40,10,10);
  rect(85,40,10,10);
  rect(115,40,10,10);
  rect(85,55,10,10);
  rect(100,55,10,10);
  rect(115,55,10,10);
  rect(85,70,10,10);
  rect(100,70,10,10);
  rect(115,70,10,10);
  //Window2
  rect(450,60,10,10);
  rect(435,60,10,10);
  rect(465,60,10,10);
  rect(435,75,10,10);
  rect(450,75,10,10);
  rect(465,75,10,10);
  //Window3(Middle)
  rect(350,30,10,10);
  rect(350,45,10,10);
  rect(350,60,10,10);
  
  
  
  //Road  
  fill(255, 153, 153);
  rect(300, 250, 600, 200);
  fill(200,82,82,100);
  rect(300,165,600,35);
  fill(255, 102, 102);
  rect(300, 150, 600, 10);
  rect(300, 350, 600, 10);

  //Zebra Crossing
  fill(255, 255, 255, 170);
 // rect(320, 170, 110, 15);
  rect(320, 200, 110, 13);
  rect(320, 230, 110, 13);
  rect(320, 260, 110, 13);
  rect(320, 290, 110, 13);
  rect(320, 320, 110, 13);
  rect(320, 185, 110,3);
  rect(320,215,110,3);
  rect(320,245,110,3);
  rect(320,275,110,3);
  rect(320,305,110,3);
  rect(320,335,110,3);
  
  //Subway Station
  fill(0,150,150,230);
  rect(500, 150, 150, 50);
  rect(420,165,30,20);
  rect(435,120,5,25);
  rect(445,120,5,25);
  rect(565,120,5,25);
  rect(555,120,5,25);
  ellipse(435,105,10,10);
  ellipse(445,110,7,7);
  ellipse(565,105,10,10);
  ellipse(555,110,7,7);
  fill(0,204,204,230);
  rect(500,150,140,40);
  
  //Subaway Signs
  fill(0,102,204,230);
  ellipse(455,150,20,20);
  fill(255,128,0,230);
  ellipse(485,150,20,20);
  ellipse(515,150,20,20);
  fill(255,219,77);
  ellipse(545,150,20,20);
  fill(255,255,255,230);
  textStyle(BOLD);
  textSize(12);
  text('E', 451, 154);
  text('F', 481, 154);
  text('M',511,154);
  fill(0,0,0,230);
  text('R',541,154);

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

  //Transition to the Second Scene; If "me" gets on the subway station, change to the second scene.
  // if(me1.meX>width){ rect(500,150,180,50);
  if (me1.meX > 430 & me1.meX < 575 & me1.meY > 125 & me1.meY < 175) {
    me1.meX = 0;
    scene++;
    //Scene2();
  }
}

function Scene2() {
   noStroke();
  background(223, 191, 159);
fill(180,140,100);
  rect(300,20,600,10);

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
  fill(138,138,92);
   rect(200,163,54,8);
  rect(178,175,5,18);
  rect(222,175,5,18);
   fill(153,153,102);
    rect(200,172,68,12);
  
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
  //FLOOR4
  fill(210, 166, 121);
  rect(300, 330, 600, 70);
  //STAIRS LEFT  
  fill(255,255,255,100);
  rect(98,296,44,3);
  rect(92,304,41,5);
  rect(86,312,38,5);
  rect(80,320,35,5);
  rect(74,328,32,5);
  rect(68,336,29,5);
  rect(62,344,26,5);
  rect(56,352,23,5);
  rect(50,360,20,5);
  //STAIRS RIGHT 
  fill(255,255,255,100);
  rect(502,296,44,3);
  rect(508,304,41,5);
  rect(516,312,38,5);
  rect(522,320,35,5);
  rect(528,328,32,5);
  rect(534,336,29,5);
  rect(540,344,26,5);
  rect(546,352,23,5);
  rect(552,360,20,5);

  //Rail
  fill(100,90,50,180);
  rect(300,400,600,60);
  fill(180,140,100,150);
  rect(300, 400, 600, 50);
  fill(130,110,80,150);
  for (let x = 0; x<width; x=x+18){
    rect(x,388,10,23);
  }
  //Train
  train1.move();
  train1.show();

  //rect(this.trainX, this.trainY, 200, 20);
  if (me1.meX > this.trainX-100 & me1.meX < this.trainX+100 & me1.meY > this.trainY-10 & me1.meY < this.trainY+10) {
    me1.meX = 0;
    scene++;
  }
  
}

function Scene3() {
  background(223, 191, 159);
}