import logo from '../logo.svg';
import "./AppClassComponent.css";
import React from 'react';

class AppClassComponent extends React.Component {

  constructor(props) {
    super();
    console.log(`
      constructor Class Component:
        Description :: This is the 1st method which will call once while creating the component.
        Here we are Initialize default values of variables or getting parent props`
    )
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
    console.log(`
      Render Class Component:
        Description :: This is the 2nd method which will call once while constructor done.
        Here we are Preprating HTML Template using Initialed variables value.`
    )

    // going infinate loop. We should not set state vaue into render() method.
    // this.setState({ count : this.state.count+3})

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

  componentDidMount() {
    console.log(`
      ComponentDidMount Class Component:
        Description :: This is the 3rd method which will call to FETCH data and set in local variable or State.
        Component will not Reload on Set/Update values of local Variables | PROPS | STATE.
        1. Pre Fetch API Calls for initial value set.
    `)
  }
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(`
      ComponentDidUpdate Class Component:
        Description :: This method will call everytime before render() method. 
        Here we should update Component STATE conditional based else it will go in INFINATE Loop.
    `)
  }
  
  shouldComponentUpdate() {
    console.log(`
      ShouldComponentUpdate Class Component:
        Description :: This method is used for CONTROL componentDidUpdate() using condition and based on condition we return True/False.
    `)
    return true;
  }
  
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate Class Component")
    return null;
  }
  
  componentWillUnmount() {
    console.log(`
      ComponentWillUnmount Class Component:
        Description :: This method will called on component removed from DOM.
        Example -> If we Show/Hide component then on Hide component this method will call not on Show component.
    
    `)
  }
}

export default AppClassComponent;
