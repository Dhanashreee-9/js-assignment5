console.log("Change background color")


let colorsIndex = 0;
let colors = ['#888888', '#aa0000', '#00aa00', '#0000aa', '#aa00aa'];

setInterval(ChangeBackgroundColor, 5000);
function ChangeBackgroundColor() {
	document.body.style.transition = 'background-color 0.3s';
	document.body.style.backgroundColor = colors[colorsIndex];
	colorsIndex += 1;
	if (colorsIndex == colors.length) { colorsIndex = 0; }
}
