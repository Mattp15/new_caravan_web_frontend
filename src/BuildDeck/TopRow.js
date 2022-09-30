import React, { useContext } from 'react';
import { CardContext } from './GetAllCards';
const TopRow = (props) => {
  const allCards = useContext(CardContext);
  return <div>top row {JSON.stringify(allCards)}</div>;
};

export default TopRow;
