import React, { useState, useEffect, useContext } from 'react';
import CardImage from '../Card/CardImage';
import { ContextContainer } from '../App';

const BottomRow = (props) => {
  const { allCards } = useContext(ContextContainer);

  return (
    <div>
      <h1>bottomrow</h1>
      {/* bottom row {JSON.stringify(allCards)} */}
      <ul>
        {allCards.map((card, index) => {
          const { _id, name, value, suit, set, isModifier, face, back } = card;
          return (
            <li key={_id + index} name={name} value={value} suit={suit} set={set} isModifier={isModifier} face={face} back={back}>
              <img src={`http://localhost:3000/images/${face}`} alt={`${name}of${suit}`} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default BottomRow;
