// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7ytLDzBzJgLL0QVxzv5hWQwl9onSsaZ0",
  authDomain: "blogapp-7114f.firebaseapp.com",
  projectId: "blogapp-7114f",
  storageBucket: "blogapp-7114f.firebasestorage.app",
  messagingSenderId: "294446500654",
  appId: "1:294446500654:web:62c2291b05ae48aab288bf",
  measurementId: "G-KCES9J9L48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);