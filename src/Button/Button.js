import React from 'react';

const Button = (props) => {
  return <button type={props.type} value={props.value} onClick={props.onClick} />;
};
