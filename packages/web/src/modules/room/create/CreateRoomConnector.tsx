import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { FormikActions } from "formik";
import { withCreateRoom, WithCreateRoom } from "@sandwich/controller";
import { RoomFormValues, RoomForm } from "../shared/RoomForm";

class C extends React.PureComponent<
  RouteComponentProps<{ hotelId: string }> & WithCreateRoom
> {
  submit = async (
    values: RoomFormValues,
    { setSubmitting }: FormikActions<RoomFormValues>
  ) => {
    await this.props.createRoom({
      input: values
    });
    setSubmitting(false);
    this.props.history.push("/hotels");
  };

  render() {
    const {
      match: {
        params: { hotelId }
      }
    } = this.props;
    return <RoomForm hotelId={hotelId} submit={this.submit} />;
  }
}

export const CreateRoomConnector = withCreateRoom(C);
