import React from 'react';
import 'firebase/auth';
import { auth } from '../../App.jsx';
import { useAuthState } from 'react-firebase-hooks/auth'; 
import { getAuth, onAuthStateChanged, GoogleAuthProvider ,signInWithPopup} from 'firebase/auth';
import { useNavigate } from "react-router-dom";
import { getDocs,addDoc, collection } from 'firebase/firestore';
import { db, colRef, updateColRef } from '../../App.jsx';
// import { useUserContext } from "../context/user-context.jsx";
import { addUserForm } from '../PlayerInfo/PlayerInfo.jsx';
function LoginButton({  Provider, icon}) {
    
    const navigate = useNavigate();
  const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            // const { displayName, photoURL } = result.user;
            await addUserForm(); // Add user information to Firestore
            navigate("/LoggedInPage");
        } catch (error) {
            console.error("Sign-in google error:", error);
        }
    };

 const signAsGuest = async () => {
        try {
            const result = await signInAnonymously(auth);
            // await addUserForm(`Anonymous${id++}`, { PlayerIcon: "./assets/DefaultPlayerIcon.png" }); // Add anonymous user information to Firestore
            addUserForm();
            navigate("/LoggedInPage");
        } catch (error) {
            console.error("Sign-in guest error:", error);
        }
    };



  return (
    <div className="flex flex-1 gap-2.5 justify-center px-6 bg-white shadow-sm leading-[100%] rounded-[50px] max-md:px-5">     
            <>
              <div className="grow my-auto" onClick={Provider === "With Google" ? signInWithGoogle : signAsGuest}>
                    {Provider === "With Google" ? "Login With Google" : Provider === "as Guest" ? "Login as Guest" : Provider}
                </div>
                <img src={icon} alt={`${Provider} logo`} className="shrink-0 max-w-full aspect-[1.16] w-[100px]" />
            </>     
    </div>
);
  

}


  
export default LoginButton;
