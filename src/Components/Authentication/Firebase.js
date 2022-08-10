// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBLXi1_TXeDag6tciOBM7MWZUf8aHRBAZ0",
    authDomain: "react-art-app.firebaseapp.com",
    projectId: "react-art-app",
    storageBucket: "react-art-app.appspot.com",
    messagingSenderId: "474264199888",
    appId: "1:474264199888:web:19420167e64c574d4674d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth