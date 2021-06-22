import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB9UHrhPcr0BC-fPxRHTu_A81w2cywNdxI",
  authDomain: "disney-plus-clone-9fc2e.firebaseapp.com",
  projectId: "disney-plus-clone-9fc2e",
  storageBucket: "disney-plus-clone-9fc2e.appspot.com",
  messagingSenderId: "303630834295",
  appId: "1:303630834295:web:3e9f6ae6c7cc6aac3c0472",
  measurementId: "G-LNGFBKXC54"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;