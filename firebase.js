import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYuM94lZofiPMWxXZn9eRLOUGiN9hArBY",
  authDomain: "native-login-fac16.firebaseapp.com",
  projectId: "native-login-fac16",
  storageBucket: "native-login-fac16.appspot.com",
  messagingSenderId: "265660094184",
  appId: "1:265660094184:web:2337501f85930de9bedb5d",
  measurementId: "G-N0F8DSH844"
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };