// "use client";
// import React,{createContext,useContext,useEffect,useState} from 'react'
// import { useUserContext } from "../context/user-context.jsx";
// import { getCurrentUserFromCollection } from '../PlayerInfo/PlayerInfo.jsx';

// const CurrentUserContext = createContext(null);
// export  function CurrentUserContextProvider({children}) {
//     const {user,setUser} = useUserContext();
//     const [currentUser,setCurrentUser]=useState(null);

//      useEffect(() => {
//     console.log("inside Current user context start");
// const fetchUserData = async () => {
  
//     if (user) {
//         const userData = await getCurrentUserFromCollection(user.email);
//         console.log("the new Current user from the collection  is:", userData);

//         if (userData) {
//           setCurrentUser(userData);
//         }
//       }
//       else{
//         console.log("no user");
//       }
//     };
// //   console.log("the user in the context is:", user);
// //   console.log("the current user is:", currentUser);
//      fetchUserData();
//   }, [user]);

//   return (
//     <CurrentUserContext.Provider value={{currentUser,setCurrentUser,}}>
//       {children}
//     </CurrentUserContext.Provider>
//   );
// }

// export function useCurrentUserContext() {
//   const context = useContext(CurrentUserContext);
//   if (!context) 
//   {
//     throw new Error(
//         "useCurrentUserContext must be used within a UserContextProvider");
//   }
//       console.log("inside Current user context end");
//   return context;
// }

