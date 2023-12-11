import { auth, createUserWithEmailAndPassword } from "/app.js";

let userName = document.getElementById("userName");
let email = document.getElementById("email");
let password = document.getElementById("password");
let registerBtn = document.getElementById("register-btn");
let profilName = document.getElementById("profilName")


let registertion = () => {
  createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // profileUserName.innerHTML = userName.value
    // Signed up
    const user = userCredential.user;
    location.href = "index.html"
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    // ..
  });
};
registerBtn.addEventListener("click", registertion);

