const getLocalStorage = () => {
  const localData = localStorage.getItem('SelectedPlayersID');
  if (localData) {
    const playersID = JSON.parse(localData);
    return playersID;
  }
  return [];
};

const addLocalStorage = (id) => {
  const oldData = getLocalStorage();
  const newSetPlayersID = [...oldData, id];
  localStorage.setItem('SelectedPlayersID', JSON.stringify(newSetPlayersID));
};

const removeLocalStorage = (id) => {
  const oldData = getLocalStorage();
  const remainingPlayerID = oldData.filter((dataID) => dataID !== id);
  localStorage.setItem('SelectedPlayersID', JSON.stringify(remainingPlayerID));
};

export { getLocalStorage, addLocalStorage, removeLocalStorage };
