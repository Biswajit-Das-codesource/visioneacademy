// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCcln7NX3aHNSW4QtgRwT3SMnxfJr0oRYY",
  authDomain: "visioneacademy-31bf3.firebaseapp.com",
  projectId: "visioneacademy-31bf3",
  storageBucket: "visioneacademy-31bf3.appspot.com",
  messagingSenderId: "397447196896",
  appId: "1:397447196896:web:9c22ec4674f19178a4e085",
  measurementId: "G-FG1FSX9906"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
