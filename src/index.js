import React from 'react';
import ReactDOM from 'react-dom/client';
import Routers from './Routes';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routers />
  </React.StrictMode>
);