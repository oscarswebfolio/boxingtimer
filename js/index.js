//When i click start the gridForFive hides
document.getElementById("startButton").addEventListener("click", hideFive);
document.getElementById("startButton").addEventListener("click", colorChange);
document.getElementById("startButton").addEventListener("click", playSound);

let prepare;
let rounds;
let time;
let warning;
let rest;

let boxingTimerBackground = document.getElementById('boxingTimerMain');
let timerSection = document.getElementById('timerSection');

//timer background changes colors
function colorChange() {
  if (prepare > 0) {
    boxingTimerBackground.style.backgroundColor = "yellow";
    timerSection.style.backgroundColor = "yellow";
  } else if (prepare === 0) {
    timerSection.style.backgroundColor = "#00FF11";
    boxingTimerBackground.style.backgroundColor = "#00FF11";
  } else if (warning === 10) {
    timerSection.style.backgroundColor = "rgba(255, 140, 0, .8)";
    boxingTimerBackground.style.backgroundColor = "rgba(0,0,0,.1)";
  } else if (warning === 0) {
    //have the rest period kick in
    timerSection.style.backgroundColor = "red";
    boxingTimerBackground.style.backgroundColor = "red";
  } else {
    timerSection.style.backgroundColor = "white";
    boxingTimerBackground.style.backgroundColor = "white";
  }
 
}


//total time decrements 

//start button changes to stop button 

//setup button changes to pause button

//when I click start, the boxing timer starts running


//Play boxing timer sound on click
let mp3 = document.getElementById('mp3');
function playSound() {
 mp3.play(); //remember to setTimeout();
}


//Functions
function hideFive() {
  document.getElementById("gridForFive").style.display = "none";  
}