import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/firebase-auth'
const app = firebase.initializeApp(
    {
      apiKey: "AIzaSyAlz1GrE2PKSaO6ew2rAO4hXlzfk4tVwNU",
      authDomain: "jothtidesign.firebaseapp.com",
      projectId: "jothtidesign",
      storageBucket: "jothtidesign.appspot.com",
      messagingSenderId: "326805277536",
      appId: "1:326805277536:web:f853a32fb24a7771d86c05"
      }
)

export const getFirebase = () => app;
export const getFirestore = () => firebase.firestore(app)

export const auth = firebase.auth();

