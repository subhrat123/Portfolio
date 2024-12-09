import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {

    const [token, settoken] = useState(localStorage.getItem('token'));
    const [user, setuser] = useState("");
    const AuthorizationToken=`Bearer ${token}`

    const storeTokenLS = (Token) => {
        settoken(Token);
        return localStorage.setItem("token", Token);
    }
    let isLogedin = !!token;

    const logout = () => {
        settoken("");
        localStorage.removeItem('token');
    };

    // JWT AUTHENTICATION - to get currently logged user data...

    const userAuthentication = async () => {
        try {
            const response = await fetch("http://localhost:3000/user", {
                method: "GET",
                headers:{
                    Authorization: `Bearer ${token}`,
            },

            });

            if(response.ok) {
                const data=await response.json();
                console.log(data.userData);
                setuser(data.userData);
            }

        } catch (error) {
            console.log("error in fetching currently logged in user data...");
        }
    }

    useEffect(() => {
      userAuthentication();
    }, [])
    

    return (
        <AuthContext.Provider value={{ storeTokenLS, logout, isLogedin, user, AuthorizationToken, }}>
            {children}
        </AuthContext.Provider>)
}


export const useAuth = () => {

    const AuthContextValue = useContext(AuthContext);
    if (!AuthContextValue) { 
        throw new Error("useAuth used outside the provider");
    }
    return AuthContextValue;
}