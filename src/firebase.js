// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCywOk8ozPzU4Q3kl-kVkXyUEaI_VMR0xE",
  authDomain: "financly-2aae6.firebaseapp.com",
  projectId: "financly-2aae6",
  storageBucket: "financly-2aae6.appspot.com",
  messagingSenderId: "739802328084",
  appId: "1:739802328084:web:cf0e3e5778200d45438b01",
  measurementId: "G-902FQYYB57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };