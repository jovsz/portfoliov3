
import firebase from 'firebase';

let firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyBRKpEWmVcQWXe6Eg2pgnpuN8GXgslEyVw",
        authDomain: "contact-me-e431d.firebaseapp.com",
        projectId: "contact-me-e431d",
        storageBucket: "contact-me-e431d.appspot.com",
        messagingSenderId: "339486486299",
        appId: "1:339486486299:web:bebbb0f95429d1084c6dbe",
        measurementId: "G-LD0XKKG320"
    
})

let db = firebaseApp.firestore();

export { db };