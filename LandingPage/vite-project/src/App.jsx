import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage.jsx';
import LoggedInPage from './components/LoggedInPage/LoggedInPage.jsx';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';
import { useAuthState } from 'react-firebase-hooks/auth';

firebase.initializeApp({
   apiKey: "AIzaSyCZ6pMdRgKENnl5mQdO3sHJnEz4rkNi9Lw",
  authDomain: "robobackgammon.firebaseapp.com",
  projectId: "robobackgammon",
  storageBucket: "robobackgammon.appspot.com",
  messagingSenderId: "684708662981",
  appId: "1:684708662981:web:bc067d4f8bc5916f9e6aac"
});

function App() {
  const [user] = useAuthState(firebase.auth());
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: user ? <LoggedInPage /> : <HomePage />,
    },
  ]);

  return (
      <RouterProvider router={router} />
  );
}

export default App;
