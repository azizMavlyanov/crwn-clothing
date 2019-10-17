import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAwND0X3r7z3C3XjqyAeg3Nt-nYhCy_vQs",
  authDomain: "crwn-db-6e91c.firebaseapp.com",
  databaseURL: "https://crwn-db-6e91c.firebaseio.com",
  projectId: "crwn-db-6e91c",
  storageBucket: "crwn-db-6e91c.appspot.com",
  messagingSenderId: "606386000994",
  appId: "1:606386000994:web:94cb6267dcf7e48b8d6d3b"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
