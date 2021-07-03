import firebase from "firebase"


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAf7ym-treIzDFm0269Yr0ymJEcsjdTaYI",
    authDomain: "twitter-clone-1bd6b.firebaseapp.com",
    projectId: "twitter-clone-1bd6b",
    storageBucket: "twitter-clone-1bd6b.appspot.com",
    messagingSenderId: "1037947617679",
    appId: "1:1037947617679:web:ca53ae561b6eeaebc50bfa",
    measurementId: "G-CH01RZ21ZJ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()

  export default db;