import React, { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [isLogin, setIsLogin] = useState(false);

    return (
        <GlobalContext.Provider value={{ isLogin, setIsLogin }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => useContext(GlobalContext);
