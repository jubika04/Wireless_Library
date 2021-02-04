import * as firebase from 'firebase'
require('@firebase/firestore')


var firebaseConfig = {
    apiKey: "AIzaSyARVNoK_Zl81CK9IzCBbD460PSWxukaBqA",
    authDomain: "wireleibrary-c4979.firebaseapp.com",
    projectId: "wireleibrary-c4979",
    storageBucket: "wireleibrary-c4979.appspot.com",
    messagingSenderId: "168293699696",
    appId: "1:168293699696:web:1ce433a47c291d70f024b5"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();