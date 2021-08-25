import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import App from './App';
import Todo from './atom/Todo/Todo';
import Card from './molecul/Card/Card';

ReactDOM.render(
  <React.StrictMode>

    {/* true or false */}
    {/* <App isLogged={false}/> */}
    {/* <Todo/> */}
    <Card/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
