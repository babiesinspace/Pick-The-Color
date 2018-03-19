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
  squares[i].style.backgroundColor = randomColor();
}

