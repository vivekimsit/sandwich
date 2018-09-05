// @ts-ignore
import * as React from "react";
import gql from "graphql-tag";
import { Mutation, MutationFn } from "react-apollo";
import {
  UpdateHotelMutation,
  UpdateHotelMutationVariables
} from "../../schemaTypes";

export const updateHotelMutation = gql`
  mutation UpdateHotelMutation($hotelId: String!, $input: UpdateHotelInput!) {
    updateHotel(hotelId: $hotelId, input: $input)
  }
`;

export interface WithUpdateHotel {
  updateHotel: MutationFn<UpdateHotelMutation, UpdateHotelMutationVariables>;
}

interface Props {
  children: (data: WithUpdateHotel) => JSX.Element | null;
}

export class UpdateHotel extends React.PureComponent<Props> {
  render() {
    const { children } = this.props;
    return (
      <Mutation<UpdateHotelMutation, UpdateHotelMutationVariables>
        mutation={updateHotelMutation}
      >
        {mutate => {
          return children({
            updateHotel: mutate
          });
        }}
      </Mutation>
    );
  }
}
