"use client";
import React,{createContext,useContext,useEffect,useState} from 'react'
// import { getCurrentUserFromCollection } from '../PlayerInfo/PlayerInfo.jsx';

export const SelectedUserContext = createContext(null);
export  function SelectedUserContextProvider({children}) {
    const [selectedUser,setSelectedUser]=useState(null);
    // const [currentSelectedUser,setcurrentSelectedUser]=useState(null);
     useEffect(() => {
    console.log("inside selected user context start",selectedUser);
// setcurrentSelectedUser(selectedUser);
// console.log("inside Current selected user context end",currentSelectedUser);
  }, [selectedUser]);

  return (
    <SelectedUserContext.Provider value={{selectedUser,setSelectedUser,}}>
      {children}
    </SelectedUserContext.Provider>
  );
}

 export function useSelectedUserContext() {
  const context = useContext(SelectedUserContext);
  if (!context) 
  {
    throw new Error(
        "useCurrentUserContext must be used within a UserContextProvider");
  }
      console.log("inside Current user context end");
  return context;
}
