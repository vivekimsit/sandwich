// @ts-ignore
import * as React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import {
  ViewHotelQuery_viewHotel,
  ViewHotelQuery,
  ViewHotelQueryVariables
} from "../../schemaTypes";

export const viewHotelQuery = gql`
  query ViewHotelQuery($id: String!) {
    viewHotel(id: $id) {
      id
      name
      description
      thumbnailUrl
      owner {
        id
        email
      }
      address {
        lat
        lng
      }
      rooms {
        name
        description
        price
        beds
        thumbnailUrl
      }
    }
  }
`;

export interface WithViewHotel {
  hotel: ViewHotelQuery_viewHotel | null;
  loading: boolean;
}

interface Props {
  hotelId: string;
  children: (data: WithViewHotel) => JSX.Element | null;
}

export class ViewHotel extends React.PureComponent<Props> {
  render() {
    const { children, hotelId } = this.props;
    return (
      <Query<ViewHotelQuery, ViewHotelQueryVariables>
        query={viewHotelQuery}
        variables={{ id: hotelId }}
      >
        {({ data, loading }) => {
          let hotel: ViewHotelQuery_viewHotel | null = null;

          if (data && data.viewHotel) {
            hotel = data.viewHotel;
          }

          return children({
            hotel,
            loading
          });
        }}
      </Query>
    );
  }
}
