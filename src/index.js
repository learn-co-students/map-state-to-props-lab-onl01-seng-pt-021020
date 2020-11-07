import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { createStore } from 'redux';
import { Provider } from 'react-redux'; /* code change */


import manageUsers from './reducers/manageUsers'

const store = createStore(manageUsers);


// add imports and code


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);

//In src/index.js, use the createStore method from redux, passing in the provided reducer, manageUsers, to create a store.
//Use Provider from react-redux to wrap <App />, passing store as a prop to the Provider.
//This will give your components access to the store.
