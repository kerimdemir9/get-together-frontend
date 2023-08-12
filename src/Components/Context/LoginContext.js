import React, { createContext, useContext, useState } from 'react';

const LoginContext = createContext(undefined);

export const GlobalProvider = ({ children }) => {
    const [isLogin, setIsLogin] = useState(false);

    return (
        <LoginContext.Provider value={{ isLogin, setIsLogin }}>
            {children}
        </LoginContext.Provider>
    );
};

export const useGlobalContext = () => useContext(LoginContext);
