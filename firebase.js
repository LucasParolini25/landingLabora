// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhw2mhcvvkwesCPTH9UFyQ8crJfhAHIWc",
  authDomain: "prueba-nx.firebaseapp.com",
  projectId: "prueba-nx",
  storageBucket: "prueba-nx.firebasestorage.app",
  messagingSenderId: "936274897913",
  appId: "1:936274897913:web:d5453c8a3d25c9b7ca6b28",
  measurementId: "G-EP2CC11TML"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);