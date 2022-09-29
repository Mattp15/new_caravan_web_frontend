import React, { useState, useEffect, useContext } from 'react';
import TopRow from './TopRow';
import BottomRow from './BottomRow';

export const CardContext = React.createContext();

const GetAllCards = (props) => {
  const [allCards, setAllCards] = useState();
  useEffect(() => {
    fetch('http://localhost:3000/cards/getCards', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => {
        setAllCards(data.foundData);
      });
  }, []);

  return (
    <CardContext.Provider value={allCards}>
      <>
        <TopRow />
        <BottomRow />
      </>
    </CardContext.Provider>
  );
};
export default GetAllCards;
