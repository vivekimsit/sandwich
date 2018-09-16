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
  ) {
    createHotel(
      input: { picture: $picture, name: $name, description: $description }
    )
  }
`;

export interface WithCreateHotel {
  createHotel: (variables: CreateHotelMutationVariables) => void;
}

export const withCreateHotel: any = graphql<
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

      await mutate({ variables });
    }
  })
});
