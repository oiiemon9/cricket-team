import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { IoWarningOutline } from 'react-icons/io5';

const Selected = ({
  selectedPlayers,
  setSelectedPlayers,
  setAvailablePage,
  availableCoin,
  setAvailableCoin,
}) => {
  const players = selectedPlayers;

  const handelRemove = (deletePlayer) => {
    const newPlayer = selectedPlayers.filter(
      (player) => player.id !== deletePlayer.id
    );
    setSelectedPlayers(newPlayer);
    const newCoin = availableCoin + parseInt(deletePlayer.price);
    setAvailableCoin(newCoin);
  };

  return (
    <div className="flex flex-col gap-5">
      {players.map((player) => (
        <div key={player.id}>
          <div className="border border-gray-300 rounded-lg p-5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div>
                <img
                  className="h-20 w-20 object-cover object-top rounded-lg bg-gray-200"
                  src={player.image}
                  alt=""
                />
              </div>
              <div>
                <h4 className="font-medium text-xl">{player.name}</h4>
                <p className="text-gray-500">{player.role}</p>
              </div>
            </div>
            <div>
              <button
                onClick={() => handelRemove(player)}
                className="cursor-pointer text-rose-500 text-4xl"
              >
                <MdDeleteForever />
              </button>
            </div>
          </div>
        </div>
      ))}
      {players.length <= 0 && (
        <div className="flex flex-col justify-center items-center">
          <p className="text-9xl">
            <IoWarningOutline />
          </p>
          <h4 className="text-center text-2xl font-medium text-red-600">
            Please Choose Player
          </h4>
        </div>
      )}
      <div>
        <button
          onClick={() => setAvailablePage('available')}
          className="py-3 px-4 text-lg font-medium cursor-pointer bg-[#E7FE29] rounded-2xl"
        >
          Add More Player
        </button>
      </div>
    </div>
  );
};

export default Selected;

// {
//   "id": 7,
//   "name": "Ben Stokes",
//   "country": "England",
//   "role": "All-rounder",
//   "batting_style": "Left-hand bat",
//   "bowling_style": "Right-arm fast-medium",
//   "dob": "1991-06-04",
//   "teams": ["England"],
//   "formats": ["Test", "ODI", "T20"],
//   "price": 30000000,
//   "image": "https://resources.ecb.co.uk/player-photos/test/800x800/1154.png"
// },
