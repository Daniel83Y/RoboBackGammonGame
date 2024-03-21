import React from 'react';
import firebase from 'firebase/compat/app'; 
import 'firebase/compat/auth'; 
import { useAuthState } from 'react-firebase-hooks/auth'; 
const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

function LoginButton({ Provider, icon }) {
  const [user] = useAuthState(firebase.auth());

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  };

  // Render login button only if user is not authenticated
  if (!user) {
    return (
      <div className="flex flex-1 gap-2.5 justify-center px-6 bg-white shadow-sm leading-[100%] rounded-[50px] max-md:px-5">
        <div className="grow my-auto" onClick={signInWithGoogle}>Login with {Provider}</div>
        <img src={icon} alt={`${Provider} logo`} className="shrink-0 max-w-full aspect-[1.16] w-[100px]" />
      </div>
    );
  } else {
    // Optionally, render something else when user is authenticated
    return <div>User is authenticated</div>;
  }
}

export default LoginButton;
