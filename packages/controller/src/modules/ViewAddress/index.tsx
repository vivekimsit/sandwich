// @ts-ignore
import * as React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import {
  ViewAddressQuery_viewAddress,
  ViewAddressQuery,
  ViewAddressQueryVariables
} from "../../schemaTypes";

export const viewAddressQuery = gql`
  query ViewAddressQuery($id: String!) {
    viewAddress(id: $id) {
      id
      lat
      lng
      line1
      line2
      state
      city
      country
      hotel {
        id
        name
      }
    }
  }
`;

export interface WithViewAddress {
  address: ViewAddressQuery_viewAddress | null;
  loading: boolean;
}

interface Props {
  addressId: string;
  children: (data: WithViewAddress) => JSX.Element | null;
}

export class ViewAddress extends React.PureComponent<Props> {
  render() {
    const { children, addressId } = this.props;
    return (
      <Query<ViewAddressQuery, ViewAddressQueryVariables>
        query={viewAddressQuery}
        variables={{ id: addressId }}
      >
        {({ data, loading }) => {
          let address: ViewAddressQuery_viewAddress | null = null;

          if (data && data.viewAddress) {
            address = data.viewAddress;
          }

          return children({ address, loading });
        }}
      </Query>
    );
  }
}
