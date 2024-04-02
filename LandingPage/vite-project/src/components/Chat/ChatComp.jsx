
// // import React, { useRef, useState, useEffect } from 'react';
// // import './chat.css'; 
// // import WarDeclaration from './WarDeclare';

// // const ChatProvider = () => {
// //     const messagesEndRef = useRef(null);
// //     const [formValue, setFormValue] = useState('');
// //     const [messages, setMessages] = useState([]);
// //     const [showWarDeclaration, setShowWarDeclaration] = useState(false);
// //     // const [isDenyClicked, setIsDenyClicked] = useState(false);

// //     // Function to handle sending messages
// //     const sendMessage = (e) => {
// //         e.preventDefault();
// //         if (!formValue.trim()) return;

// //         const newMessage = {
// //             id: new Date().getTime(),
// //             message: formValue,
// //             timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
// //             isUser: true
// //         };

// //         setMessages((prevMessages) => [...prevMessages, newMessage]);
// //         setFormValue('');
// //     };

// //     // Function to handle key press (e.g., pressing Enter to send message)
// //     const handleKeyPress = (e) => {
// //         if (e.key === 'Enter') {
// //             e.preventDefault();
// //             sendMessage(e);
// //         }
// //     };

// //     // Function to handle click event for war declaration button
// //     const handleClickWar = () => {
// //         setShowWarDeclaration(!showWarDeclaration);
// //     };

// //     // Function to handle denying war declaration
// //     const handleDeny = () => {
// //         setShowWarDeclaration(false);
// //     };

// //     // useEffect(() => {
// //     //     // Scroll to the end of the chat when messages change
// //     //     messagesEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
// //     // }, [messages]);

// //     return (
// //         <div className="chat-container">
// //             {/* Chat header */}
// //             <div className="header">
// //                 {/* User info */}
// //                 <div className="user-info">
// //                     <img
// //                         loading="lazy"
// //                         src="https://cdn.builder.io/api/v1/image/assets/TEMP/755a4236f05c1acaac1a7baaa4ae8f0c0cde44ba49ceaf1b0b6f7e9e6de71fb7?apiKey=1477cbc897df4fa28e1ddba6fd23de63&"
// //                         alt="User avatar"
// //                         className="avatar"
// //                     />
// //                     <div className="username">Daniel</div>
// //                 </div>
// //                 {/* Button to show war declaration */}
// //                 <button className="chat-image-button" onClick={handleClickWar}>
// //                     <img
// //                         loading="lazy"
// //                         src="https://cdn.builder.io/api/v1/image/assets/TEMP/267e389eeca9561bc08fdb73e29cb3fc83cad65ba715b26c4fa14ef7a3e4770e?apiKey=1477cbc897df4fa28e1ddba6fd23de63&"
// //                         alt="Chat image"
// //                         className="chat-image"
// //                     />
// //                 </button>
// //             </div>
            
// //             {/* Chat messages */}
// //             <div className="messages-container">
// //                 <div className="messages-scroll">
// //                     {/* Reverse the order of messages */}
// //                     {messages.slice(0).reverse().map((msg, index) => (
// //                         <div key={index} className={`message ${msg.isUser ? 'user-message' : 'other-message'}`}>
// //                             <div>{msg.message}</div>
// //                             <div className="timestamp">{msg.timestamp}</div>
// //                         </div>
// //                     ))}
// //                     {/* Ref to the end of messages for scrolling */}
// //                     <div ref={messagesEndRef}></div>
// //                 </div>
// //             </div>
// //              <div className="parent-container">
// //             {/* War declaration */}
// //             {showWarDeclaration && <WarDeclaration handleDeny={handleDeny} />}
// //             </div>
// //             {/* Chat footer */}
// //             <div className="footer">
// //                 {/* Input for typing messages */}
// //                 <input
// //                     type="text"
// //                     className="message-input"
// //                     placeholder="Write a message"
// //                     value={formValue}
// //                     onChange={(e) => setFormValue(e.target.value)}
// //                     onKeyPress={handleKeyPress}
// //                 />
// //                 {/* Button to send messages */}
// //                 <button className="send-button" onClick={sendMessage}>
// //                     <img
// //                         loading="lazy"
// //                         src="https://cdn.builder.io/api/v1/image/assets/TEMP/0da46eb13aca298e978ad34689951fe7409f04e8bc2ff49a5fd3acff6d2b61f7?apiKey=1477cbc897df4fa28e1ddba6fd23de63&"
// //                         alt="Send icon"
// //                         className="send-icon"
// //                     />
// //                 </button>
// //             </div>
// //         </div>
// //     );
// // }

// // export default ChatProvider;



// // new version v3 of Chat
// ////////////////////////
// import React, { useRef, useState, useEffect,useContext } from 'react';
// import { collection, addDoc, serverTimestamp, query, orderBy, limit, onSnapshot } from 'firebase/firestore';
// import { db, auth } from '../../App.jsx';
// import './chat.css'; 
// import WarDeclaration from './WarDeclare';
// import { useCurrentUserContext } from '../context/currentuser-context.jsx';
// import {SelectedUserContext} from '../context/selectedUser-context'
// const ChatProvider = () => {
//     const messagesEndRef = useRef(null);
//     const [formValue, setFormValue] = useState('');
//     const [messages, setMessages] = useState([]);
//     const [showWarDeclaration, setShowWarDeclaration] = useState(false);
//     const { currentUser } = useCurrentUserContext();
//     const { selectedUser } = useContext(SelectedUserContext);

//     useEffect(() => {
//          console.log("the selected user is ",selectedUser); 
//     let iscurrentUser=false;
    
//     if(selectedUser&&(currentUser.email==selectedUser.email)){
//         iscurrentUser=true;
//     }
//     else{
//         iscurrentUser=false
//     }
//     },[selectedUser])
    
   
//     const sendMessage = async (e) => {
//     e.preventDefault();
//     if (!formValue.trim()) return;

//     try {
//         // Add message to Firestore
//         const messageData = {
//             message: formValue,
//             timestamp: serverTimestamp(), 
//             user: currentUser.displayName, 
//         };

//         await addDoc(collection(db, 'messages'), messageData);

//         setFormValue('');
//     } catch (error) {
//         console.error('Error sending message:', error);
//     }
// };


//     const handleKeyPress = (e) => {
//         if (e.key === 'Enter') {
//             e.preventDefault();
//             sendMessage(e);
//         }
//     };

//     const handleClickWar = () => {
//         setShowWarDeclaration(!showWarDeclaration);
//     };

//     const handleDeny = () => {
//         setShowWarDeclaration(false);
//     };

//     const formatTimestamp = (timestamp) => {
//         const date = timestamp.toDate();
//         return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//     };

//     useEffect(() => {
//         const q = query(collection(db, 'messages'), orderBy('timestamp', 'desc'), limit(25));
//         const unsubscribe = onSnapshot(q, (querySnapshot) => {
//             const data = [];
//             querySnapshot.forEach((doc) => {
//                 data.push({ id: doc.id, ...doc.data() });
//             });
//             setMessages(data);
//         });

//         return () => {
//             unsubscribe();
//         };
//     }, []);
//     //   useEffect(() => {
//     // // Scroll to the end of the chat when messages change
//     //    messagesEndRef.current.scrollIntoView({ behavior: 'smooth', block:'start' });
//     //   },[messages]);
     
// useEffect(() => {
//       const chatContainer = messagesEndRef.current.parentNode;
//     // const isScrolledToBottom = chatContainer.scrollTop <= 1;

//     // if (isScrolledToBottom) {
//     //     messagesEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     // }

//         chatContainer.scrollTo({
//         top: 0,
//         behavior: 'smooth'
//     });
//     // }
    
// }, [messages]);
// }
//     return (
//         <div className="body">
//         <div className="chat-container">
//             <div className="header">
//                 <div className="user-info">
//                     <img
//                         loading="lazy"
//                         src={iscurrentUser?currentUser.photoURL:selectedUser.photoURL}
//                         alt="User avatar"
//                         className="avatar"
//                     />
//                     <div className="username">{iscurrentUser?currentUser.displayName:selectedUser.displayName}</div>
//                 </div>
//                 <button className="chat-image-button" onClick={handleClickWar}>
//                     <img
//                         loading="lazy"
//                         src="https://cdn.builder.io/api/v1/image/assets/TEMP/267e389eeca9561bc08fdb73e29cb3fc83cad65ba715b26c4fa14ef7a3e4770e?apiKey=1477cbc897df4fa28e1ddba6fd23de63&"
//                         alt="Chat image"
//                         className="chat-image"
//                     />
//                 </button>
//             </div>
//             <div className="messages-container">
//                 <div className="messages-scroll">
//                     {messages.map((msg) => (
//                         <div key={msg.id} className={`message ${msg.isUser ? 'user-message' : 'other-message'}`}>
//                             <div>{msg.message}</div>
//                             <div className="timestamp">{msg.timestamp && formatTimestamp(msg.timestamp)}</div>
//                         </div>
//                     ))}
//                     <div ref={messagesEndRef}></div>
//                 </div>
//             </div>
//             <div className="parent-container">
//                 {showWarDeclaration && <WarDeclaration handleDeny={handleDeny} />}
//             </div>
//             <div className="footer">
//                 <input
//                     type="text"
//                     className="message-input"
//                     placeholder="Write a message"
//                     value={formValue}
//                     onChange={(e) => setFormValue(e.target.value)}
//                     onKeyPress={handleKeyPress}
//                 />
//                 <button className="send-button" onClick={sendMessage}>
//                     <img
//                         loading="lazy"
//                         src="https://cdn.builder.io/api/v1/image/assets/TEMP/0da46eb13aca298e978ad34689951fe7409f04e8bc2ff49a5fd3acff6d2b61f7?apiKey=1477cbc897df4fa28e1ddba6fd23de63&"
//                         alt="Send icon"
//                         className="send-icon"
//                     />
//                 </button>
//             </div>
//         </div>
//         </div>
//     );
// };

// export default ChatProvider;    







import React, { useRef, useState, useEffect, useContext } from 'react';
import { collection, addDoc, serverTimestamp, query, orderBy, limit, onSnapshot } from 'firebase/firestore';
import { db, auth } from '../../App.jsx';
import './chat.css'; 
import WarDeclaration from './WarDeclare';
import { useCurrentUserContext } from '../context/currentuser-context.jsx';
import { useSelectedUserContext } from '../context/selectedUser-context';

const ChatProviderOld = () => {
    const dummy = useRef();
    const messagesEndRef = useRef(null);
    const [formValue, setFormValue] = useState('');
    const [messages, setMessages] = useState([]);
    const [showWarDeclaration, setShowWarDeclaration] = useState(false);
    const { currentUser } = useCurrentUserContext();
    const { currentSelectedUser } = useSelectedUserContext();
console.log("the selected user is ",currentSelectedUser);
    // Function to determine if the current user is the selected user
    // const isCurrentUser = () => {
    //     if (selectedUser && currentUser && currentUser.email === selectedUser.email) {
    //         return true;
    //     }
    //     return false;
    // };

    useEffect(() => {
        console.log("the currentSelectedUser user is ", currentSelectedUser); 
    }, []);
    
    // Function to send a message
    const sendMessage = async (e) => {
        e.preventDefault();
        if (!formValue.trim()) return;

        try {
            // Add message to Firestore
            const messageData = {
                message: formValue,
                timestamp: serverTimestamp(), 
                user: currentUser.displayName, 
            };

            await addDoc(collection(db, 'messages'), messageData);

            setFormValue('');
            
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    // Function to handle key press events
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            sendMessage(e);
        }
    };

    // Function to handle clicking on the war declaration button
    const handleClickWar = () => {
        setShowWarDeclaration(!showWarDeclaration);
    };

    // Function to handle denying the war declaration
    const handleDeny = () => {
        setShowWarDeclaration(false);
    };

    // Function to format the timestamp
    const formatTimestamp = (timestamp) => {
        const date = timestamp.toDate();
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    useEffect(() => {
        const q = query(collection(db, 'messages'), orderBy('timestamp', 'desc'), limit(25));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const data = [];
            querySnapshot.forEach((doc) => {
                data.push({ id: doc.id, ...doc.data() });
            });
            setMessages(data);
        });

        return () => {
            unsubscribe();
        };
    }, []);




 

// useEffect(() => {
//     const chatContainer = messagesEndRef.current.parentNode;
//     if (chatContainer.scrollTop + chatContainer.clientHeight >= chatContainer.scrollHeight) {
//         dummy.current.scrollIntoView({ behavior: 'smooth' });
//     } else {
//         chatContainer.scrollTo({
//             top: chatContainer.scrollHeight,
//             behavior: 'smooth'
//         });
//     }
// }, [messages]);
// useEffect(() => {
//     const chatContainer = messagesEndRef.current.parentNode;

//     const handleScroll = () => {
//     const isAtBottom = chatContainer.scrollTop + chatContainer.clientHeight >= chatContainer.scrollHeight;

//         if (isAtBottom) {
//             dummy.current.scrollIntoView({ behavior: 'smooth' });
//         }
//     };

//     // Add scroll event listener
//     chatContainer.addEventListener('scroll', handleScroll);

//     // Cleanup function to remove the event listener when the component unmounts
//     return () => {
//         chatContainer.removeEventListener('scroll', handleScroll);
//     };
// }, []);
useEffect(() => {
    //  const messagescontainer = document.getElementById('messages-container');
    //  const shouldScroll = (messagescontainer.scrollTop + messagescontainer.clientHeight) +10 === messagescontainer.scrollHeight;
    //      console.log("should scroll is scrollTop clientHeight ",messagescontainer.scrollTop );
    //      console.log("should scroll is scrollHeight ",messagescontainer.scrollHeight);
    // if (!shouldScroll) {
        dummy.current.scrollIntoView({ behavior: 'smooth' });//////////////////////need to fix that not always scroll down
    // }

}, [messages]);
    return (
        <div className="body">
            <div id='chat-container' className="chat-container">
                <div className="header">
                    <div className="user-info">
                               <img
                                loading="lazy"
                                src={currentSelectedUser?.photoURL}
                                alt="User avatar"
                                className="avatar"
                                />
                        <div className="username">{ currentSelectedUser?.displayName}</div> 
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
                        <div ref={messagesEndRef}></div>
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
    );
};

export default ChatProviderOld;
