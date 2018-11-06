import * as React from "react";
import { GridLoader } from "react-spinners";

import { LoadingContainer } from "./style";

interface Props {
  size: number;
}

export const Loading: React.SFC<Props> = props => (
  <LoadingContainer>
    <GridLoader size={props.size || 10} />
  </LoadingContainer>
);
