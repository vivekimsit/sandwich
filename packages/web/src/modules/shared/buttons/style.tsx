import styled, { css } from "styled-components";

import theme from "../../../theme";

const Transition = {
  hover: {
    on: "all 0.2s ease-in",
    off: "all 0.2s ease-out"
  },
  reaction: {
    on: "all 0.15s ease-in",
    off: "all 0.1s ease-out"
  },
  dropdown: {
    off: "all 0.35s ease-out"
  }
};

interface LabelProps {
  loading?: boolean;
  hasIcon?: string;
}

export const Label = styled.span<LabelProps>`
  display: block;
  flex: 0 0 auto;
  line-height: inherit;
  color: inherit;
  ${props => (props.loading && !props.hasIcon ? "opacity: 0;" : "opacity: 1;")};
  align-self: center;
  margin: auto;
`;

interface BaseButtonProps {
  large?: boolean;
  icon?: string;
  disabled?: boolean;
}

const baseButton = css<BaseButtonProps>`
  display: flex;
  flex: none;
  align-self: center;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: 600;
  white-space: nowrap;
  word-break: keep-all;
  transition: "all 0.2s ease-out";
  cursor: pointer;
  font-size: ${props => (props.large ? "18px" : "14px")};
  line-height: 1;
  position: relative;
  text-align: center;
  padding: ${props =>
    props.icon
      ? props.large
        ? "8px 12px"
        : "4px 8px"
      : props.large
        ? "16px 32px"
        : "12px 16px"};
  &:hover {
    transition: all 0.2s ease-in;
    opacity: ${props => (props.disabled ? "0.5" : "1")};
  }
  /* if an icon and label are both present, add space around the label*/
  div + span,
  span + span {
    margin: 0 8px;
  }
`;

export const StyledSolidButton = styled.button`
  ${baseButton} background-color: ${props =>
  props.disabled ? props.theme.bg.inactive : "black"};
  color: ${theme.text.reverse};
  &:hover {
    background-color: ${props =>
      props.disabled ? props.theme.bg.inactive : "black"};
  }
  &:active {
    box-shadow: ${props => (props.disabled ? "none" : "black")};
  }
`;

export const StyledFauxOutlineButton = styled.span`
  ${baseButton} box-shadow: inset 0 0 0 1px;
  color: #fff;
  transition: ${Transition.hover.on};
  &:hover {
    background-color: transparent;
    color: #fff;
    box-shadow: inset 0 0 0 1px #000;
    transition: ${Transition.hover.on};
  }
`;
