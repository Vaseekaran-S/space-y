
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDlWo2NFlfDq6qUMfHV4yZwbdvOAVUhdiw",
  authDomain: "web-app-1a833.firebaseapp.com",
  projectId: "web-app-1a833",
  storageBucket: "web-app-1a833.appspot.com",
  messagingSenderId: "436256551120",
  appId: "1:436256551120:web:70657065be875784fbaed5",
  measurementId: "G-ZR6QYYZTZN"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
const auth = getAuth(app)

export { db,auth }