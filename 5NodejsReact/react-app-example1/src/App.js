import logo from './logo.svg';
import './App.css';

function App(props) {
  
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 style={{ color: "red" }}>Hello Style!</h1>
          <p>Hello World</p>
        </header>
      </div>
  );
}

export default App;
