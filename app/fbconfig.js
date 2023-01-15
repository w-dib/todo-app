import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDvva-JsUdoKV2C70gsvgP3N-aED6LYlek",
  authDomain: "todo-2d0bc.firebaseapp.com",
  projectId: "todo-2d0bc",
  storageBucket: "todo-2d0bc.appspot.com",
  messagingSenderId: "350426375236",
  appId: "1:350426375236:web:16c77c9e3d0e931ccd8811",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
