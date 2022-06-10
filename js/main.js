let age = document.getElementById("age");
let type = document.getElementById("type");
let stars = document.getElementById("stars");
let ageInput = document.getElementById("ageInput");

let myButton = document.getElementById("myButton");
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
  let year = new Date();
  let currentYear = year.getFullYear();
  let realAge = currentYear - ageInput.value;
  age.innerHTML = "Your Age is " + realAge;
  if (realAge > 21) {
    type.innerHTML = "You Are Adult";
  } else {
    type.innerHTML = "You Are Young";
  }

  for (let i = 0; i < realAge; i++) {
    stars.innerHTML += `* `;
  }
}
