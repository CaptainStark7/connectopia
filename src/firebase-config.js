// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUhnKxxR43QyXfaHPnkk4nwDdii4ecsyw",
  authDomain: "connectopia-b0589.firebaseapp.com",
  projectId: "connectopia-b0589",
  storageBucket: "connectopia-b0589.appspot.com",
  messagingSenderId: "670389042840",
  appId: "1:670389042840:web:5a6301fb6462ece6775aed",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

//
//
//
//
//
//
//
//

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAUhnKxxR43QyXfaHPnkk4nwDdii4ecsyw",
//   authDomain: "connectopia-b0589.firebaseapp.com",
//   projectId: "connectopia-b0589",
//   storageBucket: "connectopia-b0589.appspot.com",
//   messagingSenderId: "670389042840",
//   appId: "1:670389042840:web:5a6301fb6462ece6775aed",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
