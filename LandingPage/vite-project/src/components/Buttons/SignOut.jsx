import React from 'react';
import 'firebase/auth';
import { auth } from '../../App.jsx';
import { useAuthState } from 'react-firebase-hooks/auth'; 
import { signOut} from 'firebase/auth';
import { useNavigate } from "react-router-dom";
import { getDocs,addDoc, collection } from 'firebase/firestore';
import { db, colRef} from '../../App.jsx';
import {deleteUserFromCollection,onlineStateToggle} from '../PlayerInfo/PlayerInfo.jsx';
import { useUserContext } from "../context/user-context.jsx";
// import {auth} from '../../App.jsx';
// import {currentUser} from 'firebase/auth';
function SignOutButton() {
    const {user,setUser} = useUserContext();
// user=auth.currentUser;
    const navigate = useNavigate();

    const SignOut = async () => {
    try {
        console.log(user);
        if (user && user.displayName.includes('Anonymous')) {
            await signOut(auth);
            await deleteUserFromCollection(user.displayName); // Await the deleteUserFromCollection function
            console.log("Signout Successful");
        } 
        else {
            await onlineStateToggle(user.displayName);
            await signOut(auth);
          
        }
        navigate("/");
    } catch (error) {
        console.error("Sign-out error:", error);
        // Add additional error handling logic if necessary
    }
};



  return (
    <div className="flex flex-1 justify-center px-8 py-2 bg-white shadow-sm leading-[100%] max-md:px-8 text-black hover:bg-black hover:text-white cursor-pointer border border-black"      
     onClick={SignOut}> 
       Sign out
    </div>
);
  

}


  
export default SignOutButton;
