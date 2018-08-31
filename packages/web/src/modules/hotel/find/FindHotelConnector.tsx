import * as React from "react";
import { Card } from "antd";
import { withFindHotels, WithFindHotels } from "@sandwich/controller";
import { Link } from "react-router-dom";

const { Meta } = Card;

class C extends React.PureComponent<WithFindHotels> {
  render() {
    const { hotels, loading } = this.props;
    return (
      <div>
        {loading && <div>...loading</div>}
        {hotels.map((l: any) => (
          <Card
            key={`${l.id}-card`}
            hoverable={true}
            style={{ width: 240 }}
            cover={l.pictureUrl && <img alt="example" src={l.pictureUrl} />}
          >
            <Link to={`/listing/${l.id}`}>
              <Meta title={l.name} description={l.owner.email} />
            </Link>
          </Card>
        ))}
      </div>
    );
  }
}
export const FindHotelsConnector = withFindHotels(C);
