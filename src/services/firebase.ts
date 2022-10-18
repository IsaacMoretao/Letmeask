import firebase from 'firebase/app';

import 'firebase/auth'
import 'firebase/database'


const firebaseConfig = {
  apiKey: "AIzaSyDY-KsBUy6oxasms0Xr0-B_ZIbT9rGeYO4",
  authDomain: "letmeask-fa4a9.firebaseapp.com",
  databaseURL: "https://letmeask-fa4a9-default-rtdb.firebaseio.com",
  projectId: "letmeask-fa4a9",
  storageBucket: "letmeask-fa4a9.appspot.com",
  messagingSenderId: "769501222718",
  appId: "1:769501222718:web:7445df91d24194ebb37e6f",
  measurementId: "G-MVP9R6FTEG"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const database = firebase.database()

export { firebase, auth, database }