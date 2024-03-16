import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { App } from './components/App';
import { ExchangeRateProvider } from './context/ExchangeRateContext';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ExchangeRateProvider>
    <App />
    </ExchangeRateProvider>
  </React.StrictMode>
);


reportWebVitals();
