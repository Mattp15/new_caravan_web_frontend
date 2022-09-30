import React, { useState, useEffect, useContext } from 'react';
import TopRow from './TopRow';
import BottomRow from './BottomRow';

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
        console.log(jsonResponse);
        setAllCards(jsonResponse.foundData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        GET CARDS
      </button>
      {allCards ? (
        <>
          <TopRow allCards={allCards} />
          <BottomRow allCards={allCards} />{' '}
        </>
      ) : (
        ''
      )}
    </>
  );
};
export default GetAllCards;
