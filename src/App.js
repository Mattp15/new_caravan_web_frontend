// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Landing from './views/Landing';
import GetAllCards from './BuildDeck/GetAllCards';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='login' element={<div>login form</div>} />
        <Route path='build' element={<GetAllCards />} />
      </Routes>
    </Router>
  );
}

export default App;

/* <div className='App'>
      <header className='App-header'>
        <GetAllCards />
      </header>
    </div> */