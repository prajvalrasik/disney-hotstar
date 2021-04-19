import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB-mRhu1w8ihgxx8ijX6ly61fNdxZfqBck",
    authDomain: "disney-hotstar-clone.firebaseapp.com",
    projectId: "disney-hotstar-clone",
    storageBucket: "disney-hotstar-clone.appspot.com",
    messagingSenderId: "618920113302",
    appId: "1:618920113302:web:207693d9734b69bcf67eb7"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
