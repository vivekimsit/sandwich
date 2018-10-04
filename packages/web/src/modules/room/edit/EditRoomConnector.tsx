import * as React from "react";
import { ViewRoom, UpdateRoom } from "@sandwich/controller";
import { RouteComponentProps } from "react-router-dom";
import { RoomForm, defaultRoomFormValues } from "../shared/RoomForm";
import styled from "styled-components";

import Sidebar from "../../sidebar/Sidebar";

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

export class EditRoomConnector extends React.PureComponent<
  RouteComponentProps<{
    roomId: string;
  }>
> {
  render() {
    const {
      match: {
        params: { roomId }
      }
    } = this.props;
    return (
      <MainWrapper>
        <Sidebar />
        <ContentWrapper>
          <Content>
            <ViewRoom roomId={roomId}>
              {data => {
                if (!data.room) {
                  return <div>...loading</div>;
                }

                const { id: _, hotel: hotel, ...room } = data.room;
                return (
                  <UpdateRoom>
                    {({ updateRoom }) => (
                      <RoomForm
                        initialValues={{
                          ...defaultRoomFormValues,
                          ...room,
                          hotelId: hotel.id
                        }}
                        submit={async values => {
                          const {
                            __typename: ____,
                            hotelId: ______,
                            ...newValues
                          } = values as any;

                          if (newValues.thumbnailUrl) {
                            const parts = newValues.thumbnailUrl.split("/");
                            newValues.thumbnailUrl = parts[parts.length - 1];
                          }

                          await updateRoom({
                            variables: {
                              input: newValues,
                              roomId
                            }
                          });
                          this.props.history.push(`/hotels/${hotel.id}`);
                        }}
                      />
                    )}
                  </UpdateRoom>
                );
              }}
            </ViewRoom>
          </Content>
        </ContentWrapper>
      </MainWrapper>
    );
  }
}
