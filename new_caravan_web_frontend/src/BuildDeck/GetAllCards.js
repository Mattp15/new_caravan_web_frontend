import React, { useState, useEffect } from 'react';
import TopRow from './TopRow';
import BottomRow from './BottomRow';
const GetAllCards = (props) => {
  const [allCards, setAllCards] = useState();
  useEffect(() => {
    fetch('http://localhost:3000/cards/getCards', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setAllCards(data.foundData);
        }, 300);
      });
  }, []);

  return (
    <>
      <TopRow value={allCards} />
      <BottomRow allCards={allCards} />
    </>
  );
};
export default GetAllCards;
