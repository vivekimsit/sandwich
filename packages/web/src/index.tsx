import * as React from "react";
import * as ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";

import registerServiceWorker from "./registerServiceWorker";
import { client } from "./apollo";
import "./index.css";
import App from "./App";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme();

ReactDOM.render(
  <ApolloProvider client={client}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </ApolloProvider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
