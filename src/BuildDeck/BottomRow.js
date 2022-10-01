import React, { useState, useEffect, useContext } from 'react';
import { CardImage } from '../Card/CardImage';
import { ContextContainer } from '../App';

const BottomRow = (props) => {
  const { allCards } = useContext(ContextContainer);

  return (
    <div>
      <h1>bottomrow</h1>
      {/* bottom row {JSON.stringify(allCards)} */}
      <ul className='bottom-row'>
        {allCards.map((card, index) => {
          const { _id, name, value, suit, set, ismodifier, face, back } = card;
          return (
            <li key={_id + index} name={name} value={value} suit={suit} set={set} ismodifier={ismodifier} face={face} back={back}>
              <img src={`${process.env.REACT_APP_CARAVAN_API}/images/${face}`} alt={`${name}of${suit}`} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default BottomRow;
