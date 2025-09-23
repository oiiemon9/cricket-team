import { useEffect, useState } from 'react';
import './App.css';
import ChosePlayer from './components/chosePlayer/ChosePlayer';
import NavBar from './components/navBar/NavBar';
import HeroSection from './components/heroSection/HeroSection';
import Subscribe from './components/Subscribe/Subscribe';
import Footer from './components/Footer/Footer';
import { getCoinLocalStorage } from './utils/coinLocalStorage/CoinLocalStorage';

function App() {
  const [availableCoin, setAvailableCoin] = useState();
  useEffect(() => {
    const available = getCoinLocalStorage();
    setAvailableCoin(available);
  }, []);
  return (
    <>
      <NavBar availableCoin={availableCoin}></NavBar>
      <HeroSection></HeroSection>
      <ChosePlayer
        availableCoin={availableCoin}
        setAvailableCoin={setAvailableCoin}
      ></ChosePlayer>
      <Subscribe></Subscribe>
      <Footer></Footer>
    </>
  );
}

export default App;
