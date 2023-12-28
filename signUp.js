import { auth, createUserWithEmailAndPassword,  doc, setDoc,db } from "/app.js";

let userName = document.getElementById("userName");
let email = document.getElementById("email");
let password = document.getElementById("password");
let registerBtn = document.getElementById("register-btn");


let registertion = async () => {

  if(userName.value.trim() !== "" ){
    console.log(userName.value)

    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) =>  {
      const user = userCredential.user;
       setDoc(doc(db, "user name", user.uid), {
        name: userName.value,
      });
    // profileUserName.innerHTML = userName.value
    // Signed up
    
    
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    // ..
  });
}else{
  alert("Plz Enter Your User Name")
}
};
registerBtn && registerBtn.addEventListener("click", registertion);


