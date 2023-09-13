import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCwPFSvQHkM7fdfHKFCBtrNP1KBUJCiMik",
  authDomain: "react-chat-app-7d78c.firebaseapp.com",
  projectId: "react-chat-app-7d78c",
  storageBucket: "react-chat-app-7d78c.appspot.com",
  messagingSenderId: "80981378602",
  appId: "1:80981378602:web:451b935329105ec3e4a553",
  measurementId: "G-699FBZPQEY"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);