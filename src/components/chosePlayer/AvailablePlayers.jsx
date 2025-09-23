import React, { use, useEffect } from 'react';
import Player from './Player';
import { getLocalStorage } from '../../utils/playerLocalStorage/PlayerLocalStorage';

const AvailablePlayers = ({
  dataPromises,
  setSelectedPlayers,
  selectedPlayers,
  availableCoin,
  setAvailableCoin,
}) => {
  const players = use(dataPromises);

  useEffect(() => {
    const localDataID = getLocalStorage();
    const localPlayers = [];
    for (const id of localDataID) {
      const localSelectedPlayers = players.find((player) => player.id === id);
      localPlayers.push(localSelectedPlayers);
    }
    setSelectedPlayers(localPlayers);
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {players.map((player) => (
          <Player
            key={player.id}
            player={player}
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
            availableCoin={availableCoin}
            setAvailableCoin={setAvailableCoin}
          ></Player>
        ))}
      </div>
    </div>
  );
};

export default AvailablePlayers;
