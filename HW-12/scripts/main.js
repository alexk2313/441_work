var canvas = document.getElementById("myCanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext("2d");
var mouse ={
  x: undefined,
  y: undefined,
}


canvas.addEventListener('mousemove', function(event){
      mouse.x = event.x;
      mouse.y = event.y;
});



//************** Mouse Following Cirle ********************
function Circle2(x, y, radius, color){
this.x = x;
this.y = y;
this.radius = radius;
this.color = color;

this.draw = function(){
  c.beginPath();
  c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
  c.fill();
  }
}
//***********end mouse follow circle************************




//********** Creating Circle Object to randomly move***********************

function Circle(x, y, dx, dy, radius, color) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.color = color;


  this.draw = function(){
    c.beginPath();
    c.arc(this.x, this.y, 30, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = 'black';
    c.fillStyle = this.color;
    c.stroke();
    c.fill();
  }



  this.update = function(){
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0){
      this.dx = -this.dx;
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0){
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

//*************interacting with mouse circle **************************************
    if (mouse.x - this.x < 30 && mouse.x - this.x > -30 && mouse.y - this.y > 30  && mouse.y - this.y > -30){
      this.radius += 1;
      this.color = "rgb(244, 4, 121)";
    } else if(this.radius > 2){
      this.color = "rgb(0, 255, 25)";
      this.radius -= 1;
    }
//******************


    this.draw();
  }
}

//************** end moving circles ***************************






var circleArray = [];

for (var i = 0; i < 5; i++){
    var radius = 30;
    var x = Math.random() * innerWidth - (radius * 2) + radius;
    var y = Math.random() * innerHeight - (radius * 2) + radius;
    var dx = (Math.random() - 0.5) * 4;
    var dy = (Math.random() - 0.5) * 4;

    circleArray.push(new Circle(x, y, dx, dy, radius, "rgb(0, 255, 25)"));
  }





var circle2 = new Circle2(undefined,undefined, 30, "rgb(255, 252, 0)");

//**************** animation *************************

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0,0, innerWidth, innerHeight);

  circle2.x = mouse.x;
  circle2.y = mouse.y;
  circle2.draw();
  for(var i = 0; i < circleArray.length; i++){
    circleArray[i].update();
  }


}

animate();
