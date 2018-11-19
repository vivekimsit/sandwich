import * as React from "react";

import {
  UpdateHotel,
  withDeleteHotel,
  WithDeleteHotel
} from "@sandwich/controller";
import { HotelForm, defaultHotelFormValues } from "../../shared/HotelForm";
import { SectionsContainer, Column, SectionCard } from "../../../shared/style";
import AddressList from "./AddressList";

interface Props {
  hotel: any;
}

class HotelSetting extends React.PureComponent<Props & WithDeleteHotel> {
  deleteHotel = async hotelId => {
    await this.props.deleteHotel({ input: { id: hotelId } });
    window.location.href = "/hotels";
  };

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
                  onDelete={this.deleteHotel}
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

export default withDeleteHotel(HotelSetting);
