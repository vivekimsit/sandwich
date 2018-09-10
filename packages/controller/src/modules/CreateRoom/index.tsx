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

export interface WithCreateRoom {
  createRoom: (variables: CreateRoomMutationVariables) => void;
}

export const withCreateRoom: any = graphql<
  any,
  CreateRoomMutation,
  CreateRoomMutationVariables,
  WithCreateRoom
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
