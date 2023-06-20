import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAhJY91mNEphaqOHmyfYPhYZ8A_sIXba3U",
  authDomain: "linkedin-5cd9c.firebaseapp.com",
  projectId: "linkedin-5cd9c",
  storageBucket: "linkedin-5cd9c.appspot.com",
  messagingSenderId: "803776026619",
  appId: "1:803776026619:web:1f5b4fb27becb3cc6add5e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
