import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ThemeContextProvider from './theme/ThemeProvider';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
