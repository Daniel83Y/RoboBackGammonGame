import React, { useEffect } from 'react';
import ChatProvider from './ChatComp2.jsx';
import { useSelectedUserContext } from '../context/selectedUser-context';
 
const ChatPopup = ({ isOpen, onClose }) => {
 const { selectedUser } = useSelectedUserContext();
    const openChatInPopup = () => {
    const width = 430;
    const height = 950;
    const left = window.screen.width / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;
    const options = `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes,status=yes`;
    const show=false;

      //  window.open('http://localhost:5173/Chat', '_blank', `noopener noreferrer,${options}`);

   
    // Optionally, you can load your ChatProvider component here
    // window.open('<URL_TO_CHAT_PROVIDER_COMPONENT>', '_blank', options);Z
  };
 
  // Open chat in popup immediately when component mounts
  // useEffect(() => {
  //   if (selectedUser!=null) {
  //     console.log("openingpoup selected",selectedUser);
  //     openChatInPopup();
  //   }
    
  // }, []);
 
  // useEffect(() => {
  //   onClose();
  // }, [window.onclose]);
  // Return null since we don't want to render anything directly
 return (
  <ChatProvider />
);
  
};

export default ChatPopup;




