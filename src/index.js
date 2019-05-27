import React from "react";
import ReactDOM from "react-dom";
import {
  MuiThemeProvider,
  createMuiTheme,
  responsiveFontSizes,
} from "@material-ui/core/styles";

import App from "./App";

import * as serviceWorker from "./serviceWorker";

let theme = createMuiTheme({
  palette: {
    type: "dark",
  },
  typography: { useNextVariants: true },
  anchor: {
    main: "#fff",
  },
  paperDefault: {
    padding: createMuiTheme().spacing(3, 2),
    margin: "10px auto",
    // maxWidth: "90%",
  },
});

theme = responsiveFontSizes(theme);

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
