// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBmTPROys0Ob0aXn5DKC0EqpbRrdzQxbg",
  authDomain: "netflixclone-b381e.firebaseapp.com",
  projectId: "netflixclone-b381e",
  storageBucket: "netflixclone-b381e.appspot.com",
  messagingSenderId: "920885643333",
  appId: "1:920885643333:web:7423068d751a4bb9be7b2c",
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
