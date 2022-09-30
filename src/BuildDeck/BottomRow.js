import React, { useState, useEffect, useContext } from 'react';
import CardImage from '../Card/CardImage';
import { CardContext } from './GetAllCards';

const BottomRow = (props) => {
  useEffect(() => {
    console.log(props.allCards);
  }, [props.allCards]);
  return (
    <div>
      bottom row {JSON.stringify(props)}
      <CardImage value={props.allCards} />
    </div>
  );
};
export default BottomRow;
