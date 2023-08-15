import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './pages/Home/index';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <HomePage />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();