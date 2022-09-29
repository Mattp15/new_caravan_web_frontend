import React, { useState, useEffect, useContext } from 'react';
import CardImage from '../Card/CardImage';
import { CardContext } from './GetAllCards';
const BottomRow = (props) => {
  const [allCards, setAllCards] = useState([]);
  useEffect(() => {
    setAllCards(() => props.allCards);
    console.log(allCards, 'botstate');
  }, [props.allCards]);

  return <CardContext.Consumer>{(value) => <div> {value}</div>}</CardContext.Consumer>;
};
export default BottomRow;
