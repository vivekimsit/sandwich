import * as React from "react";
import { withMeQuery, WithMeQuery } from "@sandwich/controller";
import { RouteComponentProps } from "react-router-dom";
import { NavBar } from "./ui/NavBar";

class C extends React.PureComponent<WithMeQuery & RouteComponentProps<{}>> {
  render() {
    const { me, loading } = this.props;
    const path = this.props.location.pathname;

    if (path === "/" && (!me || !me.email)) {
      return null;
    }

    if (path === "/about") {
      return null;
    }

    if (loading) {
      return <div>loading...</div>;
    }
    console.log(this.props);
    return <NavBar currentUser={me} />;
  }
}

export const NavBarConnector = withMeQuery(C);
