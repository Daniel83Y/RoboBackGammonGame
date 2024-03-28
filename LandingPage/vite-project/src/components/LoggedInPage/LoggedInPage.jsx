import * as React from "react";
import SignOutButton from "../Buttons/SignOut.jsx";
import addUserForm from "../PlayerInfo/PlayerInfo.jsx";
import { auth } from '../../App.jsx';
import { useEffect, useState } from "react";
// import { updateColRef } from "../../App.jsx";
// import {getCurrentUserFromCollection} from "../PlayerInfo/PlayerInfo.jsx";
// import { useContext } from 'react';
// import { UserContext } from "../../App.jsx";
// import {useUserContext} from "../../context/UserContext.jsx";
import {useCurrentUserContext} from "../context/currentuser-context.jsx";
function LoggedInPage() {
  
  // let user=useContext(UserContext);
  // const {user,setUser} = useUserContext();
const {currentUser} = useCurrentUserContext();

  //  const [currentUser, setCurrentUser] = useState(null);
  // let currentUser = user;
  // setCurrentUser(user);
console.log("the currentuser from the context is:", currentUser);
//   useEffect(() => {
//     console.log("inside use effect");
// const fetchUserData = async () => {
  
//     if (user) {
//       const useremail = user.email;

//         const userData = await getCurrentUserFromCollection(useremail);
//         console.log("the new Current user from the collection  is:", userData);

//         if (userData) {
//           setCurrentUser (userData);
//         }
//       }
//       else{
//         console.log("no user");
//       }
//     };
//   console.log("the user in the context is:", user);
//   console.log("the current user is:", currentUser);
//      fetchUserData();
//   }, [user]);

  // console.log("the current user photo is:", currentUser.photoURL);
//   return (
//   <>
//     <div className="flex flex-col justify-center font-bold text-center text-white bg-white">
//       <div className="flex overflow-hidden relative flex-col items-center px-7 pt-3 pb-20 w-full min-h-[1024px] max-md:px-5 max-md:mr-0.5 max-md:max-w-full">
//         {/* Background image */}
//         <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c13d34486300520d3172c3eaa83ad3c40801e3862f6c05ae3fb3cd8c66dba174?apiKey=1477cbc897df4fa28e1ddba6fd23de63&" alt="Background" className="object-cover absolute inset-0 size-full" />
//         <header className="flex relative gap-5 items-center self-stretch w-full text-zinc-300 max-md:flex-wrap max-md:max-w-full">
//           {/* Game title */}
//           <h1 className="flex-none text-6xl max-w-full max-md:text-4xl ml-2">
//             RoboBackgammon
//           </h1>
//           {/* Display user's name and photo if available */}
//           {currentUser && (
//             <div className="flex items-center flex-grow justify-center">
//               {currentUser.displayName && <div className="text-5xl">{currentUser.displayName}</div>}
//               {currentUser.photoURL && <img src={currentUser.photoURL} alt={currentUser.displayName} className="w-14 h-14 rounded-full ml-2" />}
//             </div>
//           )}
//           {/* Sign out button */}
//           <div className="flex-none">
//             <LoginButton Provider="Sign Out" icon={currentUser ? currentUser.photoURL : './assets/DefaultPlayerIcon.png'} />
//           </div>
//         </header>
//         <img srcr="./assets/DefaultPlayerIcon.png" ></img>
//       </div>
//     </div>
//   </>
// );

return (
    <>
      <div className="flex flex-col justify-center font-bold text-center text-white bg-white">
        <div className="flex overflow-hidden relative flex-col items-center px-7 pt-3 pb-20 w-full min-h-[1024px] max-md:px-5 max-md:mr-0.5 max-md:max-w-full">
          {/* Background image */}
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c13d34486300520d3172c3eaa83ad3c40801e3862f6c05ae3fb3cd8c66dba174?apiKey=1477cbc897df4fa28e1ddba6fd23de63&" alt="Background" className="object-cover absolute inset-0 size-full" />
          <header className="flex relative gap-5 items-center self-stretch w-full text-zinc-300 max-md:flex-wrap max-md:max-w-full">
            {/* Game title */}
            <h1 className="flex-none text-6xl max-w-full max-md:text-4xl ml-2">
              RoboBackgammon
            </h1>
            {/* Display user's name and photo if available */}
            {currentUser && (
              <div className="flex items-center flex-grow justify-center">
                {currentUser.displayName && <div className="text-5xl">{currentUser.displayName}</div>}
                {currentUser.PlayerIcon && <img src={currentUser.PlayerIcon} alt={currentUser.displayName} className="w-14 h-14 rounded-full ml-2" />}
              </div>
            )}
            {/* Sign out button */}
            <div className="flex-none">
              <SignOutButton Provider="Sign Out" icon={currentUser ? currentUser.PlayerIcon : ''} />
            </div>   
          </header>
       
        </div>
      </div>
    </>
  );
}




export default LoggedInPage;
