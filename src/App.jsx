import { useState } from 'react';
import './App.css';
import ChosePlayer from './components/chosePlayer/ChosePlayer';
import NavBar from './components/navBar/NavBar';

function App() {
  const [availableCoin, setAvailableCoin] = useState(100000000);
  return (
    <>
      <NavBar availableCoin={availableCoin}></NavBar>
      <ChosePlayer
        availableCoin={availableCoin}
        setAvailableCoin={setAvailableCoin}
      ></ChosePlayer>
    </>
  );
}

export default App;
