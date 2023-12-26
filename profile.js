import { auth,onAuthStateChanged,signOut,getDoc,doc,db  } from "/app.js";
// import { importUserName  } from "/signUp.js";
let updateName = document.getElementById("updateName");
let updateEmail = document.getElementById("updateEmail");
let logOutBtn = document.getElementById("logout")
let loader = document.getElementById("loader")
let main = document.getElementById("main")
let file = document.getElementById("file")






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


file && file.addEventListener("change",()=>{
  let profileImg = document.getElementById("profile-img")
  profileImg.src = URL.createObjectURL(event.target.files[0])
})

const uploadTostorage = (file)=>{
  return new Promise((resolve,reject)=>{
    const fileName = file.files[0]
  const storageRef = ref(storage, 'images/' + file.name);
})
}

let logout = ()=>{
  signOut(auth).then(() => {
    console.log("ho gaya")
    // location.href = "./index.html"
  }).catch((error) => {
    console.log(error)
  });
}
logOutBtn && logOutBtn.addEventListener("click",logout)