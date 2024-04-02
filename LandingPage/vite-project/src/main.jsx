import React from 'react';
import App from './App.jsx';
import { createRoot } from 'react-dom/client';
// import ReactDOM from 'react-dom';

import { createBrowserRouter , RouterProvider } from 'react-router-dom'; // Import BrowserRouter directly
import HomePage from './components/HomePage/HomePage.jsx';
import LoggedInPage from './components/LoggedInPage/LoggedInPage.jsx';
// import { createRoot } from 'react-dom/client';

//import firebase from 'firebase/compat/app';
import 'firebase/firestore'
//import 'firebase/compat/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { UserContextProvider } from './components/context/user-context.jsx';
import {CurrentUserContextProvider} from './components/context/currentuser-context.jsx';
import {PlayersStateListsContextProvider} from './components/context/playersStateLists-context.jsx';
import {SelectedUserContextProvider} from './components/context/selectedUser-context.jsx';
import {ChatIdContextProvider} from './components/context/chatId-context.jsx';
////////////////////////////////////////////////////////////////////////////////
// function checkUser() {
//   firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
//       console.log('User logged in:', user);
//       return user;
//     } else {
//       console.log('User logged out');
//     }
    
//   });
// }
//////////////////////////////////////////////////////////////////////////////


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: user ? <LoggedInPage /> : <HomePage />}, 
    
  
//   {
//     path: '/loggedIn',
//     element: <LoggedInPage />
//   }


// ]);


const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
   <UserContextProvider>
    <SelectedUserContextProvider>
     <CurrentUserContextProvider>
        <ChatIdContextProvider>
       <PlayersStateListsContextProvider>
        
         <App/>
    </PlayersStateListsContextProvider>
    </ChatIdContextProvider>
       
     </CurrentUserContextProvider>
       </SelectedUserContextProvider>
   </UserContextProvider>
  </React.StrictMode>
);




//    element: user ? <LoggedInPage /> : <HomePage />}, 