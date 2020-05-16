// libraries
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
// components
import App from './App';
// styles
import 'styles/bootstrap/bootstrap.css';
import 'styles/scss/index.scss';
// services
import store from 'reducers/config/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
