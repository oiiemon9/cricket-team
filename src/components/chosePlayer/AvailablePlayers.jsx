import React, { use } from 'react';
import Player from './Player';

const AvailablePlayers = ({
  dataPromises,
  setSelectedPlayers,
  selectedPlayers,
  availableCoin,
  setAvailableCoin,
}) => {
  const players = use(dataPromises);
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
