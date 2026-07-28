import logo from './logo.svg';
import './App.css';
import GetData from './components/GetData';
import AccessData from './components/AccessData';
import Register from './components/Register';
import ProfileData from './components/profilestore/profileData';
import { Provider } from 'react-redux';
import { profileStore } from './components/profilestore/profilestore';
import Count from './components/countstore/Count';
import { countStore } from './components/countstore/countstore';

function App() {
  return (
    <div className="App">
      {/* <GetData /> */}
      {/* <AccessData /> */}
      {/* <Register /> */}
      {/* <ProfileData /> */}
      <Provider store={countStore}>
        {/* <ProfileData /> */}
        <Count />
      </Provider>
    </div>
  );
}

export default App;
