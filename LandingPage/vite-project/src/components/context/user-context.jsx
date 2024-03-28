"use client";
import React,{createContext,useContext,useEffect,useState} from 'react'
import {onAuthStateChanged} from "firebase/auth";
import { auth } from '../../App.jsx';

const UserContext = createContext(null);

export  function UserContextProvider({children}) {
    const [user,setUser]=useState(null);
    useEffect(() => {
const unsubscribe = auth.onAuthStateChanged(user => {
  if (user) {
    console.log("the User that is signed in: \n", user);
    setUser(user);
    //  authuser=user;
  } else {
    // User is signed out
    console.log("User is now signed out");
  }
});
// Unsubscribe from authentication state changes when the component unmounts
  return () => unsubscribe();
}, []); 
  return (
    <UserContext.Provider value={{user,setUser,}}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  const context = useContext(UserContext);
  if (!context) 
  {
    throw new Error(
        "useUserContext must be used within a UserContextProvider");
  }
  return context;
}

