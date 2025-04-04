import { createContext, useState } from "react";

const initialState = {isLoggedIn : false, user : null}

const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [auth, setAuth] = useState(JSON.parse(sessionStorage.getItem("auth")) || initialState);

    const login = (user) => {
        setAuth({isLoggedIn : true, user : user})
        sessionStorage.setItem("auth", JSON.stringify({isLoggedIn : true, user}))
    }

    const logout = () => {
        setAuth(initialState)
        sessionStorage.clear();
    }

    const value = {auth, login, logout}

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthProvider}