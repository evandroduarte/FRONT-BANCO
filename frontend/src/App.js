import React, {useState} from 'react';
/*import './global.css';*/
import GlobalStyle from './styles';
import { BrowserRouter } from 'react-router-dom'

import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
        <Routes />
    </BrowserRouter>
  );
}

export default App;