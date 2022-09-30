// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Landing, Login} from './views';
import GetAllCards from './BuildDeck/GetAllCards';
import {useState, useContext} from 'react';
import UserContext from './contexts/UserContext';



function App() {
  const [user, userSet] = useState('test');
  // const {useSet} = useContext(UserContext);
  return (
    <Router>
      <UserContext.Provider value={{user, userSet}}>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='login' element={<Login />} />
          <Route path='build' element={<GetAllCards />} />
          <Route path='*' element={<div><h2>ERROR 404</h2><p>page not found</p></div>} />
        </Routes>
      </UserContext.Provider>
    </Router>
  );
}

export default App;

/* <div className='App'>
      <header className='App-header'>
        <GetAllCards />
      </header>
    </div> */