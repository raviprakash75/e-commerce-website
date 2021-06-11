// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCOoQWQE9kuroLk_OXyr_N8h2wVdrgtb84",
    authDomain: "clone75.firebaseapp.com",
    projectId: "clone75",
    storageBucket: "clone75.appspot.com",
    messagingSenderId: "555684279298",
    appId: "1:555684279298:web:0ccb90191d4f3d741d231b",
    measurementId: "G-HX94M8M1KL"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  export {db,auth};