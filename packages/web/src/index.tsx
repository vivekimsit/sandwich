import * as React from "react";
import * as ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";

import registerServiceWorker from "./registerServiceWorker";
import { client } from "./apollo";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
