import React from 'react';

export const CardImage = ({ src, name, suit, card, onClick }) => {
  return (
    <>
      <img
        src={src}
        alt={`${name} of ${suit}`}
        onClick={() => {
          onClick();
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
