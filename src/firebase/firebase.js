import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCo_nyh05NoBFXsNcAkQorAYyAewmbjCys",
  authDomain: "todo-fd4fb.firebaseapp.com",
  projectId: "todo-fd4fb",
  storageBucket: "todo-fd4fb.appspot.com",
  messagingSenderId: "386099997925",
  appId: "1:386099997925:web:12381d65f8105e7a82380c"
};

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

db.settings({ timestampsInSnapshots: true })

export default db