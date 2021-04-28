/**
 * @author Aldi Mustafri
 * @email aldimustafri@live.com
 * @create date 2020-04-23 00:14:33
 * @modify date 2020-04-23 00:14:33
 * @desc [description]
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/core/styles";

ReactDOM.render(
  <ThemeProvider theme={theme}>
<CssBaseline>
  <App/>
</CssBaseline>
  </ThemeProvider>,
  document.querySelector('#root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
