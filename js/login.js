import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyDQIem4w5S_kltclA6aWknU4I6FZHDi1G0",
  authDomain: "sanjeevan-33-292ce.firebaseapp.com",
  projectId: "sanjeevan-33-292ce",
  storageBucket: "sanjeevan-33-292ce.appspot.com",
  messagingSenderId: "838273827123",
  appId: "1:838273827123:web:2b7aacc7adca2a5f9e3e46"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = "en"
const provider = new GoogleAuthProvider();

const googleLogin = document.getElementById("google-sign");
googleLogin.addEventListener("click", function () {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;
      console.log(user);
      window.location.href = "../dist/convert.html";
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    })
})
const googleLogin1 = document.getElementById("google-sign1");
googleLogin1.addEventListener("click", function () {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;
      console.log(user);
      window.location.href = "../dist/convert.html";
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    })
})
