// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSdhEUymc63tNHPx5kMv8N4h3fGHfeflw",
  authDomain: "moviesgpt-b2f40.firebaseapp.com",
  projectId: "moviesgpt-b2f40",
  storageBucket: "moviesgpt-b2f40.appspot.com",
  messagingSenderId: "371652443434",
  appId: "1:371652443434:web:5e8bd4b63fff53d25a3253",
  measurementId: "G-D28VGRT5E9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
