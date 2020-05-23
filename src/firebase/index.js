import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyBCT55gxqwapQBI91vaSEGxrmX-7Yaj9K0",
  authDomain: "timer-f0c0d.firebaseapp.com",
  databaseURL: "https://timer-f0c0d.firebaseio.com",
  projectId: "timer-f0c0d",
  storageBucket: "timer-f0c0d.appspot.com",
  messagingSenderId: "176712062374",
  appId: "1:176712062374:web:b4a69f128d26421520eb67"
}

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

export default db
