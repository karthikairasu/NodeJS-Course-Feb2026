import React from 'react'
import SecondContext from './SecondContext';
import {useTheme} from './ThemeContext';

const MainContext = () => {
    const {theme, toggleTheme} = useTheme();
  return (
    <div>
        <h1 style={{backgroundColor: theme === 'light' ? 'white':'black', color: theme === 'light'?'black':'white'}}>This is main context with theme: {theme}</h1>
        <SecondContext />
        <button onClick={() => toggleTheme() }>Change Theme</button>
    </div>
  )
}

export default MainContext