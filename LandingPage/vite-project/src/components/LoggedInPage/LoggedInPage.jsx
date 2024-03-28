import * as React from "react";
import SignOutButton from "../Buttons/SignOut.jsx";
import addUserForm from "../PlayerInfo/PlayerInfo.jsx";
import { auth } from '../../App.jsx';
import { useEffect, useState } from "react";
import { useCurrentUserContext } from "../context/currentuser-context.jsx";

function LoggedInPage() {
  const { currentUser } = useCurrentUserContext();

  return (
    <>
  <nav className="bg-gray-800 text-white flex items-center justify-between px-4 py-2">
    <h1 className="font-Orbitron flex-none text-6xl max-w-full max-md:text-4xl ml-2 text-Black">
      RoboBackgammon
    </h1>
    {/* Display user's name and photo if available */}
    {currentUser && (
      <div className="font-Russo flex items-center flex-grow justify-center ml-8">
        {currentUser.displayName && <div className="text-5xl text-white">{currentUser.displayName}</div>}
        {currentUser.PlayerIcon && <img src={currentUser.PlayerIcon} alt={currentUser.displayName} className="w-14 h-14 rounded-full ml-2" />}
      </div>
    )}
    {/* Sign out button */}
    <div className="flex-none">
      <SignOutButton Provider="Sign Out" icon={currentUser ? currentUser.PlayerIcon : ''} />
    </div>
  </nav>
  <div className="flex flex-col justify-center font-bold text-center text-white bg-white">
    <div className="flex overflow-hidden relative flex-col items-center px-7 pt-3 pb-20 w-full min-h-[1024px] max-md:px-5 max-md:mr-0.5 max-md:max-w-full">
      {/* Background image */}
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c13d34486300520d3172c3eaa83ad3c40801e3862f6c05ae3fb3cd8c66dba174?apiKey=1477cbc897df4fa28e1ddba6fd23de63&" alt="Background" className="object-cover absolute inset-0 size-full" />
      
    </div>
  </div>
</>
  );
}

export default LoggedInPage;
