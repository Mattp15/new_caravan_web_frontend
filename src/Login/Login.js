import React, { useState, useContext } from 'react';
import { ContextContainer } from '../App';

export const Login = () => {
  const { user, setUser } = useContext(ContextContainer);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/user/login', { method: 'GET', header: { 'Content-Type': 'application/json' } });
      console.log(response);
      if (response.ok) {
        console.log('here');
        const jsonResponse = await response.json();
        const { gamertag, password } = await jsonResponse;
        console.log(gamertag, password, 'test');
        setUser({
          gamerTag: gamertag,
          passWord: password,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='submit' value='Submit' />
      </form>
    </>
  );
};
