import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDb-IyejX6xKKaKgJOS-9nrD480irgo-f8",
    authDomain: "tourblog-45c7f.firebaseapp.com",
    projectId: "tourblog-45c7f",
    storageBucket: "tourblog-45c7f.appspot.com",
    messagingSenderId: "1085250718969",
    appId: "1:1085250718969:web:939cf02d4a6c226ee46628"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {timestamp};
  export default firebaseApp.firestore();