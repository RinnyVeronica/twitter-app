
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_1JW2tvAtmc6CcbgcApB9kcI4QW29Wqc",
  authDomain: "twitter-app-402de.firebaseapp.com",
  projectId: "twitter-app-402de",
  storageBucket: "twitter-app-402de.appspot.com",
  messagingSenderId: "493897901696",
  appId: "1:493897901696:web:e3f521a9736120bff22865",
  measurementId: "G-N21P8FLXJJ"
};




  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  export default db;