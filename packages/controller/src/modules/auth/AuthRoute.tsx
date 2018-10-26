import * as React from "react";
import { graphql, ChildProps } from "react-apollo";
import { RouteProps, Route, RouteComponentProps } from "react-router";
import gql from "graphql-tag";
import { MeQuery, MeQuery_me } from "../../schemaTypes";

interface Props {
  component: React.ComponentClass;
  fallbackComponent: React.ComponentClass;
}

const meQuery = gql`
  query MeQuery {
    me {
      email
    }
  }
`;

class C extends React.PureComponent<ChildProps<Props & RouteProps, MeQuery>> {
  renderRoute = (routeProps: RouteComponentProps<{}>) => {
    const { data, component, fallbackComponent } = this.props;

    if (!data || data.loading) {
      // loading screen
      return null;
    }

    const Component = !data.me ? fallbackComponent : component;
    return <Component {...routeProps} />;
  };

  render() {
    const { data: _, component: __, ...rest } = this.props;
    return <Route {...rest} render={this.renderRoute} />;
  }
}

export const AuthRoute: any = graphql<Props & RouteProps, MeQuery>(meQuery)(C);

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
