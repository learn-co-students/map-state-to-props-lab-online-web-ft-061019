import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { Provider } from 'react-redux'; /* code change */
import { createStore } from 'redux'; /* code change */ 
import manageUsers from './reducers/manageUsers'


/*
add imports and code
1. use the createStore from redux, passing in the provided reducer, manageUsers, to create a store
*/
const store = createStore(
  manageUsers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

/*
Use Provider from react-redux to wrap <App />, passing store as a prop to the Provider. 
This will give your components access to the store.
*/
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, /* code change */
  document.getElementById('root')
);


