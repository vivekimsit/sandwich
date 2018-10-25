import * as React from "react";

import { Page } from "./style";
import Home from "./home";
import { NavBarConnector } from "./navbar";
import About from "./about";

interface Props {
  match: any;
}

class Pages extends React.Component<Props> {
  renderPage() {
    switch (this.props.match.path) {
      case "/":
        return <Home />;
      case "/about":
        return <About />;
      default: {
        return <Home />;
      }
    }
  }

  render() {
    const {
      match: { path }
    } = this.props;

    console.log(path);

    return (
      <Page id="main">
        <NavBarConnector />
        {this.renderPage()}
      </Page>
    );
  }
}

export default Pages;
