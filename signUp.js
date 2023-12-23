import { auth, createUserWithEmailAndPassword,  doc, setDoc,db } from "/app.js";

let userName = document.getElementById("userName");
let email = document.getElementById("email");
let password = document.getElementById("password");
let registerBtn = document.getElementById("register-btn");


let registertion = () => {

  console.log()
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // profileUserName.innerHTML = userName.value
      // Signed up
      const user = userCredential.user;
      setDoc(doc(db, "User Nmae", user.uid), {
        name: userName.value,
     
      });
      // location.href = "index.html"
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      // ..
    });
};
registerBtn && registerBtn.addEventListener("click", registertion);


