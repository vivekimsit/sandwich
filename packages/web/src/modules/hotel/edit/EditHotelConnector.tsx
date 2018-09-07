import * as React from "react";
import { ViewHotel, UpdateHotel } from "@sandwich/controller";
import { RouteComponentProps } from "react-router-dom";
import { HotelForm, defaultHotelFormValues } from "../shared/HotelForm";

export class EditHotelConnector extends React.PureComponent<
  RouteComponentProps<{
    hotelId: string;
  }>
> {
  render() {
    const {
      match: {
        params: { hotelId }
      }
    } = this.props;
    return (
      <ViewHotel hotelId={hotelId}>
        {data => {
          console.log(data);
          if (!data.hotel) {
            return <div>...loading</div>;
          }

          const { id: _, owner: ___, ...hotel } = data.hotel;
          console.log(hotel);
          return (
            <UpdateHotel>
              {({ updateHotel }) => (
                <HotelForm
                  initialValues={{
                    ...defaultHotelFormValues,
                    ...hotel
                  }}
                  submit={async values => {
                    const { __typename: ____, ...newValues } = values as any;

                    if (newValues.thumbnailUrl) {
                      const parts = newValues.thumbnailUrl.split("/");
                      newValues.thumbnailUrl = parts[parts.length - 1];
                    }

                    const result = await updateHotel({
                      variables: {
                        input: newValues,
                        hotelId
                      }
                    });
                    this.props.history.push("/hotels");
                    console.log(result);
                  }}
                />
              )}
            </UpdateHotel>
          );
        }}
      </ViewHotel>
    );
  }
}
