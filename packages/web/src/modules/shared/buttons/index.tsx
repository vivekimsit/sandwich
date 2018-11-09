import * as React from "react";

import { StyledSolidButton, StyledFauxOutlineButton, Label } from "./style";

interface ButtonProps {
  loading?: boolean;
  disabled?: boolean;
  large?: boolean;
  color?: string;
  gradientTheme?: string;
  icon?: string;
  children?: any;
}

export const Button: React.SFC<ButtonProps> = (props: ButtonProps) => (
  <StyledSolidButton disabled={props.loading} {...props}>
    {props.icon ? (
      props.loading ? (
        <span>Spinner here</span>
      ) : (
        <span>Icon here</span>
      )
    ) : (
      ""
    )}
    {props.loading && !props.icon && <span>Spinner here</span>}
    <Label loading={props.loading} hasIcon={props.icon}>
      {props.children}
    </Label>
  </StyledSolidButton>
);

export const FauxOutlineButton: React.SFC<ButtonProps> = (
  props: ButtonProps
) => (
  <StyledFauxOutlineButton disabled={props.loading} {...props}>
    {props.icon ? (
      props.loading ? (
        <span>Spinner here</span>
      ) : (
        <span>Icon here</span>
      )
    ) : (
      ""
    )}
    {props.loading && !props.icon && <span>Spinner here</span>}
    <Label loading={props.loading} hasIcon={props.icon}>
      {props.children}
    </Label>
  </StyledFauxOutlineButton>
);
