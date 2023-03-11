// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore} from 'firebase/firestore';

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCMftLS_hH6kphChwTIleTF94SAMZZIMG0",
//   authDomain: "auth-versedco.firebaseapp.com",
//   projectId: "auth-versedco",
//   storageBucket: "auth-versedco.appspot.com",
//   messagingSenderId: "762940600126",
//   appId: "1:762940600126:web:62eec0a1416466436e466f"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig)

// const auth = getAuth(app)
// // eslint-disable-next-line no-unused-vars
// const db = getFirestore(app);

// // const timestamp = app.firestore.FieldValue.serverTimestamp;

// // Access Firestore FieldValue using the firestore instance
// const { firestore } = app;
// const { FieldValue } = firestore;

// // Now you can use FieldValue anywhere in your app
// firestore.collection('myCollection').add({
//   myField: FieldValue.serverTimestamp()
// });


// export default app.firestore;
// export { auth }
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMftLS_hH6kphChwTIleTF94SAMZZIMG0",
  authDomain: "auth-versedco.firebaseapp.com",
  projectId: "auth-versedco",
  storageBucket: "auth-versedco.appspot.com",
  messagingSenderId: "762940600126",
  appId: "1:762940600126:web:62eec0a1416466436e466f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//initialize firebase auth
const auth = getAuth()
const db = getFirestore(app);

export { db, auth ,app };