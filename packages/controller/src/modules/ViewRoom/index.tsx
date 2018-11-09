// @ts-ignore
import * as React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import {
  ViewRoomQuery_viewRoom,
  ViewRoomQuery,
  ViewRoomQueryVariables
} from "../../schemaTypes";

export const viewRoomQuery = gql`
  query ViewRoomQuery($id: String!) {
    viewRoom(id: $id) {
      id
      name
      category
      description
      price
      beds
      thumbnailUrl
      hotel {
        id
        name
      }
    }
  }
`;

export interface WithViewRoom {
  room: ViewRoomQuery_viewRoom | null;
  loading: boolean;
}

interface Props {
  roomId: string;
  children: (data: WithViewRoom) => JSX.Element | null;
}

export class ViewRoom extends React.PureComponent<Props> {
  render() {
    const { children, roomId } = this.props;
    return (
      <Query<ViewRoomQuery, ViewRoomQueryVariables>
        query={viewRoomQuery}
        variables={{ id: roomId }}
      >
        {({ data, loading }) => {
          let room: ViewRoomQuery_viewRoom | null = null;

          if (data && data.viewRoom) {
            room = data.viewRoom;
          }

          return children({ room, loading });
        }}
      </Query>
    );
  }
}
