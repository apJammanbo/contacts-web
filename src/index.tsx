import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'reset-css';
import { createGlobalStyle } from 'styled-components';
import { RecoilRoot } from 'recoil';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    min-width: 600px;
    overflow: hidden;
    overflow-x: auto;
  }

  * {
    box-sizing: border-box;
  }

  button {
    cursor: pointer;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);
