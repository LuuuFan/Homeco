//materialize css doc: http://materializecss.com/getting-started.html
// import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
// import {BrowserRouter} from 'react-router-dom';
import Root from './components/root';
import configureStore from './store/configureStore';

document.addEventListener('DOMContentLoaded', () => {
  // let preloadedState = undefined;
  // if (window.currentUser) {
  //   preloadedState = {
  //     session: {
  //       currentUser: window.currentUser
  //     }
  //   };
  // }
  // const store = configureStore(preloadedState);
  const store = configureStore();
  window.store = store;
  // ReactDOM.render(<h1>Hello!</h1>, document.getElementById('root'));
  ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
});
