// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Landing, Login} from './views';
import GetAllCards from './BuildDeck/GetAllCards';
import React, {useState, useEffect} from 'react';
// import UserContext from './contexts/UserContext';



// function App() {
//   const [user, userSet] = useState('test');
//   // const {useSet} = useContext(UserContext);
//   return (
//     <Router>
//       <UserContext.Provider value={{user, userSet}}>
//         <Routes>
//           <Route path='/' element={<Landing />} />
//           <Route path='login' element={<Login />} />
//           <Route path='build' element={<GetAllCards />} />
//         </Routes>
//       </UserContext.Provider>
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Landing from './views/Landing';
// import GetAllCards from './BuildDeck/GetAllCards';
// import React, { useState, useContext, useEffect } from 'react';
// import { Login } from './Login/Login';

export const ContextContainer = React.createContext();
export const UserContext = React.createContext();

const App = () => {
  const [allCards, setAllCards] = useState();
  const [user, setUser] = useState();
  
  const handleClick = async () => {
    try {
      const response = await fetch('http://localhost:3000/cards/getCards', { method: 'GET', header: { 'Content-Type': 'application/json' } });
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
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
      </Routes>
      <UserContext.Provider value={{ user, setUser }}>
      <Routes>
        <Route path='login' element={<Login />} />
      </Routes>
      </UserContext.Provider>
      <ContextContainer.Provider value={{ allCards, setAllCards }}>
      <Routes>
        <Route path='build' element={<GetAllCards />} />
      </Routes>
      </ContextContainer.Provider>
      <Routes>
        <Route path='*' element={<div><h2>ERROR 404</h2><p>page not found</p></div>} />
      </Routes>  
    </Router>
  );
};

export default App;
/* <div className='App'>
      <header className='App-header'>
        <GetAllCards />
      </header>
    </div> */
