import firebase from "firebase/compat/app";

import "firebase/compat/auth";

import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBtmJ11BBW6XIgvWX1I9BO56ybhtu4Yn8s",
    authDomain: "invoice-app-c87cb.firebaseapp.com",
    projectId: "invoice-app-c87cb",
    storageBucket: "invoice-app-c87cb.appspot.com",
    messagingSenderId: "167923322871",
    appId: "1:167923322871:web:0dd35178ea657e6896a8f2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
