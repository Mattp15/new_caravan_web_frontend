import React, { useState, useEffect, useContext } from 'react';
import CardImage from '../Card/CardImage';
const BottomRow = (props) => {
  const [allCards, setAllCards] = useState([]);
  useEffect(() => {}, [props.allCards]);

  return (
    <>
      <CardImage oneCard={allCards} />
    </>
  );
};
export default BottomRow;
