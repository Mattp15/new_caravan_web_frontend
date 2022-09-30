import React, { useState, useEffect, useContext } from 'react';
import TopRow from './TopRow';
import BottomRow from './BottomRow';
import { Login } from '../Login/Login';

export const CardContext = React.createContext();

const GetAllCards = (props) => {
  const [allCards, setAllCards] = useState();

  const handleClick = async () => {
    try {
      const response = await fetch('http://localhost:3000/cards/getCards', { method: 'GET', header: { 'Content-Type': 'application/json' } });
      console.log(response);
      if (response.ok) {
        console.log('here');
        const jsonResponse = await response.json();
        const { foundData } = jsonResponse;
        setTimeout(() => {
          setAllCards(foundData);
          console.log(foundData);
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* <CardContext.Provider value={allCards}>
        <button
          onClick={() => {
            handleClick();
          }}
        >
          GET CARDS
        </button>
        {allCards ? (
          <>
            <TopRow />
            <BottomRow />{' '}
          </>
        ) : (
          ''
        )}
        <Login />
      </CardContext.Provider> */}
    </>
  );
};
export default GetAllCards;
