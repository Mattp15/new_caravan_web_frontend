import React, { useState, useEffect, useContext } from 'react';
import { CardImage } from '../Card/CardImage';
import { ContextContainer } from '../App';

export const DeckBuilding = (props) => {
  const [building, setBuilding] = useState([]);
  const [allUsersCards, setAllUsersCards] = useState([]);
  const { allCards, usersDeck, setUsersDeck } = useContext(ContextContainer);
  useEffect(() => {
    setAllUsersCards(allCards);
  }, []);

  const handleClick = (target) => {
    if (!building.includes(target)) {
      setBuilding((prev) => [...prev, target]);
    }
    console.log(building, 'bottombuilding');
  };
  const handleClickTop = (target) => {
    console.log(building, 'topRow');
    setBuilding((prev) => prev.filter((fil) => fil._id !== target._id));
  };
  return (
    <div>
      <h1>toprow</h1>
      {/* bottom row {JSON.stringify(allCards)} */}
      <ul className='top-row slick-slider'>
        {building
          ? building.map((card, index) => {
              const { _id, name, value, suit, set, ismodifier, face, back } = card;
              return (
                <li key={_id + index} ismodifier={ismodifier}>
                  <CardImage onClick={handleClickTop} name={name} value={value} suit={suit} set={set} face={face} back={back} src={`${process.env.REACT_APP_CARAVAN_API}/images/${face}`} alt={`${name}of${suit}`} card={card} row='top' />
                </li>
              );
            })
          : ''}
      </ul>
      <h1>bottomrow</h1>
      <ul className='bottom-row'>
        {allUsersCards
          ? allUsersCards.map((card, index) => {
              const { _id, name, value, suit, set, ismodifier, face, back } = card;
              return (
                <li key={_id + index} ismodifier={ismodifier}>
                  <CardImage onClick={handleClick} name={name} value={value} suit={suit} set={set} face={face} back={back} src={`${process.env.REACT_APP_CARAVAN_API}/images/${face}`} alt={`${name}of${suit}`} card={card} row='bottom' />
                </li>
              );
            })
          : ''}
      </ul>
    </div>
  );
};
