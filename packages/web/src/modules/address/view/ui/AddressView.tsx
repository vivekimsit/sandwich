import * as React from "react";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

interface Props {
  address: any;
}

export class AddressView extends React.PureComponent<Props> {
  render() {
    const {
      address,
      address: { hotel }
    } = this.props;
    return (
      <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <Typography variant="headline">{address.name}</Typography>
        <Typography variant="subheading">{address.description}</Typography>
        <Typography variant="subheading">{address.price}</Typography>
        <Link to={`/hotels/${hotel.id}/addresss/${address.id}/edit`}>
          <Button>Edit</Button>
        </Link>
      </div>
    );
  }
}
