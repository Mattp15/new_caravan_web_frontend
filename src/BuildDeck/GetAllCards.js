import React, { useContext } from 'react';
import TopRow from './TopRow';
import BottomRow from './BottomRow';
import { ContextContainer } from '../App';

const GetAllCards = (props) => {
  const { allCards, setAllCards } = useContext(ContextContainer);
  const handleClick = async () => {
    try {
      const response = await fetch('http://localhost:3000/cards/getCards', { method: 'GET', header: { 'Content-Type': 'application/json' } });
      console.log(response);
      if (response.ok) {
        console.log('here');
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
          <TopRow />
          <BottomRow />{' '}
        </>
      ) : (
        ''
      )}
    </>
  );
};
export default GetAllCards;
