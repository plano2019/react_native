import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyC0SbxO0_qxbS_J75z8_biCKdfywT6cOss",
    authDomain: "fruitstore-5c0df.firebaseapp.com",
    databaseURL: "https://fruitstore-5c0df.firebaseio.com",
    projectId: "fruitstore-5c0df",
    storageBucket: "fruitstore-5c0df.appspot.com",
    messagingSenderId: "809811257731",
    appId: "1:809811257731:web:1b6ea5f0a521dcf8"
  };

  export const firebaseApp = firebase.initializeApp(firebaseConfig);