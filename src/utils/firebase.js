// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCI7n2BT0tht5UXyCkEgqodMFM8k7ZLL20",
  authDomain: "netflix-gpt-719a4.firebaseapp.com",
  projectId: "netflix-gpt-719a4",
  storageBucket: "netflix-gpt-719a4.firebasestorage.app",
  messagingSenderId: "531265471939",
  appId: "1:531265471939:web:70b0552eef4cb2043f6976",
  measurementId: "G-FDV650BS7K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();