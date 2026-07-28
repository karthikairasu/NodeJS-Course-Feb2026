import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Property from './components/Contact';
import DisplayUsers from './components/DisplayUsers';
import InsertUser from './components/InsertUser';
import GetUsers from './components/GetUsers';
import ThemeProvider from './components/ThemeContext';
import MainContext from './components/MainContext';
import RefHook from './components/RefHook';
import Main from './components/UseReducer/Main';
import GetUser from './components/Day6/GetUsers';
import Storage from './components/Day8/Storage';
import {Provider} from 'react-redux';
import { CakeStore } from './components/Day8/CakeState/CakeStore';
import CakeComponent from './components/Day8/CakeState/CakeComponent';

function App() {
  const [users, setUsers] = useState("karthi");
  return (
    <div className="App">
        {/* <Home />
        <About /> */}
        {/* <Property name={users} age="31" city="Chennai"/> */}
        {/* <DisplayUsers name={users} age="31" city="Chennai"/> */}
        {/* <InsertUser /> */}
        {/* <GetUsers /> */}
        
        {/* <ThemeProvider>
          <MainContext />
        </ThemeProvider> */}

        {/* <RefHook /> */}

        {/* <Main /> */}
        {/* <GetUser /> */}
        {/* <Storage /> */}
        <Provider store={CakeStore}>
          <CakeComponent/>
        </Provider>
    </div>
  );
}

export default App;
