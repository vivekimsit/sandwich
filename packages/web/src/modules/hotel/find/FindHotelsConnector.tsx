import * as React from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";

import { withFindHotels, WithFindHotels } from "@sandwich/controller";
import { HotelList } from "./HotelList";
import { AppViewWrapper } from "../../../style";
import { Content } from "./style";

const MyLink = props => <Link to="/hotel/create" {...props} />;

class C extends React.PureComponent<WithFindHotels> {
  render() {
    const { hotels, loading } = this.props;
    return (
      <AppViewWrapper id="main">
        <Content>
          {loading && <div>...loading</div>}
          <HotelList hotels={hotels} />
          <Button
            variant="fab"
            color="secondary"
            component={MyLink}
            style={{
              position: "fixed",
              bottom: 10 * 2,
              right: 10 * 2
            }}
          >
            <AddIcon />
          </Button>
        </Content>
      </AppViewWrapper>
    );
  }
}

export const FindHotelsConnector = withFindHotels(C);
