import React from 'react';
import 'firebase/auth';
import { auth } from '../../App.jsx';
import { useAuthState } from 'react-firebase-hooks/auth'; 
import { signOut} from 'firebase/auth';
import { useNavigate } from "react-router-dom";
import { getDocs,addDoc, collection } from 'firebase/firestore';
import { db, colRef, updateColRef } from '../../App.jsx';
function SignOutButton() {
    
    const navigate = useNavigate();
    const SignOut = async () => {
        try {
            await signOut(auth);
            navigate("/");
        } catch (error) {
            console.error("Sign-out error:", error);
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
