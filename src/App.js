// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './views/Landing';
import GetAllCards from './BuildDeck/GetAllCards';
import React, { useState, useContext, useEffect } from 'react';
import { Login } from './Login/Login';

export const ContextContainer = React.createContext();

const App = () => {
  const [allCards, setAllCards] = useState();
  const [user, setUser] = useState({
    gamerTag: '',
  });

  const handleClick = async () => {
    try {
      const response = await fetch(process.env.REACT_APP_CARAVAN_API + '/cards/getCards', { method: 'GET', header: { 'Content-Type': 'application/json' } });
      console.log(response);
      if (response.ok) {
        console.log('here');
        const jsonResponse = await response.json();
        const { foundData } = jsonResponse;
        setTimeout(() => {
          setAllCards(foundData);
          console.log(foundData);
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <ContextContainer.Provider value={{ user, setUser, allCards, setAllCards }}>
      <Router>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/user/login' element={<Login />} />
          <Route path='build' element={<GetAllCards />} />
        </Routes>
      </Router>
    </ContextContainer.Provider>
  );
};

export default App;
/* <div className='App'>
      <header className='App-header'>
        <GetAllCards />
      </header>
    </div> */
