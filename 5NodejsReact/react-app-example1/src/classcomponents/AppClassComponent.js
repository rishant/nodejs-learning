import logo from '../logo.svg';
import "./AppClassComponent.css";
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
    this.setState({data: inputbox.value});
    return;
  }

  updateClickCount2(){
    this.setState({count: this.state.count+1});
  }

  render() {
    console.log("-----------updateDataOnClick Class Component----------");
    return (
      <div className="AppCC">
        <header className="AppCC-header">
          <img src={logo} className="AppCC-logo" alt="logo" />
          <h1 style={{ color: "red" }}>Hello Style!</h1>
          <span>
            <input type="text" id='input_name_2' name="input_name_2" style={{ margin: "5px"}} onChange={() => {this.updateDataOnClick2()}} />
            <p>Class state data: {this.state.data}</p>
          </span>
          <span>
            <button onClick={() => {this.updateClickCount2()}}>Click me !</button>
            <p>Class Update Count: {this.state.count}</p>
          </span>
        </header>
      </div>
    );
  }
}

export default AppClassComponent;
