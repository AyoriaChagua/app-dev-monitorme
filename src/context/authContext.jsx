import { createContext, useContext } from "react";
import { auth } from "../config/firebase.config"
import { useEffect } from "react"
import {    
            createUserWithEmailAndPassword, 
            signInWithEmailAndPassword,
            onAuthStateChanged
        } from "firebase/auth";



export const authContext = createContext() //aca es donde se alamacena la informacion

export const useAuth = () => {
    const context = useContext(authContext)
    if(!context) throw new Error('There is no auth provider')
    return context
}

export const AuthProvider =  ({children}) => {

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    const login = async (email, password ) => {
        const userCredentials = await signInWithEmailAndPassword(auth, email, password)
        console.log(userCredentials)
    }

    useEffect(() => {

    })

    return (
        <authContext.Provider value={{ signUp, login }}>
            {children}
        </authContext.Provider>
    )
}