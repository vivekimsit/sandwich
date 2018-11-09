// @ts-ignore
import * as React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import {
  ViewHotelAddressQuery_viewHotelAddress,
  ViewHotelAddressQuery,
  ViewHotelAddressQueryVariables
} from "../../schemaTypes";

export const viewHotelAddressQuery = gql`
  query ViewHotelAddressQuery($id: String!) {
    viewHotelAddress(id: $id) {
      id
      lat
      lng
      line1
      line2
      state
      city
      country
    }
  }
`;

export interface WithViewHotelAddress {
  address: ViewHotelAddressQuery_viewHotelAddress | null;
  loading: boolean;
}

interface Props {
  hotelId: string;
  children: (data: WithViewHotelAddress) => JSX.Element | null;
}

export class ViewHotelAddress extends React.PureComponent<Props> {
  render() {
    const { children, hotelId } = this.props;
    return (
      <Query<ViewHotelAddressQuery, ViewHotelAddressQueryVariables>
        query={viewHotelAddressQuery}
        variables={{ id: hotelId }}
      >
        {({ data, loading }) => {
          let address: ViewHotelAddressQuery_viewHotelAddress | null = null;
          if (data && data.viewHotelAddress) {
            address = data.viewHotelAddress;
          }
          return children({ address, loading });
        }}
      </Query>
    );
  }
}
