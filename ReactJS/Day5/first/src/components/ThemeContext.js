import React, { createContext, useContext, useState } from 'react';

const Context = createContext();

export const useTheme = () => useContext(Context);

const ThemeContext = ({children}) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }
    return (
        <div>
            <Context.Provider value={{theme, toggleTheme}}>
                {children}
            </Context.Provider>
        </div>
    )
}
export default ThemeContext