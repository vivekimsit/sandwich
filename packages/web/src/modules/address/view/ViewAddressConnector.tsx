import * as React from "react";
import { ViewAddress } from "@sandwich/controller";
import { RouteComponentProps } from "react-router-dom";

import { AddressView } from "./ui/AddressView";

export class ViewAddressConnector extends React.PureComponent<
  RouteComponentProps<{ addressId: string }>
> {
  render() {
    const {
      match: {
        params: { addressId }
      }
    } = this.props;
    return (
      <ViewAddress addressId={addressId}>
        {({ loading, address }) => {
          if (loading || address == null) {
            return <div>...loading</div>;
          }
          return <AddressView address={address} />;
        }}
      </ViewAddress>
    );
  }
}
