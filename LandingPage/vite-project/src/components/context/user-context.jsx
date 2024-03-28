"use client";
import React,{createContext,useContext,useEffect,useState} from 'react'
import {onAuthStateChanged} from "firebase/auth";
import { auth } from '../../App.jsx';

const UserContext = createContext(null);

export  function UserContextProvider({children}) {
    const [user,setUser]=useState(null);
    useEffect(() => {
      console.log("usercontext start");
const unsubscribe = auth.onAuthStateChanged(User => {
  if (User) {
    console.log("the User that is outhenticated in: \n", User);
    setUser(User);
    //  authuser=user;
  } else {
    // User is signed out
    console.log("User is now signed out");
  }
  console.log("usercontext end:",user);
});
// Unsubscribe from authentication state changes when the component unmounts
  return () => unsubscribe();
}, []); 
  return (
    <UserContext.Provider value={{user,setUser,}}>
      {children}
    </UserContext.Provider>
  );
  co
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

