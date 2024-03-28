// import React, { useRef, useState, useEffect } from 'react';
// import { collection, addDoc, serverTimestamp } from 'firebase/firestore'; // Import firestore functions from Firebase
// import { auth, db } from '../../App.jsx'; // Import auth and db from your App.jsx file
// import { useCollectionData } from 'react-firebase-hooks/firestore';

// const ChatProvider = () => {
//     const dummy = useRef();
//     const messagesRef = collection(db, 'messages'); // Use db from your App.jsx file to access Firestore
//     const query = collection(messagesRef).orderBy('createdAt').limit(25); // Correctly initialize the query

//     const [messages] = useCollectionData(query, { idField: 'id' });

//     const [formValue, setFormValue] = useState('');

//     const sendMessage = async (e) => {
//         e.preventDefault();

//         const { uid, photoURL } = auth.currentUser;

//         await addDoc(messagesRef, {
//             text: formValue,
//             createdAt: serverTimestamp(),
//             uid,
//             photoURL
//         });

//         setFormValue('');
//         dummy.current.scrollIntoView({ behavior: 'smooth' });
//     };

//     useEffect(() => {
//         dummy.current.scrollIntoView({ behavior: 'smooth' });
//     }, [messages]); // Scroll to the bottom when new messages are added

//     return (
//         <div className="chat-container">
//             {messages && messages.map(msg => (
//                 <ChatMessage key={msg.id} message={msg.text} isUser={msg.uid === auth.currentUser.uid} />
//             ))}
//             <div ref={dummy}></div>
//             <form onSubmit={sendMessage}>
//                 <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Type your message" />
//                 <button type="submit">Send</button>
//             </form>
//         </div>
//     );
// }

// function ChatMessage({ message, isUser }) {
//     return (
//         <div className={`justify-center px-3.5 py-2.5 mt-2.5 max-w-full rounded-3xl ${isUser ? "self-end bg-black text-right" : "bg-neutral-600"}`}>
//             {message}
//         </div>
//     );
// }

// export default ChatProvider;


//version 2
// import React, { useRef, useState } from 'react';

// const ChatProvider = () => {
//     const dummy = useRef();
//     const [formValue, setFormValue] = useState('');
//     const [messages, setMessages] = useState([]);

//     const sendMessage = (e) => {
//         e.preventDefault();

//         const newMessage = {
//             id: new Date().getTime(),
//             message: formValue,
//             isUser: true
//         };

//         setMessages([...messages, newMessage]);
//         setFormValue('');
//         dummy.current.scrollIntoView({ behavior: 'smooth' });
//     };

//     return (
//     <div className="flex flex-col mx-auto w-430 h-932 overflow-y-auto"> 
//         <div className="flex justify-between items-center bg-gray-800 rounded-t-lg px-6 py-4">
//             <div className="flex items-center gap-4">
//                 <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/755a4236f05c1acaac1a7baaa4ae8f0c0cde44ba49ceaf1b0b6f7e9e6de71fb7?apiKey=1477cbc897df4fa28e1ddba6fd23de63&"
//                     alt="User avatar"
//                     className="w-12 h-12 rounded-full"
//                 />
//                 <div className="text-xl font-semibold text-white">Daniel</div>
//             </div>
//             <img
//                 loading="lazy"
//                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/267e389eeca9561bc08fdb73e29cb3fc83cad65ba715b26c4fa14ef7a3e4770e?apiKey=1477cbc897df4fa28e1ddba6fd23de63&"
//                 alt="Chat image"
//                 className="w-16 h-16 rounded-lg"
//             />
//         </div>
//         <div className="flex flex-col bg-gray-800">
//             <div className="flex flex-col-reverse">
//                 {messages.map((msg, index) => (
//                     <div
//                         key={index}
//                         className={`p-4 rounded-lg ${msg.isUser ? 'bg-black text-white self-end' : 'bg-neutral-600'}`}
//                     >
//                         {msg.message}
//                     </div>
//                 ))}
//             </div>
//             <div ref={dummy}></div>
//         </div>
//         <div className="flex items-center justify-between bg-gray-800 rounded-b-lg px-6 py-4">
//             <input
//                 type="text"
//                 className="w-full p-4 bg-neutral-700 rounded-lg text-white outline-none"
//                 placeholder="Write a message"
//                 value={formValue}
//                 onChange={(e) => setFormValue(e.target.value)}
//             />
//             <button
//                 className="p-3 bg-blue-600 rounded-full text-white ml-2"
//                 onClick={sendMessage}
//             >
//                 <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/0da46eb13aca298e978ad34689951fe7409f04e8bc2ff49a5fd3acff6d2b61f7?apiKey=1477cbc897df4fa28e1ddba6fd23de63&"
//                     alt="Send icon"
//                     className="w-6 h-6"
//                 />
//             </button>
//         </div>
//     </div>
// );
// }

