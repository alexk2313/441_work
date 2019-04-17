var canvas;
var ctx;
var x = 50;
var y = 50;
var direction;
var questions;
var squareArray = [];
var lives = 3;
$(document).ready(function(){

  setup();

  $(this).keypress(function(event){
    getKey(event);
  });
});



function setup(){
  canvas = document.getElementById("myCanvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx = canvas.getContext("2d");

  square1 = new Square(200, 200, 50, 50, "rgb(35, 208, 0)")
  square2 = new Square(400, 400, 100, 100, "rgb(35, 208, 0)")

  $.getJSON("data/information.json", function(data){

    for(var i = 0; i < data.squares.length; i++){
      squareArray.push(new Square(data.squares[i].x, data.squares[i].y, data.squares[i].h, data.squares[i].w, data.squares[i].color))
    }
    //***********
    //*********** Problem here! Cant get JSON squares to show up
    //***********
    drawSquare();

  });

}




//******** Moving Square1 **************************
function getKey(event){
  var char = event.which || event.keyCode;
  var actualLetter = String.fromCharCode(char);
  if(actualLetter == "w"){
    moveUp();
    direction = "up";
  }
  if(actualLetter == "s"){
    moveDown();
    direction = "down";
  }
  if(actualLetter == "a"){
    moveLeft();
    direction = "left";
  }
  if(actualLetter == "d"){
    moveRight();
    direction = "right";
  }


  var test = hasCollided(square1,square2)
  var test2 = false;
  for(var i = 0; i < squareArray.length; i++){

    test2 = hasCollided(square1, squareArray[i]);
    if(test2 == true){
        break;
    }

    //console.log(test2);
  }
  if(test || test2){
    lives--;
    if(direction == "left"){
      moveRight();
    }
    if(direction == "right"){
      moveLeft();
    }
    if(direction == "down"){
      moveUp();
    }
    if(direction == "up"){
      moveDown();
    }
  }
  drawSquare();
}

function moveUp(){
  square1.y -= 10;
}
function moveDown(){
  square1.y += 10;
}
function moveRight(){
  square1.x += 10;
}
function moveLeft(){
  square1.x -= 10;
}

//************* end square movement **********************





//*************** drawing squares ******************
function drawSquare(){
  ctx.clearRect(0,0, innerWidth, innerHeight);;
  ctx.fillStyle = square1.mainColor;
  ctx.fillRect(square1.x, square1.y, square1.width, square1.height);
  ctx.fillStyle = square2.mainColor;
  ctx.fillRect(square2.x, square2.y, square2.width, square2.height);

  for(var i = 0; i < squareArray.length; i++){
    ctx.fillstyle = squareArray[i].mainColor;
    ctx.fillRect(squareArray[i].x, squareArray[i].y, squareArray[i].width, squareArray[i].height);
    }

  ctx.fillStyle = "30px Arial"
  ctx.fillText("lives: " + lives, 10, 50);
}

//************** collision ***************

function hasCollided(object1, object2) {
    return !(
        ((object1.y + object1.height) < (object2.y)) ||
        (object1.y > (object2.y + object2.height)) ||
        ((object1.x + object1.width) < object2.x) ||
        (object1.x > (object2.x + object2.width))
    );
}
