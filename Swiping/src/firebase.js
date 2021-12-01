import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCO43vV9y-2ARVEpEldgdlRBJksC0DLoeA",
    authDomain: "valen-80522.firebaseapp.com",
    projectId: "valen-80522",
    storageBucket: "valen-80522.appspot.com",
    messagingSenderId: "557390027634",
    appId: "1:557390027634:web:b22c39c4978dcd74b1dbeb",
    measurementId: "G-DGE65QRZXL"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;