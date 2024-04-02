import * as React from "react";
import addUserForm from "../PlayerInfo/PlayerInfo.jsx";
import { useCurrentUserContext } from "../context/currentuser-context.jsx";
import { usePlayersStateListsContext } from "../context/playersStateLists-context.jsx";
import { useSelectedUserContext } from '../context/selectedUser-context';
import { OnlinePlayersNav } from '../OnlinePlayers/OnlinePlayersCount.jsx';
import OnlineOfflineTable from "../onlineOfflineTable/onlineOfflineTable.jsx";
import SideMenu from "../UserPopUp/SideMenuPop.jsx"; // Import the SideMenu component
import { auth } from '../../App.jsx';
import { useEffect } from "react";
import { db } from "../../App.jsx";
import { collection, query, onSnapshot } from 'firebase/firestore';
import { onAuthStateChanged } from "firebase/auth";


function LoggedInPage() {
  const { selectedUser } = useSelectedUserContext();
  const { currentUser } = useCurrentUserContext();
  const { onlineList, offlineList,refresh,setRefresh } = usePlayersStateListsContext();
  const playersOnline = onlineList.length;
  const [isMenuOpen, setIsMenuOpen] = React.useState(false); // State to manage menu visibility
console.log(currentUser);
// useEffect(() => {

//     setRefresh(!refresh ); // Triggers re-render
// },[]);
useEffect(() => {
  console.log("logged in page selected user", selectedUser);
}, [selectedUser]);

useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        // Trigger re-render whenever authentication state changes
        setRefresh(!refresh);
    });

    return () => unsubscribe();
}, []);

// temp=auth.currentUser;
  const toggleMenu = () => {
    console.log("inside toggleMenu");
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-gray-800 text-white flex items-center justify-between px-4 py-2">
        <h1 className="font-Orbitron flex-none text-6xl max-w-full max-md:text-4xl ml-2 text-Black">
          RoboBackgammon
        </h1>
        <div className="font-Stick flex items-center ml-32">
          <OnlinePlayersNav count={playersOnline} />
          {/* Adjust margin to move it to the right */}
        </div>
        {/* Display user's name and photo if available */}
        {currentUser && (
          <div className="font-Russo flex items-center flex-grow justify-center ml-8">
            {currentUser.displayName && <div className="text-5xl text-white">{currentUser.displayName}</div>}
            {currentUser.PlayerIcon && <img src={currentUser.PlayerIcon} alt={currentUser.displayName} className="w-14 h-14 rounded-full ml-2" />}
          </div>
        )}
        {/* Menu toggle button */}
        <div className="flex-none w-64 flex justify-end">
  <button className="text-white" onClick={toggleMenu}>
    Menu
  </button>
</div>
      </nav>
      <div className="flex flex-col justify-center font-bold text-center text-white bg-white relative">
        <div className="flex overflow-hidden flex-col items-center px-7 pt-3 pb-20 w-full min-h-[1024px] max-md:px-5 max-md:mr-0.5 max-md:max-w-full">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c13d34486300520d3172c3eaa83ad3c40801e3862f6c05ae3fb3cd8c66dba174?apiKey=1477cbc897df4fa28e1ddba6fd23de63&" alt="Background" className="object-cover absolute inset-0 w-full h-full" />
          <div className="relative z-10">
            { <SideMenu setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />} 
            {/* Render SideMenu if menu is open */}
            <OnlineOfflineTable onlineList={onlineList} offlineList={offlineList} />
          </div>
        </div>
      </div>
    </>
  );
}

export default LoggedInPage;
