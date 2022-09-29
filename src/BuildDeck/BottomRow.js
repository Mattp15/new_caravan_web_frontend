import React, { useState, useEffect, useContext } from 'react';
import CardImage from '../Card/CardImage';
import { CardContext } from './GetAllCards';

const BottomRow = (props) => {
  return <div>bottom row {JSON.stringify(props)}</div>;
};
export default BottomRow;
