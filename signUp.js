
import {
    getAuth,
    createUserWithEmailAndPassword,
} from "app.js"




let registerBtn = document.getElementById("register-btn")
let userName = document.getElementById("userName")
let email = document.getElementById("email")
let password = document.getElementById("password")

registerBtn.addEventListener("click" , () => {
    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log(user)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)
      // ..
    });

})