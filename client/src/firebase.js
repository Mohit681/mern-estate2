// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-9e401.firebaseapp.com",
  projectId: "mern-estate-9e401",
  storageBucket: "mern-estate-9e401.appspot.com",
  messagingSenderId: "502250830843",
  appId: "1:502250830843:web:754758b439dfb8a9be295e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);