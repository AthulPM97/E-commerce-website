import React, { useState } from "react"

const AuthContext = React.createContext({
    token: '',
    isLoggedin: null,
    login: () => {},
    email: '',
});

export const AuthProvider = (props) => {

    const storedToken = localStorage.getItem('token') || '';

    const [token, setToken] = useState(storedToken);
    const email = localStorage.getItem("email");
    
    const userIsLoggedin = !!token;
    
    const loginHandler = (token,email) => {
        localStorage.setItem('token', token);
        setToken(token);
    }

    const authContext = {
        token: token,
        isLoggedin: userIsLoggedin,
        login: loginHandler,
        email: email,
    };

    return(
        <AuthContext.Provider value={authContext}>{props.children}</AuthContext.Provider>
    )
}



export default AuthContext;