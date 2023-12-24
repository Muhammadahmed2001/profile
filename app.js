import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDuOrp8JQixQzRW9yojXIWP1EF8U74uCBk",
  authDomain: "authentication-firebase-e23fb.firebaseapp.com",
  projectId: "authentication-firebase-e23fb",
  storageBucket: "authentication-firebase-e23fb.appspot.com",
  messagingSenderId: "580457386780",
  appId: "1:580457386780:web:a63da704563d16a3bce0d9",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

let email = document.getElementById("email");
let password = document.getElementById("password");
let logInBtn = document.getElementById("login");
let loader = document.getElementById("loader");
let main = document.getElementById("main");

logInBtn &&
  logInBtn.addEventListener("click", () => {
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        // main.style.display = "flex"
        // loader.style.display = "block";
        const user = userCredential.user;
        // location.href = "profile.html";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  });

export {
  createUserWithEmailAndPassword,
  auth,
  onAuthStateChanged,
  signOut,
  doc,
  setDoc,
  db,
  getDoc,
};
