import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext() // We are creating a context API

export const DarkModeContextProvider = ({children}) => { // To use this context we need this provider to wrap our application// here children is our entire application
    const [darkMode,setDarkMode] = useState( // we initially dont put dark mode, we check the storage and check the value of darkMode variable and set the theme accordingly
        localStorage.getItem("darkMode") || false  // Means if there is no darkmode means if user is visiting the website for the first time then we set darkmode to false
        );

    const toggle = () =>{ // we change the darkMode using this function. Eerytime we change it we set the storage again and again
        setDarkMode(!darkMode);
    };

    useEffect(()=>{ // if its their first visit then we shall write it in our local system
        localStorage.setItem("darkMode",darkMode)
    },[darkMode])  // whenever darkMode changes , just set the local storage again as seen in above line


    return(
        <DarkModeContext.Provider value={{darkMode,toggle}}> {/* We are be able to use anything we send here with this value */}
            {children}
        </DarkModeContext.Provider>
    );
};