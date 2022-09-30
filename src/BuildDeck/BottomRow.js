import React, { useState, useEffect, useContext } from 'react';
import CardImage from '../Card/CardImage';
import { CardContext } from './GetAllCards';

const BottomRow = (props) => {
  const allCards = useContext(CardContext);

  return (
    <div>
      bottom row {JSON.stringify(allCards)}
      {/* <CardImage value={allCards} /> */}
    </div>
  );
};
export default BottomRow;
