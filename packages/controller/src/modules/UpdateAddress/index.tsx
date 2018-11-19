// @ts-ignore
import * as React from "react";
import gql from "graphql-tag";
import { Mutation, MutationFn } from "react-apollo";
import {
  UpdateAddressMutation,
  UpdateAddressMutationVariables
} from "../../schemaTypes";

export const updateAddressMutation = gql`
  mutation UpdateAddressMutation($input: UpdateAddressInput!) {
    updateAddress(input: $input)
  }
`;

export interface WithUpdateAddress {
  updateAddress: MutationFn<
    UpdateAddressMutation,
    UpdateAddressMutationVariables
  >;
}

interface Props {
  children: (data: WithUpdateAddress) => JSX.Element | null;
}

export class UpdateAddress extends React.PureComponent<Props> {
  render() {
    const { children } = this.props;
    return (
      <Mutation<UpdateAddressMutation, UpdateAddressMutationVariables>
        mutation={updateAddressMutation}
      >
        {mutate => children({ updateAddress: mutate })}
      </Mutation>
    );
  }
}
