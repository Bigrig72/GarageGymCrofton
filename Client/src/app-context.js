import React, { useState, useContext } from "react";

const AppContext = React.createContext();

export default function useAppContext() {
  const appContext = useContext(AppContext);
  return appContext;
}

export function AppContextContainer({ children }) {
    const [loggedIn, setLoggedIn] = useState(false);
   
    
    const defaultContext = {
        loggedIn,
        setLoggedIn      
    }
    
  return (
    <AppContext.Provider value={defaultContext}>{children}</AppContext.Provider>
  );
}

