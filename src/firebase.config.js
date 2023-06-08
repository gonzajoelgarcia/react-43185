// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhVyHqQM9R1fOQw-I74I4oglpMBvaB5Ag",
  authDomain: "proyecto-fut.firebaseapp.com",
  projectId: "proyecto-fut",
  storageBucket: "proyecto-fut.appspot.com",
  messagingSenderId: "255413906795",
  appId: "1:255413906795:web:6ba6c8084051e4558f302e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
