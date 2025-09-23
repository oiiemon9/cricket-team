const getCoinLocalStorage = () => {
  const getCoin = localStorage.getItem('availableCoin');
  if (getCoin) {
    const coin = JSON.parse(getCoin);
    return parseInt(coin);
  }
  return 100000000;
};

const addCoinLocalStorage = (newCoin) => {
  localStorage.setItem('availableCoin', newCoin);
};

export { getCoinLocalStorage, addCoinLocalStorage };
