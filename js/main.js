let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

var winHeight = window.outerHeight;
var winWidth = window.innerWidth;

canvas.width = winWidth;
canvas.height = winHeight;

canvas.style.background = "white";

class Circle
{
	constructor(x, y, radius, color, text)
	{
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.color = color;
		this.text = text;
	}

	draw(context)
	{
		context.beginPath();

		context.strokeStyle = this.color
		context.textAlign = "center";
		context.textBaselline = "middle";
		context.font = "20px Arial";
		context.fillText(this.text, this.x, this.y);
		
		context.lineWidth = 5;
		context.strokeStyle = this.color;
		context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		context.stroke();
		context.closePath();
	}
}

let allCircles = [];

let drawCircle = function(circle)
{
	circle.draw(context);
}

for (var i = 0; i < 20; i++)
{
	let x = Math.random() * winWidth;
	let y = Math.random() * winHeight;
	let r = Math.random() * 100;
	let color = "rgb(" + Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255 + ")";
	let my_circle = new Circle(x, y, r, color, i);
	allCircles.push(my_circle);
	drawCircle(my_circle);
}


























// context.fillStyle = "red";

// context.fillRect(0, 0, 100, 100);

// context.beginPath();
// context.strokeStyle = "green";
// context.lineWidth = 10;
// context.arc(100, 100, 50, 0, Math.PI * 2, false);
// context.stroke();
// context.closePath();
