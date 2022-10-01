import React, { useState } from 'react';

export const CardImage = ({ src, name, suit, card, onClick }) => {
  return (
    <div
      onClick={() => {
        onClick(card);
      }}
    >
      <img src={src} alt={`${name} of ${suit}`} />
      <div className='testing' style={style.selected}></div>
    </div>
  );
};

const style = {
  selected: {
    positon: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
};
