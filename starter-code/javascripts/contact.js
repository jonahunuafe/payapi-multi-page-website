const form = document.querySelector(".form");
const email = document.querySelector("#email");
const errorMsg = document.querySelector(".error-msg");

function preventSubmit(event) {
    event.preventDefault();
}

function validateEmail() {
    if (email.value === "") {
      document.querySelector(".error-msg").innerHTML = "This field can't be empty";
    } else {
      document.querySelector(".error-msg").innerHTML = "";
    }
}

form.addEventListener("submit", preventSubmit);
email.addEventListener("input", validateEmail);