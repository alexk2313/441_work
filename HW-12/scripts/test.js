var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = 50;
var y = 50;
var x2 = 200;
var y2 = 200;
ctx.fillStyle = "#0000FF";
drawSquare();
drawRectangle();






/*********** Movement with keypress for square************/
$(document).ready(function(){
    $(this).keypress(function(event){
        getKey(event);
    });
});

function getKey(event)
{
    var char = event.which || event.keyCode;
    var actualLetter = String.fromCharCode(char);
    if(actualLetter == "w")
       {
        moveUp();
       }
    if(actualLetter == "a")
      {
        moveLeft();
      }
    if(actualLetter == "d")
      {
        moveRight();
      }
    if(actualLetter == "s")
      {
        moveDown();
      }
       ctx.clearRect(0,0,800,600);
       drawSquare();
       drawRectangle();
}


   function moveUp()
   {
       y-=10;
   }
   function moveLeft()
   {
       x-=10;
   }
   function moveRight()
   {
       x+=10;
   }
   function moveDown()
   {
       y+=10;
   }






/***************** Drawing My Shapes *****************/


  function drawSquare()
  {

    ctx.fillRect(x, y, 20, 20);
  }


  function drawRectangle()
  {
    ctx.fillRect(x2, y2, 50, 40);

  }







/**************** collision **************/
  function hasCollided(object1, object2) {
      return !(
          ((object1.y + object1.height) < (object2.y)) ||
          (object1.y > (object2.y + object2.height)) ||
          ((object1.x + object1.width) < object2.x) ||
          (object1.x > (object2.x + object2.width))
      );
  }
