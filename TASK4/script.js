let clearScreen = () => {
  document.getElementById("result").value = "";
}

let display = (value) => {
  document.getElementById("result").value += value;
}

let calculate = () => {
  var p = document.getElementById("result").value;
  var q = eval(p);
  document.getElementById("result").value = q;
}