  import firebase from 'firebase/app'
  import 'firebase/firestore'
  import 'firebase/storage'
  import 'firebase/auth'

  const config = {
    apiKey: "AIzaSyBcQFrvG7DAN707HOWWZO3Xnz945Ezmppo",
    authDomain: "library-2c4ed.firebaseapp.com",
    projectId: "library-2c4ed",
    storageBucket: "library-2c4ed.appspot.com",
    messagingSenderId: "675643041725",
    appId: "1:675643041725:web:ec290950ae7c925b7f54d4",
    measurementId: "G-C2T0T0BRGX"
  };

  
  
  // Initialize Firebase
  firebase.initializeApp(config);
  

  export default firebase;