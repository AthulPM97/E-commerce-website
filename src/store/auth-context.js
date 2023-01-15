import React, { useState } from "react"

const AuthContext = React.createContext({
    token: '',
    isLoggedin: null,
    login: () => {},
});

export const AuthProvider = (props) => {

    const storedToken = localStorage.getItem('token') || '';

    const [token, setToken] = useState(storedToken);
    
    const userIsLoggedin = !!token;
    
    const loginHandler = (token) => {
        localStorage.setItem('token', token);
        setToken(token);
    }

    const authContext = {
        token: token,
        isLoggedin: userIsLoggedin,
        login: loginHandler
    };

    return(
        <AuthContext.Provider value={authContext}>{props.children}</AuthContext.Provider>
    )
}



export default AuthContext;