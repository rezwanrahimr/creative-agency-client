// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoP1zykwjMUHIlBIiN1m5lhq5GQNIcOxo",
  authDomain: "creative-agency-6b795.firebaseapp.com",
  projectId: "creative-agency-6b795",
  storageBucket: "creative-agency-6b795.appspot.com",
  messagingSenderId: "602464587685",
  appId: "1:602464587685:web:77ad207cb4c551b235a24c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
