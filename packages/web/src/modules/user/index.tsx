import * as React from "react";
import { RouteComponentProps } from "react-router-dom";

import { withMeQuery, WithMeQuery } from "@sandwich/controller";
import { Loading } from "../shared/loading";
import { AppViewWrapper } from "../../style";
import { Content, Grid } from "./style";

class C extends React.PureComponent<
  WithMeQuery & RouteComponentProps<{ username: string }>
> {
  render() {
    const { me, loading } = this.props;
    console.log(this.props);
    if (loading) {
      return <Loading size={20} />;
    }
    return (
      <AppViewWrapper>
        <Grid id="main">
          <Content>
            <div>Hello {me.email}</div>
          </Content>
        </Grid>
      </AppViewWrapper>
    );
  }
}

export const UserView = withMeQuery(C);
