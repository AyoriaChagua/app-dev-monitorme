import { createContext, useContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase.config"

export const authContext = createContext() //aca es donde se alamacena la informacion

export const useAuth = () => {
    const context = useContext(authContext)
    if(!context) throw new Error('There is no auth provider')
    return context
}

export const AuthProvider = ({children}) =>{

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    return (
        <authContext.Provider value={{signUp}}>
            {children}
        </authContext.Provider>
    )
}