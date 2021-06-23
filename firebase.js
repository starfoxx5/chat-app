import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA2PFh0P3LGzq_t1IGdGBNWIu8AvQcUtXU",
  authDomain: "chat-app-c99cc.firebaseapp.com",
  projectId: "chat-app-c99cc",
  storageBucket: "chat-app-c99cc.appspot.com",
  messagingSenderId: "268309522249",
  appId: "1:268309522249:web:5ffb25702c00e52394dc98",
};

let app;

if (firebase.apps?.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
