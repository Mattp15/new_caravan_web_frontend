import logo from './logo.svg';
import './App.css';
import GetAllCards from './BuildDeck/GetAllCards';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <GetAllCards />
      </header>
    </div>
  );
}

export default App;
