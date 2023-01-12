import { createContext, useEffect, useState } from "react";
import axios from "axios"

export const AuthContext = createContext() // We are creating a context API

export const AuthContextProvider = ({children}) => { // To use this context we need this provider to wrap our application  // Here children is our entire application
    const [currentUser,setCurrentUser] = useState( 
        JSON.parse(localStorage.getItem("user")) || null  // Means if there is no user means if user is visiting the website for the first time then we set user to null
        );

    const login = async (inputs) =>{ // We will take this from API, our API is gonna return our user info and we are gonna set our currentUser. Since we are changing currentUser it's gonna run the useEffect written below. // async because we are making API call
        // TO DO
        const res = await axios.post("http://localhost:8800/api/auth/login", inputs,{ // after this our backend server will send us user info and cookie
            withCredentials:true, // it is imp as we are working with cookies
        });

        setCurrentUser(res.data)
    };
    

    useEffect(()=>{ // It will set userinfo to local storage and after that we will be able to use "currentUser" and 'login' everywhere in the web app
        localStorage.setItem("user",JSON.stringify(currentUser))
    },[currentUser])  


    return(
        <AuthContext.Provider value={{currentUser , login}}> {/* We are be able to use anything we send here with this value */}
            {children}
        </AuthContext.Provider>
    );
};