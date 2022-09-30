import React, { useContext } from 'react';
import { ContextContainer } from '../App';
const TopRow = (props) => {
  const { allCards } = useContext(ContextContainer);
  return <div>top row {JSON.stringify(allCards)}</div>;
};

export default TopRow;
