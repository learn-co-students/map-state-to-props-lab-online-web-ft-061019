import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { createStore } from 'redux';
import { Provider } from 'react-redux'

import manageUsers from './reducers/manageUsers'


// add imports and code
const store = createStore(
  manageUsers
)

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  
  // add imports and code
  document.getElementById('root')
);
