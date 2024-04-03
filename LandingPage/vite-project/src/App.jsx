import React, { useEffect,createContext, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from "firebase/firestore";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage.jsx';
import LoggedInPage from './components/LoggedInPage/LoggedInPage.jsx';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import ChatProvider from './components/Chat/ChatComp2.jsx';
import {memo} from 'react'
// import { UserContextProvider } from './components/context/user-context.jsx';
// Initialize Firebase app
const app = initializeApp({

});

// Initialize Firestore
export const db = getFirestore();
export const colRef = collection(db, 'PlayerStats');
export const auth = getAuth(app);
// export const authuser=null;
// Get collection data


// async function addDataToFirestore() {
//   const data = {
//     PlayerStats: { displayName: 'Tamir' },
//     PlayerStats: { displayName: 'Almog' }
//   };


//   try {
//   await Promise.all(data.map(async (docData) => {
//     await addDoc(collection(db, "PlayerStats"), docData);
//   }));
//   console.log('Documents successfully written!');
// } catch (error) {
//   console.error('Error writing documents: ', error);
// }
// }

// export const updateColRef = async () => {
//   try {
//     const res = await db.collection('PlayerStats').add({
//       displayName: 'Tamir',
//     });
//     console.log('Added document with ID: ', res.id);
//   } catch (error) {
//     console.error('Error adding document: ', error);
//   }
// };

////////////////////////////////////////add new player to collection////////////////////////////////////////


// export const UserContext = createContext();
function App() {
 

   //////////////////////////////////////////////////////////////////////////
  // useEffect(() => {
  //  let user = auth.currentUser;
  //   console.log("unsubscribe to User:", user);
  // const unsubscribe = onAuthStateChanged(auth, user => {
  //     if (user) {
  //       console.log("the User that is signed in: \n", user);
  //     } else {
  //       // User is signed out
  //       console.log("User is now signed out");
  //     }
  //   });
  //   // return () => unsubscribe();
  // }, []);
// Subscribe to authentication state changes
//////////////////////////////////////////////////////////////////////////////
// let authuser=null;
// 

/////////////////////////////////////////////////////////////////////////////
// let authuser;
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//      authuser=user;
//      console.log("the User that is signed in: \n", user);
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     // const uid = user.uid;
//     // ...
//   } else {
//     // User is signed out
//     console.log("User is now signed out");
//     // ...
//   }
// });
////////////////////////////////////////////////////////////////////
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/LoggedInPage',
      element: <LoggedInPage />,
    }
    , {
    path:'/Chat',
    element: <ChatProvider />
    }
  ]);
    {/* </UserContextProvider> */}
  return (
    // <UserContextProvider>
      <RouterProvider router={router} />

  );
}

// export default memo(App);
export default App;
