import * as React from "react";
import { graphql, ChildProps } from "react-apollo";
import { RouteProps, Route, RouteComponentProps, Redirect } from "react-router";
import gql from "graphql-tag";
import { MeQuery, MeQuery_me } from "../../schemaTypes";

type Props = RouteProps;

const meQuery = gql`
  query MeQuery {
    me {
      email
    }
  }
`;

class C extends React.PureComponent<ChildProps<Props, MeQuery>> {
  renderRoute = (routeProps: RouteComponentProps<{}>) => {
    const { data, component } = this.props;

    if (!data || data.loading) {
      // loading screen
      return null;
    }

    if (!data.me) {
      // user not logged in
      return (
        <Redirect
          to={{
            pathname: "/login",
            state: { next: routeProps.location.pathname }
          }}
        />
      );
    }

    const Component = component as any;

    return <Component {...routeProps} />;
  };

  render() {
    const { data: _, component: __, ...rest } = this.props;
    return <Route {...rest} render={this.renderRoute} />;
  }
}

export const AuthRoute: any = graphql<Props, MeQuery>(meQuery)(C);

export interface WithMeQuery {
  me: MeQuery_me;
  loading: boolean;
}

export const withMeQuery: any = graphql<any, MeQuery, {}, WithMeQuery>(
  meQuery,
  {
    props: ({ data }) => {
      let me: MeQuery_me = { email: "" };

      if (data && !data.loading && data.me) {
        me = data.me;
      }
      return { me, loading: data ? data.loading : true };
    }
  }
);
