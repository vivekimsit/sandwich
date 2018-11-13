import styled from "styled-components";

import { FlexCol } from "../../../style";
import { theme } from "../../../theme";

export const StyledDropdown = styled(FlexCol)`
  background-color: transparent;
  position: absolute;
  width: 200px;
  top: 100%;
  right: 0px;
  z-index: 10000;
  padding-top: 8px;
  color: ${theme.text.default};
`;

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 640px;
  overflow: hidden;
  align-items: stretch;
  display: inline-block;
  border-radius: 8px;
`;
