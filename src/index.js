import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = configureStore(
  { reducer: rootReducer },
  composeEnhancers(applyMiddleware(thunk))
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
