import React from 'react';
import ReactDOM from 'react-dom/client';

import { ElectionsApp } from './ElectionsApp';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ElectionsApp />
  </React.StrictMode>
);
