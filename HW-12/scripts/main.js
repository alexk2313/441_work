var canvas = document.getElementById("myCanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext("2d");
var mouse ={
  x: 30,
  y: 30,
}
var maxRadius = 100;
var minRadius = 20;

//********* adding mouse functionablity****
canvas.addEventListener('mousemove', function(event){
      mouse.x = event.x;
      mouse.y = event.y;
});





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
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
  }


//****movement and edges
  this.update = function(){
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0){
      this.dx = -this.dx;
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0){
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  }
}

//************** end moving circles ***************************








  var radius = 30;
  var x = Math.random() * innerWidth - (radius * 2) + radius;
  var y = Math.random() * innerHeight - (radius * 2) + radius;
  var dx = (Math.random() - 0.5) * 8;
  var dy = (Math.random() - 0.5) * 8;


  var circle1 = new Circle(x, y, dx, dy, radius, "rgb(0, 255, 25)");
  var circle2 = new Circle(30,30, 0, 0, radius, "rgb(255, 252, 0)");



//**************** animation and collision *************************
function getDistance(x1, y1, x2, y2){
    let xDistance = x2 - x1;
    let yDistance = y2 - y1;

    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));

}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0,0, innerWidth, innerHeight);
  circle1.update();
  circle2.x = mouse.x;
  circle2.y = mouse.y;
  circle2.update();

  if(getDistance(circle1.x, circle1.y, circle2.x, circle2.y) < circle1.radius + circle2.radius){
    if(circle1.radius < maxRadius){
      circle1.color = "rgb(0, 0, 0)";
      circle1.radius += 1;
    }
  } else if (circle1.radius > minRadius){
    circle1.color = "rgb(0, 255, 25)"
    circle1.radius -= 1;
  }

}




animate();
