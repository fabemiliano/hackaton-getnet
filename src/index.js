import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import storage, { promoSettings } from './services/seeder';

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

if (!JSON.parse(localStorage.getItem('customerPurchases'))) {
  console.log(storage)
  localStorage.setItem('customerPurchases', JSON.stringify(storage));
}

if (!JSON.parse(localStorage.getItem('promoSettings'))) {
  localStorage.setItem('promoSettings', JSON.stringify(promoSettings));
}

