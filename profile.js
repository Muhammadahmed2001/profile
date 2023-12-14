import { auth,onAuthStateChanged  } from "/app.js";
let updateName = document.getElementById("updateName");
let updateEmail = document.getElementById("updateEmail");




onAuthStateChanged(auth, (user) => {
  if (user) {
      console.log(user)
      console.log(updateName.innerHTML)
      updateName.innerHTML = user.email.slice(0,user.email.indexOf("@"))
      updateEmail.innerHTML = user.email
 
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});