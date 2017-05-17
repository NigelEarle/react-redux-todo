import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import TodoRouter from './routes';
import configureStore from './store/store';
import './styles/app.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <TodoRouter />
  </Provider>,
  document.getElementById('container'),
);
