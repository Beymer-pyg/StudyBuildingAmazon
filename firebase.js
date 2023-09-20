import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjXNKIwQtHb253EJ9Amns7XCWLCge1uT0",
  authDomain: "studybuilding-2.firebaseapp.com",
  projectId: "studybuilding-2",
  storageBucket: "studybuilding-2.appspot.com",
  messagingSenderId: "259682326419",
  appId: "1:259682326419:web:06326e88447afa7275fa66",
  measurementId: "G-9GBDFVZK3Q",
};

/* const app = !firebase.apps.lenght
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
export default db; */

/* const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);

export default db; */

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
