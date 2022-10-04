// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Build, Landing, MainSharedLayout, NotFound } from './views';
import { UserProtectedRoute, UserRoutes } from './routes';
import GetAllCards from './BuildDeck/GetAllCards';
import React, { useState, useEffect } from 'react';

// import UserContext from './contexts/UserContext';

export const ContextContainer = React.createContext();
export const UserContext = React.createContext();

const App = () => {
  const [allCards, setAllCards] = useState();
  const [user, setUser] = useState();
  const [usersDeck, setUsersDeck] = useState([]);

  // const handleClick = async () => {
  //   try {
  //     const response = await fetch(process.env.REACT_APP_CARAVAN_API + '/cards/getCards', { method: 'GET', header: { 'Content-Type': 'application/json' } });
  //     console.log(response);
  //     if (response.ok) {
  //       console.log('here');
  //       const jsonResponse = await response.json();
  //       const { foundData } = jsonResponse;
  //       setTimeout(() => {
  //         setAllCards(foundData);
  //         console.log(foundData);
  //       }, 2000);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <Router>
      <UserContext.Provider value={{ user, setUser }}>
        <ContextContainer.Provider value={{ allCards, setAllCards, usersDeck, setUsersDeck }}>
          <Routes>
            <Route path='/' element={<MainSharedLayout />}>
              <Route index element={<Landing />} />
              <Route path='user/*' element={<UserRoutes />} />
              <Route
                path='build'
                element={
                  <UserProtectedRoute user={user}>
                    <Build />
                  </UserProtectedRoute>
                }
              />
              <Route path='buildold' element={<GetAllCards />} />
              <Route path='*' element={<NotFound />} />
            </Route>
          </Routes>
        </ContextContainer.Provider>
      </UserContext.Provider>
    </Router>
  );
};

export default App;
/* <div className='App'>
      <header className='App-header'>
        <GetAllCards />
      </header>
    </div> */
