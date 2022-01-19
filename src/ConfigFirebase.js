import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/messaging';

const config = {
  apiKey: "AIzaSyChVVYq4ymHpRAoYDoSKf2_X5PVmkDzPT4",
  authDomain: "prjcimpor.firebaseapp.com",
  projectId: "prjcimpor",
  storageBucket: "prjcimpor.appspot.com",
  messagingSenderId: "1024629314229",
  appId: "1:1024629314229:web:df1c5ceec89dfd6ae0e4fc",
  measurementId: "G-YZFYDBSJ18"
}

firebase.initializeApp(config)

// Initialize Cloud Firestore through Firebase
let db = firebase.firestore();

// Disable deprecated features
db.settings({
  //timestampsInSnapshots: true
});

export default {
  db
}
