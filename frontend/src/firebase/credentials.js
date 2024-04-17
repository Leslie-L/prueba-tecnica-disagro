// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmbyRUO_F7kj9k3FhgXs87dXpXz9vn_a8",
  authDomain: "authdisagro.firebaseapp.com",
  projectId: "authdisagro",
  storageBucket: "authdisagro.appspot.com",
  messagingSenderId: "93700473666",
  appId: "1:93700473666:web:82a99f31db72e8dfc8fedb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)