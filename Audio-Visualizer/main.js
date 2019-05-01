const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.height = innerHeight;
canvas.width = innerWidth;

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
};


//color array
const colors =[
  'rgb(134, 254, 0)',
  'rgb(194, 10, 15)',
  'rgb(0, 255, 209)',
  'rgb(166, 0, 255)'
];



// ****************** Event Listeners ***************
addEventListener('mousemove', event => {
    mouse.x = event.clientX
    mouse.y = event.clientY
});

addEventListener('resize', () => {
    canvas.width = innerWidth
    canvas.height = innerHeight

    init();
});





//**************************randomness functions**************
function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)]
}

//******************************





// Objects ************************************************
function Particle(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    //creating random spawns around  my circle
    this.radians = Math.random() * Math.PI * 2;
    //choose speed of the particles around the circlular path
    this.velocity = 0.05;
    //random spawn of particles around the circle motion
    this.distanceFromCenter = {
      x: randomIntFromRange(50, 150),
      y: randomIntFromRange(50, 150)};

    this.lastMouse = {x: this.x, y: this.y};


    this.update = () => {
      //move particles
      this.radians += this.velocity;

      //getting difference between current and last cordinate and setting drag
      this.lastMouse.x += (mouse.x - this.lastMouse.x) * 0.05;
      this.lastMouse.y += (mouse.y - this.lastMouse.y) * 0.05;

      //circular motion by using sin and cos
      this.x = this.lastMouse.x + Math.cos(this.radians) * this.distanceFromCenter.x;
      this.y = this.lastMouse.y + Math.sin(this.radians) * this.distanceFromCenter.y;
      this.draw();
    };

    this.draw = () => {
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      c.fillStyle = this.color;
      c.fill();
      c.closePath();
    }
};





// Implementation
let particles;
function init() {
    particles = [];

    for (let i = 0; i < 50; i++) {
      //changing radius of particles
        const radius = (Math.random()* 5) + 1;
        particles.push(new Particle(canvas.width / 2, canvas.height / 2, radius , randomColor(colors)));
    };
};

// Animation Loop
function animate() {
    requestAnimationFrame(animate)
    //creating trails from the particles
    c.fillStyle = 'rgb(0, 0, 0, .1)';
    c.fillRect(0, 0, canvas.width, canvas.height);


     particles.forEach(particle => {
      particle.update()
    });
};
init();
animate();
