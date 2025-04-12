// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyB_d4GhomjX1Xi0Y59ofpoC6D0MWoa4QJc",
    authDomain: "ideos-f82a1.firebaseapp.com",
    projectId: "ideos-f82a1",
    storageBucket: "ideos-f82a1.firebasestorage.app",
    messagingSenderId: "187086349007",
    appId: "1:187086349007:web:3655565172d764888d0dba",
    measurementId: "G-ZML5YRHM1M"
  };
  

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
