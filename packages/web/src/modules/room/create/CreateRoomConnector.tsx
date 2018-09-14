import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { FormikActions } from "formik";
import { withCreateRoom, WithCreateRoom } from "@sandwich/controller";
import {
  RoomFormValues,
  RoomForm,
  defaultRoomFormValues
} from "../shared/RoomForm";

class C extends React.PureComponent<
  RouteComponentProps<{ hotelId: string }> & WithCreateRoom
> {
  submit = async (
    values: RoomFormValues,
    { setSubmitting }: FormikActions<RoomFormValues>
  ) => {
    const { thumbnailUrl: _, ...v } = values;
    await this.props.createRoom({
      input: v
    });
    setSubmitting(false);
    this.props.history.push(`/hotels/${values.hotelId}`);
  };

  render() {
    const {
      match: {
        params: { hotelId }
      }
    } = this.props;
    return (
      <RoomForm
        initialValues={{ ...defaultRoomFormValues, hotelId }}
        submit={this.submit}
      />
    );
  }
}

export const CreateRoomConnector = withCreateRoom(C);
