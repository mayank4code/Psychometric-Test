// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyAOfZSGDEoM37D2T0ROx5YGJwOifJllluY",
    authDomain: "psychometric-test-22709.firebaseapp.com",
    projectId: "psychometric-test-22709",
    storageBucket: "psychometric-test-22709.appspot.com",
    messagingSenderId: "878549867210",
    appId: "1:878549867210:web:266422e7c995ce42d4f233",
    measurementId: "G-6KKD7JL4ZY"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
