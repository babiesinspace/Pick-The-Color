//select a number btw 0-250
function randomNum(){
  return Math.floor(Math.random() * 251)
}

//apply random number to rgb values
function randomColor(){
  return `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;
}

let squares = document.getElementsByClassName('squares')
let gradeGuess = document.getElementById("guess")


for (var i = 0; i < squares.length; i++) {
  //assign random color
  squares[i].style.backgroundColor = randomColor();

  //add event listener on each square
  //check to see if color is the selected color
  squares[i].addEventListener("click", function(){
    let correctSquareColor = this.style.backgroundColor
    if (correctSquareColor === presentColor.innerText) {
      gradeGuess.innerText = "Correct!"
      winningColor(correctSquareColor)
    } else {
      gradeGuess.innerText = "WRONG"
      this.style.backgroundColor = "#666666"
    }
  })
}

let selectColor = squares[Math.floor(Math.random() * squares.length)].style.backgroundColor

let presentColor = document.getElementById("rgb")

presentColor.innerText = selectColor

function winningColor(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color
  }
}

// function shuffleArray(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//       let j = Math.floor(Math.random() * (i + 1));
//       [array[i], array[j]] = [array[j], array[i]];
//   }

// }