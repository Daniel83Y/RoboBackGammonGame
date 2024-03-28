import { colRef,auth,db} from '../../App.jsx';
import { getDocs, getDoc, doc ,setDoc,deleteDoc,updateDoc} from "firebase/firestore";
import { collection } from 'firebase/firestore';
// import {isAnonymous} from 'firebase/auth';
// import {useUserContext} from "../../context/UserContext.jsx";
// let id =0;


///create a new doc for player and add it to collection
export const addUserForm = async () => {
    console.log("Executing addUserForm start");
    try {
         let user = auth.currentUser;
         console.log("addUserForm user: ", user);
       if (user !== null) 
       {
        if (user.isAnonymous) 
        {
           console.log("Anonymous user");
           user.displayName = `Anonymous${crypto.randomUUID().slice(1,5)}`;
           user.email = `${user.displayName}@Email.com`;
           updateColRef(user.displayName,"https://firebasestorage.googleapis.com/v0/b/robobackgammon.appspot.com/o/image%202.png?alt=media&token=af25d686-29d9-4eb0-bed4-0015a99954a6",user.email,true);
           
        }
    else {   
           updateColRef(user.displayName, user.photoURL,user.email,true);
         }
         return user;
}

    } 
    catch (error) 
    {
        console.error("Error adding user document:", error);
        return null; 
    }
 console.log("Executing addUserForm end");
};
////////////////////////////////////////add new player to collection////////////////////////////////////////
 const updateColRef = async (displayname,Playericon,playeremail) => {
    console.log("Executing updateColRef start");
  const data = {
    displayName: displayname,
    PlayerIcon: Playericon,
    email: playeremail,
    onlineState:true
  };
  try 
  {
    await setDoc(doc(db, "PlayerStats", displayname), data);
    console.log('Document successfully updated!');
  } 
  catch (error) 
  {
    console.error('Error updating document: ', error);
  }
    console.log("Executing updateColRef end");
}; 

/////////////////////////////////////////get current user from collection////////////////////////////////////////
export const getCurrentUserFromCollection = async (email) => {
    // console.log("Executing getUserFromCollection with email: " , email);
    try {
        console.log("Executing getCurrentUserFromCollection start: " , email);
        
        // if(user.isAnonymous)
        // {

        //      const currentUser = querySnapshot.docs.find(doc => doc.data().displayName === user.displayName);


        //      console.log("CurrentAnonymous user ",currentUser);

        // }
        // else
        // {
          const querySnapshot = await getDocs(colRef);
             const currentUser = querySnapshot.docs.find(doc => doc.data().email === email); 
            console.log("found user:", currentUser);
        // }
       
        // console.log("the foud currentUser in the collection is: " , currentUser);
        if (currentUser) {
            // console.log("User found");
            return { ...currentUser.data()};
         console.log("Executing getCurrentUserFromCollection end: " , currentUser);
        } else {
            console.log("User not found in collection");
            return null;
        }
    } catch (error) {
        console.log("the method getCurrentUserFromCollection crushed")
        console.error("Error saerching document:", error);
        return null;
    }
   
};
// export const getCurrentUserFromCollection = async (email) => {
//     try {
//         console.log("Executing getCurrentUserFromCollection start: ", email);
        
//         const querySnapshot = await getDocs(colRef);
//         console.log("Query Snapshot:", querySnapshot); // Debugging
        
//         const currentUser = querySnapshot.docs.find(doc => doc.data().email === email); 
//         console.log("Found User:", currentUser); // Debugging
        
//         if (currentUser) {
//             console.log("User found in collection"); // Debugging
//             return { ...currentUser.data()};
//         } else {
//             console.log("User not found in collection");
//             return null;
//         }
//     } catch (error) {
//         console.error("Error fetching documents:", error); // Error handling
//         return null;
//     }
// };

export const onlineStateToggle = async (displayname) =>{
 const docref = doc(db, 'PlayerStats', displayname);
  const docSnap = await getDoc(docref); // Get the document snapshot
  
  if (docSnap.exists()) {
    const currentOnlineState = docSnap.data().onlineState;
    await updateDoc(docref, {
      onlineState: !currentOnlineState})
  .then(() => {
    console.log('onlineState successfully updated!');
  })
  .catch((error) => {
    console.error('Error deleting document:', error);
  });
}
}
///delete doc from collection by user name
export const deleteUserFromCollection = async (displayname) => {
  //  await db.colRef('PlayerStats').doc({displayname}).delete();


const docref = doc(db, 'PlayerStats', displayname);

await deleteDoc(docref)
  .then(() => {
    console.log('Document successfully deleted!');
  })
  .catch((error) => {
    console.error('Error deleting document:', error);
  });
}
//////need work but should returne two arrays of players online and offline
export const CurrenlyOnlineAndOffline = async () => {
     const querySnapshot = await getDocs(colRef);
        const currentUser = querySnapshot.docs.forEach(doc => {
            console.log("the foud currentUser in the collection is: " , doc.data());
        })
}


function PlayerInfo() {}

export default PlayerInfo;
