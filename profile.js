import { auth,onAuthStateChanged,signOut,getDoc,doc,db,storage,ref,uploadBytesResumable, getDownloadURL  } from "/app.js";
// import { importUserName  } from "/signUp.js";
let updateName = document.getElementById("updateName");
let updateEmail = document.getElementById("updateEmail");
let logOutBtn = document.getElementById("logout")
let loader = document.getElementById("loader")
let main = document.getElementById("main")
let uploadProfileBtn = document.getElementById("picture-update")







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


let uploadToStorage = (file)=>{
  console.log()
  return new Promise((resolve,reject)=>{
  let fileName = file.files[0].name
  const storageRef = ref(storage, `user/216sffsd2fs68${fileName.slice(fileName.lastIndexOf("."))}`);
  const uploadTask = uploadBytesResumable(storageRef, file);
  uploadTask.on('state_changed', 
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
        case 'running':
          console.log('Upload is running');
        break;
      }
    }, 
  (error) => {
    reject(error)
  }, 
  () => {
    // Handle successful uploads on complete
    
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      resolve('File available at', downloadURL);
    });
  }
  );
})
}

// file && file.addEventListener("change",()=>{
  //   let profileImg = document.getElementById("profile-img")
  //   profileImg.src = URL.createObjectURL(event.target.files[0])
  // })
  
  
  let uploadfile = async (file)=>{
    let file = document.getElementById("file")
  const url = await uploadToStorage(file)
  console.log("URl-------------->",url)
}

uploadProfileBtn && uploadProfileBtn.addEventListener("click",uploadfile);



// const uploadTostorage = (file)=>{
//   const fileName = file.files[0]
// //   return new Promise((resolve,reject)=>{
// //   // const storageRef = ref(storage, 'images/' + file.name);
// // })
// }
// uploadTostorage()
let logout = ()=>{
  signOut(auth).then(() => {
    console.log("ho gaya")
    // location.href = "./index.html"
  }).catch((error) => {
    console.log(error)
  });
}
logOutBtn && logOutBtn.addEventListener("click",logout)