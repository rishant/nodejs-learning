import logo from './logo.svg';
import './App.css';
import React from 'react';

class AppClassComponent extends React.Component {

  constructor(props) {
    super();
    this.state = {
      data: "Hello",
      count: 0
    }
  }

  updateDataOnClick2(){
    // Note: Read data by element Name. Name can and can't be unique so there is function which will gett as array of elements by Name.
      // let inputbox = document.getElementsByName("input_name");
      // this.setState({data: inputbox[0].value, count: this.state.count+1});

    // Note: Read data by element Id. Id should be always unique.
    let inputbox = document.getElementById("input_name_2");
    this.setState({data: inputbox.value, count: this.state.count+1});
    return;
  }

  render() {
    console.log("-----------updateDataOnClick Class Component----------");
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 style={{ color: "red" }}>Hello Style!</h1>
          <p>Class state data: {this.state.data}</p>
          <p>Class Update Count: {this.state.count}</p>
          <span>
            <input type="text" id='input_name_2' name="input_name_2" style={{ margin: "5px"}}/>
            <button onClick={() => {this.updateDataOnClick2()}}>Click me !</button>
          </span>
        </header>
      </div>
    );
  }
}

export default AppClassComponent;
