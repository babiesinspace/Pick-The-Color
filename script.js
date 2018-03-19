//select a number btw 0-250
function randomNum(){
  return Math.floor(Math.random() * 251)
}

//apply random number to rgb values
function randomColor(){
  return `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;
}

let squares = document.getElementsByClassName('squares')

for (var i = 0; i < squares.length; i++) {
  //assign random color
  squares[i].style.backgroundColor = randomColor();

  //add event listener on each square
  //check to see if color is the selected color
  squares[i].addEventListener("click", function(){
    if (this.style.backgroundColor === presentColor.innerText) {
      alert("Correct!")
    } else {
      alert("Nope!")
    }
  })
}

let selectColor = squares[Math.floor(Math.random() * squares.length)].style.backgroundColor

let presentColor = document.getElementById("rgb")

presentColor.innerText = selectColor

// function shuffleArray(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//       let j = Math.floor(Math.random() * (i + 1));
//       [array[i], array[j]] = [array[j], array[i]];
//   }

// }