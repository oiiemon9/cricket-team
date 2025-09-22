import { useState } from 'react';
import './App.css';
import ChosePlayer from './components/chosePlayer/ChosePlayer';
import NavBar from './components/navBar/NavBar';
import HeroSection from './components/heroSection/HeroSection';

function App() {
  const [availableCoin, setAvailableCoin] = useState(100000000);
  return (
    <>
      <NavBar availableCoin={availableCoin}></NavBar>
      <HeroSection></HeroSection>
      <ChosePlayer
        availableCoin={availableCoin}
        setAvailableCoin={setAvailableCoin}
      ></ChosePlayer>
    </>
  );
}

export default App;
