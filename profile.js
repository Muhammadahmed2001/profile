import { auth,onAuthStateChanged,signOut,getDoc,doc,db  } from "/app.js";
// import { importUserName  } from "/signUp.js";
let updateName = document.getElementById("updateName");
let updateEmail = document.getElementById("updateEmail");
let logOutBtn = document.getElementById("logout")
let loader = document.getElementById("loader")
let main = document.getElementById("main")



onAuthStateChanged(auth, async (user) => {
    
    
    
    
    if (user) {
      const docRef = doc(db, "User Name", user.uid);
      const docSnap = await getDoc(docRef);
      console.log("Document data:", docSnap.data());
    // console.log(updateName.innerHTML)
    if (location.pathname !== "/profile.html") {
      location = "./profile.html"
    }
    main.style.display = "flex"
    loader.style.display = "none"
    updateName.innerHTML = docSnap.data().name
    updateEmail.innerHTML = user.email
    
   
 
    const uid = user.uid;
    // ...
  } else {
    if (location.pathname !== "/index.html" && location.pathname !== "/signUp.html" ) {
      location = "index.html"
    }
    // User is signed out
    // ...
  }
});

let logout = ()=>{
  signOut(auth).then(() => {
    console.log("ho gaya")
    // location.href = "./index.html"
  }).catch((error) => {
    console.log(error)
  });
}
logOutBtn && logOutBtn.addEventListener("click",logout)