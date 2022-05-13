var age = document.getElementById("age");
var type = document.getElementById("type");
var stars = document.getElementById("stars");
var ageInput = document.getElementById("ageInput");

var myButton = document.getElementById("myButton");
myButton.disabled = true;
ageInput.addEventListener("change", stateHandle);
function stateHandle() {
  if (ageInput.value === "") {
    myButton.disabled = true;
  } else {
    myButton.disabled = false;
  }
}

function calcAge() {
  var year = new Date();
  var currentYear = year.getFullYear();
  var realAge = currentYear - ageInput.value;
  age.innerHTML = "Your Age is " + realAge;
  if (realAge > 21) {
    type.innerHTML = "You Are Adult";
  } else {
    type.innerHTML = "You Are Young";
  }

  for (var i = 0; i < realAge; i++) {
    stars.innerHTML += "*";
  }
}
