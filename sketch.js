var iss, spacecraft;
var bg, issimg, scimg;
var hasDocked = false;

//to pre load images
function preload() {
    bg = loadImage("space.jpg");
    issimg = loadImage("iss.png");
    scimg = loadImage("spacecraft1.png");
    scimg1 = loadImage("spacecraft2.png");
    scimg2 = loadImage("spacecraft3.png");
    scimg3 = loadImage("spacecraft4.png");
}

function setup() {

    //to create canvas
    createCanvas(800, 400);

    //to create sprites
    spacecraft = createSprite(285, 240);
    spacecraft.addImage(scimg);
    spacecraft.scale = 0.15;

    iss = createSprite(330, 130);
    iss.addImage(issimg);
    iss.scale = 0.25;
}

function draw() {

    //to give background
    background(bg);

    //to check if the space craft has not docked
    if (!hasDocked) {

        //to set a random X position 
        spacecraft.x = spacecraft.x + random(-1, 1);

        //all the keyEvents
        if (keyDown("LEFT_ARROW")) {
            spacecraft.addImage(scimg3);
            spacecraft.x = spacecraft.x - 1;
        }

        if (keyDown("RIGHT_ARROW")) {
            spacecraft.addImage(scimg2);
            spacecraft.x = spacecraft.x + 1;
        }

        if (keyDown("DOWN_ARROW")) {
            spacecraft.addImage(scimg1);
        }

        if (keyDown("UP_ARROW")) {
            spacecraft.y = spacecraft.y - 2;
        }
    }

    //to check if the spacecraft reaches the docking position of ISS
    if (spacecraft.y <= (iss.y + 73) && spacecraft.x <= (iss.x - 15)) {

        hasDocked = true;

        textSize(35);
        fill("White")
        text("Congratulations‼ Docking Successful!!", 100, 300);
    }

    //to create sprites
    drawSprites();
}