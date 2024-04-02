"use client";
import React,{createContext,useContext,useEffect,useState} from 'react'
import { useSelectedUserContext } from '../context/selectedUser-context';
import { getCurrentUserFromCollection } from '../PlayerInfo/PlayerInfo.jsx';
import { collection, addDoc, serverTimestamp, query, orderBy, limit, onSnapshot,getDocs } from 'firebase/firestore';
import { db, auth } from '../../App.jsx';
import { useCurrentUserContext } from '../context/currentuser-context.jsx';
const ChatIdContex = createContext(null);

export  function ChatIdContextProvider({children}) {
    const { selectedUser } = useSelectedUserContext();
    const { currentUser } = useCurrentUserContext();
    const [chatId,setChatId]=useState(null);
//  let id;
//      useEffect(() => {
//     console.log("inside Current user context start");
// const IsChatIdUndefined = async () => {
//     console.log("inside is chatidundefined");
//      const snapshot = await getDocs(collection(db, 'chats'));
//      let chatexists = snapshot.docs.find(doc=>(doc.id.includes(`${currentUser.displayName}`) && doc.id.includes(`${selectedUser.displayName}`)));
//      if(chatexists){
//         console.log("the chat id is !!!!!!!!!!!!!!!", chatexists);
//          id= await chatexists.id;
         
//      }
//      else{
//         console.log("the chat id is !!!!!!!!!!!!!!!", chatexists);
//        id  =`${currentUser.displayName}-${selectedUser.displayName}`; 
      
//      }
     
//     };
//      IsChatIdUndefined();
//      setChatId(id);
//   }, [selectedUser]);
   //////////////////////////////////////////////////////
useEffect(() => {
    // const IsChatIdUndefined = async () => {
    //     console.log("inside is chatidundefined");
    //     const snapshot = await getDocs(collection(db, 'chats'));
    //     let chatexists = snapshot.docs.find(doc => doc.id.includes(`${currentUser.displayName}`) && doc.id.includes(`${selectedUser.displayName}`));
    //     if (chatexists) {
    //         console.log("the chat id is !!!!!!!!!!!!!!!", chatexists);
    //         return chatexists.id;

    //     } else {
    //         console.log("the chat id is !!!!!!!!!!!!!!!", chatexists);
    //         return `${currentUser.displayName}-${selectedUser.displayName}`;

    //     }
    // };

    const IsChatIdUndefined = async () => {
    console.log("inside is chatidundefined");
    const users = [currentUser.displayName, selectedUser.displayName].sort();
    const chatId = users.join('-');

    const snapshot = await getDocs(collection(db, 'chats'));
    let chatexists = snapshot.docs.find(doc => doc.id === chatId);
    if (chatexists) {
        console.log("the chat id is !!!!!!!!!!!!!!!", chatexists);
        return chatId;
    } else {
        console.log("the chat id is !!!!!!!!!!!!!!!", chatexists);
        return chatId;
    }
};

    const fetchChatId = async () => {
        const id = await IsChatIdUndefined();
        setChatId(id);
    };

    fetchChatId();
}, [selectedUser]);

// useEffect(() => {
//     const IsChatIdUndefined = async () => {
//         console.log("inside is chatidundefined");
//         const snapshot = await getDocs(collection(db, 'chats'));
//         let chatexists = snapshot.docs.find(doc => cid= doc.id.split('-').then(if((cid[0]===`${currentUser.displayName}` && cid[1]===`${selectedUser.displayName}`)||(cid[1]===`${currentUser.displayName}` && cid[0]===`${selectedUser.displayName}`)))
//         (`${currentUser.displayName}`) && doc.id.includes(`${selectedUser.displayName}`));
//         if (chatexists) {
//             console.log("the chat id is !!!!!!!!!!!!!!!", chatexists);
//             return chatexists.id;

//         } else {
//             console.log("the chat id is !!!!!!!!!!!!!!!", chatexists);
//             return `${currentUser.displayName}-${selectedUser.displayName}`;

//         }
//     };

//     const fetchChatId = async () => {
//         const id = await IsChatIdUndefined();
//         setChatId(id);
//     };

//     fetchChatId();
// }, [selectedUser]);
  return (
    <ChatIdContex.Provider value={{chatId,setChatId,}}>
      {children}
    </ChatIdContex.Provider>
  );
}

export function useChatIdContex() {
  const context = useContext(ChatIdContex);
  if (!context) 
  {
    throw new Error(
        "useCurrentUserContext must be used within a UserContextProvider");
  }
      console.log("inside Current user context end");
  return context;
}

