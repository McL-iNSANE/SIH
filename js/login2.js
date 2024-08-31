
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth, onAuthStateChanged,signOut } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDQIem4w5S_kltclA6aWknU4I6FZHDi1G0",
    authDomain: "sanjeevan-33-292ce.firebaseapp.com",
    projectId: "sanjeevan-33-292ce",
    storageBucket: "sanjeevan-33-292ce.appspot.com",
    messagingSenderId: "838273827123",
    appId: "1:838273827123:web:2b7aacc7adca2a5f9e3e46"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


const user = auth.currentUser;

function updateUserProfile(user) {
    // const userName = user.displayName;
    // const userEmail = user.email;
    const userProfilePicture = user.photoURL;
    // const userProfilePicture1 = user.photoURL;

    // document.getElementById("userName").textContent = userName;
    // document.getElementById("userEmail").textContent = userEmail;
    document.getElementById("userProfilePicture").src = userProfilePicture;
    // document.getElementById("userProfilePicture1").src = userProfilePicture1;
}
onAuthStateChanged(auth, (user) => {
    if (user) {
        updateUserProfile(user);
        const uid = user.uid;
        return uid;
    }
    else {
        alert("Create Account first & login");
        window.location.href = "../index.html";
    }
})
// updateUserProfile()
const logoutButton = document.getElementById('logout');
logoutButton.addEventListener('click', () => {
    signOut(auth).then(() => {
        // Sign-out successful.
        window.location.href = '../index.html'; // Redirect to login page or home page
    }).catch((error) => {
        // An error happened.
        console.error('Logout Error:', error.message);
        alert('Error logging out. Please try again.');
    });
});