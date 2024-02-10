import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBLMv7V-nGSkrg_qMOUTjHyZlk-ckmq96A",
    authDomain: "hotel-grand-vardhaman.firebaseapp.com",
    projectId: "hotel-grand-vardhaman",
    storageBucket: "hotel-grand-vardhaman.appspot.com",
    messagingSenderId: "873227257354",
    appId: "1:873227257354:web:cbbb4aacbd798b847c01f3"
}

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider};