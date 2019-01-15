import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCyY11DkJW2b1BUCK8n8TmobV7-ckbDeak",
  authDomain: "net-ninja-react-marioplan.firebaseapp.com",
  databaseURL: "https://net-ninja-react-marioplan.firebaseio.com",
  projectId: "net-ninja-react-marioplan",
  storageBucket: "net-ninja-react-marioplan.appspot.com",
  messagingSenderId: "406434265420"
}

firebase.initializeApp(config)
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase