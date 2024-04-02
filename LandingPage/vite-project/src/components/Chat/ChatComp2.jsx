// import React, { useState, useEffect } from 'react';

// import { collection, addDoc, query, orderBy, limit, onSnapshot, serverTimestamp } from 'firebase/firestore';

// import { getFirestore } from 'firebase/firestore';
// import { db, auth } from '../../App.jsx';

// const sendMessage = async (e) => {
//     e.preventDefault();
//     if (!formValue.trim()) return;

//     const chatId = currentChatId; // Assume this is determined elsewhere in your app
//     if (!chatId) return; // Make sure there's a chatId to add a message to

//     try {
//         // Add message to Firestore under the specific chat's messages sub-collection
//         const messageData = {
//             message: formValue,
//             timestamp: serverTimestamp(), 
//             user: currentUser.displayName, // Or userId, depending on your preference
//         };

//         await addDoc(collection(db, `Chats/${currentChatId}/messages`), messageData);

//         setFormValue('');
//     } catch (error) {
//         console.error('Error sending message:', error);
//     }
// };




// useEffect(() => {
//     if (!currentChatId) return; // Don't proceed if there's no chat selected

//     const q = query(collection(db, `Chats/${currentChatId}/messages`), orderBy('timestamp', 'desc'), limit(25));
//     const unsubscribe = onSnapshot(q, (querySnapshot) => {
//         const data = [];
//         querySnapshot.forEach((doc) => {
//             data.push({ id: doc.id, ...doc.data() });
//         });
//         setMessages(data.reverse()); // Assuming you want to display the messages in chronological order
//     });

//     return () => unsubscribe(); // Clean up the subscription
// }, [currentChatId]); // Re-run when currentChatId changes







//  return (
//         <div className="body">
//             <div className="chat-container">
//                 <div className="header">
//                     <div className="user-info">
//                                <img
//                                 loading="lazy"
//                                 src={currentSelectedUser?.photoURL}
//                                 alt="User avatar"
//                                 className="avatar"
//                                 />
//                         <div className="username">{ currentSelectedUser?.displayName}</div> 
//                     </div>
//                     <button className="chat-image-button" onClick={handleClickWar}>
//                         <img
//                             loading="lazy"
//                             src="https://cdn.builder.io/api/v1/image/assets/TEMP/267e389eeca9561bc08fdb73e29cb3fc83cad65ba715b26c4fa14ef7a3e4770e?apiKey=1477cbc897df4fa28e1ddba6fd23de63&"
//                             alt="Chat image"
//                             className="chat-image"
//                         />
//                     </button>
//                 </div>
//                 <div className="messages-container">
//                     <div className="messages-scroll">
//                         {messages.map((msg) => (
//                             <div key={msg.id} className={`message ${msg.currentUser ? 'user-message' : 'other-message'}`}>
//                                 <div>{msg.message}</div>
//                                 <div className="timestamp">{msg.timestamp && formatTimestamp(msg.timestamp)}</div>
//                             </div>
//                         ))}
//                         <div ref={messagesEndRef}></div>
//                     </div>
//                 </div>
//                 <div className="parent-container">
//                     {showWarDeclaration && <WarDeclaration handleDeny={handleDeny} />}
//                 </div>
//                 <div className="footer">
//                     <input
//                         type="text"
//                         className="message-input"
//                         placeholder="Write a message"
//                         value={formValue}
//                         onChange={(e) => setFormValue(e.target.value)}
//                         onKeyPress={handleKeyPress}
//                     />
//                     <button className="send-button" onClick={sendMessage}>
//                         <img
//                             loading="lazy"
//                             src="https://cdn.builder.io/api/v1/image/assets/TEMP/0da46eb13aca298e978ad34689951fe7409f04e8bc2ff49a5fd3acff6d2b61f7?apiKey=1477cbc897df4fa28e1ddba6fd23de63&"
//                             alt="Send icon"
//                             className="send-icon"
//                         />
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };



// export default sendMessage;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import React, { useRef, useState, useEffect, useContext } from 'react';
// import { collection, addDoc, setDoc,serverTimestamp, query, orderBy, limit, onSnapshot } from 'firebase/firestore';
// import { db, auth } from '../../App.jsx';
// import WarDeclaration from './WarDeclare';
// import './chat.css';
// import { useCurrentUserContext } from '../context/currentuser-context.jsx';
// import { useSelectedUserContext } from '../context/selectedUser-context';
    
// import OnlineOfflineTable from '../onlineOfflineTable/onlineOfflineTable.jsx';


// const ChatProvider = () => {
//     const dummy = useRef();
//     const [formValue, setFormValue] = useState('');
//     const [messages, setMessages] = useState([]);
//     const [showWarDeclaration, setShowWarDeclaration] = useState(false);
//     const { currentUser } = useCurrentUserContext();
//     const { currentSelectedUser } = useSelectedUserContext();
//     /////////////////////////////////////////////////////////////////////////
//     const sendMessage = async (e) => {
//     e.preventDefault();
//     if (!formValue.trim()) return;

//    const chatId = "XpPhsKWoOA7cIA8NOB7I"; // Hardcoded chat ID for demonstration purposes
// console.log("thechatid is =======", chatId);
// if (!chatId) {
//     console.error('Chat ID is undefined');
//     return;
// }
//     // Assume this is determined elsewhere in your app
//     console.log("thechatid is =======",chatId);
//     if (!chatId) return; // Make sure there's a chatId to add a message to

//     try {
//         // Add message to Firestore under the specific chat's messages sub-collection
//         const messageData = {
//             message: formValue,
//             timestamp: serverTimestamp(), 
//             user: currentUser.displayName, // Or userId, depending on your preference
//         };

//         await setDoc(collection(db, `chats/${chatId}/messages`), messageData);

//         setFormValue('');
//     } catch (error) {
//         console.error('Error sending message:', error);
//     }
// };



// // /////////////
//     const handleClickWar = () => {
//         setShowWarDeclaration(!showWarDeclaration);
//     };
//     const formatTimestamp = (timestamp) => {
//         const date = timestamp.toDate();
//         return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//     };
//     const handleKeyPress = (e) => {
//         if (e.key === 'Enter') {
//             e.preventDefault();
//             sendMessage(e);
//         }
//     };

//     // Function to handle denying the war declaration
//     const handleDeny = () => {
//         setShowWarDeclaration(false);
//     };
// //////////////////////////////////////////////////////////////////////////////
//   useEffect(() => {
//     if (!chatId) return; // Don't proceed if there's no chat selected

//     const q = query(collection(db, `chats/${chatId}/messages`), orderBy('timestamp', 'desc'), limit(25));
//     const unsubscribe = onSnapshot(q, (querySnapshot) => {
//         const data = [];
//         querySnapshot.forEach((doc) => {
//             data.push({ id: doc.id, ...doc.data() });
//         });
//         setMessages(data.reverse()); // Assuming you want to display the messages in chronological order
//     });

//     return () => unsubscribe(); // Clean up the subscription
// }, [chatId]); // Re-run when currentChatId changes
// /////////////////////////////////////////////////////////////////////////
// useEffect(() => {
//         dummy.current.scrollIntoView({ behavior: 'smooth' });//////////////////////need to fix that not always scroll down
// }, [messages]);
   

// return (
//         <div className="body">
//             <div id='chat-container' className="chat-container">
//                 <div className="header">
//                     <div className="user-info">
//                                <img
//                                 loading="lazy"
//                                 src={currentSelectedUser?.photoURL}
//                                 alt="User avatar"
//                                 className="avatar"
//                                 />
//                         <div className="username">{ currentSelectedUser?.displayName}</div> 
//                     </div>
//                     <button className="chat-image-button" onClick={handleClickWar}>
//                         <img
//                             loading="lazy"
//                             src="https://cdn.builder.io/api/v1/image/assets/TEMP/267e389eeca9561bc08fdb73e29cb3fc83cad65ba715b26c4fa14ef7a3e4770e?apiKey=1477cbc897df4fa28e1ddba6fd23de63&"
//                             alt="Chat image"
//                             className="chat-image"
//                         />
//                     </button>
//                 </div>
//                 <div id='messages-container' className="messages-container">
//                     <div id='messages-scroll' className="messages-scroll">
//                         {messages.map((msg) => (
//                             <div key={msg.id} className={`message ${msg.currentUser ? 'user-message' : 'other-message'}`}>
//                                 <div>{msg.message}</div>
//                                 <div className="timestamp">{msg.timestamp && formatTimestamp(msg.timestamp)}</div>
//                             </div>
//                         ))}
//                         <div ref={messagesEndRef}></div>
//                     </div>
//                 <div ref={dummy}></div>
//                 </div>
//                 <div className="parent-container"> 
//                 {showWarDeclaration && <WarDeclaration handleDeny={handleDeny} />}
//             </div>
//                 <div className="footer">
//                     <input
//                         type="text"
//                         className="message-input"
//                         placeholder="Write a message"
//                         value={formValue}
//                         onChange={(e) => setFormValue(e.target.value)}
//                         onKeyPress={handleKeyPress}
//                     />
//                     <button className="send-button" onClick={sendMessage}>
//                         <img
//                             loading="lazy"
//                             src="https://cdn.builder.io/api/v1/image/assets/TEMP/0da46eb13aca298e978ad34689951fe7409f04e8bc2ff49a5fd3acff6d2b61f7?apiKey=1477cbc897df4fa28e1ddba6fd23de63&"
//                             alt="Send icon"
//                             className="send-icon"
//                         />
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ChatProvider;

