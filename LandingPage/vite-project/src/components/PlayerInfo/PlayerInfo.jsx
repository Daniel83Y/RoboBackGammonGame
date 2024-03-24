// import React, { useState, useEffect } from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
// import "firebase/compat/auth";
// //import "firebase/analytics";

import { addDoc } from "firebase/firestore"


// //const analytics = firebase.analytics();

// function PlayerInfo({ playerStatus, uid }) {
//   const [user] = useAuthState(auth);
//   const [playerName, setPlayerName] = useState("");
//   const [playerAvatar, setPlayerAvatar] = useState("");

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const userDoc = await firestoreInstance
//           .collection("users")
//           .doc(uid)
//           .get();
//         if (userDoc.exists) {
//           const userData = userDoc.data();
//           setPlayerName(userData.displayName || "Unknown");
//           setPlayerAvatar(userData.photoURL || "default_avatar_url");
//         } else {
//           console.error("User document does not exist for uid:", uid);
//         }
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     };

//     fetchUserData();
//   }, [uid, user, firestoreInstance]);

//   return (
//     <div className="flex gap-5 self-stretch text-5xl max-md:text-4xl">
//       <div className="flex-auto my-auto max-md:text-4xl">{playerName}</div>
//       <img
//         src={playerAvatar}
//         alt={`${playerName}'s avatar`}
//         className="shrink-0 aspect-square w-[90px]"
//       />
//       <img
//         src={playerStatus}a
//         alt={`${playerName}'s status`}
//         className="shrink-0 self-stretch my-auto aspect-[0.97] w-[59px]"
//       />
//     </div>
//   );
// }

// export default PlayerInfo;







// const addUserForm = document.querySelector('.add')
// addUserForm.addEventListener('submit', e) => {
//     e.preventDefault()
    
//     addDoc(colRef,{
//         PlayerName: addPlayerName.value,
        
//     })
// }