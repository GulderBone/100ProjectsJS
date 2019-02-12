var correctNumber;
window.onLoad = generateNumber();

function generateNumber() {
  correctNumber = Math.floor(Math.random() * 10);
  console.log(correctNumber);
}

function check() {
  var userInput = document.getElementById("number").value;

  if (userInput == '') {
    document.getElementById("result").innerHTML = "You need to type a number first :)"
  } else if (userInput > correctNumber) {
    document.getElementById("result").innerHTML = "Try a lower number"
  } else if (userInput < correctNumber) {
    document.getElementById("result").innerHTML = "Try a higher number"
  } else {
    document.getElementById("result").innerHTML = "You are right it is " + correctNumber + "!"
  }
}
