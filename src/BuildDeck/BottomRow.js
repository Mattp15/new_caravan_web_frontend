import React, { useState, useEffect, useContext } from 'react';
import CardImage from '../Card/CardImage';
import { ContextContainer } from '../App';

const BottomRow = (props) => {
  const { allCards } = useContext(ContextContainer);

  return (
    <div>
      bottom row {JSON.stringify(allCards)}
      {/* <CardImage value={allCards} /> */}
    </div>
  );
};
export default BottomRow;
