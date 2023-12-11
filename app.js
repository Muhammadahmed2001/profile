
  
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getAuth , createUserWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyDuOrp8JQixQzRW9yojXIWP1EF8U74uCBk",
    authDomain: "authentication-firebase-e23fb.firebaseapp.com",
    projectId: "authentication-firebase-e23fb",
    storageBucket: "authentication-firebase-e23fb.appspot.com",
    messagingSenderId: "580457386780",
    appId: "1:580457386780:web:a63da704563d16a3bce0d9"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  let userName = document.getElementById("userName")
  let email = document.getElementById("email")
  let password = document.getElementById("password")


  createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });



  export{

    createUserWithEmailAndPassword,
    getAuth,

  }



