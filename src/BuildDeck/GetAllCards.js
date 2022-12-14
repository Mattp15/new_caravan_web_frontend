import React, { useContext } from 'react';
import { DeckBuilding } from './DeckBuilding';
import { ContextContainer } from '../App';

const GetAllCards = (props) => {
  const { allCards, setAllCards } = useContext(ContextContainer);
  const handleClick = async () => {
    try {
      const response = await fetch(process.env.REACT_APP_CARAVAN_API + '/cards/getCards', { method: 'GET', header: { 'Content-Type': 'application/json' } });
      if (response.ok) {
        const jsonResponse = await response.json();
        const { foundData } = jsonResponse;
        setAllCards(foundData);
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
          <DeckBuilding />
        </>
      ) : (
        ''
      )}
    </>
  );
};
export default GetAllCards;
