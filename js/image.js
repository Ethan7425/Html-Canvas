let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

var winHeight = window.outerHeight;
var winWidth = window.innerWidth;

canvas.width = winWidth;
canvas.height = winHeight;

canvas.style.background = "magenta";

class Image
{
	constructor(path, x, y, width, height)
	{
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.path = path;
	}
}

function createImg(context, imgPath, x, y, w, h)
{
	let img = document.createElement('myImg');
	img.src = imgPath;
	img.onload = function() 
	{
		context.drawImage(img, x, y, width, height);
	}
}

let img = new Image('./test.png', 100, 100, 100, 100);
createImg(context, img.path, img.x, img.y, img.width, img.height);