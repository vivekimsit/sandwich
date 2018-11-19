import gql from "graphql-tag";
import { graphql } from "react-apollo";

import {
  DeleteHotelMutation,
  DeleteHotelMutationVariables
} from "../../schemaTypes";

const deleteHotelMutation = gql`
  mutation DeleteHotelMutation($input: DeleteHotelInput!) {
    deleteHotel(input: $input)
  }
`;

export interface WithDeleteHotel {
  deleteHotel: (variables: DeleteHotelMutationVariables) => void;
}

export const withDeleteHotel: any = graphql<
  any,
  DeleteHotelMutation,
  DeleteHotelMutationVariables,
  WithDeleteHotel
>(deleteHotelMutation, {
  props: ({ mutate }) => ({
    deleteHotel: async variables => {
      if (!mutate) {
        return;
      }

      await mutate({ variables });
    }
  })
});
