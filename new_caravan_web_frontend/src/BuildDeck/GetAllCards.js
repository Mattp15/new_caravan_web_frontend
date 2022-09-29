import React, { useState, useEffect } from 'react';
import Test from './Test';
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

  return <Test value={allCards} />;
};
export default GetAllCards;
