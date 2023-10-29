// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB914C1rp9fboFnzdaKNCGKYNFj-Bl697k",
  authDomain: "codoacodo23643.firebaseapp.com",
  projectId: "codoacodo23643",
  storageBucket: "codoacodo23643.appspot.com",
  messagingSenderId: "528879543001",
  appId: "1:528879543001:web:f7fdf7d8315a2b3be454c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);