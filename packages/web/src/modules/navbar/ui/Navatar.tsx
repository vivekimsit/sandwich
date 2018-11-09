import * as React from "react";

import { Avatar } from "antd";

interface Props {
  user: any;
}

export class Navatar extends React.PureComponent<Props> {
  render() {
    const {
      user: { email }
    } = this.props;
    return <Avatar icon="user">{email}</Avatar>;
  }
}
