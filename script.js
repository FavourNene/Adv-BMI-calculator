var form = document.getElementById("form");

function submitForm(event) {
  event.preventDefault();
}
form.addEventListener("submit", submitForm);

function showField() {
  heightUnit = document.getElementById("height-unit").value;
  let confirmFeet = document.getElementById("height-unit");
  if (confirmFeet.value == "feet-inches") {
    document.getElementById("inches").style.display = "inline";
    document.getElementsByName("height-input-field").value = "";
    document.getElementsByName("height-input-field")[0].placeholder =
      "Input height in feet";
  } else {
    document.getElementById("inches").style.display = "none";
  }
}

function change() {
  document.getElementsByName("weight-input-field").value = "";
  document.getElementsByName("weight-input-field")[0].placeholder =
    "Input weight";
}
function changeH() {
  document.getElementsByName("height-input-field").value = "";
  document.getElementsByName("height-input-field")[0].placeholder =
    "Input height";
}
function getOption() {
  weightUnit = document.getElementById("weight-unit").value;
}

document.getElementById("calculate").onclick = function () {
  var weight = parseFloat(document.getElementById("weight-input").value);
  var height = parseFloat(document.getElementById("height-input").value);
  var inches = parseFloat(document.getElementById("inches").value);
  if (weightUnit === "pounds") {
    weight = weight / 2.2046;
  } else {
    weight = weight * 1;
  }
  if (heightUnit === "centimetres") {
    height = height / 100;
  } else if (heightUnit === "feet-inches") {
    height = (height + inches / 12) / 3.28084;
  } else if (heightUnit === "metres") {
    height = height * 1;
  }
  bmi = weight / height ** 2;
  bmi = bmi.toFixed(2);
  document.getElementById("result").innerHTML = `Your BMI is  ${bmi}.`;
  bmi = info(bmi);
};
function info() {
  if (18.5 <= bmi && bmi < 25) {
    document.getElementById("info").innerHTML =
      "Your BMI is within healthy range";
  } else if (bmi >= 25 && bmi < 30) {
    document.getElementById("info").innerHTML = "You are overweight!";
  } else if (bmi > 30) {
    document.getElementById("info").innerHTML = "You are obese!!!";
  } else {
    document.getElementById("info").innerHTML = "You are underweight.";
  }
}
