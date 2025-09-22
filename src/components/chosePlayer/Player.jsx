import React, { useEffect, useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { IoFlagSharp } from 'react-icons/io5';
import { ToastContainer, toast } from 'react-toastify';

const player = ({
  player,
  selectedPlayers,
  setSelectedPlayers,
  availableCoin,
  setAvailableCoin,
}) => {
  const {
    name,
    image,
    country,
    role,
    batting_style,
    bowling_style,
    price,
    id,
  } = player;
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    const isSelected = selectedPlayers.some((sePl) => sePl.id === id);
    setSelected(isSelected);
  }, [id]);

  const handelSelected = (p) => {
    if (selectedPlayers.length >= 6) {
      alert('Selected player full');
      return;
    }

    const playerPice = parseInt(p.price);
    const remainingCoin = availableCoin - playerPice;
    if (remainingCoin < 0) {
      toast.error('You don’t have enough coins.');
      return;
    }
    setAvailableCoin(remainingCoin);

    setSelected(true);
    const newSelectedPlayers = [...selectedPlayers, p];
    setSelectedPlayers(newSelectedPlayers);
  };
  return (
    <div>
      <ToastContainer position="bottom-right" />
      <div className="border border-gray-300 rounded-md p-5 h-full">
        <div className="">
          <img
            className="w-full h-72 object-cover object-top rounded-md  bg-gray-200"
            src={image}
            alt=""
          />
        </div>
        <div className="mt-6 space-y-3">
          <div className="flex items-center gap-2">
            <p>
              <FaUserAlt className="text-xl " />
            </p>
            <h4 className="text-xl font-bold">{name}</h4>
          </div>
          <div className="flex justify-between items-center">
            <p className="flex items-center gap-2 text-gray-500">
              <IoFlagSharp />
              {country}
            </p>
            <div>
              <div className="border px-4 py-2 rounded border-gray-300 bg-gray-100 w-fit">
                <p className="font-medium text-gray-500 ">{role}</p>
              </div>
            </div>
          </div>
          <div>
            <hr className="text-gray-300" />
          </div>
          <div>
            <h4 className="font-bold">Rating</h4>
          </div>
          <div className="flex justify-between items-center">
            <h4 className="font-bold">{batting_style}</h4>
            <h4 className="font-bold text-gray-500">{bowling_style}</h4>
          </div>
          <div className="flex justify-between items-center">
            <h4 className="font-bold">Price: ${price}</h4>
            <button
              onClick={() => handelSelected(player)}
              className="btn btn-primary"
              disabled={selected}
            >
              {selected ? 'Selected' : 'Choose Player'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default player;

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
