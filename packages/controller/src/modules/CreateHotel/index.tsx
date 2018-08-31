// @ts-ignore
import * as React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

import {
  CreateHotelMutation,
  CreateHotelMutationVariables
} from "../../schemaTypes";

export const createHotelMutation = gql`
  mutation CreateHotelMutation(
    $picture: Upload
    $name: String!
    $description: String!
    $address: AddressInput!
  ) {
    createHotel(
      input: {
        picture: $picture
        name: $name
        description: $description
        address: $address
      }
    )
  }
`;

export interface WithCreateHotel {
  createListing: (variables: CreateHotelMutationVariables) => void;
}

export const withCreateListing = graphql<
  any,
  CreateHotelMutation,
  CreateHotelMutationVariables,
  WithCreateHotel
>(createHotelMutation, {
  props: ({ mutate }) => ({
    createHotel: async variables => {
      if (!mutate) {
        return;
      }

      const response = await mutate({
        variables
      });

      console.log(response);
    }
  })
});
