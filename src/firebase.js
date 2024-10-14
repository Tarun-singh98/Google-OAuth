// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaVOleJD9Z8yq8K9lMikFrzZ0XC0mPLlk",
  authDomain: "o-auth-d35fb.firebaseapp.com",
  projectId: "o-auth-d35fb",
  storageBucket: "o-auth-d35fb.appspot.com",
  messagingSenderId: "455214840016",
  appId: "1:455214840016:web:8715d3d7e1741f48c206d5",
  measurementId: "G-J23Z1B3X5N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };
