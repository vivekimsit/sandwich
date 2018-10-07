import gql from "graphql-tag";
import * as React from "react";
import { Mutation } from "react-apollo";
import { DeleteRoomMutation } from "../../schemaTypes";

const deleteRoomMutation = gql`
  mutation DeleteRoomMutation($id: String!) {
    deleteRoom(id: $id)
  }
`;

interface Props {
  roomId: string;
  children: (
    data: {
      remove: () => void;
    }
  ) => JSX.Element | null;
}

export const DeleteRoom: React.SFC<Props> = ({ roomId, children }) => (
  <Mutation<DeleteRoomMutation, {}> mutation={deleteRoomMutation}>
    {(mutate, { client }) =>
      children({
        remove: async () => {
          await mutate({ variables: { id: roomId } });
          await client.resetStore();
        }
      })
    }
  </Mutation>
);
