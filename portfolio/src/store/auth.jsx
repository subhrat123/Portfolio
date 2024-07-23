import { createContext,useContext, useState } from "react";

export const AuthContext=createContext();


export const AuthProvider=({children})=>{

const [token, settoken] = useState(localStorage.getItem('token'));
const storeTokenLS=(Token)=>{
    settoken(Token);
   return localStorage.setItem("token",Token);
}
let isLogedin=!!token;

 const logout=()=>{
    settoken("");
    localStorage.removeItem('token');
};


return(
   <AuthContext.Provider value={{storeTokenLS,logout,isLogedin}}>
    {children}
   </AuthContext.Provider>)
}


export const useAuth =()=> {

    const AuthContextValue=useContext(AuthContext);
    if(!AuthContextValue){
        throw new Error("useAuth used outside the provider");
    }
    return AuthContextValue;
}