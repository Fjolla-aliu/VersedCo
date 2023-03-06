import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMftLS_hH6kphChwTIleTF94SAMZZIMG0",
  authDomain: "auth-versedco.firebaseapp.com",
  projectId: "auth-versedco",
  storageBucket: "auth-versedco.appspot.com",
  messagingSenderId: "762940600126",
  appId: "1:762940600126:web:62eec0a1416466436e466f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export { auth }