import { db, colRef, updateColRef } from '../../App.jsx';
import { auth } from '../../App.jsx';
import { getDocs, getDoc, doc } from "firebase/firestore";
// import {useUserContext} from "../../context/UserContext.jsx";
// let id =0;
export const addUserForm = async () => {
    console.log("Executing addUserForm");
    try {
         let user = auth.currentUser;
       if (user !== null) 
       {
        if (user.isAnonymous) 
        {
           console.log("Anonymous user");
           updateColRef(`Anonymous${crypto.randomUUID().slice(1,5)}`,"./assets/DefaultPlayerIcon.png","");
        }
    else {   
           updateColRef(user.displayName, user.photoURL,user.email);
         }
         return user;
}

    } 
    catch (error) 
    {
        console.error("Error adding user document:", error);
        return null; 
    }

};

export const getCurrentUserFromCollection = async (email) => {
    // console.log("Executing getUserFromCollection with email: " , email);
    try {
        const querySnapshot = await getDocs(colRef);
        const currentUser = querySnapshot.docs.find(doc => doc.data().email === email);
        // console.log("the foud currentUser in the collection is: " , currentUser);
        if (currentUser) {
            // console.log("User found");
            return { ...currentUser.data()};
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
function PlayerInfo() {}

export default PlayerInfo;
