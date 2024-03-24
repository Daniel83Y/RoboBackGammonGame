import React from 'react';
import { initializeApp } from 'firebase/app';
import { 
    getFirestore,collection,getDocs
 } from "firebase/firestore";
import 'firebase/auth';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage.jsx';
import LoggedInPage from './components/LoggedInPage/LoggedInPage.jsx';
import { getAuth, onAuthStateChanged } from "firebase/auth";
//import require from 'firebase/require';

// import { getAuth, getRedirectResult, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
const app = initializeApp({
  apiKey: "AIzaSyCZ6pMdRgKENnl5mQdO3sHJnEz4rkNi9Lw",
  authDomain: "robobackgammon.firebaseapp.com",
  projectId: "robobackgammon",
  databaseURL: "https://robobackgammon-default-rtdb.europe-west1.firebasedatabase.app",
  storageBucket: "robobackgammon.appspot.com",
  messagingSenderId: "684708662981",
  appId: "1:684708662981:web:bc067d4f8bc5916f9e6aac",
  measurementId: "G-46Q8BLR562"
});



//INIT FIREBASE APP

//init firebase app
const db = getFirestore();
// collection ref
const colRef = collection(db, 'PlayerDemo');

//get collection data
getDocs(colRef).then((snapshot) => {
    let players = [];
  snapshot.docs.forEach((doc) => {
    players.push({ ...doc.data(), id: doc.id });
  }) 
  console.log(players);
})
.catch((err) => {
  console.log(err.message);
})
export const auth = getAuth(app);
// const analytics = getAnalytics(app);
// const {Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');
// let admin = require("firebase-admin");
// const firebaseApp = admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });

// const firestoreInstance = getFirestore(firebaseApp);

// const serviceAccount = require('./RoboBackGammonGame/LandingPage/vite-project/key.json');
// const {  applicationDefault, cert } = require('firebase-admin/app');
// const auth = getAuth(firebaseApp);
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });

// const db = getFirestore();
// const auth = getAuth();




function App() {
//   const [user] = useAuthState(auth);
//   if (user) {
//     console.log(user);
//   }
  const router = createBrowserRouter([
    {
      path: '/',
      element:  <HomePage />,
      // user ? <LoggedInPage /> :
    },
    {
      path: '/LoggedInPage',
      element: <LoggedInPage />,
    }
  ]);

  return (
      <RouterProvider router={router} />
  );
}
 
export default App;
// export {auth};