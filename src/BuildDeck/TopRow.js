import React, { useContext } from 'react';
import { ContextContainer } from '../App';
import { CardImage } from '../Card/CardImage';
const TopRow = (props) => {
  const { allCards } = useContext(ContextContainer);
  return (
    <div>
      <h1>toprow</h1>
      {/* bottom row {JSON.stringify(allCards)} */}
      <ul className='top-row slick-slider'>
        {allCards.map((card, index) => {
          const { _id, name, value, suit, set, ismodifier, face, back } = card;
          return (
            <li key={_id + index} ismodifier={ismodifier}>
              {' '}
              <CardImage name={name} value={value} suit={suit} set={set} face={face} back={back} src={`${process.env.REACT_APP_CARAVAN_API}/images/${face}`} alt={`${name}of${suit}`} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TopRow;
