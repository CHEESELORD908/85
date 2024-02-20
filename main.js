var canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

nmia = ["Mars 1.jpeg","Mars 2.jpeg","Mars 3.jpeg","Mars 4.jpeg"];
random_number = Math.floor(Math.random() * 4);
background_image = nmia[random_number];
console.log("background_image = " + background_image);

rover_width = 100;
rover_height = 90;
rover_x = 10;
rover_y = 10;
background_image = "mars.jpg";
rover_image = "rover.png";

function add()
{
    background_imgTag = new Image(); //defencing a variable with a new image
    background_imgTag.onload - uploadBackground; // setting a function, onloadning this variable
    background_imgTag.src = background_image;  // load image

    rover_imgTag = new Image(); //defining a variable with a new image
    rover_imgTag.onload = uploadrover; // setting a function, onloading this variable
    rover_imgTag = rover_image;  // load image

}
function uploadBackground()
{
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
function uploadrover()
{
    console.log("x = " + rover_x + "y = " + rover_y)
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
        if(keyPressed == '37')
        {
            left();
            console.log("left");
        }
        if(keyPressed == '38')
        {
            up();
            console.log("up");
        }
        if(keyPressed == '39')
        {
            right();
            console.log("right");
        }
        if(keyPressed == '40')
        {
            down();
            console.log("down");
        }
}
function up()
{
    if(rover_y >=0)
    {
        rover_y = rover_y - 10;
        console.log("When up arrow is pressed, x = " + rover_x + " | y = " + rover_y);
        uploadBackground();
        uploadrover();
    }
}
function down()
{
    if(rover_y <=500)
    {
        rover_y = rover_y + 10;
        console.log("When down arrow is pressed, x = " + rover_x + " | y = " + rover_y);
        uploadBackground();
        uploadrover();
    }
}
function left()
{
    if(rover_x >=0)
    {
        rover_x = rover_x - 10;
        console.log("When left arrow is pressed, x = " + rover_x + " | y = " + rover_y);
        uploadBackground();
        uploadrover();
    }
}
function right()
{
    if(rover_x <=700)
    {
        rover_x = rover_x + 10;
        console.log("When right arrow is pressed, x = " + rover_x + " | y = " + rover_y);
        uploadBackground();
        uploadrover();
    }
}