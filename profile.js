import { auth,onAuthStateChanged,signOut  } from "/app.js";
// import { importUserName  } from "/signUp.js";
let updateName = document.getElementById("updateName");
let updateEmail = document.getElementById("updateEmail");
let logOutBtn = document.getElementById("logout")
let loader = document.getElementById("loader")
let main = document.getElementById("main")



// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // console.log(updateName.innerHTML)
//     if (location.pathname !== "/profile.html") {
//       location = "./profile.html"
//     }
//     main.style.display = "flex"
//     loader.style.display = "none"
//     updateName.innerHTML = user.email.slice(0,user.email.indexOf("@"))
//     updateEmail.innerHTML = user.email
//     // console.log(importUserName.value)
   
 
//     const uid = user.uid;
//     // ...
//   } else {
//     if (location.pathname !== "/index.html" && location.pathname !== "/signUp.html" ) {
//       location = "index.html"
//     }
//     // User is signed out
//     // ...
//   }
// });

// let logout = ()=>{
//   signOut(auth).then(() => {
//     console.log("ho gaya")
//     // location.href = "./index.html"
//   }).catch((error) => {
//     console.log(error)
//   });
// }
// logOutBtn && logOutBtn.addEventListener("click",logout)