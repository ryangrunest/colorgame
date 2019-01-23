var colors = generateRandomColors(6);

var body = document.querySelector("body");
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var message = document.querySelector("#message");
// var totalCorrect = 0;

colorDisplay.innerHTML = pickedColor;



easyBtn.addEventListener("click", easyButtonClicked);
hardBtn.addEventListener("click", hardButtonClicked);
resetButton.addEventListener("click", resetButtonClicked);


// change colors of squares
for (var i = 0; i < squares.length; i++) {
	// add initial colors to squares
	squares[i].style.backgroundColor = colors[i];
	// add click listeners to squares
	squares[i].addEventListener("click", function() {
		// grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		// compare color to picked color
		if (clickedColor === pickedColor){
			document.getElementById("message").textContent = "Correct!";
			changeColors(clickedColor);
			document.querySelector("h1").style.backgroundColor = clickedColor;
			totalCorrect++;
			document.querySelector("#totalScore").textContent = totalCorrect;
			resetButton.textContent = "Play Again?";

		} else {
			this.style.backgroundColor = "#232323";
			document.getElementById("message").textContent = "Try Again";
		}
	})
};






function changeColors(color) {
	// loop through all squares
	for (var i = 0; i < squares.length; i++) {
		// change each color to match given color
		squares[i].style.backgroundColor = color;
	};	
};





function pickColor() {
	// pick a random number
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
};






function generateRandomColors(num) {
	// make an array
	var arr = [];
	// repeat num times
	for (var i = 0; i < num; i++) {
		// get random color and push into array
		arr.push(randomColor());
	};
	// return that array
	return arr;
};





// generate single random rgb color
function randomColor() {
	// pick a "red" from 0-255
	var red = Math.floor(Math.random() * 256);
	// pick a "green" from 0-255
	var green = Math.floor(Math.random() * 256);
	// pick a "blue" from 0-255
	var blue = Math.floor(Math.random() * 256);
	return "rgb(" + red + ", " + green + ", " + blue + ")";
};





function easyButtonClicked() {
	// reset h1
	document.querySelector("h1").style.backgroundColor = "#41B3A3";
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	colors = generateRandomColors(3);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	// hide bottom squares
	for (i = 3; i < squares.length; i++) {
		squares[i].style.display = "none";
	};

	// add colors to top three squares
	for (i = 2; i >= 0; i--) {
		squares[i].style.backgroundColor = colors[i];
	};
	resetButton.textContent = "New Colors";
	message.textContent = "";
}




function hardButtonClicked() {
	// reset h1
	document.querySelector("h1").style.backgroundColor = "#41B3A3";
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	colors = generateRandomColors(6);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	// show bottom squares
	// hide bottom squares
	for (i = 3; i < squares.length; i++) {
		squares[i].style.display = "inherit";
	};
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	resetButton.textContent = "New Colors";
	message.textContent = "";
}




// reset button function
function resetButtonClicked() {
	// if easy button has class .selected
	if (easyBtn.classList.contains("selected") === true) {
		easyButtonClicked();
	} else {
	 	hardButtonClicked();
	};
	message.textContent = "";
};





