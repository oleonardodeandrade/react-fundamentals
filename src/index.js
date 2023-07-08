import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import GlobalStyle from './styles/global';

render(
  <>
  <App />
  <GlobalStyle />
  </>,
  document.getElementById('root'),
);
