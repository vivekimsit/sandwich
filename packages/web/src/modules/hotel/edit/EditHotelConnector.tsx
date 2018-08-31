import * as React from "react";
import { ViewHotel, updateHotel } from "@sandwich/controller";
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
          if (!data.listing) {
            return <div>...loading</div>;
          }

          const { id: _, owner: ___, ...listing } = data.listing;

          return (
            <UpdateHotel>
              {({ updateHotel }) => (
                <HotelForm
                  initialValues={{
                    ...defaultHotelFormValues,
                    ...listing
                  }}
                  submit={async values => {
                    const { __typename: ____, ...newValues } = values as any;

                    if (newValues.pictureUrl) {
                      const parts = newValues.pictureUrl.split("/");
                      newValues.pictureUrl = parts[parts.length - 1];
                    }

                    const result = await updateHotel({
                      variables: {
                        input: newValues,
                        hotelId
                      }
                    });

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
