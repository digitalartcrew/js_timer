//Global variables
var secondsRemaining;
var intervalHandle;
//Create 4th
function resetPage(){
	document.getElementById("inputArea").style.display ="block";
}

//Create third
function tick(){
	//Gradding h1 that displays the time
	var timeDisplay = document.getElementById("time");
	//turn seconds into minutes and seconds
	var min = Math.floor(secondsRemaining/60);
	var sec = secondsRemaining - (min * 60);

	//add a leading zero if seconds less than 10
	if(sec < 10){
		sec = "0" + sec;
	}
	var message = min + ":" + sec;
	//now change the display
	timeDisplay.innerHTML = message;

	//stop once timer hits zero
	if(secondsRemaining === 0){
		alert("Done!");
		clearInterval(intervalHandle);
		resetPage();
	}
	secondsRemaining--;
}

//Create function second
function startCountdown() {
	//get contents of minutes text box
	var minutes = document.getElementById("minutes").value;
	//Check if a number has been entered
	if (isNaN(minutes)) {
		alert("You must enter a number");
		return;
	}

	//how many seconds?
	secondsRemaining = minutes * 60;
	//every second call the "tick" function
	intervalHandle = setInterval(tick,1000);
	//hide the form
	document.getElementById("inputArea").style.display = "none";
}

//Create this section first
window.onload = function(){
	//This creates the input box and it has an id of minutes
	var inputMinutes = document.createElement("input");
	inputMinutes.setAttribute("id","minutes");
	inputMinutes.setAttribute("type","text");
	//create a button
	var startButton = document.createElement("input");
	startButton.setAttribute("type","button");
	startButton.setAttribute("value","Start");
	startButton.onclick = function(){
		startCountdown();
	};

	//Add to the DOM
	document.getElementById("inputArea").appendChild(inputMinutes);
	document.getElementById("inputArea").appendChild(startButton);


};