import firebase from 'firebase/app';

import 'firebase/auth'
import 'firebase/database'


const firebaseConfig = {

  apiKey: "AIzaSyBeeIU6qsesPvWvyo_bElv0fOtfrTiVTXk",
  authDomain: "letmeask-7b24c.firebaseapp.com",
  databaseURL: "https://letmeask-7b24c-default-rtdb.firebaseio.com",
  projectId: "letmeask-7b24c",
  storageBucket: "letmeask-7b24c.appspot.com",
  messagingSenderId: "1080516570135",
  appId: "1:1080516570135:web:4fb7c6ad0eb95af7afc052"
  
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const database = firebase.database()

export { firebase, auth, database }