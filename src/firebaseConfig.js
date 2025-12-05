// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZvL5sr6L1i4owOccA-uYKYQVcSmVNZoo",
  authDomain: "crear-landing-santamaria.firebaseapp.com",
  projectId: "crear-landing-santamaria",
  storageBucket: "crear-landing-santamaria.firebasestorage.app",
  messagingSenderId: "808174048350",
  appId: "1:808174048350:web:b4642fec1a50d984fc90cf",
  measurementId: "G-YDVT1421Q6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);