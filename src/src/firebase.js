import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDBchq_m6Vq646lRYTWZieMX2BSB2nxZ3w",
  authDomain: "linkedin-clone-2a1aa.firebaseapp.com",
  projectId: "linkedin-clone-2a1aa",
  storageBucket: "linkedin-clone-2a1aa.appspot.com",
  messagingSenderId: "208355599104",
  appId: "1:208355599104:web:c4e9a22f64e74541ee09e5",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };



