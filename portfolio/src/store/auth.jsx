import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const url= import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";
    const [token, settoken] = useState(localStorage.getItem('token'));
    const [user, setuser] = useState({ username: "", email: "", isAdmin: false });
    const AuthorizationToken = `Bearer ${token}`

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
            const response = await fetch(`${url}/user`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },

            });

            if (response.ok) {
                const data = await response.json();
                setuser({
                    username: data.userData.username,
                    email: data.userData.email,
                    isAdmin: data.userData.isAdmin
                })
            }

        } catch (error) {
            console.log("error in fetching currently logged in user data...");
        }
    }

    useEffect(() => {
        userAuthentication();
    }, [])

    // useEffect(() => {
    //     console.log("User state changed:", user);
    // }, [user]);


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
