import React from 'react';

export const CardImage = ({ src, name, suit, card, onClick, row }) => {
  return (
    <>
      <img
        className={`card-${row}`}
        src={src}
        alt={`${name} of ${suit}`}
        onClick={() => {
          onClick(card);
        }}
      />
    </>
  );
};

const style = {
  selected: {
    positon: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
};
