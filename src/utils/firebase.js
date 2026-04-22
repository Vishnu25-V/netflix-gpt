// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRJUHLI0F2vckL3yQRVQ-bo7qc3J5cl0o",
  authDomain: "streamhub-d60d3.firebaseapp.com",
  projectId: "streamhub-d60d3",
  storageBucket: "streamhub-d60d3.firebasestorage.app",
  messagingSenderId: "953178325435",
  appId: "1:953178325435:web:898221399e29a40f91849e",
  measurementId: "G-DWZLX3VEFG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line
const analytics = getAnalytics(app);

export const auth=getAuth();