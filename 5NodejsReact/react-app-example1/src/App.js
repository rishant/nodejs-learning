import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App(props) {
  
  // Component State management using useState Hook. for each of the different variable will use as different useState Hook. 
  const [data, setData] = useState("Hello");
  const [count, setCount] = useState(0);
  
  function updateDataOnClick1(){
    // Note: Read data by element Name. Name can and can't be unique so there is function which will gett as array of elements by Name.
      // let inputbox = document.getElementsByName("input_name");
      // setData(inputbox[0].value);
      // setCount(count+1);

    // Note: Read data by element Id. Id should be always unique.
    let inputbox = document.getElementById("input_name_1");
    setData(inputbox.value);
    setCount(count+1);
  }
  console.log("-----------updateDataOnClick function component----------");
  
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 style={{ color: "red" }}>Hello Style!</h1>
          <p>Function state data: {data}</p>
          <p>Function update Count: {count}</p>
          <span>
            <input type="text" id='input_name_1' name="input_name_1" style={{ margin: "5px"}}/>
            <button onClick={() => {updateDataOnClick1()}}>Click me !</button>
          </span>
        </header>
      </div>
  );
}

export default App;
