// "use client";
// import React,{createContext,useContext,useEffect,useState} from 'react'
// import { getCurrentUserFromCollection } from '../PlayerInfo/PlayerInfo.jsx';
// import { colRef,auth,db} from '../../App.jsx';
// import { getDocs, getDoc, doc ,setDoc,deleteDoc,updateDoc} from "firebase/firestore";
// import {navigate} from 'react-router-dom';

// // import {CurrenlyOnlineAndOffline} from '../PlayerInfo/PlayerInfo.jsx';
// const PlayersStateListsContext = createContext(null);



//  const fetchUserData = async () => {
    
//      const querySnapshot = await getDocs(colRef);
//      const newOnlineList = [];
//      const newOfflineList = [];
//      querySnapshot.docs.forEach(doc => {
//       if (doc.data().onlineState === true) {
//         newOnlineList.push(doc.data());
//       } else {
//         newOfflineList.push(doc.data());
//       }
//     })
//     return newOnlineList , newOfflineList;
//   };
// export  function PlayersStateListsContextProvider({children}) {
//     const [onlineList,setOnlineList]=useState([]);
//     const [offlineList,setOfflineList]=useState([]);


//      useEffect( () => {
//         console.log("inside OnlineList context start");
       
    
//     // .then{
//     //      querySnapshot.docs.forEach(doc => doc.data().onlineState === true ? setOnlineList([...onlineList,doc.data()]) : setOfflineList([...offlineList,doc.data()])); 
//         //  console.log("the online list is:",onlineList);
//         //  console.log("the offline list is:",offlineList);
//          fetchUserData().then
//          {
//           setOnlineList(newOnlineList);
//           setOfflineList(newOfflineList)
//          }
//     },[]);
            
// // 
  
// //     if (user) {
// //         const userData = await getCurrentUserFromCollection(user.email);
// //         console.log("the new Current user from the collection  is:", userData);

// //         if (userData) {
// //           setCurrentUser(userData);
// //         }
// //       }
// //       else{
// //         console.log("no user");
// //       }
// // fetchUserData();
// //     }, [navigate]);
// //   console.log("the user in the context is:", user);
// //   console.log("the current user is:", currentUser);
     


//   return (
//     <PlayersStateListsContext.Provider value={{onlineList,offlineList,}}>
//       {children}
//     </PlayersStateListsContext.Provider>
//   );
// }

// export function usePlayersStateListsContext() {
//   const context = useContext(PlayersStateListsContext);
//   if (!context) 
//   {
//     throw new Error(
//         "useCurrentUserContext must be used within a UserContextProvider");
//   }
//       console.log("inside Current user context end");
//   return context;
// }



import React, { createContext, useContext, useEffect, useState } from 'react';
import { db,colRef, auth } from '../../App.jsx';
import { getDocs,getDoc,doc,updateDoc } from "firebase/firestore";

const PlayersStateListsContext = createContext(null);

const fetchUserData = async () => {
    const querySnapshot = await getDocs(colRef);
    const newOnlineList = [];
    const newOfflineList = [];
    querySnapshot.docs.forEach(doc => {
        if (doc.data().onlineState === true) {
            newOnlineList.push(doc.data());
        } else {
            newOfflineList.push(doc.data());
        }
    });
    return { newOnlineList, newOfflineList };
};

export const onlineStateToggle = async (displayname) =>{
  console.log("inside onlineStateToggle function!!!!!!!!!!!!!!!!!");
 const docref = doc(db, 'PlayerStats', displayname);
  const docSnap = await getDoc(docref); // Get the document snapshot
  
  if (docSnap.exists()) {
    const currentOnlineState = docSnap.data().onlineState;
    await updateDoc(docref, {
      onlineState: !currentOnlineState})
  .then(() => {
    console.log('onlineState successfully updated!');
  })
  .catch((error) => {
    console.error('Error deleting document:', error);
  });
}
}

export function PlayersStateListsContextProvider({ children }) {
    const [onlineList, setOnlineList] = useState([]);
    const [offlineList, setOfflineList] = useState([]);
    const [refresh, setRefresh] = useState(false);
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            if (user) {
              console.log('user in the useffect',user); 
              // if(user.onlineState===false)
              // onlineStateToggle(user.displayName);
                const { newOnlineList, newOfflineList } = await fetchUserData();
                setOnlineList(newOnlineList);
                setOfflineList(newOfflineList);
            } else {
                const { newOnlineList, newOfflineList } = await fetchUserData();
                setOnlineList(newOnlineList);
                setOfflineList(newOfflineList);
            }
        });

        return () => unsubscribe();
    }, [auth,refresh]);

    return (
        <PlayersStateListsContext.Provider value={{ onlineList, offlineList,refresh, setRefresh }}>
            {children}
        </PlayersStateListsContext.Provider>
    );
}

export function usePlayersStateListsContext() {
    const context = useContext(PlayersStateListsContext);
    if (!context) {
        throw new Error("usePlayersStateListsContext must be used within a PlayersStateListsContextProvider");
    }
    return context;
}




// import React, { createContext, useContext, useEffect, useState } from 'react';
// import { db, colRef, auth } from '../../App.jsx';
// import { getDocs, getDoc, doc, updateDoc } from "firebase/firestore";

// const PlayersStateListsContext = createContext(null);

// const fetchUserData = async () => {
//     const querySnapshot = await getDocs(colRef);
//     const newOnlineList = [];
//     const newOfflineList = [];
//     querySnapshot.docs.forEach(doc => {
//         if (doc.data().onlineState === true) {
//             newOnlineList.push(doc.data());
//         } else {
//             newOfflineList.push(doc.data());
//         }
//     });
//     return { newOnlineList, newOfflineList };
// };

// export const onlineStateToggle = async (displayname, setOnlineList, setOfflineList) => {
//     const docref = doc(db, 'PlayerStats', displayname);
//     const docSnap = await getDoc(docref); // Get the document snapshot

//     if (docSnap.exists()) {
//         const currentOnlineState = docSnap.data().onlineState;
//         await updateDoc(docref, {
//             onlineState: !currentOnlineState
//         })
//             .then(() => {
//                 console.log('onlineState successfully updated!');
//             })
//             .catch((error) => {
//                 console.error('Error updating onlineState:', error);
//             });

//         // Fetch user data after updating online state
//         const { newOnlineList, newOfflineList } = await fetchUserData();
//         setOnlineList(newOnlineList);
//         setOfflineList(newOfflineList);
//     }
// }

// export function PlayersStateListsContextProvider({ children }) {
//     const [onlineList, setOnlineList] = useState([]);
//     const [offlineList, setOfflineList] = useState([]);

//     useEffect(() => { 
//         const unsubscribe = auth.onAuthStateChanged(async (user) => {
//             if (user) {
//                 const { newOnlineList, newOfflineList } = await fetchUserData();
//                 setOnlineList(newOnlineList);
//                 setOfflineList(newOfflineList);
//             } else {
//                 const { newOnlineList, newOfflineList } = await fetchUserData();
//                 setOnlineList(newOnlineList);
//                 setOfflineList(newOfflineList);
//             }
//         });

//         return () => unsubscribe();
//     }, []);

//     return (
//         <PlayersStateListsContext.Provider value={{ onlineList, offlineList, onlineStateToggle }}>
//             {children}
//         </PlayersStateListsContext.Provider>
//     );
// }

// export function usePlayersStateListsContext() {
//     const context = useContext(PlayersStateListsContext);
//     if (!context) {
//         throw new Error("usePlayersStateListsContext must be used within a PlayersStateListsContextProvider");
//     }
//     return context;
// }
