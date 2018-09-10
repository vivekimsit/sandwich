// @ts-ignore
import * as React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

import {
  CreateRoomMutation,
  CreateRoomMutationVariables
} from "../../schemaTypes";

export const createRoomMutation = gql`
  mutation CreateRoomMutation($input: CreateRoomInput!) {
    createRoom(input: $input)
  }
`;

export interface WithCreateAddress {
  createRoom: (variables: CreateRoomMutationVariables) => void;
}

export const withCreateAddress: any = graphql<
  any,
  CreateRoomMutation,
  CreateRoomMutationVariables,
  WithCreateAddress
>(createRoomMutation, {
  props: ({ mutate }) => ({
    createRoom: async variables => {
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
