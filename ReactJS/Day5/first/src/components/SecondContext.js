import React from 'react'
import { useTheme } from './ThemeContext';

const SecondContext = () => {
    const {theme} = useTheme();
  return (
    <div><h1 style={{backgroundColor: theme === 'light' ? 'white' : 'black', color: theme === 'light' ? 'black' : 'white'}}>This is second context</h1></div>
  )
}

export default SecondContext