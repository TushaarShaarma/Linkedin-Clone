// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6Ff9rckDFbFxc6MJXMseT-E3R_RvDHpU",
  authDomain: "li-clone-f085c.firebaseapp.com",
  projectId: "li-clone-f085c",
  storageBucket: "li-clone-f085c.appspot.com",
  messagingSenderId: "1008479070182",
  appId: "1:1008479070182:web:5e97fb51e7c17634105827",
  measurementId: "G-QDW5C8V5F2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
