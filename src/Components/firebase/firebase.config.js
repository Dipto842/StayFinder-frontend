// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYV2WOtM9YHUO0QAzKOZH06hQ9APOWaK0",
  authDomain: "stayfinde.firebaseapp.com",
  projectId: "stayfinde",
  storageBucket: "stayfinde.firebasestorage.app",
  messagingSenderId: "949668157795",
  appId: "1:949668157795:web:0a4f3c49b0271ac95f9b56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth
