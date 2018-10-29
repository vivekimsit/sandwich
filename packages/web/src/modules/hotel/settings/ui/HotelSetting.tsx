import * as React from "react";
import { SectionsContainer, Column } from "../style";

import { ViewHotel, UpdateHotel } from "@sandwich/controller";
import { HotelForm, defaultHotelFormValues } from "../../shared/HotelForm";

interface Props {
  hotelId: string;
}

class C extends React.PureComponent<Props> {
  render() {
    const { hotelId } = this.props;
    return (
      <SectionsContainer>
        <Column>
          <ViewHotel hotelId={hotelId}>
            {data => {
              if (!data.hotel) {
                return <div>Loading</div>;
              }
              const { id: _, owner: __, address: ___, ...rest } = data.hotel;
              return (
                <UpdateHotel>
                  {({ updateHotel }) => (
                    <HotelForm
                      initialValues={{ ...defaultHotelFormValues, ...rest }}
                      submit={async values => {
                        console.log(values);
                      }}
                    />
                  )}
                </UpdateHotel>
              );
            }}
          </ViewHotel>
        </Column>
      </SectionsContainer>
    );
  }
}

export const HotelSetting = C;
