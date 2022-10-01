import React from 'react';

export const CardImage = ({ src, name, suit }) => {
  return <img src={src} alt={`${name} of ${suit}s`} />;
};
