// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnfpRX1p2DCJFTtK_82nnhoWZ-5i4tLKw",
  authDomain: "react-js-rdr-games.firebaseapp.com",
  projectId: "react-js-rdr-games",
  storageBucket: "react-js-rdr-games.firebasestorage.app",
  messagingSenderId: "430485418056",
  appId: "1:430485418056:web:87d4bb02b1d59c44a1687d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// "db" Variable para la base de datos
const db = getFirestore(app);

// "auth" Para login
const auth = getAuth(app);

//export { db };
export { db, auth };
