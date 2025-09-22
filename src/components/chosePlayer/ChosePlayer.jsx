import React, { Suspense, useState } from 'react';
import AvailablePlayers from './AvailablePlayers';
import Selected from './Selected';
import Loader from '../Loader/Loader';

const dataPromises = fetch('./players.json').then((res) => res.json());

const ChosePlayer = ({ availableCoin, setAvailableCoin }) => {
  const [availablePage, setAvailablePage] = useState('available');
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  return (
    <div className="max-w-[1420px] mx-auto px-2 mt-[88px]">
      <div className="flex flex-col-reverse md:flex-row gap-2 justify-between items-center mb-8">
        <h2 className="text-xl sm:text-4xl font-bold">
          {availablePage === 'available'
            ? 'Available Players'
            : `Selected Player (${selectedPlayers.length}/6)`}
        </h2>
        <div className="border border-gray-300 rounded-2xl overflow-hidden flex">
          <button
            onClick={() => setAvailablePage('available')}
            className={`py-3 px-4 text-lg font-medium cursor-pointer ${
              availablePage === 'available' && 'bg-[#E7FE29]'
            }`}
          >
            Available
          </button>
          <button
            onClick={() => setAvailablePage('selected')}
            className={`py-3 px-4 text-lg font-medium cursor-pointer ${
              availablePage === 'selected' && 'bg-[#E7FE29]'
            }`}
          >
            Selected({selectedPlayers.length})
          </button>
        </div>
      </div>
      {availablePage === 'available' && (
        <Suspense fallback={<Loader></Loader>}>
          <AvailablePlayers
            dataPromises={dataPromises}
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
            availableCoin={availableCoin}
            setAvailableCoin={setAvailableCoin}
          ></AvailablePlayers>
        </Suspense>
      )}
      {availablePage === 'selected' && (
        <Selected
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
          setAvailablePage={setAvailablePage}
          availableCoin={availableCoin}
          setAvailableCoin={setAvailableCoin}
        ></Selected>
      )}
    </div>
  );
};

export default ChosePlayer;
