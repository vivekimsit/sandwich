import * as React from "react";
import { withMeQuery, WithMeQuery } from "@sandwich/controller";

import { NavBar } from "./navbar";

class C extends React.PureComponent<WithMeQuery> {
  render() {
    const { me, loading } = this.props;
    if (loading) {
      return <div>loading...</div>;
    }
    return <NavBar currentUser={me} />;
  }
}

export const NavBarConnector = withMeQuery(C);
