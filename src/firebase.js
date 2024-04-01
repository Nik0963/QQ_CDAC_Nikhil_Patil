// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPP6uTd5p38E8LJTpofxPvwAgG3M8IujU",
  authDomain: "react-chat-30a8f.firebaseapp.com",
  projectId: "react-chat-30a8f",
  storageBucket: "react-chat-30a8f.appspot.com",
  messagingSenderId: "635167659645",
  appId: "1:635167659645:web:dcbc7d9987793c4fef0314"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);