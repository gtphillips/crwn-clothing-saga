import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCkrFq3h_fBhkbW75Y5Cey3ZC9C0hELr8w",
    authDomain: "crwn-db-86dea.firebaseapp.com",
    databaseURL: "https://crwn-db-86dea.firebaseio.com",
    projectId: "crwn-db-86dea",
    storageBucket: "crwn-db-86dea.appspot.com",
    messagingSenderId: "373202902090",
    appId: "1:373202902090:web:d8d702cd4282b379d95ab3",
    measurementId: "G-377BVSD1C2"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;