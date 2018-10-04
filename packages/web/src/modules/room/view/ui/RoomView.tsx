import * as React from "react";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

import Sidebar from "../../../sidebar/Sidebar";

const MainWrapper = styled.main`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  overflow-y: hidden;
  flex: auto;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  justify-content: flex-start;
  overflow-y: hidden;
  flex: 1 1 auto;
`;

const Content = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: 100%;
  width: 100%;
  max-height: 100%;
  position: relative;
  flex: 1 1 auto;
`;

interface Props {
  room: any;
}

export class RoomView extends React.PureComponent<Props> {
  render() {
    const { room } = this.props;
    return (
      <MainWrapper>
        <Sidebar />
        <ContentWrapper>
          <Content>
            <Typography variant="headline">{room.name}</Typography>
            <Typography variant="subheading">{room.description}</Typography>
            <Typography variant="subheading">{room.price}</Typography>
            <Link to={`/rooms/${room.id}/edit`}>
              <Button>Edit</Button>
            </Link>
          </Content>
        </ContentWrapper>
      </MainWrapper>
    );
  }
}
