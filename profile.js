import {
  auth,
  onAuthStateChanged,
  signOut,
  getDoc,
  doc,
  db,
  storage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  setDoc,
} from "/app.js";
// import { importUserName  } from "/signUp.js";
let updateName = document.getElementById("updateName");
let updateEmail = document.getElementById("updateEmail");
let logOutBtn = document.getElementById("logout");
let loader = document.getElementById("loader");
let main = document.getElementById("main");
let uploadProfileBtn = document.getElementById("picture-update-btn");
let profile = document.getElementById("profile-img");

var userId = "";

onAuthStateChanged(auth, async (user) => {
  if (user) {
    userId = user.uid;
    const docRef = doc(db, "user name", userId);
    const docSnap = await getDoc(docRef);
    console.log("Document data:", docSnap.data());
    // console.log(updateName.innerHTML)
    if (location.pathname !== "/profile.html") {
      location = "./profile.html";
    }
    main.style.display = "flex";
    loader.style.display = "none";
    updateName.innerHTML = docSnap.data().name;
    updateEmail.innerHTML = user.email;
    if(docSnap.data().profileImg !== ""){
      const docRef = doc(db, "Profile Img", userId);
      const docSnap = await getDoc(docRef);
      profile.src = docSnap.data().profileImg
      // console.log("Document data:", docSnap.id);
    }



    const uid = user.uid;
    // console.log(uid,user.uid)
    // ...
  } else {
    if (
      location.pathname !== "/index.html" &&
      location.pathname !== "/signUp.html"
    ) {
      location = "index.html";
    }
    // User is signed out
    // ...
  }
});

let uploadToStorage = (file) => {
  return new Promise((resolve, reject) => {
    const fileName = file.name;

    const storageRef = ref(storage, `user/${userId}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        reject(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          resolve(downloadURL);
        });
      }
    );
  });
};

let uploadFile = async () => {
  const file = document.getElementById("file");
  const url = await uploadToStorage(file.files[0]);
  console.log("url-------------->", url);
  setDoc(doc(db, "Profile Img", userId), {
    profileImg: url,
  });

  // const docRef = doc(db, "Profile Img", userId);
  // const docSnap = await getDoc(docRef);
  // console.log(docSnap.data())
};
const file = document.getElementById("file");

file &&
  file.addEventListener("change", () => {
    profile.src = URL.createObjectURL(event.target.files[0]);
    console.log();
  });

uploadProfileBtn && uploadProfileBtn.addEventListener("click", uploadFile);

let logout = () => {
  signOut(auth)
    .then(() => {
      console.log("ho gaya");
    })
    .catch((error) => {
      console.log(error);
    });
};
logOutBtn && logOutBtn.addEventListener("click", logout);
