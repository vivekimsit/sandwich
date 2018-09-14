// @ts-ignore
import * as React from "react";
import gql from "graphql-tag";
import { Mutation, MutationFn } from "react-apollo";
import {
  UpdateRoomMutation,
  UpdateRoomMutationVariables
} from "../../schemaTypes";

export const updateRoomMutation = gql`
  mutation UpdateRoomMutation($roomId: String!, $input: UpdateRoomInput!) {
    updateRoom(roomId: $roomId, input: $input)
  }
`;

export interface WithUpdateRoom {
  updateRoom: MutationFn<UpdateRoomMutation, UpdateRoomMutationVariables>;
}

interface Props {
  children: (data: WithUpdateRoom) => JSX.Element | null;
}

export class UpdateRoom extends React.PureComponent<Props> {
  render() {
    const { children } = this.props;
    return (
      <Mutation<UpdateRoomMutation, UpdateRoomMutationVariables>
        mutation={updateRoomMutation}
      >
        {mutate => children({ updateRoom: mutate })}
      </Mutation>
    );
  }
}
