// geting canvas by Boujjou Achraf
var c = document.getElementById("c");
var ctx = c.getContext("2d");

//making the canvas full screen
c.height = window.innerHeight;
c.width = window.innerWidth;

//chinese characters - taken from the unicode charset
var matrix = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
//converting the string into an array of single characters
matrix = matrix.split("");

var font_size = 10;
var columns = c.width / font_size; //number of columns for the rain
//an array of drops - one per column
var drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for (var x = 0; x < columns; x++)
  drops[x] = 1;

//drawing the characters
function draw() {
  //Black BG for the canvas
  //translucent BG to show trail
  ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
  ctx.fillRect(0, 0, c.width, c.height);

  ctx.fillStyle = "#f4427d";//green text
  ctx.font = font_size + "px arial";
  //looping over drops
  for (var i = 0; i < drops.length; i++) {
    //a random chinese character to print
    var text = matrix[Math.floor(Math.random() * matrix.length)];
    //x = i*font_size, y = value of drops[i]*font_size
    ctx.fillText(text, i * font_size, drops[i] * font_size);

    //sending the drop back to the top randomly after it has crossed the screen
    //adding a randomness to the reset to make the drops scattered on the Y axis
    if (drops[i] * font_size > c.height && Math.random() > 0.975)
      drops[i] = 0;

    //incrementing Y coordinate
    drops[i]++;
  }
}

setInterval(draw, 35);

const drawCat = () => {
  var image = new Image()
  var x = Math.random() * c.width
  let y
  let intervalId
  var startDraw = () => {
    var height = image.height / 2
    var width = image.width / 2
    if (y === undefined){
      y = 1 - height
    }
    ctx.drawImage(image, x, y, width, height)
    y = y + 1
    if (y > c.height){
      clearInterval(intervalId)
    }
  }
  image.onload = function () {
    intervalId = setInterval(startDraw, 5)
  }
  image.src = 'https://user-images.githubusercontent.com/2516344/64157978-44583f00-ce6a-11e9-8052-81676a14182f.png'
}

setInterval(drawCat, Math.random() * 2000 + 500)
