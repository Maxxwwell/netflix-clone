// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxuQ-n8cqmEINHq84b_IEgn_gfXNrvxyc",
  authDomain: "netflix-clone-d96a3.firebaseapp.com",
  projectId: "netflix-clone-d96a3",
  storageBucket: "netflix-clone-d96a3.appspot.com",
  messagingSenderId: "682689817542",
  appId: "1:682689817542:web:e556a418a6e856edab60c7",
  measurementId: "G-2LV9G3WWL9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

