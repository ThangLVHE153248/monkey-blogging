// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_gQ6XRkDrbqZ08xxHmJTJD4aD7ZB-4ZM",
  authDomain: "monkey-blogging-b1965.firebaseapp.com",
  projectId: "monkey-blogging-b1965",
  storageBucket: "monkey-blogging-b1965.appspot.com",
  messagingSenderId: "1025687594168",
  appId: "1:1025687594168:web:539fdd5090e758f0d2c04d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
