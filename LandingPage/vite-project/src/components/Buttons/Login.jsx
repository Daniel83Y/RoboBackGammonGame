import React from 'react';
import 'firebase/auth';
import { auth } from '../../App.jsx';
import { useAuthState } from 'react-firebase-hooks/auth'; 
import { getAuth, onAuthStateChanged, GoogleAuthProvider ,signInWithPopup,signInAnonymously} from 'firebase/auth';
import { useNavigate } from "react-router-dom";
import { getDocs,addDoc, collection } from 'firebase/firestore';
import { db, colRef} from '../../App.jsx';
// import { useUserContext } from "../context/user-context.jsx";
import { addUserForm,getCurrentUserFromCollection } from '../PlayerInfo/PlayerInfo.jsx';
import { onlineStateToggle } from '../context/playersStateLists-context.jsx';
function LoginButton({Provider, icon}) {
    
    const navigate = useNavigate();
//   const signInWithGoogle = async () => {
//     console.log("signed in with google start");
//         const provider = new GoogleAuthProvider();
//         try {
//             const result = await signInWithPopup(auth, provider);
//             // const { displayName, photoURL } = result.user;
//             if(getCurrentUserFromCollection(result.user.email))
//              {
//                 console.log("user already exists singing in");
//              }
//             else
//             {
//                 addUserForm(); // Add user information to Firestore
//             }
//             navigate("/LoggedInPage");
//         } 
//         catch (error) 
//         {
//             console.error("Sign-in google error:", error);
//         }
//           console.log("signed in with google end");
//     };






const signInWithGoogle = async () => {
    console.log("signed in with google start");
    const provider = new GoogleAuthProvider();
    try {
        const result = await signInWithPopup(auth, provider);
        // const { displayName, photoURL, email } = result.user;
        if (await getCurrentUserFromCollection(result.user.email)) {
            console.log("User already exists, signing in.");
            await onlineStateToggle(result.user.displayName);
            // user=auth.currentUser;
        } else {
            await addUserForm(); // Wait for user information to be added to Firestore

        }
        navigate("/LoggedInPage");
    } catch (error) {
        console.error("Sign-in google error:", error);
        // Handle error appropriately, show error message to the user
    }
    console.log("signed in with google end");
};

 const signAsGuest = async () => {
        try {
            console.log("signed in as guest");
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
