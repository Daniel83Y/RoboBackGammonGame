import React, { useState } from 'react';
import 'firebase/auth';
import { auth } from '../../App.jsx';
import { useAuthState } from 'react-firebase-hooks/auth'; 
import { getAuth, signInAnonymously, onAuthStateChanged, GoogleAuthProvider ,signInWithPopup } from 'firebase/auth';
import { useNavigate } from "react-router-dom";

function LoginButton({  Provider, icon}) {
    
    const navigate = useNavigate();
  // const [user] = useAuthState(auth);

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider).then((result) => {
        // User is created and signed in
        // userinfo = result;
        console.log(result);
        
        navigate("/LoggedInPage");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ...
      });
    // if(user){
    //   redirect("/LoggedInPage")
    // }
  };
// const addUserForm = document.querySelector('.add')
// addUserForm.addEventListener('submit', e) => {
//     e.preventDefault()
    
//     addDoc(colRef,{
//         PlayerName: addPlayerName.value,
        
//     })
// }
  
  // getRedirectResult(auth).then((result) => {
  //   // This gives you a Google Access Token. You can use it to access Google APIs.
  //   const credential = GoogleAuthProvider.credentialFromResult(result);
  //   const token = credential.accessToken;

  //   // The signed-in user info.
  //   const user = result.user;
  //   console.log(user);
  //   // IdP data available using getAdditionalUserInfo(result)
  //   // ...
  // }).catch((error) => {
  //   // Handle Errors here.
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   // The email of the user's account used.
  //   const email = error.customData.email;
  //   // The AuthCredential type that was used.
  //   const credential = GoogleAuthProvider.credentialFromError(error);
  //   // ...
  // });



   const signAsGuest = () => {
    // const auth = getAuth();
signInAnonymously(auth)
  .then((result) => {
        // User is created and signed in
        console.log(result);
        navigate("/LoggedInPage");
      })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
  });

    // const provider = new firebase.auth.signInAnonymously();
    // firebase.auth().signInWithPopup(provider);
  };
//   onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/auth.user
//     const uid = user.uid;
//   }
// }
// );

  // Render login button only if user is not authenticated
  return (
  <div className="flex flex-1 gap-2.5 justify-center px-6 bg-white shadow-sm leading-[100%] rounded-[50px] max-md:px-5"
  onClick={() => {
    if (Provider === "With Google") {
      signInWithGoogle();
    } 
    else if (Provider === "as Guest") {
      signAsGuest();
    }
  }}>
    <div className="grow my-auto">Login {Provider}</div>
    <img src={icon} alt={`${Provider} logo`} className="shrink-0 max-w-full aspect-[1.16] w-[100px]" />
  </div>
);
}
  
    // return (
    //   <div className="flex flex-1 gap-2.5 justify-center px-6 bg-white shadow-sm leading-[100%] rounded-[50px] max-md:px-5">
    //     <div className="grow my-auto" onClick={otenProvider}>Login {Provider}</div>
    //     <img src={icon} alt={`${Provider} logo`} className="shrink-0 max-w-full aspect-[1.16] w-[100px]" />
    //   </div>
    // );
  // } else {
  //   // Optionally, render something else when user is authenticated
  //   return <div>User is authenticated</div>;
  


  
export default LoginButton;
