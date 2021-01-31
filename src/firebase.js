// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyC2GEPgDVp4-oqFUn79F8x4d_R0WBumeg4",
    authDomain: "clone-fe780.firebaseapp.com",
    projectId: "clone-fe780",
    storageBucket: "clone-fe780.appspot.com",
    messagingSenderId: "78764622738",
    appId: "1:78764622738:web:d1561170ebd0be6c18374b",
    measurementId: "G-6SS251S1L7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth }