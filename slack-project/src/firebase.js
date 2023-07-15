import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDjt6zJa6AQSj15KDV1-Z7m-zu9Rb2Loh4",
  authDomain: "slack-project-31e66.firebaseapp.com",
  projectId: "slack-project-31e66",
  storageBucket: "slack-project-31e66.appspot.com",
  messagingSenderId: "758154445574",
  appId: "1:758154445574:web:5ced4c481b219772bad487",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
