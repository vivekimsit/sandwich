import * as React from "react";

import { UpdateRoom } from "@sandwich/controller";
import { RoomForm, defaultRoomFormValues } from "../../shared/RoomForm";
import { SectionsContainer, Column, SectionCard } from "../../../shared/style";

interface Props {
  room: any;
}

class RoomSettings extends React.PureComponent<Props> {
  render() {
    const { room } = this.props;
    return (
      <SectionsContainer>
        <Column>
          <UpdateRoom>
            {({ updateRoom }) => (
              <SectionCard>
                <RoomForm
                  initialValues={{ ...defaultRoomFormValues, ...room }}
                  submit={async values => {
                    console.log(values);
                  }}
                />
              </SectionCard>
            )}
          </UpdateRoom>
        </Column>
      </SectionsContainer>
    );
  }
}

export default RoomSettings;
