import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './functionalcomponents/App';
import StudentFC from './functionalcomponents/Student';
import AppClassComponent from './classcomponents/AppClassComponent';
import StudentCC from './classcomponents/Student';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <table style={{border: '1px solid black'}}>
      <tr>
        <th style={{border: '1px solid black'}}>Functional Component States</th>
        <th style={{border: '1px solid black'}}>Class Component States</th>
        <th style={{border: '1px solid black'}}>Functional Component Props</th>
        <th style={{border: '1px solid black'}}>Class Component Props</th>
      </tr>
      <tr>
        <td style={{border: '1px solid black'}}><App /></td>
        <td style={{border: '1px solid black'}}><AppClassComponent /></td>
        <td style={{border: '1px solid black'}}><StudentFC name="test1" email="test1@react.practices.com"/></td>
        <td style={{border: '1px solid black'}}><StudentCC name="test2" email="test2@react.practices.com"/></td>
      </tr>
    </table>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
