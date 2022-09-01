import logo from './logo.svg';
import './App.css';

function App() {
  // Behind the seens.
  // React.createElement('div', { className: "App" }, "JSX in react", React.createElement('h2', { className: "App-header"}, "The Indian Dev"))
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
