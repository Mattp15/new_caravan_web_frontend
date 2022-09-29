import React, { useEffect } from 'react';

const TopRow = (props) => {
  useEffect(() => {
    console.log(props.allCards);
  }, [props.allCards]);
};

export default TopRow;
