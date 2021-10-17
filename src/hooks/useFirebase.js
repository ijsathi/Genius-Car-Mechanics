import { getAuth, signInWithPopup, GoogleAuthProvider, signOut,onAuthStateChanged} from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication()

const useFirebase = () =>{
    const [users, setUsers] = useState({});

    const auth = getAuth();

    const signInWithGoogle = () =>{
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            setUsers(result.user)
        });
    };
    useEffect( () =>{
        const unSubscribed = onAuthStateChanged(auth , user =>{
            if(user){
                setUsers(user)
            }
            else{
                setUsers({})
            }
        })
        return () => unSubscribed;
    },[])
    const logOut = () =>{
        signOut(auth)
        .then(() =>{ });
    }

    return {
        users,
        signInWithGoogle,
        logOut
    }
}

export default useFirebase;