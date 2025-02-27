import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import AntDesignProvider from '@context/antd/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AntDesignProvider>
      <App />
    </AntDesignProvider>
  </React.StrictMode>,
);
