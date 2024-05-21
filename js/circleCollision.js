let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

var winHeight = window.outerHeight;
var winWidth = window.innerWidth;

canvas.width = winWidth;
canvas.height = winHeight;

canvas.style.background = "white";

class Circle
{
	constructor(x, y, radius, color, text, speed)
	{
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.color = color;
		this.text = text;
		this.speed = speed;

		this.dx = 1 * this.speed;
		this.dy = 1 * this.speed;
	}

	draw(context)
	{
		context.beginPath();

		context.strokeStyle = this.color
		context.textAlign = "center";
		context.textBaseline = "middle";
		context.font = "20px Arial";
		context.fillText(this.text, this.x, this.y);
		
		context.lineWidth = 5;
		context.strokeStyle = this.color;
		context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		context.stroke();
		context.closePath();
	}
	
	update()
	{
		// context.clearRect(0, 0, winWidth, winHeight);
		// this.draw(context);

		if ((this.x + this.radius) > winWidth || (this.x - this.radius) < 0)
			this.dx = -this.dx;

		if ((this.y + this.radius) > winHeight || (this.y - this.radius) < 0)
			this.dy = -this.dy;



		this.x += this.dx;
		this.y += this.dy;
	}
}


let getDistance = function(x1, y1, x2, y2)
{
	var res = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
	return res;
}


let allCircles = [];

let drawCircle = function(circle)
{
	circle.draw(context);
}


for (var i = 1; i < 3; i++)
{
	let x = Math.random() * (winWidth - 400);
	let y = Math.random() * (winHeight - 400);
	let r = Math.random() * 100 + 10;
	let color = "rgb(" + Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255 + ")";
	const speeds = [0, 2, 4, 10]
	let s = speeds[Math.floor(Math.random() * speeds.length)];
	// let s = Math.random() * 0 + 4 ;
	let my_circle = new Circle(x, y, r, color, i, s);
	allCircles.push(my_circle);
}


let updateCircle = function()
{
	context.clearRect(0, 0, winWidth, winHeight);
	    for (let circle of allCircles) {
        circle.update();
        circle.draw(context);
    }
	requestAnimationFrame(updateCircle)
	
    let circle1 = allCircles[0];
    let circle2 = allCircles[1];

	// console.log(circle1.radius);
	if(getDistance(circle1.x, circle1.y, circle2.x, circle2.y) < circle1.radius + circle2.radius)
		circle1.color = "red"
	if(getDistance(circle1.x, circle1.y, circle2.x, circle2.y) >= circle1.radius + circle2.radius)
		circle1.color = "black"
}

updateCircle();
























// context.fillStyle = "red";

// context.fillRect(0, 0, 100, 100);

// context.beginPath();
// context.strokeStyle = "green";
// context.lineWidth = 10;
// context.arc(100, 100, 50, 0, Math.PI * 2, false);
// context.stroke();
// context.closePath();
