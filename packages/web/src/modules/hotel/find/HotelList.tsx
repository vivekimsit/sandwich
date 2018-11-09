import * as React from "react";
import { Card } from "antd";

import { HotelListWrapper, Container } from "./style";

const { Meta } = Card;

interface Props {
  hotels: any[];
}

export class HotelList extends React.PureComponent<Props> {
  render() {
    const { hotels } = this.props;
    return (
      <HotelListWrapper>
        {hotels.map((h: any) => (
          <Container key={`${h.id}-card`} to={`/hotels/${h.id}`}>
            <Card
              cover={<img src={h.thumbnailUrl} />}
              style={{
                display: "flex",
                flexDirection: "column",
                flex: "auto",
                alignItems: "stretch"
              }}
            >
              <Meta title={h.name} description={h.description} />
            </Card>
          </Container>
        ))}
      </HotelListWrapper>
    );
  }
}
