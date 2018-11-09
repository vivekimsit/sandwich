import * as React from "react";

import { UpdateHotel } from "@sandwich/controller";
import { HotelForm, defaultHotelFormValues } from "../../shared/HotelForm";
import { SectionsContainer, Column, SectionCard } from "../../../shared/style";
import AddressList from "./AddressList";

interface Props {
  hotel: any;
}

class HotelSetting extends React.PureComponent<Props> {
  render() {
    const { hotel } = this.props;
    return (
      <SectionsContainer>
        <Column>
          <UpdateHotel>
            {({ updateHotel }) => (
              <SectionCard>
                <HotelForm
                  initialValues={{ ...defaultHotelFormValues, ...hotel }}
                  submit={async values => {
                    console.log(values);
                  }}
                />
              </SectionCard>
            )}
          </UpdateHotel>
        </Column>

        <Column>
          <AddressList hotelId={hotel.id} />
        </Column>
      </SectionsContainer>
    );
  }
}

export default HotelSetting;