// export default ChatProvider;

import React, { useRef, useState, useEffect } from 'react';
import './chat.css'; 
import WarDeclaration from './WarDeclare';

const ChatProvider = () => {
    const messagesEndRef = useRef(null);
    const [formValue, setFormValue] = useState('');
    const [messages, setMessages] = useState([]);
    const [showWarDeclaration, setShowWarDeclaration] = useState(false);
    // const [isDenyClicked, setIsDenyClicked] = useState(false);

    // Function to handle sending messages
    const sendMessage = (e) => {
        e.preventDefault();
        if (!formValue.trim()) return;

        const newMessage = {
            id: new Date().getTime(),
            message: formValue,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            isUser: true
        };

        setMessages((prevMessages) => [...prevMessages, newMessage]);
        setFormValue('');
    };

    // Function to handle key press (e.g., pressing Enter to send message)
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            sendMessage(e);
        }
    };

    // Function to handle click event for war declaration button
    const handleClickWar = () => {
        setShowWarDeclaration(!showWarDeclaration);
    };

    // Function to handle denying war declaration
    const handleDeny = () => {
        setShowWarDeclaration(false);
    };

    // useEffect(() => {
    //     // Scroll to the end of the chat when messages change
    //     messagesEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    // }, [messages]);

    return (
        <div className="chat-container">
            {/* Chat header */}
            <div className="header">
                {/* User info */}
                <div className="user-info">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/755a4236f05c1acaac1a7baaa4ae8f0c0cde44ba49ceaf1b0b6f7e9e6de71fb7?apiKey=1477cbc897df4fa28e1ddba6fd23de63&"
                        alt="User avatar"
                        className="avatar"
                    />
                    <div className="username">Daniel</div>
                </div>
                {/* Button to show war declaration */}
                <button className="chat-image-button" onClick={handleClickWar}>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/267e389eeca9561bc08fdb73e29cb3fc83cad65ba715b26c4fa14ef7a3e4770e?apiKey=1477cbc897df4fa28e1ddba6fd23de63&"
                        alt="Chat image"
                        className="chat-image"
                    />
                </button>
            </div>
            
            {/* Chat messages */}
            <div className="messages-container">
                <div className="messages-scroll">
                    {/* Reverse the order of messages */}
                    {messages.slice(0).reverse().map((msg, index) => (
                        <div key={index} className={`message ${msg.isUser ? 'user-message' : 'other-message'}`}>
                            <div>{msg.message}</div>
                            <div className="timestamp">{msg.timestamp}</div>
                        </div>
                    ))}
                    {/* Ref to the end of messages for scrolling */}
                    <div ref={messagesEndRef}></div>
                </div>
            </div>
             <div className="parent-container">
            {/* War declaration */}
            {showWarDeclaration && <WarDeclaration handleDeny={handleDeny} />}
            </div>
            {/* Chat footer */}
            <div className="footer">
                {/* Input for typing messages */}
                <input
                    type="text"
                    className="message-input"
                    placeholder="Write a message"
                    value={formValue}
                    onChange={(e) => setFormValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                {/* Button to send messages */}
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
    );
}

export default ChatProvider;






