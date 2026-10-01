import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Hola mundo desde React!
        </h1>
        <a
          className="App-link"
          href="https://goatedwear.es"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn 
        </a>
      </header>
    </div>
  );
}

export default App;
