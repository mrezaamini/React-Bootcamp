import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC-B60EBsDH3DvQ_X4vErLnIRUMFbQBoT4",
  authDomain: "project-66d5d.firebaseapp.com",
  projectId: "project-66d5d",
  storageBucket: "project-66d5d.appspot.com",
  messagingSenderId: "63425546435",
  appId: "1:63425546435:web:6e5462f6cf8fa10fc67a76",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
