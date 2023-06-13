import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth"
import app from '../../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signupUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signinUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    //update profile 
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    //get user 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setUser(currentUser)
            }
            setLoading(false)
        });
        return () => unsubscribe();
    }, [])

    const authInfo = {
        user,
        signupUser,
        signinUser,
        updateUserProfile,
        loading,
        setLoading,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;