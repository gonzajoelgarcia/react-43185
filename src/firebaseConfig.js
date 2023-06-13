import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDhVyHqQM9R1fOQw-I74I4oglpMBvaB5Ag",
  authDomain: "proyecto-fut.firebaseapp.com",
  projectId: "proyecto-fut",
  storageBucket: "proyecto-fut.appspot.com",
  messagingSenderId: "255413906795",
  appId: "1:255413906795:web:6ba6c8084051e4558f302e",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export { firebase, db };
