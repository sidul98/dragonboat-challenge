import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { MuiThemeProvider } from "@material-ui/core/styles";
import App from "./App";
import store from "./app/store";
import * as serviceWorker from "./serviceWorker";
import "./index.css";

import theme from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
