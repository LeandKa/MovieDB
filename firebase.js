import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyDiT_z1dTDsLsEcWozjjaAsBKseSI-6pq8",
  authDomain: "moviereactfire.firebaseapp.com",
  databaseURL: "https://moviereactfire.firebaseio.com",
  projectId: "moviereactfire",
  storageBucket: "moviereactfire.appspot.com",
  messagingSenderId: "70557207191",
  appId: "1:70557207191:web:af7ec586f2aece985177d2",
  measurementId: "G-7P2HEM1MXJ",
};


try {
  firebase.initializeApp(firebaseConfig);
} catch(err){
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)}
}

const fire = firebase;
export default fire;