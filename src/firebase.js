// Import the functions you need from the SDKs you need
import firebase from 'firebase';





const firebaseConfig = {
  apiKey: "AIzaSyDBchq_m6Vq646lRYTWZieMX2BSB2nxZ3w",
  authDomain: "linkedin-clone-2a1aa.firebaseapp.com",
  projectId: "linkedin-clone-2a1aa",
  storageBucket: "linkedin-clone-2a1aa.appspot.com",
  messagingSenderId: "208355599104",
  appId: "1:208355599104:web:c4e9a22f64e74541ee09e5",
  measurementId: "G-HX85XB0B3K"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();


const auth = firebase.auth();



export {db, auth};