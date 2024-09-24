let num1 = 8;
let num2 = 7;

document.getElementById("firstNumber").innerHTML = 8;
document.getElementById("secondNumber").innerHTML = 7;

function add() {
  let r = num1 + num2;
  document.getElementById("result").innerHTML = "Sum: " + r;
}

function sub() {
  let r = num1 - num2;
  document.getElementById("result").innerHTML = "Sub: " + r;
}

function mul() {
  let r = num1 * num2;
  document.getElementById("result").innerHTML = "Mul: " + r;
}

function div() {
  let r = num1 / num2;
  document.getElementById("result").innerHTML = "Div: " + r;
}
