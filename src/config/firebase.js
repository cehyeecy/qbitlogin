// Import the functions you need from the SDKs you need
import firebase from 'firebase'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5uYCgU0EZN0jhr6PS5FYQBRLSTBvMiIA",
  authDomain: "authentication-qbit.firebaseapp.com",
  projectId: "authentication-qbit",
  storageBucket: "authentication-qbit.appspot.com",
  messagingSenderId: "846792735944",
  appId: "1:846792735944:web:3af038944ee401a93ab9fd",
  measurementId: "G-2D907PZC99"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const firebaseAuth = app.auth()