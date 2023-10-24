// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFIDIaLA7IaUr8DlMoARFA4gZbgWtBcaY",
  authDomain: "loons-33603.firebaseapp.com",
  projectId: "loons-33603",
  storageBucket: "loons-33603.appspot.com",
  messagingSenderId: "868287242650",
  appId: "1:868287242650:web:f3a04a6789ab05175f9a23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
