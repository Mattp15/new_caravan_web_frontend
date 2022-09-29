import React, { useState, useEffect } from 'react';

const CardImage = (props) => {
  const [card, setCard] = useState('');
  useEffect(() => {
    setCard(props.oneCard);
    console.log(card);
    console.log(props.oneCard);
  }, [props.oneCard]);
};
export default CardImage;
