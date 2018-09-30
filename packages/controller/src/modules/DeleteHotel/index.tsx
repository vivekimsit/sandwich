import gql from "graphql-tag";
import * as React from "react";
import { Mutation } from "react-apollo";
import { DeleteHotelMutation } from "../../schemaTypes";

const deleteHotelMutation = gql`
  mutation DeleteHotelMutation($id: String!) {
    deleteHotel(id: $id)
  }
`;

interface Props {
  hotelId: string;
  children: (
    data: {
      remove: () => void;
    }
  ) => JSX.Element | null;
}

export const DeleteHotel: React.SFC<Props> = ({ hotelId, children }) => (
  <Mutation<DeleteHotelMutation, {}> mutation={deleteHotelMutation}>
    {(mutate, { client }) =>
      children({
        remove: async () => {
          await mutate({ variables: { id: hotelId } });
          await client.resetStore();
        }
      })
    }
  </Mutation>
);
