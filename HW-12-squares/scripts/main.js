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







//************** Creating squares object ********************
function Square(x, y, dx, dy, width, height, color) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.width = width;
  this.height = height;
  this.color = color;
  this.draw = function(){
    c.fillStyle = this.color;
    c.fillRect(this.x, this.y, 100, 100);
  }

  this.update = function(){
    if (this.x > innerWidth || this.x < 0){
      this.dx = -this.dx;
    }
    if (this.y > innerHeight || this.y < 0){
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;


//**creating interaction **
    if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y > 50  && mouse.y - this.y > -50){
      this.width += 1;
      this.height += 1;
      this.color = "rgb(244, 4, 121)";
    } else if(this.width > 10 || this.height > 10){
      this.color = "rgb(0, 255, 25)";
      this.width -= 1;
      this.height -= 1;
    }

      this.draw();
  }
}
//********** end squares object ***************************

//********* moving squares array ************
var squareArray = [];

for(var i = 0; i < 5; i++){
var x = Math.random() * innerWidth;
var y = Math.random() * innerHeight;
var dx = (Math.random() - 0.5) * 4;
var dy = (Math.random() - 0.5) * 4;

squareArray.push(new Square(this.x, this.y, this.dx, this.dy, 100, 100, "rgb(64, 255, 0)"));

}

//********* square that follows cursor ***********
var square2 = new Square(undefined, undefined, 0, 0, 100, 100, "rgb(0, 0, 0)")




//********* animation **************
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0,0, innerWidth, innerHeight);
  square2.x = mouse.x - 50;
  square2.y = mouse.y - 50;
  square2.update();
  for(var i = 0; i < squareArray.length; i++){
    squareArray[i].update();
  }

}

animate();
