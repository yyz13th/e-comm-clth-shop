// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPF4Jix8VnGVNIC8Vc4PpZIqeBSPVLhYw",
  authDomain: "crwn-e-comm-clothing.firebaseapp.com",
  projectId: "crwn-e-comm-clothing",
  storageBucket: "crwn-e-comm-clothing.appspot.com",
  messagingSenderId: "1002756653407",
  appId: "1:1002756653407:web:0523a22264151b4baf36ea"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    promt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);