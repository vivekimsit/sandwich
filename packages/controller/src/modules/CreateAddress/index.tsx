// @ts-ignore
import * as React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

import {
  CreateAddressMutation,
  CreateAddressMutationVariables
} from "../../schemaTypes";

export const createAddressMutation = gql`
  mutation CreateAddressMutation($input: CreateAddressInput!) {
    createAddress(input: $input)
  }
`;

export interface WithCreateAddress {
  createAddress: (variables: CreateAddressMutationVariables) => void;
}

export const withCreateAddress: any = graphql<
  any,
  CreateAddressMutation,
  CreateAddressMutationVariables,
  WithCreateAddress
>(createAddressMutation, {
  props: ({ mutate }) => ({
    createAddress: async variables => {
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
