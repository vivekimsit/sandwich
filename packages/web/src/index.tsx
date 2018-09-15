import * as React from "react";
import * as ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";

import registerServiceWorker from "./registerServiceWorker";
import { client } from "./apollo";
import "./index.css";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Routes } from "./routes";

const theme = createMuiTheme();

ReactDOM.render(
  <ApolloProvider client={client}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Routes />
    </MuiThemeProvider>
  </ApolloProvider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
