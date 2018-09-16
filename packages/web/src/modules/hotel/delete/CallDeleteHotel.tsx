import * as React from "react";

interface Props {
  remove: () => void;
  onFinish: () => void;
}

export class CallDeleteHotel extends React.PureComponent<Props> {
  async componentDidMount() {
    await this.props.remove();
    this.props.onFinish();
  }

  render() {
    return null;
  }
}
