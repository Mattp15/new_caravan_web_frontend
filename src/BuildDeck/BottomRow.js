import React, { useState, useEffect, useContext } from 'react';
import { CardImage } from '../Card/CardImage';
import { ContextContainer } from '../App';

const BottomRow = (props) => {
  const { allCards, usersDeck, setUsersDeck } = useContext(ContextContainer);
  const handleClick = (target) => {
    setUsersDeck((prev) => [...prev, target]);
    console.log('bottomRow');
  };
  return (
    <div>
      <h1>bottomrow</h1>
      {/* bottom row {JSON.stringify(allCards)} */}
      <ul className='bottom-row'>
        {allCards.map((card, index) => {
          const { _id, name, value, suit, set, ismodifier, face, back } = card;
          return (
            <li key={_id + index} ismodifier={ismodifier}>
              <CardImage onClick={handleClick} name={name} value={value} suit={suit} set={set} face={face} back={back} src={`${process.env.REACT_APP_CARAVAN_API}/images/${face}`} alt={`${name}of${suit}`} card={card} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default BottomRow;
