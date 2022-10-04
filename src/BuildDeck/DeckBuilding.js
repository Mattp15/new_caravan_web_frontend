import React, { useState, useEffect, useContext } from 'react';
import { CardImage } from '../Card/CardImage';
import { ContextContainer } from '../App';

const comparingFunction = (a, b) => {
  let comparison = 0;

  return a._id < b._id ? (comparison -= 1) : (comparison += 1);
};

export const DeckBuilding = (props) => {
  const [building, setBuilding] = useState([]);
  const [allUsersCards, setAllUsersCards] = useState([]);
  const [deckChunk, setDeckChunk] = useState([]);
  const { allCards, usersDeck, setUsersDeck } = useContext(ContextContainer);
  useEffect(() => {
    setAllUsersCards(allCards);
  }, []);

  // useEffect(() => {
  //   let goThrough = true;
  //   if (goThrough) {
  //     let sorted = [...building];
  //     sorted.sort(comparingFunction);
  //     setBuilding(sorted);
  //     console.log(building);
  //   }
  //   return () => {
  //     goThrough = false;
  //     console.log(goThrough);
  //   };
  // });

  const handleClickBottom = (target) => {
    if (!building.includes(target)) {
      setBuilding((prev) => [...prev, target]);
    }
    // const sorted = building;
    // console.log(sorted, 'presourt');
  };
  const handleClickTop = (target) => {
    setBuilding((prev) => prev.filter((fil) => fil._id !== target._id));
  };
  const handleSave = () => {
    if (building.length >= 32) {
      setUsersDeck(building);
      //redirect?
    }
  };
  const indexingDeckChunk = () => {};
  return (
    <div>
      <h1>toprow</h1>
      {/* bottom row {JSON.stringify(allCards)} */}
      <ul className='top-row'>
        {building
          ? building.map((card, index) => {
              const { _id, name, value, suit, set, ismodifier, face } = card;
              return (
                <li key={_id + index} ismodifier={ismodifier}>
                  <CardImage onClick={handleClickTop} name={name} value={value} suit={suit} set={set} src={`${process.env.REACT_APP_CARAVAN_API}/images/${face}`} alt={`${name}of${suit}`} card={card} row='top' />
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
              const cardSide = building.includes(card) ? back + '.png' : face;
              return (
                <li key={_id + index} ismodifier={ismodifier}>
                  <CardImage onClick={handleClickBottom} name={name} value={value} suit={suit} set={set} src={`${process.env.REACT_APP_CARAVAN_API}/images/${cardSide}`} alt={`${name}of${suit}`} card={card} row='bottom' />
                </li>
              );
            })
          : ''}
      </ul>
      <button onClick={handleSave}>SaveDeck</button>
    </div>
  );
};
