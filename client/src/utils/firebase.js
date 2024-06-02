// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "projectmanager-2e46a.firebaseapp.com",
  projectId: "projectmanager-2e46a",
  storageBucket: "projectmanager-2e46a.appspot.com",
  messagingSenderId: "127046647952",
  appId: "1:127046647952:web:cb8b28023d064ee3a75815"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);