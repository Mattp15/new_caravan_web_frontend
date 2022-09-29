import React, { useState, useEffect, useContext } from 'react';
import TopRow from './TopRow';
import BottomRow from './BottomRow';

export const CardContext = React.createContext();

const GetAllCards = (props) => {
  const [allCards, setAllCards] = useState();
  useEffect(() => {
    fetch(process.env.REACT_APP_CARAVAN_API + '/cards/getManyByPattern/set/Standard', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => {
        setAllCards(data.foundData);
      });
  },[]);

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
