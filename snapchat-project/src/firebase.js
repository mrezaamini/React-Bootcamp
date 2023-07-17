import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA-5STddbRwNUcZspeWpwjcUXzXIfN9DPQ",
  authDomain: "snapchat-project-a3311.firebaseapp.com",
  projectId: "snapchat-project-a3311",
  storageBucket: "snapchat-project-a3311.appspot.com",
  messagingSenderId: "245348353867",
  appId: "1:245348353867:web:de4309703d9215c5704ace",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebaseApp.storage();

export { db, auth, provider, storage };
