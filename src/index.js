import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import './global.css';

if (process.env.NODE_ENV === 'development') {
  import('./mocks/browser').then((worker) => {
    worker.default.start();
  });
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