//////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, { useRef, useState, useEffect } from 'react';
import { collection, addDoc, serverTimestamp, query, orderBy, limit, onSnapshot,getDocs } from 'firebase/firestore';
import { db, auth } from '../../App.jsx';
import WarDeclaration from './WarDeclare';
import './chat.css';
import { useCurrentUserContext } from '../context/currentuser-context.jsx';
import { useSelectedUserContext } from '../context/selectedUser-context';
import {useChatIdContex} from '../context/chatId-context.jsx';
    
    // Unsubscribe from the snapshot listener
const ChatProvider =  () => {
    const dummy = useRef();
    const [formValue, setFormValue] = useState('');
    const [messages, setMessages] = useState([]);
    const [showWarDeclaration, setShowWarDeclaration] = useState(false);
    const { currentUser } = useCurrentUserContext();
    const { selectedUser } = useSelectedUserContext();
    const {chatId,setChatId} = useChatIdContex();
    console.log('chatid in chat!!!!!!!!!!!!!!',chatId);
    // Define the chatId variable within the component's scope
  
    //  chatId = `${currentUser.displayName}-${selectedUser.displayName}`; 
//  useEffect(() => {
//     const fetchChatId = async () => {
//         const id = await IsChatIdUndefined();
//         setChatId(id);
//     };
//     fetchChatId();
// }, []);
console.log('currentuser in chat',currentUser);
console.log('currentselecteduser in chat',selectedUser);
    const sendMessage = async (e) => { 
        e.preventDefault();
        if (!formValue.trim()) return;

        // Use the chatId variable within the component's logic
        if (!chatId) {
            console.error('Chat ID is undefined');
            return;
        }

        try {
            const messageData = {
                message: formValue,
                timestamp: serverTimestamp(),
                user: currentUser.displayName,
            };      
           //await addDoc(collection(db, 'messages'), messageData)
            await addDoc(collection(db, 'chats',`${chatId}`,'messages'), messageData);

            setFormValue('');
        } catch (error) {
            console.error('Error sending message:', error);
        }
};


           const handleClickWar = () => {
        setShowWarDeclaration(!showWarDeclaration);
    };
    const formatTimestamp = (timestamp) => {
        const date = timestamp.toDate();
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            sendMessage(e);
        }
    };

    // Function to handle denying the war declaration
    const handleDeny = () => {
        setShowWarDeclaration(false);
    };
//////////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    if (!chatId) return; // Don't proceed if there's no chat selected

    const q = query(collection(db, `chats/${chatId}/messages`), orderBy('timestamp', 'desc'), limit(25));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const data = [];
        querySnapshot.forEach((doc) => {
            data.push({ id: doc.id, ...doc.data() });
        });
        setMessages(data.reverse()); // Assuming you want to display the messages in chronological order
    });

    return () => unsubscribe(); // Clean up the subscription
}, [chatId]); // Re-run when currentChatId changes
/////////////////////////////////////////////////////////////////////////
useEffect(() => {
        dummy.current.scrollIntoView({ behavior: 'smooth' });//////////////////////need to fix that not always scroll down
}, [messages]);
   
        
    

    // Other functions and useEffect hooks...

    return (
        <div className="body">
                  <div className="body">
            <div id='chat-container' className="chat-container">
                <div className="header">
                    <div className="user-info">
                               <img
                                loading="lazy"
                                src={selectedUser?.PlayerIcon}
                                alt="User avatar"
                                className="avatar"
                                />
                        <div className="username">{ selectedUser?.displayName}</div> 
                    </div>
                    <button className="chat-image-button" onClick={handleClickWar}>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/267e389eeca9561bc08fdb73e29cb3fc83cad65ba715b26c4fa14ef7a3e4770e?apiKey=1477cbc897df4fa28e1ddba6fd23de63&"
                            alt="Chat image"
                            className="chat-image"
                        />
                    </button>
                </div>
                <div id='messages-container' className="messages-container">
                    <div id='messages-scroll' className="messages-scroll">
                        {messages.map((msg) => (
                            <div key={msg.id} className={`message ${msg.currentUser ? 'user-message' : 'other-message'}`}>
                                <div>{msg.message}</div>
                                <div className="timestamp">{msg.timestamp && formatTimestamp(msg.timestamp)}</div>
                            </div>
                        ))}
                        <div ></div>
                    </div>
                <div ref={dummy}></div>
                </div>
                <div className="parent-container"> 
                {showWarDeclaration && <WarDeclaration handleDeny={handleDeny} />}
            </div>
                <div className="footer">
                    <input
                        type="text"
                        className="message-input"
                        placeholder="Write a message"
                        value={formValue}
                        onChange={(e) => setFormValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                    <button className="send-button" onClick={sendMessage}>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0da46eb13aca298e978ad34689951fe7409f04e8bc2ff49a5fd3acff6d2b61f7?apiKey=1477cbc897df4fa28e1ddba6fd23de63&"
                            alt="Send icon"
                            className="send-icon"
                        />
                    </button>
                </div>
            </div>
        </div>

        </div>
    );
};
export default ChatProvider;
