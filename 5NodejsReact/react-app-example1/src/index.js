import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './functionalcomponents/App';
import AppClassComponent from './classcomponents/AppClassComponent';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <table>
      <tr>
        <th>Functional Component</th>
        <th>Class Component</th>
      </tr>
      <tr>
        <td><App /></td>
        <td><AppClassComponent /></td>    
      </tr>
    </table>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
