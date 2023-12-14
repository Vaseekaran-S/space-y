
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDOGMAyoFVrkv-lFZIUYQ7curc2UolWO1c",
  authDomain: "space-y-a17b7.firebaseapp.com",
  projectId: "space-y-a17b7",
  storageBucket: "space-y-a17b7.appspot.com",
  messagingSenderId: "96592617053",
  appId: "1:96592617053:web:5db52781128b0e8591f7b4",
  measurementId: "G-LRR9FWXZ6D"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
const auth = getAuth(app)

export { db,auth }