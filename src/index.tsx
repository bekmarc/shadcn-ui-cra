import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './components/theme-provider';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import Views from './routage/routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <Views />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);