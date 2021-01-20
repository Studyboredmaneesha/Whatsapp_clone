import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyASTOpkKMW3hyJoMpa_ri_Yatv6ga40bAc",
    authDomain: "whats-app-clone-63dd2.firebaseapp.com",
    databaseURL: "https://whats-app-clone-63dd2.firebaseio.com",
    projectId: "whats-app-clone-63dd2",
    storageBucket: "whats-app-clone-63dd2.appspot.com",
    messagingSenderId: "851627108775",
    appId: "1:851627108775:web:0da25047a6b2a593386e82",
    measurementId: "G-2SB6YER16F"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  export { auth, provider};
  export default db;