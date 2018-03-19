let squares = document.getElementsByClassName('squares')
let gradeGuess = document.getElementById("guess")
let head = document.querySelector("h1")
let reset = document.getElementById("reset")
let presentColor = document.getElementById("rgb")


//select a number btw 0-250
function randomNum(){
  return Math.floor(Math.random() * 256)
}

//apply random number to rgb values
function randomColor(){
  return `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;
}

//out of the colors generated, select the random one to guess
function selectColor(){ 
  return squares[Math.floor(Math.random() * squares.length)].style.backgroundColor
}

//change all squares to winning color
function winningColor(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color
  }
}

//presents the rgb string to user
function showColorString(){
  presentColor.innerText = selectColor();
}

//initialize color board and judge
function gameStart(){
  for (var i = 0; i < squares.length; i++) {
    //assign random color
    squares[i].style.backgroundColor = randomColor();
    selectColor()
    showColorString();

    //add event listener on each square
    //check to see if color is the selected color
    squares[i].addEventListener("click", function(){
      let correctSquareColor = this.style.backgroundColor
      if (correctSquareColor === presentColor.innerText) {
        gradeGuess.innerText = "Correct!"
        winningColor(correctSquareColor)
        head.style.backgroundColor = correctSquareColor
        reset.innerText = "Play Again!"
      } else {
        gradeGuess.innerText = "WRONG"
        this.style.backgroundColor = "#666666"
      }
    })
  }
}

reset.addEventListener("click", function(){
  gradeGuess.innerText = "";
  this.innerText = "New Colors"
  head.style.backgroundColor = "";
  gameStart();
})


//start the game on load
gameStart();

// function shuffleArray(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//       let j = Math.floor(Math.random() * (i + 1));
//       [array[i], array[j]] = [array[j], array[i]];
//   }

// }